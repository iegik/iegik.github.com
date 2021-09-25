;(function(document){
    location.hash = location.hash || "#home";

    var x1, x2, x, y,
        k = 16,
        requestID,
        backgroundPosition,
        body = document.body,
        html = document.documentElement,
        width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth),
        height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

    x1 = x2 = x = y = 0;
    width > 300 && addEventListener("mousemove", function (a) {
        x = a.pageX, y = a.pageY
    });

    function calculate(){
        x1 -= .5;
        x2 -= 5;
        backgroundPosition = width / 2 - 2762 - x / (5 * k) + "px "
            + (height - 129 + (20 - y) / (10 * k)) + "px, "
            + ((x1 - x) / (10 * k)) + "px 60%, "
            + ((x2 - x) / k) + "px 40%";
    }

    // FIXME: Replace with 360deg of seconds
    setInterval(function(){
        calculate();
    }, 25);

    function animate() {
        body.style.backgroundPosition = backgroundPosition;
        if(requestID){
            cancelAnimationFrame(requestID);
        }
        requestID = requestAnimationFrame(animate);
    }
    animate();
}(document));