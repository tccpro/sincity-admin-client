import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';

export const ProductImage = (props) => {
  const { productInfo } = props;
  return (
    <Card {...props}  className='bg-black gridBox'>
      <CardContent  className='content-box'>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Avatar
            src={productInfo.media}
            sx={{
              height: "100%",
              mb: 2,
              width: "100%",
              borderRadius: "5px"
            }}
          />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h5"
          >
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
           
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
           
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="primary"
          fullWidth
          variant="text"
        >
          Upload picture
        </Button>
      </CardActions>
    </Card>
  );
}
