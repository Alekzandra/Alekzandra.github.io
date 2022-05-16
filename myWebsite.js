// $(".seeMoreButton").on("click", changeText);



// function changeText() {
//   if (document.querySelector(".seeMoreButton").innerText === "Click to see more") {
//     document.querySelector(".seeMoreButton").innerText = "Click to see less";
//   }
//   else if (document.querySelector(".seeMoreButton").innerText === "Click to see less") {
//     document.querySelector(".seeMoreButton").innerText = "Click to see more";
//   }

// }

const toggleBtn = document.querySelector(".nav-toggle-btn");
const navItems = document.querySelector(".nav-links");

toggleBtn.addEventListener('click', function(){
  navItems.classList.toggle('show-links');
});

const seeMoreBtn = document.querySelector(".see-more-btn");
const experienceList = document.querySelector(".experience-list");

seeMoreBtn.addEventListener('click', function(){
  experienceList.classList.toggle('show-prof-experience');
  if (seeMoreBtn.innerText === "Click to see more") {
    seeMoreBtn.innerText = "Click to see less";
  }
  else {
    seeMoreBtn.innerText = "Click to see more";
  }
}
);

