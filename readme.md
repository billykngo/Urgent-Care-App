How to install everything:
--open two terminals, one pathed to Urgent-Care-App/frontend one pathed to Urgent-Care-App/backend
--run 'npm install' in both backend and frontend directories to install dependencies
--create .env file in root directories that looks like .envexample for both frontend and backend
--For the backend terminal, create a .env file with these conditions
    DB_USER={insert mySQL database username}
    DB_PASS={insert your mySQL workbench password}
    DB_NAME={name of DB}
    DB_HOST=127.0.0.1        
    DB_DIALECT=mysql
    PORT=3001
    jwtsecret={can name this anything}
    URL_FOR_STRIPE=http://localhost:5173
    STRIPE_KEY=sk_test_51K6L2WFnzIDS2zCu8Pa9Ww80EFfvHzypTIWzdjQwUDyF14Xa4PZt1z2hpUV6E0bqInnv8VvLZ8GxTk1cpzFRMp6L00pgbftq9i 
--For the frontend terminal, create a .env file and place these conditions
    VITE_API_URL = http://localhost:3001
    URL_FOR_STRIPE = http://localhost:3001
--in frontend terminal run "npm run dev" to start the front end
--in backend terminal run "npm start"
--enjoy!