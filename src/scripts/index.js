document.addEventListener("DOMContentLoaded", function () {
  // Function to set the theme based on user preference
  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("userTheme", theme);
  }

  // Function to toggle between dark and light theme
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }

  // Function to check user preferences and set the theme accordingly
  function checkUserTheme() {
    const userTheme = localStorage.getItem("userTheme");
    if (userTheme) {
      setTheme(userTheme);
    } else {
      // Check if the system has a preference and set accordingly
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setTheme(systemTheme);
    }
  }

  // Add event listener to the toggle button
  document
    .getElementById("theme-toggle")
    .addEventListener("click", toggleTheme);

  // Check user preferences on page load
  checkUserTheme();
});
