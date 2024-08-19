# Forkify

Forkify is a recipe application that allows users to search for recipes, view detailed information about them, and save their favorite recipes. This project demonstrates integration with a recipe API and includes features like search, recipe details, and user authentication.

## Features

- **Search Recipes**: Find recipes by keywords.
- **View Recipe Details**: Get detailed information about a recipe, including ingredients and instructions.
- **Save Favorites**: Save your favorite recipes for easy access.
- **User Authentication**: Secure access with JWT authentication.

## Tech Stack

- **Frontend**: JavaScript, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **API Integration**: Recipe API
- **Authentication**: JWT (JSON Web Tokens)

## Installation

To get started with the Forkify project, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/abdul-nishar/forkify-abdul.git
   cd forkify-abdul
   ```
   
2. **Install Dependencies:**

   For backend:
   ```bash
   cd backend
   npm install
   ```
   For frontend:
   ```bash
   cd frontend
   npm install
   ```
   
3. **Configure Environment Variables:**
   Create a .env file in the backend directory and add your environment variables (e.g., API keys, JWT secret).
   
5. **Start the Application:**
   Start the backend server:
   ```bash
   cd backend
   npm start
   ```
   Start the frontend server:
   ```bash
   cd frontend
   npm start
   ```
   
6. **Access the Application:**
   Open your browser and navigate to http://localhost:3000 to view the Forkify application.

## Usage

- **Search for Recipes**: Enter keywords into the search bar to find recipes.
- **View Recipe Details**: Click on a recipe to see more details, including ingredients and instructions.
- **Save Favorites**: Click the save button to add recipes to your favorites list.
- **User Authentication**: Register or log in to access personalized features.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please submit a pull request or open an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **Recipe API**: Used for fetching recipes.
- **MongoDB**: Used for database management.
- **JWT**: Used for user authentication.
- **Node.js and Express.js**: Used for backend development.
- **Course by Jonas Schmedtmann**: This project is based on the course taught by Jonas Schmedtmann. Special thanks for the valuable guidance and resources.



