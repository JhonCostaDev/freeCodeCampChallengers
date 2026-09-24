# What Are Booleans, and How Do They Work with Equality and Inequality Operators?

In an earlier lesson, you were first introduced to the concept of booleans, but in this lesson, we will dive deeper into how booleans work and how the equality and inequality operators work.


## Working with Booleans

Booleans are a data type with only true and false values. They're useful because they allow you to do something based on some conditions. Booleans are essential when you want to evaluate whether something should happen or not, like deciding if someone can access a certain feature in your app. Here is an example of setting the value true to a variable called **isOldEnoughToDrive**:

```js
let isOldEnoughToDrive = true;

console.log(isOldEnoughToDrive); // true

//You can use this variable inside a conditional like this:

let isOldEnoughToDrive = true;

if (isOldEnoughToDrive) {
 console.log("You're old enough to drive"); // You're old enough to drive
} else {
 console.log("Sorry, you are not old enough to drive");
}
```

A conditional helps you make decisions in your code based on a condition. This example uses what is called an if/else statement.

If **isOldEnoughToDrive** is true, then the sentence You're old enough to drive will be logged to the console. Otherwise, if the isOldEnoughToDrive is false, then the sentence Sorry, you are not old enough to drive will be logged to the console. Since the isOldEnoughToDrive variable is set to true, the first sentence will be logged to the console. You will learn more about if/else statements in a future lesson.

## Using Equality Operators

To compare two values, you can use either the equality or strict equality operator. The result of the comparison will be a boolean of either true or false. Here is an example of using the equality operator to compare a string and a number. The equality operator is represented by a double equals sign (==).

console.log(5 == "5"); // true

In this example, JavaScript converts the string "5" into the number 5 and then checks if they are equal. Since both values are now the same, the result is true. The equality operator uses type coercion before checking if each value is equal.

This differs from the strict equality operator, which does not perform type coercion. The strict equality operator will check if the types are the same and if the values are the same. Here is an example using the strict equality operator to compare a number and string. This operator is represented by a triple equals sign (===).
```js
console.log(5 === '5'); // false
```

The following comparison will be false, because a string data type is not the same as a number data type.

## Using Inequality Operators

If you need to check if something is not equal to another value, then you can use the inequality or strict inequality operators. Here is an example of using the inequality operator (!=) to compare a number with a string.

```js
console.log(5 != "5"); // false
```

In this example, the result would be false because the inequality operator first converts the string value to a number and then compares the values. Since the values would be the same it will return false. If you tried to use the strict inequality operator, then you would get a different result. The strict inequality operator is represented by an exclamation mark followed by two equal signs (!==).

```js
console.log(5 !== "5"); // true
```

The result would be true because the strict inequality operator does not perform any type coercion. Since the number 5 is not equal to the string "5", then the result is true.

## Best Practices

It is considered best practice to use strict inequality and equality operators whenever possible, as they do not perform type coercion. Most of the time in professional projects, you will see codebases that usually prefer these two operators over the inequality and equality operators.

## What Are Comparison Operators, and How Do They Work?

Comparison operators allow you to compare two values and return a **true** or **false** result. You can then use the result to make a decision or control the flow of your program. You use comparisons in if statements, loops, and many other situations where you need to make decisions based on certain conditions. Let's dive into the most common comparison operators and see how they work.

The greater than operator, represented by a right-angle bracket **(>)**, checks if the value on the left is greater than the one on the right:

```js
let a = 6;
let b = 9;

console.log(a > b); // false
console.log(b > a); // true
```

The greater than or equal operator, represented by a right-angle bracket and the equals sign (>=), checks if the value on the left is either greater than or equal to the one on the right:
```js
let a = 6;
let b = 9;
let c = 6;

console.log(a >= b); // false
console.log(b >= a); // true
console.log(a >= c); // true
```

The lesser than operator, represented by a left-angle bracket (<) works similarly to >, but in reverse. It checks if the value on the left is smaller than the one on the right:
```js
let a = 6;
let b = 9;

console.log(a < b); // true
console.log(b < a); // false
```

The less than or equal operator, represented by a left-angle bracket and the equals sign (<=) checks if the value on the left is smaller than or equal to the one on the right:
```js
let a = 6;
let b = 9;
let c = 6;

console.log(a <= b); // true
console.log(b <= a); // false
console.log(a <= c); // true
```