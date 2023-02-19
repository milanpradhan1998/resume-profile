// let activeSideBar = (e) => {
//   let { value } = e.target;
//   console.log(value);
//   if (e.target.value == "open") {
//     document.getElementById("side-bar-box").classList.toggle("active-side-bar");
//   }
//   if (e.target.value == "close") {
//     document.getElementById("side-bar-box").classList.toggle("side-bar-box");
//   }
// };
function activeSideBar() {
  var sideBar = document.getElementById("side-bar-box").classList;
  sideBar.add("active-side-bar");
}
function closeSideBar() {
  var sideBar = document.getElementById("side-bar-box").classList;
  sideBar.remove("active-side-bar");
}
