//Create a footer element
const afooter = document.createElement("footer");
afooter.className = "footer";
afooter.setAttribute("id", "myfooter");
document.body.appendChild(afooter);

//Get current year
var today = new Date();
var thisYear = today.getFullYear();

//find the added footer element
var newFooter = document.querySelector("footer");
console.log(newFooter);

//create copyright 
var myCopyright = document.createElement("P");
const copyrightSymbol = "\u00A9";
var copyrightText = copyrightSymbol + " Hattie Johnson " + thisYear;
myCopyright.innerHTML = copyrightText;

//Append copyright to footer
newFooter.appendChild(myCopyright);

//find the skills section and unordered list 
const skills = [
    "SQL", 
    "GitHub", 
    "Javascript", 
    "HTML",
    "CSS"];
const skillsSection = document.getElementById("Skills");
const skillsList = skillsSection.getElementsByTagName("ul");

//create skills list 
for (let i = 0; i < skills.length; i++) {
    var skill = document.createElement("LI");
    skill.innerText = skills[i];
    skillsList[0].appendChild(skill);
}
console.log(skillsList);
