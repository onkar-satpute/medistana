const firebaseConfig = {
    apiKey: "AIzaSyDiDFJD_JPmMWn92NnnbuxTUx68jrXCCCo",
    authDomain: "registerform-medistana.firebaseapp.com",
    databaseURL: "https://registerform-medistana-default-rtdb.firebaseio.com",
    projectId: "registerform-medistana",
    storageBucket: "registerform-medistana.firebasestorage.app",
    messagingSenderId: "42753939758",
    appId: "1:42753939758:web:77bd423883cae78f58c2bf"
  };

  firebase.initializeApp(firebaseConfig);

  var RegisterFormDB = firebase.database().ref("RegisterForm");
  document.getElementById("registerForm").addEventListener("submit", validateRegisterForm);

function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');

    tabs.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(button => button.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
}

function validateRegisterForm() {
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const errorMsg = document.getElementById('reg-error-msg');

    if (email.length < 3) {
        errorMsg.innerHTML = 'Email must be at least 3 characters long.';
        return false;
    }

    if (password.length < 6) {
        errorMsg.innerHTML = 'Password must be at least 6 characters long.';
        return false;
    }

    errorMsg.innerHTML = '';
    alert('Registration successful!');
    return false;
}

function validateLoginForm() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const errorMsg = document.getElementById('login-error-msg');

    if (email.length < 3) {
        errorMsg.innerHTML = 'Email must be at least 3 characters long.';
        return false;
    }

    if (password.length < 6) {
        errorMsg.innerHTML = 'Password must be at least 6 characters long.';
        return false;
    }

    errorMsg.innerHTML = '';
    alert('Login successful!');
    return false;
}
