// //import
// const localKey = 'feedback-form-state'
// const form = document.querySelector('.feedback-form')


// form.addEventListener('submit', _.throttle(inputChange, 500));

// function inputChange(event) {
//     event.preventDefault();
//         const {
//             elements:{email, message}
//           } = event.currentTarget;
//          if (email.value === "" || message.value === "") {
//          alert('Please fill in all the fields!');
//          return
//          } else {
//           const result = {
//           email: email.value,
//           message: message.value
//           }
//           console.log( result)
//          }
//          event.currentTarget.reset()
//         }
// import throttle from 'lodash.throttle'; 

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