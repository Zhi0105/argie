import { FC } from 'react'
import { SyncLoader } from 'react-spinners'
import { LoadCanvas } from '@_components/Partials/LoadCanvas'

interface PreLoadInterface {
  loading: boolean
}

export const Preload: FC<PreLoadInterface> = ({ loading }) => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <div style={{ 
          width: "50vw",
          height: "50vh",
      }}>
        <LoadCanvas />
      </div>
      <div className='text-[#08FFD4] text-xl flex gap-2'>
        <span>Loading</span>
        <SyncLoader color={"#08FFD4"} loading={loading} size={20} />
      </div>
    </div>
  )
}
