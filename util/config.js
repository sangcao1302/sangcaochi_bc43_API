function ValidationNhanVien() {
    // ---------valid email-----------------------
    document.getElementById("email").onblur = function () {
       if (document.getElementById("email").value == "") {
         document.getElementById("tbEmail").innerHTML = "Vui lòng không bỏ trống ";
       }
     };
     document.getElementById("email").onfocus = function () {
       document.getElementById("tbEmail").innerHTML = " ";
     };
   
     document.getElementById("email").onchange = function () {
       var regexMail =
         /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
       if (regexMail.test(document.getElementById("email").value)) {
         document.getElementById("tbEmail").innerHTML = " ";
         return true;
       }
       document.getElementById("tbEmail").innerHTML = "Email không đúng định dạng";
       return false;
     };
  
   // -------------------------------------------------
  
   // Valid tên nhân viên--------------------
   document.getElementById("name").onblur = function () {
     if (document.getElementById("name").value !== "") {
       document.getElementById("tbTen").innerHTML = " ";
     }
     if (document.getElementById("name").value == "") {
       document.getElementById("tbTen").innerHTML = "Vui lòng không để trống";
     }
   };
   document.getElementById("name").onfocus = function () {
     document.getElementById("tbTen").innerHTML = " ";
   };
   document.getElementById("name").onchange = function () {
     var regex =
       /^[a-z A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/;
     if (regex.test(document.getElementById("name").value)) {
       document.getElementById("tbTen").innerHTML = " ";
       return true;
     }
     document.getElementById("tbTen").innerHTML = "Tên nhân viên phải là chữ ";
     return false;
   };
  
  
   // ----------------------------------------------------------------------
  
   // --------Valid passsword--------------
   document.getElementById("password").onblur = function () {
     if (document.getElementById("password").value.trim() == "") {
       document.getElementById("tbMatKhau").innerHTML =
         "Vui lòng không để trống";
     }
     if (document.getElementById("password").value === "") {
       document.getElementById("tbMatKhau").innerHTML =
         "Vui lòng không để trống";
     }
   };
  
   document.getElementById("password").onfocus = function () {
     document.getElementById("tbMatKhau").innerHTML = " ";
   };
  
   document.getElementById("password").onchange = function () {
     var regexPass =
       /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/;
     if (regexPass.test(document.getElementById("password").value)) {
       document.getElementById("tbMatKhau").innerHTML = " ";
       return true;
     }
     document.getElementById("tbMatKhau").innerHTML =
       "Mật khẩu dài tối thiểu 6 kí tự chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt";
     return false;
   };
   // -----------------------------------------------------------------------------
   // valid xac nhan mat khau
   document.getElementById("passwordConfirm").onblur = function () {
       if (document.getElementById("passwordConfirm").value.trim() == "") {
         document.getElementById("tbMatKhauXacNhan").innerHTML =
           "Vui lòng không để trống";
       }
       if (document.getElementById("passwordConfirm").value === "") {
         document.getElementById("tbMatKhauXacNhan").innerHTML =
           "Vui lòng không để trống";
       }
     };
   
     document.getElementById("passwordConfirm").onfocus = function () {
       document.getElementById("tbMatKhauXacNhan").innerHTML = " ";
     };
     document.getElementById("passwordConfirm").onchange=function(){
       if(document.getElementById("password").value===document.getElementById("passwordConfirm").value){
           document.getElementById("tbMatKhauXacNhan").innerHTML =" ";
         }
         else{
           document.getElementById("tbMatKhauXacNhan").innerHTML ="Mật khẩu không trùng khớp";
         }
     }
   
   //    valid phone
   document.getElementById("phone").onblur = function () {
       if (document.getElementById("phone").value.trim() == "") {
         document.getElementById("tbPhone").innerHTML =
           "Vui lòng không để trống";
       }
       if (document.getElementById("phone").value === "") {
         document.getElementById("tbPhone").innerHTML =
           "Vui lòng không để trống";
       }
       if (document.getElementById("phone").value !== "") {
           document.getElementById("btnSubmit").disabled = false;
         }
       if (document.getElementById("phone").value.length >10) {
           document.getElementById("tbPhone").innerHTML =
             " Tối đa 10 số";
         }
     };
   
     document.getElementById("phone").onfocus = function () {
       document.getElementById("tbPhone").innerHTML = " ";
     };
   
     document.getElementById("phone").onchange = function () {
       var regexPass =
       /^[0-9][A-Za-z0-9 -]*$/;
       if (regexPass.test(document.getElementById("phone").value)) {
         document.getElementById("tbPhone").innerHTML = " ";
         return true;
       }
       document.getElementById("tbPhone").innerHTML =
         "Số điện thoại không đúng định dạng";
       return false;
     };
     if (
      
      
       document.getElementById("email").value == "" &&
       document.getElementById("password").value == "" &&
       document.getElementById("passwordConfirm").value == "" &&
       document.getElementById("name").value == "" &&
       document.getElementById("phone").value == "" 
      
     ) {
       document.getElementById("btnSubmit").disabled = true;
     }
  
  }
  
  ValidationNhanVien()