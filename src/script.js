function getRandomColor() {
  const r = Math.floor(Math.random() * 156) + 100;
  const g = Math.floor(Math.random() * 156) + 100;
  const b = Math.floor(Math.random() * 156) + 100;
  return { r, g, b };
}

function colorToString(color) {
  return `rgb(${color.r}, ${color.g}, ${color.b})`;
}

function updateColor(color, target) {
  color.r += color.r < target.r ? 1 : color.r > target.r ? -1 : 0;
  color.g += color.g < target.g ? 1 : color.g > target.g ? -1 : 0;
  color.b += color.b < target.b ? 1 : color.b > target.b ? -1 : 0;
}

function paintGradient() {
  const gradient = `linear-gradient(270deg, ${colorToString(color1)}, ${colorToString(color2)})`;
  document.querySelector(".animated-gradient").style.background = gradient;
}

function animateGradient() {
  updateColor(color1, target1);
  updateColor(color2, target2);
  paintGradient();
}

let color1 = getRandomColor();
let color2 = getRandomColor();
let target1 = getRandomColor();
let target2 = getRandomColor();

paintGradient();
setInterval(() => {
  animateGradient();
}, 166); // Update every sixth of a second (approximately 166ms)

setInterval(() => {
  target1 = getRandomColor();
  target2 = getRandomColor();
}, 5000); // Change target colors every 5 seconds

function moveRunner() {
  const runnerList = document.querySelectorAll(".runner-gif");

  let position = 0;
  const speed = 4; // Adjust speed as needed

  function animateRunner() {
    const screenWidth = window.innerWidth + 200;
    position += speed;
    if (position > screenWidth) {
      for (const runner of runnerList) {
        runner.style.display = "none";
      }
      setTimeout(() => {
        position = -runnerList[0].clientWidth;
        for (const runner of runnerList) {
          runner.style.removeProperty("display");
        }
        animateRunner();
      }, 1000);
    } else {
      for (const runner of runnerList) {
        runner.style.transform = `translateX(${position}px)`;
      }
      requestAnimationFrame(animateRunner);
    }
  }

  animateRunner();
}

document.addEventListener("DOMContentLoaded", () => {
  moveRunner();
});
