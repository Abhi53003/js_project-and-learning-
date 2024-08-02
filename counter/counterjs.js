let val=0;
let num_reset=document.querySelector("#reset");

let add_val=document.querySelector("#add_value");

let sub_val=document.querySelector("#sub_value");

let num=document.querySelector("#num_value");



function add()
{
    val=val+1;
    num.innerHTML=val;
    
}

function sub()
{
    val=val-1;
    num.innerHTML=val;
    
}

function reset_1()
{
    val=0;
    num.innerHTML=val;
    
}
ShadowRoot

add_val.addEventListener("click",add);

sub_val.addEventListener("click",sub);

num_reset.addEventListener("click",reset_1);