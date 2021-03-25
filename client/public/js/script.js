function notifyMe() {
    // If the browser supports notifications
    if (!("Notification" in window)) {
        console.log("This browser does not support desktop notification");
    }

    // If have alredy been granted
    else if (Notification.permission === "granted") {
        newNotification("Game Update!", "Your favorite team scored!");
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== 'denied' || Notification.permission === "default") {
        Notification.requestPermission(function (permission) {

            // If the user accepts, let's create a notification
            if (permission === "granted") {
                newNotification("Game Update!", "Your favorite team scored!");
            }
        });
    }
}

function newNotification(title, body) {
    const options = {
        body,
    }

    const notification = new Notification(title, options);
}

// const socket = io('https://localhost:8001'); DOES NOT WORK

function updateGame() {
    const title = "Game Update!"
    const body = "Your favorite team scored!"

    // socket.emit('matchUpdate', { title, body })
}

