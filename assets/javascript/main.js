var portfolioArray = [
    {
        frontFace: "coding projects",
        backFace: "click here",
        link: "portfolio-coding.html"
    },
    {
        frontFace: "illustrations",
        backFace: "click here",
        link:"portfolio-illustrations.html"
    },
    {
        frontFace: "events",
        backFace: "click here",
        link:"portfolio-events.html"
    }
];

var upennArray = [
    {
        img: "assets/spiderman.png",
        description: "A role-playing game that showcases my knowledge of JQuery. In the game a user chooses a character as their hero and then chooses an enemy to defeat. Once the user defeats all enemies they win the game, if they don't defeat all enemies, they lose. Once the game is over the user has an option to play again.",
        link: "assets/project-files/rpg/role-playing-game/rpg.html",
        name: "Role Playing Game"
    },
    {
        img:"assets/weatherly.png",
        description: "An app that outputs various food and drink recipes based on the weather. This was a group project in which I worked on making the ajax calls for the food API.",
        link: "assets/project-files/project-weatherly/weatherly.html",
        name: "wEATherly"
    },
    {
        img: "assets"
    }
]
var buttonsArray = ["upenn", "udemy", "person"];
var portfolioDiv= $("#portfolio");

//populates my portfolio main page with hover cards
for(var i = 0; i < portfolioArray.length; i++){
    var columnDiv = $("<div>");
    var contentDiv = $("<div>");
    var cardDiv = $("<div>");
    var frontDiv = $("<div>");
    var backDiv = $("<div>");
    frontDiv.addClass("front");
    frontDiv.text(portfolioArray[i].frontFace);
    backDiv.addClass("back");
    backDiv.html("<a href=" + portfolioArray[i].link + ">" + portfolioArray[i].backFace + "</a>");
    contentDiv.addClass("content");
    contentDiv.append(frontDiv, backDiv);
    cardDiv.addClass("picCard");
    cardDiv.append(contentDiv);
    columnDiv.append(cardDiv);
    portfolioDiv.append(columnDiv);
}

function myFunction(){
    document.getElementById("upenn").style.visibility = 'visible';
}

function showUPENN(){
    $("#display").empty();
    var titleRow = $("<div>");
    var titleCol = $("<div>");
    titleRow.addClass("row text-center bounceInLeft");
    titleCol.addClass("col-12");
    titleCol.html("<h4> UPENN PROJECTS </h4>");
    titleRow.append(titleCol);
    $("#display").append(titleRow);
    for(var i = 0; i < upennArray.length; i++){
    var rowDiv = $("<div>");
    var newImg = $("<img>");
    var imgDiv = $("<div>");
    var descDiv = $("<div>");
    newImg.attr("src", upennArray[i].img);
    newImg.addClass("portfolio-image");
    imgDiv.addClass("col-4");
    imgDiv.append(newImg)
    descDiv.addClass("col-8");
    descDiv.html(upennArray[i].description + "<br><br> <a href=" + upennArray[i].link + " target='_blank'>" + upennArray[i].name + "</a>");
    rowDiv.addClass("row py-2 fadeIn");
    rowDiv.append(imgDiv, descDiv);
    $("#display").append(rowDiv);
    }
}

function showUDEMY(){
    $("#display").empty();
}