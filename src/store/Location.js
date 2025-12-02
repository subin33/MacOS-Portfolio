import { locations } from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const DEAFULT_LOCATION = locations.work;

const useLocationStore = create(immer((set)=>({
    activeLocation: DEAFULT_LOCATION,

    setActiveLocation: (location) => 
        set((state) => {
            if(location === undefined) return;
            state.activeLocation = location;
        }),

    resetActiveLocation: () => 
        set((state) => {
            state.activeLocation = DEAFULT_LOCATION;
        }),
})))

export default useLocationStore;