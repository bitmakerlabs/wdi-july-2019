document.addEventListener('DOMContentLoaded', function () {

  let robotLinks = document.querySelectorAll('.robots__robot a.robot-name');

  robotLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      axios.get(link.href, { headers: { 'X-Requested-With' : 'XMLHttpRequest' } })
        .then(response => {
          let data = response.data;
          let pTag = document.createElement('p');
          pTag.innerText = data.name;
          let robotBox = document.querySelector('.robots__box__details');
          robotBox.innerHTML = '';
          robotBox.appendChild(pTag);
        })
        .catch(error => {
          console.error(error);
        });
    })
  })

  handleNewClick();
});

function handleNewClick() {
  let newLink = document.querySelector('.new-robot-link');

  newLink.addEventListener('click', e => {
    e.preventDefault(); // prevent the link from navigating to the next page

    axios.get(newLink.href, { headers: { 'X-Requested-With' : 'XMLHttpRequest' } })
      .then(response => {
        // select the empty div where we'll add the form
        let formBox = document.querySelector('.robots__container__form');
        formBox.innerHTML = response.data;

        // setup the event listener for the form submission
        handleFormSubmit();
      })
      .catch(error => {
        console.error(error);
      })
  });

  // newLink.addEventListener('click', function (e) {
  //   e.preventDefault();
  //   console.log('CLICKED');
  // });
}

function handleFormSubmit() {
  let form = document.querySelector('.robot-form');

  // listen for a submission event on the form instead of click
  form.addEventListener('submit', e => {
    e.preventDefault(); // stop the form from submitting

    axios.post(form.action, {
      // the form data that we're sending to the server
      name: form.querySelector('#robot-name').value,
      model_number: form.querySelector('input[name=model_number]').value,
      address: form.querySelector('input[name=address]').value
    }, { headers: {
      // headers for the CSRF token, and to inform Django that this is an ajax request
      'X-Requested-With' : 'XMLHttpRequest',
      "X-CSRFToken" : form.querySelector('input[name="csrfmiddlewaretoken"]').value,
    }})
      .then(response => {
        console.log(response);

        // find the list of robots

        // create a new robot list item

        // append the new robot to the list
      })
      .catch(error => {
        console.error(error);
      })
  });
}
