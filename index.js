
document.getElementById("case-increase").addEventListener("click", function () {
    handleProductChange("case", true);

})

document.getElementById("case-discrease").addEventListener("click", function () {

    handleProductChange("case", false);
})

document.getElementById("phone-increase").addEventListener("click", function () {
    handleProductChange("phone", true);

})

document.getElementById("phone-discrese").addEventListener("click", function () {

    handleProductChange("phone", false);
})

function handleProductChange(product, isIncrease) {
    const productInput = document.getElementById(product + "-count");
    const productCount = parseInt(productInput.value);
    //const caseNewCount = caseCount - 1;
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;

    }
    if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;
    let productTotal = 0;
    if (product == "phone") {
        productTotal = productNewCount * 1219;
    }
    if (product == "case") {
        productTotal = productNewCount * 59;
    }

    document.getElementById(product + "-total").innerText = productTotal;
    calculateTotal();
    
    
}

function calculateTotal() {
    const casecount = getinputvalue("case");
    const phonecount = getinputvalue("phone");

    const totalPrice = phonecount * 1219 + casecount * 59;
    document.getElementById("total-price").innerText = totalPrice;
    getinputvalue(product);

}

function getinputvalue(product) {
    const productinput = document.getElementById(product + "-count");
    const productcount = parseInt(productinput.value);

    return productcount;
}







    













































