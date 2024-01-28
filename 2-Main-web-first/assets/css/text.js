// loading
window.onload = function(){
    setTimeout(function(){ 
        document.querySelector('.loading').style.opacity = "0"; 
        // document.querySelector('.loading').style.display = "none"; 
    }, 500); 
    setTimeout(function(){ 
        // document.querySelector('.loading').style.opacity = "0"; 
        document.querySelector('.loading').style.display = "none"; 
    }, 1000); 
}

document.addEventListener("DOMContentLoaded", function(){
    var x = document.getElementsByClassName("dont-have-account");
    for(var i = 0; i < x.length; i++){
       x[i].addEventListener("click", function(){
          alert("Bạn chưa có tài khoản, vui lòng tạo tài khoản hoặc đăng nhập !");
       });
    }
 });