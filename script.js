let togglebtn= document.getElementsByClassName("toggle")[0];
let navlinks=document.getElementsByClassName("nav-links")[0];
let image=document.getElementsByClassName("images");
let index=1;
togglebtn.addEventListener("click",()=>{
    if(navlinks.style.display=="flex")
    navlinks.style.display="none";
else{
    navlinks.style.display="flex";
}
});

document.getElementsByClassName('manbtn1')[0].style.background="black";
setInterval(changecolor,4000);
let i=2;
function changecolor(){
      let doc=`manbtn${i}`;
      let doc2=`manbtn${i-1}`;
          document.getElementsByClassName(doc)[0].style.background="black";
          if(i!=1){
              document.getElementsByClassName(doc2)[0].style.background="white";
          }
          if(i==1){
            document.getElementsByClassName('manbtn7')[0].style.background="white";
          }

            if(i>=7){
              i=1;
             }
          else i++;
}