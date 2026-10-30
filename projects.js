/**
 * ============================================================================
 * PROJECTS TEMPLATE DATA
 * ============================================================================
 * To add or edit projects later, simply update this `PROJECTS_DATA` array.
 * Each project object supports:
 *   - title:       Project name
 *   - category:    Short subsystem / domain badge
 *   - description: Brief summary of what the project does (2-3 lines)
 *   - link:        URL to GitHub repo, case study page, or demo (use "#" for placeholder)
 *   - images:      Array of 4 image objects `{ src, label }` (replace `src` with your image paths)
 *   - skills:      Array of skills, protocols, and tools used
 */

function createDummySlide(projectCode, stageNum, stageTitle, accentHex, secondaryHex) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 280" width="480" height="280">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0b1120"/>
        <stop offset="100%" stop-color="#111827"/>
      </linearGradient>
      <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="${accentHex}" stop-opacity="0.85"/>
        <stop offset="100%" stop-color="${secondaryHex}" stop-opacity="0.85"/>
      </linearGradient>
      <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
        <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(148,163,184,0.08)" stroke-width="1"/>
      </pattern>
    </defs>
    <rect width="480" height="280" fill="url(#bg)"/>
    <rect width="480" height="280" fill="url(#grid)"/>
    <circle cx="400" cy="60" r="95" fill="${accentHex}" fill-opacity="0.08"/>
    <circle cx="80" cy="230" r="85" fill="${secondaryHex}" fill-opacity="0.08"/>
    <!-- Decorative circuit traces -->
    <path d="M 32 195 L 120 195 L 145 170 L 260 170 L 285 195 L 448 195" fill="none" stroke="${accentHex}" stroke-opacity="0.35" stroke-width="2"/>
    <circle cx="120" cy="195" r="4" fill="${accentHex}"/>
    <circle cx="260" cy="170" r="4" fill="${secondaryHex}"/>
    <!-- Stage pill -->
    <rect x="32" y="28" width="110" height="26" rx="13" fill="rgba(15,23,42,0.9)" stroke="${accentHex}" stroke-opacity="0.5"/>
    <text x="87" y="45" fill="${accentHex}" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle">${projectCode} • 0${stageNum}/04</text>
    <!-- Main stage title -->
    <text x="32" y="108" fill="#f8fafc" font-family="sans-serif" font-size="20" font-weight="700">${stageTitle}</text>
    <text x="32" y="134" fill="#94a3b8" font-family="monospace" font-size="12">Auto-Scrolling Carousel Preview Slide ${stageNum}</text>
    <!-- Progress bar -->
    <rect x="32" y="226" width="416" height="6" rx="3" fill="rgba(148,163,184,0.14)"/>
    <rect x="32" y="226" width="${stageNum * 104}" height="6" rx="3" fill="url(#accent)"/>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const PROJECTS_DATA = [
  {
    title: "Industrial Three-Phase Smart Energy & Power Quality Meter",
    category: "Industrial IoT & Metering",
    description:
      "Custom 4-layer PCB and FreeRTOS firmware for real-time voltage, current, and harmonic monitoring with automatic load cut-off and cloud telemetry.",
    link: "#",
    images: [
      {
        src: createDummySlide("PRJ-01", 1, "EasyEDA Schematic Capture", "#10b981", "#06b6d4"),
        label: "1/4 • Schematic"
      },
      {
        src: createDummySlide("PRJ-01", 2, "4-Layer JLCPCB Layout", "#06b6d4", "#3b82f6"),
        label: "2/4 • PCB Layout"
      },
      {
        src: createDummySlide("PRJ-01", 3, "Assembled Hardware Enclosure", "#10b981", "#8b5cf6"),
        label: "3/4 • Hardware"
      },
      {
        src: createDummySlide("PRJ-01", 4, "ThingsBoard Live Telemetry", "#f59e0b", "#10b981"),
        label: "4/4 • Cloud UI"
      }
    ],
    skills: [
      "ESP-IDF Framework",
      "FreeRTOS",
      "C/C++",
      "Modbus RTU",
      "RS-485",
      "MQTT",
      "ThingsBoard",
      "EasyEDA",
      "JLCPCB"
    ]
  },
  {
    title: "Long-Range LoRaWAN & Cellular Environmental Sensor Node",
    category: "LPWAN & Remote Sensing",
    description:
      "Ultra-low-power STM32 field node transmitting multi-point soil and weather telemetry over LoRa and cellular backhaul with solar MPPT charging.",
    link: "#",
    images: [
      {
        src: createDummySlide("PRJ-02", 1, "RF & Power Schematic", "#06b6d4", "#10b981"),
        label: "1/4 • RF Design"
      },
      {
        src: createDummySlide("PRJ-02", 2, "STM32 + LoRa Carrier PCB", "#3b82f6", "#10b981"),
        label: "2/4 • PCB View"
      },
      {
        src: createDummySlide("PRJ-02", 3, "IP65 JLC3DP Field Enclosure", "#10b981", "#06b6d4"),
        label: "3/4 • Field Unit"
      },
      {
        src: createDummySlide("PRJ-02", 4, "AWS EC2 & ThingsBoard Map", "#8b5cf6", "#06b6d4"),
        label: "4/4 • Fleet Map"
      }
    ],
    skills: [
      "STM32Cube",
      "C/C++",
      "LoRa",
      "Cellular",
      "I2C / SPI / UART",
      "AWS (EC2)",
      "Docker",
      "JLC3DP",
      "LCSC"
    ]
  },
  {
    title: "Edge AI Predictive Maintenance & Acoustic Anomaly Detector",
    category: "Embedded Machine Learning",
    description:
      "Continuous vibration and acoustic inference running locally on an ESP32/SBC gateway to detect motor bearing faults before catastrophic breakdown.",
    link: "#",
    images: [
      {
        src: createDummySlide("PRJ-03", 1, "Sensor Front-End & ADC", "#8b5cf6", "#06b6d4"),
        label: "1/4 • Analog AFE"
      },
      {
        src: createDummySlide("PRJ-03", 2, "Edge Impulse DSP Pipeline", "#10b981", "#3b82f6"),
        label: "2/4 • TinyML Model"
      },
      {
        src: createDummySlide("PRJ-03", 3, "DIN-Rail Industrial Mount", "#06b6d4", "#10b981"),
        label: "3/4 • DIN Hardware"
      },
      {
        src: createDummySlide("PRJ-03", 4, "Real-Time Anomaly Alerts", "#f59e0b", "#ef4444"),
        label: "4/4 • Diagnostics"
      }
    ],
    skills: [
      "Edge Impulse (Embedded ML)",
      "ESP-IDF Framework",
      "FreeRTOS",
      "Python",
      "CAN",
      "Wi-Fi",
      "HTTP(S)",
      "VS Code"
    ]
  },
  {
    title: "Smart Building Biometric & BLE Mesh Access Controller",
    category: "Connected Hardware & Security",
    description:
      "Decentralized door access and attendance terminal with capacitive fingerprint matching, ESP-NOW local mesh fallback, and encrypted cloud sync.",
    link: "#",
    images: [
      {
        src: createDummySlide("PRJ-04", 1, "Controller & Relay Schematic", "#10b981", "#f59e0b"),
        label: "1/4 • Schematic"
      },
      {
        src: createDummySlide("PRJ-04", 2, "Compact 2-Layer PCB Layout", "#06b6d4", "#10b981"),
        label: "2/4 • PCB Layout"
      },
      {
        src: createDummySlide("PRJ-04", 3, "3D-Printed Wall Terminal", "#3b82f6", "#8b5cf6"),
        label: "3/4 • Enclosure"
      },
      {
        src: createDummySlide("PRJ-04", 4, "Cloud Attendance Sync Log", "#10b981", "#06b6d4"),
        label: "4/4 • Dashboard"
      }
    ],
    skills: [
      "Arduino Core",
      "C/C++",
      "BLE / Bluetooth",
      "ESP-NOW",
      "Wi-Fi",
      "UART",
      "EasyEDA",
      "JLCPCB"
    ]
  },
  {
    title: "Rockchip / Raspberry Pi Multi-Protocol Local IoT Edge Gateway",
    category: "SBC & Edge Infrastructure",
    description:
      "Containerized industrial gateway bridging CAN bus, RS-485 Modbus RTU sensors, and BLE beacons into a local self-hosted ThingsBoard instance.",
    link: "#",
    images: [
      {
        src: createDummySlide("PRJ-05", 1, "Isolated CAN & RS-485 HAT", "#06b6d4", "#3b82f6"),
        label: "1/4 • Carrier HAT"
      },
      {
        src: createDummySlide("PRJ-05", 2, "SBC + Custom Interface Board", "#10b981", "#06b6d4"),
        label: "2/4 • Hardware"
      },
      {
        src: createDummySlide("PRJ-05", 3, "Docker Microservice Stack", "#8b5cf6", "#10b981"),
        label: "3/4 • Containers"
      },
      {
        src: createDummySlide("PRJ-05", 4, "Local ThingsBoard HMI", "#10b981", "#f59e0b"),
        label: "4/4 • Local HMI"
      }
    ],
    skills: [
      "Raspberry Pi & Rockchip SBCs",
      "Python",
      "MicroPython",
      "Docker",
      "ThingsBoard",
      "CAN",
      "RS-485",
      "MQTT"
    ]
  }
];

