/* Китай - 150 кредитов Чили - 250 кредитов Австралия - 165 кредитов Индия - 90 /n 
кредитов Ямайка - 130 кредитов */
let destinationCountry = prompt("What is your destination country").toLowerCase();

let countries = {
    "Китай": 150,
    "Чили":250,
    "Ямайка":130
}

try {
    let destinationCountry= prompt("What is your destination country").toLowerCase();
    
    switch (destinationCountry) {
           case "китай":
                console.log(`Доставка в ${Object.keys(countries)[0]} будет стоить ${countries.Китай} кредитов`)
                break;
             case "чили":
                 console.log(`Доставка в ${Object.keys(countries)[1]} будет стоить ${countries.Чили} кредитов`)
                 break;
             case "австралия":
                 console.log(`Доставка в ${Object.keys(countries)[2]} будет стоить ${countries.Австралия} кредитов`)
                 break;
             case "индия":
                 console.log(`Доставка в ${Object.keys(countries)[3]} будет стоить ${countries.Индия} кредитов`)
                 break;
             case "ямайка":
                 console.log(`Доставка в ${Object.keys(countries)[4]} будет стоить ${countries.Ямайка} кредитов`)
                 break;  
             default:
                 alert("В вашей стране доставка не доступна");          
         }
      } catch(err) {
         console.log("you click on \"cancel\" please refresh the page and try again");
      } 