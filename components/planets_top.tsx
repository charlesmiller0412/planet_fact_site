import { useLayoutEffect } from "react";
import Image from "next/image";
import $ from "jquery";
import { Button } from "../components/button";
import usePlanetStore from "../appStore";
import useWindowDimensions from "../hooks/getDimensions";
let data = require("../public/assets/data.json");

export default function Planets_top() {
    let activeImage: any;
    let activeSource: any;
    let activeContent: any;
    let imageSize: any;

    const { width } = useWindowDimensions();

    const updateActive = usePlanetStore((state: any) => state.updateActive);
    const currentActive = usePlanetStore((state: any) => state.active);
    const currentPlanet = usePlanetStore((state: any) => state.planet);

    // get image sizes based on screen size
    function imageSizes() {
        // desktop > 768 tab > 576 mobile <= 576
        // mercury
        if (currentPlanet == 0) {
            if (width > 768) {
                imageSize = {
                    width: "25vw",
                    maxWidth: "29rem",
                    height: "25vw",
                    maxHeight: "29rem",
                    position: "relative",
                };
            } else if (width <= 768 && width > 576) {
                imageSize = {
                    width: "27vw",
                    maxWidth: "18.4rem",
                    height: "27vw",
                    maxHeight: "18.4rem",
                    position: "relative",
                };
            } else if (width <= 576) {
                imageSize = {
                    width: "22vw",
                    maxWidth: "11rem",
                    height: "22vw",
                    maxHeight: "11rem",
                    position: "relative",
                };
            }
            // venus
        } else if (currentPlanet == 1) {
            if (width > 768) {
                imageSize = {
                    width: "30vw",
                    height: "30vw",
                    maxWidth: "40rem",
                    maxHeight: "40rem",
                    position: "relative",
                };
            } else if (width <= 768 && width > 576) {
                imageSize = {
                    width: "34.5vw",
                    maxWidth: "25.3rem",
                    height: "34.5vw",
                    maxHeight: "25.3rem",
                    position: "relative",
                };
            } else if (width <= 576) {
                imageSize = {
                    width: "42vw",
                    maxWidth: "15.4rem",
                    height: "42vw",
                    maxHeight: "15.4rem",
                    position: "relative",
                };
            }
            // earth
        } else if (currentPlanet == 2) {
            if (width > 768) {
                imageSize = {
                    width: "29.5vw",
                    height: "29.5vw",
                    maxWidth: "45rem",
                    maxHeight: "45rem",
                    position: "relative",
                };
            } else if (width <= 768 && width > 576) {
                imageSize = {
                    width: "37.5vw",
                    maxWidth: "28.5rem",
                    height: "37.5vw",
                    maxHeight: "28.5rem",
                    position: "relative",
                };
            } else if (width <= 576) {
                imageSize = {
                    width: "44.5vw",
                    maxWidth: "17.3rem",
                    height: "44.5vw",
                    maxHeight: "17.3rem",
                    position: "relative",
                };
            }
        } else if (currentPlanet == 3) {
            if (width > 768) {
                imageSize = {
                    width: "22vw",
                    height: "22vw",
                    maxWidth: "33.6rem",
                    maxHeight: "33.6rem",
                    position: "relative",
                };
            } else if (width <= 768 && width > 576) {
                imageSize = {
                    width: "28vw",
                    maxWidth: "21.3rem",
                    height: "28vw",
                    maxHeight: "21.3rem",
                    position: "relative",
                };
            } else if (width <= 576) {
                imageSize = {
                    width: "35vw",
                    maxWidth: "12.9rem",
                    height: "35vw",
                    maxHeight: "12.9rem",
                    position: "relative",
                };
            }
        } else if (currentPlanet == 4) {
            if (width > 768) {
                imageSize = {
                    width: "41vw",
                    maxWidth: "58.2rem",
                    height: "41vw",
                    maxHeight: "58.2rem",
                    position: "relative",
                };
            } else if (width <= 768 && width > 576) {
                imageSize = {
                    width: "48vw",
                    maxWidth: "36.9rem",
                    height: "48vw",
                    maxHeight: "36.9rem",
                    position: "relative",
                };
            } else if (width <= 576) {
                imageSize = {
                    width: "60vw",
                    maxWidth: "22.4rem",
                    height: "60vw",
                    maxHeight: "22.4rem",
                    position: "relative",
                };
            }
        } else if (currentPlanet == 5) {
            if (width > 768) {
                imageSize = {
                    width: "43.5vw",
                    height: "43.5vw",
                    maxWidth: "66.6rem",
                    maxHeight: "66.6rem",
                    position: "relative",
                };
            } else if (width <= 768 && width > 576) {
                imageSize = {
                    width: "55vw",
                    maxWidth: "42.2rem",
                    height: "55vw",
                    maxHeight: "42.2rem",
                    position: "relative",
                };
            } else if (width <= 576) {
                imageSize = {
                    width: "68vw",
                    maxWidth: "25.6rem",
                    height: "68vw",
                    maxHeight: "25.6rem",
                    position: "relative",
                };
            }
        } else if (currentPlanet == 6) {
            if (width > 768) {
                imageSize = {
                    width: "30vw",
                    height: "30vw",
                    maxWidth: "45.8rem",
                    maxHeight: "45.8rem",
                    position: "relative",
                };
            } else if (width <= 768 && width > 576) {
                imageSize = {
                    width: "38vw",
                    maxWidth: "29rem",
                    height: "38vw",
                    maxHeight: "29rem",
                    position: "relative",
                };
            } else if (width <= 576) {
                imageSize = {
                    width: "47vw",
                    maxWidth: "17.6rem",
                    height: "47vw",
                    maxHeight: "17.6rem",
                    position: "relative",
                };
            }
        } else if (currentPlanet == 7) {
            if (width > 768) {
                imageSize = {
                    width: "29.5vw",
                    height: "29.5vw",
                    maxWidth: "45rem",
                    maxHeight: "45rem",
                    position: "relative",
                };
            } else if (width <= 768 && width > 576) {
                imageSize = {
                    width: "38vw",
                    maxWidth: "28.5rem",
                    height: "38vw",
                    maxHeight: "28.5rem",
                    position: "relative",
                };
            } else if (width <= 576) {
                imageSize = {
                    width: "47vw",
                    maxWidth: "17.3rem",
                    height: "47vw",
                    maxHeight: "17.3rem",
                    position: "relative",
                };
            }
        }
    }

    function getSection() {
        // set current section
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
            activeSource = (
                <a href={data[currentPlanet].overview.source} target="__blank">
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
            );
            activeContent = <p>{data[currentPlanet].overview.content}</p>;
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
            activeSource = (
                <a href={data[currentPlanet].structure.source} target="__blank">
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
            );
            activeContent = <p>{data[currentPlanet].structure.content}</p>;
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
                            width={width <= 576 ? "80px" : "163px"}
                            height={width <= 576 ? "100px" : "200px"}
                        />
                    </div>
                </>
            );
            activeSource = (
                <a href={data[currentPlanet].geology.source} target="__blank">
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
            );
            activeContent = <p>{data[currentPlanet].geology.content}</p>;
        }
    }

    function changeStyles() {
        // change button style on click
        if (currentPlanet == 0) {
            if (width >= 576) {
                $(".active").css("background-color", "#419ebb");
                $(".inactive").css("background-color", "transparent");
            } else if (width < 576) {
                $(".active").css({
                    "background-color": "transparent",
                    "border-bottom": "4px solid #419ebb",
                });
                $(".inactive").css("border-bottom", "none");
            }
        } else if (currentPlanet == 1) {
            if (width >= 576) {
                $(".active").css("background-color", "#eda249");
                $(".inactive").css("background-color", "transparent");
            } else if (width < 576) {
                $(".active").css({
                    "background-color": "transparent",
                    "border-bottom": "4px solid #eda249",
                });
                $(".inactive").css("border-bottom", "none");
            }
        } else if (currentPlanet == 2) {
            if (width >= 576) {
                $(".active").css("background-color", "#6f2ed6");
                $(".inactive").css("background-color", "transparent");
            } else if (width < 576) {
                $(".active").css({
                    "background-color": "transparent",
                    "border-bottom": "4px solid #6f2ed6",
                });
                $(".inactive").css("border-bottom", "none");
            }
        } else if (currentPlanet == 3) {
            if (width >= 576) {
                $(".active").css("background-color", "#d14c32");
                $(".inactive").css("background-color", "transparent");
            } else if (width < 576) {
                $(".active").css({
                    "background-color": "transparent",
                    "border-bottom": "4px solid #d14c32",
                });
                $(".inactive").css("border-bottom", "none");
            }
        } else if (currentPlanet == 4) {
            if (width >= 576) {
                $(".active").css("background-color", "#d83834");
                $(".inactive").css("background-color", "transparent");
            } else if (width < 576) {
                $(".active").css({
                    "background-color": "transparent",
                    "border-bottom": "4px solid #d83834",
                });
                $(".inactive").css("border-bottom", "none");
            }
        } else if (currentPlanet == 5) {
            if (width >= 576) {
                $(".active").css("background-color", "#cd5120");
                $(".inactive").css("background-color", "transparent");
            } else if (width < 576) {
                $(".active").css({
                    "background-color": "transparent",
                    "border-bottom": "4px solid #cd5120",
                });
                $(".inactive").css("border-bottom", "none");
            }
        } else if (currentPlanet == 6) {
            if (width >= 576) {
                $(".active").css("background-color", "#1ec3a4");
                $(".inactive").css("background-color", "transparent");
            } else if (width < 576) {
                $(".active").css({
                    "background-color": "transparent",
                    "border-bottom": "4px solid #1ec3a4",
                });
                $(".inactive").css("border-bottom", "none");
            }
        } else if (currentPlanet == 7) {
            if (width >= 576) {
                $(".active").css("background-color", "#2d68f0");
                $(".inactive").css("background-color", "transparent");
            } else if (width < 576) {
                $(".active").css({
                    "background-color": "transparent",
                    "border-bottom": "4px solid #2d68f0",
                });
                $(".inactive").css("border-bottom", "none");
            }
        }
    }
    imageSizes();
    getSection();
    useLayoutEffect(() => {
        changeStyles();
    });

    return (
        <div className="planets__top">
            <div className="planets__top--image">{activeImage}</div>
            <div className="planets__top--info">
                <div className="planets__top--info-tablet">
                    <div className="planets__top--info-title">
                        <h1>{data[currentPlanet].name}</h1>
                    </div>
                    <div className="planets__top--info-text">
                        {activeContent}
                        <span>
                            Source : &nbsp;
                            {activeSource}
                        </span>
                    </div>
                </div>
                <div className="planets__top--info-buttons">
                    <div
                        className={
                            currentActive == "overview" ? "active" : "inactive"
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
                            currentActive == "structure" ? "active" : "inactive"
                        }
                    >
                        <Button
                            number="02"
                            title={
                                width >= 481
                                    ? "internal structure"
                                    : "structure"
                            }
                            onClick={() => updateActive("structure")}
                        />
                    </div>
                    <div
                        className={
                            currentActive == "geology" ? "active" : "inactive"
                        }
                    >
                        <Button
                            number="03"
                            title={width >= 481 ? "surface geology" : "surface"}
                            onClick={() => updateActive("geology")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
