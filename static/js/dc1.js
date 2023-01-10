onload=function(){
    var obj = document.getElementById("img")
    //obj.style.display ="block";
    
    
    function show() {
      var obj = document.getElementById("img");
      obj.style.display ="block";
      setTimeout(noshow,6000);
      }
      function noshow() {
         
         var obj = document.getElementById("img");
         obj.style.display ="none";
         }
      setInterval(show,3000);
     }
     
     
 document.writeln("    <div class=\'cz\'  >");
document.writeln("");
document.writeln("<a onclick=gotoline()>");
document.writeln("<img src =\'static/picture/ymh.png\' id=\'img\' style = \'display:none \'  width=\'80%\'>");
document.writeln("</a>");
document.writeln("");
document.writeln("</div>");
document.writeln("");



//setTimeout("javascript:location.href='https://www.51f.me/url/axin'",70000);