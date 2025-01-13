from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import requests
import os
from dotenv import load_dotenv
# Initialize FastAPI app
app = FastAPI()

# Add CORS middleware
origins = ["http://localhost:5173"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory storage for revision data
class RevisionStore:
    def __init__(self):
        self.revision_data = None

    def set_revision(self, data: str):
        self.revision_data = data

    def get_revision(self) -> Optional[str]:
        return self.revision_data


revision_store = RevisionStore()

# Request model for /guide endpoint
class GuideRequest(BaseModel):
    subject: str
    qualification: str
    additional_context: Optional[str] = None  # Updated to match frontend JSON field


@app.post("/guide")
async def generate_guide(request: GuideRequest):
    try:
        # Construct prompt
        prompt = (
            f"Generate an array of guide sentences like formulas or ideas for the "
            f"{request.subject} subject for {request.qualification}. "
        )
        if request.additional_context:
            prompt += f"Additional context: {request.additional_context}. "

        prompt += (
            f"Give it to me in the form of an array of points, and it must contain 5-8 points. "
            f"Only provide me the array; don't provide me any other information."
        )

        # Groq API Endpoint and headers


# Load .env.local file
        load_dotenv(dotenv_path=".env.local")

        groq_api_url = "https://api.groq.com/v1/chat/completions"
        groq_api_key = os.getenv("GROQ_API_KEY")

        if not groq_api_key:
            raise HTTPException(status_code=500, detail="GROQ_API_KEY is not set")


        headers = {
            "Authorization": f"Bearer {groq_api_key}",
            "Content-Type": "application/json",
        }

        # Payload for Groq API
        payload = {
            "model": "mixtral-8x7b-32768",  # Adjust the model as needed
            "messages": [{"role": "system", "content": prompt}],
        }

        # Send request to Groq API
        response = requests.post(groq_api_url, headers=headers, json=payload)

        # Handle response
        if response.status_code != 200:
            print(f"Error from Groq API: {response.text}")
            raise HTTPException(status_code=500, detail="Error from Groq API")

        ai_response = response.json()
        if "choices" not in ai_response or not ai_response["choices"]:
            raise HTTPException(status_code=500, detail="Invalid response from Groq API")

        generated_content = ai_response["choices"][0]["message"]["content"]

        # Save revision data
        revision_store.set_revision(generated_content)

        return {
            "message": "Revision data updated successfully",
            "revision": revision_store.get_revision(),
        }

    except requests.RequestException as e:
        print(f"HTTP error while communicating with Groq API: {e}")
        raise HTTPException(status_code=500, detail="Error communicating with Groq API")
    except Exception as e:
        print(f"Error in /guide: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")


@app.get("/getGuide")
async def get_guide():
    try:
        revision_data = revision_store.get_revision()
        if not revision_data:
            raise HTTPException(status_code=404, detail="No revision data found")

        return {"revision": revision_data}
    except Exception as e:
        print(f"Error in /getGuide: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")


@app.get("/")
def root():
    return {"message": "Server is running!"}
