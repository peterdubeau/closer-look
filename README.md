

- [Overview](#overview)
  - [Team Members](#team-members)
  - [Team Expectations](#team-expectations)
  - [Permissions](#permissions)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries](#libraries)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Component Estimates](#component-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
    - [Data Heirarchy](#data-heirarchy)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Closer Look**_ is an application that allows users to dive deeper into a brand and their products to increase the user’s awareness of social side-effects associated with their purchase by displaying the brands ethical actions.

### Team Members

Created, designed, and developed by [Darnycya Smith](https://github.com/darnycya), [Alex Beckerman](https://github.com/alexbaldman), [Calliope Jimenez-Clark](https://github.com/NocturnalMusing) and [Pete Du Beau](https://github.com/peterdubeau) (Git Czar) for the General Assembly Software Engineering Immersive (May '20 Cohort: Constellations) Unit 3 Group Project.

### Team Expectations

Team values and expectations can be found on our project's [Group Expectation Setting Document](https://docs.google.com/document/d/1nRMA-V0f6PnXBNkURLLVefh6L5--xXHlyZA2i2bn4hg/edit).

### Permissions

Digital assets used with full licensing and permission from [Death to Stock Photo](), [Freepik](), and [Unsplash](). Custom digital design and branding by John Lansing. Digital assets stored locally and on [Imgur]().

<br>

## MVP

_The goal for our **Closer Look** MVP is for users to be able to create an account by providing their e-mail address, name & password, and to be able to save, update, or delete their account information for future use of the site._

<br>

### Goals

- _Create a user 'log-in / sign-up' page in order to create a new account, or log-in to an account that has already been created._
- _Create a user profile page with CRUD features._
- _Use CSS for styling of all pages._

[Trello](https://trello.com/b/rfMtm7ni/team-purple)


<br>

### Libraries


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | basic framework for the page |
|   React Router   | allow routing between react screens |
|     Express      | Backbone of the database  |
|  Express Router  | Will make it much easier to integrate new pages and routes to the site |
|     Mongoose     | Will verify the Schema for our users |
|    body-parser   | allow users to edit account details |

<br>

### Client (Front End)

#### Wireframes

[Site Wireframes on Zeplin](https://app.zeplin.io/project/5ef50be43a1c1da368f2178d/dashboard?sid=5ef50d3cdef8c09dd98bcf3e)

- The team’s Zeplin file of the mock-ups and frameworks of the website.


#### Component Hierarchy

- Within the folder for our overall application, the frontend will be built with ReactJS and will be held in the 'client' folder.  

- Inside the 'client' folder, the folder 'src' will hold our components, screens, and any assets used to make up the app's front end, structured as per below:

``` structure

src
|__ assets/
      |__ fonts
      |__ images
      |__ mockups
|__ components/
      |__ Login.jsx
      |__ UserEdit.jsx
      |__ UserCreate.jsx           
      |__ UserProfile.jsx
      |__ BrandDetails.jsx
      |__ ProductDetails.jsx
      |__ shared/
            |__ Header.jsx
            |__ Layout.jsx
            |__ Nav.jsx
|_ screens/
      |__ User.jsx
      |__ Home.jsx
      |__ LoginSignUp.jsx 
      |__ ProductDetails.jsx      
|__ services/
      |__ apiConfig.js
      |__ products.js            
      |__ users.js
|__ utils/      
      |__ search.js

```

#### Component Breakdown


|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
| Header    | functional |   n   |   n   | _will contain the navigation component and logo._      |
| Navigation  | functional |   n   |   n   | _will contain links to each page in order to navigate views within the app_   |
| LoginSignUp  | functional |   y   |   n   | _will allow the user to log-in to their account, or sign up for an account if they haven't yet created one._ |
| Layout | functional |   n   |   y   | _controls the layout of each screen, containing header and nav._                |
| User | functional |   n   |   n   | _will allow the user to to create an account._
| Brand Details |   class    |   n   |   n   | _will display relevant brand info relative to each product._ |
| Product Details  |   class    |   n   |   n   | _will display products based on user criteria._ |
| Search    | functional |   n   |   n   | _allows users to search within the app/site for products._ |


#### Component Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
|     Layout          | H | 3hrs | - | - |
|    Brand Data       | M | 3hrs | - | - |
|      Login          | H | 6hrs | - | - |
|     Sign-up         | H | 3hrs | - | - |
|    User-profile     | H | 6hrs | - | - |
|    Brand Details    | L | 4hrs | - | - |
|    Brand List       | L | 4hrs | - | - |
|    Search           | L | 4hrs | - | - |
| Mongo/Heroku setup  | H | 5hrs | - | - |



<br>

### Server (Back End)

- A server will be set up in order to host/store product and user information.  W

#### ERD Model

[Whimsical Diagram](https://whimsical.com/Nbux4P1h5U1W6bPUfieNbH)

#### Data Heirarchy

``` structure

database_db
|__ users/
|__ resources/
|__ posts/

```

<br>

***

## Post-MVP

- _Have working generic controller actions for full-CRUD using Express, Mongoose, and MongoDB in order to implement user / password functions and store product and user data._
- _Create an API of objects representing products for sale, and users of the site._
- _Create a React app with components to be displayed within each screen, allowing users to view products while displaying information about each product's brand and their potential impact on, or relationship to, various societal, social, and environmental issues._

***

## Code Showcase

> This section will contain brief code snippets of functionality we are proud of, along with a brief description.  For example, if you look very closely, LoginSignUp has been Very Strategically Capitalized.


## Code Issues & Resolutions

> This section will catalog any major issues encountered and their resolution.  For example, LoginSignUp continues to be Very Strategically CapitaliZed. ;-)
