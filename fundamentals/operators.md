[⬅ Back to Glossary](../README.md)

# Operators

## 🧠 Concept Flow

Operators → Arithmetic → Comparison → Logical → Assignment → Operator Precedence

---

## 🔲 Black Box (Big Picture)

Operators are **symbols that perform actions on values**.

**The problem:** How do you manipulate, compare, and combine values in JavaScript? You need ways to:
- Perform calculations (add, subtract, multiply)
- Compare values (greater than, less than, equal)
- Combine values (concatenate strings)
- Assign values to variables
- Make decisions based on conditions

**The solution:** JavaScript provides operators—special symbols that tell the engine to perform specific operations on values.

**Example:**
```javascript
5 + 3           // 8 (arithmetic)
5 > 3           // true (comparison)
a = 5           // assignment
x && y          // logical
```

Operators are the verbs of JavaScript—they describe what you want to do with your values (the nouns).

---

## 🧠 Mental Model

Think of operators as **tools in a toolbox**:

**Arithmetic operators** = calculator
- `+` = add
- `-` = subtract
- `*` = multiply
- `/` = divide
- `%` = remainder

**Comparison operators** = measuring tape
- `>` = greater than
- `<` = less than
- `>=` = greater or equal
- `<=` = less or equal
- `===` = exactly equal
- `!==` = not equal

**Logical operators** = decision makers
- `&&` = AND (both must be true)
- `||` = OR (at least one must be true)
- `!` = NOT (flip the value)

**Assignment operators** = label maker
- `=` = assign
- `+=` = add and assign
- `-=` = subtract and assign

**Operator precedence** = order of operations
- Like PEMDAS in math (Parentheses, Exponents, Multiplication, Division, Addition, Subtraction)
- JavaScript has its own order of operations

**Key insight:** Operators transform values. They take inputs (operands) and produce outputs (results). Understanding which operator to use and how it behaves is fundamental to writing correct JavaScript.

---

## 📘 Breakdown (Explanation)

### Arithmetic Operators

Perform mathematical calculations:

```javascript
+    Addition
-    Subtraction
*    Multiplication
/    Division
%    Modulus (remainder)
**   Exponentiation (ES6+)
```

**Examples:**
```javascript
5 + 3        // 8
10 - 4       // 6
3 * 4        // 12
15 / 3       // 5
10 % 3       // 1 (remainder)
2 ** 3       // 8 (2 to the power of 3)
```

**Special behavior with `+`:**
- If both operands are numbers: addition
- If one operand is a string: concatenation
```javascript
5 + 3        // 8 (addition)
"5" + 3      // "53" (concatenation)
```

### Comparison Operators

Compare values and return boolean:

```javascript
>     Greater than
<     Less than
>=    Greater than or equal
<=    Less than or equal
===   Strict equality
!==   Strict inequality
==    Loose equality (avoid)
!=    Loose inequality (avoid)
```

**Examples:**
```javascript
5 > 3        // true
5 < 3        // false
5 >= 5       // true
5 <= 3       // false
5 === 5      // true
5 !== 3      // true
```

### Logical Operators

Combine boolean values:

```javascript
&&    Logical AND (both must be truthy)
||    Logical OR (at least one must be truthy)
!     Logical NOT (inverts the value)
```

**Examples:**
```javascript
true && true   // true
true && false  // false
true || false  // true
false || false // false
!true          // false
!false         // true
```

**Short-circuit evaluation:**
- `&&` stops if first operand is falsy
- `||` stops if first operand is truthy
```javascript
null && doSomething()  // returns null (second part never runs)
"hello" || doSomething()  // returns "hello" (second part never runs)
```

### Assignment Operators

Assign values to variables:

```javascript
=     Simple assignment
+=    Add and assign
-=    Subtract and assign
*=    Multiply and assign
/=    Divide and assign
%=    Modulus and assign
```

**Examples:**
```javascript
let x = 5;
x += 3;       // x = 8
x -= 2;       // x = 6
x *= 2;       // x = 12
```

### Unary Operators

Operate on a single value:

```javascript
+     Unary plus (convert to number)
-     Unary minus (negate)
++    Increment
--    Decrement
typeof  Type check
!      Logical NOT
```

**Examples:**
```javascript
+"5"         // 5 (converts to number)
-5           // -5 (negates)
let x = 5;
x++          // x = 6
x--          // x = 5
typeof 5     // "number"
```

