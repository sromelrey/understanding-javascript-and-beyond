[⬅ Back to Glossary](../README.md)

# Data Types

## 🧠 Concept Flow

Data Types → Primitive vs Reference → Value Copy vs Reference Copy → Memory Storage → Type Coercion

---

## 🔲 Black Box (Big Picture)

Data types define **what kind of value a variable can hold** and **how that value behaves**.

**The problem:** Not all data is the same. Some data is simple (a number, a text string), while other data is complex (a list of items, a user profile with multiple properties). How does JavaScript handle these different kinds of data?

**The solution:** JavaScript categorizes data into two main categories:
- **Primitive types** (simple, immutable values stored directly)
- **Reference types** (complex, mutable values stored by reference)

This distinction affects:
- How values are copied
- How values are compared
- How values behave when passed to functions
- How memory is managed

Understanding data types is fundamental because everything in JavaScript is either a primitive or an object.

---

## 🧠 Mental Model

Think of data types as **different ways of storing information in a warehouse**:

**Primitives are like photocopies:**
- When you copy a primitive, you get a completely independent copy
- Changing the copy doesn't affect the original
- The value itself is stored directly in the variable's box

**References are like shared keys to a storage locker:**
- When you copy a reference, you copy the key (not the locker contents)
- Both keys open the same locker
- If you change what's inside the locker, everyone with a key sees the change

**Memory visualization:**

```txt
Primitives (Value):
Variable Box: [5] ← value stored directly
Variable Box: [5] ← copy has its own value

References (Memory Address):
Variable Box: [→ 0x1234] ← stores address
Variable Box: [→ 0x1234] ← copy has same address
Memory 0x1234: {value: 5} ← actual object
```

**Another analogy:**
- **Primitives** = writing on a piece of paper (each copy is independent)
- **References** = sharing a Google Doc (everyone sees the same changes)

---

## 📘 Breakdown (Explanation)

### Primitive Types

Primitives are simple, immutable values stored directly in the variable.

**The 7 primitive types:**
1. **string** - text (`"hello"`, `'world'`)
2. **number** - numeric values (`42`, `3.14`, `NaN`, `Infinity`)
3. **boolean** - true/false (`true`, `false`)
4. **undefined** - a variable that has been declared but not assigned
5. **null** - intentional absence of value
6. **symbol** - unique identifiers (ES6+)
7. **bigint** - large integers (ES2020+)

