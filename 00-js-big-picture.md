[⬅ Back to Glossary](./README.md)

# 🧠 How JavaScript Works (Big Picture)

Before diving into details, we first treat JavaScript as a **black box**.

👉 We don’t need to understand everything yet.  
👉 We just want to know **what happens when code runs**.

---

## 🔲 The Black Box View

When you run JavaScript code, this is what happens:

```text
Your Code → (Compile + Prepare) → Execute → Output
```

* You write code
* The engine first **prepares it (compilation step)**
* Then it **executes the code**
* You see the result

---

### 🧠 What does “compile” mean here?

JavaScript has a built-in **compiler inside the engine**.

👉 It analyzes your code and prepares it before execution.

During this step:

* Variables are created in memory
* Functions are stored
* The structure of your code is understood

⚠️ Code is not fully executed yet
👉 It is being prepared

---

### 💡 Simple way to think about it

* **Compile** → Understand and prepare the code
* **Execute** → Run the code

---

## ⚙️ What is the JavaScript Engine?

The JavaScript engine is the program that **executes your code**.

Examples:

* Chrome → V8
* Node.js → V8
* Firefox → SpiderMonkey
* Safari → JavaScriptCore

👉 Think of it as the “machine” that understands JavaScript.

👉 Different engines may work differently internally, but they all follow the same JavaScript standard (ECMAScript).

---

## 🧩 Inside the Black Box (Simplified)

Inside the engine, there are a few important parts:

```text
Memory (Heap) ← stores data
        ↓
Call Stack ← runs code
        ↓
Execution
```

---

### 🧠 Memory (Heap)

* Stores variables and data

Example:

```js
let name = "John";
```

👉 `"John"` is stored in memory

---

### 📦 Call Stack

* Keeps track of what is currently running
* Works like a stack (Last In, First Out)

Example:

```js
function greet() {
  console.log("Hello");
}

greet();
```

👉 The function is pushed to the stack, executed, then removed

---

## 🔄 JavaScript is Single-Threaded

JavaScript can do **one thing at a time**.

```text
Task 1 → Task 2 → Task 3
```

👉 It processes tasks one at a time using the call stack

---

## 🤯 Then how does async work?

If JavaScript is single-threaded…

👉 How do things like:

* `setTimeout`
* API calls
* Promises

work?

---

## 🔮 There is more happening…

```text
Call Stack ↔ Web APIs ↔ Callback Queue ↔ Event Loop
```

👉 This is where:

* Event Loop
* Async behavior

come in

⚠️ We will NOT dive deep yet
👉 Just know that this exists

---

## 🧠 Concept Flow

```text
Code
   ↓
Compilation (Preparation)
   ↓
Execution Context
   ↓
Call Stack
   ↓
Event Loop
   ↓
Async Behavior
```

---

## 💡 My Understanding

JavaScript runs inside an engine that:

* first **prepares the code (compilation step)**
* then **executes it using a call stack**
* stores data in memory

Even though it runs one task at a time, it can handle async behavior using systems like the event loop.

---

## 🚀 What’s Next?

Now that we understand the big picture, we can start breaking it down:

👉 Next: **Variables**

---

<div style="display: flex; justify-content: space-between;">
  <a href="./00-javascript-origins.md">⬅ Back</a>
  <a href="./01-variables.md">Next ➡ Variables</a>
</div>