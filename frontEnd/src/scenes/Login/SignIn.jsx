import React,{ useState } from 'react'
import Topbar from '../global/Topbar'
import { tokens } from '../../Theme'
import {Box ,Typography,useTheme,TextField,Button, IconButton, InputAdornment}from "@mui/material"
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import { Formik } from 'formik'
import { loginSchema } from '../../schemas/validation';

function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const theme =useTheme();
    const colors =tokens(theme.palette.mode);
    const initialValues={
        email:"",
        password:"",
    }
    const handleSubmit = (event) => {
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
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
            height:"100vh"
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
              height:"450px",
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
            Sign in
          </Typography>
          <Typography
            component="h6"
            variant="h6"
            sx={{ width: '100%',margin:"0 0 10px 0",color:`${colors.greenAccent[400]}` }}
          >
            Welcome back! Please sign In to continue
          </Typography>
     
          <Formik
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={loginSchema}
          >
          {({ values, errors, touched, handleBlur, handleChange, handleSubmit})=>(
            <form onSubmit={handleSubmit}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
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
    </div> 
    </>
  )
}

export default SignIn