/**
 * Renders all projects from `PROJECTS_DATA` using `<template id="project-card-template">`
 * and initializes the automatic 4-image carousel for each card.
 */
function renderProjects() {
  const listContainer = document.getElementById("projects-list");
  const template = document.getElementById("project-card-template");
  if (!listContainer || !template) return;

  listContainer.innerHTML = "";

  PROJECTS_DATA.forEach((project, projectIndex) => {
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".project-card");
    const track = fragment.querySelector(".carousel-track");
    const dots = fragment.querySelectorAll(".carousel-dot");
    const stageLabel = fragment.querySelector(".carousel-stage-label");

    // Populate metadata & links
    fragment.querySelector(".project-category").textContent = project.category;

    const titleLink = fragment.querySelector(".project-card-link");
    titleLink.textContent = project.title;
    titleLink.href = project.link || "#";

    const actionLink = fragment.querySelector(".project-action-link");
    actionLink.href = project.link || "#";

    fragment.querySelector(".project-description").textContent = project.description;

    // Populate 4 carousel images
    const slides = project.images.slice(0, 4);
    slides.forEach((imgObj, idx) => {
      const slide = document.createElement("div");
      slide.className = "carousel-slide";
      const img = document.createElement("img");
      img.src = imgObj.src;
      img.alt = `${project.title} - ${imgObj.label || `Slide ${idx + 1}`}`;
      img.loading = projectIndex < 3 ? "eager" : "lazy";
      slide.appendChild(img);
      track.appendChild(slide);
    });

    // Populate skill/tool tags
    const skillsList = fragment.querySelector(".project-skills");
    project.skills.forEach((skillName) => {
      const li = document.createElement("li");
      li.className = "skill-tag";
      li.textContent = skillName;
      skillsList.appendChild(li);
    });

    // Initialize auto-scrolling carousel state
    let currentSlide = 0;
    const totalSlides = slides.length;

    function goToSlide(index) {
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
