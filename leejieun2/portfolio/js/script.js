//네비 top
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    document.querySelectorAll(".nav a").forEach(el => el.classList.remove("active")
    );
    this.classList.add("active");
  });
});

// 위로 이동
document.querySelector("#top").querySelector("a").addEventListener("click", function(e){
  e.preventDefault();
  window.scrollTo({top:0,behavior:"smooth"});
});

