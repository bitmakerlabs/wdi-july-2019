document.addEventListener('DOMContentLoaded', function() {
  const robotLinks = document.querySelectorAll('.robots__robot a');
  const robotBox = document.querySelector('.robots__box__details');

  robotLinks.forEach(robotLink => {
    robotLink.addEventListener('click', function(e) {
      e.preventDefault();
      axios
        .get(robotLink.href, { headers: { 'X-Requested-With': 'XMLHttpRequest' } })
        .then(response => response.data)
        // .then(function(response) {
        //   const { data } = response;
        //   return data
        // })
        .then(data => {
          // console.log(data);
          console.log({ data });

          const nameTag = document.createElement('h3');
          nameTag.innerText = data.name;
          const modelTag = document.createElement('p');
          modelTag.innerText = data.model_number;
          robotBox.innerHTML = '';
          robotBox.appendChild(nameTag);
          robotBox.appendChild(modelTag);
        })
        .catch(error => {
          console.log(error);
        });
    });
  });
});
