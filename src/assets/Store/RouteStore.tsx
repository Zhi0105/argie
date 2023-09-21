import { create } from 'zustand'
import { persist } from 'zustand/middleware'
// import { persist, createJSONStorage } from 'zustand/middleware'

interface RouteStoreInterface {
    route: {
        pathname: string
    },
    activeRoute: string | null,
    setRoute: (route:any) => void,
    setActiveRoute: (route: string) => void
}

const routeStore = persist<RouteStoreInterface>(
    (set) => ({
        route: {
            pathname: ""
        },
        activeRoute: null,
        setRoute: (string) => set(() => ({ route: string })),
        setActiveRoute: (string) => set(() => ({ activeRoute: string })),
    }),
    {
        name: 'location-store', // name of the item in the storage (must be unique)
        // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
)


export const useRouteStore = create(routeStore)