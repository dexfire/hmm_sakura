var bgn = 1;

function nextBG() {
    if (bgs) {
        bgn = bgn + 1;
        if (bgn >= bgs.length) bgn = 0;
        $(".centerbg").css("background-image", "url(" + bgs[bgn] + ")");
    } else {
        randBG();
    }
}

function preBG() {
    if (bgs) {
        bgn = bgn - 1;
        if (bgn < 0) bgn = bgs.length - 1;
        $(".centerbg").css("background-image", "url(" + bgs[bgn] + ")");
    } else {
        randBG();
    }
}

function randBG() {
    $(".centerbg").css("background-image", "url('http://www.dmoe.cc/random.php')");
}

$(document).ready(function () {
    if (bgs) {
        bgn = parseInt(Math.random() * bgs.length);
        $(".centerbg").css("background-image", "url(" + bgs[bgn] + ")");
        $("#bg-next").click(function () {
            nextBG();
        });
        $("#bg-pre").click(function () {
            preBG();
        });
    } else {
        randBG();
    }
});