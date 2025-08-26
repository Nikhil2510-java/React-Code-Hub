import Products from "../../component/Products/Products";
const Home = () => {
    const productDetails = [
        {
            "id": 13,
            "title": "Samsung Galaxy M14 5G (Smoky Teal, 6GB, 128GB Storage)",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691075307831-galaxy M14 5G.jpg",
            "price": 187,
            "description": "16.72 centimeters (6.6-inch) LCD, FHD+ resolution with 1080 x 2408 pixels resolution, 401 PPI with 16M color\r\n50MP+2MP+2MP Triple camera setup- True 50MP (F1.8) main camera + 2MP (F2.4) + 2MP (F2.4)| 13MP (F2.0) front camera\r\nSuperfast 5G with 13 5G Bands, Powerful Exynos 1330 Octa Core 2.4GH 5nm processor with Letest Android 13,One UI Core 5.0,\r\n6000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase\r\nGet up to 2 times of Android Updates & 4 times of Security Updates with Samsung Galaxy M14 5G.",
            "brand": "samsung",
            "model": "Samsung Galaxy M14 5G",
            "color": "Smoky Teal",
            "category": "mobile",
            "discount": 11
        },
        {
            "id": 25,
            "title": "Samsung Galaxy S23 5G (Green, 8GB, 128GB Storage)",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691074179466-galaxy S23 5G.jpg",
            "price": 905,
            "description": "More light for your night - Get ready for a Gallery full of epic night shots everyone will want. Nightography's enhanced AI keeps details clear, so low light photos and videos will be bright and colorful from dusk to dawn and back again.\r\nDesigned with the planet in mind - Unbox the change you want to see in the world. Crafted with recycled glass and PET film and colored with natural dyes, each phone is tucked into a box made of recycled paper and paper-based protective film.\r\nPower for those who don't pause - Your quest for epic mobile gaming is over. Snapdragon 8 Gen 2 Mobile Platform for Galaxy optimizes and streamlines your device for silky smooth games —without draining the battery.",
            "brand": "samsung",
            "model": "Samsung Galaxy S23",
            "color": "Green",
            "category": "mobile",
            "popular": true,
            "discount": 21,
            "onSale": true
        },
        {
            "id": 15,
            "title": "Apple iPhone 14 Pro Max (256 GB) - Deep Purple",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691075831385-iPhone 14 pro max.jpg",
            "price": 1810,
            "description": "17.00 cm (6.7-inch) Super Retina XDR display featuring Always-On and ProMotion\r\nDynamic Island, a magical new way to interact with iPhone\r\n48MP Main camera for up to 4x greater resolution\r\nCinematic mode now in 4K Dolby Vision up to 30 fps\r\nAction mode for smooth, steady, handheld videos\r\nAll-day battery life and up to 29 hours of video playback\r\nVital safety technology — Crash Detection can detect a severe car crash and call for help",
            "brand": "apple",
            "model": "iPhone 14 Pro Max",
            "color": "Deep Purple",
            "category": "mobile",
            "popular": true
        },
        {
            "id": 16,
            "title": "Apple iPhone 14 Pro (256 GB) - Gold",
            "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691076020478-iPhone 14 pro.jpg",
            "price": 1546,
            "description": "15.54 cm (6.1-inch) Super Retina XDR display featuring Always-On and ProMotion\r\nDynamic Island, a magical new way to interact with iPhone\r\n48MP Main camera for up to 4x greater resolution\r\nCinematic mode now in 4K Dolby Vision up to 30 fps\r\nAction mode for smooth, steady, handheld videos\r\nAll-day battery life and up to 23 hours of video playback\r\nVital safety technology — Crash Detection calls for help when you can’t",
            "brand": "apple",
            "model": "iPhone 14 Pro",
            "color": "Golden",
            "category": "mobile"
        }
    ]
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <button>click here</button>
            <div>
                {
                    productDetails.map((product) => (
                        <Products
                            key={product.id}
                            image={product.image}
                            title={product.title}
                            desc={product.description}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Home;