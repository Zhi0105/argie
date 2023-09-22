import { 
  Html,
  Css,
  Js,
  Php,
  Mysql,
  Firebase,
  Git,
  Laragon,
  Node,
  Wordpress,
  Laravel,
  Next,
  Reactjs,
  ReactNative,
  Typescript 
} from "@_components/Lazy/LazyImage"
import { MapCards } from "./cards/MapCards"

export const Roadmap = () => {
  return (
    <div className="roadmap_main pt-5">
      <div className="card_container bg-[#1D1D1D] p-6 grid xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 grid-cols-5 gap-4 shadow-2xl">
        <MapCards image={ <Html width={50} height={50}/> } text={'HTML'} />
        <MapCards image={ <Css width={45} height={45}/> } text={'CSS'} />
        <MapCards image={ <Js width={50} height={50}/> } text={'Javascript'} />
        <MapCards image={ <Reactjs width={50} height={50}/> } text={'React'} />
        <MapCards image={ <Next width={50} height={50}/> } text={'Next'} />
        <MapCards image={ <Firebase width={40} height={40}/> } text={'Firebase'} />
        <MapCards image={ <Git width={52} height={52}/> } text={'Github'} />
        <MapCards image={ <Laragon width={50} height={50}/> } text={'Laragon'} />
        <MapCards image={ <Node width={50} height={50}/> } text={'Node js'} />
        <MapCards image={ <Wordpress width={50} height={50}/> } text={'Wordpress'} />
        <MapCards image={ <Laravel width={50} height={50}/> } text={'Laravel'} />
        <MapCards image={ <Mysql width={50} height={50}/> } />
        <MapCards image={ <Php width={50} height={50}/> } />
        <MapCards image={ <ReactNative width={50} height={50}/> } />
        <MapCards image={ <Typescript width={50} height={50}/> } text={'Typescript'} />
      </div>
    </div>
  )
}
