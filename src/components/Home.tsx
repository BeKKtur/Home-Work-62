import React from 'react';

const Home:React.FC = () => {
    return (
        <div className="d-flex flex-wrap gap-3 align-items-center justify-content-center mt-5">
            <div className="card w-25">
                <div className="card-body">
                    <p className="card-text">Deals in PCs</p>
                </div>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v1._SY608_CB573698005_.jpg" className="card-img-top w-100" alt="photo"/>
            </div>
            <div className="card w-25">
                <div className="card-body">
                    <p className="card-text">Lunar New Year</p>
                </div>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/LunarNY/Fuji_Single_card_Lunar_New_Year_Graphics_2x_EN._SY608_CB585956471_.jpg" className="card-img-top w-100" alt="photo"/>
            </div>
            <div className="card w-25">
                <div className="card-body">
                    <p className="card-text">New year, new supplies</p>
                </div>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1555947_2997386_758x608_2X_en_US._SY608_CB594429819_.jpg" className="card-img-top w-100" alt="photo"/>
            </div>
        </div>
    );
};

export default Home;