//showMore1 and closeContent1
function showMore1(event, moreContentId) {
    event.preventDefault();
    var moreContent = document.getElementById(moreContentId);
    moreContent.style.display = "block";
    var readMoreButton = moreContent.previousElementSibling.querySelector("button");
    if (readMoreButton) {
        readMoreButton.style.display = "none";
    }
}

function closeContent1(event, mainContentId) {
    event.preventDefault();
    var moreContentId = mainContentId.replace("mainContent", "moreContent");
    var moreContent = document.getElementById(moreContentId);
    moreContent.style.display = "none";
    var readMoreButton = moreContent.previousElementSibling.querySelector("button");
    if (readMoreButton) {
        readMoreButton.style.display = "inline-block"; // Ensure the button is displayed inline-block to maintain its position
    }
}

//showMore2 and closeContent2

function showMore2(event, moreContentId) {
    event.preventDefault();
    var moreContent = document.getElementById(moreContentId);
    moreContent.style.display = "block";
    var readMoreButton = moreContent.previousElementSibling.querySelector("button");
    if (readMoreButton) {
        readMoreButton.style.display = "none";
    }
}

function closeContent2(event, mainContentId) {
    event.preventDefault();
    var moreContentId = mainContentId.replace("mainContent", "moreContent");
    var moreContent = document.getElementById(moreContentId);
    moreContent.style.display = "none";
    var readMoreButton = moreContent.previousElementSibling.querySelector("button");
    if (readMoreButton) {
        readMoreButton.style.display = "inline-block"; // Ensure the button is displayed inline-block to maintain its position
    }
}

//showMore3 and closeContent3

function showMore3(event, moreContentId) {
    event.preventDefault();
    var moreContent = document.getElementById(moreContentId);
    moreContent.style.display = "block";
    var readMoreButton = moreContent.previousElementSibling.querySelector("button");
    if (readMoreButton) {
        readMoreButton.style.display = "none";
    }
}

function closeContent3(event, mainContentId) {
    event.preventDefault();
    var moreContentId = mainContentId.replace("mainContent", "moreContent");
    var moreContent = document.getElementById(moreContentId);
    moreContent.style.display = "none";
    var readMoreButton = moreContent.previousElementSibling.querySelector("button");
    if (readMoreButton) {
        readMoreButton.style.display = "inline-block"; // Ensure the button is displayed inline-block to maintain its position
    }
}

//showMore4 and closeContent4

function showMore4(event, moreContentId) {
    event.preventDefault();
    var moreContent = document.getElementById(moreContentId);
    moreContent.style.display = "block";
    var readMoreButton = moreContent.previousElementSibling.querySelector("button");
    if (readMoreButton) {
        readMoreButton.style.display = "none";
    }
}

function closeContent4(event, mainContentId) {
    event.preventDefault();
    var moreContentId = mainContentId.replace("mainContent", "moreContent");
    var moreContent = document.getElementById(moreContentId);
    moreContent.style.display = "none";
    var readMoreButton = moreContent.previousElementSibling.querySelector("button");
    if (readMoreButton) {
        readMoreButton.style.display = "inline-block"; // Ensure the button is displayed inline-block to maintain its position
    }
}


