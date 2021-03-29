# GameChanger - Change game data

**[Live link](https://bt-eindopdracht.herokuapp.com/)**

In GameChanger you can get an overview of different sport games. Besides that you can also enable alerts, so you won't miss anything from your favourite sport team(s).

This README is a summary of everything I did. I often refer to the Wiki for more details. If you want to read it by yourself, go to the [Wiki](https://github.com/jochemvogel/bt-eindopdracht/wiki).

## Table of Contents

<table>
<tr>
	<td align="center"><a href="#nerd_face-usage">🤓 Course <a></td>
	<td align="center"><a href="#eyeglasses-overview"> 👓 Overview <a></td>
	<td align="center"><a href="#gear-installation">⚙️ Installation<a></td>
	<td align="center"><a href="#open_file_folder-folder-structure">🗂 Folder Structure<a></td>
</tr>
</table>

## Course

_The course **Browser Technologies** is about learning to build robust and accessible websites using Progressive Enhancement and testing. Browser Technologies is part of the half year minor programme about Web Design and Development in Amsterdam. Bachelor Communication and Multimedia Design, Amsterdam University of Applied Science._

### Usecase

**Sports match score website**
I want to pass on the scores or times of a sports match to interested parties, who can then respond. More information about the use case can be found in the [Wiki](https://github.com/jochemvogel/bt-eindopdracht/wiki/Use-Case).

### Browser testing

I'm going to test in the following browsers:

1.  **Chromium:** Chrome 88 (on Windows) _=> based on [statcounter](https://gs.statcounter.com/browser-version-market-share/all/netherlands) this is the most used browser in the Netherlands atm._
2.  **Non-Chromium:** Firefox 51 (on Mac) _=> doesn't support css grid_
3.  **iOS:** Safari iPhone (on iPhone 12 mini)
4.  **Samsung/Android:** Samsung Internet (on Samsung Galaxy A51) _=> Most sold Samsung phone 2020_
5.  **Non-Samsung/Android):** UC Browser (on Moto G7 Play)

You can read the test report (and the individual reports in detail) in the [Wiki](https://github.com/jochemvogel/bt-eindopdracht/wiki/Test-Report).

### Enhancements

#### What are enhancements?

You can see Progressive Enhancement as way to make sure that your website is accessible for everyone. Despite browser, internet speed, JS/CSS enabled/disabled, sight, mobility etc. etc. You just want to make sure that EVERYONE can use your website. Progressive Enhancement is basically the umbrella that covers everything (Feature detection, accessbility, speed optimizations etc. ). It's the combination of all things that make your website more accessible to everyone.

In Progressive Enhancement you basically work with three layers. You start with making the basic content and functionalty should be accessible to all web browsers. Then you enhance the layout with CSS and eventually you add JS (and extra CSS like animations etc.) where neccessary.

#### Enhancements I did do

1.  Fancy Menu
2.  Notification API
3.  Icons
4.  Local fonts
5.  Accessibility

A more detailed overview of all the enhancements can be read in the [Wiki](https://github.com/jochemvogel/bt-eindopdracht/wiki/Enhancements-I-did-do).

#### Enhancements I did not do

There are a few enhancements where I'd thought about, but I had no time to implement those.

1.  Form Validation
2.  Web Sockets
3.  CSS Custom Properties

A more detailed overview of all the enhancements I did not do and why can be read in the [Wiki](https://github.com/jochemvogel/bt-eindopdracht/wiki/Enhancements-I-did-not-do).

### Feature Detection

#### What is Feature Detection?

Feature detection (or feature testing) is checking whether a browser supports a feature or not. I.e. in CSS you can do this with `@supports` to check if a CSS technology is supported by a browser. If it's not, you can add a fallback/default.

In JavaScript you can do the same. I did this with the Notifications API. I checked if the browser supports this and if not don't display the notifications (and even remove the notifications button at all)

A more overview about how I did implement Feature Detection can be found in the [Wiki](https://github.com/jochemvogel/bt-eindopdracht/wiki/Feature-Detection).

The reason you do Feature Detection is because you don't want to exclude any users, but on the other hand deliver a better experience to users that have better technology. An easy example is grid in CSS. It's a great way to quickly create a grid, but there are some (older) browsers that don't support it. It's brutal to say you don't care, because most of the users use browsers that are supported. There is a small proportion of the users that uses a older device. Maybe they don't care about new technology. Maybe they're poor and can't afford a new one. There are plenty of reasons. Not optimizing your website for those is basically discrimination.


## :eyeglasses: Overview

### Screenshot

<details>
<summary>Screenshot app (home)</summary>

![Screenshot app](https://raw.githubusercontent.com/jochemvogel/bt-eindopdracht/master/docs/screenshots/Screenshot%202021-03-28%20at%2020.01.26.png)
</details>

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

#### Core functionality

1.  Overview with matches
2.  Admin environment where these matches can be managed (basic CRUD)
3.  Details page per match where all the information is located
4.  Users can add a notification/alert per match

#### Layers wireflow

The wireflow is made based on the pleasurable layer. The functional layer will be the (semantic) HTML. After that I'll add the styling (as sketched in the wireflow). I will also add the icons in this layer. Eventually the 'fancy' menu will be added in the pleasurable layer.

A more detailed overview of all the layers of the final app can be read in the [Wiki](https://github.com/jochemvogel/bt-eindopdracht/wiki/Layers).

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

### `/docs`

All the documents are located here. They're also mentioned in the README, so you don't have to look their either.

### `/client`

The client side part of the application

#### `/client/public`

You can find al the public resources here. In this project are no building scripts, so all the styling and scripting is (directly) placed in the `/public` folder.

#### `/client/views`

Here you can find all the views of the application. It's build with EJS for dynamic purposes, but it's basically HTML with some variables.

### The rest

The server side part of the application. Not applicable for this course. You need to run the server if you want to have the application locally. Wanted to separate this files in another folder, but couldn't make heroku work when I did that.
