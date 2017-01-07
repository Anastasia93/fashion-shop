(function () {
    var itemChars = document.getElementsByClassName("item-char");
    for (var i = 0; i < itemChars.length; i++) {
        var buttons = itemChars[i].getElementsByTagName("button");
        for(var j = 0; j < buttons.length; j++){
            var elem = buttons[j];
            elem.onclick = (function(x) {
                return function(event){
                    var target = event.target;
                    for(var k = 0; k < x.length; k++){
                        x[k].style.border = "none";
                    }
                    target.style.border = "1px solid #d2d1d1";
                }
            })(buttons)
        }
    }
})();

(function () {
    var add = document.getElementById("add");
    var p = document.getElementById("price");
    var bp = document.getElementById("bag-price");
    var c = document.getElementById("bag-count");
    var price = parseInt(p.innerHTML.replace(/\D+/g,""));
    var bagPrice = parseInt(bp.innerHTML.replace(/\D+/g,""));
    var count = parseInt(c.innerHTML.replace(/\D+/g,""));
    add.onclick = function(){
        count++;
        bagPrice += price;
        var x = Math.floor(bagPrice)/100 + "0";
        var a = x[0];
        var b = x.substring(1);
        bp.innerHTML = a + " " + b;
        c.innerHTML = count;
    }
})();