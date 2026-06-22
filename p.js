const form = document.querySelector('Form')
form.addEventListener('submit' , function (e)
{
  e.preventDefault()

const weight = parseInt(document.querySelector('#weight').value);
const height = parseInt(document.querySelector('#height').value);
const results = document.querySelector('#results');
const conclusion = document.querySelector('#conclusion');

if(  isNaN(weight) || weight === "" || weight < 0)
{
  results.innerHTML = `please give valid weight ${height}`
}
else if( isNaN(height) || height === "" || height < 0)
{
  results.innerHTML = `please give valid height ${weight}`
}
else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;

    if(bmi < 18.6)
    {
      
      conclusion.innerHTML = `under weight`
     } 
     else if (bmi > 18.6 && bmi < 24.9)
     {
       conclusion.innerHTML = `normal bmi`
     } 
     else 
     {
        conclusion.innerHTML = `overweight`
     }
    
  }
  
 
});
