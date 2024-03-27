import React from 'react';
import {Link} from "react-router-dom";

const Renders = () => {
    return (
        <>
            <Link to={'/'}>
                <div
                    className="font-bold w-44 h-12 fixed text-gray-900 backdrop-blur-sm rounded-3xl p-3 mt-1 bg-white/30 right-0.5"
                >
                    HOME
                </div>
            </Link>


            <div className="w">
                <img src={"./rendersimg/1.jpg"}/>
                <img src={"./rendersimg/2.jpg"}/>
                <img src={"./rendersimg/3.jpg"}/>
            </div>
        </>
    )
}

export default Renders;