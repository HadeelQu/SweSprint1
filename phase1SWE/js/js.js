 

 
    function validateSignUp() {
        var idd = document.getElementById('employee_ID');
        var fName = document.getElementById('employee_FirstName').value;
        var lName = document.getElementById('employee_LastName').value;
        var passSign = document.getElementById('passworddd');
        var letters = /^[0-9]+$/;
            if (idd.value == "") {
                alert("ID field must be filled ");
                employee_ID.focus();
                return false;
            }  
            else if (fName.value == "") {
                alert("First name field must be filled");
                employee_FirstName.focus();
                return false;
            }  
            else if (lName.value == "") {
                alert("Last name field must be filled ");
                employee_LastName.focus();
                return false;
            }  
             
            else if (passSign.value == "") {
                alert("Password field must be filled ");
                passworddd.focus();
                return false;
            }  

            else if ((passSign.value).length >10 || (passSign.value).length < 5) {
                alert("Password length must be 5-10 characters");
                passworddd.focus();
                return false;
            }  

            else if (isNaN(idd.value)){
                alert("You can not enter text in an ID field "); 
                employee_ID.focus();
                return false; }
                else if (!isNaN(fName)||!isNaN(lName)){
                    alert("you must only write characters in first name, Last name "); 
                }
                else
                  {
                    setTimeout(function() {window.location = "index2.html" });
                  }
            


                

        }
        function redirect()
        {
            window.location.href="index2.html";
        }
var m;
        function validateLogin() {
            var iddd = document.getElementById('employee_IDD');
            var passSignn = document.getElementById('passwordddd');
            
                if (iddd.value == "") {
                    alert("ID field must be filled ");
                    employee_IDD.focus();
                    return false;
                }  
                 
                else if (passSignn.value == "") {
                    alert("Password field must be filled ");
                    passwordddd.focus();
                    return false;
                }  
    
                else if ((passSignn.value).length >10 || (passSignn.value).length < 5) {
                    alert("Password length must be 10 characters or more");
                    passwordddd.focus();
                    return false;
                }  
    
                else if (isNaN(iddd.value)){
                    alert("You can not enter text in an ID field "); 
                    employee_IDD.focus();
                    return false; }

                   else
                   setTimeout(function() {window.location = "index2.html" });
               ;
                
            
            }

          
            


                
        