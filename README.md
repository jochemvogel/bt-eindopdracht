# GameChanger - Change game data

**[Live link](https://bt-eindopdracht.herokuapp.com/)**

In GameChanger you can get an overview of different sport games (_expand description_)

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

- Admin interface where you can create a competition
- The admin must be able to enter scores or times for each match
- Users must be able to register for certain competitions (overview screen)
- Users who follow a match will be notified when new information arrives. (How do you do this if the user is following multiple matches?)
- Users can give a response to this, which can be read by other users (and the admin). The admin must be able to remove comments.

## :eyeglasses: Overview

### Screenshot

...

### Wireflow

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

`git clone https://github.com/jochemvogel/progressive-web-apps-2021.git `

#### 2). Install dependencies

`npm install`

#### 3). Start server

`npm run dev`

## :open_file_folder: Folder Structure

To be continued

### Everything excepts `/docs` & `/client`

The server side part of the application. Not applicable for this course. You need to run the server if you want to have the application locally. Wanted to seperate this files in another folder, but couldn't make heroku work when I did that.

### `/docs`

All the documents are located here. They're also mentioned in the README, so you don't have to look their either.

### `/client`

The client side part of the application

#### `/client/public`

You can find al the public resources here. In this project are no building scripts, so all the styling and scripting is (directly) placed in the `/public` folder.

#### `/client/views`

Here you can find all the views of the application. It's build with EJS for dynamic purposes, but it's basically HTML with some variables.

## :memo: Todo list

- [ ] **Create design**. Because of that you know want you want to build and add them to the todo list or backlog
- [ ] **Come up with new ideas and add those in the backlog**. Ongoing 🙃

### Backlog

_Nice to have_-ideas. Won't add them in the todo list, because these are not todos, but just some ideas for improving the app. This list is chronologically ordered.
