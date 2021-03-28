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
3.  **iOS:** Safari iPhone (on iPhone 12 mini)
4.  **Samsung/Android:** Samsung Internet (on Samsung Galaxy A51) _=> Best sold Samsung phone 2020_
5.  **Non-Samsung/Android):** UC Browser (on Moto G7 Play)

 <details>
<summary>Screenshot Chrome 88 (on Windows)</summary>
No screenshots for this browser. Tested Edge 88 as well (also a Chromium browser). I can conclude that everything works on modern Chromium browsers.

I choose to disable JS and CSS instead.

**Disabled CSS:**

![Disabled CSS 1](https://raw.githubusercontent.com/jochemvogel/bt-eindopdracht/master/docs/screenshots/chrome/Screenshot%202021-03-28%20at%2020.06.53.png)

![Disabled CSS 2](https://raw.githubusercontent.com/jochemvogel/bt-eindopdracht/master/docs/screenshots/chrome/Screenshot%202021-03-28%20at%2020.06.53.png)

**Disabled JS:**

![Disabled JS => Notification button is gone](https://raw.githubusercontent.com/jochemvogel/bt-eindopdracht/master/docs/screenshots/chrome/Screenshot%202021-03-28%20at%2020.07.58.png)

![Disabled JS => Navigation ](https://raw.githubusercontent.com/jochemvogel/bt-eindopdracht/master/docs/screenshots/chrome/Screenshot%202021-03-28%20at%2020.08.27.png)

</details>

 <details>
<summary>Screenshot Firefox 51 (on Mac)</summary>
![Modal out the view](https://raw.githubusercontent.com/jochemvogel/bt-eindopdracht/master/docs/screenshots/firefox/Screenshot%202021-03-28%20at%2017.38.53.png)

![Modal back in view](https://raw.githubusercontent.com/jochemvogel/bt-eindopdracht/master/docs/screenshots/firefox/Screenshot%202021-03-28%20at%2017.42.37.png)

![Date time local not supported](https://raw.githubusercontent.com/jochemvogel/bt-eindopdracht/master/docs/screenshots/firefox/Screenshot%202021-03-28%20at%2017.39.19.png)

![Request notifications](https://raw.githubusercontent.com/jochemvogel/bt-eindopdracht/master/docs/screenshots/firefox/Screenshot%202021-03-28%20at%2017.40.45.png)

</details>

 <details>
<summary>Screenshot Safari iPhone (on iPhone 12 mini)</summary>

![Screenshot iOS](https://raw.githubusercontent.com/jochemvogel/bt-eindopdracht/master/docs/screenshots/ios/Screenshot%202021-03-28%20at%2017.58.10.png)

![Error when notification requested](https://raw.githubusercontent.com/jochemvogel/bt-eindopdracht/master/docs/screenshots/ios/Screenshot%202021-03-28%20at%2018.01.38.png)

</details>

 <details>
<summary>Screenshot Samsung Internet (on Samsung Galaxy A51)</summary>

![Custom font does not work](https://raw.githubusercontent.com/jochemvogel/bt-eindopdracht/master/docs/screenshots/android/Screenshot%202021-03-28%20at%2017.51.34.png)

![Notifications does work](https://raw.githubusercontent.com/jochemvogel/bt-eindopdracht/master/docs/screenshots/android/Screenshot%202021-03-28%20at%2017.53.15.png)

</details>

 <details>
<summary>Screenshot UC Browser (on Moto G7 Play)</summary>

![Works, excepts the custom fonts](https://raw.githubusercontent.com/jochemvogel/bt-eindopdracht/master/docs/screenshots/motorola/Screenshot%202021-03-28%20at%2018.08.46.png)

![Notifications do work](https://raw.githubusercontent.com/jochemvogel/bt-eindopdracht/master/docs/screenshots/motorola/Screenshot%202021-03-28%20at%2018.09.02.png)

![Date time local also works](https://raw.githubusercontent.com/jochemvogel/bt-eindopdracht/master/docs/screenshots/motorola/Screenshot%202021-03-28%20at%2018.09.19.png)

</details>

#### Test Report

I tested:

1.  Custom Fonts
2.  Modal (menu)
3.  Date and time input types
4.  Notifications API

<details>
<summary>Chrome 88 (Without CSS and JS)</summary>
The test in Chrome 88 and Edge 88 (both Chromium) were both good. Everything works. With CSS and JS disabled the core functionalities still worked. Screenshots can be found in the previous chapter
</details>

<details>
<summary></summary>
</details>

<details>
<summary>Firefox 51</summary>
First I did not specify `left: 0;` and `top: 0;` on the modal, so it was half on the page. This was a quick fix by adding this to the modal.

Besides that `<input type="datetime-local">` is not supported in this browser. On caniuse.com you can see that 'Date and time input types' are supported in Firefox 57 and higher. And even worse: `datetime-local` is not supported in Firefox at all. `<input type="datetime-local">` returns `2021-03-28T19:39`, so let the user fill in it's own date is not really an option.

MDN says: _"Because of the limited browser support for `datetime-local`, and the variations in how the inputs work, it may currently still be best to use a framework or library to present these, or to use a custom input of your own. Another option is to use separate `date` and `time` inputs, each of which is more widely supported than `datetime-local`"_

I could do two things:

1.  As MDN suggesties: Add a separate date and time.
2.  Make a check if the browser supports the input datetimelocal. If it does, do nothing. Otherwise display a text field.

I decided to choose for the first one, because the user can't do anything wrong then. I had to rewrite some stuff, but in the end Firefox users can also edit/add matches.

</details>

<details>
<summary>iOS Safari</summary>
Everything works, except the notifications. Those are not allowed/possible in iOS. As written earlier in the README: in the ideal scenario you want to disable this, but because of the server side JS I do not know how to do that.

In client side JS you could do something like this:

```javascript
const ua = navigator.userAgent.toLowerCase();
const notificationBtn = document.getQuerySelector(‘.notification-btn’);

if (ua.includes("safari")) {
	if (ua.includes("mobile")) {
		notificationBtn.hidden = true (or notificationBtn.style.display = “none”)
	}
}
```

</details>

<details>
<summary>Samsung Internet</summary>
Custom fonts do not work. Fortunately I’ve callback fonts, so it will 'fall back' to cursive.

Notifications work (asking for permission), but it’s not sending anything. So that’s weird. Maybe it's a thing with the VM, because I use Browserstack.

On the same device, but on Chrome I got

```
script.js:41 Uncaught TypeError: Failed to construct 'Notification': Illegal constructor. Use ServiceWorkerRegistration.showNotification() instead.
```

That could be just a Chrome thing. On Samsung Internet I do not get the same error in the console. I even turned the notifications on and off and that didn't work either. Haven't figured it out yet. Seems to be something with the Service Worker, but haven't implemented that in this project.

</details>

<details>
<summary>UC Browser</summary>
This was (unexpectedly) a pretty good browser. Only the custom fonts did not work
</details>

#####

#####

### Enhancements

1.  **Fancy Menu**

The menu will go to the bottom of the page (with ID) if JS is not supported. If it is, create some nice menu that will improve the UX. With CSS disabled the whole button will disappear and the menu will be accessible on the bottom of the page.

2.  **Notification API**

When a match got updated I want to give the users (that enabled notifications for that match) to get a notification (with the Notification API). However, this is not supported in Safari on iOS. It's also not possible with JS disabled. Because of that the **Enable Notifications** button is disabled when JS is disabled. Although, I was not be able to show the button based on the browser support. I decided to check this JS. When notifications are not supported, the user will see an alert with the message that it is not supported. In the ideal situation you want to disable the whole button when it's not supported, but I do not know (yet) how to handle this (client side => i.e. with a query selector) in a server side application.

3.  **Icons**

I use a few icons (menu & view match), but they do not improve the UX of users that have CSS disabled. Because of that I used the pseudo `::after` element for those images. With CSS enabled you get some nice icons, but CSS disabled you won't see those.

4.  **Local fonts**

I downloaded some Google Fonts and put them to a local folder `/public/fonts`. A link the the Google Fonts will be an extra request. When the user has slow internet, this could cause a problem. To fix this I added local fonts AND used fallback fonts.

#### Enhancements I did not do

There are a few enhancements where I'd thought about, but I had no time to implement those.

1.  **Form Validation**

During a lecture I heard about the `onblur` on input fields. I could've added that. I.e. I have a max-length of 8 on the name of teams. But when you hit that 8 characters, you simple can't type anymore. Preferably you get an instant message. I don't know how I could do this, but it will improve the UX.

This is the only use case where I could implement this. Because of that I choose to not spend time on form validation.

2.  **Web Sockets**

It's not really an enhancement, but I did try to implement websockets. When you save a match, a message will be emitted (trigger) and a notification will be fired (action). Didn't work out well. I had my server running, but for some reason the whole server side/client side and different ports resulted in some problems. In a next course we will work with web sockets, so skipped it for now.

3.  **CSS Custom Properties**

I'm a huge fan of custom properties in CSS and use them always. But there are some browser that not support those. It could be an idea to add those custom properties and also add a `@supports` on some places in the CSS. I've not figured out how to do this correctly. Would simple take me too much time to implement this, so skipped it for now.

## :eyeglasses: Overview

### Screenshot

<details>
![Screenshot app](https://raw.githubusercontent.com/jochemvogel/bt-eindopdracht/master/docs/screenshots/Screenshot%202021-03-28%20at%2020.01.26.png)
<summary></summary>
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

### Layers

#### Functional/Reliable

I started by designing the app, so I knew how the app would look eventually. Then I started with implementing the HTML. I thought about semantic tags I could use. I.e. the cards with the match information could be an `<article>` and the navigation had to be a `<nav>`.

#### Usable

After implementing that I made the choice to now open (and edit) the HTML anymore. Why? Because changing the styling (CSS) won't change the structure of the HTML. I started editing the app, so it would look like the design. Did not add a lot of extra features/transitions. Just the styling.

During this layer I also ofter turned off the CSS to look if everything looks fine. Did not change HTML, but just to be sure.

#### Pleasurable

Eventually I added some extra features to it. For example the fancy menu. I also added some hover effects on elements that are interactive. This could be done in the usable step, because a simple `transform: scale(1.05)` is not a huge thing. But officially this is part of the pleasurable layer, so I decided to add it there.

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
