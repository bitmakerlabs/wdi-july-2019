document.addEventListener('DOMContentLoaded', () => {
  // console.log(this);
  const clickBait = document.querySelector('#click-bait');

  // 2. Add an event listener to clickBait and ...
  //    implement the callback with an anonymous function
  clickBait.addEventListener('click', function(e) {
    // console.log('Clickbait clicked');

    e.preventDefault();
    e.stopPropagation();
  });

  // 3. Select the `second-level` element
  const secondLevel = document.querySelector('#second-level');

  // 4. Add an event listener to secondLevel and ...
  //    implement the callback with a function definition
  const handleSecondLevelClick = e => {
    console.log('second level clicked!');
    console.log(e.target);
    console.log(e.currentTarget);
    e.stopPropagation();
  };

  secondLevel.addEventListener('click', handleSecondLevelClick);
  secondLevel.removeEventListener('click', handleSecondLevelClick);

  // 5. Select the `first-level` element
  const firstLevel = document.querySelector('#first-level');

  // 6. Add an event listener to the firstLevel and ...
  //    implement the callback with a function declaration
  function handleFirstLevelClick() {
    console.log('first level is clicked!!!');
  }

  firstLevel.addEventListener('click', handleFirstLevelClick);
});
