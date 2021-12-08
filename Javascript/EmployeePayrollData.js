function validate() {
    var nameregex = ('^[A-Z]{1}[a-zA-Z\\s]{3,}$');
    var ctrl =  document.getElementById('name').value;
    var profilepic = document.getElementById('profileimages').value;
    if((ctrl.match(nameregex)) == null)
    {
        window.alert('Invalid Entry!!!! Please enter the name as First Letter in Capital and atleast 3 characters ');
    }
    else if (profilepic == null){
        window.alert('Please select appropriate Profile Picture');

    }
    return false;
}
window.addEventListener('DOMContentLoaded' , (Event) => {
    const Name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    Name.addEventListener('input', function(){
        if(Name.value.length == 0){
            textError.textContent=" Please enter the name in correct format";
            return;
        }
        try{
            (new EmployeePayrollData()).Name = Name.value;
            textError.textContent = " ";
        }catch  (e){
            textError.textContent = e;
        }
    });
    
    
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function() {
        output.textContent = salary.value;

    });
});

