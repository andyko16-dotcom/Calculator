const buttons = document.querySelectorAll('button');
const result = document.getElementById("results");
const clear = document.getElementsByClassName('clear');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equal');



let isClear;
let numA = '0';
let numB = '0';
result.textContent = numA;

function isItClear() {
    if (!isClear) {
        clear[0].textContent = 'C';
        console.log('Cchange')
    } else {
        clear[0].textContent = 'AC';
        console.log('ACchange')

    }

};



//resets 
function reset(reset) {
    if (reset === 'numBReset') { //softreset for inital numB entry
        result.style.fontSize = '80px';
        i = 0;
        console.log('numBsoftreset');
        decimalForm = false;


    } else if (reset === 'entryNumB') { //entry reset for numB
        result.style.fontSize = '80px';
        i = 0;
        numB = '0';
        isNumB = true;
        addNumB = false;
        result.textContent = 0;
        decimalForm = false;
        console.log('numBentryReset');

    }  else if (!reset) { //reset for numA

        result.style.fontSize = '80px';
        numA = '0';
        result.textContent = numA;
        i = 0;
        decimalForm = false;
        console.log('passclear');

    } else { //reset for All
        result.style.fontSize = '80px';
        numA = '0';
        numB = '0';
        result.textContent = numA;
        i = 0;
        isNumB = false;
        addNumB = false;
        decimalForm = false;
        equalAgain = false;
        console.log('passallclear');
        //turns off animation
        gsap.to(signs, {
            duration: .25,
            backgroundColor: 'rgb(255,159,10)',
            color: 'white'

        });
    };
    
};


    
let i = 0;
let downdrag = false;
let isNumB = false; //enables numB
let getSign;
let afterFirstNumber = false; //checks for first number
let addNumB = false; //f: numA t: numB
let isDivide = false;
let isMultiply = false;
let isAdd = false;
let isSubtract = false;
let decimalForm = false; //checks if decimal so in decimal form, it doesnt create commas

