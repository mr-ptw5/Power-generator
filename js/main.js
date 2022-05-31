const wordBox = document.querySelector('section h1')
const btn = document.querySelector("button"); // Get the button from the page
// Detect clicks on the button
if (btn) {
    btn.onclick = async function () {
        const res = await fetch(`/api`)
        const data = await res.json()

        bestow(data.superpower, data.url)
    };
}

const take = document.querySelector('#take')
const leave = document.querySelector('#leave')

take.addEventListener("click", () => {
    take.style.display = 'none'
    leave.style.display = 'none'
    document.querySelector('h2').style.display = 'none'
    let remarks = ["COOL", "NEAT"]
    let i = Math.round(Math.random())
    document.querySelector('h3').innerText = remarks[i]
    setTimeout(() => {
        document.querySelector('h3').innerText = ""
    }, 750)
})

leave.addEventListener("click", () => {
    take.style.display = 'none'
    leave.style.display = 'none'
    document.querySelector('h2').style.display = 'none'
    let remarks = ["OK FINE THEN.", "...OK."]
    let i = Math.round(Math.random())
    document.querySelector('h3').innerText = remarks[i]
    setTimeout(() => {
        document.querySelector('h3').innerText = ""
    }, 750)
})


function bestow(superpower, url) {
    const link = document.querySelector('a')
    const snark = document.querySelector('h2')

    link.style.display = 'none'
    snark.style.display = 'none'
    take.style.display = 'none'
    leave.style.display = 'none'
    wordBox.textContent = 'I'
    setTimeout(() => {
        wordBox.textContent = 'GRANT'
        setTimeout(() => {
            wordBox.textContent = 'YOU'
            setTimeout(() => {
                wordBox.textContent = superpower
                link.href = url
                link.style.display = 'block'
                snark.style.display = 'block'
                take.style.display = 'inline'
                leave.style.display = 'inline'
            }, 700)
        }, 250)
    }, 250)
}