### Operator Precedence

Operators execute in a specific order:

```javascript
// Higher precedence (executes first)
()
! ++ --
* / %
+ -
> < >= <=
=== !==
&&
||
?:
= += -= etc.
// Lower precedence (executes last)
```

**Example:**
```javascript
5 + 3 * 2    // 11 (multiplication first)
(5 + 3) * 2  // 16 (parentheses override)
```

---

## 🌍 Real-World Usage

Operators are used constantly in real-world development:

**Calculations:**
```javascript
const total = price * quantity;
const average = sum / count;
const discount = price * 0.1;
```

**Conditional Logic:**
```javascript
if (age >= 18 && hasLicense) {
  // can drive
}

if (user || guest) {
  // show content
}
```

**State Updates:**
```javascript
count += 1;
score *= multiplier;
name += " Jr.";
```

**Form Validation:**
```javascript
if (password.length >= 8 && password.includes("!")) {
  // valid password
}
```

**API Response Handling:**
```javascript
if (response.status >= 200 && response.status < 300) {
  // success
}
```

**Array Operations:**
```javascript
const index = array.length - 1;
const middle = Math.floor(array.length / 2);
```

**String Manipulation:**
```javascript
const fullName = firstName + " " + lastName;
const message = "Hello, " + name + "!";
```

---

## 💻 Examples

### Example 1: Arithmetic Operations

```javascript
const a = 10, b = 3;

console.log(a + b);   // 13 (addition)
console.log(a - b);   // 7 (subtraction)
console.log(a * b);   // 30 (multiplication)
console.log(a / b);   // 3.333... (division)
console.log(a % b);   // 1 (remainder)
console.log(a ** b);  // 1000 (exponentiation)
```

### Example 2: String Concatenation with +

```javascript
const greeting = "Hello";
const name = "World";

console.log(greeting + " " + name);  // "Hello World"
console.log("5" + 3);               // "53" (concatenation)
console.log(5 + 3);                 // 8 (addition)
```

### Example 3: Logical Operators

```javascript
const isLoggedIn = true;
const hasPermission = false;

console.log(isLoggedIn && hasPermission);  // false
console.log(isLoggedIn || hasPermission);  // true
console.log(!isLoggedIn);                   // false

// Short-circuit
const user = null;
const name = user && user.name;  // null (short-circuits)
```

### Example 4: Comparison Operators

```javascript
const age = 25;

console.log(age > 18);      // true
console.log(age < 30);      // true
console.log(age >= 25);     // true
console.log(age <= 25);     // true
console.log(age === 25);    // true
console.log(age !== 30);    // true
```

### Example 5: Operator Precedence

```javascript
console.log(5 + 3 * 2);      // 11 (multiplication first)
console.log((5 + 3) * 2);    // 16 (parentheses first)
console.log(5 + 3 > 7);      // true (addition, then comparison)
console.log(5 + (3 > 7));     // 5 (comparison, then addition)
```

---

## ⚠️ Common Mistakes and Confusions

### Mistake 1: Forgetting Operator Precedence

**Confusion:** Operators execute left to right.

**Reality:** Operators have precedence rules:
```javascript
5 + 3 * 2    // 11 (not 16)
```

**Fix:** Use parentheses when unsure:
```javascript
(5 + 3) * 2  // 16
```

### Mistake 2: Confusing = with ===

**Confusion:** `=` and `===` are similar.

**Reality:** They're completely different:
```javascript
if (a = 5)    // assignment (always truthy)
if (a === 5)  // comparison
```

**Fix:** Use `===` for comparisons, `=` for assignments.

### Mistake 3: Not Understanding + Behavior

**Confusion:** `+` always does addition.

**Reality:** `+` does concatenation with strings:
```javascript
"5" + 3      // "53" (not 8)
```

**Fix:** Use `Number()` or arithmetic for numeric addition.

### Mistake 4: Misusing Increment/Decrement

**Confusion:** `++` and `--` are simple.

**Reality:** Prefix and postfix behave differently:
```javascript
let x = 5;
console.log(x++);  // 5 (returns, then increments)
console.log(x);    // 6

let y = 5;
console.log(++y);  // 6 (increments, then returns)
```

### Mistake 5: Ignoring Short-Circuit Evaluation

