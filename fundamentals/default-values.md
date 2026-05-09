[⬅ Back to Glossary](../README.md)

# Default Values

## 🧠 Concept Flow

Default Values → Parameter Defaults → Destructuring Defaults → Nullish Coalescing → Fallback Patterns

---

## 🔲 Black Box (Big Picture)

Default values provide **fallback values when a value is missing or invalid**.

**The problem:** JavaScript variables and parameters can be `undefined` or `null`. How do you handle missing data gracefully without errors? How do you provide sensible defaults when data isn't available?

**The solution:** JavaScript provides multiple ways to set default values:
- Function parameter defaults (ES6+)
- Destructuring with defaults
- Logical OR (`||`) for falsy values
- Nullish coalescing (`??`) for null/undefined only

**Example:**
```javascript
function greet(name = "World") {
  console.log(`Hello, ${name}`);
}

greet();        // "Hello, World"
greet("Alice"); // "Hello, Alice"
```

Default values make code more robust by handling edge cases and preventing errors from missing data.

---

## 🧠 Mental Model

Think of default values as **backup plans**:

**Function parameter defaults** = spare tire
- If you don't provide a value, the spare is used
- If you provide a value, it's used instead

**Logical OR (`||`)** = "anything is better than nothing"
- If the value is falsy (empty, zero, false), use the default
- Aggressive fallback

**Nullish coalescing (`??`)** = "only use backup if missing"
- If the value is null or undefined, use the default
- Preserves falsy values like 0 and ""

**Analogy: Restaurant ordering**

```txt
Parameter defaults:
"What would you like?"
    ↓ no answer
"Steak (default)"

|| fallback:
"Is this acceptable?"
    ↓ no (falsy)
"Use backup option"

?? fallback:
"Is this missing?"
    ↓ yes (null/undefined)
"Use backup option"
```

**Key insight:** Different default value patterns serve different needs. `||` is for "use default if falsy," `??` is for "use default if missing." Choose based on whether falsy values like 0 or "" are valid in your context.

---

## 📘 Breakdown (Explanation)

### Function Parameter Defaults

ES6+ allows default values for function parameters:

```javascript
function greet(name = "World") {
  console.log(`Hello, ${name}`);
}

greet();        // "Hello, World"
greet("Alice"); // "Hello, Alice"
```

**How it works:**
- If the argument is `undefined`, the default is used
- If the argument is provided (even if falsy), it's used
- Defaults are evaluated at function call time

```javascript
function multiply(a, b = 2) {
  return a * b;
}

multiply(5);    // 10 (b defaults to 2)
multiply(5, 3); // 15 (b is 3)
multiply(5, 0); // 0 (b is 0, not default)
```

### Destructuring with Defaults

Destructuring can include default values:

```javascript
const user = { name: "Alice" };

const { name, age = 25 } = user;
// name = "Alice", age = 25 (default)
```

**Nested destructuring:**
```javascript
const user = { profile: { name: "Alice" } };

const { profile: { name, age = 25 } } = user;
// name = "Alice", age = 25 (default)
```

**Array destructuring:**
```javascript
const numbers = [1];
const [first, second = 0] = numbers;
// first = 1, second = 0 (default)
```

### Logical OR (`||`) Pattern

The `||` operator provides fallback values:

```javascript
const name = inputName || "Anonymous";
const count = inputCount || 0;
const config = settings || defaultSettings;
```

**How it works:**
- If the left side is truthy, use it
- If the left side is falsy, use the right side

**Problem:** Treats all falsy values as missing:
```javascript
function getCount(count) {
  return count || 10;  // bug: 0 becomes 10
}

getCount(0);  // returns 10 (wrong!)
```

### Nullish Coalescing (`??`) Pattern

The `??` operator (ES2020) provides fallback for null/undefined only:

```javascript
const name = inputName ?? "Anonymous";
const count = inputCount ?? 0;
```

**How it works:**
- If the left side is null or undefined, use the right side
- If the left side is any other value (including 0, "", false), use it

**Solves the `||` problem:**
```javascript
function getCount(count) {
  return count ?? 10;  // only null/undefined trigger default
}

getCount(0);  // returns 0 (correct!)
```

### Short-Circuit Evaluation

Both `||` and `??` use short-circuit evaluation:

```javascript
const value = expensiveCalculation() || defaultValue;
// expensiveCalculation only runs if needed
```

---

