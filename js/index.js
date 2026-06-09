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


let messageForm = document.querySelector("form[name=leave_message]")

messageForm.addEventListener("submit", function(event){
event.preventDefault()

let name = event.target.usersName.value;
let email = event.target.usersEmail.value;
let message = event.target.usersMessage.value;

console.log(name, email, message);

let messageSection = document.querySelector("#messages");
let messageList = messageSection.querySelector("ul");

let newMessage = document.createElement("li");

newMessage.innerHTML = `
  <a href="mailto:${email}">${name}</a>
  <span>${message}</span>
`
let removeButton = document.createElement("button");
removeButton.innerText = "remove";
removeButton.type = "button";

removeButton.addEventListener("click", function() {
    let entry = removeButton.parentNode;
    entry.remove();
 })

newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);

messageForm.reset();

})

//find the projects section and unordered lists
let projectSection = document.getElementById("Projects");
let projectList = projectSection.getElementsByTagName("ul");


//creating the fetch
fetch("https://api.github.com/users/hattiemaenoway/repos")
.then(response => response.json())
.then(repositories => {
    console.log(repositories);

//create the project list
for (let i = 0; i < repositories.length; i++) {
  let project = document.createElement("li");

  project.innerText = repositories[i].name;

  projectList[0].appendChild(project);
}
})
.catch(error => {
    console.error(error);

    projectList[0].innerText = "Unexpected Error! Please try again later.";
});


