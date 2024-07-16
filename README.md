# Python Sample Application


Tech Stack
----------

* **Frontend:**

  * `ReactJS`
  * `React Google Chart` for data visualization
  * `React Router` for navigation
  * `Tailwind CSS` for styling
* **Backend:**

  * `Python FastAPI` for the server
  * `PostgreSQL` for the database
  * `SqlAlchemy` as the ORM
* **Authentication:**

  * `JWT (JSON Web Tokens)` for user authentication
  * `Refresh Token` for persistent login


Installation
------------

1. **Clone the Repository:**
   
   ```
   git clone https://github.com/adexltd/python-sample-application.git
   cd python-sample-application
   ```
2. **Install Dependencies:**
   
   Install frontend dependencies
   ```
   cd client   
   npm install
   ```
   
   Install backend dependencies
   ```
   cd server
   pip install -r requirements.txt
   ```
3. **Set Up Database:**
   
   * Create a PostgreSQL database and configure the connection in the `server/.env` file.
     
4. **Run the Application:**
   
   Run the backend server by entering the below commands:
   ```
   cd server
   uvicorn main:app --reload
   ```
   
   Run the frontend server by entering the below commands:
   ```
   cd client
   npm run dev
   ```

Contributing
------------

We welcome contributions from the community. Feel free to open issues, submit feature requests, or contribute code through pull requests.

