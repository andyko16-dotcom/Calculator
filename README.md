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
