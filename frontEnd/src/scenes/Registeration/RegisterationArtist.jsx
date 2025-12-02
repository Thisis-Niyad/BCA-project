import React from 'react'
import Topbar from '../global/Topbar'
import { tokens } from '../../Theme'
import {Box ,Typography,useTheme,TextField,Button, IconButton,Select, MenuItem, InputAdornment,InputLabel,}from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import { Formik ,FieldArray } from 'formik'
import { ArtistRegisterationSchema } from '../../schemas/validation';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import useMediaQuery from '@mui/material/useMediaQuery'
import {DatePicker} from '@mui/x-date-pickers/DatePicker'
import UploadFileIcon from "@mui/icons-material/UploadFile";
import DeleteIcon from "@mui/icons-material/Delete";
const initialValues={
        Name:"",
        email:"",
        phoneNo:"",
        DOB:"",
        Gender:"",
        state:"",
        town:"",
        pin:"",
        certificate:"",
        address:"",
        artPortfolioLinks: [""],
        workImages: [],
    }
function RegisterationArtist() {
   const DOB = initialValues.DOB?dayjs(initialValues.DOB):null;
   const isNonMobile=useMediaQuery("min-width:600px");
    const theme =useTheme();
    const colors =tokens(theme.palette.mode);
    

    const handleSubmit = (values) => {
     console.log(values);
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
         
            sx={{
              backgroundImage: colors.blueAccent[100],
              padding:"25px",
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
            Registeration
          </Typography>
          <Typography
            component="h6"
            variant="h6"
            sx={{ width: '100%',margin:"0 0 10px 0",color:`${colors.greenAccent[400]}` }}
          >
           Welcome back! Please fill up the form to continue
          </Typography>
     
          <Formik
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={ArtistRegisterationSchema}
             validateOnChange={false}
            validateOnBlur={false}
            enableReinitialize
          >
          {({ values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue})=>(
            <form onSubmit={handleSubmit}>
              <Box 
               m="20px"
               display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{ "&>div":{gridColumn:isNonMobile ? undefined:"span 4"}, }}>
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
                   <FormLabel htmlFor="phoneNo">Phone Number</FormLabel>
                     <TextField
                                 fullWidth
                                 variant="outlined"
                                 label="91*****"
                                 type="text"
                                 onBlur={handleBlur}
                                 onChange={handleChange}
                                 value={values.phone}
                                 name="phone"
                                 error={!!touched.phone && !!errors.phone}
                                 helperText={touched.phone && errors.phone}
                                 sx={{gridColumn:"span 4",
                                   "& .MuiInputBase-input": {
                                       padding: "24px 12px 20px 12px !important",
                                   },}}
                               />
                  </FormControl>
                 <LocalizationProvider dateAdapter={AdapterDayjs}>
                         <DatePicker
                           label="DOB"
                           onBlur={handleBlur}
                           onChange={handleChange}
                           value={DOB}
                           name="DOB"
                           slotProps={{
                             textField:{
                         sx: {
                           gridColumn: "span 2 !important",
                           "& .MuiInputBase-input": {
                             padding: "26px 12px 20px 12px !important",
                           },
                         },
                         error: !!touched.DOB && !!errors.DOB,
                         helperText: touched.DOB && errors.DOB,
                       },
                           }}
                         /></LocalizationProvider>
                    <FormControl fullWidth sx={{ gridColumn: "span 2 !important" }}>
                      <InputLabel id="gender-label">Gender</InputLabel>
                    
                      <Select
                        labelId="gender-label"
                        label="Gender"
                        name="Gender"
                        value={values.Gender||""}
                        onChange={handleChange}
                        sx={{ width: "90%", marginLeft: "5px" }}
                      >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                      </Select>
                    </FormControl>
                     <FieldArray name="artPortfolioLinks">
        {({ push, remove }) => (
          <Box display="flex" flexDirection="column" gap={2}>
            <FormLabel style={{margin:"0"}}>Art Portfolio Links</FormLabel>
            {values.artPortfolioLinks.map((link, index) => (
              <Box key={index} display="flex" alignItems="center" gap={2}>
                
                <TextField
                  label={`Link ${index + 1}`}
                  name={`artPortfolioLinks[${index}]`}
                  value={link}
                  onChange={handleChange}
                  fullWidth
                  error={touched.socialLinks && errors.socialLinks?.[index]}
                  helperText={
                    touched.socialLinks && errors.socialLinks?.[index]
                      ? errors.socialLinks[index]
                      : ""
                  }
                  sx={{gridColumn:"span 4",
                              "& .MuiInputBase-input": {
                                  padding: "24px 12px 20px 12px !important",
                              },
                            }}
                />

                {index > 0 && (
                  <IconButton color="error" onClick={() => remove(index)}>
                    <DeleteIcon />
                  </IconButton>
                )}
                {index == 0 && (
                  <IconButton onClick={() => push("")}>
                  <AddIcon/>
                </IconButton>
                )}
              </Box>
            ))}

          </Box>
        )}
      </FieldArray>
      <FormControl>
                  <FormLabel htmlFor="workImages">Upload work Images (min 5)</FormLabel>
                    <input
                       id="work-images-upload"
                        type="file"
                        accept="image/*"
                        name="workImages"
                        multiple
                        style={{ display: "none" }}
                        onChange={(event) => {
                        setFieldValue("workImages",Array.from(event.target.files));
                      }}
                      />

                    
                      <label htmlFor="work-images-upload">
                        <Button
                          variant="contained"
                          component="span"
                          fullWidth
                          startIcon={<UploadFileIcon />}
                          sx={{ mt: 1, mb: 1, }}
                        >
                          Choose Images
                        </Button>
                      </label>

  <Box display="flex" flexWrap="wrap" gap={2} mt={1}>
          {values.workImages.map((file, index) => (
            <Typography key={index}>{file.name}</Typography>
          ))}
        </Box>

</FormControl>
                    <FormControl>
                  <FormLabel htmlFor="certificate">Upload Certificates</FormLabel>
                    <input
                        accept=".pdf"
                        type="file"
                        name="certificate"
                        id="certificate-upload"
                        style={{ display: "none" }}
                      onChange={handleChange}
                      />

                    
                      <label htmlFor="certificate-upload">
                        <Button
                          variant="contained"
                          component="span"
                          fullWidth
                          startIcon={<UploadFileIcon />}
                          sx={{ mt: 1, mb: 1, }}
                        >
                          Choose PDF
                        </Button>
                      </label>

                      <TextField
                        fullWidth
                        variant="outlined"
                        value={values.certificate}
                        placeholder="No file chosen"
                        InputProps={{
                          readOnly: true,
                        }}
                        error={!!touched.certificate && !!errors.certificate}
                        helperText={touched.certificate && errors.certificate}
                      />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="state">State</FormLabel>
                  <TextField
                            fullWidth
                            variant="outlined"
                            type="text"
                            placeholder="state"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.state}
                            name="state"
                            error={!!touched.state && !!errors.state}
                            helperText={touched.state && errors.state}
                            sx={{gridColumn:"span 4",
                              "& .MuiInputBase-input": {
                                  padding: "24px 12px 20px 12px !important",
                              },
                            }}
                          />
                </FormControl>
                <FormControl  sx={{gridColumn:"span 2 !important",}}>
                  <FormLabel htmlFor="town">Town</FormLabel>
                  <TextField
                            fullWidth
                            variant="outlined"
                            type="text"
                            placeholder="town"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.town}
                            name="town"
                            error={!!touched.town && !!errors.town}
                            helperText={touched.town && errors.town}
                            sx={{
                              "& .MuiInputBase-input": {
                                  padding: "24px 12px 20px 12px !important",
                              },
                            }}
                          />
                </FormControl>
                <FormControl  sx={{gridColumn:"span 2 !important",}}>
                  <FormLabel htmlFor="pin">Pin code</FormLabel>
                  <TextField
                            fullWidth
                            variant="outlined"
                            type="text"
                            placeholder="pin"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.pin}
                            name="pin"
                            error={!!touched.pin && !!errors.pin}
                            helperText={touched.pin && errors.pin}
                            sx={{
                              "& .MuiInputBase-input": {
                                  padding: "24px 12px 20px 12px !important",
                              },
                            }}
                          />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="address">Address</FormLabel>
                  <TextField
                            fullWidth
                            variant="outlined"
                            type="text"
                            multiline
                            rows={4}
                            placeholder="address"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.address}
                            name="address"
                            error={!!touched.address && !!errors.address}
                            helperText={touched.address && errors.address}
                            
                          />
                </FormControl>
                <Box style={{gridColumn:"span 4 !important"}}>
                  <Button
                  fullWidth 
                    style={{margin:"0 0px 10px "}}
                    type="submit"
                    variant="contained"
                  >
                    Submit
                  </Button>
                </Box>
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

export default RegisterationArtist
