import React from 'react';
import { ARTIST_DATA } from '../../data/Artist';
import { JOB_COLORS } from '../../data/Constant';

const ArtistList = () => {
    const items = ARTIST_DATA;
    const jobColors = JOB_COLORS;

    const list = items.map((item, index) => (
        <div key={index} className="col">
            <a href={item.url} className="">
                <div className="card item-artist">
                    <img src={item.image} alt={item.name} className="card-img-top avatar-artist"/> 
                    <div className="card-body content-artist">
                        <h5 className="card-title">
                            {item.name}
                        </h5> 
                        <div className="job-list">
                        {item.jobs.map((job, i) => (
                            <p
                            key={i}
                            className="job-item"
                            style={{ background: jobColors[job] }}
                            >
                            {job}
                            </p>
                        ))}
                        </div>
                    </div>
                </div>
            </a>
        </div>
    ));
    
    return (
        <div className="artist-container" style={{marginBottom: "40px"}}>
            <div className='artist-content'>
                <div className='row row-cols-2 row-cols-lg-4 g-2 g-lg-3'>
                    {list}
                </div>
            </div>
        </div>
    );
};

export default ArtistList;