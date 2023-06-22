console.log('Hello world');
fetch('https://ferme.serveo.net/books')
    .then(res => res.json())
    .then(data => {
        console.log(data);
    });

$.ajax({
    url: "testserver.php",
    dataType: 'jsonp', // Notice! JSONP <-- P (lowercase)
    success: function (json) {
        // do stuff with json (in this case an array)
        alert("Success");
    },
    error: function () {
        alert("Error");
    }
});