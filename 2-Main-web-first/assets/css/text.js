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

 
// Create an observer instance linked to the callback function
let observer = new MutationObserver((mutations) => {
  for(let mutation of mutations) {
      let displayValue = window.getComputedStyle(mutation.target).display;
      if (displayValue === 'none') {
        document.querySelector('.menu').style.display = 'inline-block';
      } 
      else if (displayValue === 'block') {
        document.querySelector('.menu').style.display = 'none';
      }
  }
});

// Start observing the target node for configured mutations
let targetNode = document.querySelector('.left__main');
observer.observe(targetNode, { attributes: true, attributeFilter: ['style'] });