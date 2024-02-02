document.addEventListener('DOMContentLoaded', function() {
    var btn = document.querySelector('.btn-resgister-more');
    btn.addEventListener('click', function() {
      var boxRegister = document.querySelector('.box-register');
      var boxLogin = document.querySelector('.box-login');
      boxRegister.style.display = 'block';
      boxLogin.style.display = 'none';
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var btnLogin = document.querySelector('.btn-login-more');
    btnLogin.addEventListener('click', function() {
      var boxRegister = document.querySelector('.box-register');
      var boxLogin = document.querySelector('.box-login');
      boxLogin.style.display = 'block';
      boxRegister.style.display = 'none';
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var btnLogin = document.querySelector('.btn-login');
    btnLogin.addEventListener('click', function() {
      alert('Tài khoản không hợp lệ hoặc tài khoản không tồn tại, vi lòng tạo tài khoản hoặc xem lại thông tin đăng nhập.');
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var btnRegister = document.querySelector('.btn-resgister');
    btnRegister.addEventListener('click', function() {
      alert('Thông tin đã được gửi tới máy chủ, chúng tôi sẽ xác minh tài khoản và mail cho bạn trong 1-2 ngày tới, trong khoảng thời gian đó bạn có thể dùng thử trang web mà không cần tài khoản.');
    });
  });

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

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (isSafari) {
  alert('Phiên bản trình duyệt của bạn không tương thích, xin vui lòng sử dụng Chrome, Bing hoặc trình duyệt khác');
  document.querySelector('.no-support-device').style.display = 'flex';
  // document.querySelector('body').style.display = 'none';
}