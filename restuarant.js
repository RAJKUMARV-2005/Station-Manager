function Restuarant(customerName,guestCount,time){
         this.customerName=customerName;
         this.guestCount=guestCount;
         this.time=time;
}
let reservations=[];
function customerDetails(){
    let customerName=document.getElementById('name').value;
    let guestCount=document.getElementById('guest').value;
    let time=document.getElementById('time').value;
    let curr_details=new Restuarant(customerName,guestCount,time);
    reservations.push(curr_details);
    console.log(curr_details);
    alert("Reserved SuccesFully");
    document.getElementById('name').value="";
    document.getElementById('guest').value="";
    document.getElementById('time').value="";
}
function displayDetails(){
    for(let i=0;i<reservations.length;i++){
        let reservation = reservations[i];
        document.write("Customer Name: " + reservation.customerName + "<br>");
        document.write("Guest Count: " + reservation.guestCount + "<br>");
        document.write("Time: " + reservation.time + "<br><br>");
    }
}