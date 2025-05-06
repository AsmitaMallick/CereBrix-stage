from fastapi import FastAPI, HTTPException
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

# Load .env.local file
load_dotenv(dotenv_path=".env.local")

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
    additional_context: Optional[str] = None

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

        # Gemini API Endpoint and headers
        gemini_api_url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"
        gemini_api_key = os.getenv("GEMINI_API_KEY")

        if not gemini_api_key:
            raise HTTPException(status_code=500, detail="GEMINI_API_KEY is not set")

        headers = {
            "Content-Type": "application/json",
        }

        # Payload for Gemini API
        payload = {
            "contents": [
                {
                    "parts": [
                        {
                            "text": prompt
                        }
                    ]
                }
            ]
        }

        # Send request to Gemini API with API key as query parameter
        response = requests.post(
            f"{gemini_api_url}?key={gemini_api_key}",
            headers=headers,
            json=payload
        )

        # Handle response
        if response.status_code != 200:
            raise HTTPException(status_code=response.status_code, detail=response.text)

        ai_response = response.json()
        if "candidates" not in ai_response or not ai_response["candidates"]:
            raise HTTPException(status_code=500, detail="Invalid response from Gemini API")

        generated_content = ai_response["candidates"][0]["content"]["parts"][0]["text"]

        # Save revision data
        revision_store.set_revision(generated_content)

        return {
            "message": "Revision data updated successfully",
            "revision": revision_store.get_revision(),
        }

    except requests.RequestException as e:
        print(f"HTTP error while communicating with Gemini API: {e}")
        raise HTTPException(status_code=500, detail="Error communicating with Gemini API")
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
