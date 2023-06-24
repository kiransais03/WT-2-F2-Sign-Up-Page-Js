
document.getElementById('submitbtn').addEventListener('click',submitfn);

function submitfn(event) {
    event.preventDefault();
    let name=document.getElementsByName('name')[0].value;
    let email=document.getElementsByName('email')[0].value;
    let password=document.getElementsByName('password')[0].value;
    let confirmpass=document.getElementsByName('confirmpass')[0].value;
    //Validation of data
      let commentsdiv= document.getElementsByClassName('comments')[0];
    if(name && email && password && confirmpass && password==confirmpass)
    {
        if(document.getElementsByClassName('red'[0]))
        {
            document.getElementsByClassName('red')[0].remove();
        }
        let div=document.createElement('div');
        div.innerText='Successfully Signed Up!';
        div.classList.add('green');
        div.style.marginBottom='10px';
        let dataarr=[name,email,password];
        let stringarr=JSON.stringify(dataarr);
        localStorage.setItem('userdata',`${stringarr}`);
       
        let str="abcjgef";
        let randomnum=(Math.random()*126+33);
        let token=str+String.fromCharCode(randomnum);
        localStorage.setItem('accesstoken',token);
        setTimeout(redirectfunc,2000);
        if(!document.getElementsByClassName('green')[0])
        {
          commentsdiv.append(div);
        }
    }
    else {
        let div2=document.createElement('div');
        div2.innerText='Error: All the fields are mandatory';
        div2.classList.add('red');
        div2.style.marginBottom='10px';
        if(!document.getElementsByClassName('red')[0])
        {
          commentsdiv.append(div2);
        }
    }
}

function redirectfunc(event) {
    let a=document.createElement('a');
    a.href="./profile.html"
    a.click();
}

if(localStorage.getItem('accesstoken')) {
    redirectfunc();
}