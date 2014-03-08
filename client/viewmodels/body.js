Template.body.rendered = function(){
	var 
	  consumerKey = "wHqB2lt3HOC8xHckkZcw2g",
		consumerSecret = "pCAnKQAxdvnsxH30zFeNpzTl2Amz4T2eDsW8NGZqFI"
		bearerTokenCredentialsEncoded = "d0hxQjJsdDNIT0M4eEhja2taY3cyZzpwQ0FuS1FBeGR2bnN4SDMwekZlTnB6VGwyQW16NFQyZURzVzhOR1pxRkk=";
	;
	console.log("body rendered"); 

	
	Meteor.call( "getBearerToken", bearerTokenCredentialsEncoded,function(error,results){
			if(error){
				console.log( error );
			}else{
				Session.set("bearertoken", results);	
				console.log("token generated");	
			}
	});

};