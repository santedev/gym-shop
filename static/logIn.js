const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const userName = document.querySelector('input[name="name"]');
  const userPassword = document.querySelector('input[name="password"]');

  if (
    userName &&
    userPassword 
  ) {
    const userInfo = {
        name: userName.value,
        password: userPassword.value
    }
    (async() => {
        try {
            const response = await fetch('http', {
                method:'POST',
                headers: {
                    "Content-Type":"application/json", 
                },
                body: JSON.stringify(userInfo)
            })
            if (response.ok){
                const user = await response.json()
                console.log(user)
            };
        } catch (error) {
            console.log(error)
        }
    })()
  }
});
