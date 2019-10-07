
var portfolioArray = [
    {
        frontFace: "coding projects",
        backFace: "click here",
        link: "portfolio-coding.html"
    },
    {
        frontFace: "illustrations",
        backFace: "click here",
        link: "portfolio-illustrations.html"
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
        name: "Role Playing Game",
        alt: "an image of my spiderman role playing game"
    },
    {
        img: "assets/weatherly.png",
        description: "An app that outputs various food and drink recipes based on the weather. This was a group project in which I worked on making the ajax calls for the food API.",
        link: "https://maurafortino.github.io/project-weatherly/",
        name: "wEATherly",
        alt: "an image of my group project - wEATherly"
    },
    {
        img: "assets/giphy.png",
        description: "This is a website I created using the giphy API. The theme is comedians and the user can create buttons for whichever comedian they want. We you click on a comedian button, ten gifs pop up. To animate the gifs just click, to make them stop, click again.",
        link: "https://maurafortino.github.io/giphy/",
        name: "Giphy API",
        alt: "an image of my giphy website"
    },
    {
        img: "assets/trivia.png",
        description: "A trivia game I created based on the popular cartoon from Nickelodeon, Avatar: The Last Airbender. The user has a certain amount of time to answer each question. To win the game, the user must get more answers correct than they get wrong.",
        link: "https://maurafortino.github.io/trivia-game/",
        name: "ATLA Trivia Game",
        alt: "an image of my Avatar: The last Airbender trivia game"
    },
    {
        img: "assets/trains.png",
        description: "An app that uses firebase to store the data added through the input fields and then display that data on the schedule.",
        link: "https://maurafortino.github.io/train-times/",
        name: "Firebase Train Schedule",
        alt: "an image of my train schedule website"
    }
];

var udemyArray = [
    {
        img: "assets/colors.png",
        description: "An app that I made in my udemy course that requires the user to guess which color the rgb color code is. There is an easy and a hard mode.",
        link: "assets/project-files/color-game/colors.html",
        name: "RGB Color Game",
        alt: "an image of my color game app"
    },
    {
        img: "assets/todo.png",
        description: "A to do list created with jquery for my udemy course. The user can input their own to do list and also delete each item as they complete each task.",
        link: "assets/project-files/to-do-list/jqueryapp.html",
        name: "To Do List",
        alt: "an image of my to do list app"
    },
    {
        img: "assets/museum.png",
        description: "A fake candy museum home page which I created solely with html and css. I also decided to practice my Spanish and wrote the whole copy content in Spanish.",
        link: "assets/project-files/museum/Museum.html",
        name: "El Museo del Dulce",
        alt: "an image of my candy museum home page"
    }
];

var personalArray = [
    {
        img: "assets/first.png",
        description: "While I would prefer not to showcase this website as it's definitely not my best work. It's important to remember where you started. This is the first website I ever made and as you'll see it's... not great.",
        link: "assets/project-files/first-website/former.html",
        name: "First Website",
        alt: "an image of the home page of my first website"
    },
    {
        img: "assets/second.png",
        description: "This was the redesign of my first website. While it's not the greatest, it's also a lot better than the first one I did. This one is actually responsive and fits most screen sizes.",
        link: "assets/project-files/second-website/home.html",
        name: "Second Website",
        alt: "an image of the home page of my second website"
    }
];
var popArray = [
    {
        name: "Brooklyn 99",
        link: "assets/illustrations/b99-quote.jpg",
        sold: "100 various products (my best seller!)",
        redbubble: "https://www.redbubble.com/people/maurafortino/works/29717971-brooklyn-99?asc=t",
        alt: "a quote that says 'Everytime someone steps up and says who they are, the world becomes a better, more interesting place.'"
    },
    {
        name: "The Aces",
        link: "assets/illustrations/the-aces.jpg",
        sold: "40 various products",
        redbubble: "https://www.redbubble.com/people/maurafortino/works/33051842-the-aces?asc=t",
        alt: "A minimalistic drawing of the members of The Aces each on their own Ace from a deck of cards"
    },
    {
        name: "Shrek",
        link: "assets/illustrations/Shrek.jpg",
        sold: "9 various products",
        redbubble: "https://www.redbubble.com/people/maurafortino/works/29897580-shrek?asc=t",
        alt: "A drawing of Shrek that says 'I'm OGRE the moon for you, babe'"
    },
    {
        name: "Stranger Things",
        link: "assets/illustrations/StrangerThings1.png",
        sold: "6 stickers",
        redbubble: "https://www.redbubble.com/people/maurafortino/works/28977051-stranger-things?asc=t",
        alt: "a black circle with a drawing of steve harrington and dustin from Stranger Things with the quote 'Don't talk to me or my son, ever again'"
    },
    {
        name: "Jonathan Van Ness",
        link: "assets/illustrations/JVN.jpg",
        sold: "17 various products",
        redbubble: "https://www.redbubble.com/people/maurafortino/works/35371505-jonathan-van-ness-quotes?asc=t",
        alt: "A minimalstic drawing of Jonathan Van Ness with his quotes surrounding him in rainbow colors"
    }
];

