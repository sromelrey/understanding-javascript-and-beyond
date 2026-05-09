[⬅ Back to Glossary](../README.md)

# Truthy and Falsy

## 🧠 Concept Flow

Boolean Coercion → Falsy Values → Truthy Values → Conditional Evaluation → Short-Circuit Evaluation

---

## 🔲 Black Box (Big Picture)

Truthy and falsy are JavaScript's way of **treating non-boolean values as true or false** in boolean contexts.

**The problem:** JavaScript has many different types (strings, numbers, objects, arrays), but conditionals (like `if`) expect boolean values. How does JavaScript decide if a non-boolean value should be treated as true or false?

**The solution:** JavaScript automatically coerces values to booleans using specific rules. Some values are "falsy" (treated as false), and everything else is "truthy" (treated as true).

**Example:**
```javascript
if ("hello") {      // "hello" is truthy
  console.log("runs");
}

if (0) {            // 0 is falsy
  console.log("won't run");
}
```

This concept is fundamental because it's used constantly in:
- Conditional statements
- Logical operators (`&&`, `||`, `!`)
- Default value patterns
- Existence checks

---

## 🧠 Mental Model

Think of truthy/falsy as a **bouncer at a club**:

**The bouncer's rules:**
- Some people are automatically rejected (falsy values)
- Everyone else gets in (truthy values)

**The "rejected" list (falsy):**
- `0`, `-0`, `NaN` (no money, no entry)
- `""` (empty string = empty name)
- `null` (no person)
- `undefined` (unknown person)
- `false` (explicitly banned)

**Everyone else gets in (truthy):**
- Any non-zero number (has money)
- Any non-empty string (has a name)
- Any object (even empty objects)
- Any array (even empty arrays)
- `true` (explicitly allowed)

**Another analogy: Light switch**

```txt
Falsy = OFF (switch is down)
Truthy = ON (switch is up)

JavaScript checks the switch position:
- If it's OFF (falsy), the conditional doesn't run
- If it's ON (truthy), the conditional runs
```

**Key insight:** Truthy/falsy is about "does this value have meaning?" not "is this value true?". Empty values are falsy because they represent "nothing meaningful." Non-empty values are truthy because they represent "something meaningful."

---

## 📘 Breakdown (Explanation)

### The 6 Falsy Values

Only 6 values are falsy in JavaScript:

1. **`false`** - The boolean false
2. **`0`** - The number zero
3. **`-0`** - Negative zero
4. **`""`** - Empty string
5. **`null`** - Intentional absence of value
6. **`undefined`** - Unintentional absence of value
7. **`NaN`** - Not a Number (invalid number)

**Everything else is truthy**, including:
- All non-zero numbers (`1`, `-5`, `3.14`, `Infinity`)
- All non-empty strings (`"hello"`, `"0"`, `" "`)
- All objects (including empty objects `{}`)
- All arrays (including empty arrays `[]`)
- `true`

### Boolean Coercion

JavaScript coerces values to booleans in these contexts:
- `if` statements
- `while` loops
- Ternary operators (`? :`)
- Logical operators (`&&`, `||`, `!`)

**Using `Boolean()` explicitly:**
```javascript
Boolean(0)         // false
Boolean("hello")   // true
Boolean({})        // true
Boolean([])        // true
```

**Implicit coercion in conditionals:**
```javascript
if (value) {
  // value is coerced to boolean here
}
```

### Common Patterns

**Existence check:**
```javascript
if (user.name) {
  // name exists and is not empty
}
```

**Default value:**
```javascript
const name = inputName || "Anonymous";
```

**Guard clause:**
```javascript
if (!data) return;
```

### Surprising Truthy Values

Some values are truthy that might seem falsy:
- `"0"` (string zero is truthy)
- `" "` (space character is truthy)
- `[]` (empty array is truthy)
- `{}` (empty object is truthy)
- `function(){}` (empty function is truthy)

These are truthy because they exist as values, even if they're "empty."

---

## 🌍 Real-World Usage

Truthy/falsy appears constantly in real-world development:

**React Conditional Rendering:**
```javascript
{user && <UserProfile user={user} />}
{isLoading && <Spinner />}
{!data && <EmptyState />}
```

