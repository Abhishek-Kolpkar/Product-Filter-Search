// products list
let products = {
  data: [
    {
      productName: "Regular White T-shirt",
      category: "Topwear",
      price: "30",
      image: "Images/white-T-shirt.jpg",
    },
    {
      productName: "Beigr Short Skirt",
      category: "Bottomwear",
      price: "49",
      image: "Images/short-skirt.jpg",
    },
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "99",
      image: "Images/sporty-smartwatch.jpg",
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image: "Images/knitted-top.jpg",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image: "Images/black-leather-jacket.jpg",
    },
    {
      productName: "Stylish Pink Trousers",
      category: "Bottomwear",
      price: "89",
      image: "Images/pink-trousers.jpg",
    },
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: "189",
      image: "Images/brown-jacket.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "Images/comfy-grey-pants.jpg",
    },
  ],
};

for (let i of products.data) {
  console.log(i);
  // create card
  let card = document.createElement("div");
  // card should have category
  card.classList.add("card", i.category, "hide");
  // image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  // img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  // container
  let container = document.createElement("div");
  container.classList.add("container");
  // product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);

  // price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}