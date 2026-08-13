$(document).ready(function() {
    const $track = $('.track');
    const $slides = $('.slide');
    let currentIndex = 0;
    const totalSlides = $slides.length;
    const slideInterval = 4000; // 4000ms = 4 seconds

    function autoSlide() {
      currentIndex++;

      // If we reach the end, loop back to the first video (index 0)
      if (currentIndex >= totalSlides) {
        currentIndex = 0;
      }

      // Get the current width of the slider window dynamically
      const slideWidth = $track.width();

      // Animate the horizontal scroll position smoothly
      $track.animate({
        scrollLeft: slideWidth * currentIndex
      }, 800); // 800ms animation speed for that smooth gliding effect
    }

    // Start the automatic timer
    let timer = setInterval(autoSlide, slideInterval);
  });