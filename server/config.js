Meteor.methods({
	getBearerToken: function(cred){
		this.unblock();
			
		var url = "https://api.twitter.com/oauth2/token";

		var res = Meteor.http.call("POST", url, 
			{
				params: {"grant_type": "client_credentials"},  
				headers: {
					"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
					"Authorization": "Basic "+ cred
				}
			}
		);

		var content = JSON.parse(res.content);
		var bearertoken = content.access_token; 
		return bearertoken;
		
	},
	getUserTweets: function(twuser,bearertoken){
		this.unblock();

		var url = "https://api.twitter.com/1.1/statuses/user_timeline.json";

		var res = Meteor.http.call("GET", url, 
			{
				params: {
					"count": "100",
					"screen_name": twuser
				},  
				headers: {
					"Authorization": "Bearer "+ bearertoken
				}
			}
		);

		return res;
	},
	getHashtagTweets: function(hashtag,bearertoken){
		this.unblock();

		var url = "https://api.twitter.com/1.1/search/tweets.json";

		var res = Meteor.http.call("GET", url, 
			{
				params: {
					"q": "%23"+hashtag,
					"count": "100"
				},  
				headers: {
					"Authorization": "Bearer "+ bearertoken
				}
			}
		);

		return res;
	}

});