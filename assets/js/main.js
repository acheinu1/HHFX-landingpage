document.addEventListener("DOMContentLoaded", () => {
    new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      animationTimingFunc: "ease-in-out",
      gap: 100,
      perView: 3
    }).mount();
  
  let prevBtn = document.getElementById("prev");
  let nextBtn = document.getElementById("next");
  
  let background = document.querySelector(".background");
  let indices = document.querySelectorAll(".index");
  
  let bgImgs = ["backgrnda3.jpg", "backgrnda6.jpg","backgrnda8.jpg", "backgrnda1.jpg", "backgrnda7.jpg"];
  
  let currentIndex = 0;
  indices.forEach(index => index.classList.remove("active"));
  indices[currentIndex].classList.add("active");

  var myAnimation = new hoverEffect({
    parent: document.querySelector(".background"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `assets/images/${bgImgs[0]}`,
    image2: `assets/images/${bgImgs[1]}`,
    displacementImage: "assets/images/14.jpg",
    hover: false
  });


  var myAnimation2 = new hoverEffect({
    parent: document.querySelector(".background"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `assets/images/${bgImgs[1]}`,
    image2: `assets/images/${bgImgs[2]}`,
    displacementImage: "assets/images/14.jpg",
    hover: false
  });


  var myAnimation3 = new hoverEffect({
    parent: document.querySelector(".background"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `assets/images/${bgImgs[2]}`,
    image2: `assets/images/${bgImgs[3]}`,
    displacementImage: "assets/images/14.jpg",
    hover: false
  });


  var myAnimation4 = new hoverEffect({
    parent: document.querySelector(".background"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `assets/images/${bgImgs[3]}`,
    image2: `assets/images/${bgImgs[4]}`,
    displacementImage: "assets/images/14.jpg",
    hover: false
  });


  var myAnimation5 = new hoverEffect({
    parent: document.querySelector(".background"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `assets/images/${bgImgs[4]}`,
    image2: `assets/images/${bgImgs[0]}`,
    displacementImage: "assets/images/14.jpg",
    hover: false
  });


  let distortAnimations = [
    myAnimation,
    myAnimation2,
    myAnimation3,
    myAnimation4,
    myAnimation5
  ];

  function startNextDistortAnimation() {
    let prevIndex = currentIndex;
    currentIndex = (currentIndex + 1) % 5;
    indices.forEach(index => index.classList.remove("active"));
    indices[currentIndex].classList.add("active");
    distortAnimations[prevIndex].next();
    setTimeout(() => {
      let canvas = background.querySelectorAll("canvas");
      background.appendChild(canvas[0]);
      distortAnimations[prevIndex].previous();
    }, 1200);
  

  }

  function startPrevDistortAnimation() {
    currentIndex = currentIndex - 1 < 0 ? 4 : currentIndex - 1;
    indices.forEach(index => index.classList.remove("active"));
    indices[currentIndex].classList.add("active");
    distortAnimations[currentIndex].next();
    setTimeout(() => {
      let canvas = background.querySelectorAll("canvas");
      background.insertBefore(canvas[canvas.length - 1], background.firstChild);
      distortAnimations[currentIndex].previous();
    }, 500);
  }

  nextBtn.addEventListener("click", () => {
    startNextDistortAnimation();
  });

  prevBtn.addEventListener("click", () => {
    startPrevDistortAnimation();
  });


  }
)