**Default Values:**
```javascript
const count = inputCount || 0;
const name = userName || "Guest";
const config = settings || defaultSettings;
```

**Form Validation:**
```javascript
if (!email.value || !password.value) {
  return "Please fill all fields";
}
```

**API Response Handling:**
```javascript
if (response.data) {
  // data exists, process it
}

if (!error) {
  // no error, success
}
```

**Array/Object Checks:**
```javascript
if (items.length) {  // truthy if array has items
  // render items
}

if (Object.keys(user).length) {  // truthy if object has properties
  // show user data
}
```

**Short-Circuit Evaluation:**
```javascript
const result = data && data.items && data.items[0];
```

**Function Parameters:**
```javascript
function greet(name) {
  name = name || "World";  // default value
  console.log(`Hello, ${name}`);
}
```

---

## 💻 Examples

### Example 1: Basic Truthy/Falsy

```javascript
if (0) console.log("won't print");     // 0 is falsy
if (1) console.log("prints");          // 1 is truthy
if ("") console.log("won't print");    // empty string is falsy
if ("hello") console.log("prints");    // non-empty string is truthy
if (null) console.log("won't print");  // null is falsy
if ({}) console.log("prints");         // object is truthy
```

### Example 2: Default Values with ||

```javascript
let name = "";
let displayName = name || "Anonymous";
console.log(displayName); // "Anonymous"

let age = 25;
let displayAge = age || 0;
console.log(displayAge); // 25
```

### Example 3: Guard Clauses

```javascript
function processUser(user) {
  if (!user) return;           // guard clause
  if (!user.name) return;     // guard clause
  if (!user.email) return;    // guard clause
  
  console.log(`Processing ${user.name}`);
}
```

### Example 4: Surprising Truthy Values

```javascript
if ("0") console.log("truthy!");   // prints (string "0" is truthy)
if (" ") console.log("truthy!");   // prints (space is truthy)
if ([]) console.log("truthy!");    // prints (empty array is truthy)
if ({}) console.log("truthy!");    // prints (empty object is truthy)
```

### Example 5: Short-Circuit Evaluation

```javascript
let user = { name: "Alice", email: "alice@example.com" };
let email = user && user.email;
console.log(email); // "alice@example.com"

let missing = null;
let result = missing && missing.value;
console.log(result); // null (short-circuits)
```

---

## ⚠️ Common Mistakes and Confusions

### Mistake 1: Thinking "0" is Falsy

**Confusion:** Zero should be falsy in all forms.

**Reality:** Only the number `0` is falsy. The string `"0"` is truthy:

```javascript
if (0) console.log("won't print");   // 0 is falsy
if ("0") console.log("prints");      // "0" is truthy
```

### Mistake 2: Thinking Empty Objects/Arrays Are Falsy

**Confusion:** Empty values should be falsy.

**Reality:** Objects and arrays are always truthy, even when empty:

```javascript
if ({}) console.log("prints");      // empty object is truthy
if ([]) console.log("prints");      // empty array is truthy
```

**Fix:** Check length or properties explicitly:
```javascript
if (arr.length) { /* array has items */ }
if (Object.keys(obj).length) { /* object has properties */ }
```

### Mistake 3: Using || for All Defaults

**Confusion:** `||` works for all default value cases.

**Reality:** `||` fails for falsy values that are valid:

```javascript
function getCount(count) {
  return count || 10;  // bug: 0 becomes 10
}

getCount(0);  // returns 10 (wrong!)
```

**Fix:** Use `??` (nullish coalescing) for null/undefined only:
```javascript
function getCount(count) {
  return count ?? 10;  // only null/undefined trigger default
}

getCount(0);  // returns 0 (correct!)
```

### Mistake 4: Forgetting ! Negates

**Confusion:** `!value` just checks if value exists.

**Reality:** `!` coerces to boolean and negates:
```javascript
!true    // false
!false   // true
!"hello" // false (truthy becomes false)
!0       // true (falsy becomes true)
```

### Mistake 5: Confusing Boolean Coercion with Equality

**Confusion:** Truthy/falsy is the same as `== true`.

**Reality:** They're different:
```javascript
"hello" == true   // false (type coercion rules)
!!"hello"         // true (boolean coercion)
if ("hello")      // true (boolean coercion)
```

**Fix:** Use `!!` to explicitly coerce to boolean if needed.

---

## 📊 Visualization

```txt
Truthy/Falsy Decision Flow:

Value provided
    ↓
Is it one of: false, 0, -0, "", null, undefined, NaN?
    ↓ YES
Result: FALSY
    ↓ NO
Result: TRUTHY
```

```txt
Falsy Values (The "Rejected" List):

┌─────────────────────────┐
│  false                  │
│  0, -0, NaN             │
│  "" (empty string)      │
│  null                   │
│  undefined              │
└─────────────────────────┘
        ↓
    These are treated as FALSE

Everything Else → TRUTHY
```

```txt
Common Pattern: Default Value

const value = input || default;

input is truthy?
    ↓ YES
Use input
    ↓ NO
Use default
```

```txt
Short-Circuit Evaluation:

a && b
    ↓
a is falsy?
    ↓ YES
Return a (stop here)
    ↓ NO
Return b

a || b
    ↓
a is truthy?
    ↓ YES
Return a (stop here)
    ↓ NO
Return b
```

---

## 🔥 Build Challenge

### Mini Challenge: Truthy/Falsy Explorer

Create a function that tests if a value is truthy or falsy without using `Boolean()`:

```javascript
function isTruthy(value) {
  // Your implementation (don't use Boolean())
}
```

**Requirements:**
- Return true for truthy values
- Return false for falsy values
- Test with all 6 falsy values
- Test with various truthy values
- Explain your logic

### Practical Challenge: Safe Default Value Function

Create a function that provides safe default values handling edge cases:

```javascript
function defaultValue(value, fallback, treatZeroAsValid = false) {
  // Your implementation
}
```

**Requirements:**
- Return fallback if value is null/undefined
- If treatZeroAsValid is true, treat 0 as valid (not trigger fallback)
- If treatZeroAsValid is false, treat 0 as falsy (use fallback)
- Handle empty strings
- Test with: null, undefined, 0, "", "hello", 5

**Reflection:** How does this relate to the `??` operator?

---

## 💡 My Understanding

Truthy/falsy is JavaScript's way of answering "does this value have meaning?" rather than "is this value true?" It's a pragmatic approach that makes code concise but can be confusing if you don't know the rules.

The key insight is that only 6 specific values are falsy—everything else is truthy. This is simpler than it seems at first, but the surprising truthy values (empty arrays, empty objects, string "0") trip people up constantly.

Modern JavaScript has added better tools for this:
- `??` (nullish coalescing) for null/undefined checks only
- `?.` (optional chaining) for safe property access
- Explicit `Boolean()` for clarity when needed

The old pattern of `value || default` is still useful, but you need to be aware that it treats all falsy values (including 0 and "") as "missing." If 0 or "" are valid values in your context, use `??` instead.

Understanding truthy/falsy is essential because it's everywhere in JavaScript code, especially in React conditional rendering and default value patterns. Once you internalize the 6 falsy values, everything else becomes intuitive.

---

## 🔗 Connection to Other Topics

**Previous Topics:**
- **Data Types** → Different types have different truthy/falsy behavior
- **Type Coercion** → Truthy/falsy is boolean coercion
- **Variables** → Variables hold values that can be truthy/falsy

**Connects To:**
- **Equality Operators** → Truthy/falsy vs equality comparisons
- **Operators** → Logical operators (`&&`, `||`, `!`) rely on truthy/falsy
- **Default Values** → Using truthy/falsy for fallback patterns
- **Conditional Logic** → `if`, `while`, ternary use truthy/falsy
- **React** → Conditional rendering uses truthy/falsy
- **Optional Chaining** → `?.` complements truthy/falsy patterns
- **Nullish Coalescing** → `??` is an alternative to `||` for null/undefined

Truthy/falsy is a foundational concept that affects almost every aspect of JavaScript programming.

---
<div style="display: flex; justify-content: space-between; margin-top: 30px;">
  <a href="./type-coercion.md">⬅ Back</a>
  <a href="./equality-operators.md">Next ➡ Equality Operators</a>
</div>

