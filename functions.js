// 1.Function Statement aka Function Declaration
function a() {
    console.log("a called");
}
a();



// 2. Function Expression
/*
In JS we can assign function to a value this is known as function expression.
*/
var b = function () {
    console.log("b called");
}
b();



/*
diff btw function statement and function expression is the->Hoisting
funtion stateme
*/



// 3.Function Declaration same as Function Statement




// 4. Anonymous Function
/*
A function has no name is known as Anonymous Function,
It will thow a Syntax Error (because according to ES6 convention we should aloways name our function)

So where These Anonymous Function are used?
These are used a value, just like we did in Function Expression.
*/
// function (){

// }



// 5.Named Function Expression
// Exactly like function expression but instead of using anonymous function we use name function.
var b = function xyz() {
    console.log("b called");
}
/* IMPORTANT:-
But when we will call it as a function xyz it will throw an error because it;s scope is only inside the function itself there we can call it by using xyz , means (only inside the curly braces) other than that we should call it using b().

*/

// 6. Difference btw Parameters & Arguments ?
var b = function (param1, param2) {
    console.log("Parameters");
}
/*
The values which we pass inside the function are known as parameters.
*/


b(1, 2);
/*
The values which we pass inside the function are known as arguments.
*/



//7. First Class Functions
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

var x = function (param1) {

}

x(function y() {
    console.log("function passed as an argument");
});
