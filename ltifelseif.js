let id = prompt("Hay nhap iD : ");
if(id==="Admin"){
    let password = prompt("Hay nhap Password: : ");
    if(password==="TheMaster"){
        alert('Welcome');
    }else if(password=== null){
        alert('Canceled');
    }else{
        alert('Wrong password');
    }
}else if(id===null){
    alert('Canceled');
}else{
    alert('I don’t know you');
}