import { FC } from 'react'
import { SyncLoader } from 'react-spinners'
import load from '@_assets/loader.json'
import Lottie from 'lottie-react'
interface PreLoadInterface {
  loading: boolean
}

export const Preload: FC<PreLoadInterface> = ({ loading }) => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <Lottie animationData={load} />
      <div className='text-[#08FFD4] text-xl flex gap-2'>
        <span>Loading</span>
        <SyncLoader color={"#08FFD4"} loading={loading} size={20} />
      </div>
    </div>
  )
}
