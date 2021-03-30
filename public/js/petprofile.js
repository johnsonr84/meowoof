$(document).ready(() => {
    // Getting references to our form and input
    const petForm = $("form.petProfile");
    const animalType = $("input#animal");
    const petNameInput = $("input#petName");
  
    // When the signup button is clicked, we validate the email and password are not blank
    petForm.on("submit", event => {
      event.preventDefault();
      const petData = {
        animal: animalType.val().trim(),
        petName: petNameInput.val().trim()
      };
  
      if (!petData.animal || !petData.petName) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUpPet(petData.animal, petData.petName);
      animalType.val("");
      petNameInput.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpPet(animal, petName) {
      $.post("/api/petProfile", {
        animal: animal,
        petName: petName,
      })
        .then(() => {
          window.location.replace("/dashboard");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });