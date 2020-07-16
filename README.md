

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

_**Closer Look ** is an application that allows users to dive deeper into a brand and their products to increase the user’s awareness of social side-effects associated with their purchase by displaying the brands ethical actions.

### Team Members

Created, designed, and developed by [Darnycya Smith](https://github.com/darnycya), [Alex Beckerman](https://github.com/alexbaldman), [Calliope Jimenez-Clark](https://github.com/NocturnalMusing) and [Pete Du Beau](https://github.com/peterdubeau) (Git Czar) for the General Assembly Software Engineering Immersive (May '20 Cohort: Constellations) Unit 3 Group Project.

### Team Expectations

Team values and expectations can be found on our project's [Group Expectation Setting Document](https://docs.google.com/document/d/1nRMA-V0f6PnXBNkURLLVefh6L5--xXHlyZA2i2bn4hg/edit).

### Permissions

Digital assets used with full licensing and permission from [Death to Stock Photo](), [Freepik](), and [Unsplash](). Custom digital design and branding by John Lansing. Digital assets stored locally and on [Imgur]().

<br>

## MVP

_The **Closer Look** MVP is for user’s to be able to create an account with a name and password and be able to have their preferences be displayed every time that they log in._

<br>

### Goals

- _Create a user 'sign-in' page_
- _Create a user 'create account' page_
- _Create a user profile page with CRUD features_
- _CSS & Styling for all pages_

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

![Click Here](https://app.zeplin.io/project/5ef50be43a1c1da368f2178d/dashboard?sid=5ef50d3cdef8c09dd98bcf3e)

- The team’s Zeplin file of all frameworks for the site.


#### Component Hierarchy

![Whimsical Diagram](https://whimsical.com/Nbux4P1h5U1W6bPUfieNbH)

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups

|_ src
      |__ components/
            |__ Login.jsx
            |__ UserProfile.jsx
            |__ BrandDetails.jsx
            |__ BrandList.jsx
            |__ CreateUser.jsx
            |__ EditUser.jsx
            |__ shared/
                  |__ Header.jsx
                  |__ Layout.jsx
                  |__ Footer.jsx
                  |__ Nav.jsx
      |_ screens/
            |__ Login/Sign-up.jsx
            |__ User.jsx
            |__ Home.jsx
            |__ BrandDetails
      |__ services/
            |__ apiConfig.js
            |__ brands.js
            |__ users.js
      |__ utils/      
            |__ search.jsx

```

#### Component Breakdown


|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|    Login     | functional |   y   |   n   | _will allow the user to sign into their account_      |
|  create user | functional |   n   |   y   | _frames each screen with header, nav and footer._ |               |
| User-profile | functional |   n   |   n   | _will allow the user to to create an account._
|Brand Details |   class    |   n   |   n   | _will display relevant brand info to user ._ |
| Brand List   |   class    |   n   |   n   | _will display list of brands that match user criteria._ |
|    Search    | functional |   n   |   n   | _allows users to search by brand or cause._ |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

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

#### ERD Model

> This section will be used to display an image of a computer generated ERD model.

#### Data Heirarchy

> The database, table, and attribute hierarchy are displayed below:

``` structure

database_db
|__ users/
|__ resources/
|__ posts/

```

<br>

***

## Post-MVP

- _Have working generic controller actions for full-CRUD using Express, Mongoose, and MongoDB. in order to implement the user and password function and the users' data._
- _Create an API of objects of products._
- _Create a React app with components to display and filter the brands, products and social issues of the users' choice._

***

## Code Showcase

> This section will contain brief code snippets of functionality we are proud of, along with a brief description.

## Code Issues & Resolutions

> This section will catalog any major issues encountered and their resolution.