let mbno=document.getElementsByClassName("mbnocheck")[0].value;
let otp=document.getElementsByClassName("otp")[0];
let validch=document.getElementsByClassName("validity")[0];
let regex = new RegExp("^(\\+91[\-\s]?)?[0]?(91)?[789]\d{9}$");

function check(){
    if(regex.test(mbno)){
        validch.innerText="";
        let ranotp=Math.random()+Math.random()+Math.random()+Math.random();
        alert(ranotp);
    }
    else{
        // validch.Style.bacground="#fff";
        validch.innerText="*Please Enter valid Mobile Number";
    }
}
otp.addEventListener("click",check);
