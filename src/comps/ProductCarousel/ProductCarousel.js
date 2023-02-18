import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination } from "swiper";

export default function App() {
    const product = [
        {
            "_id": "63f0712d6def99e1c28b465e",
            "name": "Original Beats Pro",
            "picture": "https://drive.google.com/uc?export=view&id=1s-uCgFAM0dZCIldCOgb986Uf3ztD7ueV",
            "price": 33.38,
            "review": 256,
            "order": 3422,
            "ratting": "4.9"
        },
        {
            "_id": "63f0712d6def99e1c28b465f",
            "name": "Beats Studeo Pro",
            "picture": "https://drive.google.com/uc?export=view&id=1Cy9MQYkGu-Xl8F7c2jBFhMnXh58tKDql",
            "price": 43.38,
            "review": 256,
            "order": 2572,
            "ratting": "4.8"
        },
        {
            "_id": "63f0712d6def99e1c28b4660",
            "name": "Beats Studeo 3",
            "picture": "https://drive.google.com/uc?export=view&id=1Eap11n8aQoS8E5CzDj6lHm3dsv0SSTp-",
            "price": 35.38,
            "review": 256,
            "order": 1456,
            "ratting": "4.9"
        },
        {
            "_id": "63f0712d6def99e1c28b4661",
            "name": "Bots New Headphone",
            "picture": "https://drive.google.com/uc?export=view&id=1Eap11n8aQoS8E5CzDj6lHm3dsv0SSTp-",
            "price": 45.5,
            "review": 256,
            "order": 1150,
            "ratting": "4.1"
        },
        {
            "_id": "63f0712d6def99e1c28b4662",
            "name": "Best Headphones For",
            "picture": "https://drive.google.com/uc?export=view&id=1Cy9MQYkGu-Xl8F7c2jBFhMnXh58tKDql",
            "price": 55.5,
            "review": 256,
            "order": 1150,
            "ratting": "4.3"
        },
        {
            "_id": "63f0712d6def99e1c28b4663",
            "name": "Headphones wireless",
            "picture": "https://drive.google.com/uc?export=view&id=1s-uCgFAM0dZCIldCOgb986Uf3ztD7ueV",
            "price": 95.5,
            "review": 256,
            "order": 1150,
            "ratting": "4.3"
        },
        {
            "_id": "63f0712d6def99e1c28b4664",
            "name": "Sony WH-1000XM4",
            "picture": "https://drive.google.com/uc?export=view&id=1Eap11n8aQoS8E5CzDj6lHm3dsv0SSTp-",
            "price": 25.5,
            "review": 256,
            "order": 1150,
            "ratting": "4.4"
        },
        {
            "_id": "63f0712d6def99e1c28b4665",
            "name": "Apple AirPods Max",
            "picture": "https://drive.google.com/uc?export=view&id=1Cy9MQYkGu-Xl8F7c2jBFhMnXh58tKDql",
            "price": 65.5,
            "review": 256,
            "order": 1150,
            "ratting": "4.7"
        },
        {
            "_id": "63f0712d6def99e1c28b4666",
            "name": "Headphones 700",
            "picture": "https://drive.google.com/uc?export=view&id=1s-uCgFAM0dZCIldCOgb986Uf3ztD7ueV",
            "price": 45.5,
            "review": 256,
            "order": 1150,
            "ratting": "4.9"
        },
        {
            "_id": "63f0712d6def99e1c28b4667",
            "name": "Sony DR-310",
            "picture": "https://drive.google.com/uc?export=view&id=1Eap11n8aQoS8E5CzDj6lHm3dsv0SSTp-",
            "price": 35.5,
            "review": 256,
            "order": 1150,
            "ratting": "4.1"
        },
        {
            "_id": "63f0712d6def99e1c28b4668",
            "name": "Jabra elite 45h",
            "picture": "https://drive.google.com/uc?export=view&id=1Cy9MQYkGu-Xl8F7c2jBFhMnXh58tKDql",
            "price": 65.5,
            "review": 256,
            "order": 1150,
            "ratting": "4.5"
        },
        {
            "_id": "63f0712d6def99e1c28b4669",
            "name": "Jabra elite 75t",
            "picture": "https://drive.google.com/uc?export=view&id=1s-uCgFAM0dZCIldCOgb986Uf3ztD7ueV",
            "price": 45.5,
            "review": 256,
            "order": 1150,
            "ratting": "4.5"
        }
    ]
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {product.map((data) => <SwiperSlide key={product._id}>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img className="w-52" src={data.picture} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{data.name}</h2>
                            <p>{data.price}</p>

                            <div className="flex">
                                <img src="https://i.ibb.co/w0dqbfv/icons8-starburst-shape-90-1.png" alt="" />
                                <p>{data.ratting}</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>


                        </div>
                    </div>
                </SwiperSlide>
                )}

            </Swiper>
        </>
    );
}
