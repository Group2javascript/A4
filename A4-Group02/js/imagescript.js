const loadBtn = document.getElementById('imgBtn');
const imageContainer = document.getElementById('img-container');

    loadBtn.addEventListener('click', () => {
      fetchRandomImage();
    });

    function fetchRandomImage() {
      const imageKey = 'IbCNdwXDyBA3iKgkxfVHpZG4JNdL4hn0pcOT808i';  
      const imageUrl = `https://api.nasa.gov/planetary/apod?api_key=${imageKey}`;

      fetch(imageUrl)
        .then(response => response.json())
        .then(data => {
          if (data.media_type === 'image') {
            const imageDiv = document.createElement('div');
            imageDiv.innerHTML = `
              <h2>${data.title}</h2>
              <img src="${data.url}" alt="${data.title}">
              <p>${data.explanation}</p>
            `;
            imageContainer.innerHTML = '';
            imageContainer.appendChild(imageDiv);
          } else {
            imageContainer.innerHTML = '<p>Sorry!!! No Images available right now!!!! </p>';
          }
        })
        .catch(error => {
          console.error('Oops! Something went wrong! Unbale to fetch image.....', error);
        });
    }
