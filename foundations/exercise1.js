const state = {
    count: 0
}

function increment() {
    state.count++;
    document.getElementById("count").innerHTML = state.count;
}

function decrement() {
    state.count--;
    document.getElementById("count").innerHTML = state.count;
}

function reset() {
    state.count = 0;
    document.getElementById("count").innerHTML = state.count;
}

function showAlert() {
    alert("Hello test!");
}