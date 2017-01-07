(function () {
    var items = document.getElementsByClassName("items");
    for(var i = 0; i < items.length; i++){
        items[i].onmouseover = function(event){
            var target = event.target;
            var parent, cover, text;
            if(target.className == "items"){
                cover = target.querySelector(".cover");
                text = target.querySelector("div");
            }
            else if(target.tagName == "SPAN"){
                parent = target.parentElement.parentElement;
                cover = parent.querySelector(".cover");
                text = parent.querySelector("div");
            }

            else if(target.tagName == "IMG" || target.tagName == "P"){
                parent = target.parentElement;
                cover = parent.querySelector(".cover");
                text = parent.querySelector("div");
            }
            cover.style.display = "inline-block";
            text.style.display = "inline-block";
        };
        
        items[i].onmouseout = function(event){
            var target = event.target;
            var parent, cover, text;
            if(target.className == "items"){
                cover = target.querySelector(".cover");
                text = target.querySelector("div");
            }
            else if(target.tagName == "SPAN"){
                parent = target.parentElement.parentElement;
                cover = parent.querySelector(".cover");
                text = parent.querySelector("div");
            }

            else if(target.tagName == "IMG" || target.tagName == "P"){
                parent = target.parentElement;
                cover = parent.querySelector(".cover");
                text = parent.querySelector("div");
            }
            cover.style.display = "none";
            text.style.display = "none";
        };
    }
})();