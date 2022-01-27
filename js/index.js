let numberImages = 2;
var counter = 0;
setInterval(() => {
    if (document.readyState !== "complete") {
        console.log("Something is wrong with the page load");
        return;
    }
    counter = (counter + 1) % numberImages;
    document.body.style.backgroundImage = `url('images/laurasqsantos/recente${counter}.png')`;
}, 3000);

