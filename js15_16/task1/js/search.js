function PhotoCallback(data) {
    'use strict';
    var $results = $('#result');
    $results.empty();
    if (data.hits.length < 1) {
        var text = $('<p>No results.</p>');
        $results.append(text);
        return;
    }

    $("#title").css({
        "margin-top": "20px"
    });

    var photo;
    for (var i = 0; i < 21; i++) {
        photo = $('<div  class = "photo"><img src="' + data.hits[i].webformatURL + '"></div>');
        $results.append(photo);
    }
}

$(function () {
    var $searchField = $('#whatSearch');
    $('#search').on('click', findPhoto);
    $searchField.keyup(function (event) {
        if (event.keyCode == 13)
            findPhoto();
    });



    function findPhoto() {
        var whatSearch = $searchField.val();
        if (whatSearch.length > 0)
            $.ajax({
                url: 'https://pixabay.com/api/?key=2611369-40945c2f7af59d32f7dcfb93c&q=' + encodeURIComponent(whatSearch) + '&callback=PhotoCallback'
            })
    };
});