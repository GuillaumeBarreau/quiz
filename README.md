[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=GuillaumeBarreau_quiz&metric=coverage)](https://sonarcloud.io/summary/new_code?id=GuillaumeBarreau_quiz)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=GuillaumeBarreau_quiz&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=GuillaumeBarreau_quiz)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=GuillaumeBarreau_quiz&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=GuillaumeBarreau_quiz)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=GuillaumeBarreau_quiz&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=GuillaumeBarreau_quiz)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=GuillaumeBarreau_quiz&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=GuillaumeBarreau_quiz)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=GuillaumeBarreau_quiz&metric=bugs)](https://sonarcloud.io/summary/new_code?id=GuillaumeBarreau_quiz)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=GuillaumeBarreau_quiz&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=GuillaumeBarreau_quiz)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=GuillaumeBarreau_quiz&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=GuillaumeBarreau_quiz)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=GuillaumeBarreau_quiz&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=GuillaumeBarreau_quiz)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=GuillaumeBarreau_quiz&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=GuillaumeBarreau_quiz)

## Getting Started

To get started with this project, follow these simple steps:

### 1. Installation

First, clone the repository to your local machine and navigate to the project directory:

```shell
git clone git@github.com:GuillaumeBarreau/quiz.git
cd quiz
```

Next, install the project dependencies using npm:

```shell
npm install
```

### 2. Generating Data and API Routes

Before you can run the application, you need to generate JSON data files for the quizzes and set up the API routes. Use the following command:

```shell
npm run generateData
```

This command will create all the necessary JSON data files and configure the API routes required for your application. It ensures that your project has the latest quiz data.

### 3. Starting the Development Server

Now you're ready to start the development server. Use the following command to launch your project locally:

```shell
npm run dev
```

## Project Commands

### `npm run dev`
Starts the development server using Next.js.

### `npm run build`
Generates data (using `generateData`), then builds the project using Next.js.

### `npm start`
Starts the production server using Next.js.

### `npm run lint`
Lints the project using Next.js's built-in linting tools.

### `npm run generateData`

This command serves a crucial role in your project by generating JSON data files for various quizzes and creating the necessary API routes for Next.js. It accomplishes the following tasks:

1. **Data Generation**: It runs the `createdJsonData.mjs` script located in the `./scripts` directory. This script is responsible for generating JSON data files that correspond to the data for different quizzes in your project.

2. **API Route Creation**: Alongside generating data, this command sets up the required API routes in your Next.js project. These routes are designed to serve the JSON data to your application when requested.

   - **API Routes Location**: The API routes are automatically created in your Next.js project based on the data generated. These routes will be available at paths like `/api/practice-mode/quiz/{...slug}` where `{...slug}` is a parameter representing the specific quiz.

By running `npm run generateData`, you ensure that your project has up-to-date JSON data for quizzes and that the necessary API endpoints are in place to fetch this data. This is essential for the proper functioning of your application.

**Note**: Make sure to configure the `createdJsonData.mjs` script in a way that it generates the data and API routes according to your project's requirements.

### `npm test`
Runs Jest in watch mode with code coverage analysis.

### `npm run test:ci`
Runs Jest in continuous integration mode with code coverage analysis.

### `npm run e2e`
Opens Cypress for end-to-end testing.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
