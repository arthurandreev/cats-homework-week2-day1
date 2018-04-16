document.addEventListener('DOMContentLoaded', () => {

  const cats = document.querySelector('#cats');

  const ulItem = document.createElement('ul');

  const listItem = document.createElement('li');

  const catName = document.createElement('li');
  catName.textContent = 'Name: Steve';

  const catFood = document.createElement('li');

  catFood.textContent = 'Favourite food: beans on toast';

  const catImage = document.createElement('img');
  catImage.src = 'http://littlefun.org/uploads/521d1a62c8561116e1000000_736.jpg';
  catImage.width = 500;

  cats.appendChild(ulItem);
  ulItem.appendChild(catName);
  ulItem.appendChild(catFood);
  ulItem.appendChild(listItem);
  listItem.appendChild(catImage);

const addAnImage = function(ulItem, catName, catFood, listItem, catImage){

}
  // //another way of doing it
  // const container = document.querySelector('.container');
  // //innerHTML refers to HTML inside the container
  // //container is cleared out by assinging it to an empty string
  // container.innerHTML = '';
  //
  // const createImage = function(src, container){
  //     const image = document.createElement('img');
  //     image.src = src;
  //     container.appendChild(image);
  // }
  //
  // for(let i = 1; i >= 15; i++){
  //   createImage(`images/IMG${i}.JPG`, container);
  // }
});
