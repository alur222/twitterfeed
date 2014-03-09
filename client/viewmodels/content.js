Template.content.rendered = function(){
	// $('#twtable').dataTable({
 //    "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>"
 //    , "sPaginationType": "bs_normal"
 //    , "oLanguage": {
 //        "sLengthMenu": "_MENU_ records per page"
 //    }
	// });
};
Template.content.helpers({
	tweets: function(){
		 
			return Session.get("tweets"); 
		 
	},
	format_date: function(xdate){
		// var formatted_date = moment(xdate).format(f);
		
		// console.log(d);
		return moment(xdate, "YYYY-MM-DD HH:mm Z");
	},
	tweetIsNull: function(text){
		console.log(typeof(text));
		if(text == ''){
			return "No Public Tweets";
		}
		else{
			return text;
		}
	},
	findLinks: function(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    text = text.replace( urlRegex, '<a href="$1" target="_blank">$1</a>');
    return new Handlebars.SafeString(text);
  }
}); 