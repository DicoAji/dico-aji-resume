const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
// about
document.addEventListener("DOMContentLoaded", function () {
  const seeMoreLink = document.querySelector(".see-more-about-text");
  const contentText = document.querySelector(".content-text-about");
  const textPlusContent = document.querySelector(".text-plus-content");

  seeMoreLink.addEventListener("click", function (event) {
    event.preventDefault();
    if (contentText.style.display === "none") {
      contentText.style.display = "inline";
      textPlusContent.style.display = "none";
      seeMoreLink.textContent = "See More >";
    } else {
      contentText.style.display = "none";
      textPlusContent.style.display = "inline";
      seeMoreLink.textContent = "< See Less ";
    }
  });
});

// experience
document.addEventListener("DOMContentLoaded", function () {
  const image = document.getElementById("img-experience");
  const images = [
    "assets/img/experience/web-bandikmenti.png",
    "assets/img/experience/web-maulapor.png",
    "assets/img/experience/photo-disdikbud.png",
  ];
  let currentImageIndex = 0;

  setInterval(function () {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    image.style.opacity = 0; // Set opacity ke 0 agar gambar memudar
    setTimeout(function () {
      image.src = images[currentImageIndex];
      image.style.opacity = 1; // Set opacity kembali ke 1 agar gambar muncul kembali
    }, 500); // Menunggu 500 milidetik sebelum mengubah sumber gambar
  }, 3000);
});

// toogler
document.addEventListener("DOMContentLoaded", function () {
  var navbarToggler = document.querySelector(".navbar-toggler");
  navbarToggler.addEventListener("click", function () {
    var expanded = navbarToggler.getAttribute("aria-expanded");
    if (expanded === "false") {
      navbarToggler.classList.remove("fa-angles-down");
      navbarToggler.classList.add("fa-angles-up");
    } else {
      navbarToggler.classList.remove("fa-angles-up");
      navbarToggler.classList.add("fa-angles-down");
    }
  });
});

// dark theme
document.addEventListener("DOMContentLoaded", function () {
  var themeToggleBtn = document.querySelector("#themeToggleBtn");
  var body = document.body;

  // Fungsi untuk mengubah warna ikon berdasarkan tema
  function toggleIconColor() {
    if (body.classList.contains("dark-mode")) {
      themeToggleBtn.style.color = "#727272"; // Warna untuk tema gelap
    } else {
      themeToggleBtn.style.color = "#e3b80c"; // Warna untuk tema terang
    }
  }

  themeToggleBtn.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    // Simpan tema yang dipilih ke local storage
    localStorage.setItem(
      "theme",
      body.classList.contains("dark-mode") ? "dark" : "light"
    );

    toggleIconColor(); // Panggil fungsi untuk mengubah warna ikon
  });

  // Periksa tema yang disimpan di local storage saat halaman dimuat
  var savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    toggleIconColor(); // Panggil fungsi untuk mengubah warna ikon jika tema gelap aktif
  }
});
$.getJSON("assets/data/project.json", function (data) {
  // console.log(data);
  let project = data.project;

  $.each(project, function (i, data) {
    // console.log(data);
    $("#daftar-project").append(
      `<div class="col-lg-4 col-md-6 col-sm-12 p-3">
      <div
        class="rounded-4 dark-bg-black"
        style="
          box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
          background: #fff;
          overflow: hidden;
        "
      >
        <img
          src="assets/img/project/` +
        data.gambar +
        `"
          style="width: 100%"
          alt=""
        />
        
        <div class="mt-3 px-3 pb-3">

          <h3 class="mt-3">` +
        data.tittle +
        `</h3>
          <a href="` +
        data.link +
        `"
            >See More</a
          >
        </div>
      </div>
    </div>`
    );
  });
});

$.getJSON("assets/data/data-language.json", function (data) {
  // console.log(data);
  let skill = data.data_language;
  $.each(skill, function (i, data) {
    // console.log(data);
    $("#daftar-skill").append(
      `<img
    class="dark-bg-black"
    src="assets/img/icon-skill/` +
        data.gambar +
        `"
    data-bs-toggle="tooltip"
    data-bs-placement="top"
    data-bs-title="` +
        data.tittle +
        `"
    alt=""
  />`
    );
  });
});
