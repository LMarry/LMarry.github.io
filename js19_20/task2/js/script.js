$.ajax({
    url: 'js/data.json'
    , type: 'GET'
    , jsonpCallback: 'myCallback'
    , dataType: "jsonp"
    , success: function (data) {

        var sorted_by_friends = _.sortBy(data, function (o) {
            return o.friends.length;
        });
        var skills = [];
        var name = [];
        var friends = [];
        var all_friends_obj;
//        console.log(sorted_by_friends);
//        console.log(data);
        for (var i = 0; i < data.length; i++) {
            skills = _.union(skills, data[i]['skills']);
            name = name.concat(sorted_by_friends[i]['name']);


            all_friends_obj = _.forEach(data[i]['friends'], function (value) {
                return value['name'];
            });
            
//            console.log(all_friends_obj);
            _.forEach(all_friends_obj, function (value) {
                friends = friends.concat(value['name']);
            });
        }

        console.log("Skills array: " + skills.sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }));

        console.log("Array of names sorted by friends amount: \n" + name);
        
        friends = _.uniq(friends);
        console.log("Friends array: \n" + friends);

    }
});