const buttons = document.querySelectorAll('button');
const result = document.getElementById("results");




function numShow() {

    let i = 0;

    let initalNum = parseInt(result.textContent); //for the start of calc

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            if (button.id == 'number') {
                if (initalNum === 0) {

                    result.textContent = button.textContent;
                    initalNum = 1;

                } else if (!(i == 8)) {

                    result.textContent += button.textContent;
                    i++;

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
            };
        });
    });
    

}




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



numShow();