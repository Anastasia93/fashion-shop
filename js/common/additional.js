(function () {
    var search = document.querySelector(".search");
    var input = search.firstElementChild;
    
    input.onfocus = function(event){
        var target = event.target;
        target.setAttribute("placeholder", "");
    };

    input.onblur = function(event){
        var target = event.target;
        target.setAttribute("placeholder", "Style Name");
    };
    
})();