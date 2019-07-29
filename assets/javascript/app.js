var characters = ["Melisandre", "Joffrey Baratheon", "Theon Greyjoy", "Ramsay Bolton", "Bronn", "Eddard Stark", "Grey Worm", "Ygritte", "Euron Greyjoy", "Meera Reed", "Tommen Baratheon", "Walder Frey"];

function displayCharacter(){

    var character = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    character + "&api_key=QdtD9l4M8HGIcDstv74lLtDcjcpk6nq1&limit=10";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        

        //rating data
        var results = response.data;

        $("#characters-view").empty();

        for (var i =0; i < results.length; i++) {


        var characterDiv = $("<div class='character'>");

        var rating =results[i].rating;

        //element for rating to be displayed
        var pOne = $("<p>").text("Rating: " + rating);

        //display of rating
        characterDiv.append(pOne);

        var giphyStill = response.data[i].images.downsized_still.url;

        var giphyMotion = response.data[i].images.downsized.url;

        // //URL for image
        // var imgURL = response.Poster;

        //elemen to hold the image
        var image = $("<img>").attr("src", giphyStill);

        image.attr("data-still", giphyStill);
        image.attr("data-motion", giphyMotion);
        image.attr("data-state", "still");
        image.attr("id", "img"+i);

        image.addClass("giphyImages");

        //append image
        characterDiv.prepend(image);

        $("#characters-view").prepend(characterDiv);
        }
    })

}

//render buttons
function renderButtons(){

    $("#buttons-view").empty();

    //array for character

    for (var i = 0; i < characters.length; i++) {


    var a = $("<button>");

    a.addClass("character-btn");

    a.attr("data-name", characters[i]);

    a.text(characters[i]);

    $("#buttons-view").append(a);
    }
};

//input of characters

    $("#add-character").on("click", function(event){
    event.preventDefault();

    var character = $("#character-input").val().trim();

    characters.push(character);


    renderButtons();
    });

$(document).on("click", ".character", displayCharacter);

renderButtons();

//this is where i would create a function for giphys to be animated when clicked.