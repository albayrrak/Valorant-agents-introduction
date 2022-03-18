import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import "./agents.scss";

const Agents = () => {
    console.log("render");
    const { agents, searchAgent } = useContext(AppContext);
    return (
        <div id='agents' className='agents'>
            <div className='agents__container'>
                <h1>
                    <span>Ajanları</span> Tanıyalım
                </h1>
                <ul className='agents__cards'>
                    {agents
                        .filter((agent) =>
                            agent.displayName
                                .toLowerCase()
                                .includes(searchAgent.toLowerCase())
                        )
                        .map((agent) => (
                            <li
                                className='agents__cards__item'
                                style={{
                                    background: agent.background
                                        ? `url(${agent.background})`
                                        : "black",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <img src={agent.fullPortrait} alt='' />
                                <li className='item__detail'>
                                    <h1>{agent.displayName}</h1>
                                    <p>{agent.description}</p>
                                    <div className='abilities'></div>
                                    {agent.voiceLine.mediaList.map((voice) => (
                                        <audio
                                            controls
                                            autolay
                                            src={voice.wave}
                                            style={{
                                                width: "100%",
                                                position: "absolute",
                                                background: "white",
                                                bottom: "0px",
                                                left: "0px",
                                            }}
                                        ></audio>
                                    ))}
                                    <li className='abilities'>
                                        <h4>Yetenekler</h4>
                                        <div className='abilities__content'>
                                            {agent.abilities.map((item) => (
                                                <div className='abilities__desc'>
                                                    <img
                                                        src={item.displayIcon}
                                                        alt=''
                                                    />
                                                    <h6>{item.displayName}</h6>
                                                </div>
                                            ))}
                                        </div>
                                    </li>
                                </li>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default Agents;