## 🌍 Real-World Usage

Default values are used constantly in real-world development:

**React Component Props:**
```javascript
function Button({ text = "Click", disabled = false }) {
  return <button disabled={disabled}>{text}</button>;
}
```

**API Response Handling:**
```javascript
const response = await fetch('/api/data');
const data = await response.json();
const items = data.items ?? [];  // default to empty array
```

**Configuration:**
```javascript
const config = {
  apiUrl: userConfig.apiUrl ?? "https://api.example.com",
  timeout: userConfig.timeout ?? 5000,
  retries: userConfig.retries ?? 3
};
```

**Form Handling:**
```javascript
function handleSubmit({ email, password, name = "Guest" }) {
  // name defaults to "Guest" if not provided
}
```

**State Initialization:**
```javascript
const [count, setCount] = useState(0);
const [user, setUser] = useState(null);
```

**Destructuring from APIs:**
```javascript
const { data: userData = {}, error = null } = await fetchUser();
```

**Utility Functions:**
```javascript
function createElement(tag, options = {}) {
  const { className = "", id = "" } = options;
  // create element with defaults
}
```

---

## 💻 Examples

### Example 1: Function Parameter Defaults

```javascript
function greet(name = "World", greeting = "Hello") {
  return `${greeting}, ${name}`;
}

console.log(greet());              // "Hello, World"
console.log(greet("Alice"));       // "Hello, Alice"
console.log(greet("Alice", "Hi")); // "Hi, Alice"
```

### Example 2: Destructuring with Defaults

```javascript
const user = { name: "Alice", email: "alice@example.com" };

const { name, email, age = 25, country = "USA" } = user;
console.log(name, email, age, country);
// "Alice", "alice@example.com", 25, "USA"
```

### Example 3: || vs ?? Difference

```javascript
// Using || (treats all falsy as missing)
console.log(0 || 10);      // 10
console.log("" || "default");  // "default"
console.log(false || true);    // true

// Using ?? (only null/undefined)
console.log(0 ?? 10);      // 0
console.log("" ?? "default");  // ""
console.log(false ?? true);    // false
console.log(null ?? 10);      // 10
console.log(undefined ?? 10);  // 10
```

### Example 4: Nested Destructuring Defaults

```javascript
const config = {
  api: {
    url: "https://api.example.com"
  }
};

const { api: { url, timeout = 5000 } } = config;
console.log(url, timeout);
// "https://api.example.com", 5000
```

### Example 5: Practical Configuration Pattern

```javascript
function createServer(options = {}) {
  const {
    port = 3000,
    host = "localhost",
    ssl = false,
    timeout = 30000
  } = options;

  return { port, host, ssl, timeout };
}

console.log(createServer());
// { port: 3000, host: "localhost", ssl: false, timeout: 30000 }

console.log(createServer({ port: 8080 }));
// { port: 8080, host: "localhost", ssl: false, timeout: 30000 }
```

---

## ⚠️ Common Mistakes and Confusions

### Mistake 1: Using || When 0 or "" Are Valid

**Confusion:** `||` works for all default value cases.

**Reality:** `||` treats falsy values as missing:

```javascript
function setCount(count) {
  return count || 10;  // bug: 0 becomes 10
}

setCount(0);  // returns 10 (wrong!)
```

**Fix:** Use `??` when 0 or "" are valid values.

### Mistake 2: Forgetting Defaults Only Apply to undefined

**Confusion:** Defaults apply to any missing value.

**Reality:** Parameter defaults only apply to `undefined`:

```javascript
function greet(name = "World") {
  console.log(name);
}

greet(undefined); // "World" (default)
greet(null);      // "null" (not default)
greet("");        // "" (not default)
```

### Mistake 3: Confusing ?? with ||

**Confusion:** `??` and `||` are the same.

**Reality:** They behave differently:
- `||` checks for falsy (0, "", false, null, undefined)
- `??` checks only for null/undefined

**Fix:** Use `??` when you want to preserve falsy values.

### Mistake 4: Not Destructuring with Defaults

**Confusion:** Destructuring without defaults is fine.

**Reality:** Missing properties cause errors:

```javascript
const user = { name: "Alice" };
const { name, age } = user;  // age = undefined (problematic)
const { name, age = 25 } = user;  // age = 25 (safe)
```

**Fix:** Always provide defaults for optional properties.

### Mistake 5: Overriding Valid Data with Defaults

