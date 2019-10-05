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
    // {
    //     frontFace: "events",
    //     backFace: "click here",
    //     link:"portfolio-events.html"
    // }
];

var upennArray = [
    {
        img: "assets/spiderman.png",
        description: "A role-playing game that showcases my knowledge of JQuery. In the game a user chooses a character as their hero and then chooses an enemy to defeat. Once the user defeats all enemies they win the game, if they don't defeat all enemies, they lose. Once the game is over the user has an option to play again.",
        link: "https://maurafortino.github.io/role-playing-game/",
        name: "Role Playing Game"
    },
    {
        img:"assets/weatherly.png",
        description: "An app that outputs various food and drink recipes based on the weather. This was a group project in which I worked on making the ajax calls for the food API.",
        link: "https://maurafortino.github.io/project-weatherly/",
        name: "wEATherly"
    },
    {
        img: "assets/giphy.png",
        description: "This is a website I created using the giphy API. The theme is comedians and the user can create buttons for whichever comedian they want. We you click on a comedian button, ten gifs pop up. To animate the gifs just click, to make them stop, click again.",
        link: "https://maurafortino.github.io/giphy/",
        name: "Giphy API"
    },
    {
        img: "assets/trivia.png",
        description: "A trivia game I created based on the popular cartoon from Nickelodeon, Avatar: The Last Airbender. The user has a certain amount of time to answer each question. To win the game, the user must get more answers correct than they get wrong.",
        link: "https://maurafortino.github.io/trivia-game/",
        name: "ATLA Trivia Game"
    },
    {
        img: "assets/trains.png",
        description: "An app that uses firebase to store the data added through the input fields and then display that data on the schedule.",
        link: "https://maurafortino.github.io/train-times/",
        name: "Firebase Train Schedule"
    }
];

var udemyArray = [
    {
        img: "assets/colors.png",
        description: "An app that I made in my udemy course that requires the user to guess which color the rgb color code is. There is an easy and a hard mode.",
        link: "assets/project-files/color-game/colors.html",
        name: "RGB Color Game"
    },
    {
        img: "assets/todo.png",
        description: "A to do list created with jquery for my udemy course. The user can input their own to do list and also delete each item as they complete each task.",
        link:"assets/project-files/to-do-list/jqueryapp.html",
        name: "To Do List"
    },
    {
        img: "assets/museum.png",
        description: "A fake candy museum home page which I created solely with html and css. I also decided to practice my Spanish and wrote the whole copy content in Spanish.",
        link: "assets/project-files/museum/Museum.html",
        name: "El Museo del Dulce"
    }
];

var personalArray = [
    {
        img: "assets/first.png",
        description: "While I would prefer not to showcase this website as it's definitely not my best work. It's important to remember where you started. This is the first website I ever made and as you'll see it's... not great.",
        link: "assets/project-files/first-website/former.html",
        name: "First Website"
    },
    {
        img: "assets/second.png",
        description: "This was the redesign of my first website. While it's not the greatest, it's also a lot better than the first one I did. This one is actually responsive and fits most screen sizes.",
        link: "assets/project-files/second-website/home.html",
        name: "Second Website"
    }
];
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
    cardDiv.addClass("picCard p-5");
    cardDiv.append(contentDiv);
    columnDiv.append(cardDiv);
    portfolioDiv.append(columnDiv);
};

function myFunction(){
    document.getElementById("upenn").style.visibility = 'visible';
};

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
    };
};

function showUDEMY(){
    $("#display").empty();
    var titleRow = $("<div>");
    var titleCol = $("<div>");
    titleRow.addClass("row text-center bounceInLeft");
    titleCol.addClass("col-12");
    titleCol.html("<h4> UDEMY PROJECTS </h4>");
    titleRow.append(titleCol);
    $("#display").append(titleRow);
    for(var i =0; i < udemyArray.length; i ++){
    var rowDiv = $("<div>");
    var newImg = $("<img>");
    var imgDiv = $("<div>");
    var descDiv = $("<div>");
    newImg.attr("src", udemyArray[i].img);
    newImg.addClass("portfolio-image");
    imgDiv.addClass("col-4");
    imgDiv.append(newImg)
    descDiv.addClass("col-8");
    descDiv.html(udemyArray[i].description + "<br><br> <a href=" + udemyArray[i].link + " target='_blank'>" + udemyArray[i].name + "</a>");
    rowDiv.addClass("row py-2 fadeIn");
    rowDiv.append(imgDiv, descDiv);
    $("#display").append(rowDiv);
    };
};

function showPers(){
    $("#display").empty();
    var titleRow = $("<div>");
    var titleCol = $("<div>");
    titleRow.addClass("row text-center bounceInLeft");
    titleCol.addClass("col-12");
    titleCol.html("<h4> PERSONAL PROJECTS </h4>");
    titleRow.append(titleCol);
    $("#display").append(titleRow);
    for(var i =0; i < personalArray.length; i ++){
    var rowDiv = $("<div>");
    var newImg = $("<img>");
    var imgDiv = $("<div>");
    var descDiv = $("<div>");
    newImg.attr("src", personalArray[i].img);
    newImg.addClass("portfolio-image");
    imgDiv.addClass("col-4");
    imgDiv.append(newImg)
    descDiv.addClass("col-8");
    descDiv.html(personalArray[i].description + "<br><br> <a href=" + personalArray[i].link + " target='_blank'>" + personalArray[i].name + "</a>");
    rowDiv.addClass("row py-2 fadeIn");
    rowDiv.append(imgDiv, descDiv);
    $("#display").append(rowDiv);
    };
};