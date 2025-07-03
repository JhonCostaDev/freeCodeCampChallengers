# Use the parseInt Function with a Radix

The `parseInt()` function parses a string and returns an **integer**. It takes a second argument for the `radix`, which specifies the base of the number in the string. The `radix` can be an integer between `2 and 36`.

The function call looks like:
```javascript
parseInt(string, radix);

// And here's an example:

const a = parseInt("11", 2);

```
The `radix` variable says that 11 is in the `binary system`, or `base 2`. This example converts the string `11` to an integer `3`.

Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.

#### Code base
```javascript

function convertToInteger(str) {

}

convertToInteger("10011");
```

#### Test
1. convertToInteger should use the parseInt() function

2. convertToInteger("10011") should return a number

3. convertToInteger("10011") should return 19

4. convertToInteger("111001") should return 57

5. convertToInteger("JamesBond") should return NaN