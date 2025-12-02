document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const items   = document.querySelectorAll(".skill-item");
  const track   = document.querySelector(".skills-track");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Update active button
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      if (filter === "all") {
        // Show everything (including duplicates)
        items.forEach(item => {
          item.classList.remove("hidden");
        });

        // Marquee on
        track.classList.remove("static");
        track.style.animation = "none"; // restart animation
        void track.offsetWidth;
        track.style.animation = "scrollInfinite 12s linear infinite";
      } else {
        // Filter: hide non-matching items, hide duplicates
        items.forEach(item => {
          if (item.classList.contains(filter) && !item.classList.contains("duplicate")) {
            item.classList.remove("hidden");
          } else {
            item.classList.add("hidden");
          }
        });

        // Make track static & centered
        track.classList.add("static");
        track.style.animation = "none";
        track.style.transform = "translateX(0)";
      }
    });
  });

  // Initial state: All (already set in HTML)
});
