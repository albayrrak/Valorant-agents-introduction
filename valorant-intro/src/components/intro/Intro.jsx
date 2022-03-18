import React from "react";
import "./intro.scss";
import API from "../../api/api";
import { useState, useEffect } from "react";

const Intro = () => {
    const [maps, setMaps] = useState([]);
    const [mapsFilter, setMapsFilter] = useState([]);
    useEffect(() => {
        try {
            const getMaps = async () => {
                const response = await API.fetchMaps();
                setMaps(response.data);
            };
            getMaps();
        } catch (error) {
            console.log(error);
        }
    }, []);

    const nextButton = (splash) => {
        try {
            const filtered = maps.filter((item) => item.splash === splash);
            if (filtered) {
                setMapsFilter(filtered);
            } else {
                return maps;
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className='intro'>
            <div className='intro__images'>
                {mapsFilter.map((item, index) => (
                    <>
                        <img key={index} src={item.splash} alt='' />
                        <h1>{item.displayName}</h1>
                    </>
                ))}
            </div>
            <div className='intro__button'>
                {maps.map((item) => (
                    <button onClick={() => nextButton(item.splash)}>
                        {item.displayName}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Intro;
