function shakeWater() {
  var water = document.getElementById("water");

  gsap.to(water, {
    x: 5, // Amount of horizontal shake
    yoyo: true, // Yoyo effect (shakes back and forth)
    repeat: -1, // Repeat indefinitely
    duration: 0.1, // Duration of each shake
    ease: "power2.inOut", // Easing function
  });
}

// Start the water shaking effect when the page loads
window.onload = function () {
  shakeWater();
};
