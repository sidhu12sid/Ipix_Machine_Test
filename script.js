var timeOut;

function validateInputs(event) {
    event.preventDefault();
    let fname = document.forms["registration"]["first"].value;
    let sname = document.forms["registration"]["second"].value;
    let username = document.forms["registration"]["username"].value;
    let email = document.forms["registration"]["email"].value;
    let pass =  document.forms["registration"]["password"].value;
    let phone = document.forms["registration"]["phone"].value;
    let bio = document.forms["registration"]["bio"].value;

    //name
    if(fname == "" || sname ==""){
        alert("Enter the name correctly !!!!");
        return false
    }
    //username validationN
    if(username ==""){
        alert("User name cannot be empty");
        return false;
    }
    //Email validation
    if(email == ""){
        alert("Email cannot be empty")
        return false;
    }   
    //password validation
    if(pass == ""){
        alert("Enter a valid password")
        return false;
    }
    if(pass.length < 6){
        alert("Password must have length of 8 charcters")
        return false;
    }
    // appendDetails()
    var element = document.getElementById("myForm");
    element.reset()    
}

function appendDetails(){
    document.getElementById("overlay").style.display = "block";
    var details = document.querySelector(".details");
    //Name
    var fname = document.getElementById("first").value;
    var sname = document.getElementById("second").value;
    var name = document.createElement("li");
    name.innerHTML = "Name: "+ fname +" "+ sname;
    details.append(name);
    
   //Username
    var username = document.getElementById("usename").value;
    var u = document.createElement("li");
    u.innerHTML = "Username: "+username;
    details.append(u);
    
    //Email
    var email = document.getElementById("email").value;
    var mail =document.createElement("li");
    mail.innerHTML = "Email: " + email;
    details.append(mail);

    //phone
    var phone =document.getElementById("phone").value;
    console.log(phone);
    var ph= document.createElement("li");
    ph.innerHTML = "Phone Number: "+ phone;
    details.append(ph);

    // bio
    var bio= document.getElementById("bio").value;
    console.log(bio);
    var b = document.createElement("li");
    b.innerHTML = "Short Bio: "+ bio;
    details.append(b);

}
document.querySelector('.overlay').addEventListener("click",()=> document.getElementById('overlay').style.display='none');





