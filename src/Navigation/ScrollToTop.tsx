import { useState, useEffect } from "react"
import Lottie from "lottie-react"
import rocket from '@_assets/rocket.json'

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)
  const scrollTop = ():void => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }


  const listentoToScroll = ():void => {
    let heightToHidden = 250;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    
    winScroll > heightToHidden ? setVisible(true) : setVisible(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", listentoToScroll)
  }, [])

  return (
    <div className="top-btn z-20 w-[11rem] fixed bottom-0 right-0 pr-12 pb-12" onClick={scrollTop}>
        {visible &&
          <Lottie animationData={rocket} width={10} height={10} />
        }
    </div>
  )
}
