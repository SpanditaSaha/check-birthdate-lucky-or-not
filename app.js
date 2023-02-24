const birthDate = document.querySelector("#birth-date");
const luckyNum = document.querySelector("#lucky-number");
const checkLucky = document.querySelector("#check-lucky-button");
const outputText = document.querySelector("#output-text");

function compareNumbers(sum)
{
    if(sum && luckyNum.value)
    {
        if(sum%luckyNum.value===0)
        {
            outputText.innerText="Yaay!! Your Birth Day Is Lucky For You!! 🥳"
        }
        else{
            outputText.innerText="Oops!! Your Birth Day Is Not Lucky For You!! 😢"
        }
    }
    else{
        outputText.innerText = "Please Enter Valid Details :("
    }

}


function checkBirthDateIsLucky()
{
    const dob = birthDate.value;
    const sum=calculateSum(dob);
    compareNumbers(sum);
}

function calculateSum(dob)
{
   dob=dob.replaceAll("-","");
   let sum =0;
   for(let i=0;i<dob.length;i++)
   {
    sum = sum+ Number(dob.charAt(i));
   }
   return sum;

}


checkLucky.addEventListener("click",checkBirthDateIsLucky);