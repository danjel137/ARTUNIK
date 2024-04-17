function showMore(event, moreContentId) {
    event.preventDefault();
    var moreContent = document.getElementById(moreContentId);
    moreContent.style.display = "block";
    var readMoreButton = moreContent.previousElementSibling.querySelector("button");
    if (readMoreButton) {
        readMoreButton.style.display = "none";
    }
}

function closeContent(event, mainContentId) {
    event.preventDefault();
    var moreContentId = mainContentId.replace("mainContent", "moreContent");
    var moreContent = document.getElementById(moreContentId);
    moreContent.style.display = "none";
    var readMoreButton = moreContent.previousElementSibling.querySelector("button");
    if (readMoreButton) {
        readMoreButton.style.display = "inline-block"; // Ensure the button is displayed inline-block to maintain its position
    }
}