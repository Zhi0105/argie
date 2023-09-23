import { Controller, useForm } from "react-hook-form";
import { TextField } from "@_components/Partials/Forms/Input";
import { TextAreaField } from "@_components/Partials/Forms/TextArea";
import { PlanetCanvas } from "@_src/Components/Partials/Canvas/PlanetCanvas";

interface contactInterface {
  name: string,
  email: string,
  message: string
}

export const Contact = () => {

  const {
    handleSubmit,
    control,
  } = useForm<contactInterface>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (data: contactInterface): void => {
    console.log(data)
  }

  return (
    <div className='contact_main min-h-screen min-w-screen grid grid-cols-1 place-items-center px-8'>
      <div 
        className='contact_container h-full w-full mt-[10%] grid grid-cols-2
          xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2
        '
      > 
        <div className="w-full h-full flex justify-center items-center">
          <div className="xs:w-[100vw] xs:h-[50vh] sm:w[100:vw] sm:h-[60vh] w-[60vw] h-[50vh]">
            <PlanetCanvas />
          </div>
        </div>  

        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="font-bold text-[#08FFD4] text-5xl mb-5">Get in Touch!</div>
          <div className="w-full p-6 sm:rounded-md mx-4 shadow-2xl shadow-[#08FFD4]">
            <form className="contact_form grid grid-cols-1 gap-4 px-8"  onSubmit={handleSubmit((data) => onSubmit(data))}>
              <div className="name_textfield">
                  <Controller
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        onChange={onChange}
                        value={value}
                        type="text"
                        id="name"
                        name="name"
                        label='Name'
                        autoComplete="name"
                        required={true}
                      />
                    )}
                    name="name"
                  />
              </div>
              <div className="email_textfield">
                <Controller
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      label="Email"
                      required={true}
                    />
                  )}
                  name="email"
                />
              </div>
              <div className="message_textfield">
                <Controller
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextAreaField
                      onChange={onChange}
                      value={value}
                      id="message"
                      name="message"
                      label="Message"
                      autoComplete="message"
                      required={true}
                    />
                  )}
                  name="message"
                />
              </div>
              <div className='mt-5 text-center px-4'>
            
              <button type="submit" className="relative w-1/4 px-5 py-3 overflow-hidden font-medium text-[#08FFD4] bg-[#1D1D1D] border border-[#08FFD4] rounded-lg shadow-inner shadow-[#08FFD4] group">
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-[#FAC334] ease">Submit</span>
              </button>
    
            </div>
            </form>
            </div>
        </div>  
      </div>
  </div>

  )
}
