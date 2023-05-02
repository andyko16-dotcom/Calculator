# Iphone Calculator

4/21/2023
- worked on index.html and finished it

4/22/2023
- touched up index.html
- finished both styles.css and index.html

4/23/2023
- got numbers to appear properly like apple calculator
- got stuck at a part where i forgot that within a function things have to be in sequential order.
    was treating it like a global things where things will trigger no matter what position.

4/24 - 4/26
- made some changes to code to make button clicks store numbers.
- came across a lil bug that took a while to fix
- ended up breaking the calculator then found out that it was misspelling
- added toggle to sign button but need to make it so that only one of the signs can be toggle at a time

4/27/2023
- found out how to toggle off one button when another button is selected and its by adding another .foreach within a .foreach and toggling off within the foreach thats within the foreach.
- i am going to use gsap to animate the buttons.
- now i need to be able to trigger numB when a sign is selected.
- i have finished it and now i am able to store two variables with their own numbers after clicking sign button
- now i am trying to evaluate the numbers depending the sign they have toggled
- actually i need to found out how to add commas once it reaches thousandths and millionths

4/29/2023
- enabled comma insertion with .toString.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
- now i need to work on evaluations for all equations
- i need to add funtion for percentage, neg and pos, and pressing equal after getting answer, and pressing sign when numA = 0
- working setting numA = 0 after clicking sign

4/30/2023
- i need to add cc change to when initial A is zero and i press a sign button
- fixed cc change when i press sign, enabled pressing sign when numA = 0;
- left with precentage, neg and pos, and pressing equal after getting answer.
- enabled neg and pos
- i need to work on rounding numbers bc percentage displays too many zeros
- i need to work on equal sign after solving equation

5/1/2023
- i have figured out how to use decimals for inital states of numA and numB
- i added the function to press the equal sign again.
- i have added exponential
- i have added neg and pos and percentage
- i need to fix clicking mutiple percentages after getting evaluation
- I need to orginize my code it is a mess and not easy to follow