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

const user = {
  avatar: 'http://localhost:3331/img/img(1).png',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Daniel Ramirez',
  timezone: 'GTM-7'
};

export const ProductImage = (props) => (
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
          src={user.avatar}
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
