import { FC } from 'react'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faCode, faMobile } from '@fortawesome/free-solid-svg-icons';

interface CircularProgressInterface {
  width: number,
  height: number,
  value: number,
  rgb: string,
  icon: string
}

export const CircularProgress: FC<CircularProgressInterface> = ({ width, height, value, rgb, icon }) => {
  return (
    <div className='circlular_progress_container' style={{ width: width, height: height }}>
      <CircularProgressbarWithChildren value={value}
      styles={buildStyles({
        pathColor: `rgba(${rgb}, ${value / 100})`,
      })}
      >
        <div className='flex flex-col justify-center items-center gap-3'>
          {icon === "brush" ?
          <FontAwesomeIcon 
            icon={faPaintBrush}
            style={{ color: `rgb(${rgb})`}}
            fontSize={25} 
          /> :
          icon === "code" ? 
          <FontAwesomeIcon 
            icon={faCode} 
            style={{ color: `rgb(${rgb})`}}
            fontSize={25} 
          /> :
          <FontAwesomeIcon 
            icon={faMobile} 
            style={{ color: `rgb(${rgb})`}}
            fontSize={25} 
          /> 
          }
          <div style={{ fontSize: 12, marginTop: -5 }}>
            <strong style={{ color: `rgb(${rgb})`}}>{value}%</strong>
          </div>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  )
}
