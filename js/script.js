const IconService = window["icon-sdk-js"].default;
const httpProvider = new IconService.HttpProvider(
  "https://sejong.net.solidwallet.io/api/v3"
);
const iconService = new IconService(httpProvider);

//NOTE cho nhom lam WEB front-end
var myAddress; //Địa chỉ ví của user
var adminAddress = "hx92d7c1f36674f5c5f93aab101b508daaa621b22d"; // Địa chỉ ví của tao
var nameUser; // Tên User (String)
var avatar; // Ảnh đại diện (String)
var allPublicNFTs; // Tất cả ảnh NFT public (kiểu mảng chuôi ["anh1.png", "anh2.png"] )
const listItems = [];
const marketplace = document.querySelector("#content1");
function showAll() {
  allPublicNFTs.map((publicNFT) => {
    const img = document.createElement("img");
    img.src = publicNFT;
    console.log(img);
    const div = document.createElement("div");
    div.setAttribute("class", "marketplace-card");
    listItems.push(div);
    div.innerHTML = `
        <img class="marketplace-card__img" src= "${img}" >
        <div class="marketplace-card__title">
        <div class="marketplace-card__title-info">
          <p class="marketplace-card__title-name">Crazy Apes</p>
          <p class="marketplace-card__title-author">
            Created by <a href="#">Rick</a>
          </p>
        </div>
        <a class="marketplace-card__title-author-link" href="#">
          <img
            class="marketplace-card__title-autorimg"
            src="source/img/seller_ava1.png"
            alt="Rick"
          />
        </a>
      </div>
      <ul class="marketplace-card__info">
        <li class="marketplace-info__item">
          <p class="marketplace-info__item-title">Current Bid</p>
          <p class="marketplace-info__item-data">1.90 ETH</p>
        </li>
        <li class="marketplace-info__item">
          <p class="marketplace-info__item-title">Ending In</p>
          
          <div
            class="marketplace-info__item-data seller-card__counter"
          >
            <div class="counter__hours counter__item">
              <h3>18</h3>
              <span>Hours</span>
            </div>

            <div class="counter__mins counter__item">
              <h3>25</h3>
              <span>Mins</span>
            </div>

            <div class="counter__secs counter__item">
              <h3>44</h3>
              <span>Secs</span>
            </div>
          </div>
        </li>
      </ul>
        `;
    marketplace.appendChild(div);
    console.log(marketplace);
  });
}

//connect wallet

var contractAddress = "cx7f920f344cc41bc6d3e957c01845a794e61e721d";
function connectWallet() {
  const connectWalletEvent = new CustomEvent("ICONEX_RELAY_REQUEST", {
    detail: {
      type: "REQUEST_ADDRESS",
    },
  });
  window.dispatchEvent(connectWalletEvent);

  const eventHandler = (event) => {
    const { type, payload } = event.detail;
    if (type === "RESPONSE_ADDRESS") {
      myAddress = payload;
      getName();
    }
  };
  window.addEventListener("ICONEX_RELAY_RESPONSE", eventHandler);
}

//icx_sendTransaction

function setName() {
  const setNameEvent = new CustomEvent("ICONEX_RELAY_REQUEST", {
    detail: {
      type: "REQUEST_JSON-RPC",
      payload: {
        jsonrpc: "2.0",
        method: "icx_sendTransaction",
        id: 6339,
        params: {
          nid: "0x53",
          timestamp: `0x${(new Date().getTime() * 1000).toString(16)}`,
          version: "0x3",
          from: myAddress, // TX sender address
          stepLimit: "2500000000",
          to: contractAddress, // SCORE address
          dataType: "call",
          data: {
            method: "setName", // SCORE external function
            params: {
              _user: myAddress,
              _name: document.getElementById("name").value,
            },
          },
        },
      },
    },
  });
  window.dispatchEvent(setNameEvent);
  const eventHandler = (event) => {
    window.removeEventListener("ICONEX_RELAY_RESPONSE", eventHandler);

    const { type, payload } = event.detail;
    if (type === "RESPONSE_JSON-RPC") {
      //
    } else if (type === "CANCEL_JSON-RPC") {
      console.error("User cancelled JSON-RPC request");
    }
  };
  window.addEventListener("ICONEX_RELAY_RESPONSE", eventHandler);
}

