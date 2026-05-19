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