const form = document.querySelector('form')
const input = document.querySelectorAll('.inputType')

form.addEventListener('submit', (e) => {

    input.forEach((element) => {
        if (element.value === '' ) {
            e.preventDefault()

            // Style the error image
            const imgError = document.querySelector(`#${element.id}Container img`)
            imgError.style.display = 'flex'

            // Style the error message
            const errorMessage = document.querySelector(`#${element.id}Container ~ .error__message__empty`)
            errorMessage.style.display = 'flex'
            errorMessage.style.justifyContent = 'flex-end'

            // Style the border of the container
            const container = document.querySelector(`#${element.id}Container`)
            container.style.border = '1px solid red'

        } else if (element.value !== '') {

            // Remove the error message if they are good
            const imgError = document.querySelector(`#${element.id}Container img`)
            imgError.style.display = 'none'

            const errorMessage = document.querySelector(`#${element.id}Container ~ .error__message__empty`)
            errorMessage.style.display = 'none'

            const container = document.querySelector(`#${element.id}Container`)
            container.style.border = 'none'


        }
    })

})
