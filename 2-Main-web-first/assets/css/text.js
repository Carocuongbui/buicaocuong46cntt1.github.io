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

 document.querySelector('.menu').addEventListener('click', function() {
    var style = document.querySelector('.left__main').style;
    style.display = (style.display === 'flex') ? 'none' : 'flex';
});

document.querySelector('.menu').addEventListener('click', function() {
    document.querySelector('.menu').style.display = 'none';
});

document.querySelector('.X').addEventListener('click', function() {
    document.querySelector('.left__main').style.display = 'none';
    // document.querySelector('.menu').style.display = 'inline-block';
});

window.addEventListener('resize', function() {
    if (window.matchMedia('(min-width: 1025px)').matches) {
      document.querySelector('.left__main').style.cssText = 'display: block !important';
    } 
    else {
        document.querySelector('.left__main').style.display = 'none';
    }
  });

  function callback(mutationsList, observer) {
    for(let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
            let displayStyle = window.getComputedStyle(mutation.target).display;
            if (displayStyle === 'none') {
                document.querySelector('.menu').style.display = 'inline-block';
            }
        }
    }
} 

let targetNode = document.querySelector('.left__main');
let observerOptions = { attributes: true };
let observer = new MutationObserver(callback);
observer.observe(targetNode, observerOptions);