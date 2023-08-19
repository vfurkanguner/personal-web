/* eslint-disable @next/next/no-img-element */
import React, { PropsWithChildren } from 'react'
import Layout from '../components/Layout';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { upperCombinImages, lowerCombinImages } from '../constants/combins';

type Props = {}

const CombinGeneratorPage = () => (
    <Layout>
        <div className="my-16 sm:my-32">
            <div className='container mx-auto flex flex-col items-center justify-center'>
                <h1 className='mb-4 text-2xl sm:text-4xl font-bold text-left'>Combin Generator</h1>
                <p className='text-center'>
                    You can generate your own combin by selecting upper and lower parts of the combin.
                </p>
                <div className='max-w-xs flex items-center justify-center flex-col'>
                    <div className='w-64 relative z-20'>
                        <Carousel
                            showThumbs={false}
                            showIndicators={false}
                            showStatus={false}
                        >
                            {upperCombinImages.map((image, index) => (
                                <div key={image.id} className="">
                                    <img
                                        className='object-contain'
                                        data-nimg="future"
                                        src={image.src}
                                        alt={image.alt} />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div className='w-60 -translate-y-32 relative z-10'>
                        <Carousel
                            showThumbs={false}
                            showIndicators={false}
                            showStatus={false}
                        >
                            {lowerCombinImages.map((image, index) => (
                                <div key={image.id} className="">
                                    <img
                                        className='object-contain'
                                        data-nimg="future"
                                        src={image.src}
                                        alt={image.alt} />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default CombinGeneratorPage;