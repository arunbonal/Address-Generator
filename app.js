// generating random addresses
let url4 = "https://fakerapi.it/api/v1/addresses?_quantity=";
let btn4 = document.querySelector("#buttonAddress");
btn4.addEventListener("click", async ()=>{
    let h1 = document.getElementById("h1Address");
    let ol = document.getElementById("olAddress");
    let quantity = document.getElementById("inputAddress").value;
    let addressArray = await getRandomAddresses(quantity);
    h1.innerText = `Generating ${quantity} addresses`;
    setTimeout(()=>{
        h1.innerText = "Generate random addresses";
    }, 5000);
    ol.innerText = "";
    for(let i=0;i<addressArray.length;i++){
        let li = document.createElement("li");
        li.innerHTML = 
        `id : ${addressArray[i].id},
         street : ${addressArray[i].street},
         streetName : ${addressArray[i].streetName},
         buildingNumber : ${addressArray[i].buildingNumber},
         city : ${addressArray[i].city},
         country : ${addressArray[i].country},
         zipcode : ${addressArray[i].zipcode}
         <br><br>
        `;
        ol.appendChild(li);
    }
});
async function getRandomAddresses(quantity){
    try{
        let res = await axios.get(url4+quantity);
        return res.data.data;
    } catch(e) {
        console.log("error -", e);
        return "";
    }
}