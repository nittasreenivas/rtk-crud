import React from 'react'
import { Formik } from 'formik';
import { useAddEveryLeadMutation } from '../services/leadsApi';
function AddLeads() {
 var [addLead] =  useAddEveryLeadMutation()
//  console.log("addLead::",addLead)
  return (
    <div className='border border-2 border-warning m-2 p-2'>
        <h3>AddLeads</h3>
        <Formik
        initialValues={{firstname:"",lastname:'',graduation:'',percentage:''}}
        onSubmit={(values,x) => {
          addLead(values).then((res) => {
            alert("Lead Added succesfully")
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
                            <input type="text" placeholder='enter graduation' name="graduation" onChange={handleChange}
                          onBlur={handleBlur} value={values.graduation}/> <br/>
                            <input type="text" placeholder='enter percentage' name="percentage" onChange={handleChange}
                          onBlur={handleBlur} value={values.percentage}/> <br/>
                          <button type="submit">AddLeads</button>
                        </form>
                    </div>
                )
            }
          }
        </Formik>
    </div>
  )
}

export default AddLeads