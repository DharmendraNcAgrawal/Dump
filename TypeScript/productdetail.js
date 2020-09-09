var mobileName = "Samsung Mobile";
var mobilePrice = 60000;
var status = "Out of Stock";
var discount = "15%";
document.getElementById("pName").innerHTML = mobileName;
document.getElementById("pPrice").innerHTML = mobilePrice.toString();
document.getElementById("pAvailable").innerHTML = status;
document.getElementById("pDiscount").innerHTML = discount;
// declaring enum variable and assigning default values
var MobilePrice;
(function (MobilePrice) {
    MobilePrice[MobilePrice["Gold"] = 59000] = "Gold";
    MobilePrice[MobilePrice["Pink"] = 60000] = "Pink";
    MobilePrice[MobilePrice["Silver"] = 62000] = "Silver";
})(MobilePrice || (MobilePrice = {}));
;
getMobileByColor(color);
{
    if (color == "gold") {
        mobilePrice = MobilePrice.Gold;
    }
    else if (color == "pink") {
        mobilePrice = MobilePrice.Pink;
    }
    else if (color == "silver") {
        mobilePrice = MobilePrice.Silver;
    }
}
