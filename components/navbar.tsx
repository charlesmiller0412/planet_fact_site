import usePlanetStore from "../appStore";

export default function Navbar() {
    let data = require("../public/assets/data.json");
    const updatePlanet = usePlanetStore((state: any) => state.updatePlanet);
    const updateActive = usePlanetStore((state: any) => state.updateActive);

    function handleClick(this: any, event: any, key: any) {
        updatePlanet(key);
        updateActive("overview");
    }

    return (
        <nav className="navbar">
            <div className="navbar__title">the planets</div>
            <div className="navbar__links">
                <a href="#" onClick={(event) => handleClick(event, 0)}>
                    <h4>{data[0].name}</h4>
                </a>
                <a href="#" onClick={(event: any) => handleClick(event, 1)}>
                    <h4>{data[1].name}</h4>
                </a>
                <a href="#" onClick={(event: any) => handleClick(event, 2)}>
                    <h4>{data[2].name}</h4>
                </a>
                <a href="#" onClick={(event: any) => handleClick(event, 3)}>
                    <h4>{data[3].name}</h4>
                </a>
                <a href="#" onClick={(event: any) => handleClick(event, 4)}>
                    <h4>{data[4].name}</h4>
                </a>
                <a href="#" onClick={(event: any) => handleClick(event, 5)}>
                    <h4>{data[5].name}</h4>
                </a>
                <a href="#" onClick={(event: any) => handleClick(event, 6)}>
                    <h4>{data[6].name}</h4>
                </a>
                <a href="#" onClick={(event: any) => handleClick(event, 7)}>
                    <h4>{data[7].name}</h4>
                </a>
            </div>
        </nav>
    );
}
