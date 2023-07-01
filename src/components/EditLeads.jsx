import React from 'react'
import { Formik } from 'formik';
import { useEditLeadByIdMutation } from '../services/leadsApi';
import { useLocation } from 'react-router-dom';
function EditLeads() {
  const {state:lead} = useLocation()
 
 var [editUser] =  useEditLeadByIdMutation()
  return (
    <div  className='border border-2 border-secondary m-2 p-2'>
        <h3 className='text-center'>EditLeads</h3>
        <div>
        <Formik
        initialValues={{...lead}}
        onSubmit={(values,x) => {
          editUser(values).then((res) => {
            alert("lead has been edited succesfully")
            console.log("res::",res)
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
                            <input type="text" placeholder='enter graduation' name="graduation" onChange={handleChange}
                          onBlur={handleBlur} value={values.graduation}/> <br/>
                            <input type="text" placeholder='enter percentage' name="percentage" onChange={handleChange}
                          onBlur={handleBlur} value={values.percentage}/> <br/>
                          <button type="submit">EditLead</button>
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

export default EditLeads