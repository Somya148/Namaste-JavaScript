//what is a callback function in js?
// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished
//when we pass one function to the another function then it is known as callback function.
//we can do asynchronous things inside js with the callback functions


// Sure, here are some key points to note about callback functions in JavaScript:
// (Readme)

// Example 1: setTimeout with a named callback function
const message = function () {
    console.log("This message is shown after 3 seconds");
}

setTimeout(message, 3000);

// Example 2: setTimeout with an anonymous callback function
setTimeout(function () {
    console.log("This message is shown after 3 seconds");
}, 3000);

// Example 3: setTimeout with an arrow function
setTimeout(() => {
    console.log("This message is shown after 3 seconds");
}, 3000);

// Example 4: Event handling with addEventListener
// HTML: <button id="callback-btn">Click here</button>
document.querySelector("#callback-btn")
    .addEventListener("click", function () {
        console.log("User has clicked on the button!");
    });

