import { useFrame } from "@react-three/fiber"
import { useScroll } from "@react-three/drei"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

type Props = {
  section: number
  onSectionChange: (newSection: number) => void
}

export const ScrollManager = ({ section, onSectionChange }: Props) => {
  const data = useScroll()
  const lastScrollTop = useRef(0)
  const isAnimating = useRef(false)

  data.fill.classList.add('top-0')
  data.fill.classList.add('absolute')

  useEffect(() => {
    const el = data.el
    if (!el) return

    gsap.to(el, {
      duration: 1,
      scrollTop: section * el.clientHeight,
      ease: "power2.out",
      onStart: () => {
        isAnimating.current = true
      },
      onComplete: () => {
        isAnimating.current = false
      },
    })
  }, [section, data])

  useFrame(() => {
    const el = data.el
    if (!el) return

    const scrollTop = el.scrollTop
    const pageH = el.clientHeight
    const pages = data.pages

    if (isAnimating.current) {
      lastScrollTop.current = scrollTop
      return
    }

    // current snapped section based on scrollTop
    const curSection = Math.round(scrollTop / pageH)

    const scrollingDown = scrollTop > lastScrollTop.current
    const scrollingUp = scrollTop < lastScrollTop.current

    // Your original intent (2 sections: 0 and 1)
    if (scrollingDown && curSection === 0) {
      onSectionChange(1)
    }

    // When scrolling up near the top region, go back to section 0
    const topThreshold = pageH / Math.max(1, pages - 1) // similar spirit to your 1/(pages-1)
    if (scrollingUp && scrollTop < topThreshold) {
      onSectionChange(0)
    }

    lastScrollTop.current = scrollTop
  })

  return null
}
