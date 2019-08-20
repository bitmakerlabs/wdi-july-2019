document.addEventListener('DOMContentLoaded', function() {
  // Function scope

  let count = 0;
  const colors = ['tomato', 'azure', 'green', 'orange', 'purple', 'chartreuse', 'gold', 'fuschia'];

  const container = document.querySelector('#container'),
    boxMaker = document.querySelector('#box-maker');

  container.addEventListener('click', function(e) {
    console.log('container clicked');
    const inner = e.target.innerHTML;
    // console.log(inner);
    if (inner % 2 === 0) {
      // console.log('even');
      e.target.remove();
    } else {
      // console.log('odd');
    }
    // if (e.target.classList.contains('circle')) {
    //   console.log(e.target);
    // }
  });

  boxMaker.addEventListener('click', function() {
    const x = Math.ceil(Math.random() * 400),
      y = Math.ceil(Math.random() * 200),
      c = Math.ceil(Math.random() * 7);

    const circle = document.createElement('div');

    circle.className = 'circle';

    circle.style.top = y + 'px';
    circle.style.left = x + 'px';
    circle.style.backgroundColor = colors[c];

    circle.innerHTML = count++;

    container.append(circle);

    // circle.addEventListener('click', function(e) {
    //   console.log(e);
    //   e.target.remove();
    // });

    console.log('link was clicked');
  });
});

// BAD

// const circles = document.querySelectorAll('.circle');

// circles.forEach(function(circle) {
//   circle.addEventListener('click', function(e) {
//     console.log('circle is clicked');
//     console.log(e);

//     e.target.remove();
//   });
// });
