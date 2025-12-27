import React,{useContext,useState} from 'react'
import {Box} from '@mui/material'
import { Formik } from 'formik'
import Api from '../../../Api'
import { UserContext } from '../../context/context'
import{ reportSchema } from '../../../schemas/validation'
import ReportForm from '../../../Components/ReportForm'
import Header from '../../../Components/Header'
import {useParams,useNavigate} from 'react-router-dom'
import AlertPopup from '../../../Components/AlertPopup'

function NewReport() {
    const user=useContext(UserContext);
    const { id } = useParams();
    const navigate=useNavigate();
    
    const initialValues={
        Name:user?.name||"",
        email:user?.email||"",
        phone:"",
        title:"",
        complaintDetails:""
      }
       const [alert, setAlert] = useState({
                  show: false,
                  msg: "",
                  severity: "error",
                });
    const handleFormSubmit= async(values)=>{
         try {
           values.role="user";
                  const response= await Api.post(`/user/${id}/report/new`,values)
                  if (response.status===201) {
                      setAlert({
                    show: true,
                    msg:response.data.msg,
                    severity: "success",
                  });
                  setTimeout(() => {
                    navigate(-1)
                  }, 1000);
                  }
                } catch (err) {
                      setAlert({
                    show: true,
                    msg:err.status +" : "+ err.response?.data?.msg || "Login failed",
                    severity: "warning",
                  });
                }; 
    }
  return (
    <>
    <Box m="40px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Header title="Report issues" subtitle="Track, review, and resolve complaints" /> 
        </Box>
        <Formik
                      onSubmit={handleFormSubmit}
                      initialValues={initialValues}
                      enableReinitialize={true}
                      validationSchema={reportSchema}
                      validateOnChange={false}
                      validateOnBlur={false}
                    >
                      {({ values, errors, touched, handleBlur, handleChange, handleSubmit})=>(
                        <form onSubmit={handleSubmit}>
                            <ReportForm 
                              values={values} 
                              errors={errors} 
                              touched={touched} 
                              handleBlur={handleBlur} 
                              handleChange={handleChange}
                              
                              />
                        </form>
                      )}
                    </Formik>
         <AlertPopup Alertshow={alert.show} msg={alert.msg} severity={alert.severity} setAlert={setAlert}/>
    </Box>
    </>
  )
}

export default NewReport
