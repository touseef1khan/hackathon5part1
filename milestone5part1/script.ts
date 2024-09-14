// listing element
document.getElementById('form')?.addEventListener('submit', function(event) {
  event.preventDefault();

//type assertion
const nameElement = document.getElementById('name') as HTMLInputElement;
const emailElement = document.getElementById('email') as HTMLInputElement;
const phoneElement = document.getElementById('phone') as HTMLInputElement;
const addressElement = document.getElementById('address') as HTMLInputElement;
const educationElement = document.getElementById('education') as HTMLInputElement;
const experienceElement = document.getElementById('experience') as HTMLInputElement;
const skillsElement = document.getElementById('skills') as HTMLInputElement;

const usernameElement = document.getElementById('username') as HTMLInputElement;


if(nameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement && usernameElement){
  
const name = nameElement.value
const email = emailElement.value
const phone = phoneElement.value
const address = addressElement.value
const education = educationElement.value
const experience = experienceElement.value
const skills = skillsElement.value
const username = usernameElement.value

const uniquePath = `resumes/${username.replace(/\s+/g, ' ')}_cv.html`


 //create resume output
 const resumeOutput = `
  <h2>Resume</h2>
 <p id="edit-name" class="editable" ><strong>Name:</strong>${name} </p>
 <p id="edit-edit" class="editable"><strong>Email:</strong>${email}</p>
 <p id="edit-phone" class="editable" ><strong>Phone Number:</strong>${phone}</p>
  <p id="edit-address" class="editable"><strong>Address Number:</strong>${address}</p>

 <h3>Education</h3>
 <p id="edit-education" class="editable">${education}</p>

 <h3>Experience</h3>
 <p id="edit-experience" class="editable">${experience}</p>

<h3>Skills</h3>
 <p id="edit-skills" class="editable">${skills}</p>
 `;

const downloadLink = document.createElement('a')
downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
downloadLink.download = uniquePath;
downloadLink.textContent = "Download your resume";

 const resumeOutputElement = document.getElementById('resumeOutput')
 if (resumeOutputElement){
  resumeOutputElement.innerHTML = resumeOutput;

  resumeOutputElement.appendChild(downloadLink)
  makeEditable();
 }
  } else {
    console.error('one or more output element are missing')
  }
});


function makeEditable(){
  const editableElements = document.querySelectorAll('.editable');
  editableElements.forEach(element => {
    element.addEventListener('click' , function() {
      const currentElement = element as HTMLElement;
      const currentValue = currentElement.textContent || "" ;

      //replace content
      if (currentElement.tagName === "p") {
        const input = document.createElement('input')
        input.type = 'text'
        input.value = currentValue
        input.classList.add('editing-input')


        input.addEventListener('blur' , function () {
          currentElement.textContent = input.value;
          currentElement.style.display = 'inline'
          input.remove()
        })



       currentElement.style.display = 'none'
       currentElement.parentNode?.insertBefore(input, currentElement)
       input.focus()
      }

    })
  })
}