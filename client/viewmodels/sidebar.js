Template.sidebar.rendered = function(){
	
	$(".nav li a.twuser").click(function(){

		var this_link = $( this );

		$("#notification").show();
		$("#tweets").hide();

		// remove active class from all li
		$(".nav li").removeClass("active"); 

		// add class active to this button
		this_link.parent("li").addClass("active");

		//add current view to header
		$("#current_view").text( "- "+this_link.attr( "id" ) );

		var x = this_link.attr( 'id' ); 

		var twuser = x.replace(/([\@\#]*)/,'') ;		

		Meteor.call( "getUserTweets", twuser, Session.get("bearertoken"), function(error,results){
			if(error){
				$("#notification").text("Can't load tweets. Please try again...");
			}else{
				$("#notification").hide();
				$("#tweets").show();
				Session.set("tweets",results.data);
			}
		});

		return false;
		
	});

	$(".nav li a.hashtag").click(function(){
		var this_link = $( this );

		$("#notification").show();
		$("#tweets").hide();

		// remove active class from all li
		$(".nav li").removeClass("active"); 

		// add class active to this button
		this_link.parent("li").addClass("active");

		//add current view to header
		$("#current_view").text( "- "+this_link.attr( "id" ) );

		var x = this_link.attr( 'id' ); 

		var hashtag = x.replace(/([\@\#]*)/,'') ;		

		console.log(hashtag);

		Meteor.call( "getHashtagTweets", hashtag, Session.get("bearertoken"), function(error,results){
			if(error){
				$("#notification").text("Can't load tweets. Please try again...");
			}else{
				$("#notification").hide();
				$("#tweets").show();
				console.log( results.data.statuses );
				// Session.set("tweets",JSON.parse(results.data.statuses);
			}
		});

		return false;
	});

}; 