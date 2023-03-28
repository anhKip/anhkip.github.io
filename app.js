// console.log("Hello world");
// alert("Hello alert");
// console.log(
//   (document.getElementById("message").innerHTML = "Hello from message")
// );
function clock() {
  document.querySelector("#clock").innerHTML = new Date();
}
setInterval(clock, 1000);
