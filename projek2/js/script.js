
const animatedName = document.getElementById('animated-name');
let colors = ['#4CAF50', '#45a049', '#3e8e41'];
let currentColorIndex = 0;

setInterval(() => {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    animatedName.style.color = colors[currentColorIndex];
}, 1000);

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        alert('Anda mengklik proyek ini!');
    });
});

const testimonials = [
    {
        img: "images/Hasimane.png",
        name: "Hasimane.",
        text: "Setiap baris kode adalah langkah menuju impianmu. Jangan menyerah, karena error hanya jeda, bukan akhir.",
    },
    {
        img: "images/ashikabi.png",
        name: "Ashikabi",
        text: "Debugging adalah seni, dan kamu adalah senimannya. Nikmati prosesnya, hasilnya pasti luar biasa!",
    },
    {
        img: "images/Haruhi Suzumiya.png",
        name: "Haruhi Suzumiya",
        text: "Ngoding itu seperti puzzle, dan kamu adalah pemecah masalah terbaik. Percayalah pada kemampuanmu!",
    },
    {
        img: "images/airin.png",
        name: "Airin",
        text: "Kesalahan adalah guru terbaik dalam dunia coding. Semakin banyak kamu mencoba, semakin hebat kamu akan jadi.",
    },
    {
        img: "images/akira shirase.png",
        name: "akira shirase",
        text: "Proyek besar dimulai dari satu baris kode kecil. Terus maju, hasilnya akan sepadan dengan usahamu.",
    },
];

let currentTestimonial = 0;

const testimonialCard = document.querySelector(".testimonial-card");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

function updateTestimonial() {
    testimonialCard.classList.remove("active");
    setTimeout(() => {
        const { img, name, text } = testimonials[currentTestimonial];
        testimonialCard.querySelector(".testimonial-img").src = img;
        testimonialCard.querySelector("h3").textContent = name;
        testimonialCard.querySelector("p").textContent = text;

        testimonialCard.classList.add("active");
    }, 300);
}

prevBtn.addEventListener("click", () => {
    currentTestimonial =
        (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
});

nextBtn.addEventListener("click", () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
});

updateTestimonial();
testimonialCard.classList.add("active");


const projects = [
    {
        title: "Website Wisata Indonesia",
        description: "Website yang menampilkan destinasi wisata populer di Indonesia dengan fitur interaktif.",
    },
    {
        title: "Sistem Manajemen Database",
        description: "Proyek sistem manajemen database menggunakan MySQL dan PHP untuk pengelolaan data petani.",
    },
    {
        title: "Website Komik",
        description: "Website untuk membaca komik online dengan desain modern dan fitur favorit.",
    },
];

function renderProjects() {
    const projectContainer = document.querySelector(".projects-container");
    projectContainer.innerHTML = "";

    projects.forEach((project, index) => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;

        projectContainer.appendChild(projectCard);
    });
}

function addProjectToDOM(title, description, image, link) {
    const projectList = document.getElementById("project-list");

    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    projectCard.innerHTML = `
        <img src="${image}" alt="${title}">
        <div class="content">
            <h3>${title}</h3>
            <p>${description}</p>
            <a href="${link}" target="_blank">Lihat Proyek</a>
        </div>
    `;

    projectList.appendChild(projectCard);
}

document.getElementById("add-project-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Ambil data dari form
    const title = document.getElementById("project-title").value;
    const description = document.getElementById("project-description").value;
    const imageUrl = document.getElementById("project-image").value;
    const projectLink = document.getElementById("project-link").value;

    // Buat elemen proyek baru
    const newProject = document.createElement("div");
    newProject.classList.add("project-card");
    newProject.innerHTML = `
        <img src="${imageUrl}" alt="${title}">
        <div class="content">
            <h3>${title}</h3>
            <p>${description}</p>
            <a href="${projectLink}" target="_blank">Lihat Proyek</a>
        </div>
    `;

    // Tambahkan proyek baru ke daftar proyek
    document.getElementById("project-list").appendChild(newProject);

    // Reset form
    document.getElementById("add-project-form").reset();
});

function isValidURL(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

document.getElementById("add-project-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const imageUrl = document.getElementById("project-image").value;
    const projectLink = document.getElementById("project-link").value;

    if (!isValidURL(imageUrl) || !isValidURL(projectLink)) {
        alert("Harap masukkan URL yang valid!");
        return;
    }

    // Tambahkan proyek jika validasi lolos
    // ... (kode sebelumnya)
});

document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("active");
});
