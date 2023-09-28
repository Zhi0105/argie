import { Controller, useForm } from "react-hook-form";
import { TextField } from "@_components/Partials/Forms/Input";
import { TextAreaField } from "@_components/Partials/Forms/TextArea";
import emailjs from '@emailjs/browser'

  // https://dashboard.emailjs.com/admin  user: barcenaargie@gmail.com pass: Zhi@0105
  // 0xSBZKyqWDyNwUNGV
  // template_k7i45qx
  // service_aya6wle

interface contactInterface {
  name: string,
  email: string,
  message: string
}

export const ContactForm = () => {

  const {
    handleSubmit,
    control,
    setValue
  } = useForm<contactInterface>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (data: contactInterface): void => {

    emailjs.send(
      'service_aya6wle', 
      'template_k7i45qx',
      {
        from_name: data.name,
        to_name: 'Argie',
        from_email: data.email,
        to_email: 'barcenaargie@gmail.com',
        message: data.message
      },
      '0xSBZKyqWDyNwUNGV'
    ).then(() => {
      alert('Thank you. I will get back to you as soon as possible!')
      setValue("name", '')
      setValue("email", '')
      setValue("message", '')
    }, (error) => {
      console.log("@CE:", error)
      alert("Something went wrong.")
    })
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="font-bold text-[#08FFD4] text-5xl mb-5">Get in Touch!</div>
      <div className="w-full p-6 sm:rounded-lg rounded-xl mx-4 shadow-2xl shadow-[#08FFD4]">
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
                    label='Your Name'
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
                  label="Your Email"
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
                  label="Your Message"
                  autoComplete="message"
                  required={true}
                />
              )}
              name="message"
            />
          </div>
          <div className='mt-5 text-center px-4'>
        
          <button type="submit" className="relative w-full px-5 py-3 overflow-hidden font-medium text-[#08FFD4] bg-[#1D1D1D] border border-[#08FFD4] rounded-lg shadow-inner shadow-[#08FFD4] group">
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
  )
}
