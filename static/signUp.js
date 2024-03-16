const form = document.querySelector("form");
const inputWarningMessage = document.getElementById("user-input-message-text");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const userName = document.querySelector('input[name="name"]');
  const userEmail = document.querySelector('input[name="email"]');
  const userPassword = document.querySelector('input[name="password"]');
  const userPasswordConfirm = document.querySelector('input[name="check"]');

  function addInputWarningMessage(text) {
    inputWarningMessage.classList.add("last-message");
    inputWarningMessage.classList.add("alert");
    inputWarningMessage.classList.remove("success");
    inputWarningMessage.innerText = text;
  }

  function checkUserName(name) {
    const checkedName = /^\w{2,16}$/i.test(name);
    if (!checkedName) {
      if (name.length < 2 || name.length > 16) {
        addInputWarningMessage("Name is not between 2 to 16 characters");
      } else {
        addInputWarningMessage(
          'Name either uses empty spaces or special characters that aren\'t underscore "_"'
        );
      }
    }
    return checkedName;
  }
  function checkUserEmail(email) {
    const [localPart, domainPart] = email.split("@");
    const localPartRegex = /^[a-zA-Z0-9]+(?:[._][a-zA-Z0-9]+)*$/;
    const domainRegex = /^(gmail|outlook|hotmail|email)\.com$/i;
    if (
      /^[._]$/.test(localPart[0]) ||
      /^[._]$/.test(localPart[localPart.length - 1])
    ) {
      addInputWarningMessage(
        "First part of the email can't start or end with dot or underscore"
      );
    } else if (localPart.length < 6 || localPart.length > 30) {
      addInputWarningMessage(
        "First part of the email is not between 6 to 30 characters"
      );
    } else if (!domainRegex.test(domainPart)) {
      addInputWarningMessage(
        'Email must have either gmail, outlook, hotmail, email and end with ".com"'
      );
    } else if (!localPartRegex.test(localPart)) {
      addInputWarningMessage(
        "Email cant contain special characters that aren't non-consecutive dots or underscores"
      );
    }
    return (
      localPartRegex.test(localPart) &&
      localPart.length >= 6 &&
      localPart.length <= 30 &&
      domainRegex.test(domainPart)
    );
  }
  function checkUserPassword(password, confirmedPassword) {
    const checkedPassword =
      password.length >= 8 && password.length <= 20 && /^\S+$/.test(password);
    if (!checkedPassword) {
      addInputWarningMessage(
        "Password must be between 8 and 20 characters and must not contain empty spaces"
      );
    } else if (password !== confirmedPassword) {
      addInputWarningMessage(
        "Password and confirmed password are not the same one"
      );
    }
    return checkedPassword && password === confirmedPassword;
  }
  if (
    checkUserName(userName.value) &&
    checkUserEmail(userEmail.value) &&
    checkUserPassword(userPassword.value, userPasswordConfirm.value)
  ) {
    inputWarningMessage.classList.add("last-message");
    inputWarningMessage.classList.remove("alert");
    inputWarningMessage.innerText = "Correct format for new user";
    inputWarningMessage.classList.add("success");

    const userInfo = {
      name: userName.value,
      email: userEmail.value,
      password: userPassword.value,
    };

    (async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        });
        if (response.ok) console.log("user created");
      } catch (error) {
        console.log(error);
      }
    })();
  }
});
