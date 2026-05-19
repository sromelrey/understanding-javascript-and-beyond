// IIFE (Immediately Invoked Function Expression)
// A function that runs immediately after being defined
// Creates a private scope to avoid polluting the global namespace
(function() {
    // Synchronous code runs first - executes line by line
    console.log("Start")    // 1. Executes immediately
    
    console.log("Something") // 2. Executes immediately
    
    // setTimeout with 0ms delay still goes to the event loop
    // Even with 0ms, it's asynchronous and will execute AFTER all synchronous code
    // This demonstrates JavaScript's single-threaded, event-driven nature
    setTimeout(() => console.log("Delayed"), 0) // 4. Executes last (after call stack is empty)
    
    console.log("End")      // 3. Executes immediately (before setTimeout callback)
    
    // Expected output order:
    // Start
    // Something
    // End
    // Delayed
})();


// Exercise: Recursive function with stack behavior demonstration
// This shows how the call stack works with LIFO (Last In, First Out)

function depth3(n) {
    // Push to stack - function call starts
    console.log(`[PUSH] depth3(${n}) - entering function, call stack depth: ${n}`);
    
    // Base case: stop recursion when n reaches 0
    if (n === 0) {
        console.log(`[BASE] depth3(0) - reached base case, will start popping`);
        return;
    }
    
    // Recursive call - this pushes another frame onto the stack
    depth3(n - 1);
    
    // Pop from stack - function call completes (LIFO: last pushed, first to complete)
    console.log(`[POP] depth3(${n}) - returning from function, call stack depth: ${n}`);
}

// Start the recursion with depth of 3
console.log("--- Starting recursion with depth 3 ---");
depth3(3);
console.log("--- Recursion complete ---");

// Expected output demonstrates LIFO:
// PUSH depth3(3) → PUSH depth3(2) → PUSH depth3(1) → PUSH depth3(0) [BASE]
// Then pops in reverse order: POP depth3(1) → POP depth3(2) → POP depth3(3)

// Reflection:
// The call stack follows LIFO - the last function pushed (depth3(0)) is the first to complete
// This is why we see PUSH in order (3,2,1,0) but POP in reverse (1,2,3)
// Understanding this helps debug recursive functions and understand stack overflow errors