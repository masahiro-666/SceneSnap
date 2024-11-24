import React, { useState, useEffect } from "react";
import "./styles/styles.css";
import { Link } from 'react-router-dom';


const products = [
    {
        id: 1,
        name: '1',
        href: '#',
        imageSrc: 'https://lh3.googleusercontent.com/BUgfg-OBmG76GZVz9kB9l0nWdnqicFKls9obyCjE5ZsadByzuRlKvztMmIruXgwY8cWFi2Rx9St6Bre5uKnOGmEQmTz3ir57pw=w260',
        imageAlt: "1",
    },
    {
        id: 2,
        name: '2',
        href: '#',
        imageSrc: 'https://lh3.googleusercontent.com/nC6X289UbboweJGPmvwR0GpJxpvbXOfEDlRl3lfQRd63UIbIdnpSLmTySOlPTC8ObOQCyMRQgFGDrGXb6iGNKvZIyyfD7CA8aA=w260',
        imageAlt: "2",
    },
    {
        id: 3,
        name: '3',
        href: '#',
        imageSrc: 'https://lh3.googleusercontent.com/5r260tBzVtw_eBgTFGmATxUVVb4SRaAPxmHxPl_iUEQmubTy1V5AtnWUFIfj46g_9J8ijAa0OU5zduI6qRsXje-9zO1pWj8qzYE=w260',
        imageAlt: "3",
    },
    {
        id: 4,
        name: '4',
        href: '#',
        imageSrc: 'https://lh3.googleusercontent.com/0RfdGGR2k3H5U8WQeUCo54n3i4p8kxNo9PfdreIC1Td0c5yTEcLKaCVnO2Lt3zKbHuA2Jrnpwo3UEDTMoiyEE0I-vXInpz-l2w=w260',
        imageAlt: "4",
    },
    {
        id: 5,
        name: '5',
        href: '#',
        imageSrc: 'https://lh3.googleusercontent.com/HT6TvVOfQdfon-I2YNzDTEVLv0RUStSIMy5EFgMNdLrnq5wtZe6uXwQWqf71IpPMPadgepQLTHEBWf3uuHoizlUcpqV0yDsNag=w260',
        imageAlt: "5.",
    },
    {
        id: 6,
        name: '6',
        href: '#',
        imageSrc: 'https://lh3.googleusercontent.com/LkfqLoFGU14Y9da4XuTVpINyHY_ntLDQeu-VyvPr7Kf9xXiI4eHqoHgoVVQAJ7IuRrtHUGH1oJTFjjRXhKafkjsMAIzVGZ-wrGw=w260',
        imageAlt: "6",
    },
];

function Movies() {
    return (
        <>
            <div className="bg-white mx-20 page-container">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Movies</h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <Link to={`/seat/${product.href}`}>
                        <div key={product.id} className="group relative">
                        <img
                            alt={product.imageAlt}
                            src={product.imageSrc}
                            className="movie-img aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-100 lg:w-auto"
                        />
                        <div className="mt-4 flex justify-between">
                            <div>
                            <h3 className="text-sm text-gray-700">
                                <a>
                                <span aria-hidden="true" className="absolute inset-0" />
                                {product.name}
                                </a>
                            </h3>
                            </div>
                        </div>
                        </div>
                        </Link>
                    ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Movies;