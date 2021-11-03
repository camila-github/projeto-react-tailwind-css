import React from 'react';

export default function Slide() {    

    return (
        <div className="grid grid-cols-3 gap-x-5 gap-y-8 py-5">
            <div>
                <img className="rounded 
                                md:rounded-lg 
                                shadow-2xl" 
                    src="/img/places-to-travel1.jpg" 
                    alt=""
                />
            </div>

            <div className="col-span-2">
                <img className="rounded 
                                md:rounded-lg 
                                shadow-2xl"
                    src="/img/places-to-travel2.jpg" 
                    alt=""
                />
            </div>

            <div>
                <img className="rounded 
                                md:rounded-lg 
                                shadow-2xl" 
                    src="/img/places-to-travel3.jpg" 
                    alt=""
                />
            </div>
            
            <div >
                <img className="rounded 
                                md:rounded-lg 
                                shadow-2xl"
                    src="/img/places-to-travel4.jpg" 
                    alt=""
                />
            </div>

            <div className="col-span-1"> 
                <img className="rounded 
                                sm:rounded-lg 
                                shadow-2xl"
                    src="/img/places-to-travel5.jpg" 
                    alt=""
                />
            </div>

            <div> 
                <img className="rounded 
                                sm:rounded-lg 
                                shadow-2xl" 
                    src="/img/places-to-travel6.jpg" 
                    alt=""
                />
            </div>
            
            <div>
                <img className="rounded 
                                md:rounded-lg 
                                shadow-2xl"
                    src="/img/places-to-travel7.jpg" 
                    alt=""
                />
            </div>

            <div>
                <img className="rounded 
                                md:rounded-lg 
                                shadow-2xl"
                    src="/img/places-to-travel8.jpg" 
                    alt=""
                />
            </div>
        </div>
    );
        

}

