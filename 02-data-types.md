[⬅ Back to Glossary](./README.md)

# Data Types

---

## 🧠 Concept Flow

```text id="zbb6ws"
Data Types
   ↓
Primitive vs Non-Primitive
   ↓
Values vs References
   ↓
Objects
```

---

## 🔲 Black Box (Big Picture)

Data types define **what kind of value a variable can hold**.

👉 A variable doesn’t just store data
👉 It stores a *type of data*

---

## 📘 Breakdown (Explanation)

### 1. Primitive Types

Primitive values are **simple and stored directly**.

Examples:

* string
* number
* boolean
* null
* undefined
* symbol

```js id="aq34wh"
let name = "John";     // string
let age = 25;          // number
let isReady = true;    // boolean
```

👉 These are **copied by value**

---

### 2. Non-Primitive Types (Objects)

Non-primitive values are **stored by reference**.

👉 The main one is:

* object

```js id="hfdy3p"
let user = { name: "John" };
```

👉 This is not just a value
👉 It is a **reference to a location in memory**

---

### 3. Value vs Reference

#### 🔹 Primitive (Value)

```js id="l7f3h7"
let a = 5;
let b = a;

b = 10;

console.log(a); // 5
console.log(b); // 10
```

👉 `a` is NOT affected

---

#### 🔹 Object (Reference)

```js id="hf9kql"
let a = { value: 5 };
let b = a;

b.value = 10;

console.log(a.value); // 10
```

👉 Both point to the same object

---

## 💻 Examples

### Example 1: Primitive copy

```js id="r9ap4n"
let x = "hello";
let y = x;

y = "world";

console.log(x); // hello
```

---

### Example 2: Object reference

```js id="7c4vhr"
let obj1 = { name: "John" };
let obj2 = obj1;

obj2.name = "Doe";

console.log(obj1.name); // Doe
```

---

### Example 3: typeof

```js id="uk7c88"
console.log(typeof "text"); // string
console.log(typeof 10);     // number
console.log(typeof {});     // object
```

---

## ⚠️ Common Confusions

### ❗ 1. typeof null

```js id="9bmxu2"
console.log(typeof null); // object ❌ (historical bug)
```

👉 This is a known JavaScript quirk

---

### ❗ 2. Objects are NOT copied

```js id="w0gk9o"
let a = { x: 1 };
let b = a;
```

👉 You are copying the reference, not the object

---

### ❗ 3. Arrays are objects

```js id="cnj42l"
typeof [] // "object"
```

👉 Arrays are a type of object

---

## 💡 My Understanding

Data types define how values behave.

* Primitive values are simple and copied directly
* Objects are stored in memory and accessed by reference

This difference explains why:

* primitives don’t affect each other
* objects can change unexpectedly

---

## 🔗 Connection to Other Topics

### 🔙 Previous

* Variables → store values
  👉 Data Types define *what kind of values*

---

### 🔜 Next

👉 **Functions**

* Functions are also a type of object
* They behave differently from primitives

---

### 🔮 Future Connections

* **Execution Context**
  → explains how values are stored in memory

* **Objects**
  → deeper understanding of references and mutation

* **Closures**
  → depend on how values are stored and accessed

---

<div style="display: flex; justify-content: space-between; margin-top: 30px;">
  <a href="./01-variables.md">⬅ Back</a>
  <a href="./03-functions.md">Next ➡ Functions</a>
</div>
