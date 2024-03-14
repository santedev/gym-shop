const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const userName = document.querySelector('input[name="name"]');
  const userEmail = document.querySelector('input[name="email"]');
  const userPassword = document.querySelector('input[name="password"]');
  const userPasswordConfirm = document.querySelector('input[name="check"]');

  function checkUserName(name) {
    return /^\w{2,16}$/i.test(name);
  }
  function checkUserEmail(email) {
    const [localPart, domainPart] = email.split("@");
    const localPartRegex = /^[a-zA-Z0-9]+(?:[._][a-zA-Z0-9]+)*$/;
    const domainRegex = /^(gmail|outlook|hotmail|email)\.com$/i;
    return (
      localPartRegex.test(localPart) &&
      localPart.length >= 6 &&
      localPart.length <= 30 &&
      domainRegex.test(domainPart)
    );
  }
  function checkUserPassword(password) {
    return password.length >= 8 && /^\S+$/.test(password);
  }
  if (
    checkUserName(userName.value) &&
    checkUserEmail(userEmail.value) &&
    checkUserPassword(userPassword.value) &&
    userPassword.value === userPasswordConfirm.value
  ) {
    const userInfo = {
      name: userName.value,
      email: userEmail.value,
      password: userPassword.value,
    };
    (async () => {
      try {
        const response = await fetch("http://localhost:3000/users", {
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
