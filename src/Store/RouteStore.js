import { create } from 'zustand'

const RouteStore = create((set) =>({
    route: '',
    setRoute: (string) => set((state) => ({ route: string })),
})) 

export default RouteStore