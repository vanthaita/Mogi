# Mogi - AI Mock Interview SaaS

Mogi is a web-based SaaS application designed to help users improve their interview skills through AI-driven mock interviews. Built with Next.js, TypeScript, Tailwind CSS, Prisma, Neon, Gemini API, Mogi provides personalized feedback to support users on their journey to success.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Ensure you have the following installed:

- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.x or later)

### Installation

Clone the repository:

``` bash
git clone https://github.com/TaThasi/Mogi.git
cd Mogi
```

Install the dependencies:

```bash

npm install
# or
yarn install

Running the Development Server

Start the development server:
```

```bash
npm run dev

# or
yarn dev
```
Open http://localhost:3000 in your browser to see the result.

You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.
Environment Variables

Create a .env.local file in the root directory and add the necessary environment variables:

```bash
NEXT_PUBLIC_SERVER_URL=<your-gemini-api-key>
```
Replace <your-clerk-frontend-api>, <your-database-url>, and <your-gemini-api-key> with your actual credentials.
Database Migration

Run the Prisma migrations to set up your database schema:

```bash

npx prisma migrate dev

```
Learn More

To learn more about the technologies used in this project, take a look at the following resources:

    Next.js Documentation - learn about Next.js features and API.
    Tailwind CSS Documentation - learn about the utility-first CSS framework.
    Prisma Documentation - learn about the database toolkit.
    Neon Documentation - learn about the serverless Postgres database.
    Gemini API Documentation - learn about the AI-driven interview question generator.

Deploy on Vercel

The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out the Next.js deployment documentation for more details.
Project Overview

Mogi aims to simulate real interview scenarios using AI-generated questions, providing users with immediate feedback on their answers. Whether preparing for technical, behavioral, or situational interviews, Mogi helps users practice and refine their skills.
Key Features

    AI-Generated Questions: Real-time interview questions tailored to the user's profile.
    Personalized Feedback: Detailed feedback on user responses to improve performance.
    Secure Authentication: Google OAuth2 and JWT-based secure login system.
    Serverless Database Management: Powered by Neon PostgreSQL for scalable and efficient data handling.
    Modern UI/UX: Built with Tailwind CSS for a clean and responsive user interface.

Technical Stack

    Front-end: Next.js, TypeScript, Tailwind CSS, Shadcn/ui
    Back-end: Prisma, Neon, Nestjs, Gemini API

Future Plans

Mogi is continuously evolving. Here are some of the planned features:

    Advanced Analytics: Insights into user performance over time.
    Custom Interview Tracks: Tailored interview paths based on job roles or industries.
    Mobile App: Expanding accessibility with a dedicated mobile application.

