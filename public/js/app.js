(function(){
	FB.api(
	    "/{page-id}/feed",
	    function (response) {
	      if (response && !response.error) {
	        /* handle the result */
	      }
	    }
	);
})()