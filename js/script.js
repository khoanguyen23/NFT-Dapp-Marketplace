// import Viewer from 'viewerjs';
// Vue.use(VueViewer.default)
// console.log(VueViewer.default)
// var Main = {
//   methods: {
//     toggle() {

//     }
//   },
//   data() {
//     return {
// 			images: [
//                 'src/img/nft_3.avif',
//                 'https://assets.raribleuserdata.com/prod/v1/image/t_image_preview/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1UdDl0TGI5MU00ODhxeWpOWHluZnR6ZlNGSlVyUUFtN0dNRXZzYXFHNDl3VA==',
//               'https://assets.raribleuserdata.com/prod/v1/image/t_image_preview/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1jeWM3dG05c1pCOUpudkxnZWpQVHdkempqTmpETWlSV0NVdmFaQWZwNmNVZw=='
//             ],
//             // images: [
//             //     {
//             //                src:"require('./source/img/')",
//             //           },
//             //            {
//             //                src:'source/img/slider_1.png',
//             //             },
//             //             {
//             //                src:'source/img/nft_3.avif',
//             //             },
//             //              {
//             //                  src:'source/img/nft_4.avif',
//             //           },

//             // ],

//     }
//   }
// }
// var App = Vue.extend(Main)
// new App().$mount('.collection_list')

