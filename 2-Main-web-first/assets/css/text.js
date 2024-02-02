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

let targetNode = document.querySelector('.left__main');
observer.observe(targetNode, { attributes: true, attributeFilter: ['style'] });

document.addEventListener('DOMContentLoaded', function() {
  var faq = document.querySelector('.faq');
  var rightMain = document.querySelector('.right__main');
  var faqRightMain = document.querySelector('.faq-right-main');

  faq.addEventListener('click', function() {
    rightMain.style.display = 'none';
    faqRightMain.style.display = 'block';
  });
});

document.getElementById('main-page').addEventListener('click', function() {
  document.querySelector('.right__main').style.display = 'block';
  document.querySelector('.faq-right-main').style.display = 'none';
});


// document.querySelector('.right__main').addEventListener('click', function() {
//   this.style.display = 'none';
//   document.querySelector('.faq-right-main').style.display = 'block';
// });

// document.querySelector('.faq-right-main').addEventListener('click', function() {
//   this.style.display = 'none';
//   document.querySelector('.right__main').style.display = 'block';
// });

function handleWindowResize() {
  if (window.innerWidth <= 1024) {
    const mainPage = document.getElementById('main-page');
    const faq = document.querySelector('.faq');
    const leftMain = document.querySelector('.left__main');

    mainPage.addEventListener('click', function() {
      leftMain.style.display = 'none';
    });

    faq.addEventListener('click', function() {
      leftMain.style.display = 'none';
    });
  } 
}

window.addEventListener('resize', handleWindowResize);
window.addEventListener('load', handleWindowResize);

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (isSafari) {
  alert('Phiên bản trình duyệt của bạn không tương thích, xin vui lòng sử dụng Chrome, Bing hoặc trình duyệt khác');
  document.querySelector('.no-support-device').style.display = 'flex';
  // document.querySelector('body').style.display = 'none';
}
