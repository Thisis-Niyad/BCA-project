import React from 'react'
import Header from '../../Components/Header'
import {Box} from '@mui/material'
import ProfileSection from '../../Components/ProfileSection'
import { Formik } from 'formik'
import * as yup from "yup"

const initialValues={
  Name:"",
  email:"",
  DOB:"",
  gender:"",
  phone:"",
  address:"",
  ProfileImg:"",
}
const phoneRegExp= /^(\+91|91|0)?[6-9]\d{9}$/;

const ProfileSchema=yup.object().shape({
  Name:yup.string().required("required"),
  email:yup.string().email("invalid E-mail").required("required"),
  DOB:yup.date().typeError("Invalid date").required("Date of birth is required"),
  gender: yup.string().required("Gender is required"),
  phone:yup.string().matches(phoneRegExp,"phone.no is not valid").required("required"),
  address:yup.string().required("required"),
})

function Profile() {
      const handleFormSubmit=(values)=>{
          console.log(values);
      }
  return (
    <>
    <Box m="20px">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Profile Section" subtitle="Track, review, and resolve complaints" /> 
          </Box>

        <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={ProfileSchema}
          >
             {({ values, errors, touched, handleBlur, handleChange, handleSubmit})=>(
                <form onSubmit={handleSubmit}>
              <ProfileSection 
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
      
    </>
  )
}

export default Profile
