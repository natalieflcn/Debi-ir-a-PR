// A smooth scrolling JavaScript function
export function smoothScrollTo(element, offset = 80, duration = 1000) {
  if (!element) return;

  // Where the page is currently scrolled to vertically
  const startPositionY = window.pageYOffset;

  // Gets the position of the element that we want to scroll to
  const elementPositionY = element.getBoundingClientRect().top;

  // The distance that we need to scroll
  const distance = elementPositionY - startPositionY;

  let startTime = null;

  function animation(currentTime) {
    // Storing the time of when the animation first begins, with currentTime that requestAnimationFrame provides
    if (!startTime) startTime = currentTime;

    // Storing how much time has passed since the animation began
    const elapsed = currentTime - startTime;

    // Creating a scale of completion (0-1) with this percentage, ensuring that progress never exceeds 1 (100%)
    const progress = Math.min(elapsed / duration, 1);

    // EaseInOutQuad Function
    // const ease =
    //   progress < 0.5
    //     ? 2 * progress * progress
    //     : -1 + (4 + 2 * progress) * progress;

    // Apply the scroll from starting position to desired position, smoothed out by ease function
    window.scrollTo(0, startPositionY + distance);

    // Call the next frame if the animation isn't complete
    if (elapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  // Start the first frame of the animation
  requestAnimationFrame(animation);
}
