# GameChanger - Change game data

**[Live link](https://bt-eindopdracht.herokuapp.com/)**

In GameChanger you can get an overview of different sport games. Besides that you can also enable alerts, so you won't miss anything from your favorite sport team(s).

## Table of Contents

<table>

<tr>

<td align="center"><a href="#nerd_face-usage">🤓 Course <a></td>

<td align="center"><a href="#eyeglasses-overview"> 👓 Overview <a></td>

<td align="center"><a href="#gear-installation">⚙️ Installation<a></td>

<td align="center"><a href="#open_file_folder-folder-structure">🗂 Folder Structure<a></td>

<td align="center"><a href="#memo-todo-list">📝 Todo list<a></td>

</tr>

</table>

## Course

_The course **Browser Technologies** is about learning to build robust and accessible websites using Progressive Enhancement and testing. Browser Technologies is part of the half year minor programme about Web Design and Development in Amsterdam. Bachelor Communication and Multimedia Design, Amsterdam University of Applied Science._

### Usecase

**Sports match score website**

I want to pass on the scores or times of a sports match to interested parties, who can then respond.

**Requirements**

-   Admin interface where you can create a competition

-   The admin must be able to enter scores or times for each match

-   Users must be able to register for certain competitions (overview screen)

-   Users who follow a match will be notified when new information arrives. (How do you do this if the user is following multiple matches?)

-   Users can give a response to this, which can be read by other users (and the admin). The admin must be able to remove comments.

### Browser testing

I'm going to test in the following browsers:

1.  **Chromium:** Chrome 88 (on Windows) _=> based on [statcounter](https://gs.statcounter.com/browser-version-market-share/all/netherlands) this is the most used browser in the Netherlands atm._
2.  **Non-Chromium:** Firefox 51 (on Mac) _=> doesn't support css grid_
3.  **Samsung/Android:** Samsung Internet (on Samsung Galaxy A51) _=> Best sold Samsung phone 2020_
4.  **Non-Samsung/Android):** UC Browser (on Moto G7 Play)
5.  **iOS:** Safari iPhone (on iPhone 12 mini)

### Enhancements

1.  **Fancy Menu**
    The menu will go to the bottom of the page (with ID) if JS is not supported. If it is, create some nice animation that will improve the UX.
2.  **CSS grid**
    On mobile the cards aren't that big, but on desktop they will. Because of that I want to use CSS grid to make them responsive. Three next to each other could be better on desktop. What can you do if grid is not supported? I want to find a solution for that (because they somehow were able to do that in the past)
3.  **Notification API**
    When a match got updated I want to give the users (that enabled notifications for that match) to get a notification (with the Notification API). However, this is not supported in Safari on iOS. There has to be a way to give a notification. Maybe with a popup? Notification animation in the top? What if JS is disabled? Figure that out.
4.  **Form Validation**
    Don't really know how I want to do this, but I want to have form validation. I will update this one later on. I.e. use the `onblur` on input fields, but also make it work when JS is disabled (that is the enhancement).

## :eyeglasses: Overview

### Screenshot

...

### Design

<details>

<summary>First sketch design</summary>

![First sketch design](https://i.ibb.co/LpLfNCF/Screenshot-2021-03-23-at-20-24-01.png)

</details>

<details>

<summary>Wireflow non-admin</summary>

![Wireflow non-admin](https://github.com/jochemvogel/bt-eindopdracht/blob/master/docs/wireflow-overview.jpg)

</details>

<details>

<summary>Wireflow admin</summary>

![Wireflow admin](https://github.com/jochemvogel/bt-eindopdracht/blob/master/docs/wireflow-admin.jpg)

</details>

## :gear: Installation

### Get it local

This app is made with vanilla JS (frontend) and NodeJS (backend).

#### 1). Clone the repository

`git clone https://github.com/jochemvogel/bt-eindopdracht.git`

#### 2). Install dependencies

`npm install`

#### 3). Start server

`npm run dev`

## :open_file_folder: Folder Structure

To be continued

### `/docs`

All the documents are located here. They're also mentioned in the README, so you don't have to look their either.

### `/client`

The client side part of the application

#### `/client/public`

You can find al the public resources here. In this project are no building scripts, so all the styling and scripting is (directly) placed in the `/public` folder.

#### `/client/views`

Here you can find all the views of the application. It's build with EJS for dynamic purposes, but it's basically HTML with some variables.

### The rest

The server side part of the application. Not applicable for this course. You need to run the server if you want to have the application locally. Wanted to seperate this files in another folder, but couldn't make heroku work when I did that.

## :memo: Todo list

-   [ ] **Create design**. Because of that you know want you want to build and add them to the todo list or backlog

-   [ ] **Come up with new ideas and add those in the backlog**. Ongoing 🙃

### Backlog

_Nice to have_-ideas. Won't add them in the todo list, because these are not todos, but just some ideas for improving the app. This list is chronologically ordered.
