if(localStorage.getItem("stores")){
    return;
}
else{
    localStorage.setItem("stores", JSON.stringify([
        {
            value: 0,
            name: "Nike",
            category: "Shoes Shop",
            image: "assets/image/stores/store27.png",
        },
        {
            value: 1,
            name: "SS Beauty Shop",
            category: "Beauty Shop",
            image: "assets/image/stores/store1.jpeg",
        },
        {
            value: 2,
            name: "Lenskart",
            category: "Specse Shop",
            image: "assets/image/stores/store42.jpg"
        },
        {
            value: 3,
            name: "Chales & Keith",
            category: "Bags & Luggage",
            image: "assets/image/stores/store2.png"
        },
        {
            value: 4,
            name: "Vero Moda",
            category: "Fashion Dress For Women",
            image: "assets/image/stores/store3.png"
        },
        {
            value: 5,
            name: "Poorvika",
            category: "Mobile Shop",
            image: "assets/image/stores/store52.png"
        },
        {
            value: 6,
            name: "MAC",
            category: "Beauty Products",
            image: "assets/image/stores/store34.gif"
        },
        {
            value: 7,
            name: "Jack & Zone",
            category: "Mens Fashion",
            image: "assets/image/stores/store4.png"
        },
        {
            value: 8,
            name: "Label Ritu Kumar",
            category: "Designer Wear",
            image: "assets/image/stores/store9.jpg"
        },
        {
            value: 9,
            name: "ivenus",
            category: "Apple Premium Reseller",
            image: "assets/image/stores/store18.jpeg"
        }
    ]))
}

