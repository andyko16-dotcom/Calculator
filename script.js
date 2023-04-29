const buttons = document.querySelectorAll('button');
const result = document.getElementById("results");
const clear = document.getElementsByClassName('clear');
const signs = document.querySelectorAll('.sign');



let isClear;
let numA = 0;
let numB = 0;
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
    if (reset === 'numBReset') { //softreset for numB entry
        result.style.fontSize = '80px';
        i = 0;
        console.log('numBsoftreset');


    } else if (reset === 'entryNumB') { //entry reset for numB
        result.style.fontSize = '80px';
        i = 0;
        numB = 0;
        isNumB = true;
        addNumB = false;
        result.textContent = 0;
        console.log('numBentryReset');

    }  else if (!reset) { //reset for numA

        result.style.fontSize = '80px';
        numA = 0;
        result.textContent = numA;
        i = 0;
        console.log('passclear');

    } else { //reset for All
        result.style.fontSize = '80px';
        numA = 0;
        numB = 0;
        result.textContent = numA;
        i = 0;
        isNumB = false;
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
buttons.forEach(button => {
    button.addEventListener('click', function () {

        
        switch (button.id) {

            case 'number':
                
                if (numA == '0') {

                    numA = button.textContent;
    
                    isClear = false;
                    isItClear();
    
                    result.textContent = numA;
                    
                    console.log('initial A');
                    
    
                } else if (isNumB && !addNumB) {

                    reset('numBReset');
                    numB = button.textContent;
                    result.textContent = numB;
                    addNumB = true;
                    isNumB = false;
                    console.log('initial B')
                    
                    
                }else if (!(i == 8)) {
                    
                    if (!addNumB) { //for numA
                        numA += button.textContent;
                        result.textContent = numA.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                        
                        i++;
                        console.log('for a')
                    } else { // for numB
                        numB += button.textContent;
                        result.textContent = numB.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                        i++;
                        console.log('for b')
                    }

                    


                    //this is to change font size when it gets bigger
                    
    
                    if (i < 6) {
                        result.style.fontSize = '80px';
                    } else if (i == 6) {
                        result.style.fontSize = '70px';
                    } else if (i == 7) {
                        result.style.fontSize = '61px';
                    } else if (i == 8){
                        result.style.fontSize = '55px';
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
                        } else {
                            reset(0);
                            clear[0].textContent = 'AC'
                        }
                        
                        console.log(numA, numB)
                        
                    } else {
                        reset(1);
                        console.log(numA, numB)
                        
                    }
                }
                break
        } //switch case



        switch (button.className) {
            case 'sign':
                isNumB = true;
                console.log('enable numB')
                

                switch (button.id) {

                    case 'divide':
                        console.log('a')
                        
                        break
                    case 'multiple':
                        console.log('b')

                        break
                    case 'minus':
                        console.log('c')

                        break
                    case 'plus':
                        console.log('d')

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





function evaluation(equate) {
    switch (equate) {
        case 'plus':
            answer = numA + numB;
            break;

        case 'minus':
            answer = numA - numB;
            break;

        case 'multiply':
            answer = numA * numB;
            break;

        case 'divide':
            answer = numA / numB;
            break;

        case 'percent':
            answer = numA * .1
            break;

        case 'decimal':

            break;
    }
};

