const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const galleryItemListEl = document.querySelector('.gallery')

// const imagesListEl = images.map(img => {

//   const imageEl = document.createElement('img');
//   imageEl.classList.add('gallery-img');
//   imageEl.src = img.url;
//   imageEl.alt = img.alt;

//   const navItemEl = document.createElement('li');
//   navItemEl.classList.add('gallery-item');
//   navItemEl.append(imageEl);

//   galleryItemListEl.append(navItemEl);

// });


const galleryItemListEl = document.querySelector('.gallery');

const galleryItemsEl = ({ url, alt }) =>
  `<li><img src="${url}" alt="${alt}" width = 300 height = 200></li>`;

const galleryMarkup = images.reduce( 
  (acc, item) => acc + galleryItemsEl(item),
  []
);

galleryItemListEl.insertAdjacentHTML('afterbegin', galleryMarkup);

