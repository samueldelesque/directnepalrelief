(function(){
	FB.api(
	    "/1567614756859788/feed",
	    function (response) {
	      if (response && !response.error) {
	        /* handle the result */
	        console.log(response);
	      }
	      else{
	      	console.error(response.error);
	      }
	    }
	);
})()