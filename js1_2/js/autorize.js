var arrayName = [];
var searchName;
var i;

for (i = 0; i < 5; i++) {
    arrayName[i] = prompt("Name " + (i + 1), '');
}

searchName = prompt("Username: ", '');

for (i = 0; i < 5; i++) {
    if (arrayName[i] == searchName) {
        alert(searchName + " you have successfully logged");
        break;
    }
    if (i == 4) {
        alert("Authorisation Error!");
    }
}