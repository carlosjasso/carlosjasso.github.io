const currentYear = new Date().getFullYear();
const yearsElement = document.getElementById("copyright-years");
yearsElement.textContent = currentYear <= 2020 ? "2020" : `2020 - ${ currentYear }`;