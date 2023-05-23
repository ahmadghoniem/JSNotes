const start = performance.now();
await fetch("https://jsonplaceholder.typicode.com/users");
const end = performance.now();
console.log(`time taken ${end - start}`);
