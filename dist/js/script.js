  lucide.createIcons();

    const menuBtn = document.getElementById("menuBtn");
    const closeBtn = document.getElementById("closeBtn");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    const menuLinks = document.querySelectorAll(".menu-link");

    function openMenu() {
      sidebar.classList.remove("-translate-x-full");
      overlay.classList.remove("hidden");
    }

    function closeMenu() {
      sidebar.classList.add("-translate-x-full");
      overlay.classList.add("hidden");
    }

    menuBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);

    menuLinks.forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    const lineCtx = document.getElementById("lineChart");

    new Chart(lineCtx, {
      type: "line",
      data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
        datasets: [
          {
            label: "Entradas",
            data: [5000, 6500, 7200, 8100, 9500, 10500],
            borderColor: "#22c55e",
            backgroundColor: "rgba(34,197,94,0.15)",
            fill: true,
            tension: 0.4
          },
          {
            label: "Saídas",
            data: [2800, 3500, 4000, 4200, 5100, 6200],
            borderColor: "#ef4444",
            backgroundColor: "rgba(239,68,68,0.12)",
            fill: true,
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top"
          }
        }
      }
    });

    const pieCtx = document.getElementById("pieChart");

    new Chart(pieCtx, {
      type: "doughnut",
      data: {
        labels: ["Moradia", "Alimentação", "Transporte", "Lazer", "Outros"],
        datasets: [{
          data: [2450, 1800, 950, 700, 1020],
          backgroundColor: [
            "#2563eb",
            "#22c55e",
            "#f59e0b",
            "#ef4444",
            "#8b5cf6"
          ],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        cutout: "70%"
      }
    });