import create from "zustand";

const usePlanetStore = create((set) => ({
    planet: "0",
    updatePlanet: (key: any) => set({ planet: key }),
    active: "overview",
    updateActive: (key: any) => set({ active: key }),
}));

export default usePlanetStore;