var imageList = [
    {
      src: "source/img/nft_1.avif",
    },
    {
      src: "source/img/nft_2.avif",
    },
    {
      src: "source/img/nft_3.avif",
    },
    {
      src: "source/img/nft_4.avif",
    },
    {
      src: "source/img/nft_4.avif",
    },
    {
      src: "source/img/nft_4.avif",
    },
    {
      src: "source/img/nft_4.avif",
    },
    {
      src: "source/img/nft_4.avif",
    },
    {
      src: "source/img/nft_4.avif",
    },
    {
      src: "source/img/nft_4.avif",
    },
    {
      src: "source/img/nft_4.avif",
    },
  ];
  function showImage(imageList) {
    const collectionList = document.querySelectorAll(".collection_list");
    collectionList.forEach((collection) => {
      console.log(collection)
      imageList.map((image) => {
        const img = document.createElement("img");
        img.src = image.src;
        collection.appendChild(img);
        console.log(img.src);
      });
    });
  }
  showImage(imageList);
  
   const swiperCardFlex = new Swiper('.card-flex', {
       breakpoints: {
           992: {
               slidesPerView: 3,
           },
           576: {
               slidesPerView: 2.1,
           },
           0: {
               slidesPerView: 1.1,
           }
       },
  
       navigation: {
           nextEl: '.card__explore'
       }
   });
  
   const swiperUserFlex = new Swiper('.users__card-flex', {
       breakpoints: {
           992: {
               slidesPerView: 3,
           },
           576: {
               slidesPerView: 2.1,
           },
           0: {
               slidesPerView: 1.1,
           }
       },
  
       navigation: {
           nextEl: '.user__explore'
       }
   });
  
   const swiperSellers = new Swiper('.top-sellers__swiper', {
       breakpoints: {
           992: {
               slidesPerView: 3,
           },
           768: {
               slidesPerView: 2,
           },
           0: {
               slidesPerView: 1,
           }
       },
  
       navigation: {
           nextEl: '.top-sellers__explore'
       }
   });
  
   let checkbox = document.getElementById('menu-toggle')
  
   checkbox.onclick = () => {
       if (checkbox.checked) {
           document.body.style.overflow = 'hidden';
       } else{
           document.body.style.overflow = 'visible';
       }
   }
  
   function footerOpen(count) {
       switch(count){
           case 1:
               if(document.querySelector('.market-place').classList[2]){
                   document.querySelector('.market-place').classList.remove('open')
               } else{
                   document.querySelector('.market-place').classList.add('open')
               }
               break
           case 2:
               if(document.querySelector('.collectibles').classList[2]){
                   document.querySelector('.collectibles').classList.remove('open')
               } else{
                   document.querySelector('.collectibles').classList.add('open')
               }
               break
           case 3:
               if(document.querySelector('.support').classList[2]){
                   document.querySelector('.support').classList.remove('open')
               } else{
                   document.querySelector('.support').classList.add('open')
               }
               break
           case 4:
               if(document.querySelector('.legal').classList[2]){
                   document.querySelector('.legal').classList.remove('open')
               } else{
                   document.querySelector('.legal').classList.add('open')
               }
               break
           case 5:
               if(document.querySelector('.follow').classList[2]){
                   document.querySelector('.follow').classList.remove('open')
               } else{
                   document.querySelector('.follow').classList.add('open')
               }
               break
       }
  
   }
  
   window.addEventListener('scroll', function() {
       if (window.pageYOffset > 0) {document.querySelector('header').classList.add('scrolled')}
       else {document.querySelector('header').classList.remove('scrolled')}
     });
  
   setInterval(() => counters(), 1000);
  
   function counters(){
       let hour
       let minutes
       let second
  
       let countersArr = document.querySelectorAll('.seller-card__counter')
  
       for (let counter of countersArr) {
           second = counter.children[2].firstElementChild.innerHTML
           minutes = counter.children[1].firstElementChild.innerHTML
           hour = counter.children[0].firstElementChild.innerHTML
  
           if (second - 1 >= 0) {
               counter.children[2].firstElementChild.innerHTML = second - 1
           } else if (minutes - 1 >= 0) {
               counter.children[2].firstElementChild.innerHTML = 60
               counter.children[1].firstElementChild.innerHTML = minutes - 1
           } else {
               counter.children[2].firstElementChild.innerHTML = 60
               counter.children[1].firstElementChild.innerHTML = 60
               counter.children[0].firstElementChild.innerHTML = hours - 1
           }
       }
   }
  
   function collectionBrandActive() {
       document.querySelector('.grid__brand').classList.add('active')
       document.querySelector('.grid__art').classList.remove('active')
  
       document.querySelector('.collection__brand').classList.add('active')
       document.querySelector('.collection__art').classList.remove('active')
   }
  
   function collectionArtActive() {
       document.querySelector('.grid__art').classList.add('active')
       document.querySelector('.grid__brand').classList.remove('active')
  
       document.querySelector('.collection__art').classList.add('active')
       document.querySelector('.collection__brand').classList.remove('active')
   }
  
   function ButtonActive(buttonNum) {
       let gridButton = document.querySelector('.collection__grid')
  
       for (let i = 0; i < 8; i++) {
           if (gridButton.children[i].firstElementChild.classList[2] = 'active') {
               gridButton.children[i].firstElementChild.classList.remove('active')
               document.querySelector('.collection__img').children[i].classList.remove('active')
           }
       }
  
       gridButton.children[buttonNum].firstElementChild.classList.add('active')
       document.querySelector('.collection__img').children[buttonNum].classList.add('active')
  
       document.querySelector('collection__img')
   }
  
  const imgs = document.getElementById("imgs");
  const img = document.querySelectorAll("#imgs img");
  
  let idx = 0;
  
  let interval = setInterval(run, 2000);
  
  function run() {
    idx++;
    changeImage();
  }
  
  function changeImage() {
    if (idx > img.length - 1) {
      idx = 0;
    } else if (idx < 0) {
      idx = img.length - 1;
    }
  
    imgs.style.transform = `translateX(${-idx * 480}px)`;
  }
  
  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
  }
  
  const inputImg = document.querySelector('#input-img')
  
  inputImg.addEventListener('change', (e) => {
      let file = e.target.files[0]
  
      if (!file) return
  
      let img = document.createElement('img')
      img.src = URL.createObjectURL(file)
  
      document.querySelector('.preview').appendChild(img)
  })
  const inputAvatar = document.querySelector('#input-avatar')
  
  inputAvatar.addEventListener('change', (e) => {
      let file = e.target.files[0]
  
      if (!file) return
  
      let img = document.createElement('img')
      img.src = URL.createObjectURL(file)
  
      document.querySelector('.preview1').appendChild(img)
  })

    //Tabs
    function tabs(bntArrSelector, contentArrSelector, activeBtnSelector, activeContentSelector) {
        const bntArr = document.querySelectorAll(bntArrSelector),
              contentArr = document.querySelectorAll(contentArrSelector),
              btnActiveSelector = activeBtnSelector,
              contentActiveSelector = activeContentSelector;
      
        bntArr.forEach((item, i) => {
            item.addEventListener('click', () => {
                document.querySelector(`.${btnActiveSelector}`).classList.remove(btnActiveSelector);
                item.classList.add(btnActiveSelector);
                document.querySelector(`.${contentActiveSelector}`).classList.remove(contentActiveSelector);
                contentArr[i].classList.add(contentActiveSelector);
            });
        });
      
      }
      
      
      tabs('.marketplace__tab', '.marketplace__content', 'marketplace__tab--active', 'marketplace__content--active');
      
      
      //Mobile menu
      document.querySelector('.mobile-menu-btn').addEventListener('click', ()=>{
        document.querySelector('.mobile-menu-btn').classList.toggle('open');
        document.querySelector('.mobile-menu').classList.toggle('open');
        document.querySelector('body').classList.toggle('no-scroll');
      });
      