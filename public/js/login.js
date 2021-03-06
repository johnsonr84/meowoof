$(document).ready(() => {
  // Getting references to our form and inputs
  const loginForm = $("form.login");
  const emailInput = $("input#userEmail");
  const passwordInput = $("input#userPassword");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      userEmail: emailInput.val().trim(),
      userPassword: passwordInput.val().trim()
    };

    if (!userData.userEmail || !userData.userPassword) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.userEmail, userData.userPassword);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(userEmail, userPassword) {
    $.post("/api/login", {
      userEmail: userEmail,
      userPassword: userPassword
    })
      .then(() => {
        window.location.replace("/dashboard");
        // If there's an error, log the error
      })
      .catch(err => {
        console.log(err);
      });
  }
});
