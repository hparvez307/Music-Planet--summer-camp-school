---------------------

       CLIENT SIDE 
       
       ----------------------

* This is a summer camp school website which name is music planet. Student or anyone can visit our website , browse our classes and popular instructor and buy their favorite musical instruments course and learn with the best instructors. There are lots of features and functionalities and we are trying our best to make our website user friendly and more attractive.

* There is a navbar in the top of this website. In the navbar section there is a logo of our school, name, and some navigation menu. There is some protected menu which is only for logged user. Nobody can see or browse those menu without login.

* In the home page there is lot of section like (top slider, classes, propular instructor, our gallery, picture with text, Our website State and  a beautiful footer with all the info and necessary pages).

* There is error page with animation. When user enter a wrong path/route they see the error page.

* There is a registration and login page on our website. When a user registration for the for the first time the user role is set to student by default. An Admin has the access to make or remove any user as an admin or instructor. 

* There is a dashboard route on our website and the dashboard route has 3 types of dashboard and these are (Admin Dashboard, Instructor Dashboard, and Student Dashboard). 

* In the admin dashboard an admin see all the user and can change the role of an user. And There is a manage classes route admin can see all the classes added by Instructors and An Admin can approve, deny the classes of instructor. And an admin can give a feedback to an instructor for deny their classes with reasons.

* In the instructor dashboard An instructor can add a class and update their existing classes. Instructor can see all the classes they added previously with class status(approved, deny, and pending). Instructor see admin feedback for the denied classes and update their classes.

* Only students can see the student dashboard. A student see his selected classes and take action to delete classes from select classes or make a payment with their cards for the selected classes. after successful payment the class will be deleted from the selected classes and add to my enrolled classes. Student also see their payment history for all payments. 

*  We configure a secure payment for users so that they pay for the classes with their cards. The payment system third party is stripe. We ensure our user that their payment info is safe and there is no threat or security issue with our payment method.

* In the frontend we have used these technologies:

* Client-side technologies:

     HTML5
     CSS with Tailwind CSS framework and DaisyUI
     React.js with various components and libraries
     Firebase for deployment
     Stripe for secure payment processing


* Deployment:
    Client-side deployed on Firebase


---------------------

       SERVER SIDE 

       ----------------------

* On the server side we have used this technologies to make our server / database and secure :

* To secure every api we used jsonwebtoken verify. Nobody can access any route or get any info without valid json token, and for extra security we implement some security facts and functionality  to secure our apis.

* We used dotenv and environment variable to secure or hide our sensible configuration info.

* We used mongodb as our database to a store all the data of our website.

* We deployed our server on vercel.

* Deployment:
   Server-side deployed on Vercel

 *   Server-side technologies:

     Node.js
     CORS for cross-origin resource sharing
     dotenv for managing environment variables
     Express.js for building the server
     JSON Web Token (JWT) for securing APIs
     MongoDB for the database
     Stripe for payment processing  

* Here is our Live website Link: https://music-planet-9a0e5.web.app/