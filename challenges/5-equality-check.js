// ### 5. Equality Check

// In this challenge, you must verify the equality of two different values given the parameters `a` and `b`.

// Both the _value_ and _type_ of the parameters need to be equal. The possible types of the given parameters are:

// -   Numbers
// -   Strings
// -   Booleans (`false` or `true`)
// -   Special values: `undefined`, `null` and `NaN`

// What have you learned so far that will permit you to do two different checks (value **and** type) with a single statement?

// Implement a function that returns `true` if the parameters are equal, and `false` if they are not.

// #### Examples

// ```
// checkEquality(1, true) ➞ false
// // A number and a boolean: the value and type are different.

// checkEquality(0, "0") ➞ false
// // A number and a string: the type is different.

// checkEquality(1,  1) ➞ true
// // A number and a number: the type and value are equal.
// ```

const checkEquality = (a, b) => {
  let typeA = typeof a;
  let typeB = typeof b;
  let valueA = a;
  let valueB = b;
  console.log(typeA === typeB && valueA === valueB);
};

checkEquality(1, true);
checkEquality(0, "0");
checkEquality(1, 1);
checkEquality("hola", "hola");
checkEquality(1, 2, 1);
checkEquality(1, 2);
