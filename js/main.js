/**
 * Created by jasonnatividad on 3/27/17.
 */



//Hint: Here's an array of the Twitch.tv usernames of people who regularly stream: ' +
//'["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]




//USAGE:
//    Replace the Twitch API base URL https://api.twitch.tv/kraken with https://wind-bow.gomix.me/twitch-api. Use this
//    // endpoint according to the Twitch API documentation.
//
//    NOTE:
//        This server caches data to lower the request rate. To prevent abuses this server accepts GET requests only,
//    and serves only routes /users/:user, /channels/:channel, and /streams/:stream. These are more than enough to
//complete the challenge.



//   if streams == null then user is offline



//$.getJSON('https://api.twitch.tv/kraken/streams/' + YOUR_CHANNEL_NAME, function(channel) {
//
//    if (channel["stream"] == null) {
//        //THEY ARE OFFLINE DO WHATEVER HERE
//
//    } else {
//
//        //THEY ARE ONLINE DO WHATEVER HERE
//
//    }
//
//
//
//});
//



//  https://api.jquery.com/jQuery.when/  RESEARCH

(function Main(){



    var searchValue = document.getElementById("search-value");


    //  List of twitch users

    var twitchUsers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb",
        "noobs2ninjas"];







    //NEED TO RESEARCH MORE ABOUT JSONP AND CROSS SITE CALLS

    var apiUrl = "https://wind-bow.gomix.me/twitch-api/streams/ESL_SC2";

    var getData = "test";

    $.ajax({

        url: apiUrl,
        //type: "get",
        //async: false,  // test this
        dataType: "jsonp",
        jsonp: "callback",
        //data: {
        //    action: 'opensearch',
        //    search: "freecodecamp",
        //    limit: 5,
        //    format: 'json'},
        data: {
            format: "json"
        },
        success: function(response) {

            // Now you have search results!
            console.log(response);
            getData = response;
            //searchResults(response);

        }
    });

    console.log(getData);




    //var xhr = new XMLHttpRequest();
    //var json;
    //
    //
    //xhr.onreadystatechange = function() {
    //
    //    if (xhr.readyState === 4 && xhr.status === 200){
    //
    //
    //        json = JSON.parse(xhr.responseText);
    //        console.log(json);
    //
    //
    //
    //    }
    //
    //};
    //
    //xhr.open("GET","https://wind-bow.gomix.me/twitch-api/freecodecamp", true);
    //xhr.send();




})();