let products = [
    {
        name: 'Pho',
        title: 'Day la mon an co truyen cua Ha Noi va Viet Nam',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './Imagine/foodlogo.png'
    },
    {
        name: 'Bun rieu',
        title: 'Day la mon an tuyet voi va rat thich hop de di an voi nguoi yeu',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './Imagine/foodlogo.png'
    },
    {
        name: 'Banh da cua',
        title: 'Day la mot mon sieu ngon cua HaiPhong',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './Imagine/foodlogo.png'
    },
    {
        name: 'Bun bo Hue',
        title: 'Mon ngon cua Hue',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './Imagine/foodlogo.png'
    },
    {
        name: 'Banh bot loc',
        title: 'Mon ngon dac san cua Hue',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './Imagine/foodlogo.png'
    },
    {
        name: 'Bun oc ',
        title: 'Mot mon ngon va dinh cao vao mua dong',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './Imagine/foodlogo.png'
    },
]
let a = JSON.stringify(products)
localStorage.setItem("product", a )


let items = document.querySelector('.items')
console.log(items)
for (product of products){
    items.innerHTML +=`
   
   
   
   <div class="item">
   <div class="product view">
    <img class = "img-icon" src=${product.img}>
    <button type="input" value= '${product.name}' >add to list</button>
   </div>
<div class="content">
    <h3>${product.name}</h3>
    <p>
        ${product.title}
    </p>
    
    </div>
</div>`
}




ro = JSON.stringify(products)
Storage.setItem('productsCart' , pro)

Tem = document.querySelector('.items')
le.log(item);
art = document.querySelector('container-right')

artParse = Json.parse(localStorage.getItem('productsCart'))
le.log('cartParse' , cartParse)




item.addEventlistener('click', function (event){
    console.log(event)
    if(event.tagName === 'BUTTON'){
   console.dir(event);
   let item = event.value
   console.log('item', item)
   cartParse.push(`${item}`)
   localStorage.setItem('productsCart', JSON.stringify(cartParse))

   cart.innerHTML += `<p>${item}</p>`

}
})
