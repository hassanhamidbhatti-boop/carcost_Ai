const $=id=>document.getElementById(id);
const money=n=>"Rs. "+Math.round(n).toLocaleString("en-PK");
function calculate(e){
 if(e)e.preventDefault();
 const distance=+$("distance").value||0, fuelPrice=+$("fuelPrice").value||0, mileage=Math.max(+$("mileage").value||1,1);
 const maintenance=+$("maintenance").value||0, insurance=+$("insurance").value||0, tyres=+$("tyres").value||0, depreciation=+$("depreciation").value||0;
 const fuel=distance/mileage*fuelPrice, maint=maintenance/12, ins=insurance/12, tyre=tyres/12, dep=depreciation/12;
 const monthly=fuel+maint+ins+tyre+dep, yearly=monthly*12;
 $("resultCar").textContent=$("car").value||"Your car"; $("monthly").textContent=money(monthly); $("yearly").textContent=money(yearly)+" / year";
 $("fuelOut").textContent=money(fuel); $("maintOut").textContent=money(maint); $("insOut").textContent=money(ins); $("tyreOut").textContent=money(tyre); $("depOut").textContent=money(dep);
 const max=Math.max(fuel,maint,ins,tyre,dep,1);
 ["fuel","maint","ins","tyre","dep"].forEach((x,i)=>$(x+"Bar").style.width=( [fuel,maint,ins,tyre,dep][i]/max*100)+"%");
 $("perKm").textContent=money(distance?monthly/distance:0);
}
$("costForm").addEventListener("submit",calculate);
function prefill(name){$("car").value=name; setTimeout(calculate,50)}
calculate();
