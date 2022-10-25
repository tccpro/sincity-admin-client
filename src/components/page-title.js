import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    SvgIcon, Typography
  } from '@mui/material';
  import Router from 'next/router';
  
  const gotoBack = () => {
    
    Router.back();
  
  }
  
  export const PageTitle = (props) => {
    
    const { AttrTitle } =  props;

    return (
      <Box {...props} className='page-title-box'>
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          { AttrTitle }
        </Typography>
        <Typography
          variant="h6"
          sx={{
            cursor:"pointer",
            textDecoration: "underline",
            transition: "0.3s",
            "&:hover": {
              color: "#AC7A2B"
            },
            mb: 3
          }}
          onClick={()=>{gotoBack()}}
        >
          Back
        </Typography>
      </Box>
    );
  } 
  