function setAvatar() {
  const setAvatarEvent = new CustomEvent("ICONEX_RELAY_REQUEST", {
    detail: {
      type: "REQUEST_JSON-RPC",
      payload: {
        jsonrpc: "2.0",
        method: "icx_sendTransaction",
        id: 6339,
        params: {
          nid: "0x53",
          timestamp: `0x${(new Date().getTime() * 1000).toString(16)}`,
          version: "0x3",
          from: myAddress, // TX sender address
          // value: "0xde0b6b3a7640000",
          stepLimit: "2500000000",
          to: contractAddress, // SCORE address
          dataType: "call",
          data: {
            method: "setAvatar", // SCORE external function
            params: {
              _user: myAddress,
              _img: document.getElementById("avatar").value,
            },
          },
        },
      },
    },
  });
  window.dispatchEvent(setAvatarEvent);
  const eventHandler = (event) => {
    window.removeEventListener("ICONEX_RELAY_RESPONSE", eventHandler);

    const { type, payload } = event.detail;
    if (type === "RESPONSE_JSON-RPC") {
      //
    } else if (type === "CANCEL_JSON-RPC") {
      console.error("User cancelled JSON-RPC request");
    }
  };
  window.addEventListener("ICONEX_RELAY_RESPONSE", eventHandler);
}

//icxcall

function getName() {
  const getNameEvent = new CustomEvent("ICONEX_RELAY_REQUEST", {
    detail: {
      type: "REQUEST_JSON-RPC",
      payload: {
        jsonrpc: "2.0",
        method: "icx_call",
        id: 6339,
        params: {
          from: myAddress, // TX sender address
          to: contractAddress, // SCORE address
          dataType: "call",
          data: {
            method: "getName", // SCORE external function
            params: { _user: myAddress },
          },
        },
      },
    },
  });
  window.dispatchEvent(getNameEvent);
  const eventHandler = (event) => {
    window.removeEventListener("ICONEX_RELAY_RESPONSE", eventHandler);

    const { type, payload } = event.detail;
    if (type === "RESPONSE_JSON-RPC") {
      nameUser = payload.result;
    } else if (type === "CANCEL_JSON-RPC") {
      console.error("User cancelled JSON-RPC request");
    }
  };
  window.addEventListener("ICONEX_RELAY_RESPONSE", eventHandler);
}

function getAvatar() {
  const getAvatarEvent = new CustomEvent("ICONEX_RELAY_REQUEST", {
    detail: {
      type: "REQUEST_JSON-RPC",
      payload: {
        jsonrpc: "2.0",
        method: "icx_call",
        id: 6339,
        params: {
          from: myAddress, // TX sender address
          to: contractAddress, // SCORE address
          dataType: "call",
          data: {
            method: "getAvatar", // SCORE external function
            params: { _user: myAddress },
          },
        },
      },
    },
  });
  window.dispatchEvent(getAvatarEvent);
  const eventHandler = (event) => {
    window.removeEventListener("ICONEX_RELAY_RESPONSE", eventHandler);
    const { type, payload } = event.detail;
    if (type === "RESPONSE_JSON-RPC") {
      avatar = payload.result;
    } else if (type === "CANCEL_JSON-RPC") {
      console.error("User cancelled JSON-RPC request");
    }
  };
  window.addEventListener("ICONEX_RELAY_RESPONSE", eventHandler);
}

function getPublicNFTs() {
    
  const getNFTsEvent = new CustomEvent('ICONEX_RELAY_REQUEST', {
      detail: {
          type: 'REQUEST_JSON-RPC',
          payload: {
              jsonrpc: "2.0",
              method: "icx_call",
              id: 6329,
              params: {
                  from: adminAddress, // TX sender address
                  to: contractAddress,   // SCORE address
                  dataType: "call",
                  data: {
                      method: "getPublicNFTs", // SCORE external function
                      params: {}
                  }
              }
          }
      }
  });
  
  window.dispatchEvent(getNFTsEvent);
  const eventHandler = async event => {
      window.removeEventListener('ICONEX_RELAY_RESPONSE', eventHandler);
      const { type, payload } = event.detail;
      if (type === 'RESPONSE_JSON-RPC') {
      

          console.log(payload);
          allPublicNFTs = payload.result;
          }
      else if (type === 'CANCEL_JSON-RPC') {
          console.error('User cancelled JSON-RPC request');
      }
  }
  window.addEventListener('ICONEX_RELAY_RESPONSE', eventHandler);
}



function openContent(evt, contents) {
  var i, marketplaceContent, marketplaceTab;
  marketplaceContent = document.getElementsByClassName("marketplace__content");
  console.log(marketplaceContent);

  for (i = 0; i < marketplaceContent.length; i++) {
    console.log(marketplaceContent[i]);
    marketplaceContent[i].style.display = "none";
  }
  marketplaceTab = document.getElementsByClassName("marketplace__tab");
  for (i = 0; i < marketplaceTab.length; i++) {
    marketplaceTab[i].className = marketplaceTab[i].className.replace(
      " active",
      ""
    );
  }
  document.getElementById(contents).style.display = "grid";
  evt.currentTarget.className += " active";
}

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
    console.log(collection);
    imageList.map((image) => {
      const img = document.createElement("img");
      img.src = image.src;
      collection.appendChild(img);
      console.log(img.src);
    });
  });
}
showImage(imageList);
