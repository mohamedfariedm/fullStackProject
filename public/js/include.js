document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll("[data-include]");

    elements.forEach((element) => {
        const file = element.getAttribute("data-include");
        console.log(`Fetching content from: ${file}`);

        if (file) {
            fetch(file)
                .then((response) => {
                    if (!response.ok) {
                        console.error(`Failed to fetch ${file}: ${response.status}`);
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.text();
                })
                .then((html) => {
                    element.innerHTML = html;
                    element.removeAttribute("data-include");

                    // Reinitialize specific scripts
                    if (file.includes("header.html")) {
                        initializeLanguageSwitcher();
                    }
                    if (file.includes("banner.html")) {
                        initializeBannerScripts();
                    }
                    console.log(`Successfully loaded content from: ${file}`);
                })
                .catch((error) => console.error(`Error loading component: ${error.message}`));
        }
    });
});

// Example of a reinitialization function for banner.html

console.log("hello");
