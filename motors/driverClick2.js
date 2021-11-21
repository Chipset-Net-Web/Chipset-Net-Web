//10.11.2021. ChipsetNetWeb 



/*let a = document.querySelector('img');*/

let a = document.getElementById("videochat");

let b = document.getElementById("textfilechat");

let c = document.getElementById("textvideochat");

a.onclick = function() {
    document.location.href = "video-chat-in-browser.html";

}


b.onclick = function() {

    document.location.href = "https://chipset-net-web.github.io/text-file-chat-3/";

}

c.onclick = function() {

    document.location.href = "video-text-chat-in-browser.html";


}