import React,{ useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Topbar from '../global/Topbar'
import { tokens } from '../../Theme'
import {Box ,Typography,useTheme,TextField,Button, IconButton, InputAdornment}from "@mui/material"
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import { Formik } from 'formik'
import { SignupSchema } from '../../schemas/validation';
import Api from '../../Api'
import AlertPopup from '../../Components/AlertPopup';

function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const theme =useTheme();
    const colors =tokens(theme.palette.mode);
    const navigate=useNavigate();
    const initialValues={
      Name:"",
        email:"",
        password:"",
        confirmPassword:"",
    }
    const [alert, setAlert] = useState({
        show: false,
        msg: "",
        severity: "error",
      });
    const handleSubmit = async (values) => {
        try {
            const response= await Api.post('/signup',values)
            if (response.status===201) {
                setAlert({
              show: true,
              msg:"Success Full",
              severity: "success",
            });
              navigate(response.data.path)
            }
          } catch (err) {
                setAlert({
              show: true,
              msg:err.status +" : "+ err.response?.data?.msg || "Login failed",
              severity: "warning",
            });
    }; 
  };
  return (
    <>
      <div className="app">
      <main className="content" >
       <Box 
          width="100%"
          sx={{
            backgroundImage: colors.blueAccent[100],
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height:"100%",
            padding:"0 20px 15% 20px"
          }}
        >
        <Topbar />
        <Box 
          display="flex"
          justifyContent="center"
        >  
          <Box
            display="flex"
            justifyContent="center"
            flexDirection= 'column'
            padding="35px"
            m="30px 0 20px 0"
            width="480px" 
            minWidth="380px"
            borderRadius="14px"
            sx={{
              height:"650px",
              backgroundImage: colors.blueAccent[100],
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              boxShadow:
                'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
                "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#4cceac !important"
                        }               
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#4cceac !important",  
                      },
            }}
          >
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%',
              margin:"5px 0 5px 0", 
              fontSize: 'clamp(2rem, 10vw, 2.15rem)',
              color:`${colors.greenAccent[400]}`
           }}
          >
            Sign Up
          </Typography>
          <Typography
            component="h6"
            variant="h6"
            sx={{ width: '100%',margin:"0 0 10px 0",color:`${colors.greenAccent[400]}` }}
          >
            Welcome! Please sign up to continue
          </Typography>
     
          <Formik
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={SignupSchema}
            validateOnChange={false}
            validateOnBlur={false}
          >
          {({ values, errors, touched, handleBlur, handleChange, handleSubmit})=>(
            <form onSubmit={handleSubmit}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <FormControl>
                  <FormLabel htmlFor="Name">Name</FormLabel>
                  <TextField
                            fullWidth
                            variant="outlined"
                            type="text"
                            placeholder="Name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.Name}
                            name="Name"
                            error={!!touched.Name && !!errors.Name}
                            helperText={touched.Name && errors.Name}
                            sx={{gridColumn:"span 4",
                              "& .MuiInputBase-input": {
                                  padding: "24px 12px 20px 12px !important",
                              },
                            }}
                          />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <TextField
                            fullWidth
                            variant="outlined"
                            type="text"
                            placeholder="you@gmail.com"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            name="email"
                            error={!!touched.email && !!errors.email}
                            helperText={touched.email && errors.email}
                            sx={{gridColumn:"span 4",
                              "& .MuiInputBase-input": {
                                  padding: "24px 12px 20px 12px !important",
                              },
                            }}
                          />
                 </FormControl>
                 <FormControl style={{margin:"0 0 10px 0"}}>
                   <FormLabel htmlFor="password">Password</FormLabel>
                      <TextField
                      onBlur={handleBlur}
                      placeholder="******"
                      onChange={handleChange}
                      value={values.password}
                      name="password"
                      error={!!touched.password && !!errors.password}
                      helperText={touched.password && errors.password}
                      sx={{
                      "& .MuiInputBase-input": {
                        padding: "21px 12px  !important",
                      }    
                      }}
                      variant="outlined"
                      fullWidth
                      type={showPassword ? "text" : "password"}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={() => setShowPassword(!showPassword)}>
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                     />
                  </FormControl>
                  <FormControl style={{margin:"0 0 10px 0"}}>
                   <FormLabel htmlFor="confirmPassword">confirm Password</FormLabel>
                      <TextField
                      onBlur={handleBlur}
                      placeholder="******"
                      onChange={handleChange}
                      value={values.confirmPassword}
                      name="confirmPassword"
                      error={!!touched.confirmPassword && !!errors.confirmPassword}
                      helperText={touched.confirmPassword && errors.confirmPassword}
                      sx={{
                      "& .MuiInputBase-input": {
                        padding: "21px 12px  !important",
                      }    
                      }}
                      variant="outlined"
                      fullWidth 
                      type="password"
                     />
                  </FormControl>
                  <Button 
                    style={{margin:"0 0 10px 0"}}
                    type="submit"
                    variant="contained"
                  >
                    Sign up
                  </Button>
               </Box>
             </form>
           )}
         </Formik>
        </Box>
      </Box>
    </Box>
    </main>
        <AlertPopup Alertshow={alert.show} msg={alert.msg} severity={alert.severity} setAlert={setAlert}/>
    </div> 
    </>
  )
}

export default SignUp
