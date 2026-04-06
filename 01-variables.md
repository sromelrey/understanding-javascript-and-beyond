[⬅ Back to Glossary](./README.md)

# Variables

---

## 🧠 Concept Flow

```text
Variables
   ↓
var / let / const
   ↓
Declaration vs Initialization
   ↓
Hoisting
   ↓
Temporal Dead Zone (TDZ)
```

---

## 🔲 Black Box (Big Picture)

Variables are **containers for storing values**.

👉 They let you:

* store data
* reuse it later
* update it when needed

---

## 📘 Breakdown (Explanation)

### 1. Declaration vs Initialization

```js
let a;       // declaration
a = 5;       // initialization
```

* **Declaration** → creating the variable
* **Initialization** → assigning a value

---

### 2. var, let, const

#### 🔹 var

* older way to declare variables
* function-scoped
* can be re-declared

#### 🔹 let

* block-scoped
* can be updated
* cannot be re-declared in same scope

#### 🔹 const

* block-scoped
* cannot be reassigned
* must be initialized

---

### 3. Scope (simple idea)

```js
if (true) {
  let x = 10;
}

console.log(x); // ❌ error
```

👉 `let` and `const` only exist inside their block

---

## 💻 Examples

### Example 1: Basic variable

```js
let name = "John";
console.log(name); // John
```

---

### Example 2: Reassignment

```js
let count = 1;
count = 2;

console.log(count); // 2
```

---

### Example 3: const behavior

```js
const age = 25;
age = 30; // ❌ error
```

---

### Example 4: var vs let

```js
if (true) {
  var a = 1;
  let b = 2;
}

console.log(a); // ✅ 1
console.log(b); // ❌ error
```

---

## ⚠️ Common Confusions

### ❗ 1. var vs let scope

* `var` ignores block scope
* `let` respects block scope

---

### ❗ 2. const does NOT mean immutable

```js
const obj = { name: "John" };
obj.name = "Doe"; // ✅ allowed
```

👉 You can change contents, just not reassign the variable

---

### ❗ 3. Declaration vs Initialization confusion

```js
let a;
console.log(a); // undefined
```

👉 Variable exists, but has no value yet

---

### ❗ 4. Why does this work?

```js
console.log(a); // undefined
var a = 5;
```

👉 This looks strange, but it’s not magic.

JavaScript actually runs your code in **two phases**:

```text
1. Creation Phase (prepare)
2. Execution Phase (run)
```

During the **creation phase**:

* variables are created in memory
* `var` is automatically initialized as `undefined`

During the **execution phase**:

* values are assigned
* code runs line by line

So this:

```js
var a = 5;
```

is roughly understood as:

```js
var a;        // created first (undefined)
a = 5;        // assigned later
```

⚠️ We will fully explain this in **Execution Context**

---

## 💡 My Understanding

Variables are just named storage for values.

But their behavior depends on how JavaScript prepares code before running it.

* `var` is created and initialized during the creation phase
* `let` and `const` are also created early, but behave differently

Understanding this helps explain:

* hoisting
* scope
* and why some code behaves unexpectedly

---

## 🔗 Connection to Other Topics

### 🔙 Previous

* Big Picture → showed that JavaScript prepares code before execution

---

### 🔜 Next

👉 **Data Types**

* Variables store values
* Next step: understand what kinds of values exist

---

### 🔮 Future Connections

* **Execution Context**
  → explains creation phase in detail

* **Hoisting**
  → explains variable behavior during creation

* **TDZ**
  → explains why `let`/`const` cannot be accessed early

---

<div style="display: flex; justify-content: space-between; margin-top: 30px;">
  <a href="./00-js-big-picture.md">⬅ Back</a>
  <a href="./02-data-types.md">Next ➡ Data Types</a>
</div>
