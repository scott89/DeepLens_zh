
window.onload = function start() {
    slide(1, 3);
    slide(5, 2);
    slide(3, 2);
    slide(4, 3);
}

function slide(idx, total_num) {
    var num = 0, style = document.getElementById('slider_'+idx).style;
    window.setInterval(function () {
        // increase by num 1, reset to 0
        num = (num + 1) % total_num;
        console.log(num);
        style.backgroundImage = "url('./DeepLens/anims/" + idx + "_" + num + ".jpg')";
    }, 1000); // repeat forever, polling every x milliseconds
}