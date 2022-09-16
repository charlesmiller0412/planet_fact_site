import { useState, useEffect } from "react";
import { Button } from "../../components/button";
import image from "../../assets/images/planet-mercury.svg";
import Image from "next/image";
import * as data from "../../public/assets/data.json";
import arrow from "../../assets/images/icon-source.svg";

export default function Mercury() {
    const getData = async () => {
        console.log(data);
    };
    useEffect(() => {
        getData();
    }, []);

    let i = 1;

    return (
        <section className="mercury">
            <div className="mercury__top">
                <div className="mercury__top--image">
                    <Image
                        src={data[i].images.planet}
                        alt={data[i].name}
                        width="290px"
                        height="290px"
                    />
                </div>
                <div className="mercury__top--info">
                    <div className="mercury__top--info-title">
                        <h1>{data[i].name}</h1>
                    </div>
                    <div className="mercury__top--info-text">
                        <p>{data[i].overview.content}</p>
                        <span>
                            Source :
                            <a href="#">
                                Wikipedia
                                <div className="arrow">
                                    <Image
                                        src={"/assets/images/icon-source.svg"}
                                        alt="arrow"
                                        width={12}
                                        height={12}
                                    />
                                </div>
                            </a>
                        </span>
                    </div>
                    <div className="mercury__top--info-buttons">
                        <Button number="01" title="overview" />
                        <Button number="02" title="internal structure" />
                        <Button number="03" title="surface geology" />
                    </div>
                </div>
            </div>
            <div className="mercury__bottom">
                <div className="mercury__bottom--rotation">
                    <h4 className="mercury__bottom--rotation-title">
                        Rotation Time
                    </h4>
                    <h2 className="mercury__bottom--rotation-data">
                        {data[i].rotation}
                    </h2>
                </div>
                <div className="mercury__bottom--revolution">
                    <h4 className="mercury__bottom--rotation-title">
                        Revolution Time
                    </h4>
                    <h2 className="mercury__bottom--rotation-data">
                        {data[i].revolution}
                    </h2>
                </div>
                <div className="mercury__bottom--radius">
                    <h4 className="mercury__bottom--rotation-title">Radius</h4>
                    <h2 className="mercury__bottom--rotation-data">
                        {data[i].radius}
                    </h2>
                </div>
                <div className="mercury__bottom--average">
                    <h4 className="mercury__bottom--rotation-title">
                        Average Time
                    </h4>
                    <h2 className="mercury__bottom--rotation-data">
                        {data[i].temperature}
                    </h2>
                </div>
            </div>
        </section>
    );
}
