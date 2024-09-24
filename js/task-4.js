document
  .querySelector(".login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini engeller

    const email = event.target.elements.email.value.trim();
    const password = event.target.elements.password.value.trim();

    if (email === "" || password === "") {
      alert("All form fields must be filled in");
      return;
    }

    const formData = {
      email: email,
      password: password,
    };

    console.log(formData); // Form verilerini konsola yazdırır
    event.target.reset(); // Form alanlarını temizler
  });
