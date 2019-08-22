window.addEventListener('DOMContentLoaded', function () {
  // --------------------------------------------------
  // INSTRUCTIONS
  // --------------------------------------------------
  // GOALS:
  // - 1. Allow users to fetch and display monster data.
  // - 2. Allow users to submit new monster data.
  //
  // STRETCH GOALS:
  // - 3. Prevent users from submitting duplicate monsters.
  // - 4. Display an error message if a given request fails.
  // - 5. Automatically display newly created monster data.

  // --------------------------------------------------
  // 1. Allow users to fetch and display monster data.
  // --------------------------------------------------
  // We start by capturing references to our 'Get Monsters' button, as well as
  // the 'Monster Data' element that will display the monster data.
  const getMonstersButton = document.getElementById('get_monsters');
  const monsterDataElem = document.getElementById('monster_data');

  // Then we attach an event listener to the 'Get Monsters' button. The function
  // that we attach will be invoked each time the button is clicked.
  getMonstersButton.addEventListener('click', function() {

    // When the 'Get Monsters' button is clicked, we use the Axios library to
    // make a GET request against the Monsters API. The `get()` method returns a
    // Promise, which we capture in a new variable called `request`.
    const request = axios.get('https://bitmaker-monsters-api.herokuapp.com');

    // Since network requests are asynchronous, we can't access the monster data
    // directly. However, we can use our Promise's `then()` method to tell our
    // program what to do *when* the monster data is available. We do this by
    // passing a function, which will be invoked when the API returns a response
    // (ie. the monster data).
    request.then(function(response) {

      // When we receive a response, we'll complete the following steps:
      // Create a new HTML element and store it in a variable called `dataElem`
      const dataElem = document.createElement('span');

      // Set the `innerHTML` property of the element equal to the response
      // data (ie. the monster data).
      dataElem.innerHTML = response.data;

      // Clear out the contents of our monster data container, which we defined
      // above.
      monsterDataElem.innerHTML = '';

      // Add the newly created `dataElem` to the document by appending it to our
      // `monsterDataElem`.
      monsterDataElem.appendChild(dataElem);

      // Hooray, we've successfully fetch and displayed the monster data!
    });
  });

  // --------------------------------------------------
  // 2. Allow users to submit new monster data.
  // --------------------------------------------------
  // Like in Goal #1, we start by capturing a reference to an HTML element. This
  // time, it's the 'Post Monster' button.
  const postMonsterButton = document.getElementById('post_monster');

  // Then we register an event listener against the 'Post Monster' button. The
  // 'handler' function will be called each time the 'Post Monster' button is
  // clicked.
  postMonsterButton.addEventListener('click', function() {

    // When the 'Post Monster' button is clicked we create a new object of
    // monster data, capturing it in the `myMonster` variable.
    const myMonster = {
      name: 'Garou',
      home: '',
      creepiness: 100,
    };

    // Then we use Axios' `post()` method to send our data to the Monsters API.
    // Notice that we're making the request to the `/monsters.json` endpoint.
    // This is because the Monster API will only accept JSON formatted data at
    // the route (eg. sending our data to '/monsters' or '/' would cause the
    // request to fail).
    axios.post('https://bitmaker-monsters-api.herokuapp.com/monsters.json', { monster: myMonster })
      .then(function() {

        // Just like the `get()` method, `post()` returns a Promise. Here we use
        // the `then()` method to log out a message if our POST request is
        // successful.
        console.log('__ SUCCESSFULLY CREATED MONSTER');
      })
      .catch(function() {

        // We also use the `catch()` method to print an error if our POST
        // request fails.
        console.error('__ FAILED TO CREATE MONSTER');
      });

    // Hooray, we've successfully posted our new monster data! To confirm, we
    // can click on the 'Post Monster' button, then the 'Get Monsters' button.
    // If everything worked as expected, we should see our new monster data.
  });
});
