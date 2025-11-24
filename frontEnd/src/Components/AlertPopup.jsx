import React from 'react'
import { Snackbar, Alert } from "@mui/material";
function AlertPopup({Alertshow,msg, severity ,setAlert}) {
  return (
    <>
     <Snackbar 
        open={Alertshow} 
        autoHideDuration={3000} 
        onClose={() => setAlert({ ...alert, show: false })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert  severity={severity} variant="filled">
          {msg}
        </Alert>
      </Snackbar>
    </>
  )
}

export default AlertPopup
