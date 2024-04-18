# Namaste-JavaScript
 Namaste JavaScript by Akshay Saini !

 **First Class Functions**
/*
What is First Class Function Or First class citizens?
A.   The Ability of use function as value is known as First class Function ,
*     Can be passed as an Argument,
*     Can be executed inside a closured function &
*     Can be taken as return form.
       For Ex - var b = function(param){
                             return function xyz(){
                                     console.log(" F C F ");
                             }
                     } 


Function are heart of JS. They are called first class citizens or first class functions because they have the ability to be stored in the variables, passed as parameters and arguments. They can also be returned in the function.*/


**CallBack Function**
 
 1. **Definition**: A callback function in JavaScript is a function that is passed as a parameter to another function and is invoked or called inside the outer function.

2. **Asynchronous Programming**: Callback functions are essential for handling asynchronous tasks in JavaScript. They ensure that certain code executes only after a particular task has been completed, preventing blocking of code execution.

3. **setTimeout Example**: The `setTimeout` function is a built-in method in JavaScript used to execute a function or evaluate an expression after a specified period of time. It's commonly used to demonstrate callback functions, like waiting for 3 seconds before executing a function.

4. **Anonymous Functions**: Callback functions can be defined anonymously, meaning they have no name and are declared directly within the outer function call.

5. **Arrow Functions**: With ES6, arrow functions provide a concise syntax for writing functions. Callback functions can also be written using arrow function syntax.

6. **Event Handling**: In event-driven programming, such as JavaScript, callback functions are frequently used to handle events. For instance, when a user clicks a button, a callback function can be triggered to respond to that event.

7. **addEventListener Example**: The `addEventListener` method is used to attach an event handler to an HTML element. It takes two parameters: the event type (e.g., "click") and the callback function to execute when the event occurs.

8. **Usage**: Callback functions are fundamental to many JavaScript libraries and frameworks, enabling developers to write clean and efficient asynchronous code.


