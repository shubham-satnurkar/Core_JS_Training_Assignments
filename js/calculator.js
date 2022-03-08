let screen  = document.getElementById("inputScreen");
let history = document.getElementById("history");
buttons= document.querySelectorAll('button');
let result = document.getElementById("result");

resultValue = '';
let screenValue = '';

for(items of buttons){
    items.addEventListener('click', (e) =>{
        buttonText = e.target.innerText;
        
        if(buttonText == '*'){
            buttonText ='*';
            screenValue += buttonText;  
            screen.value = screenValue;
        }
        else if(buttonText == 'AC'){
            screenValue = ''; 
            screen.value = '';
        }
        else if(buttonText == '='){
            screen.value='';
            result.value = eval(screenValue)
            resultValue = result.value;
            
            historyData = screenValue + "=" + eval(screenValue);
            
            let p = document.createElement("p");
            p.style.marginBottom = '5px'; 
            p.innerText =historyData;
            history.appendChild(p);
        }
        else if(buttonText == 'Del'){   
            screen.value = screen.value.slice(0, -1);
            screenValue = screenValue.slice(0, -1);
        }
        else if(buttonText == '^'){
            buttonText = '**'
            screenValue += buttonText;  
            screen.value = screenValue;
              
        }
        else{
            screenValue += buttonText;  
            screen.value = screenValue;
        }



        console.log("Clicked button is ", buttonText );
    });
}

























































































































































//  switch (this.operation) {
//     case '+':
//         calculation = num1 + num2
//         break;
//     case '-':
//         calculation = num1 - num2
//         break;
//     case '/':
//         calculation = num1 / num2
//         break;
//     case '*':
//         calculation = num1 * num2
//         break;            
//     case '%':
//         calculation = num1 % num2
//         break;
//     case '^':
//         calculation = num1 ^ num2
//         break;
//     default:
//         break;
// }