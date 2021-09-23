const password = document.getElementById('password')
const background = document.getElementById('background')


password.addEventListener('input', (e) => {
    const input = e.target.value
    const length = input.length

    const blVal = 25 - length * 2
    background.style.filter = `blur(${blVal}px)`
})



