// Suggested steps:
let users = JSON.parse(localStorage.getItem("users") || "[]");
let currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

restoreData();

// 1. Create the Event and User constructor functions.
function Event(title, dateTime, reminderTime) {
  this.title = title;
  this.dateTime = new Date(dateTime); // -> Date Object
  this.reminderTime = reminderTime; // number in minutes
  this.timeout = null;
}

function User(name, email) {
  this.name = name;
  this.email = email;
  this.events = [];
  this.addEvent = (event) => {
    this.events.push(event);
    displayEvents();
  };
}
// 2. Implement the user login functionality.
function login(event) {
  event.preventDefault();
  const userName = document.getElementById("userName").value;
  const userEmail = document.getElementById("userEmail").value;
  if (userName.trim().length === 0 || userEmail.trim().length === 0) {
    alert("Please enter your name and email");
    return;
  }
  const user = new User(userName, userEmail);
  users.push(user);
  const loginSection = document.getElementById("loginSection");
  const eventSection = document.getElementById("eventSection");
  const logoutButton = document.getElementById("logoutButton");
  loginSection.style.display = "none";
  eventSection.style.display = "block";
  logoutButton.style.display = "block";
  currentUser = user;
  setLocalStorage();
}
// 3. Implement the event addition functionality.
function addEvent(event) {
  event.preventDefault();
  const eventTitle = document.getElementById("eventTitle").value;
  const eventDateTime = document.getElementById("eventDateTime").value;
  const eventReminderTime = document.getElementById("eventReminderTime").value;
  if (
    eventTitle.trim().length === 0 ||
    eventDateTime.trim().length === 0 ||
    eventReminderTime.trim().length === 0
  ) {
    alert("Please enter event details");
    return;
  }
  console.log(currentUser.events.map((e) => e.title));
  if (currentUser.events.map((e) => e.title).includes(eventTitle)) {
    alert("You already have an event with this title");
    return;
  }
  const userEvent = new Event(eventTitle, eventDateTime, eventReminderTime);
  currentUser.addEvent(userEvent);
  users.forEach((user) => {
    if (user.name === currentUser.name) {
      console.log(userEvent)
      user.addEvent(userEvent);
    }
  });
  remindUser(currentUser, userEvent);
  setLocalStorage();
}

function displayEvents() {
  const output = document.getElementById("output");
  output.innerHTML = "";
  const nextHourDate = new Date().setHours(new Date().getHours() + 1);
  users.forEach((user) => {
    const header = document.createElement("h1");
    header.textContent = `Upcoming events for ${user.name}`;
    output.appendChild(header);
    user.events.forEach((event) => {
      if (event.dateTime < nextHourDate && event.dateTime > Date.now()) {
        const p = document.createElement("p");
        p.addEventListener("click", () => {
          deleteEvent(event, user);
        });
        p.style.cursor = "pointer"; // Add cursor pointer to the date to be clickable.
        p.textContent = `- ${
          event.title
        } at ${event.dateTime.toLocaleString()}`;
        output.appendChild(p);
      }
    });
    setLocalStorage()
  });
}
// 4. Set up reminders using setTimeout().
function remindUser(user, event) {
  const dateToRemind =
    event.dateTime - new Date() - +event.reminderTime * 60 * 1000;
  event.timeout = setTimeout(() => {
    alert(
      `${user.name}, time to ${event.title}! after ${event.reminderTime} minutes`
    );
  }, dateToRemind);
}
// 5. Display upcoming events using setInterval().
setInterval(() => {
  displayEvents();
}, 10000);

//6. delete event

function deleteEvent(event, user) {
  clearTimeout(+event.timeout); // Clear the timeout for the event.
  users = users.map((currUser) => {
    if (currUser.name === user.name) {
      user.events = user.events.filter((e) => e.title !== event.title);
    }
    return user;
  });
  currentUser.events = currentUser.events.filter(
    (e) => e.title !== event.title
  );
  displayEvents();
  setLocalStorage();
}

// set local storage data
function setLocalStorage() {
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
}

function restoreData() {
  if (currentUser && users.length > 0) {
    users.forEach((user) => {
      user.events = user.events
        .map((e) => {
          const userEvent = new Event(e.title, e.dateTime, e.reminderTime);
          if (userEvent.dateTime <= new Date()) return undefined;
          return userEvent;
        })
        .filter(Boolean);
      user.addEvent = (event) => {
        user.events.push(event);
        displayEvents();
      };
    });
    currentUser.addEvent = (event) => {
      currentUser.events.push(event);
      displayEvents();
    };
    currentUser.events = currentUser.events
      .map((e) => {
        const currentUserEvnet = new Event(e.title, e.dateTime, e.reminderTime);
        if (currentUserEvnet.dateTime <= new Date()) return undefined;
        remindUser(currentUser, currentUserEvnet);
        return currentUserEvnet;
      })
      .filter(Boolean); // Filter Boolean filter out undefined ( remove null and undefined from the array )
    const loginSection = document.getElementById("loginSection");
    const eventSection = document.getElementById("eventSection");
    const logoutButton = document.getElementById("logoutButton");
    loginSection.style.display = "none";
    eventSection.style.display = "block";
    logoutButton.style.display = "block";
    displayEvents();
  }
}

// 7. Implement logout function.
// simply remove the user from local storage and reload the page
function logout() {
  localStorage.removeItem("currentUser");
  localStorage.removeItem("users");
  window.location.reload();
}
