function slider(name) {

  let SlidePosition = 1;

  viewSlide(SlidePosition);

  let nextBtn = document.querySelector("#" + name + " .prev");
  let prevBtn = document.querySelector("#" + name + " .next");


  function sliderMover(n) {
    viewSlide(SlidePosition += n)
  };

  nextBtn.addEventListener("click", function () {
    sliderMover(1)
  });
  prevBtn.addEventListener("click", function () {
    sliderMover(-1)
  });

  function viewSlide(n) {
    let i;
    let slides = document.querySelectorAll("#" + name + " .slides");
    if (n > slides.length) { SlidePosition = 1 };
    if (n < 1) { SlidePosition = slides.length };
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[SlidePosition - 1].style.display = "block";
  };
};

slider("work");
slider("reviews");