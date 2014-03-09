Template.body.rendered = function(){
	var 
	  consumerKey = "wHqB2lt3HOC8xHckkZcw2g",
		consumerSecret = "pCAnKQAxdvnsxH30zFeNpzTl2Amz4T2eDsW8NGZqFI"
		bearerTokenCredentialsEncoded = "d0hxQjJsdDNIT0M4eEhja2taY3cyZzpwQ0FuS1FBeGR2bnN4SDMwekZlTnB6VGwyQW16NFQyZURzVzhOR1pxRkk=";
	;
	// console.log("body rendered"); 
	if( !Session.get("bearertoken") ){
		showmodal();
		Meteor.call( "getBearerToken", bearerTokenCredentialsEncoded,function(error,results){
			if(error){
				console.log( error );
			}else{
				Session.set("bearertoken", results);	
				hidemodal();
			}
		});
	}	
	
	

};

function showmodal(){
	$("#esmodal").modal({
		keyboard: false,
		backdrop: "static"
	});
};

function hidemodal(){
	$("#esmodal").modal('hide');
}