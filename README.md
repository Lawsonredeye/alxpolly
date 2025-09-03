# AlxPolly

AlxPolly is a full-stack polling application built with Next.js, Tailwind CSS, and Supabase. It allows users to create polls, vote on them, and view results.

## Features

-   **User Authentication:** Secure sign-up and login functionality using Supabase Auth.
-   **Create Polls:** Authenticated users can create new polls with multiple options.
-   **View Polls:** Browse a list of available polls.
-   **Voting System:** (In development) Users can vote on their preferred options.

## Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components:** [Shadcn/ui](https://ui.shadcn.com/)
-   **Backend & DB:** [Supabase](https://supabase.io/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v18 or later)
-   npm, yarn, pnpm, or bun

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/alxpolly.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Set up your environment variables. Create a `.env.local` file in the root of your project and add the following variables from your Supabase project settings. An example file (`.env.local.example`) is included in the repository.
    ```
    NEXT_PUBLIC_SUPABASE_URL="YOUR_SUPABASE_URL"
    NEXT_PUBLIC_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"
    ```

4.  Run the development server:
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

-   `app/`: Contains all the routes and pages for the application.
-   `components/`: Contains reusable UI components.
    -   `components/ui`: Auto-generated components from Shadcn/ui.
    -   `components/landing`: Components specific to the landing page.
-   `lib/`: Contains utility functions and Supabase client initialization.
-   `public/`: Contains static assets like images and icons.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.