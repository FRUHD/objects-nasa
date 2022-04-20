//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    const choice = document.querySelector('input').value
    console.log(choice)  // log to make sure we're getting the date
  
    const url = `https://api.nasa.gov/planetary/apod?api_key=ZH0CTeMZSuYqX9kfVXgbWXNyIEiBe3jP2p0fMFrr&date=${choice}`

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
          if (data.media_type === 'image') {
              document.querySelector('iframe').style.display = 'none'
              document.querySelector('img').style.display = ''
              document.querySelector('img').src = data.hdurl
          } else if (data.media_type === 'video') {
              document.querySelector('img').style.display = 'none'
              document.querySelector('iframe').style.display = ''
              document.querySelector('iframe').src = data.url
          }
  
          document.querySelector('h2').innerText = data.title
          document.querySelector('.desc').innerText = data.explanation
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
  }
  
  
  
  
  
  
  
  
  //PUSH: Make the NASA API handle all the data types including video