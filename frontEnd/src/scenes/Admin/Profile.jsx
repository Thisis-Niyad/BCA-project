import React from 'react'
import Header from '../../Components/Header'
import {Box} from '@mui/material'
import ProfileSection from '../../Components/ProfileSection'
import { Formik } from 'formik'
import { ProfileSchema } from '../../schemas/validation'
// import * as yup from "yup"
const initialValues={
  Name:"",
  email:"",
  DOB:"",
  Gender:"",
  phone:"",
  address:"",
  ProfileImg:"",
}



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