**Key characteristics:**
- Stored by value (the actual value is in the variable)
- Immutable (you can't change a primitive value itself)
- Compared by value (two primitives are equal if they have the same value)

### Reference Types (Objects)

Reference types are complex values stored by reference to a memory location.

**The main reference type:**
- **object** - collections of key-value pairs

**Special types of objects:**
- **arrays** - ordered lists (`[1, 2, 3]`)
- **functions** - executable code blocks
- **dates** - date/time values
- **regex** - pattern matching
- **etc.**

**Key characteristics:**
- Stored by reference (the variable holds a memory address)
- Mutable (you can change the object's properties)
- Compared by reference (two objects are equal only if they reference the same memory location)

### Value vs Reference Copying

**Primitive copy (by value):**
```javascript
let a = 5;
let b = a;  // b gets a copy of the value 5
b = 10;     // changing b doesn't affect a
// a is still 5
```

**Reference copy (by reference):**
```javascript
let a = { value: 5 };
let b = a;  // b gets a copy of the memory address
b.value = 10; // changing b affects a (same object)
// a.value is now 10
```

### Type Checking

Use `typeof` to check primitive types:
```javascript
typeof "hello"  // "string"
typeof 42       // "number"
typeof true     // "boolean"
typeof undefined // "undefined"
typeof null     // "object" (historical bug!)
typeof {}       // "object"
typeof []       // "object" (arrays are objects)
```

For objects (including arrays), use `Array.isArray()` or check constructor:
```javascript
Array.isArray([])  // true
[] instanceof Array // true
```

---

## 🌍 Real-World Usage

Understanding data types is crucial in real-world development:

**State Management (React, Redux):**
- Primitive state updates create new values (immutable pattern)
- Object/Array state updates require careful copying to avoid mutations
- React's `useState` relies on understanding value vs reference

**API Responses:**
- JSON data is parsed into objects and arrays (references)
- Need to deep copy API responses to avoid mutating cached data
- Primitives from APIs can be used directly

**Function Parameters:**
- Passing primitives: safe, can't be mutated by the function
- Passing objects: function can mutate the original (surprising bugs)
- Need to clone objects before passing if you want to preserve original

**Performance:**
- Primitives are faster to copy (small, simple)
- Objects are slower to copy (larger, complex)
- Use primitives when possible for performance

**Equality Checking:**
- Primitives: simple `===` comparison
- Objects: need deep equality checks (custom functions or libraries)
- This affects testing, validation, and conditional logic

---

## 💻 Examples

### Example 1: Primitive Copying

```javascript
let x = "hello";
let y = x;

y = "world";

console.log(x); // "hello" (unchanged)
console.log(y); // "world"
```

### Example 2: Reference Copying

```javascript
let obj1 = { name: "John", age: 25 };
let obj2 = obj1;

obj2.name = "Doe";
obj2.age = 30;

console.log(obj1); // { name: "Doe", age: 30 } (changed!)
console.log(obj2); // { name: "Doe", age: 30 }
```

### Example 3: Array Reference Behavior

```javascript
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1); // [1, 2, 3, 4] (changed!)
console.log(arr2); // [1, 2, 3, 4]
```

### Example 4: Object Comparison

```javascript
let a = { value: 5 };
let b = { value: 5 };

console.log(a === b); // false (different memory addresses)
console.log(a.value === b.value); // true (same primitive value)
```

### Example 5: Function Parameter Mutation

```javascript
function changePrimitive(num) {
  num = 100;
}

function changeObject(obj) {
  obj.value = 100;
}

let x = 5;
let y = { value: 5 };

changePrimitive(x);
changeObject(y);

console.log(x);        // 5 (unchanged)
console.log(y.value); // 100 (changed!)
```

---

## ⚠️ Common Mistakes and Confusions

### Mistake 1: Thinking Objects Are Copied by Value

**Confusion:** Assigning an object to a new variable creates a copy.

**Reality:** It copies the reference, not the object. Both variables point to the same object.

```javascript
let a = { x: 1 };
let b = a;
b.x = 2;
console.log(a.x); // 2 (unexpected!)
```

### Mistake 2: typeof null Returns "object"

**Confusion:** `typeof null` should return "null".

**Reality:** This is a historical bug in JavaScript from the first version. `typeof null` returns "object" due to how values were represented in memory.

```javascript
typeof null; // "object" (bug, not feature)
```

To check for null: `value === null`

### Mistake 3: Arrays Are Objects

**Confusion:** `typeof []` should return "array".

**Reality:** Arrays are a special type of object in JavaScript. `typeof []` returns "object".

```javascript
typeof []; // "object"
Array.isArray([]); // true (correct way to check)
```

### Mistake 4: Confusing Equality for Objects

**Confusion:** Two objects with the same content should be equal.

**Reality:** Object equality checks references, not content.

```javascript
{} === {}; // false (different objects)
[1, 2] === [1, 2]; // false (different arrays)
```

### Mistake 5: Thinking Primitives Are Objects

**Confusion:** Primitives have methods (like `"hello".length`), so they must be objects.

**Reality:** Primitives are temporarily wrapped in objects when you access properties/methods. This is called "autoboxing."

```javascript
"hello".length; // 5 (temporarily wrapped as String object)
```

---

## 📊 Visualization

```txt
Memory Layout:

Primitives (Value Storage):
┌─────────┬─────────┐
│  let a  │   5     │ ← value stored directly
└─────────┴─────────┘
┌─────────┬─────────┐
│  let b  │   5     │ ← independent copy
└─────────┴─────────┘

References (Address Storage):
┌─────────┬──────────┐
│  let a  │  0x1234  │ ← stores memory address
└─────────┴──────────┘
┌─────────┬──────────┐
│  let b  │  0x1234  │ ← same address
└─────────┴──────────┘
        ↓
┌─────────────────────┐
│ Memory 0x1234:      │
│ { value: 5 }        │ ← actual object
└─────────────────────┘
```

**Copy Behavior Visualization:**

```txt
Primitive Copy:
Original: [5]
            ↓ copy value
Copy:     [5] (independent)

Reference Copy:
Original: [→ 0x1234]
            ↓ copy address
Copy:     [→ 0x1234]
            ↓ both point to
Memory:    { value: 5 }
```

---

## 🔥 Build Challenge

### Mini Challenge: Clone an Object

Write a function that creates a true copy of an object (not just a reference copy). The copy should be independent—modifying it shouldn't affect the original.

**Requirements:**
- Handle nested objects (deep copy)
- Handle arrays
- Don't use `JSON.parse(JSON.stringify())` (understand the manual approach)
- Test that modifying the copy doesn't affect the original

### Practical Challenge: Immutable State Updater

Create a function that updates an object's property immutably—returning a new object instead of mutating the original.

**Requirements:**
- Function takes an object, property name, and new value
- Returns a new object with the updated property
- Original object must remain unchanged
- Handle nested properties (e.g., `user.address.city`)

**Reflection:** How does this relate to React's state management philosophy?

---

## 💡 My Understanding

Data types seem simple on the surface, but the distinction between primitives and references is fundamental to understanding how JavaScript works. The key insight is that variables don't always "contain" values—sometimes they just point to them.

This explains so many JavaScript behaviors that seem confusing at first:
- Why changing an object in one place affects it everywhere
- Why two identical objects aren't equal
- Why functions can mutate objects passed as parameters
- Why React needs special handling for object state

The primitive/reference distinction is also a performance consideration. Primitives are cheap to copy (just copy the value), while objects are expensive (need to copy all properties). This is why JavaScript defaults to reference copying for objects—it's faster, even if it can cause bugs if you're not careful.

Understanding this foundation makes everything else easier: closures, state management, API handling, even debugging become more intuitive when you understand what's actually happening in memory.

---

## 🔗 Connection to Other Topics

**Previous Topics:**
- **Variables** → Variables store values; data types define what kind of values
- **How JavaScript Works** → The memory heap stores objects; call stack handles primitives

**Connects To:**
- **Objects** → Deep dive into reference types and object behavior
- **Arrays** → Arrays are objects with special behavior
- **Functions** → Functions are objects (callable objects)
- **Type Coercion** → How JavaScript converts between types
- **Equality Operators** → How `==` and `===` work with different types
- **Execution Context** → How values are stored in variable environments
- **Closures** → How functions capture references to outer variables
- **Immutability Patterns** → Techniques to avoid reference mutation bugs

Data types are the foundation—everything else builds on understanding how values are stored and accessed.

---
<div style="display: flex; justify-content: space-between; margin-top: 30px;">
  <a href="./variables.md">⬅ Back</a>
  <a href="./operators.md">Next ➡ Operators</a>
</div>
