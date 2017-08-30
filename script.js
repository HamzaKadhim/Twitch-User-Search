$(document).ready(function () {

    $('#button').click(function () {
        $('#status').html('');
        var searchedUser = $('#searchBox').val();
        var clientId = 'client_id=yalmbkj5ycok2usvjzee6mnmzpcl95';
        var urlUser = 'https://api.twitch.tv/kraken/users/' + searchedUser + '?' + clientId;
        var urlStream = 'https://api.twitch.tv/kraken/streams/' + searchedUser + '?' + clientId;
        var twitchProfile = 'https://www.twitch.tv/' + searchedUser;
        var urlUserAjax = 'https://api.twitch.tv/kraken/users/' + searchedUser + '?';

        $.ajax({
            type: 'GET',
            url: urlUserAjax,
            headers: {
                'Client-ID': 'yalmbkj5ycok2usvjzee6mnmzpcl95'
            },
            success: function (data) {
                console.log(data);
                $.getJSON(urlStream, function (data1) {
                    if (data1.stream === null) {
                        $('#status').prepend('User is Not Streaming: <a href=' + twitchProfile + '>Click Here to Visit Profile.</a>');
                    } else
                        $('#status').prepend('User is Online and Currently Streaming: <a href=' + twitchProfile + '>' + data1.stream.channel.status + '</a>');


                });





            },
            error: function () {
                $('#status').html('User Does Not Exist.');
            }
        });

    });


});
