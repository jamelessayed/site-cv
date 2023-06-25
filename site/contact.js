function testname(name){
    let S= /^(?!.* .* )[a-zA-Z ]{2,25}$/;

    if(!name.text.value.match(S))
    {
        name.text.style.backgroundColor = 'red';
        document.getElementById("controname").innerHTML = "The name format is deprecated (only letters are allowed)";
    }
    else
        input.text.style.backgroundColor = 'green';
}

function testlastname(lst){
    let S= /^(?!.* .* )[a-zA-Z ]{2,25}$/;

    if(!lst.text.value.match(S))
    {
        lst.text.style.backgroundColor = 'red';
        document.getElementById("controlelastname").innerHTML = "The last name format is deprecated (only letters are allowed)";
    }
    else
        lst.text.style.backgroundColor = 'green';
}

function testmail(ml){
    let s= /^(?!.* .* )[a-zA-Z @]{2,25}$/;

    if(!ml.text.value.match(s))
    {
        ml.text.style.backgroundColor = 'red';
        document.getElementById("controlemail").innerHTML = "mail must contain @ and .";
    }
    else
        ml.text.style.backgroundColor = 'green';
}

function testphone(phone){
    let s= /^(?!.* .* )[0-9]$/;

    if(!phone.text.value.match(s))
    {
       phone.text.style.backgroundColor = 'red';
        document.getElementById("controlephone").innerHTML = "must have 8 numbers !";
    }
    else
        phone.text.style.backgroundColor = 'green';
}
form.addEventListener('submit', (event) = {
    eventpreventDefault();
    testname(name);
    testlastname(lst);
    testmail(ml);
    testphone(phone);
  });
