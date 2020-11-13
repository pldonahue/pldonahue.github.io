(() => {
  const ctx = document.querySelector(".stats-chart__element");

  const gradient = ctx.getContext("2d").createLinearGradient(0, 0, 0, 300);

  gradient.addColorStop(0, "rgba(255, 152,0, 0.4)");
  gradient.addColorStop(0.3, "rgba(255, 152,0, 0.05)");
  gradient.addColorStop(1, "transparent");

  const gradientBlue = ctx.getContext("2d").createLinearGradient(0, 0, 0, 300);

  gradientBlue.addColorStop(0, "rgba(3, 169, 244, 0.4)");
  gradientBlue.addColorStop(0.3, "rgba(3, 169, 244, 0.05)");
  gradientBlue.addColorStop(1, "transparent");

  const config = {
    type: "line",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Minutes",
          backgroundColor: gradient,
          borderColor: "#FF9800",
          data: [-100, 19, 3, 5, 2, 3, 100],
          fill: true,
        },
        {
          label: "Seconds",
          backgroundColor: gradientBlue,
          borderColor: "#03a9f4",
          data: [-40, 19, 3, 10, 33, 3, -100],
          fill: true,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
    },
  };
  new Chart(ctx, config);

  const sidebarMenu = document.querySelector(".sidebar-menu");
  const sidebar = document.querySelector(".sidebar");

  sidebarMenu.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar--active");
  });

  const welcomeClose = document.querySelector(".welcome__close");
  const welcome = document.querySelector(".welcome");

  welcomeClose.addEventListener("click", () => {
    welcome.classList.add("hide");
  });

  const data = [
    { title: "Data 1", progress: 34, color: "#03a9f4" },
    { title: "Data 2", progress: 60, color: "#4caf50" },
    { title: "Data 3", progress: 70, color: "#f44336" },
    { title: "Data 4", progress: 90, color: "purple" },
  ];

  const svg = document.querySelector(".round-chart__element svg");
  const legend = document.querySelector(".round-chart__legend");

  const isMobile = document.body.clientWidth < 900;

  svg.innerHTML = `${data
    .map(
      (item, index) => `
      <circle class="progress-ring__circle"
                          stroke="${item.color}"
                          stroke-width="16"
                          fill="transparent"
                          data-progress="${item.progress}"
                          r="${100 + index * 16}"
                          cx="${svg.clientWidth / 2 + 30}"
                          stroke-linecap="round"
                          cy="${isMobile ? svg.clientHeight / 2 : 100}"/>
                          `
    )
    .join("")}`;
  const circles = svg.querySelectorAll("circle");

  circles.forEach((circle) => {
    var radius = circle.r.baseVal.value;
    var circumference = radius * 2 * Math.PI;

    const progress = parseInt(circle.dataset.progress);

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    function setProgress(percent) {
      const offset = circumference - (percent / 100) * circumference;
      circle.style.strokeDashoffset = offset;
    }

    setProgress(progress);
  });

  legend.innerHTML = `${data
    .map(
      (item) => `
      <div class="round-chart__legend__item">
        <span class="round-chart__legend__bullet" style="background-color: ${item.color}"></span>
        <span class=""round-chart__legend__text>${item.title}</span>
      </div>
  `
    )
    .join("")}
  `;
})();
