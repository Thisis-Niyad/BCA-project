import React from 'react'
import Header from '../../Components/Header'
import {Box} from '@mui/material'
import { Formik } from 'formik'
import * as yup from "yup"
import ReportForm from '../../Components/ReportForm'

const initialValues={
  Name:"",
  email:"",
  phone:"",
  complaintDetails:""
}

const phoneRegExp= /^(\+91|91|0)?[6-9]\d{9}$/;

const reportSchema=yup.object().shape({
  Name:yup.string().required("required"),
  email:yup.string().email("invalid E-mail").required("required"),
  phone:yup.string().matches(phoneRegExp,"phone.no is not valid").required("required"),
  complaintDetails:yup.string().required("required")
})
function Report() {
        const handleFormSubmit=(values)=>{
          console.log(values);
      }
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="User Report issues" subtitle="Track, review, and resolve complaints" /> 
        </Box>
     <Formik
              onSubmit={handleFormSubmit}
              initialValues={initialValues}
              validationSchema={reportSchema}
            >
              {({ values, errors, touched, handleBlur, handleChange, handleSubmit})=>(
                <form onSubmit={handleSubmit}>
                    <ReportForm 
                      values={values} 
                      errors={errors} 
                      touched={touched} 
                      handleBlur={handleBlur} 
                      handleChange={handleChange}
                      initialValues={initialValues}
                      />
                </form>
              )}
            </Formik>
        </Box>
        
  )
}

export default Report
