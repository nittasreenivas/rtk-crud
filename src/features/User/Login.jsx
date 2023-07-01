import React from 'react'
import { Formik } from 'formik';
import { useLazyUserLoginQuery } from '../../services/regUserApi';
import { useDispatch } from 'react-redux';
import { updateUserDetails } from './userSlice';
import { useNavigate } from 'react-router-dom'
function Login() {
    const dispatch = useDispatch()
  var [loginUser] =   useLazyUserLoginQuery()
  const navigate = useNavigate()
  return (
    <div>
        <h3 className='text-center mt-2'>Login</h3>
        <div>
        <Formik
        initialValues={{username:'',password:''}}
        onSubmit={(values,x) => {
            loginUser(values).then((res) => {
                console.log("res::",res.data[0])
                dispatch(updateUserDetails(res.data[0]))
                navigate('/showLeads')
            })
            console.log("values::",values)
            x.resetForm()
        }}>
          {
            ({values,handleBlur,handleChange,handleSubmit}) => {
                return(
                    <div>
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder='enter username' name="username" onChange={handleChange}
                          onBlur={handleBlur} value={values.username}/> <br/>
                            <input type="password" placeholder='enter password' name="password" onChange={handleChange}
                          onBlur={handleBlur} value={values.password}/> <br/>
                          <button type="submit">Login</button>
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

export default Login