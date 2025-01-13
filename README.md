# **CereBrix**

**An Intelligent Study Aid Web Platform Leveraging Artificial Intelligence.**
It's a full-stack application with a **FastAPI backend** and **React frontend**.

---

## **Table of Contents**
1. [Backend Setup (FastAPI)](#backend-setup-fastapi)
2. [Frontend Setup (React)](#frontend-setup-react)
3. [Running the Application](#running-the-application)
4. [API Documentation](#api-documentation)
5. [Troubleshooting](#troubleshooting)

---

## **Backend Setup (FastAPI)**

Follow the steps below to set up and run the **FastAPI backend server**.

### **1. Install Prerequisites**
- Ensure you have **Python 3.9+** installed on your machine.
- Install **pip** (Python's package manager).
- Optionally, create a virtual environment for isolation.

### **2. Clone the Repository and install the requirements**
```bash
git clone <your-repo-url>
cd .backend\backend_using_fastapi\
pip install fastapi uvicorn python-dotenv requests
npm install express body-parser cors


### **3. Start the FastAPI Server**
```bash
uvicorn main:app --reload

### **4. Navigate to the Frontend Directory**
```bash
cd frontend
### **5.  Install Frontend Dependencies and run the server**
```bash
npm install
npm install @copilotkit/react-core @copilotkit/react-ui
npm install axios
npm start