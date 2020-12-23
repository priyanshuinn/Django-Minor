function iconShowHide(){
    var x= document.getElementById("password");
    var y= document.getElementById("enable");
    var z= document.getElementById("disable");
    if(x.type=='password')
    {
        x.type="text";
        y.style.display="block";
        z.style.display="none";
    }
    else{
        
            x.type="password";
            y.style.display="none";
            z.style.display="block";
        
    }
}
/////////////////////////////////////////////////////////////
function validation(){
    var x=document.getElementById("password").value;
    var y=document.getElementById("confirm").value;
    var a=document.getElementById("fn").value;
    var c=document.getElementById("em").value;
    var s="";
    if((s.localeCompare(a)==0)||(s.localeCompare(c)==0)){
          
    }
    
    else if((s.localeCompare(x)==0)||(s.localeCompare(y)==0)){
        swal({
            title :"Password missing",
            text : "Password field cannot be left empty.",
            icon : "info"
        });
    }
    else if((x.localeCompare(y)!=0)){
        swal({
            title :"Password doesn't match!!",
            text : "Please, Sign up again.",
            icon : "error"
        });
    }
    
    else{
        swal({
            title :"Login successful...",
            text : "You have been successfully registered. Press 'OK' or you will be redirected to home page.",
            icon : "success"
        })
        .then((value) => {
            //swal(`The returned value is: ${value}`);
            if(value){
                setTimeout(function(){
                    window.location.reload(); 
                })
            }
          });
    }
}
///////////////////////////////////////////////////////////////////////
