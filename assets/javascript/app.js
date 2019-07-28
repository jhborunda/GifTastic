var characters = ["Melisandre", "Joffrey Baratheon", "Theon Greyjoy", "Ramsay Bolton", "Bronn", "Eddard Stark", "Grey Worm", "Ygritte", "Euron Greyjoy", "Meera Reed", "Tommen Baratheon", "Walder Frey"];

function displayCharacter(){

    var characters = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    characters + "&api_key=QdtD9l4M8HGIcDstv74lLtDcjcpk6nq1&limit=10";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        var characterDiv = $("<div class='character'>");

        //rating data
        var rating = response.Rated;

        //element for rating to be displayed
        var pOne = $("<p>").test("Rating: " + rating);

        //display of rating
        characterDiv.append(pOne);

        //URL for image
        var imgURL = response.Poster;

        //elemen to hold the image
        var image = $("<img>").attr("src", imgURL);

        //append image
        characterDiv.append(image);

        $("#characters-view").prepend(characterDiv);

    });
}

//render buttons
function renderButtons(){

    $("#buttons-view").empty();

    //array for character

    for (var i = 0; i < characters.length; i++) {


    var a= $("<button>");

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

$(document).on("click", "#character-btn", displayCharacter);

renderButtons();