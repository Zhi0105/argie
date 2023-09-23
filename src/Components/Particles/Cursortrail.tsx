
import MouseTrail from "@pjsalita/react-mouse-trail";

export const CursorTrail = () => {
    const config = {
      idleAnimation: false,
      idleAnimationCount: 10,
      inverted: true,
      size: 20,
      trailCount: 30,
    };
  return (
    <MouseTrail {...config} />

  )
}
