// Post==================================================
document.getElementById("btnSubmit").onclick = function () {
  var user = new DangKy();
  user.email = document.getElementById("email").value;
  user.name = document.getElementById("name").value;
  user.password = document.getElementById("password").value;
  user.gender = new Boolean();
  user.phone = document.getElementById("phone").value;
 
    if (document.getElementById("rb01").checked == true) {
      user.gender = true;
    }
  

  if (document.getElementById("rb02").checked == true) {
    user.gender = false;
  }
  
  
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    method: "POST",
    data: user,
  });
  promise.then(function (res) {
    console.log(res.data);
  });
};
