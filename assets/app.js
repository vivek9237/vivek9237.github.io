const toggleButton = document.getElementById("theme-toggle");

const currentTheme =
    localStorage.getItem("theme") || "light";

document.documentElement.setAttribute(
    "data-theme",
    currentTheme
);

updateButtonText(currentTheme);

toggleButton.addEventListener("click", () => {
    const theme =
        document.documentElement.getAttribute(
            "data-theme"
        );

    const newTheme =
        theme === "light" ? "dark" : "light";

    document.documentElement.setAttribute(
        "data-theme",
        newTheme
    );

    localStorage.setItem(
        "theme",
        newTheme
    );

    updateButtonText(newTheme);
});

function updateButtonText(theme) {
    toggleButton.textContent =
        theme === "light"
            ? "🌙 Dark Mode"
            : "☀️ Light Mode";
}

fetch("resume.md")
    .then(response => response.text())
    .then(markdown => {
        document.getElementById("content").innerHTML =
            marked.parse(markdown);
    })
    .catch(error => {
        document.getElementById("content").innerHTML =
            "<p>Failed to load markdown.</p>";
        console.error(error);
    });
