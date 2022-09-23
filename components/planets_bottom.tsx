import usePlanetStore from "../appStore";

export default function Planets_bottom() {
    let data = require("../public/assets/data.json");
    const currentPlanet = usePlanetStore((state: any) => state.planet);

    return (
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
    );
}
