# What Are Unary Operators, and How Do They Work?

Unary operators act on a single operand to perform operations like type conversion, value manipulation, or checking certain conditions. Let's look at some common unary operators and how they work.

The unary plus operator converts its operand into a number. If the operand is already a number, it remains unchanged.

```js
const str = '42';
const strToNum = +str;

console.log(strToNum); // 42
console.log(typeof str); // string
console.log(typeof strToNum); // number
```
Unary plus is handy when you want to make sure you're working with a numeric value. As you might guess, there's a unary negation operator. It negates the value of the operand. It works similarly to the unary plus, except it flips the sign.
```js
const str = '42';
const strToNegativeNum = -str;

console.log(strToNegativeNum); // -42
console.log(typeof str); // string
console.log(typeof strToNegativeNum); // number
```

The logical NOT operator, represented by an exclamation mark (!), is another unary operator. It flips the boolean value of its operand. So, if the operand is true, it becomes false, and if it's false, it becomes true. 

```js
let isOnline = true;
console.log(!isOnline); // false

let isOffline = false;
console.log(!isOffline); // true
```

The bitwise NOT operator is a less commonly used unary operator. Represented by a tilde, ~, it inverts the binary representation of a number. Computers store numbers in binary format (1s and 0s). The ~ operator flips every bit, meaning it changes all 1s to 0s and all 0s to 1s. You will learn more about binary and bits in a future lesson.

```js
const num = 5; // The binary for 5 is 00000101

console.log(~num); // -6
```

In this example, 5 became -6 because by applying the ~ operator to 5, you get - (5 + 1), which equals -6 due to two's complement representation. Two's complement is a way computers represent negative numbers in binary. You probably won't use the bitwise NOT often unless you're working with low-level programming tasks like manipulating bits directly.

The void keyword is a unary operator that evaluates an expression and returns undefined.

```js
const result = void (2 + 2);

console.log(result); // undefined
```
void is also commonly used in hyperlinks to prevent navigation:

```html
<a href="javascript:void(0);">Click Me</a>
```
Finally, there is the typeof operator which you learned about in previous lessons. This returns the type of its operand as a string.

```js
const value = 'Hello world';

console.log(typeof value); // string
```

## Bitwise Operators

### What Are Bitwise Operators, and How Do They Work?

### Bits and Binary

Bitwise operators in JavaScript are special operators that work on the binary representations of numbers. To understand bitwise operators, we first need to grasp the concept of bits and binary numbers. In computing, a bit is the most basic unit of information. It can have only two values: 0 or 1. Binary is a number system that uses only these two digits to represent all numbers.

#### Binary Example

For example, the binary representation of the decimal number 10 is 1010. In this system, each digit represents a power of 2, starting from the rightmost digit and increasing as we move left.

!["Binary table"](image.png)


In the table above, the first row shows the binary number 1010, the second row shows the power of 2 represented by each binary position, and the third row shows the result of each multiplication. If you add all the values in the third row, they total 10.
Bitwise Operators Overview

Now, let's dive into bitwise operators. These operators perform operations on the binary representations of numbers. JavaScript provides several bitwise operators, including AND (&), OR (|), XOR (^), NOT (~), left shift (<<), and right shift (>>).

### Bitwise AND

The bitwise AND (&) operator returns a 1 in each bit position for which the corresponding bits of both operands are 1. Here's an example:
```js
let a = 5;  // Binary: 101
let b = 3;  // Binary: 011
console.log(a & b);  // 1 (Binary: 001)
```
In this example, we perform a bitwise AND operation on 5 (101 in binary) and 3 (011 in binary). The result is 1 (001 in binary) because only the rightmost bit is 1 in both numbers.


### Bitwise OR 
The bitwise OR (|) operator returns a 1 in each bit position for which the corresponding bits of either or both operands are 1. For example:
```js
let a = 5;  // Binary: 101
let b = 3;  // Binary: 011
console.log(a | b);  // 7 (Binary: 111)
```
Here, the result is 7 (111 in binary) because at least one of the bits is 1 in each position.


### Bitwise XOR
The bitwise XOR (^) operator returns a 1 in each bit position for which the corresponding bits of either, but not both, operands are 1. For instance:

```js
let a = 5;  // Binary: 101
let b = 3;  // Binary: 011
console.log(a ^ b);  // 6 (Binary: 110)
```
The result is 6 (110 in binary) because the first and second bits from the right are different in the two numbers.


### Bitwise NOT

The bitwise NOT (~) operator inverts all the bits of its operand. For example:

```js
let a = 5;  // Binary: 101
console.log(~a);  // -6
```
This might seem surprising, but it's because of how negative numbers are represented in binary using two's complement.

### Left Shift

The left shift (<<) operator shifts all bits to the left by a specified number of positions. For example:
```js
let a = 5;  // Binary: 101
console.log(a << 1);  // 10 (Binary: 1010)
```

Here, all bits are shifted one position to the left, effectively multiplying the number by 2.

### Right Shift

The right shift (>>) operator shifts all bits to the right. For example:
```js
let a = 5;  // Binary: 101
console.log(a >> 1);  // 2 (Binary: 10)
```
Here, all bits are shifted one position to the right, effectively dividing the number by 2 and rounding down.

## Use Cases

Bitwise operators are often used in low-level programming and cryptography. While they may not be as commonly used in everyday JavaScript programming, understanding them can be beneficial for certain specialized tasks and can deepen your understanding of how computers work at a fundamental level.
