(function() {
    var section = document.getElementById("buy-now");
    var clearButton = section.firstElementChild;
    var buyButton = section.querySelector(".add");

    var items = document.getElementById("chosen-items");
    var block = document.getElementById("empty-bag");

    var bagPrice = document.getElementById("bag-price");
    var bagCount = document.getElementById("bag-count");

    clearButton.onclick = function(){
        items.style.display = "none";
        block.innerHTML = "Your shopping bag is empty. Use Catalog to add new items.";
        bagPrice.innerHTML = " 0.00 ";
        bagCount.innerHTML = "0";
    };
    
    buyButton.onclick = function(){
        items.style.display = "none";
        block.innerHTML = "Thank you for your purchase";
        bagPrice.innerHTML = " 0.00 ";
        bagCount.innerHTML = "0";
    };

})();