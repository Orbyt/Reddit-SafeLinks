function colorShit() { // Execute your code
        	alert("Activating..");
    //     	var posts = document.getElementsByClassName("thing");
    //         for(var i = 0, length = posts.length; i < length; i++) {
    //        		posts[i].style.background = 'blue';          
            
    // }

           console.log("Script Executed .. "); // Notification on Completion


}

colorShit();

setTimeout(function(){ 

           	$( ".domain a" ).each( function () {

           		if ($(this).is(':contains("imgur")')) {
           		this.style.color = "#85BF25";
           		this.style.fontWeight = "bold";
           		this.style.fontSize = "large";
           		this.text = "Imgur";
           	} else if ($(this).is(':contains("tumblr")')) {
           		this.style.color = "#36465D";
           		this.style.fontWeight = "bold";
           		this.style.fontSize = "large";
           		this.text = "Tumblr";
           	} else if ($(this).is(':contains("gfycat")')) {
           		this.style.color = "#F72D79";
           		this.style.fontWeight = "bold";
           		this.style.fontSize = "large";
           		this.text = "Gfycat";
           	} else {
           		this.style.color = "red";
           		this.style.fontWeight = "bold";
           		this.text = this.text + " - Careful";

           	}

           	});

            }, 500);