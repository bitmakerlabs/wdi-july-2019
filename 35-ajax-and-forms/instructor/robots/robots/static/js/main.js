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
    e.preventDefault();

    axios.get(newLink.href, { headers: { 'X-Requested-With' : 'XMLHttpRequest' } })
      .then(response => {
        let formBox = document.querySelector('.robots__container__form');
        formBox.innerHTML = response.data;
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

  form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(form);

    axios.post(form.action, {
      name: form.querySelector('#robot-name').value,
      model_number: form.querySelector('input[name=model_number]').value,
      address: form.querySelector('input[name=address]').value
    }, { headers: { 'X-Requested-With' : 'XMLHttpRequest' }})
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      })
  });
}
