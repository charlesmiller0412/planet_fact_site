import { useState } from "react";
import usePlanetStore from "../appStore";
import Image from "next/image";
import openMenu from "../public/assets/images/icon-hamburger.svg";
import starBG from "../public/assets/images/background-stars.svg";
import chevron from "../public/assets/images/icon-chevron.svg";

export default function MobileNav() {
    const [showMenu, setShowMenu] = useState(false);
    let data = require("../public/assets/data.json");
    const updatePlanet = usePlanetStore((state: any) => state.updatePlanet);
    const updateActive = usePlanetStore((state: any) => state.updateActive);

    function handleClick(this: any, event: any, key: any) {
        updatePlanet(key);
        updateActive("overview");
        setShowMenu(false);
    }

    return (
        <nav className="mobileNav">
            <div className="mobileNav__title">the planets</div>
            <div
                className="mobileNav__menuBtn"
                onClick={() => {
                    setShowMenu(!showMenu);
                }}
            >
                <Image
                    src={openMenu}
                    alt="menu button"
                    layout="responsive"
                    width={24}
                    height={17}
                />
            </div>
            <div className={showMenu ? "mobileMenu showMenu" : "mobileMenu"}>
                <ul>
                    <li
                        onClick={() => {
                            handleClick(event, 0);
                        }}
                    >
                        <div
                            className="mobileMenu__color"
                            style={{ backgroundColor: "#419ebb" }}
                        />
                        Mercury
                    </li>
                    <li
                        onClick={() => {
                            handleClick(event, 1);
                        }}
                    >
                        <div
                            className="mobileMenu__color"
                            style={{ backgroundColor: "#eda249" }}
                        />
                        venus
                    </li>
                    <li
                        onClick={() => {
                            handleClick(event, 2);
                        }}
                    >
                        <div
                            className="mobileMenu__color"
                            style={{ backgroundColor: "#6f2ed6" }}
                        />
                        earth
                    </li>
                    <li
                        onClick={() => {
                            handleClick(event, 3);
                        }}
                    >
                        <div
                            className="mobileMenu__color"
                            style={{ backgroundColor: "#d14c32" }}
                        />
                        mars
                    </li>
                    <li
                        onClick={() => {
                            handleClick(event, 4);
                        }}
                    >
                        <div
                            className="mobileMenu__color"
                            style={{ backgroundColor: "#d83834" }}
                        />
                        jupiter
                    </li>
                    <li
                        onClick={() => {
                            handleClick(event, 5);
                        }}
                    >
                        <div
                            className="mobileMenu__color"
                            style={{ backgroundColor: "#cd5120" }}
                        />
                        saturn
                    </li>
                    <li
                        onClick={() => {
                            handleClick(event, 6);
                        }}
                    >
                        <div
                            className="mobileMenu__color"
                            style={{ backgroundColor: "#1ec3a4" }}
                        />
                        uranus
                    </li>
                    <li
                        onClick={() => {
                            handleClick(event, 7);
                        }}
                    >
                        <div
                            className="mobileMenu__color"
                            style={{ backgroundColor: "#2d68f0" }}
                        />
                        neptune
                    </li>
                </ul>
            </div>
        </nav>
    );
}
