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

console.log(portfolioArray[0].link);
var portfolioDiv= $("#portfolio");


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

