const langImage = document.querySelector("#language");
const langText = document.querySelector("h6");
const stackList = document.querySelector("ul");
let listItems = ""

const section = {
    "Language": ["Python", "Javascript"],
    "Frontend": ["HTML", "CSS", "Bootstrap", "React"],
    "Backend": ["Django"],
    "Database": ["Postgres", "Sqlite"],
}

langImage.addEventListener("mouseenter", () => {
    // if ( langImage.getAttribute("class").includes("mouseOff") ) {
        // langImage.setAttribute("class", "fa-solid fa-laptop-code fa-2xl mouseOn");
        langText.textContent = "Languages";
        for ( const item in section["Language"] ) {
            listItems += `<li>${section["Language"][item]}</li>`;
            console.log(item);
        };
        stackList.innerHTML = listItems;
        // document.appendChild(langText);
        console.log("on");
    }, {once: true}
)


// langImage.addEventListener("mouseleave", () => {
//         langText.textContent = "";
//         console.log("off");
//     }
// )

