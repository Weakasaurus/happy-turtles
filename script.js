function setActiveNav() {
  const page = document.body.dataset.page;
  const links = document.querySelectorAll(".main-nav a");

  links.forEach((link) => {
    if (link.dataset.page === page) {
      link.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", setActiveNav);