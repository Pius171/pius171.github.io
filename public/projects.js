/**
 * ============================================================================
 * PROJECTS FEED RENDERER (public/projects.js)
 * ============================================================================
 * Renders all projects from `window.PROJECTS_DATA` (defined in `projects-data.js`)
 * using `<template id="project-card-template">` and links each card to
 * `project.html?id=<project.id>`.
 */

function renderProjects() {
  const listContainer = document.getElementById("projects-list");
  const template = document.getElementById("project-card-template");
  const projects = window.PROJECTS_DATA || [];
  if (!listContainer || !template) return;

  listContainer.innerHTML = "";

  projects.forEach((project, projectIndex) => {
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".project-card");
    const track = fragment.querySelector(".carousel-track");
    const dotsContainer = fragment.querySelector(".carousel-dots");
    const stageLabel = fragment.querySelector(".carousel-stage-label");

    const detailUrl = `project.html?id=${encodeURIComponent(project.id)}`;

    // Populate metadata & links
    fragment.querySelector(".project-category").textContent = project.category;

    const titleLink = fragment.querySelector(".project-card-link");
    titleLink.textContent = project.title;
    titleLink.href = detailUrl;

    const actionLink = fragment.querySelector(".project-action-link");
    actionLink.href = detailUrl;

    fragment.querySelector(".project-description").textContent = project.description;

    // Populate up to 4 carousel images
    const slides = (project.images || []).slice(0, 4);
    dotsContainer.innerHTML = "";

    slides.forEach((imgObj, idx) => {
      const slide = document.createElement("div");
      slide.className = "carousel-slide";
      const img = document.createElement("img");
      img.src = imgObj.src;
      img.alt = `${project.title} - ${imgObj.label || `Slide ${idx + 1}`}`;
      img.loading = projectIndex < 3 ? "eager" : "lazy";
      slide.appendChild(img);
      track.appendChild(slide);

      const dot = document.createElement("span");
      dot.className = `carousel-dot${idx === 0 ? " active" : ""}`;
      dot.dataset.slide = String(idx);
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll(".carousel-dot");
    if (slides.length <= 1) {
      dotsContainer.style.display = "none";
    }

    // Populate skill/tool tags
    const skillsList = fragment.querySelector(".project-skills");
    (project.skills || []).forEach((skillName) => {
      const li = document.createElement("li");
      li.className = "skill-tag";
      li.textContent = skillName;
      skillsList.appendChild(li);
    });

    // Initialize auto-scrolling carousel state
    let currentSlide = 0;
    const totalSlides = slides.length;

    function goToSlide(index) {
      if (totalSlides <= 1) return;
      currentSlide = (index + totalSlides) % totalSlides;
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
      dots.forEach((dot, dIdx) => {
        dot.classList.toggle("active", dIdx === currentSlide);
      });
      if (stageLabel && slides[currentSlide]) {
        stageLabel.textContent = slides[currentSlide].label || `${currentSlide + 1} / ${totalSlides}`;
      }
    }

    // Set initial label
    if (stageLabel && slides[0]) {
      stageLabel.textContent = slides[0].label || `1 / ${totalSlides}`;
    }

    // Allow clicking dots to jump to a slide
    dots.forEach((dot, dIdx) => {
      dot.addEventListener("click", (e) => {
        e.stopPropagation();
        goToSlide(dIdx);
      });
    });

    // Stagger auto-scroll slightly across cards so they feel organic
    let autoPlayTimer = null;
    const intervalMs = 2800 + (projectIndex % 3) * 250;

    function startAutoPlay() {
      if (totalSlides <= 1) return;
      if (autoPlayTimer) clearInterval(autoPlayTimer);
      autoPlayTimer = setInterval(() => {
        goToSlide(currentSlide + 1);
      }, intervalMs);
    }

    function stopAutoPlay() {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      }
    }

    card.addEventListener("mouseenter", stopAutoPlay);
    card.addEventListener("mouseleave", startAutoPlay);

    startAutoPlay();
    listContainer.appendChild(fragment);
  });
}

document.addEventListener("DOMContentLoaded", renderProjects);
