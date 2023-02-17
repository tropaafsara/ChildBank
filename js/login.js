document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField = document.getElementById('user-email'); // get email
    const email = emailField.value; //get text from input field
    console.log(email);
    const passwordField = document.getElementById('user-password'); // get email
    const password = passwordField.value; //get text from input field
    console.log(password);
    if(email == 'abc@gmail.com' && password == 'pew'){
        window.location.href='bank.html';
    }else{
        alert('invalid user')
    }
})