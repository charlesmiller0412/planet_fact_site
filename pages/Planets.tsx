import dynamic from "next/dynamic";
import Planets_bottom from "../components/planets_bottom";

const Planets_top = dynamic(() => import("../components/planets_top"), {
    ssr: false,
});

export default function Planets() {
    return (
        <section className="planets">
            <Planets_top />
            <Planets_bottom />
        </section>
    );
}
