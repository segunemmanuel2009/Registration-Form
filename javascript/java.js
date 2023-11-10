// PASSWORD SHOW/HIDE
const passwordInput = document.querySelector("#password")
const eye = document.querySelector("#eye")

eye.addEventListener("click", function(){
  this.classList.toggle("fa-eye-slash")
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
  passwordInput.setAttribute("type", type)
})

// GOOGLE SHEET SUBMIT CODE
const scriptURL = 'https://script.google.com/macros/s/AKfycbz3WmV1dbYDaeH61JxohtxUxsT7GyyFLthbueqpdLM_grjaECkvSO5kMhqi4A8hFptevg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

    form.addEventListener('submit', e => {
    e.preventDefault()
    alert('Form has been successfully submitted!');
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        setTimeout(function() {

        }, 5000)
        form.reset()

    } )
    .catch(error => console.error('Error!', error.message))
})

//OTHERS OPTION
function CheckOption(val) {
var element = document.getElementById("others");
  if (val == "select an option" || val == "others")
  element.style.display = "block";
  else element.style.display = "none";
}

