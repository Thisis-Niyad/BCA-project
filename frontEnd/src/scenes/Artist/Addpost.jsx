import React, { useState } from "react";
import Header from '../../Components/Header'
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Chip,
  Stack,
  useTheme
} from "@mui/material";
import { Formik } from "formik";
import { AddPostSchema } from '../../schemas/validation';
import {tokens} from '../../Theme'
import AlertPopup from '../../Components/AlertPopup'
import Api from '../../Api'
import {useParams,useNavigate} from 'react-router-dom'
  const  initialValues={
          title: "",
          description: "",
          keywords: [],
          workImage: null,
          price:"",
        }
function Addpost() {
  const theme= useTheme()
        const colors =tokens(theme.palette.mode)
            const { id } = useParams();
  const [preview, setPreview] = useState(null);
  const [keywords, setKeywords] = useState([]);
  const navigate=useNavigate();
   const [alert, setAlert] = useState({
                  show: false,
                  msg: "",
                  severity: "error",
                });



const handleFormSubmit = async (values) => {
  try {
    const response = await Api.post(`/artist/${id}/addpost`, values, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    if (response.status) {
      setAlert({
        show: true,
        msg: response.data.msg,
        severity: "success",
      });
      setTimeout(() => {
        navigate(`/artist/${id}/gallery`)
      }, 3000);
    }
  } catch (err) {
    setAlert({
      show: true,
      msg: (err.status ?? "") + " : " + (err.response?.data?.msg || "Failed"),
      severity: "warning",
    });
  }
};
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Add Post" subtitle="Upload, Manage and showcase your artwork images" /> 
        </Box>
    <Box sx={{ 
      minWidth: 700,
      maxWidth:"900px",
      margin: "auto",
      m: "25px auto 32px" ,
      backgroundColor:colors.primary[400],
      borderRadius:"7px",
      padding:"55px 45px",
      boxShadow:
                'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
      }}>
      <Typography variant="h5" fontWeight={600} mb={3} sx={{color:colors.greenAccent[400]}}>
        Upload Artist Work
      </Typography>

      <Formik
        initialValues={initialValues}
        validationSchema={AddPostSchema}
        onSubmit={handleFormSubmit}
        validateOnChange={false}
            validateOnBlur={false}
             enableReinitialize
      >
        {({ values, errors, touched, handleChange, setFieldValue, handleSubmit }) => (
          <form onSubmit={handleSubmit}>

            {/* IMAGE UPLOAD */}
            <Box
              sx={{
                border: "1px dashed #888",
                borderRadius: 2,
                p: 3,
                textAlign: "center",
                cursor: "pointer",
                mb: 3
              }}
              onClick={() => document.getElementById("workImageInput").click()}
            >
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  style={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: 8 }}
                />
              ) : (
                <Typography color="text.secondary">
                  Click to upload image
                </Typography>
              )}

              <input
                type="file"
                id="workImageInput"
                style={{ display: "none" }}
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setFieldValue("workImage", file);

                  if (file) {
                    setPreview(URL.createObjectURL(file));
                  }
                }}
              />

              {errors.workImage && touched.workImage && (
                <Typography color="error" mt={1}>
                  {errors.workImage}
                </Typography>
              )}
            </Box>

            {/* TEXT FIELDS */}
            <Grid container spacing={3}>
              <Grid item size={6}>
                <TextField
                  fullWidth
                  label="Title"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  error={touched.title && Boolean(errors.title)}
                  helperText={touched.title && errors.title}
                  sx={{"& .MuiInputBase-input":{padding:"23px 14px"}}}
                />
              </Grid>

              {/* KEYWORDS */}
              <Grid item size={6}>
                <TextField
                  fullWidth
                  label="Add Keywords (press Enter)"
                   onKeyDown={(e) => {
  if (e.key === "Enter") {
    e.preventDefault();

    const value = e.target.value.trim();
    if (!value) return;

    // prevent duplicates
    if (keywords.includes(value)) return;

    const updatedKeywords = [...keywords, value];

    setKeywords(updatedKeywords);                 // local state
    setFieldValue("keywords", updatedKeywords);   // Formik state

    e.target.value = ""; // clear input
  }
}}
                  sx={{"& .MuiInputBase-input":{padding:"23px 14px"}}}
                   error={touched.keywords && Boolean(errors.keywords)}
                  helperText={touched.keywords && errors.keywords}
                />
                <Stack direction="row" mt={1} spacing={1} flexWrap="wrap">
  {keywords.map((kw, i) => (
    <Chip
      key={i}
      label={kw}
      onDelete={() => {
        const updated = keywords.filter((k) => k !== kw);
        setKeywords(updated);
        setFieldValue("keywords", updated); // 🔥 keep Formik in sync
      }}
    />
  ))}
</Stack>

              </Grid>
            
            <Grid item size={12} >
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Description"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  error={touched.description && Boolean(errors.description)}
                  helperText={touched.description && errors.description}
                />
              </Grid>
                      <Grid item size={6} >
                <TextField
                  fullWidth
                  label="price"
                  name="price"
                  type="number"
                  value={values.price}
                  onChange={handleChange}
                  error={touched.price && Boolean(errors.price)}
                  helperText={touched.price && errors.price}
                  sx={{"& .MuiInputBase-input":{padding:"23px 14px"}}}
                />
              </Grid>
              </Grid>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 4, py: 1.5, fontSize: "16px", }}
              type="submit"
            >
              Upload Work
            </Button>
          </form>
        )}
      </Formik>
              <AlertPopup Alertshow={alert.show} msg={alert.msg} severity={alert.severity} setAlert={setAlert}/>
      
    </Box>
    </Box>
  );
}
export default Addpost
