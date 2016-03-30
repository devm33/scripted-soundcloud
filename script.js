/*global SC*/
SC.initialize({client_id: '1e41440c2b541ea43e4c9f4b4d9d1fac'})
$(function() {
    $('#search-form').submit(function(event) {
        event.preventDefault();
        event.stopPropagation();
        console.log('search')
        SC.get('/tracks', {q: $('#search-text').val(), license: 'cc-by-sa'},
            function(tracks) {
                console.log(tracks)
                var results = $('#results');
                results.html('');
                $.each(tracks, function(index, track) {
                    var html = '<tr><td>';
                    if (track.artwork_url) {
                       html += '<img src="' + track.artwork_url + '"/>';
                    }
                    html += '</td>';
                    html += '<td>' + '<a href="' + track.permalink_url + '">'
                    html += track.title + '</td>';
                    html += '<td>' + track.user.username + '</td>';
                    html += '</tr>';
                    results.append($(html));
                });
            });
    });
});