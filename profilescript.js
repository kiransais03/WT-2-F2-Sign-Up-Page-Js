if(localStorage.getItem('accesstoken'))
{

  let detailsarr=JSON.parse(localStorage.getItem('userdata'));
  let profile=document.getElementById('fullname'); 
  let email=document.getElementById('email');
  let password=document.getElementById('password');

  profile.innerText=`Full Name : ${detailsarr[0]}`;
  email.innerText= `Email : ${detailsarr[1]}`;
  password.innerText=`Password : ${detailsarr[2]}`;
}
else {
    let a=document.createElement('a');
    a.href="./index.html"
    a.click();
}


let logoutbtn=document.getElementById('logoutbtn');
logoutbtn.addEventListener('click',()=>{
    localStorage.removeItem('accesstoken');
    let a=document.createElement('a');
    a.href="./index.html"
    a.click();
})
