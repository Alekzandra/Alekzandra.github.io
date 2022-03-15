$(".seeMoreButton").on("click", changeText);

function changeText() {
  if (document.querySelector(".seeMoreButton").innerText === "Click to see more") {
    document.querySelector(".seeMoreButton").innerText = "Click to see less";
  }
  else if (document.querySelector(".seeMoreButton").innerText === "Click to see less") {
    document.querySelector(".seeMoreButton").innerText = "Click to see more";
  }

}
