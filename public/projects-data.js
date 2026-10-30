/**
 * ============================================================================
 * LOCAL PORTFOLIO PROJECTS DATA STORE (public/projects-data.js)
 * ============================================================================
 * Single source of truth used by both:
 *   - `projects.html` (vertical project cards feed)
 *   - `project.html?id=<project-id>` (single-page recruiter case study view)
 *
 * Each project supports between 1 and 4 images in `images`.
 * - On `projects.html`, the card carousel cycles through the project's images.
 * - On `project.html?id=...`, the dynamic picture collage automatically adapts
 *   its grid layout to 1, 2, 3, or 4 images.
 */

function createDummySlide(projectCode, stageNum, totalStages, stageTitle, accentHex, secondaryHex) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 380" width="640" height="380">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0b1120"/>
        <stop offset="100%" stop-color="#111827"/>
      </linearGradient>
      <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="${accentHex}" stop-opacity="0.9"/>
        <stop offset="100%" stop-color="${secondaryHex}" stop-opacity="0.9"/>
      </linearGradient>
      <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
        <path d="M 28 0 L 0 0 0 28" fill="none" stroke="rgba(148,163,184,0.08)" stroke-width="1"/>
      </pattern>
    </defs>
    <rect width="640" height="380" fill="url(#bg)"/>
    <rect width="640" height="380" fill="url(#grid)"/>
    <circle cx="530" cy="80" r="130" fill="${accentHex}" fill-opacity="0.09"/>
    <circle cx="110" cy="310" r="115" fill="${secondaryHex}" fill-opacity="0.09"/>
    <!-- Decorative circuit traces -->
    <path d="M 42 265 L 165 265 L 195 230 L 355 230 L 385 265 L 598 265" fill="none" stroke="${accentHex}" stroke-opacity="0.38" stroke-width="2.5"/>
    <circle cx="165" cy="265" r="5" fill="${accentHex}"/>
    <circle cx="355" cy="230" r="5" fill="${secondaryHex}"/>
    <!-- Stage pill -->
    <rect x="42" y="38" width="136" height="30" rx="15" fill="rgba(15,23,42,0.92)" stroke="${accentHex}" stroke-opacity="0.55"/>
    <text x="110" y="57" fill="${accentHex}" font-family="monospace" font-size="13" font-weight="bold" text-anchor="middle">${projectCode} • 0${stageNum}/0${totalStages}</text>
    <!-- Main stage title -->
    <text x="42" y="145" fill="#f8fafc" font-family="sans-serif" font-size="26" font-weight="700">${stageTitle}</text>
    <text x="42" y="180" fill="#94a3b8" font-family="monospace" font-size="14">Hardware &amp; Firmware Visual Documentation (${stageNum} of ${totalStages})</text>
    <!-- Progress bar -->
    <rect x="42" y="310" width="556" height="7" rx="3.5" fill="rgba(148,163,184,0.14)"/>
    <rect x="42" y="310" width="${Math.round((stageNum / totalStages) * 556)}" height="7" rx="3.5" fill="url(#accent)"/>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

