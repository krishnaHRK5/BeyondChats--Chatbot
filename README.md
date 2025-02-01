# BeyondChats Chatbot Integration Project

## Overview
BeyondChats is a chatbot company that provides businesses with a step-by-step process to set up a new chatbot. This project outlines the front-end implementation in ReactJS to facilitate user registration, organization setup, and chatbot integration and testing.

## Project Structure


## Components

### 1. User Registration
The user registration component allows users to sign up using their name, email, and password. Users can also choose to continue with Google for a faster registration process.

**Path**: `src/components/Registration.js`

### 2. Setup Organisation
This component allows users to set up their organization by entering the company name, website URL, and description. It also includes functionality to fetch the meta-description from the company website.

**Path**: `src/components/SetupOrganisation.js`

### 3. Show Detected Webpages
This component shows the list of webpages detected, scraped, and pending from the client's website. Users can click on any webpage to see the data chunks scraped from that webpage.

**Path**: `src/components/ShowWebpages.js`

### 4. Chatbot Integration & Testing
This component provides options for users to test the chatbot, integrate it on their website, mail instructions to their developer, and test the integration.

**Path**: `src/components/ChatbotIntegration.js`

### 5. Integration Success
This component displays a success message and provides buttons to explore the admin panel, start talking to the chatbot, and share on social media.

**Path**: `src/components/IntegrationSuccess.js`

## Backend Server (Express.js)
The backend server fetches the meta-description from the provided URL using Express, Axios, and Cheerio.

**Path**: `server.js`

## Getting Started

### Prerequisites
- Node.js
- npm (Node Package Manager)

### Installation
1. Clone the repository:
    ```sh
    git clone <repository_url>
    cd BeyondChats
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the backend server:
    ```sh
    node server.js
    ```

4. Start the React application:
    ```sh
    npm start
    ```

The React application will be running at `http://localhost:3000` and the backend server will be running at `http://localhost:5000`.

## API Endpoints
- **Fetch Meta-Description**: `/api/fetch-meta?url=<company_website_url>`

## Usage

1. **User Registration**:
   - Register using your name, email, and password.
   - Alternatively, continue with Google for quicker registration.

2. **Setup Organisation**:
   - Enter your company name, website URL, and description.
   - Click "Fetch Meta Description" to automatically populate the company description.

3. **Show Detected Webpages**:
   - View the list of detected webpages from your company website.
   - Click on any webpage to view the scraped data chunks.

4. **Chatbot Integration & Testing**:
   - Test the chatbot on a sample client webpage.
   - Follow instructions to integrate the chatbot on your website.
   - Mail integration instructions to your developer.
   - Test the integration and view success or failure messages.

