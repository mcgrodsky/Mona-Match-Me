# Project1
Project 1 - Matching Game

//Traditional Card Matching Game in Javascript/Jquery, HTML, & CSS

<h2> User Stories </h2>
<ol>
<li>As a player, I should be able to click a card and have it reveal its value.</li>
<li>As a player, I should be able to click a second card and have it reveals its value, while the first card stays visible.</li>
<li>As a player, after I select two unmatching cards they should flip back over and hide their value</li>
<li>As a player after I select two matching cards, I should recieve a point.</li>
<li>As a player, I should win the game after correctly matching all of the cards on the screen.</li>
</ol>

<h2> Project 1 Review </h2>
<h4>Here are the outstanding issues I was not able to resolve</h4>
<ol>
<li>The timer at the bottom of the page "refreshes" (but does not reset) every time i click on a card. I tried to use .bind and .one to prevent this from happening, but was not successful. The .bind function is still in my Javascript file 56-58. </li>
<li>If i double click a card quickly, it will not match with itself due to a dblclick funcion in my JS. However, i noticed if i double click slowly, this function does not work and i can't figure out why.</li>
<li>In general, I know my Javascript is messy. Like, really messy. This was how the game made sense to me. Would love to go over how to refactor.
</ol>

<h2>Approach, technologies used, etc</h2>
<ul>
<li>Javascript is hard. Very hard. I knew that I had to keep my game as simple as possible to create a working product in 2 days.</li>
<li>My first main goal was to create as set of divs containing images, and allow those to toggle when clicked. This was relatively easy</li>
<li>My next hurdle was figuring out a system to compare and match cards of the same value. This was extreemly challenging, and the only way i ended up getting it to work was to have my JS compare class names which were hardcoded in the HTML</li>
<li>In general, i know my approach is not the most solid or sound. A goal would be to get all of my images in an array in JS.</li>
</ul>
