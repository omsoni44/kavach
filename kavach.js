
function myFunction() {
document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
var dropdowns = document.getElementsByClassName("dropdown-content");
var i;
for (i = 0; i < dropdowns.length; i++) {
var openDropdown = dropdowns[i];
if (openDropdown.classList.contains('show')) {
 openDropdown.classList.remove('show');
}
}
}
}

function myFunction1() {
    document.getElementById("myDropdown2").classList.toggle("show2");
    }
    
    window.onclick = function(event) {
    if (!event.target.matches('.dropbtn2')) {
    var dropdowns = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show2')) {
     openDropdown.classList.remove('show2');
    }
    }
    }
    }
    
    function myFunction2() {
    document.getElementById("myDropdown3").classList.toggle("show3");
    }
    
    window.onclick = function(event) {
    if (!event.target.matches('.dropbtn3')) {
    var dropdowns = document.getElementsByClassName("dropdown-content3");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show3')) {
     openDropdown.classList.remove('show3');
    }
    }
    }
    }

function sub(){
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var email=document.getElementById('footer-field').value;
    if(emailPattern.test(email)){
        alert("Subscribed Succesfully!");
        fetch('https://kavachkonnectsservices-default-rtdb.firebaseio.com/Subscribe.json', {
        method : 'post',
        body : JSON.stringify(email),
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin':'*'
        }
    }).then((result) => {
        console.log(result);
        document.getElementById('footer-field').value = '';

    })
    .catch((error) => {
        console.log(error);
    })
    }
    else{
        alert("Re-Enter Email!");
    }

    
}




