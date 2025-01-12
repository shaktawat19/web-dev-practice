/* Here is an example that demonstrates this 
concept (setTimeout does not run immediately after its timer expires): */

const seconds = new Date().getTime() / 1000;
setTimeout(() => {
  // prints out "2", meaning that the callback is not called immediately after 500ms.
  console.log(`Ran after ${new Date().getTime() / 1000 - seconds} seconds`);
}, 500);

while (true) {
  if (new Date().getTime() / 1000 - seconds >= 2) {
    console.log("Good, looped for 2 seconds");
    break;
  }
}