**Confusion:** Defaults are always safe.

**Reality:** Defaults can override valid data:

```javascript
function process(data = {}) {
  // data might be valid empty array []
  // but default {} overwrites it
}
```

**Fix:** Use defaults only when the input is truly missing, not just empty.

---

## 📊 Visualization

```txt
Default Value Decision Flow:

Parameter Default:
Argument provided?
    ↓ NO
Use default value
    ↓ YES
Argument is undefined?
    ↓ YES
Use default value
    ↓ NO
Use provided value

|| (Logical OR):
Left operand is truthy?
    ↓ YES
Use left operand
    ↓ NO
Use right operand (default)

?? (Nullish Coalescing):
Left operand is null or undefined?
    ↓ YES
Use right operand (default)
    ↓ NO
Use left operand
```

```txt
Falsy Values vs Nullish:

┌─────────────┬──────────┬──────────┐
│   Value     │   ||     │   ??     │
├─────────────┼──────────┼──────────┤
│ 0           │ default  │ 0        │
│ ""          │ default  │ ""       │
│ false       │ default  │ false    │
│ null        │ default  │ default  │
│ undefined   │ default  │ default  │
│ "hello"     │ "hello"  │ "hello"  │
│ 5           │ 5        │ 5        │
└─────────────┴──────────┴──────────┘
```

```txt
Destructuring with Defaults:

const { a, b = 5 } = obj;

obj has property "a"?
    ↓ YES
Use obj.a
    ↓ NO
Use undefined → default = 5

obj has property "b"?
    ↓ YES
Use obj.b
    ↓ NO
Use undefined → default = 5
```

---

## 🔥 Build Challenge

### Mini Challenge: Safe Config Function

Create a configuration function that handles missing values safely:

```javascript
function createConfig(userConfig) {
  // Your implementation
}
```

**Requirements:**
- Provide defaults for: port, host, timeout, retries
- Use appropriate default pattern (?? vs ||)
- Handle nested objects
- Test with: {}, { port: 8080 }, { timeout: 0 }

### Practical Challenge: Smart Default Utility

Build a utility function that chooses the right default pattern:

```javascript
function defaultValue(value, fallback, options = {}) {
  // Your implementation
}
```

**Requirements:**
- Support options: { treatZeroAsValid, treatEmptyAsValid }
- Use `??` or `||` based on options
- Handle null/undefined
- Test with edge cases: 0, "", null, undefined, valid values

**Reflection:** When would you use this in real applications?

---

## 💡 My Understanding

Default values are about graceful degradation—handling missing data without errors. The key insight is that JavaScript provides multiple patterns for different needs, and choosing the right one depends on your specific context.

The old pattern of `value || default` is still useful but has a major flaw: it treats all falsy values as missing. If 0 or "" are valid in your context, this pattern breaks. The solution is `??` (nullish coalescing), which only triggers for null/undefined.

Function parameter defaults are elegant but only apply to `undefined`, not `null`. This is by design but can be surprising. Destructuring with defaults is powerful for handling optional properties in objects.

Modern JavaScript gives us better tools: `??` for null/undefined checks, `?.` for optional property access, and parameter defaults for functions. Using the right tool for the job makes code more robust and predictable.

Understanding default values is essential because real-world data is often incomplete or missing. Robust code handles this gracefully rather than crashing or producing incorrect results.

---

## 🔗 Connection to Other Topics

**Previous Topics:**
- **Variables** → Variables hold values that may need defaults
- **Data Types** → Different types have different "empty" states
- **Type Coercion** → `||` relies on truthy/falsy coercion
- **Truthy and Falsy** → `||` uses truthy/falsy, `??` doesn't
- **Operators** → `||` and `??` are logical operators
- **Equality Operators** → Checking for null/undefined with ===

**Connects To:**
- **Destructuring** → Destructuring with default values
- **Functions** → Parameter defaults
- **Optional Chaining** → `?.` complements default value patterns
- **Nullish Coalescing** → `??` is a default value operator
- **React** → Component prop defaults
- **API Handling** → Default values for API responses
- **Configuration** → Configuration objects with defaults

Default values are a fundamental pattern for writing robust JavaScript that handles real-world data gracefully.

---
<div style="display: flex; justify-content: space-between; margin-top: 30px;">
  <a href="./operators.md">⬅ Back</a>
  <a href="../README.md">Next ➡ Glossary</a>
</div>