var scArray = [
    {
        link: "assets/illustrations/sc-mummin.png",
        alt: "An image of my friend and I on Mummer's Day with a Mummer's Day snapchat filter that says 'Mummin is a habit'",
        name: "New Years Day 2018 - Mummer's Parade"
    },
    {
        link: "assets/illustrations/sc-mummers-day.png",
        alt: "An image of my sister and her three friends on Mummer's Day with a Mummer's Day snapchat filter that says 'The First with the Fortions, We got it from our Mummer'",
        name: "New Years Day 2018 - Mummer's Parade"
    }

];
var portfolioDiv = $("#portfolio");
var illustrationsDiv = $("#illustrations");

//populates my portfolio main page with hover cards
for (var i = 0; i < portfolioArray.length; i++) {
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

function myFunction() {
    document.getElementById("upenn").style.visibility = 'visible';
};

function showUPENN() {
    $("#display").empty();
    var titleRow = $("<div>");
    var titleCol = $("<div>");
    titleRow.addClass("row text-center bounceInLeft");
    titleCol.addClass("col-12");
    titleCol.html("<h4> UPENN PROJECTS </h4>");
    titleRow.append(titleCol);
    $("#display").append(titleRow);
    for (var i = 0; i < upennArray.length; i++) {
        var rowDiv = $("<div>");
        var newImg = $("<img>");
        var imgDiv = $("<div>");
        var descDiv = $("<div>");
        newImg.attr("src", upennArray[i].img);
        newImg.attr("alt", upennArray[i].alt);
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

function showUDEMY() {
    $("#display").empty();
    var titleRow = $("<div>");
    var titleCol = $("<div>");
    titleRow.addClass("row text-center bounceInLeft");
    titleCol.addClass("col-12");
    titleCol.html("<h4> UDEMY PROJECTS </h4>");
    titleRow.append(titleCol);
    $("#display").append(titleRow);
    for (var i = 0; i < udemyArray.length; i++) {
        var rowDiv = $("<div>");
        var newImg = $("<img>");
        var imgDiv = $("<div>");
        var descDiv = $("<div>");
        newImg.attr("src", udemyArray[i].img);
        newImg.attr("alt", udemyArray[i].alt);
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

function showPers() {
    $("#display").empty();
    var titleRow = $("<div>");
    var titleCol = $("<div>");
    titleRow.addClass("row text-center bounceInLeft");
    titleCol.addClass("col-12");
    titleCol.html("<h4> PERSONAL PROJECTS </h4>");
    titleRow.append(titleCol);
    $("#display").append(titleRow);
    for (var i = 0; i < personalArray.length; i++) {
        var rowDiv = $("<div>");
        var newImg = $("<img>");
        var imgDiv = $("<div>");
        var descDiv = $("<div>");
        newImg.attr("src", personalArray[i].img);
        newImg.attr("alt", personalArray[i].alt);
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

function showPop() {   
    illustrationsDiv.empty();
    $("#illustrations-title").empty();
    var titleCol = $("<div>");
    titleCol.addClass("col-12 bounceInLeft");
    titleCol.html("<h4> POP CULTURE ILLUSTRATIONS </h4>");
    $("#illustrations-title").append(titleCol);
    for (var i = 0; i < popArray.length; i++) {
        var columnDiv = $("<div>");
        var contentDiv = $("<div>");
        var cardDiv = $("<div>");
        var frontDiv = $("<div>");
        var newImg = $("<img>");
        var backDiv = $("<div>");
        frontDiv.addClass("img");
        newImg.attr("src", popArray[i].link);
        newImg.attr("alt", popArray[i].alt);
        newImg.addClass("portfolio-image");
        frontDiv.append(newImg);
        backDiv.addClass("img-back");
        backDiv.html(popArray[i].name + "<br> sold: " + popArray[i].sold + "<br> <a href=" + popArray[i].redbubble + ">buy here!</a>");
        contentDiv.addClass("content");
        contentDiv.append(frontDiv, backDiv);
        cardDiv.addClass("picCard p-5");
        cardDiv.append(contentDiv);
        columnDiv.append(cardDiv);
        illustrationsDiv.append(columnDiv);
    };
};

function showSC() {
    illustrationsDiv.empty();
    $("#illustrations-title").empty();
    var titleCol = $("<div>");
    titleCol.addClass("col-12 bounceInLeft");
    titleCol.html("<h4> SNAPCHAT FILTERS </h4>");
    $("#illustrations-title").append(titleCol);
    for (var i = 0; i < scArray.length; i++) {
        var columnDiv = $("<div>");
        var contentDiv = $("<div>");
        var cardDiv = $("<div>");
        var frontDiv = $("<div>");
        var newImg = $("<img>");
        var backDiv = $("<div>");
        frontDiv.addClass("img");
        newImg.attr("src", scArray[i].link);
        newImg.attr("alt", scArray[i].alt);
        newImg.addClass("illustration-image");
        frontDiv.append(newImg);
        backDiv.addClass("img-back");
        backDiv.html(scArray[i].name);
        contentDiv.addClass("content");
        contentDiv.append(frontDiv, backDiv);
        cardDiv.addClass("picCard p-5");
        cardDiv.append(contentDiv);
        columnDiv.append(cardDiv);
        illustrationsDiv.append(columnDiv);
    };
};