buttons.forEach(button => {
    button.addEventListener('click', function () {

        
        switch (button.id) {

            case 'number':
                
                if (numA === '0') { //for initial numA 
                    if (button.className == 'decimal') {
                        numA += '.'
                        result.textContent = numA;
                        isClear = false;
                        isItClear();
                        decimalForm = true;
                        console.log('inital A decimal form')
                    } else {
                        numA = button.textContent;
    
                        isClear = false;
                        isItClear();
        
                        result.textContent = numA;
                        
                        console.log('initial A');

                    }



    
                } else if (isNumB && !addNumB) { //for initial numB
                    if (button.className == 'decimal') {
                        reset('numBReset');
                        numB += '.';
                        result.textContent = numB;
                        addNumB = true;
                        isNumB = false;
                        console.log('inital b decimal form')
                        decimalForm = true;
                        
                    } else {
                        reset('numBReset');
                        numB = button.textContent;
                        result.textContent = numB;
                        addNumB = true;
                        isNumB = false;
                        console.log('initial B')

                    }




                    //turns off toggle shade for sign buttons
                    gsap.to(signs, {
                        duration: .25,
                        backgroundColor: 'rgb(255,159,10)',
                        color: 'white'
                    })
                    
                    
                }else if (!(i == 8)) { //shows numbers on the screen
                    
                    if (!addNumB && !decimalForm) { //for numA
                        numA += button.textContent;
                        result.textContent = numA.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                        console.log(typeof numA);
                        i++;
                        console.log('for a')
                    } else if (addNumB && !decimalForm) { // for numB
                        numB += button.textContent;
                        result.textContent = numB.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                        console.log(typeof numB);
                        i++;
                        console.log('for b')
                    } else if (!addNumB && decimalForm) {
                        numA += button.textContent;
                        result.textContent = numA;
                        i++;
                        console.log('for a decimal')
                    } else if (addNumB && decimalForm) {
                        numB += button.textContent;
                        result.textContent = numB;
                        i++;
                        console.log('for b decimal')
                    }

                    


                    //this is to change font size when it gets bigger
                    
    
                    if (i < 6) {
                        result.style.fontSize = '80px';
                        console.log('less than 6')
                    } else if (i == 6) {
                        result.style.fontSize = '66px';
                        console.log('7')
                    } else if (i == 7) {
                        result.style.fontSize = '58px';
                        console.log('8')
                    } else if (i == 8){
                        result.style.fontSize = '51px';
                        console.log('9')
                    }
                }
                break


            case 'extra':
                if (button.className == 'clear') {
                    if (clear[0].textContent == 'C') {
                        
                        console.log(numA, numB)
                        if (addNumB) {
                            reset('entryNumB')
                            clear[0].textContent = 'AC'
                        } else if (numA === 0) {
                            reset(0);
                            clear[0].textContent = 'AC'
                        }else {
                            reset(0);
                            clear[0].textContent = 'AC'
                        }
                        
                        console.log(numA, numB)
                        
                    } else {
                        reset(1);
                        console.log(numA, numB)
                        
                    }
                } else if (button.className == 'posneg') {
                    if (!isNumB && !addNumB) {
                        negPos(numA);
                        console.log('numA negpos')
                    } else {
                        negPos(numB);
                        console.log('numB negpos')
                    }
                } else if (button.className == 'percent') {
                    if (!isNumB && !addNumB) {
                        percent(numA);
                        console.log('numA percent');
                    } else if (isNumB & !addNumB) {
                        percent(numB);
                        console.log('numB percent');
                    } else {
                        percent('afterequals')
                    }
                }
                break
        } //switch case



        switch (button.className) {
            case 'sign':

                if (numA === '0') { // if initial numA is zero
                    numA = 0;
                    result.textContent = numA;
                    console.log('numA is zero');
                } else if (equalAgain) {
                    numA = answer;
                    isNumB = true;
                    addNumB = false;
                }

                isNumB = true; //enables number storage to numB
                isClear = false;
                isItClear();

                console.log('enable numB');
                
                //this triggers the clicked sign to enable evaluation
                switch (button.id) {

                    case 'divide':
                        isDivide = true;
                        isMultiply = false;
                        isAdd = false;
                        isSubtract = false;
                        console.log('divide')
                        
                        
                        break
                    case 'multiple':
                        isDivide = false;
                        isMultiply = true;
                        isAdd = false;
                        isSubtract = false;
                        console.log('multiply')
                        

                        break
                    case 'minus':
                        isDivide = false;
                        isMultiply = false;
                        isAdd = false;
                        isSubtract = true;
                        console.log('subtract')
                        

                        break
                    case 'plus':
                        isDivide = false;
                        isMultiply = false;
                        isAdd = true;
                        isSubtract = false;
                        console.log('add')

                        break
                    
                }
                break
        }

       
    });





    //adds animation to buttons
    
    button.addEventListener('mousedown', function () {
        gsap.to(button, {
            filter: 'contrast(60%)',
            onComplete() {
                gsap.to(button, {
                    filter: 'contrast(100%)'
                })
            }
        });
        downdrag = true;
    });

    button.addEventListener('mouseup', function () {
        gsap.to(button, {
            filter: 'contrast(100%)'
        });
        downdrag = false;
    });

    button.addEventListener('mousemove', function () {

        if (downdrag) {
            gsap.to(button, {
                filter: 'contrast(60%)',
                onComplete() {
                    gsap.to(button, {
                        filter: 'contrast(100%)'
                    })
                }
            });
        }

    });
});




//toggle control panel set to only one toggle at a time
let toggle = false;
signs.forEach(sign => {
    sign.addEventListener('click', function() {

        signs.forEach(sign => {
            toggle = false;
            gsap.to(sign, {
                duration: .25,
                backgroundColor: 'rgb(255,159,10)',
                color: 'white'
            });
        });

            toggle = true;
            gsap.to(sign, {
                duration: .25,
                backgroundColor: 'white',
                color: 'rgb(255,159,10)'
            });
    })

});






