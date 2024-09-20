const langImage = document.querySelector("#language");
const langText = document.querySelector(".language");
const stackList = document.createElement("ul");

const LANGUAGE = ["Python", "Javascript"];
const FRONTEND = ["HTML", "CSS", "Bootstrap", "React"]
const BACKEND = ["Django"];
const DATABASE = ["Postgres", "Sqlite"];

langImage.addEventListener("mouseenter", () => {
    // if ( langImage.getAttribute("class").includes("mouseOff") ) {
        // langImage.setAttribute("class", "fa-solid fa-laptop-code fa-2xl mouseOn");
        langText.textContent = "Languages";
        // document.appendChild(langText);
        console.log("on");
    }
)

langImage.addEventListener("mouseleave", () => {
        langText.textContent = "";
        console.log("off");
    }
)

