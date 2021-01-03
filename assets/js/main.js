document.addEventListener("DOMContentLoaded", () => {
    new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      animationTimingFunc: "ease-in-out",
      autoplay: 4000,
      gap: 100,
      perView: 3
    }).mount();

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
    showTextAnimation("next");
    setTimeout(() => {
      let canvas = background.querySelectorAll("canvas");
      background.appendChild(canvas[0]);
      distortAnimations[prevIndex].previous();
    }, 1200);
  }

  // function startPrevDistortAnimation() {
  //   currentIndex = currentIndex - 1 < 0 ? 4 : currentIndex - 1;
  //   indices.forEach(index => index.classList.remove("active"));
  //   indices[currentIndex].classList.add("active");
  //   distortAnimations[currentIndex].next();
  //   showTextAnimation("prev");
  //   setTimeout(() => {
  //     let canvas = background.querySelectorAll("canvas");
  //     background.insertBefore(canvas[canvas.length - 1], background.firstChild);
  //     distortAnimations[currentIndex].previous();
  //   }, 500);
  // }

  // nextBtn.addEventListener("click", () => {
  //   startNextDistortAnimation();
  //   resetTimer();
  // });

  // prevBtn.addEventListener("click", () => {
  //   startPrevDistortAnimation();
  //   resetTimer();
  // });


// ================== the captions and text=======

let titleDisplacement = 0;
let descriptionDisplacement = 0;

function showTextAnimation(direction) {
  if (titleDisplacement === 0 && direction === "prev") {
    titleDisplacement = -280;
  } else if (titleDisplacement === -280 && direction === "next") {
    titleDisplacement = 0;
  } else {
    titleDisplacement =
      direction === "next"
        ? titleDisplacement - 70
        : titleDisplacement + 70;
  }

  if (descriptionDisplacement === 0 && direction === "prev") {
    descriptionDisplacement = -220;
  } 
  else if(descriptionDisplacement === -220 && direction === "next"){
    descriptionDisplacement = 0;
  }
  else {
    descriptionDisplacement =
      direction === "next" 
        ? descriptionDisplacement - 55
        : descriptionDisplacement + 55;
  }

  let title = document.querySelectorAll("#title h4");
  let description = document.querySelectorAll("#description p");

  title.forEach(title => {
    TweenMax.to(title, 1, {
      top: `${titleDisplacement}px`,
      ease: Strong.easeInOut
    });
  });

  description.forEach((description, index) => {
    let opacity = 0;
    if(index === currentIndex){
      opacity = 1;
    }else {
      opacity = 0;
    }
    TweenMax.to(description, 1, {
      top: `${descriptionDisplacement}px`,
      ease: Strong.easeInOut,
      opacity: opacity
    });
  })
}




// ===================auto play ==================
  function resetTimer(){
    // when click to indicator or controls button 
    // stop timer 
    clearInterval(timer);
    // then started again timer
    timer=setInterval(autoPlay,2000);
}


  function autoPlay(){
    startNextDistortAnimation();
}

let timer=setInterval(autoPlay,4000);

// ===================auto play ==================
  }
)



