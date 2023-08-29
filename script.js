const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("Submit", (e) => {
  let messages = [];
  if (name.value === "" || name.value === null) {
    messages.push("Name is required");
  }
  if (phone.value.length <= 10) {
    messages.push('Phone number must be 10 numbers long')
  }
   if (phone.value.length > 10) {
     messages.push("Phone number must be lessthan 10 numbers long");
   }
  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(`, `);
  }
});
