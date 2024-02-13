
const OTPinputs = document.querySelectorAll('input')
const button = document.querySelector('button')
window.onload = () => OTPinputs[0].focus()


OTPinputs.forEach((input) => {
    input.addEventListener('input', () => {
        const currentInput = input
        const nextInput = currentInput.nextElementSibling
        if (currentInput.value.length > 1 && currentInput.value.length == 2) {
            currentInput.value = ""
            
        }


        if (nextInput !== null && nextInput.hasAttribute('disabled') && currentInput.value !== "") {
            nextInput.removeAttribute('disabled')
            nextInput.focus()
        }

        if (!OTPinputs[2].disabled && OTPinputs[2].value !== "") {
            button.classList.add("active")
            button.removeAttribute('disabled')
        } 
        else {
            button.classList.remove('active')
            document.getElementById('result').innerText = ''
        }
    })

    input.addEventListener('keyup', (e) => {
        console.log(e);
        if (e.key == "Backspace") {
            if (input.previousElementSibling != null) {
                e.target.value = ""
                e.target.setAttribute("disabled", true)
                input.previousElementSibling.focus()
            }
        }
    })
})
function check() {
    const inp1 = document.getElementById('inp1');
    const inp2 = document.getElementById('inp2');
    const inp3 = document.getElementById('inp3');
    const button = document.querySelector('.next-button')
    document.getElementById('result').classList.remove('wrong')
    if(inp1.value === '2' && inp2.value === '0' && inp3.value === '5') 
    {
        document.getElementById('result').innerText = 'Right answer'
        button.classList.add("active")
        button.removeAttribute('disabled')

    }else if ((inp1.value === '2' && inp2.value === '0') || (inp3.value === '5' && inp1.value === '2') || (inp2.value === '0' && inp3.value === '5')) 
    {
        document.getElementById('result').innerText = 'Two are Correct'
    }
    else if (inp1.value === '2' || inp2.value === '0' || inp3.value === '5') 
    {
        document.getElementById('result').innerText = 'One is Correct'

    }else 
    {
        document.getElementById('result').classList.add('wrong')
        document.getElementById('result').innerText = 'Wrong answer'
    }

}