window.PROJECTS_DATA = [
  {
    id: "smart-energy-meter",
    title: "Industrial Three-Phase Smart Energy & Power Quality Meter",
    category: "Industrial IoT & Metering",
    description:
      "Custom 4-layer PCB and FreeRTOS firmware for real-time voltage, current, and harmonic monitoring with automatic load cut-off and cloud telemetry.",
    detailedDescription: [
      "Designed and engineered an industrial-grade smart energy monitoring system capable of measuring real-time RMS voltage, current, active/reactive power, power factor, and cumulative energy consumption across commercial loads.",
      "The firmware is built on ESP-IDF and FreeRTOS using deterministic multi-tasking: a high-priority metering task samples the analog front-end and computes power parameters, while dedicated communication tasks handle RS-485 Modbus RTU queries and asynchronous MQTT telemetry to a ThingsBoard server.",
      "When configurable power or current thresholds are exceeded, the system triggers instant push notifications and actuates an onboard latching relay for automated remote or local load shedding."
    ],
    highlights: [
      "Deterministic FreeRTOS task architecture separating high-frequency metering from network I/O",
      "Custom EasyEDA schematic capture and 4-layer JLCPCB layout with galvanic isolation",
      "Real-time ThingsBoard cloud dashboard with historical consumption analytics and remote cut-off control"
    ],
    repoUrl: "https://github.com/Pius171/Blues-Energy-Monitor",
    images: [
      {
        src: createDummySlide("PRJ-01", 1, 4, "EasyEDA Schematic Capture", "#10b981", "#06b6d4"),
        label: "1/4 • Schematic",
        caption: "Isolated AC analog front-end and MCU power supply schematic in EasyEDA"
      },
      {
        src: createDummySlide("PRJ-01", 2, 4, "4-Layer JLCPCB Layout", "#06b6d4", "#3b82f6"),
        label: "2/4 • PCB Layout",
        caption: "High-voltage creepage slots and impedance-controlled routing for JLCPCB fabrication"
      },
      {
        src: createDummySlide("PRJ-01", 3, 4, "Assembled Hardware Enclosure", "#10b981", "#8b5cf6"),
        label: "3/4 • Hardware",
        caption: "Assembled PCBA inside custom 3D-printed DIN-rail enclosure (JLC3DP)"
      },
      {
        src: createDummySlide("PRJ-01", 4, 4, "ThingsBoard Live Telemetry", "#f59e0b", "#10b981"),
        label: "4/4 • Cloud UI",
        caption: "Real-time ThingsBoard telemetry dashboard showing load profiles and threshold alerts"
      }
    ],
    skills: [
      "ESP-IDF Framework",
      "FreeRTOS",
      "C / C++",
      "Modbus RTU",
      "RS-485",
      "MQTT",
      "ThingsBoard",
      "EasyEDA",
      "JLCPCB"
    ]
  },
  {
    id: "lorawan-sensor-node",
    title: "Long-Range LoRaWAN & Cellular Environmental Sensor Node",
    category: "LPWAN & Remote Sensing",
    description:
      "Ultra-low-power STM32 field node transmitting multi-point soil and weather telemetry over LoRa and cellular backhaul with solar MPPT charging.",
    detailedDescription: [
      "Developed a rugged remote environmental sensing node powered by an STM32 microcontroller and RAK3172 LoRaWAN transceiver with cellular fallback for off-grid agricultural and industrial monitoring.",
      "Engineered deep-sleep power management routines using STM32Cube HAL, dropping quiescent current into the microamp range between scheduled sensor polling intervals to achieve multi-month battery autonomy.",
      "Telemetry packets are aggregated by a LoRaWAN gateway and forwarded to an AWS EC2 Docker stack running ThingsBoard for geospatial visualization and alerting."
    ],
    highlights: [
      "Sub-50 µA deep-sleep current profile with hardware watchdog and brown-out recovery",
      "Dual-mode OTAA LoRaWAN + Cellular IoT backhaul for guaranteed packet delivery",
      "Custom weatherproof JLC3DP enclosure and LCSC-sourced production BOM"
    ],
    repoUrl: "https://github.com/Pius171/RAK7248C-Gateway-and-RAK3172-LORAWAN-End-Device",
    images: [
      {
        src: createDummySlide("PRJ-02", 1, 3, "RF & Solar Power Schematic", "#06b6d4", "#10b981"),
        label: "1/3 • RF Design",
        caption: "STM32 host MCU, RAK3172 RF matching network, and LiFePO4 solar charging circuit"
      },
      {
        src: createDummySlide("PRJ-02", 2, 3, "STM32 + LoRa Carrier PCB", "#3b82f6", "#10b981"),
        label: "2/3 • PCB View",
        caption: "Compact carrier board layout with RF ground stitching vias"
      },
      {
        src: createDummySlide("PRJ-02", 3, 3, "AWS EC2 & ThingsBoard Fleet Map", "#8b5cf6", "#06b6d4"),
        label: "3/3 • Fleet Map",
        caption: "Live multi-node telemetry dashboard hosted on AWS EC2 with Docker"
      }
    ],
    skills: [
      "STM32Cube",
      "C / C++",
      "LoRa",
      "Cellular",
      "UART / I2C / SPI",
      "AWS (EC2)",
      "Docker",
      "JLC3DP",
      "LCSC"
    ]
  },
  {
    id: "edge-ai-anomaly-detector",
    title: "Edge AI Predictive Maintenance & Acoustic Anomaly Detector",
    category: "Embedded Machine Learning",
    description:
      "Continuous vibration and acoustic inference running locally on an ESP32/SBC gateway to detect motor bearing faults before catastrophic breakdown.",
    detailedDescription: [
      "Built an embedded machine learning system that captures high-frequency accelerometer and microphone data on rotating industrial machinery to classify operating states and flag early bearing wear.",
      "Trained and quantized a compact spectral neural network in Edge Impulse, deploying the C++ inference library directly onto the embedded target for sub-50 ms real-time anomaly scoring without cloud latency.",
      "Fault events and confidence metrics are broadcast over CAN bus to local PLCs and published over Wi-Fi/HTTP(S) for maintenance scheduling."
    ],
    highlights: [
      "On-device DSP spectral feature extraction and quantized TinyML model inference",
      "Zero cloud dependency for critical fault detection, reducing bandwidth by 95%",
      "Seamless integration with industrial CAN bus and HTTP(S) webhook alerts"
    ],
    repoUrl: "https://github.com/Pius171/Unihiker-Edge-Impulse",
    images: [
      {
        src: createDummySlide("PRJ-03", 1, 2, "Edge Impulse DSP & Neural Network", "#8b5cf6", "#06b6d4"),
        label: "1/2 • TinyML Pipeline",
        caption: "Spectral analysis and quantized neural network classifier trained in Edge Impulse"
      },
      {
        src: createDummySlide("PRJ-03", 2, 2, "On-Device Inference & CAN Telemetry", "#10b981", "#3b82f6"),
        label: "2/2 • Edge Hardware",
        caption: "Real-time anomaly classification running on embedded hardware with CAN output"
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
    id: "biometric-access-control",
    title: "Smart Building Biometric & BLE Mesh Access Controller",
    category: "Connected Hardware & Security",
    description:
      "Decentralized door access and attendance terminal with capacitive fingerprint matching, ESP-NOW local mesh fallback, and encrypted cloud sync.",
    detailedDescription: [
      "Engineered a standalone biometric access control and attendance logging terminal utilizing a high-speed optical/capacitive fingerprint sensor interfaced over UART with an ESP32 controller.",
      "Designed offline-first flash storage so door authorization and timestamped attendance records continue operating seamlessly during internet outages, automatically synchronizing when Wi-Fi connectivity is restored.",
      "Added BLE beacon proximity detection and ESP-NOW peer-to-peer communication to coordinate multi-door interlocks across a facility."
    ],
    highlights: [
      "Sub-second fingerprint template matching with offline flash ring-buffer logging",
      "ESP-NOW local mesh coordination and BLE proximity sensing",
      "Custom 2-layer PCB and 3D-printed wall-mount enclosure"
    ],
    repoUrl: "https://github.com/Pius171/FingerPrint-Access-Control",
    images: [
      {
        src: createDummySlide("PRJ-04", 1, 4, "Controller & Relay Schematic", "#10b981", "#f59e0b"),
        label: "1/4 • Schematic",
        caption: "ESP32 controller, opto-isolated strike relay, and biometric sensor interface"
      },
      {
        src: createDummySlide("PRJ-04", 2, 4, "Compact 2-Layer PCB Layout", "#06b6d4", "#10b981"),
        label: "2/4 • PCB Layout",
        caption: "Custom 2-layer PCB designed in EasyEDA and manufactured via JLCPCB"
      },
      {
        src: createDummySlide("PRJ-04", 3, 4, "3D-Printed Wall Terminal", "#3b82f6", "#8b5cf6"),
        label: "3/4 • Enclosure",
        caption: "Ergonomic wall-mount enclosure produced via JLC3DP"
      },
      {
        src: createDummySlide("PRJ-04", 4, 4, "Cloud Attendance Sync Log", "#10b981", "#06b6d4"),
        label: "4/4 • Dashboard",
        caption: "Real-time access audit trail and automated attendance synchronization"
      }
    ],
    skills: [
      "Arduino Core",
      "C / C++",
      "BLE / Bluetooth",
      "ESP-NOW",
      "Wi-Fi",
      "UART",
      "EasyEDA",
      "JLCPCB"
    ]
  },
  {
    id: "rockchip-iot-gateway",
    title: "Rockchip / Raspberry Pi Multi-Protocol Local IoT Edge Gateway",
    category: "SBC & Edge Infrastructure",
    description:
      "Containerized industrial gateway bridging CAN bus, RS-485 Modbus RTU sensors, and BLE beacons into a local self-hosted ThingsBoard instance.",
    detailedDescription: [
      "Architected a local industrial IoT edge gateway running on Raspberry Pi and Rockchip single-board computers to unify legacy serial fieldbuses with modern cloud-native telemetry.",
      "Developed Python and MicroPython protocol bridges that poll RS-485 Modbus RTU instruments and CAN bus nodes, normalizing payloads into structured MQTT topics.",
      "Deployed a containerized Docker stack hosting ThingsBoard and a local MQTT broker for zero-latency on-premise visualization and rule-engine automation."
    ],
    highlights: [
      "Multi-protocol hardware interface bridging RS-485, CAN, and BLE to MQTT",
      "Dockerized local ThingsBoard deployment for air-gapped industrial facilities",
      "Automated watchdog services ensuring 24/7 unattended gateway uptime"
    ],
    repoUrl: "https://github.com/Pius171/Modbus-Temperature-Sensor-ZTS-3008-WS-N01",
    images: [
      {
        src: createDummySlide("PRJ-05", 1, 1, "SBC Gateway + Isolated CAN/RS-485 Architecture", "#06b6d4", "#10b981"),
        label: "1/1 • System Architecture",
        caption: "Complete edge gateway hardware and Docker microservice architecture"
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
      "Modbus RTU",
      "MQTT"
    ]
  }
];
