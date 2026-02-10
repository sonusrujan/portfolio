# Personal Portfolio

This is a Next.js project bootstrapped with Firebase Studio. It serves as a personal portfolio to showcase your skills, projects, and experience.

## Running the project locally

To get this project running on your local machine, follow these steps:

### 1. Install Dependencies

First, you need to install all the required packages for the project. Open your terminal in the project's root directory and run:

```bash
npm install
```

### 2. Set up Environment Variables

The project uses Genkit for AI capabilities, which requires an API key.

1.  Create a new file named `.env` in the root of your project directory.
2.  Add the following line to the `.env` file, replacing `your_api_key_here` with your actual Google AI API key:

```
GEMINI_API_KEY=your_api_key_here
```
You can get a key from [Google AI Studio](https://aistudio.google.com/app/apikey).

### 3. Run the Development Server

Once the dependencies are installed and the environment variable is set, you can start the development server:

```bash
npm run dev
```

This will start the application, and you can view it in your browser at [http://localhost:9002](http://localhost:9002).

### Additional Scripts

- **`npm run build`**: Creates a production-ready build of your application.
- **`npm run start`**: Starts the production server after building.
- **`npm run genkit:dev`**: If you are developing AI flows, run this in a separate terminal to start the Genkit development UI.
