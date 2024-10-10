/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (loginPass, loginEye) =>{
   const input = document.getElementById(loginPass),
         iconEye = document.getElementById(loginEye)

   iconEye.addEventListener('click', () =>{
      // Change password to text
      if(input.type === 'password'){
         // Switch to text
         input.type = 'text'

         // Icon change
         iconEye.classList.add('ri-eye-line')
         iconEye.classList.remove('ri-eye-off-line')
      } else{
         // Change to password
         input.type = 'password'

         // Icon change
         iconEye.classList.remove('ri-eye-line')
         iconEye.classList.add('ri-eye-off-line')
      }
   })
}

showHiddenPass('login-pass','login-eye')

// js code for password valdtion
function validatePassword() {
   const username = document.getElementById('username').value;
   const password = document.getElementById('password').value;

   const validUsername = 'user123@gmail.com'; // Static username
   const validPassword = 'password123'; // Static password

   const messageElement = document.getElementById('message');
   alert("I am an alert box!");
   if (username === validUsername && password === validPassword) {
       messageElement.textContent = 'Login successful!';
       messageElement.style.color = 'green';
       console.log('successful')
       
       return false; // Prevent form submission for demo purposes
   } else {
       messageElement.textContent = 'Invalid username or password.';
       messageElement.style.color = 'red';
       return false; // Prevent form submission for demo purposes
   }
}
