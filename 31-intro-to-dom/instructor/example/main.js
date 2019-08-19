
document.addEventListener('DOMContentLoaded', () => {
  let title = document.querySelector('h1#page-title');
  title.style.backgroundColor = 'red';

  // Removing an element, must find parent first
  let h2 = document.querySelector('h2');
  let main = document.querySelector('main');
  let removedChild = main.removeChild(h2);

  // Give element a new position (end of parent)
  main.appendChild(title);

  // Put it somewhere else
  let form = document.querySelector('form');
  main.insertBefore(form, title);

  // Creating Elements
  let todoList = document.querySelector("#todo");

  for(let i=0; i<10; i++) {
    let feedCora = document.createElement('li');
    feedCora.innerHTML = "<strong>Feed Cora</strong>";
    feedCora.className = "item cat";
    todoList.appendChild(feedCora);
  }

  let feedFred = document.createElement('li');
  feedFred.innerText = "Feed Fred";
  feedFred.classList.add("item");
  feedFred.classList.add("food");
  let items = document.querySelectorAll('.item');
  todoList.insertBefore(feedFred, items[2]);

  // Delete an Item
  let image = document.querySelector('img');
  let removedImage = main.removeChild(image);

  // Remove specific list item
  let feedCoras = document.querySelectorAll('.item.cat');
  let thirdFeedCora = feedCoras[2];
  todoList.removeChild(thirdFeedCora);
})
