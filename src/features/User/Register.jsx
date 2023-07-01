import React from 'react'
import { Formik } from 'formik';
import { useRegUserByNameMutation } from '../../services/regUserApi';
function Register() {
   var [regUser] =  useRegUserByNameMutation()
  return (
    <div>
        <h3 className='text-center mt-2'>Register</h3>
        <div>
        <Formik
        initialValues={{firstname:"",lastname:'',username:'',password:''}}
        onSubmit={(values,x) => {
            regUser(values).then((res) => {
                alert("New user Registered")
                console.log("res::",res.data)
            })
            console.log("values::",values)
            x.resetForm()
        }}>
          {
            ({values,handleBlur,handleChange,handleSubmit}) => {
                return(
                    <div>
                        <form onSubmit={handleSubmit}>
                          <input type="text" placeholder='enter firstname' name="firstname" onChange={handleChange}
                          onBlur={handleBlur} value={values.firstname}/> <br/>
                            <input type="text" placeholder='enter lastname' name="lastname" onChange={handleChange}
                          onBlur={handleBlur} value={values.lastname}/> <br/>
                            <input type="text" placeholder='enter username' name="username" onChange={handleChange}
                          onBlur={handleBlur} value={values.username}/> <br/>
                            <input type="password" placeholder='enter password' name="password" onChange={handleChange}
                          onBlur={handleBlur} value={values.password}/> <br/>
                          <button type="submit">Reg User</button>
                        </form>
                    </div>
                )
            }
          }
        </Formik>
        </div>
    </div>
  )
}

export default Register