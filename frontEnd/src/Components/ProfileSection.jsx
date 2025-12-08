import React,{useState,useEffect} from 'react'
import {DatePicker} from '@mui/x-date-pickers/DatePicker'
import {Box, Button,useTheme,TextField,Select, MenuItem,InputLabel,FormControl } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import AutorenewIcon from '@mui/icons-material/Autorenew';
import {tokens} from '../Theme'
import unKnownImg from '../assets/unknown.jpg'
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import EditIcon from '@mui/icons-material/Edit';

function ProfileSection({ values,errors, touched, handleBlur, handleChange, setFieldValue,initialValues ,Bio}) {
      const theme =useTheme();
      const colors =tokens(theme.palette.mode);
      const isNonMobile=useMediaQuery("min-width:600px");
      const [image, setImage] = useState();
      const [edit,setEdit]=useState(true);
      const handleSelect = (file) => {
        setImage(URL.createObjectURL(file));
      };
      useEffect(() => {
  setImage(
    initialValues.ProfileImg
      ? `data:image/png;base64,${initialValues.ProfileImg}`
      : unKnownImg
  );
},  [initialValues.ProfileImg]);

  return (
    <>
    <Box>
<Box display="flex" justifyContent="center" alignItems='flex-end'>
   
      <img
        src={image}
        alt="preview"
        width={150}
        style={{
          height:"150px",
          marginTop: "10px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
     <input
        accept="image/*"
        id="upload-image"
        name="ProfileImg"
        type="file"
        disabled={edit}
        style={{ display: "none" }}
        onChange={(e) => {
          const file = e.target.files[0];
          handleSelect(file);   // update preview
          setFieldValue("ProfileImg", file); // update formik value
        }}
      />

      <label htmlFor="upload-image" style={{ margin: "0 0 0 -20px" }}>
          < AutorenewIcon sx={{minWidth:"40px",width:"40px",height:"40px", padding:"10px",cursor:"pointer", borderRadius:"50%",backgroundColor: `${colors.primary[400]} !important`
          }}/>
      </label>
</Box>
    <Box display="flex" justifyContent="end" mt="10px">
      <Button 
      color="success" 
      startIcon={<EditIcon/>} 
      variant="contained"
      style={{margin:"0 20px 0 0 "}}
      onClick={() => {setEdit((prev) => !prev);}}
      >{edit==true?"EDIT":"Editable"}</Button>
    </Box>
 <Box m="20px"
   display="grid"
   gap="30px"
   gridTemplateColumns="repeat(4, minmax(0, 1fr))"
   sx={{"&>div":{gridColumn:isNonMobile ? undefined:"span 4",
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#4cceac !important"
              }               
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#4cceac !important",  
            },
   }}}
  >
    {(Bio &&
       <TextField
          InputProps={{readOnly: edit,}}
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  type="text"
                  label="BIO"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.Bio}
                  name="Bio"
                  error={!!touched.Bio && !!errors.Bio}
                  helperText={touched.Bio && errors.Bio}
                  sx={{gridColumn:"span 4"}}
                />
    )}
        <TextField
          fullWidth
          variant="outlined"
          type="text"
          label="Name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.Name}
          name="Name"
          InputProps={{readOnly: edit,}}
          error={!!touched.Name && !!errors.Name}
          helperText={touched.Name && errors.Name}
          sx={{
            gridColumn:"span 4", 
            "& .MuiInputBase-input": {
              padding: "26px 12px 20px 12px !important",
            }    
        }}
        />
        <TextField
          InputProps={{readOnly: true,}}
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
                padding: "26px 12px 20px 12px !important",
            }    
        }}
        />
        <TextField
            InputProps={{readOnly: edit,}}
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              disabled={edit}
              label="DOB"
              name="DOB"
              value={values.DOB ? dayjs(values.DOB) : null}
              onChange={(value) => {setFieldValue("DOB", value ? value.toDate() : null);}}
              slotProps={{
                textField: {
                  onBlur: handleBlur,
                  error: !!touched.DOB && !!errors.DOB,
                  helperText: touched.DOB && errors.DOB,
                  sx: {
                    gridColumn: "span 2 !important",
                    "& .MuiInputBase-input": {
                      padding: "26px 12px 20px 12px !important",
                    },
                  },
                },
              }}
            />
          </LocalizationProvider>

 <FormControl fullWidth disabled={edit} sx={{ gridColumn: "span 2 !important" }}>
  <InputLabel id="gender-label">Gender</InputLabel>

  <Select
    labelId="gender-label"
    label="Gender"
    name="gender"
    value={values.gender||""}
    onChange={handleChange}
    sx={{ width: "80%", marginLeft: "5px" }}
  >
    <MenuItem value="male">Male</MenuItem>
    <MenuItem value="female">Female</MenuItem>
  </Select>
</FormControl>
 <TextField
          InputProps={{readOnly: edit,}}
          fullWidth
          variant="outlined"
          type="text"
          label="state"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.state}
          name="state"
          error={!!touched.state && !!errors.state}
          helperText={touched.state && errors.state}
          sx={{
            gridColumn:"span 2 !important", 
            "& .MuiInputBase-input": {
              padding: "26px 12px 20px 12px !important",
            }    
        }}
        />
<TextField
          InputProps={{readOnly: edit,}}
          fullWidth
          variant="outlined"
          type="text"
          label="Town"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.town}
          name="town"
          error={!!touched.town && !!errors.town}
          helperText={touched.town && errors.town}
          sx={{
            gridColumn:"span 1 !important", 
            "& .MuiInputBase-input": {
              padding: "26px 12px 20px 12px !important",
            }    
        }}
        />
        <TextField
          InputProps={{readOnly: edit,}}
          fullWidth
          variant="outlined"
          type="text"
          label="Pin code"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.pin}
          name="pin"
          error={!!touched.pin && !!errors.pin}
          helperText={touched.pin && errors.pin}
          sx={{
            gridColumn:"span 1 !important", 
            "& .MuiInputBase-input": {
              padding: "26px 12px 20px 12px !important",
            }    
        }}
        />
        <TextField
          InputProps={{readOnly: edit,}}
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  type="text"
                  label="ADDRESS"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address}
                  name="address"
                  error={!!touched.address && !!errors.address}
                  helperText={touched.address && errors.address}
                  sx={{gridColumn:"span 4"}}
                />
    {!edit &&(
      <Box display="flex" justifyContent="end" mt="10px">
      <Button  type="Submit" color="secondary" variant="contained">SAVE</Button>
    </Box>
 )}
 </Box>
    </Box>
</>
  )
}

export default ProfileSection
