// Brand link to home
if (window.location.pathname !== "/") {
    const brandElement = document.getElementById("brand");
    const brandText = brandElement.textContent;
    brandElement.textContent = "";
    const homeAnchor = document.createElement("a");
    homeAnchor.href = "/";
    homeAnchor.textContent = brandText;
    brandElement.appendChild(homeAnchor);
}

// Copyright years
const currentYear = new Date().getFullYear();
const yearsElement = document.getElementById("copyright-years");
yearsElement.textContent = currentYear <= 2020 ? "2020" : `2020 - ${ currentYear }`;