import React from 'react';
import { MUSIC_DATA } from '../../data/Music';

const ProductList = () => {
    const items = MUSIC_DATA;

    const list = items.map((item, index) => (
        <div className="col" key={index}>
            <div className="card item-product">
                <a href={item.url}>
                    <img src={item.image} alt={item.name} className="card-img-top avatar-product"/>
                </a> 
                <div className="card-body content-product">
                    <div className="content-product-left">
                        <a href={item.url}>
                            <h5 className="card-title">
                                {item.name}
                            </h5>
                        </a> 
                        <p>
                            <a href={item.artist_url} className="">
                                {item.artist}
                            </a>
                        </p>
                    </div> 
                    <div className="content-product-right">
                        <a href={item.url}>
                            <img src="/_nuxt/img/play.7fb8bd7.png" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    ));
    
    return (
        <div className="product-container" style={{marginBottom: "40px"}}>
            <div className='product-content'>
                <div className='row row-cols-2 row-cols-lg-4 g-2 g-lg-3'>
                    {list}
                </div>
            </div>
        </div>
    );
};

export default ProductList;