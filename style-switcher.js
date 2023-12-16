/* ========================== Toggle Style Switcher ========================== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})


/* ========================== Theme Colors ========================== */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled", true);
        }
    })
}


/* ========================== Light & Dark Mode ========================== */

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () =>
{
    dayNight.querySelector("i").classList.toggle("far", "fa-lightbulb")
    dayNight.querySelector("i").classList.toggle("fas", "fa-lightbulb")
    document.body.classList.toggle("dark");
})

window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("far", "fa-lightbulb");
    }
    else
    {
        dayNight.querySelector("i").classList.add("far", "fa-lightbulb");
    }
})

