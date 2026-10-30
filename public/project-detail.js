/**
 * ============================================================================
 * SINGLE-PAGE DYNAMIC PROJECT TEMPLATE CONTROLLER (public/project-detail.js)
 * ============================================================================
 * Reads `?id=<project-id>` from the URL query string, looks up the project in
 * `window.PROJECTS_DATA` (from `projects-data.js`), and populates:
 *   1. Project header & repository link
 *   2. Dynamic picture collage (automatically adapts layout for 1, 2, 3, or 4 images)
 *   3. Detailed description & engineering highlights
 *   4. Skills & tools used
 */

function initProjectDetailPage() {
  const projects = window.PROJECTS_DATA || [];
  if (!projects.length) return;

  const params = new URLSearchParams(window.location.search);
  const requestedId = params.get("id");

  // Find matching project by id (or default to first project if no ?id= provided)
  let currentIndex = projects.findIndex((p) => p.id === requestedId);
  if (currentIndex === -1) {
    currentIndex = 0;
  }

  const project = projects[currentIndex];
  document.title = `${project.title} | Pius Onyema Ndukwu`;

  // Prev / Next navigation links
  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex + 1) % projects.length;
  const prevLink = document.getElementById("prev-project-link");
  const nextLink = document.getElementById("next-project-link");
  if (prevLink) {
    prevLink.href = `project.html?id=${encodeURIComponent(projects[prevIndex].id)}`;
    prevLink.title = `Previous: ${projects[prevIndex].title}`;
  }
  if (nextLink) {
    nextLink.href = `project.html?id=${encodeURIComponent(projects[nextIndex].id)}`;
    nextLink.title = `Next: ${projects[nextIndex].title}`;
  }

  // Header metadata
  document.getElementById("detail-category").textContent = project.category;
  document.getElementById("detail-title").textContent = project.title;

  const repoBtn = document.getElementById("detail-repo-link");
  if (project.repoUrl && project.repoUrl !== "#") {
    repoBtn.href = project.repoUrl;
    repoBtn.hidden = false;
  } else {
    repoBtn.hidden = true;
  }

  // Detailed description paragraphs
  const descContainer = document.getElementById("detail-description-body");
  descContainer.innerHTML = "";
  const paragraphs =
    Array.isArray(project.detailedDescription) && project.detailedDescription.length
      ? project.detailedDescription
      : [project.description];

  paragraphs.forEach((paraText) => {
    const p = document.createElement("p");
    p.textContent = paraText;
    descContainer.appendChild(p);
  });

  // Engineering highlights
  const highlightsBox = document.getElementById("detail-highlights-box");
  const highlightsList = document.getElementById("detail-highlights-list");
  highlightsList.innerHTML = "";
  if (Array.isArray(project.highlights) && project.highlights.length) {
    highlightsBox.hidden = false;
    project.highlights.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      highlightsList.appendChild(li);
    });
  } else {
    highlightsBox.hidden = true;
  }

  // Skills & tools list
  const skillsList = document.getElementById("detail-skills-list");
  skillsList.innerHTML = "";
  (project.skills || []).forEach((skill) => {
    const li = document.createElement("li");
    li.className = "skill-tag detail-skill-tag";
    li.textContent = skill;
    skillsList.appendChild(li);
  });

  // Prepare up to 4 images for the adaptive collage
  const baseImages = (project.images || []).slice(0, 4);

  // Build fallback pool of 4 slides so the user can test 1, 2, 3, or 4 image layouts on any project
  const fullFourPool = [...baseImages];
  while (fullFourPool.length < 4 && typeof createDummySlide === "function") {
    const n = fullFourPool.length + 1;
    fullFourPool.push({
      src: createDummySlide("DEMO", n, 4, `Additional Hardware View ${n}`, "#10b981", "#06b6d4"),
      label: `${n}/4 • View ${n}`,
      caption: `Supplementary engineering view ${n} for layout demonstration`
    });
  }

  const collageEl = document.getElementById("project-collage");
  const countBadge = document.getElementById("collage-count-badge");
  const testButtons = document.querySelectorAll(".collage-test-btn");

  function renderCollage(countToRender) {
    const clampedCount = Math.max(1, Math.min(4, countToRender));
    const activeImages = fullFourPool.slice(0, clampedCount);

    collageEl.className = `project-collage collage-count-${clampedCount}`;
    collageEl.innerHTML = "";

    if (countBadge) {
      countBadge.textContent = `${clampedCount} ${clampedCount === 1 ? "Image" : "Images"} • Adaptive Collage (Click any image to zoom)`;
    }

    testButtons.forEach((btn) => {
      btn.classList.toggle("active", Number(btn.dataset.count) === clampedCount);
    });

    activeImages.forEach((imgObj, idx) => {
      const figure = document.createElement("figure");
      figure.className = `collage-item collage-item-${idx + 1}`;
      figure.tabIndex = 0;
      figure.setAttribute("role", "button");
      figure.setAttribute("aria-label", `Zoom image: ${imgObj.caption || imgObj.label || project.title}`);

      const img = document.createElement("img");
      img.src = imgObj.src;
      img.alt = imgObj.caption || `${project.title} image ${idx + 1}`;
      figure.appendChild(img);

      const overlay = document.createElement("figcaption");
      overlay.className = "collage-caption";

      const tag = document.createElement("span");
      tag.className = "collage-tag";
      tag.textContent = imgObj.label || `0${idx + 1} / 0${clampedCount}`;

      const captionText = document.createElement("span");
      captionText.className = "collage-caption-text";
      captionText.textContent = imgObj.caption || `${project.title} — Visual ${idx + 1}`;

      overlay.appendChild(tag);
      overlay.appendChild(captionText);
      figure.appendChild(overlay);

      figure.addEventListener("click", () => openLightbox(imgObj.src, captionText.textContent));
      figure.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(imgObj.src, captionText.textContent);
        }
      });

      collageEl.appendChild(figure);
    });
  }

  // Wire up interactive 1 / 2 / 3 / 4 image collage preview buttons
  testButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      renderCollage(Number(btn.dataset.count));
    });
  });

  // Initial render uses the project's actual image count (1 to 4)
  renderCollage(baseImages.length || 1);

  // Lightbox modal handlers
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("lightbox-img");
  const modalCaption = document.getElementById("lightbox-caption");
  const modalClose = document.getElementById("lightbox-close");

  function openLightbox(src, caption) {
    if (!modal) return;
    modalImg.src = src;
    modalImg.alt = caption;
    modalCaption.textContent = caption;
    modal.hidden = false;
  }

  function closeLightbox() {
    if (!modal) return;
    modal.hidden = true;
    modalImg.src = "";
  }

  if (modalClose) {
    modalClose.addEventListener("click", closeLightbox);
  }
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeLightbox();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && !modal.hidden) {
      closeLightbox();
    }
  });
}

document.addEventListener("DOMContentLoaded", initProjectDetailPage);
