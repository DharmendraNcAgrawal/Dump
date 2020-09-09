let mobileName:string = "Samsung Mobile";
let mobilePrice:number=60000;
let status:string = "Out of Stock";
let discount:string = "15%";

document.getElementById("pName").innerHTML=mobileName;
document.getElementById("pPrice").innerHTML=mobilePrice.toString();
document.getElementById("pAvailable").innerHTML=status;
document.getElementById("pDiscount").innerHTML=discount;

// declaring enum variable and assigning default values
enum MobilePrice {Gold= 59000, Pink= 60000, Silver= 62000};

getMobileByColor(color) {

if(color=="gold"){
mobilePrice=MobilePrice.Gold;
}
else if(color=="pink"){
mobilePrice=MobilePrice.Pink;
}
else if(color=="silver"){
mobilePrice=MobilePrice.Silver;
}

}