var PhoneNumber = function(phone) {
  this.phone = phone;
}

PhoneNumber.prototype.number = function() {
  var self = this;

  // Return early if number contains unacceptable characters
  var notallowed = /[a-zA-Z!\?@\"\']/g;
  if (self.phone.match(notallowed)) {
    console.log("Returning null, phone number cannot contain letters or unacceptable characters.");
    return null;
  }

  // Remove acceptable characters before validating number
  var allowed  = /[\+\.-\s\(\)]/g;
  var candidate = self.phone.replace(allowed, '');

  // Validate number against pre-defined ruleset
  candidate = self.validate(candidate);

  return candidate;
}

PhoneNumber.prototype.validate = function(phone) {
  // Remove the leading country code if it's there
  var phone = phone.charAt(0) == 1 ? phone.substring(1, phone.length) : phone;

  // Verify that the phone number is 10 digits long
  if (phone.length != 10) {
    console.log("Formatted phone number is " + phone.length + " digits long.");
    return null;
  }

  // Verify that the phone number has a good area code
  if (!phone.charAt(0).match(/[2-9]/)) {
    console.log("Area code is invalid. Area codes must begin with a digit between 2 and 9");
    return null;
  }

  // Verify that the phone number has a good exchange code
  if (!phone.charAt(3).match(/[2-9]/)) {
    console.log("Exchange code is invalid. Exchange codes must begin with a digit between 2 and 9.");
    return null;
  }

  return phone;
}

module.exports = PhoneNumber;
