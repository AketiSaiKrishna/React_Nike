

import  './hero.css';
let Hero=()=>{
    return(
        <>
    <div className="Container">
        <div className="Hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>Your feet deserve the best and we are here
                help you to with shoes your feet deserve.
                Your feet deserve the best and we are here help
                you to what your feet deserve.
            </p>
            <div className="btn">
            <button>Shop Now </button>
            <button> Category </button>
            </div>
            <div className="shopping">
                <p>Also avaliable on</p>
            </div>
            <button id="mobile">Login</button>
            <div className="brand">
            <img src="/assests/fp.png" alt="filpkart"/>
            <img id= "amazon" src="/assests/amazon.png" alt="Amazon"/>
            </div>
        </div>
        <div className="Hero-img">
            <img src="/assests/shoe final.png" alt="nike"/>
        </div>
    </div>
        </>
    );
}

export default Hero;
