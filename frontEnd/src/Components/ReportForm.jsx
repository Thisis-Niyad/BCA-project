import React from 'react'
import { Box, Button, TextField } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery'

function ReportForm({values, errors, touched, handleBlur, handleChange}) {
      const isNonMobile=useMediaQuery("min-width:600px");
  return (
    <>
  <Box m="20px"
   display="grid"
   gap="30px"
   gridTemplateColumns="repeat(4, minmax(0, 1fr))"
   sx={{"&>div":{gridColumn:isNonMobile ? undefined:"span 4",
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#4cceac"
              }               // Focused label color
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#4cceac",  
            },
   }}}
  >
        <TextField
          fullWidth
          variant="outlined"
          type="text"
          label="Name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.Name}
          name="Name"
          error={!!touched.Name && !!errors.Name}
          helperText={touched.Name && errors.Name}
          sx={{gridColumn:"span 4",
            "& .MuiInputBase-input": {
                padding: "26px 12px 20px 12px !important",
            }    
        }}
        />
        <TextField
          fullWidth
          variant="outlined"
          type="text"
          label="Email"
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
        <TextField
          fullWidth
          variant="outlined"
          type="text"
          label="Contact Number"
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
        <TextField
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          type="text"
          label="complaint Details"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.complaintDetails}
          name="complaintDetails"
          error={!!touched.complaintDetails && !!errors.complaintDetails}
          helperText={touched.complaintDetails && errors.complaintDetails}
          sx={{gridColumn:"span 4"}}
        />
  </Box>
  <Box display="flex" justifyContent="end" mt="10px">
    <Button type="submit" color="secondary" variant="contained">Submit Report</Button>
  </Box>

  </>
  )
}

export default ReportForm