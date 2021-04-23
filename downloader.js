function download(){
    var str = "Click Here to Start Downloading!";
    var link  = document.getElementById("link").value;
    if(link == ""){alert("Please Enter a Valid URL");}
    else{
    
      var result = str.link("https://break.tv/widget/full/?link=" + link);
      var code = "<iframe> </iframe>"
    document.getElementById("valid").innerHTML = result;
    }
  }