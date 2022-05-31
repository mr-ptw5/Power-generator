/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/
console.log('testing')
const btn = document.querySelector("button"); // Get the button from the page
// Detect clicks on the button
if (btn) {
  btn.onclick = async function() {
    const res = await fetch(`/api`)
    const data = await res.json()
    
    console.log('testing!')
    document.querySelector('h2').textContent = data.superpower
    const link = document.querySelector('a')
    link.href = data.url
    link.style.display = 'inline'
  };
}