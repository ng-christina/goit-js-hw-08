const LOCAL_KEY = 'feedback-form-state'
const form = document.querySelector('.feedback-form')


form.addEventListener('input',throttle(inputChange, 500));
form.addEventListener('submit',onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY))
const {email, message} = form.elements
reloadPage();
function inputChange(event) {
    dataForm={
        email: email.value, massage: message.value
    }
    localStorage.setItem(LOCAL_KEY,JSON.stringify(dataForm));
}
function reloadPage() {
    if (dataForm){
        email.value = dataForm.email || '';
        message.value = dataForm.massage || '';

    }
}
function onFormSubmit(event) {
    event.preventDefault();
      console.log({email: email.value, message: message.value})
         if (email.value === "" || message.value === "") {
          return alert('Please fill in all the fields!');
         } 
         localStorage.removeItem(LOCAL_KEY);
         event.currentTarget.reset();
         dataForm={}
        }
// const form = document.querySelector('.feedback-form');
// const emailInput = form.querySelector('[name="email"]');
// const messageInput = form.querySelector('[name="message"]');

// // Save form state to localStorage
// function saveFormStateToLocalStorage() {
//     const feedback = {
//         email: emailInput.value,
//         message: messageInput.value
//     };
//     localStorage.setItem('feedback-form-state', JSON.stringify(feedback));
// }

// // Load saved form state from localStorage
// function loadFormStateFromLocalStorage() {
//     const feedback = JSON.parse(localStorage.getItem('feedback-form-state'));
//     if (feedback) {
//         emailInput.value = feedback.email;
//         messageInput.value = feedback.message;
//     }
// }

// // Throttle saving form state to localStorage
// const saveFormState = _.throttle(saveFormStateToLocalStorage, 500);

// // Listen for input events on form inputs
// form.addEventListener('input', saveFormState);

// // Load saved form state on page load
// loadFormStateFromLocalStorage();

// // Submit form
// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     // Get form data
//     const email = emailInput.value;
//     const message = messageInput.value;

//     // Clear form and localStorage
//     form.reset();
//     localStorage.removeItem('feedback-form-state');

//     // Log form data
//     const feedback = { email, message };
//     console.log(feedback);
// });