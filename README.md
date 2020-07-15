

- [Overview](#Overview)
  - [Team Members](#Team-Members)
  - [Team Expectations](#Team-Expectations)
  - [Permissions](#Permissions)
- [MVP](#MVP)
  - [Goals](#Goals)
  - [Libraries](#Libraries)
  - [Client (Front End)](#Client-Front-End)
    - [Wireframes](#Wireframes)
    - [Component Hierarchy](#Component-Hierarchy)
    - [Component Breakdown](#Component-Breakdown)
    - [Component Estimates](#Component-Estimates)
  - [Server (Back End)](#Server-Back-End)
    - [ERD Model](#ERD-Model)
    - [Data Heirarchy](#Data-Heirarchy)
- [Post-MVP](#Post-MVP)
- [Code Showcase](#Code-Showcase)
- [Code Issues & Resolutions](#Code-Issues--Resolutions)

<br>

## Overview

_**Closer Look ** is an application that allows users to dive deeper into a brand and their products to increase the user’s awareness of social side effects associated with their purchase by displaying the brands ethical actions. 

### Team Members

Created, designed, and developed by [Darnycya Smith](https://github.com/darnycya), [Alex Beckerman](https://github.com/alexbaldman) [Calliope Jimenez-Clark](https://github.com/NocturnalMusing) and [Pete Du Beau](https://github.com/peterdubeau) (Git Czar) for the General Assembly Software Engineering Immersive (May '20 Cohort: Constellations) Unit 3 Group Project.

### Team Expectations

Team values and expectations can be found on our project's [Group Expectation Setting Document](https://docs.google.com/document/d/1nRMA-V0f6PnXBNkURLLVefh6L5--xXHlyZA2i2bn4hg/edit).

### Permissions

Digital assets used with full licensing and permission from [Death to Stock Photo](), [Freepik](), and [Unsplash](). Custom digital design and branding by John Lansing. Digital assets stored locally and on [Imgur]().

<br>

## MVP

_The **Closer Look** MVP is for user’s to be able to create an account with a name and password and be able for their preferences to be displayed every time that they log in._

<br>

### Goals

- _Create a user account and sign in page._
- _Have working generic controller actions for full-CRUD using Express, Mongoose, and MongoDB. to implement the user and password function and the users data._
- _Create an API of objects of products._
- _Create a React app with components to display and filter the brands, products and social issues of the users choice ._

<br>

### Libraries


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
|     Express      | Backbone of the database  |
|  Express Router  | Will make it much easier to integrate new pages and routes to the site |

<br>

### Client (Front End)

#### Wireframes

![Click Here](https://app.zeplin.io/project/5ef50be43a1c1da368f2178d/dashboard?sid=5ef50d3cdef8c09dd98bcf3e)

- The team’s Zeplin file of all frameworks for the site.



#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app.

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```

#### Component Breakdown


|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Login      |   class    |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
| Create user  | functional |   n   |   y   | _The cards will render the post info via props._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Component Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model.

#### Data Heirarchy

> Use this section to display the database, table, and attribute heirarchy.

``` structure

database_db
|__ users/
|__ resources/
|__ posts/

```

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.

