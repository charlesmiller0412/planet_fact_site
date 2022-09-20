import { useEffect } from "react";
import { Button } from "../../components/button";
import Image from "next/image";
import usePlanetStore from "../../appStore";
import $ from "jquery";

export default function Planets() {
    let data = require("../../public/assets/data.json");
    const currentActive = usePlanetStore((state: any) => state.active);
    const currentPlanet = usePlanetStore((state: any) => state.planet);
    const updateActive = usePlanetStore((state: any) => state.updateActive);

    let activeImage: any;
    let imageSize: any;

    // if (currentPlanet == 0) {
    //     imageSize = {
    //         width: "29rem",
    //         height: "29rem",
    //         position: "relative",
    //     };
    // } else if (currentPlanet == 1) {
    //     imageSize = {
    //         width: "40rem",
    //         height: "40rem",
    //         position: "relative",
    //     };
    // } else if (currentPlanet == 2) {
    //     imageSize = {
    //         width: "45rem",
    //         height: "45rem",
    //         position: "relative",
    //     };
    // } else if (currentPlanet == 3) {
    //     imageSize = {
    //         width: "33.6rem",
    //         height: "33.6rem",
    //         position: "relative",
    //     };
    // } else if (currentPlanet == 4) {
    //     imageSize = {
    //         width: "58.2rem",
    //         height: "58.2rem",
    //         position: "relative",
    //     };
    // } else if (currentPlanet == 5) {
    //     imageSize = {
    //         width: "61rem",
    //         height: "61rem",
    //         position: "relative",
    //     };
    // } else if (currentPlanet == 6) {
    //     imageSize = {
    //         width: "45.8rem",
    //         height: "45.8rem",
    //         position: "relative",
    //     };
    // } else if (currentPlanet == 7) {
    //     imageSize = {
    //         width: "45rem",
    //         height: "45rem",
    //         position: "relative",
    //     };
    // }

    if (currentActive === "overview") {
        activeImage = (
            <div className="planetImage" style={imageSize}>
                <Image
                    src={data[currentPlanet].images.planet}
                    alt={data[currentPlanet].name}
                    layout="fill"
                />
            </div>
        );
    } else if (currentActive === "structure") {
        activeImage = (
            <div className="planetImage" style={imageSize}>
                <Image
                    src={data[currentPlanet].images.internal}
                    alt={data[currentPlanet].name}
                    layout="fill"
                />
            </div>
        );
    } else if (currentActive === "geology") {
        activeImage = (
            <>
                <div className="planetImage" style={imageSize}>
                    <Image
                        src={data[currentPlanet].images.planet}
                        alt={data[currentPlanet].name}
                        layout="fill"
                    />
                </div>
                <div className="geologyPosition">
                    <Image
                        src={data[currentPlanet].images.geology}
                        alt={data[currentPlanet].name}
                        width="163px"
                        height="200px"
                    />
                </div>
            </>
        );
    }
    useEffect(() => {
        if (currentPlanet == 0) {
            $(".active").css("background-color", "#419ebb");
            $(".inactive").css("background-color", "transparent");
        } else if (currentPlanet == 1) {
            $(".active").css("background-color", "#eda249");
            $(".inactive").css("background-color", "transparent");
        } else if (currentPlanet == 2) {
            $(".active").css("background-color", "#6f2ed6");
            $(".inactive").css("background-color", "transparent");
        } else if (currentPlanet == 3) {
            $(".active").css("background-color", "#d14c32");
            $(".inactive").css("background-color", "transparent");
        } else if (currentPlanet == 4) {
            $(".active").css("background-color", "#d83a34");
            $(".inactive").css("background-color", "transparent");
        } else if (currentPlanet == 5) {
            $(".active").css("background-color", "#cd5120");
            $(".inactive").css("background-color", "transparent");
        } else if (currentPlanet == 6) {
            $(".active").css("background-color", "#1ec3a4");
            $(".inactive").css("background-color", "transparent");
        } else if (currentPlanet == 7) {
            $(".active").css("background-color", "#2d68f0");
            $(".inactive").css("background-color", "transparent");
        }
    });

    return (
        <section className="planets">
            <div className="planets__top">
                <div className="planets__top--image">{activeImage}</div>
                <div className="planets__top--info">
                    <div className="planets__top--info-tablet">
                        <div className="planets__top--info-title">
                            <h1>{data[currentPlanet].name}</h1>
                        </div>
                        <div className="planets__top--info-text">
                            <p>{data[currentPlanet].overview.content}</p>
                            <span>
                                Source : &nbsp;
                                <a href="#">
                                    Wikipedia
                                    <div className="arrow">
                                        <Image
                                            src={
                                                "/assets/images/icon-source.svg"
                                            }
                                            alt="arrow"
                                            width={12}
                                            height={12}
                                        />
                                    </div>
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="planets__top--info-buttons">
                        <div
                            className={
                                currentActive == "overview"
                                    ? "active"
                                    : "inactive"
                            }
                        >
                            <Button
                                number="01"
                                title="overview"
                                id="overview"
                                onClick={() => updateActive("overview")}
                            />
                        </div>
                        <div
                            className={
                                currentActive == "structure"
                                    ? "active"
                                    : "inactive"
                            }
                        >
                            <Button
                                number="02"
                                title="internal structure"
                                onClick={() => updateActive("structure")}
                            />
                        </div>
                        <div
                            className={
                                currentActive == "geology"
                                    ? "active"
                                    : "inactive"
                            }
                        >
                            <Button
                                number="03"
                                title="surface geology"
                                onClick={() => updateActive("geology")}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="planets__bottom">
                <div className="planets__bottom--rotation">
                    <h4 className="planets__bottom--rotation-title">
                        Rotation Time
                    </h4>
                    <h2 className="planets__bottom--rotation-data">
                        {data[currentPlanet].rotation}
                    </h2>
                </div>
                <div className="planets__bottom--revolution">
                    <h4 className="planets__bottom--rotation-title">
                        Revolution Time
                    </h4>
                    <h2 className="planets__bottom--rotation-data">
                        {data[currentPlanet].revolution}
                    </h2>
                </div>
                <div className="planets__bottom--radius">
                    <h4 className="planets__bottom--rotation-title">Radius</h4>
                    <h2 className="planets__bottom--rotation-data">
                        {data[currentPlanet].radius}
                    </h2>
                </div>
                <div className="planets__bottom--average">
                    <h4 className="planets__bottom--rotation-title">
                        Average Time
                    </h4>
                    <h2 className="planets__bottom--rotation-data">
                        {data[currentPlanet].temperature}
                    </h2>
                </div>
            </div>
        </section>
    );
}
