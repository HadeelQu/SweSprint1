<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <script src ="js/jj.js"> </script>
    <title>add Coffee</title>
</head>

<body>

   <header>
       <nav>
           <a href="index.html"><img src="img/logoSWE.png" alt="logo" height="150px" width="150px"></a> 
           <div class="nav-links">
               <ul>
                <li><a href="index2.html">Home</a></li>
                   <li><a href="Admin log in.html">Admin log-In</a></li>
                   <li><a href="Admin sign up.html">Admin Sign-Up</a></li>
                   <li><a href="index.html">Admin Sign-Out</a></li>
                        <!-- Theme Change Button START------------->
                <img src="img/moon.png" id="moon" alt="moon dark theme">
               </ul>
           </div>
       </nav>
    </header>
  
    <form method="post" action="" class="addform" ><br>
        <fieldset>
            <legend>Add New Coffee information</legend>
		
        <ul>
                   <li><label>Coffee Shop Name</label></li> 
                    <input type="text" name="coffeename"><br>
       
                    <li><label>Coffee Photo</label></li><br>
                    <input type="file" name="coffeephoto" ><br><br>
             
                </ul>
                    <input type="submit" onclick="redirect();" value="Add" name="add" class="btnform"><br>
                </fieldset>
    </form>

    <?php
       if(isset($_POST['submit']))
       $score=0;

  echo "your score";


$q1= $_POST["coffeename"];

?>


    <script>
        var moon = document.getElementById("moon");
      
        moon.onclick = function() {
          document.body.classList.toggle("dark-theme");
          if(document.body.classList.contains("dark-theme")){
            moon.src = "img/sun.png";
          }
          else {
            moon.src = "img/moon.png";
          }
        }
         </script> 
</body>

<footer>
    <br>
    <p>© 2022 All Rights Reserved, Coffee Detective® </p>
    </footer>
</html>