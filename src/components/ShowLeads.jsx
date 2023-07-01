import React from 'react'
import { useDeleteLeadByIdMutation, useShowLeadsByNameQuery } from '../services/leadsApi'
import { useNavigate } from 'react-router-dom'
function ShowLeads() {
 var {isLoading,data} =  useShowLeadsByNameQuery()
 console.log("data::",data)
 const navigate = useNavigate()
 var [delUser] = useDeleteLeadByIdMutation()

 const  handleDelete = (id) => {
       delUser(id).then((res) => {
        alert("Lead has been deleted")
        console.log("res::",res.data)
       })
 }
 const handleEdit = (lead) => {
    navigate('/editLeads',{
      state:lead
    })
 }
  return (
    <div  className='border border-2  m-2 p-2'>
        <h3 className='text-center'>ShowLeads</h3>
        {
          isLoading ? (
            <div className="spinner-border text-danger" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
          ):(
            <div className='d-flex justify-content-center mt-5'>
              <table className="table table-bordered border-success">
                <thead>
                  <tr>
                    <th className="text-center">Firstname</th>
                    <th className="text-center">Lastname</th>
                    <th className="text-center">Graduation</th>
                    <th className="text-center">Percentage</th>
                    <th className="text-center">Delete</th>
                    <th className="text-center">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.map((d,i) => {
                      return(
                        <tr key={i}>
                          <td className="text-center">{d.firstname}</td>
                          <td className="text-center">{d.lastname}</td>
                          <td className="text-center">{d.graduation}</td>
                          <td className="text-center">{d.percentage}</td>
                           <td className="text-center">
                            <button className='btn btn-sm btn-danger' onClick={() => handleDelete(d.id)}>Del</button>
                           </td>
                           <td className="text-center">
                            <button className='btn btn-sm btn-primary' onClick={() => handleEdit(d)}>Edit</button>
                           </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
              </div>
          )
        }
    </div>
  )
}

export default ShowLeads