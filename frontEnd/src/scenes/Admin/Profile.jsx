import React,{useEffect,useState} from 'react'
import Header from '../../Components/Header'
import {Box} from '@mui/material'
import ProfileSection from '../../Components/ProfileSection'
import { Formik } from 'formik'
import { ProfileSchema } from '../../schemas/validation'
import Api from '../../Api'
import {useParams} from 'react-router-dom'

const initialValues={
  Name:"",
  email:"",
  DOB:"",
  Gender:"",
  phone:"",
  state:"",
  town:"",
  pin:"",
  address:"",
  ProfileImg:"",
}




function Profile() {
const { id } = useParams();
const [profile, setProfile] = useState(initialValues);

  useEffect(()=>{
const SideBarProflieInfo=async()=>{
  try {
    const response=await Api.get(`/admin/${id}/profile`)
      setProfile(response.data);  
    
    
  } catch (err) {
    console.log(err);
    
  }
}
SideBarProflieInfo()},[id])
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
            initialValues={profile}
            enableReinitialize
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
                      initialValues={profile}
                  />
              </form>
              )}
        </Formik>

    </Box>
      
    </>
  )
}

export default Profile
