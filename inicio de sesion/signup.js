const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = signupForm['email'].value;
  const password = signupForm['password'].value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Usuario registrado exitosamente
      console.log('Usuario registrado exitosamente:', userCredential.user);
      // Redireccionar al usuario a la página de inicio, por ejemplo
      window.location.href = 'index.html';
    })
    .catch((error) => {
      // Manejar errores de registro de usuario
      console.error('Error al registrar usuario:', error.message);
    });
});
