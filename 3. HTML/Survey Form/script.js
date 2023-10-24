function getCheckedValues(checkboxes) {
  var checkedValues = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkedValues.push(checkboxes[i].value);
    }
  }
  return checkedValues.join(", ");
}

function submitForm() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var dob = document.getElementById("dob").value;
  var country = document.getElementById("country").value;
  var genderCheckboxes = document.getElementsByName("gender");
  var gender = getCheckedValues(genderCheckboxes);
  var profession = document.getElementById("profession").value;
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;

  if (
    firstName &&
    lastName &&
    dob &&
    country &&
    gender &&
    profession &&
    email &&
    mobile
  ) {
    var responseDiv = document.getElementById("response");
    responseDiv.innerHTML =
      "<label>First Name:</label> " +
      firstName +
      "<br>" +
      "<label>Last Name:</label> " +
      lastName +
      "<br>" +
      "<label>Date of Birth:</label> " +
      dob +
      "<br>" +
      "<label>Country:</label> " +
      country +
      "<br>" +
      "<label>Gender:</label> " +
      gender +
      "<br>" +
      "<label>Profession:</label> " +
      profession +
      "<br>" +
      "<label>Email:</label> " +
      email +
      "<br>" +
      "<label>Mobile Number:</label> " +
      mobile +
      "<br>";

    var popup = document.getElementById("popup");
    popup.style.display = "block";
  } else {
    alert("Please fill in all the required fields.");
  }
}

function resetForm() {
  document.getElementById("surveyForm").reset();
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
  resetForm();
}
