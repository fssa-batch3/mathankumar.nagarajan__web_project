let stores = [
    {
        "image": "https://iili.io/HWXkdkx.png",
        "title": "Nike",
        "category": "Shoes Shop",
        "value": "0",
        "id": 1681360899277,
        "products": [
            {
                "image": "https://iili.io/HkeiZmb.webp",
                "title": "Mens Air Zoom Vomero 15 Running Shoe",
                "price": "6000",
                "value": "1",
                "full_price": "10000",
                "discount": "40",
                "rating": "4.5",
                "reviews": "2023"
            },
            {
                "image": "https://iili.io/HkeiQku.webp",
                "title": "Men's Ultra Light Running and Training Shoes",
                "price": "2500",
                "value": "2",
                "full_price": "5000",
                "discount": "50",
                "rating": "4.2",
                "reviews": "2023"
            },
            {
                "image": "https://iili.io/HkeiDIj.webp",
                "title": "Men's Running Shoe Bacca Bucci",
                "price": "1899",
                "value": "3",
                "full_price": "5000",
                "discount": "52",
                "rating": "4.5",
                "reviews": "1992"
            }
        ]
    },
    {
        "image": "https://iili.io/HWXkHdb.jpg",
        "title": "SS Beauty Shop",
        "category": "Beauty Shop",
        "value": "1",
        "id": 1683014778613,
        "products": []
    },
    {
        "image": "https://iili.io/HWXkKhB.jpg",
        "title": "Lenskart",
        "category": "Specse Shop",
        "value": "2",
        "id": 1683014799812,
        "products": []
    },
    {
        "image": "https://iili.io/HWXep1e.png",
        "title": "Chales & Keith",
        "category": "Bags & Luggage",
        "value": "3",
        "id": 1683014822216,
        "products": []
    },
    {
        "image": "https://iili.io/HWXeyru.png",
        "title": "Vero Moda",
        "category": "Fashion Dress For Women",
        "value": "4",
        "id": 1683014846248,
        "products": []
    },
    {
        "image": "https://iili.io/HWXknrg.png",
        "title": "Poorvika",
        "category": "Mobile Shop",
        "value": "5",
        "id": 1683014867397,
        "products": []
    },
    {
        "image": "https://iili.io/HWXk2mQ.gif",
        "title": "MAC",
        "category": "Beauty Products",
        "value": "6",
        "id": 1683014885991,
        "products": []
    },
    {
        "image": "https://iili.io/HWXemB9.png",
        "title": "Jack & Zone",
        "category": "Mens Fashion",
        "value": "7",
        "id": 1683014904741,
        "products": []
    },
    {
        "image": "https://iili.io/HWXkJ7j.jpg",
        "title": "Label Ritu Kumar",
        "category": "Designer Wear",
        "value": "8",
        "id": 1683014925930,
        "products": []
    },
    {
        "image": "https://iili.io/HWXkBB1.jpg",
        "title": "ivenus",
        "category": "Apple Premium Reseller",
        "value": "9",
        "id": 1683014948464,
        "products": [
            {
                "image": "https://iili.io/HSxe88l.webp",
                "title": "Apple iPhone 14 Pro Max",
                "price": "127999",
                "value": "101",
                "full_price": "139999",
                "discount": "9",
                "rating": "4.5",
                "reviews": "2023"
            },
            {
                "image": "https://iili.io/HSxeO6G.webp",
                "title": "Apple iPhone 13 (128GB) - (Product)",
                "price": "62999",
                "value": "102",
                "full_price": "69999",
                "discount": "10",
                "rating": "4.5",
                "reviews": "2023"
            }
        ]
    }
]


if(localStorage.getItem("stores")){
    
}
else{
    localStorage.setItem("stores", JSON.stringify(stores))
}





