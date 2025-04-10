function check() {
    let Year = +document.getElementById("year").value;
    let result="";
    if(Year%4===0 && Year%100!=0){
        result +="Nam nhuan";
    }else if(Year%100===0 && Year%400!=0){
        result +="Khong phai nam nhuan";
    }else if(Year%100===0&& Year%400===0){
        result +="Nam nhuan";
    }else{
        result +="Khong phai nam nhuan";
    }
    document.getElementById("result").innerHTML = result;
}