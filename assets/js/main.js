document.addEventListener("DOMContentLoaded", () => {
    new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      animationTimingFunc: "ease-in-out",
      gap: 100,
      perView: 3
    }).mount();}
)