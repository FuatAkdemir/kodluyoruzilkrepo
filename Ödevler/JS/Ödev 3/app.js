
const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

let koreaMenu = menu.filter(function(item){
  if(item["category"] == "Korea"){
    return item;
  }
});

let japanMenu = menu.filter(function(item){
  if(item["category"] == "Japan"){
    return item;
  }
});

let chinaMenu = menu.filter(function(item){
  if(item["category"] == "China"){
    return item;
  }
});

let sectionCenter = document.getElementById("section-center");
let btnContainer = document.getElementById("btn-container");
let allButton = document.createElement("BUTTON");
let koreaButton = document.createElement("BUTTON");
let japanButton = document.createElement("BUTTON");
let chinaButton = document.createElement("BUTTON");

allButton.innerHTML = "All";
koreaButton.innerHTML = "Korea";
japanButton.innerHTML = "Japan";
chinaButton.innerHTML = "China";

let buttons = [allButton, koreaButton, japanButton, chinaButton];

for(let i in buttons){
  buttons[i].classList.add("buttons");
  btnContainer.appendChild(buttons[i]);
  buttons[i].addEventListener("click", function(){
    
    clear();
    
    if(this.innerText=="All"){
      showMenu(menu);
    }
    else if(this.innerText=="Korea"){
      showMenu(koreaMenu);
    }    
    else if(this.innerText=="Japan"){
      showMenu(japanMenu);
    }
    else{
      showMenu(chinaMenu);
    }

  });
}

showMenu(menu);

function clear(){
  while (sectionCenter.hasChildNodes()){  
    sectionCenter.removeChild(sectionCenter.firstChild);
  }
}

function showMenu(menu){
  for(let i in menu){

    let menuItems = document.createElement("div");
    menuItems.classList.add("menu-items");
    menuItems.classList.add("col-lg-6");
    menuItems.classList.add("col-sm-12");

    let image = document.createElement("img");
    image.src = menu[i].img;
    image.alt = menu[i].title;
    image.classList.add("photo");

    let menuInfo = document.createElement("div");
    menuInfo.classList.add("menu-info");

    let menuTitle = document.createElement("div");
    menuTitle.classList.add("menu-title");

    let title = document.createElement("h4");
    title.innerText = menu[i].title;

    let price = document.createElement("h4");
    price.innerText = menu[i].price;
    price.classList.add("price");

    menuTitle.appendChild(title);
    menuTitle.appendChild(price);
    let menuText = document.createElement("div");
    menuText.classList.add("menu-text");
    menuText.innerText = menu[i].desc

    menuInfo.appendChild(menuTitle);
    menuInfo.appendChild(menuText);
    menuItems.appendChild(image);
    menuItems.appendChild(menuInfo);

    sectionCenter.appendChild(menuItems);

  }

}



