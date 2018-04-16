// document.addEventListener('DOMContentLoaded', () => {
//
// const cats = document.querySelector('#cats');
//
// cat.innerHTML= '';
//
// const createCat = function(name, food, imageSrc, container){
//
//
//   });
//   const ulItem = document.createElement('ul');
//
//   const listItem = document.createElement('li');
//
//   const catName = document.createElement('li');
//   catName.textContent = 'Name: Steve';
//
//   const catFood = document.createElement('li');
//
//   catFood.textContent = 'Favourite food: beans on toast';
//
//   const catImage = document.createElement('img');
//   catImage.src = 'http://littlefun.org/uploads/521d1a62c8561116e1000000_736.jpg';
//   catImage.width = 500;
//
//   cats.appendChild(ulItem);
//   ulItem.appendChild(catName);
//   ulItem.appendChild(catFood);
//   ulItem.appendChild(listItem);
//   listItem.appendChild(catImage);


// });

//refactored above code, turned it into a method to add cats to the DOM
document.addEventListener('DOMContentLoaded', () => {

  const cats = document.querySelector('#cats');
  cats.innerHTML = '';

  const createNewCat = function (cat) {

    const ulNewCatItem = document.createElement('ul');

    const liCatName = document.createElement('li');
    liCatName.textContent = `Name: ${cat[0]}`;

    const liCatFavouriteFood = document.createElement('li');
    liCatFavouriteFood.textContent = `Favourite food: ${cat[1]}`;

    const liNewCatImage = document.createElement('li');
    const image = document.createElement('img');
    image.width = 500;
    image.src = cat[2];

    cats.appendChild(ulNewCatItem);
    ulNewCatItem.appendChild(liCatName);
    ulNewCatItem.appendChild(liCatFavouriteFood);
    ulNewCatItem.appendChild(liNewCatImage);
    liNewCatImage.appendChild(image);
  }

const boba = ['Boba', 'Sock fluff', 'http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg']
const barnaby = ['Barnaby', 'Tuna', 'https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg']
const max = ['Max', 'Whiskas Temptations', 'http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg']
const superCat = ['SuperCat', 'Fish and Chips', 'http://littlefun.org/uploads/521d1a62c8561116e1000000_736.jpg']

const catArray = [superCat, boba, max, barnaby];

for (let i = 0; i < catArray.length; i++) {
  createNewCat(catArray[i]);
}

});
