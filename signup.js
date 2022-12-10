document.querySelector('#submit-btn').addEventListener('click', (e) => {
    e.preventDefault()
    const name_input = document.querySelector('#name-input').value
    const email_input = document.querySelector('#email-input').value
    const phoneNo_input = document.querySelector('#phn-input').value

    const user = {
        name: name_input,
        email: email_input,
        phoneNo: phoneNo_input
    }

    // AJAX CALL
    const xhr = new XMLHttpRequest()
    const url = `http://localhost:5000/register`

    xhr.open('POST', url)

    // Set the request header
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.onreadystatechange = () => {
        if(xhr.status === 200 && xhr.readyState === 4) {
            console.log(xhr.responseText)
        }
    }

    xhr.send( JSON.stringify(user) )

    
    })