import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { TbTruckDelivery } from "react-icons/tb";
import { RiRecycleFill } from "react-icons/ri";
import { FaHandHoldingUsd } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";

function Home() {
    const items = [
        {
            title: 'New year sale',
            description: 'Get And Extra 50% off',
            linkText: 'Shop now',
            imgSrc: 'laptop.png',
        },
        {
            title: 'Summer Collection',
            description: '40% Discount On Speakers',
            linkText: 'Shop now',
            imgSrc: 'headphoneEcom.png',
        },
        {
            title: 'Tech Innovations',
            description: 'Get And Extra 50% off',
            linkText: 'Shop now',
            imgSrc: 'mobiles.png',
        },
    ];

    const items1 = [
        {
            icon: <TbTruckDelivery />,
            title1: 'World Wide Shipping',
            title2: 'order above $100'
        },
        {
            icon: <RiRecycleFill />,
            title1: 'Easy 30 Day Returns',
            title2: 'Back Returns in 7 Days'
        },
        {
            icon: <FaHandHoldingUsd />,
            title1: 'money back guarantee',
            title2: 'guarantee with in 30-Days'
        },
        {
            icon: <RiCustomerService2Fill />,
            title1: 'Easy Online Support',
            title2: '24/7 Any time support'
        },
    ];

    const products = [
        {
            title1: 'Computers',
            imgSrc: 'lapi.png',
            imgAlt: 'Laptop',
            title2: 'Laptop',
            title3: 'Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.',
            title4: '₹999.99',
            title5: '₹3999.96',
            title6: '50'
        },
        {
            title1: 'Smartphone',
            imgSrc: 'iphone.png',
            imgAlt: 'Smartphone',
            title2: 'Smartphone',
            title3: 'Feature-rich smartphone with a 6.2-inch screen, 12MP dual camera, 128GB storage, and a 4000mAh battery.',
            title4: '₹499.99',
            title5: '₹1999.96',
            title6: '100'
        },
        {
            title1: 'Audio',
            imgSrc: 'headphone.png',
            imgAlt: 'Wireless Headphones',
            title2: 'Wireless Headphones',
            title3: 'High-quality wireless headphones with over-ear design, 20 hours of battery life, and a sleek black color.',
            title4: '₹149.99',
            title5: '₹599.96',
            title6: '30'
        },
        {
            title1: 'Wearables',
            imgSrc: 'watch.png',
            imgAlt: 'Watches',
            title2: 'Watches',
            title3: 'Smartwatch with a 1.3-inch AMOLED display, water-resistant design, fitness tracking features, and a stylish silver color.',
            title4: '₹199.99',
            title5: '₹799.96',
            title6: '20'
        },
        {
            title1: 'Audio',
            imgSrc: 'speakers.png',
            imgAlt: 'Speakers',
            title2: 'Speakers',
            title3: 'High-quality wireless headphones with over-ear design, 20 hours of battery life, and a sleek black color.',
            title4: '₹149.99',
            title5: '₹599.96',
            title6: '30'
        },
        {
            title1: 'Video',
            imgSrc: 'tv.png',
            imgAlt: 'Television',
            title2: 'Television',
            title3: 'Smartwatch with a 1.3-inch AMOLED display, water-resistant design, fitness tracking features, and a stylish silver color.',
            title4: '₹199.99',
            title5: '₹799.96',
            title6: '20'
        },
    ];


    // State for the quantities of each product
    const [quantities, setQuantities] = useState(products.map(() => 1));

    // Function to handle increment
    const incrementQuantity = (index) => {
        setQuantities(prevQuantities => {
            const newQuantities = [...prevQuantities];
            newQuantities[index] += 1; // Increment quantity for the specific product
            return newQuantities;
        });
    };

    // Function to handle decrement
    const decrementQuantity = (index) => {
        setQuantities(prevQuantities => {
            const newQuantities = [...prevQuantities];
            if (newQuantities[index] > 1) {
                newQuantities[index] -= 1; // Decrement quantity for the specific product
            }
            return newQuantities;
        });
    };

    const numbersLeftColumn = [
        {
            number: '1',
            title: 'Wide Selection',
            para: 'Quantum Store offers a diverse range of gadgets, from smartphones to smart home devices, ensuring you find what you need to elevate your lifestyle and meet your tech requirements.'
        },
        {
            number: '2',
            title: 'Quality Assurance',
            para: "Every gadget at Quantum Store undergoes rigorous quality checks, guaranteeing reliability and performance, so you can shop with confidence knowing you're getting the best."
        },
        {
            number: '3',
            title: 'Competitive Prices',
            para: "Enjoy great value with Quantum Store's competitive prices on high-quality gadgets, making top-of-the-line technology accessible to all without compromising on quality or performance."
        },

    ]

    const numbersRightColumn = [
        {
            number: '4',
            title: 'Expert Guidance',
            para: 'Our knowledgeable staff provides expert guidance, helping you choose the right gadget to meet your needs and preferences, ensuring you make informed decisions every step of the way.'
        },
        {
            number: '5',
            title: 'Convenient Shopping',
            para: "With Quantum Store, shopping for gadgets is easy and convenient. Our user-friendly website and secure payment options ensure a seamless experience from browsing to checkout, all from the comfort of your home."
        },
        {
            number: '6',
            title: 'Excellent Service',
            para: "Quantum Store is committed to providing excellent service to our customers. From prompt assistance with inquiries to efficient handling of orders and deliveries, we prioritize your satisfaction every step of the way."
        },

    ]

    return (
        <>
            <Header />
            <div className='md:px-8 h-auto flex justify-center flex-col'>

                {/* Section-1 */}
                <div className='h-auto flex md:flex-row flex-wrap-reverse md:flex-nowrap justify-between pt-28 pb-16 px-8 gap-4 md:gap-20 shadow-lg' style={{ backgroundImage: 'linear-gradient(to top right, #3d86fa, #4484fb, #679eff, #b3d2ff, #ebf3fe)' }}>
                    <div>
                        <div className='flex flex-col'>
                            <span className='text-[#003b99] font-sans uppercase font-bold tracking-wider text-sm md:text-base m-2'>Explore the Latest in Tech Industries</span>
                            <span className='text-[#003b99] font-serif text-3xl md:text-5xl font-semibold tracking-normal leading-relaxed'>Your Destination For Cutting-Edge Gadgets!</span>
                            <p className='text-white text-sm md:text-lg mt-4 tracking-wide md:tracking-normal'>Welcome to Quantum eComStore, your ultimate destination for cutting-edge gadgets! Explore the latest in tech innovation and style with us. Shop now and discover a world of possibilities!</p>
                            <button className='bg-black py-2 px-3 md:py-3 md:px-4 rounded-lg w-[200px] md:w-[220px] text-white mt-8 md:mt-14 text-base md:text-xl border-2 border-black hover:bg-white hover:text-black'>Explore our Products</button>
                        </div>
                    </div>
                    <div>
                        <img className='h-auto w-[75rem]' src="public/heroSection.svg" alt="Hero Section" />
                    </div>
                </div>

                {/* Section-2 */}
                <div className='shadow-sm md:shadow-lg grid md:grid-cols-3 gap-4 my-4'>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className='flex flex-col md:flex-row shadow-lg md:shadow-none justify-between mx-8 md:items-center py-12 px-10 md:py-12 md:px-6 relative my-10 md:my-0'
                        >
                            <div className='flex flex-col justify-center '>
                                <span className='uppercase text-xs md:text-sm text-violet-500'>{item.title}</span>
                                <span className='text-lg md:text-2xl font-bold w-full md:w-44 py-2'>{item.description}</span>
                                <a href="#" className='uppercase underline text-sm md:text-lg py-2'>{item.linkText}</a>
                            </div>
                            <div className='z-50 md:flex-none flex  justify-end'>
                                <img
                                    src={item.imgSrc}
                                    alt={item.title}
                                    className={`w-56 h-auto z-50 ${index === 0 ? 'w-[200px] h-auto' : ''}  ${index === 1 ? 'w-[160px] h-auto' : ''} ${index === 2 ? 'transform rotate-12 w-[160px] h-auto' : ''} `}
                                />
                            </div>
                            <div className='w-36 h-36 bg-[#e3eaf0] rounded-full absolute bottom-0 right-0 overflow-hidden' style={{ borderRadius: '100% 0% 0% 100% / 100% 0%' }}></div>
                        </div>
                    ))}
                </div>

                {/* Section -3 */}
                <div className='grid md:grid-cols-4 shadow-lg md:px-10 md:py-20 py-10 items-center my-2'>
                    {items1.map((items, index) => (
                        <div key={index} className={`flex flex-row gap-6 p-8 md:p-4 md:border-l-2 items-center md:text-xl ${index === 0 ? 'border-none' : ''}`}>
                            <div className='text-blue-500 md:text-4xl text-4xl'>
                                {items.icon} {/* Render icon directly here */}
                            </div>
                            <div className='capitalize flex flex-col'>
                                <span>{items.title1}</span>
                                <span className='text-xs md:text-base'>{items.title2}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Section-4 */}
                <div className='py-10 px-4 md:py-20 md:px-10'>

                    <h1 className='text-xl md:text-3xl font-bold -tracking-tight'>Checkout Quantum Store</h1>

                    <div className='grid md:grid-cols-3 gap-10 md:gap-32 py-10 px-4 md:py-32 md:px-16'>
                        {products.map((product, index) => (
                            <div key={index} className='shadow-[0_2px_6px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.2)] px-4 py-8 flex flex-col w-auto md:w-[24rem]'>
                                <span className='bg-red-100 px-4 rounded-full w-28 text-center'>{product.title1}</span>
                                <div className='flex items-center justify-center'>
                                    <img src={product.imgSrc} alt={product.imgAlt} className='w-60 md:w-80 h-auto m-4' />
                                </div>
                                <h1 className='text-3xl md:text-4xl font-bold py-4'>{product.title2}</h1>
                                <p className='text-sm md:text-base'>{product.title3}</p>
                                <div className='text-base md:text-xl'>
                                    <div className='space-x-3 md:space-x-6 py-4'>
                                        <span>{product.title4}</span>
                                        <span className='line-through'>{product.title5}</span>
                                    </div>
                                    <span className='text-base md:text-lg'>Total Stocks Available: {product.title6}</span>
                                </div>
                                <div className='flex items-center gap-4 my-4'>
                                    <p>Quantity (Pieces)</p>

                                    {/* Counter Section */}
                                    <div className="flex items-center space-x-4 w-32 justify-center rounded-lg border-2">
                                        <button
                                            className="cursor-pointer text-2xl px-4 border-r font-bold"
                                            onClick={() => decrementQuantity(index)} // Pass index
                                        >
                                            -
                                        </button>
                                        <span className="text-2xl">{quantities[index]}</span> {/* Use the specific quantity for the product */}
                                        <button
                                            className="text-2xl px-4 cursor-pointer border-l font-bold"
                                            onClick={() => incrementQuantity(index)} // Pass index
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <button className='bg-black py-1 md:px-4 rounded-lg w-[140px] md:w-[180px] text-white text-base border-2 border-black hover:bg-white hover:text-black flex items-center justify-center gap-4'>
                                    <FaShoppingCart />Add To Carts
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section -5 */}
                <div className="px-4 md:py-20 md:px-10">
                    <h1 className="text-xl md:text-4xl font-bold">Why Choose Quantum Store</h1>
                    <p className="text-sm md:text-lg tracking-wide">Choose Quantum EduHub for a holistic, enriching learning experience that empowers you to achieve your goals.</p>

                    <div className="grid md:grid-cols-3 grid-cols-1 p-2 gap-14 my-16 md:my-20">

                        {/* Left Column: Moves below the image on small screens */}
                        <div className="grid grid-rows-3 order-2 md:order-1">
                            {numbersLeftColumn.map((item, index) => (
                                <div key={index} className="flex flex-col md:items-end md:m-4">
                                    <div className="flex flex-col md:items-end my-6 md:my-0">
                                        <div className="rounded-full bg-blue-100 w-12 h-12 md:w-16 md:h-16 text-blue-500 text-center flex justify-center items-center my-2">
                                            {item.number}
                                        </div>
                                        <div className="flex flex-col md:items-end">
                                            <span className="md:text-xl font-bold md:tracking-wide">{item.title}</span>
                                            <p className="md:text-xl md:tracking-wide md:py-2">{item.para}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Image Section: Will appear on top in small screens */}
                        <div className="h-full w-full flex justify-center items-center order-1 md:order-2">
                            <div className="border-4 border-blue-100 rounded-full p-4">
                                <div className="w-[18rem] h-[18rem] md:w-[28rem] md:h-[28rem] rounded-full bg-blue-400 flex items-center justify-center">
                                    <img src="ecompost.png" alt="" className="w-44 md:w-72 h-auto" />
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Moves below the left column on small screens */}
                        <div className="grid grid-rows-3 order-3 md:order-3">
                            {numbersRightColumn.map((item, index) => (
                                <div key={index} className="flex flex-col md:m-4">
                                    <div className="flex flex-col">
                                        <div className="rounded-full bg-blue-100 w-12 h-12 md:w-16 text-blue-500 text-center flex justify-center items-center my-2">
                                            {item.number}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="md:text-xl font-bold tracking-wide">{item.title}</span>
                                            <p className="md:text-xl tracking-wide py-2">{item.para}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}

export default Home;
