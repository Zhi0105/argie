import { FC } from 'react'

interface TextAreaFieldInterface {
  value: string,
  autoComplete: string,
  onChange: ( e:React.ChangeEvent<HTMLTextAreaElement>) => void,
  id: string,
  name: string,
  label: string,
  required?: boolean,
}

export const TextAreaField: FC<TextAreaFieldInterface> = ({ value, autoComplete, onChange, id, name, label, required }) => {
	return (
    <div className="relative w-full">
    <textarea
      className="disabled:bg-slate-50 disabled:border-b-2 peer pl-2 h-full w-full border-b-2 border-gray-200 bg-transparent pt-5 font-sans text-base font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#f59e0b] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      onChange={onChange}
      value={value}
      autoComplete={autoComplete}
      id={id}
      name={name} 
      placeholder=" "
      required={required}
    ></textarea>
  <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] text-[#08FFD4] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-0 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#f59e0b] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-[#08FFD4] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#f59e0b] peer-focus:after:scale-x-100 peer-focus:after:border-[#f59e0b] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">      
      <span className='font-bold'>{label}</span>
    </label>
  </div>
	)
}
