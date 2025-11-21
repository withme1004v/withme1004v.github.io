$(function () {
  // aos start
  AOS.init({
    offset: 120,
    duration: 500,
    easing: "ease-in",
  });
  // aos end

  // skill hover event start
  $(".skill_wrap ul li").hover(
    function () {
      $(this).find("img, i").css({
        transform: "translate(-50%, -50%) rotateY(180deg)",
      });
      $(this).find("h3").css({ color: "#00ffc0", top: "-10px" });
      $(this).find("svg").find("circle:last").css("stroke", "#00ffc0");
    },
    function () {
      $(this).find("img, i").css({
        transform: "translate(-50%, -50%) rotateY(0deg)",
      });
      $(this).find("h3").css({ color: "#fff", top: "0px" });
      $(this).find("svg").find("circle:last").css("stroke", "#fff");
    }
  );
  // skill hover event end

  // skill scroll event start
  $(window).scroll(function () {
    let scrollht = $(window).scrollTop();
    if (scrollht >= 800) {
      $(".ani1").css("animation", "skill1 1s forwards");
      $(".ani2").css("animation", "skill2 1s forwards");
      $(".ani3").css("animation", "skill3 1s forwards");
      $(".ani4").css("animation", "skill4 1s forwards");
      if (scrollht >= 1300) {
        $(".b_ani1").css("animation", "skill1 1s forwards");
        $(".b_ani2").css("animation", "skill2 1s forwards");
        $(".b_ani4").css("animation", "skill4 1s forwards");
        $(".b_ani5").css("animation", "skill5 1s forwards");
      }
    }
  });

  $(window).on("mousewheel", function () {
    let scrollht = $(window).scrollTop();
    if (scrollht >= 2810 && event.wheelDelta < 0) {
      $(".about_desc_wrap1").css({ opacity: "0", visibility: "hidden" });
      $(".about_desc_wrap2").css({ opacity: "1", visibility: "visible" });
    } else {
      $(".about_desc_wrap1").css({ opacity: "1", visibility: "visible" });
      $(".about_desc_wrap2").css({ opacity: "0", visibility: "hidden" });
    }
  });
  // skill scroll event end

  // particle bg start
  particlesJS("particles-js", {
    particles: {
      number: { value: 60, density: { enable: true, value_area: 800 } },
      color: { value: "#a2a2a2" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#a2a2a2",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "repulse" },
        onclick: { enable: false, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  });
  var count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function () {
    stats.begin();
    stats.end();
    if (
      window.pJSDom[0].pJS.particles &&
      window.pJSDom[0].pJS.particles.array
    ) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
  // particle bg end
});
