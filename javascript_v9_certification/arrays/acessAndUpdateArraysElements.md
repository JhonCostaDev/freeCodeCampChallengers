# How Do You Access and Update Elements in an Array?

In the previous lesson, you were introduced to working with arrays and accessing different elements in arrays. Here is a reminder of how to access the second element in an array:

```js
const fruits = ["apple", "banana", "cherry"];

console.log(fruits[1]); // "banana"
```

Since arrays are zero-based indexed, the first element will be at index 0, the second element is at index 1, and so on. It's important to note that if you try to access an index that doesn't exist in the array, JavaScript will return undefined.

```js
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[3]); // undefined
```

In this example, there is no element at index 3 for the fruits array. So the log will show undefined. Now, let's look at how to update elements in an array. You can update an element by assigning a new value to a specific index.

```js
let fruits = ["apple", "banana", "cherry"];
fruits[1] = "blueberry";
console.log(fruits); // ["apple", "blueberry", "cherry"]

```

In this example, we replaced banana with blueberry at index 1. This method allows you to change any element in the array, as long as you know its index. You can also add new elements to an array by assigning a value to an index that doesn't yet exist:

```js
let fruits = ["apple", "banana", "cherry"];
fruits[3] = "date";
console.log(fruits); // ["apple", "banana", "cherry", "date"]
```
However, exercise caution when doing this. If you assign a value to an index that is much larger than the current length of the array, you will create undefined elements for the indices in between, which can lead to unexpected behavior. As you continue to work with JavaScript, you'll find that these methods of accessing and updating array elements are fundamental to many programming tasks. Whether you're building a simple todo list or processing complex data structures, these skills will be invaluable.