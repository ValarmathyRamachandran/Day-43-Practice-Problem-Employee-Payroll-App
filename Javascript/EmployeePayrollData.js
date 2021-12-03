function validate() {
    var nameregex = /^[A-Z][a-z]{3,100}$/;
    var ctrl =  document.getElementById('name').value;
    if((ctrl.match(nameregex)) == null)
    {
        window.alert('Invalid Entry!!!! Please enter the name as First Letter in Capital and atleast 3 characters ');
    }
    return false;
}


