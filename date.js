 let date = new Date();


 let m = date.getMonth();
 let d = date.getDate();
 let y = date.getFullYear();


let months=['jan','feb','march','april','may',
'june','july','aug','sept','oct','nov','dec']


let formated_date;

let formatted_Choice = prompt('Choose a date Formate : \n1. dd-mm-yyyy \n2. mm-dd-yyyy \n3. yyyy-mm-dd \n4. MM-DD-YYYY[For Number] ')



switch (formatted_Choice) {
    case '1':
        console.log(formated_date = `${d}-${months[m]}-${y}`);

       break;



    case '2':
         console.log(formated_date = `${months[m]}-${d}-${y}`);

        break;



     case '3':
        console.log( formated_date = `${y}-${months[m]}-${d}`);

        break;


    case '4':
       console.log(formated_date = `${d}-${m}-${y}`);

        break;


    default:

        console.log('invalid Format');
        break;
 }





let datestr='11-2-2023'
let dates=Date.parse(datestr)
console.log(dates);