Coder's Lab,A blog app that is developed using Mern Stack ,
Features 
Register and Login using Firebase
Create,Read,Edit and Updtate  blog posts,
Responsive, 
Dark Theme,
View dashboard,
like,
Create
comment blogs 

How to run the project 

Backend Start:Npm start - api start - 
frontend start :Npm run dev - client start - 

Dependencies used for frontend 

Flowbite and Tailwind for styling 
MongoDb for database 
Moment -date and time 
React quill - text editor 
Flowbite - styling 
Firebase -google authentication 
Redux -persist - user to be present This ensures that the state persists even if the user refreshes the page or closes and reopens the browser.
React router dom - paths to without refreshing for routing to the pages 
React dom- dom manipulation 
Responsives - navbar collapse is used for that using Tailwind and Flowbite 
Dark Theme -FaMoon package is used for that 



Dependies used for  backend 
Bcryptjs - hashing password 
Jsonwebtoken -

JSON Web Tokens (JWT) are used for securely transmitting information between parties as a JSON object. They are commonly used in web applications for authentication and authorization purposes. Here's why JSON Web Tokens (JWT) are used:

Cookieparser - 
Cookie-parser is a middleware for Express.js, a popular web application framework for Node.js. It's used to parse cookies attached to the client's request object.

Nodemon - for faster updates on server 

Google authentication for signin and sign up 
Profile photo and post photos are stored in firebase 
Api -routes -only signed in  users can create posts for that verifyUsers 
Mongodb for storing - bcrptjs for hashing the password for protection 
Private Routes for without going to dashboard who are not signed -src/components- private routes 
Can be used as readers and creators , only  creators made as admin only can view dashboard for that we need to make admin : true in mongodb 
For default : model 

Mongodb is used for databases : for that a schema is used for every part 

Dashboard functionalities for analytics 
HTTP methods are used for DashProfile 


