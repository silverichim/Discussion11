

  document.getElementById('emailDiv').style.display = 'none';

  // then we add an event listener to the checkbox
  document.getElementById('subscribe').addEventListener('change', function() {
      var emailField = document.getElementById('emailDiv'); 
  
      // if the checkbox is checked, we display the email field, 
      // if it is unchecked, we hide it
      emailField.style.display = this.checked ? 'block' : 'none';
  });



























  document.getElementById('sameAddress').addEventListener('change', function() {
    var billingAddress = document.getElementById('bill').value;
    var homeAddress = document.getElementById('home');

    if (this.checked) {
        homeAddress.value = billingAddress;
        homeAddress.readOnly = true;
    } else {
        homeAddress.value = "";
        homeAddress.readOnly = false;
    }
});




  
// for challenge 2
document.getElementById('sameAddress').addEventListener('change', function() {
  var billingAddress = document.getElementById('bill').value;
  var homeAddress = document.getElementById('home');

  if (this.checked) {
      homeAddress.value = billingAddress;
      homeAddress.readOnly = true;
  } else {
      homeAddress.value = "";
      homeAddress.readOnly = false;
  }
});

// First find all relevant elements
var sameAddressCheckbox = document.getElementById('sameAddress');
var billAddressField = document.getElementById('bill');
var homeAddressField = document.getElementById('home');

// when checkbox changes, update state, and copy over address if needed
sameAddressCheckbox.addEventListener('change', function() {
    if (this.checked) {
        homeAddressField.value = billAddressField.value; // copy over the address
        homeAddressField.readOnly = true; // make it read only
    } else {
        homeAddressField.value = ""; // reset the address
        homeAddressField.readOnly = false; // make it editable
    }
});

// if checkbox is checked and billing address changes, copy it to home address 
billAddressField.addEventListener('input', function() {
    if (sameAddressCheckbox.checked) {
        homeAddressField.value = billAddressField.value;
    }
});











  // challenge3

function challenge3() {
    var standing = document.forms["ch3form"]["standing"];
    var gradDate = document.forms["ch3form"]["gradDate"];
    var standingChecked = false;
    var gradDateChecked = false;
    
    for(var i = 0; i < standing.length; i++) {
      if(standing[i].checked) {
        standingChecked = true;
        break;
      }
    }
    
    for(var i = 0; i < gradDate.length; i++) {
      if(gradDate[i].checked) {
        gradDateChecked = true;
        break;
      }
    }
    
    if(!standingChecked || !gradDateChecked) {
      alert("Please select an option for both class standing and graduation date.");
      return false; 
    }
    
    return true; 
  }
  