**Confusion:** Both sides of `&&` or `||` always execute.

**Reality:** Short-circuiting stops execution:
```javascript
false && doSomething()  // doSomething never runs
true || doSomething()   // doSomething never runs
```

**Fix:** Be aware of side effects in short-circuited expressions.

---

## 📊 Visualization

```txt
Operator Precedence (Highest to Lowest):

1.  ()           Grouping
2.  ! ++ --      Unary operators
3.  * / %        Multiplication, division, modulus
4.  + -          Addition, subtraction
5.  > < >= <=    Comparison
6.  === !==      Equality
7.  &&           Logical AND
8.  ||           Logical OR
9.  ?:           Ternary
10. = += -=      Assignment
```

```txt
Logical Operator Truth Tables:

AND (&&):
┌───────┬───────┬───────┐
│   A   │   B   │ A && B│
├───────┼───────┼───────┤
│ true  │ true  │ true  │
│ true  │ false │ false │
│ false │ true  │ false │
│ false │ false │ false │
└───────┴───────┴───────┘

OR (||):
┌───────┬───────┬───────┐
│   A   │   B   │ A || B│
├───────┼───────┼───────┤
│ true  │ true  │ true  │
│ true  │ false │ true  │
│ false │ true  │ true  │
│ false │ false │ false │
└───────┴───────┴───────┘
```

```txt
+ Operator Behavior:

Number + Number → Addition
    ↓
5 + 3           → 8

String + Any    → Concatenation
    ↓
"5" + 3         → "53"
"hello" + " "   → "hello "
```

---

## 🔥 Build Challenge

### Mini Challenge: Operator Precedence Puzzle

Predict the output of these expressions:

```javascript
console.log(5 + 3 * 2);
console.log(5 * 3 + 2);
console.log(5 + 3 > 7);
console.log(5 + (3 > 7));
console.log(true && false || true);
console.log(true && (false || true));
```

**Requirements:**
- Write your prediction for each
- Run the code and compare
- Explain the precedence rules that apply

### Practical Challenge: Calculator Function

Build a simple calculator using operators:

```javascript
function calculate(a, b, operation) {
  // Your implementation
}
```

**Requirements:**
- Support operations: add, subtract, multiply, divide, modulus
- Handle division by zero
- Return result or error message
- Test with various inputs including edge cases

**Reflection:** How does operator precedence affect your implementation?

---

## 💡 My Understanding

Operators are the verbs of JavaScript—they describe actions you perform on values. The key insight is that operators follow specific rules (precedence, associativity) that determine how expressions are evaluated.

The most confusing operator is `+` because it does two different things: addition for numbers, concatenation for strings. This dual behavior is a common source of bugs. The solution is to be explicit—use `Number()` when you want numeric addition, or use template literals for string concatenation.

Logical operators (`&&`, `||`) have a powerful feature called short-circuit evaluation. They don't just return boolean values—they return the actual value that determined the result. This is why you can use them for default values: `const name = inputName || "Anonymous"`. This pattern is idiomatic JavaScript but requires understanding truthy/falsy values.

Operator precedence follows mathematical conventions (PEMDAS) but with JavaScript-specific rules. When in doubt, use parentheses—they make your intent clear and avoid precedence bugs.

Understanding operators is fundamental because they're in every line of code. Mastering them means writing cleaner, more predictable, and more efficient JavaScript.

---

## 🔗 Connection to Other Topics

**Previous Topics:**
- **Variables** → Operators manipulate variable values
- **Data Types** → Different types behave differently with operators
- **Type Coercion** → Some operators trigger coercion
- **Truthy and Falsy** → Logical operators rely on truthy/falsy
- **Equality Operators** → Comparison operators compare values

**Connects To:**
- **Conditional Logic** → Comparison and logical operators drive conditionals
- **Loops** → Increment/decrement operators control loops
- **Functions** → Operators used in function expressions
- **Expressions** → Operators combine values into expressions
- **Type Checking** → `typeof` operator checks types
- **Bitwise Operators** → Advanced operators for binary operations

Operators are the building blocks of JavaScript expressions—understanding them is essential for writing any JavaScript code.

---
<div style="display: flex; justify-content: space-between; margin-top: 30px;">
  <a href="./equality-operators.md">⬅ Back</a>
  <a href="./default-values.md">Next ➡ Default Values</a>
</div>

