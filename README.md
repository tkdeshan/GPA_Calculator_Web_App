# GPA Calculator Web App

Manage subjects with CRUD operations and GPA calculator web app.

## Table of Contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Usage](#usage)

## Introduction

This is a GPA calculation web application managing subjects with insert, update, and delete. The GPA is calculated automatically. The frontend is developed using React, and the backend is powered by Node.js with Express.js.

## Demo

The web app is live on : https://gpa-calculator-web-app-frontend.vercel.app/

## Getting Started

1. Clone the project :
   
    ```bash
   git clone https://github.com/tkdeshan/GPA_Calculator_Web_App/
    
3. Navigate to the project directory:

    ```bash
   cd GPA_Calculator_Web_Ap

### Frontend

1. Navigate to the frontend directory:

   ```bash
   cd frontend

2. Install the required dependencies:

   ```bash
   npm install

3. Start the React development server:

    ```bash
   npm start

### Backend

1. Navigate to the backend directory:

   ```bash
   cd backend

2. Install the required dependencies:

   ```bash
   npm install
   
3. Create .env file and replace the data as example.env file (delete the example.env file).

4. Create a MongoDB database and replace your connection string in the .env file.
 
3. Start the backend server:

    ```bash
   npm start

## Usage

GPA calculation web app consists of two parts: the frontend and the backend. They communicate through API requests. (Make sure to replace BaseURL with your localhost URL).

You can add, update, and delete subjects. After add all the subjects, click the `GPA Calculation` button. Thean automatically calculate the GPA and display. 

Customize and expand the functionality as needed for your application.
