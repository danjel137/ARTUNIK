function showMore(event) {
    event.preventDefault();
    document.getElementById("mainContent").style.display = "block";
    document.getElementById("moreContent").style.display = "block";
    event.target.style.display = "none";
}

function closeContent(event) {
    event.preventDefault();
    document.getElementById("mainContent").style.display = "block";
    document.getElementById("moreContent").style.display = "none";
    var readMoreButton = document.querySelector("#mainContent button");
    if (readMoreButton) {
        readMoreButton.style.display = "block";
    }
}



function showMore1(event) {
    event.preventDefault();
    document.getElementById("mainContent1").style.display = "block";
    document.getElementById("moreContent1").style.display = "block";
    event.target.style.display = "none";
}

function closeContent1(event) {
    event.preventDefault();
    document.getElementById("mainContent1").style.display = "block";
    document.getElementById("moreContent1").style.display = "none";
    var readMoreButton = document.querySelector("#mainContent1 button");
    if (readMoreButton) {
        readMoreButton.style.display = "block";
    }
}


function showMore2(event) {
    event.preventDefault();
    document.getElementById("mainContent2").style.display = "block";
    document.getElementById("moreContent2").style.display = "block";
    event.target.style.display = "none";
}

function closeContent2(event) {
    event.preventDefault();
    document.getElementById("mainContent2").style.display = "block";
    document.getElementById("moreContent2").style.display = "none";
    var readMoreButton = document.querySelector("#mainContent2 button");
    if (readMoreButton) {
        readMoreButton.style.display = "block";
    }
}


function showMore3(event) {
    event.preventDefault();
    document.getElementById("mainContent3").style.display = "block";
    document.getElementById("moreContent3").style.display = "block";
    event.target.style.display = "none";
}

function closeContent3(event) {
    event.preventDefault();
    document.getElementById("mainContent3").style.display = "block";
    document.getElementById("moreContent3").style.display = "none";
    var readMoreButton = document.querySelector("#mainContent3 button");
    if (readMoreButton) {
        readMoreButton.style.display = "block";
    }
}