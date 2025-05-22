
import './App.css'
import { useForm } from 'react-hook-form'

function App() {


  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();


  async function onSubmit(data) {
    // API call ko simulate krte hai..
    await new Promise((resolve) => setTimeout(resolve, 4000));
      
    console.log("submiting the from", data);
  }


  return (
    <>
     <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name:</label>
        <input className={errors.firstName} {...register('firstName', {required: true, minLength: {value: 3, message: 'Min len atleast 3'}, maxLength: {value: 8, message: 'max len should be 8'}})} />
        {errors.firstName && <p style={{color: 'red'}}>{errors.firstName.message}</p>}
      </div>

      <br />
      <div>
        <label>Middle Name:</label>
        <input {...register('middleName')} />
      </div>


      <br />
      <div>
        <label>Last Name:</label>
        <input {...register('lastName', {
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: 'Last name is not as per the rules'
          }
        })} />
        {errors.lastName && <p style={{color: 'red'}}> {errors.lastName.message}</p>}
      </div>
      <br />
      <input type="Submit" disabled={ isSubmitting} value={isSubmitting ? "submiting" : "Submit" }/>
     </form>
    </>
  )
}

export default App
