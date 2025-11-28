import React,{useEffect,useState} from 'react'
import Header from '../../Components/Header'
import {Box} from '@mui/material'
import ProfileSection from '../../Components/ProfileSection'
import { Formik } from 'formik'
import { ProfileSchema } from '../../schemas/validation'
import Api from '../../Api'
import {useParams} from 'react-router-dom'
import AlertPopup from '../../Components/AlertPopup'
const initialValues={
  Name:"",
  email:"",
  DOB:"",
  gender:"",
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
    const [alert, setAlert] = useState({
            show: false,
            msg: "",
            severity: "error",
          });
  useEffect(()=>{
    const SideBarProflieInfo=async()=>{
      try {
        const response=await Api.get(`/artist/${id}/profile`)
          setProfile(response.data);  
      } catch (err) {
        console.log(err);
      }
  }
SideBarProflieInfo()},[id])

    const handleFormSubmit=async(values)=>{
        try {
          const response= await Api.post(`/artist/${id}/profile`,values,
            {headers: { "Content-Type": "multipart/form-data" }})
          if (response.status===200) {
              setAlert({
            show: true,
            msg:response.data.msg,
            severity: "success",
          });
            console.log(response)
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
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="Profile Section" subtitle="Track, review, and resolve complaints" /> 
        </Box>

        <Formik
            onSubmit={handleFormSubmit}
            initialValues={profile}
            enableReinitialize
            validationSchema={ProfileSchema}
            validateOnChange={false}
            validateOnBlur={false}
          >
             {({ values, errors, touched, handleBlur, handleChange, handleSubmit,setFieldValue})=>(
                <form onSubmit={handleSubmit}>
              <ProfileSection 
                      values={values} 
                      errors={errors} 
                      touched={touched} 
                      handleBlur={handleBlur} 
                      handleChange={handleChange}
                      setFieldValue={setFieldValue}
                      initialValues={profile}        
                  />
                </form>
              )}
            </Formik>
        <AlertPopup Alertshow={alert.show} msg={alert.msg} severity={alert.severity} setAlert={setAlert}/>
    </Box>
    </>
  )
}

export default Profile