let answer;
let isEqual = false;
let equalAgain = false;
equals.addEventListener('click', function () {
    numA = parseFloat(numA);
    numB = parseFloat(numB);

    isEqual = true;

    if (isDivide == true && !equalAgain) {
        answer = numA/numB;
        result.textContent = answer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        equalAgain = true;
    } else if (isMultiply == true && !equalAgain) {
        answer = numA*numB;
        result.textContent = answer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        equalAgain = true;
    } else if (isSubtract == true && !equalAgain) {
        answer = numA - numB
        result.textContent = answer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        equalAgain = true;
    } else if (isAdd == true && !equalAgain) {
        answer = numA + numB;
        result.textContent = answer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        equalAgain = true;
    } else if (isDivide == true && equalAgain) {
        answer /= numB;
        result.textContent = answer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else if (isMultiply == true && equalAgain) {
        answer *= numB;
        result.textContent = answer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else if (isSubtract == true && equalAgain) {
        answer -= numB
        result.textContent = answer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else if (isAdd == true && equalAgain) {
        answer += numB;
        result.textContent = answer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } 

    console.log(result.textContent.length);
    if (result.textContent.length < 8) {
        result.style.fontSize = '80px';
        console.log('less than 6')
    } else if (result.textContent.length == 9) {
        result.style.fontSize = '63px';
        console.log('7')
    } else if (result.textContent.length == 10) {
        result.style.fontSize = '58px';
        console.log('8')
    } else if (result.textContent.length == 11){
        result.style.fontSize = '51px';
        console.log('9')
    }

    console.log(numA,numB)
    if (result.textContent.length > 12 && result.textContent.length < 14) {
        result.style.fontSize = '49px'
        result.textContent = answer.toExponential(5);
        console.log('exponential')
    } else if (result.textContent.length > 13 && result.textContent.length < 22) {
        result.textContent = answer.toExponential(5);
        result.style.fontSize = '49px'
        console.log('exponential2')
    } else if (result.textContent.length > 21) {
        result.style.fontSize = '47px'
        result.textContent = answer.toExponential(5);
        console.log('change size')
    }

});


function negPos(x) {
    if (x == 'afterequals') {
        numA = answer;
        numA *= -1;
        result.textContent = numA;
        
    }else if (x == numA) {
        numA *= -1;
        result.textContent = numA.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        if (i == 8) {
            result.style.fontSize = '47px'
        }

    } else {
        numB *= -1;
        result.textContent = numB.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        if (i == 8) {
            result.style.fontSize = '47px'
        }

    }
};

function percent(x) {
    if (x == 'afterequals') {
        isNumB = false;
        addNumB = false;
        numA = answer;
        numA *= .01;
        result.textContent = numA.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        
        
        isEqual = false;

    } else if (x == numA) {
        numA *= .01
        result.textContent = numA;

        console.log(result.textContent.length);
        if (result.textContent.length < 8) {
            result.style.fontSize = '80px';
            console.log('less than 6')
        } else if (result.textContent.length == 9) {
            result.style.fontSize = '63px';
            console.log('7')
        } else if (result.textContent.length == 10) {
            result.style.fontSize = '58px';
            console.log('8')
        } else if (result.textContent.length == 11){
            result.style.fontSize = '51px';
            console.log('9')
        }


        if (result.textContent.length > 12 && result.textContent.length < 14) {
            result.style.fontSize = '49px'
            result.textContent = answer.toExponential(5);
            console.log('exponential')
        } else if (result.textContent.length > 13 && result.textContent.length < 22) {
            result.textContent = answer.toExponential(5);
            result.style.fontSize = '49px'
            console.log('exponential2')
        } else if (result.textContent.length > 21) {
            result.style.fontSize = '47px'
            result.textContent = answer.toExponential(5);
            console.log('change size')
        }
    } else {
        numB *= .01
        result.textContent = numB;

        console.log(result.textContent.length);
        if (result.textContent.length < 8) {
            result.style.fontSize = '80px';
            console.log('less than 6')
        } else if (result.textContent.length == 9) {
            result.style.fontSize = '63px';
            console.log('7')
        } else if (result.textContent.length == 10) {
            result.style.fontSize = '58px';
            console.log('8')
        } else if (result.textContent.length == 11){
            result.style.fontSize = '51px';
            console.log('9')
        }


        if (result.textContent.length > 12 && result.textContent.length < 14) {
            result.style.fontSize = '49px'
            result.textContent = answer.toExponential(5);
            console.log('exponential')
        } else if (result.textContent.length > 13 && result.textContent.length < 22) {
            result.textContent = answer.toExponential(5);
            result.style.fontSize = '49px'
            console.log('exponential2')
        } else if (result.textContent.length > 21) {
            result.style.fontSize = '47px'
            result.textContent = answer.toExponential(5);
            console.log('change size')
        }
    }
}

let isDecimal = false;
function addDecimal(x) {
    if (x == numA){
        result.textContent = numA + '.'
    } else {
        result.textContent = numB + '.'
    }
}

