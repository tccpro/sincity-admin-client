import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { Clock as ClockIcon } from '../../icons/clock';
import { Download as DownloadIcon } from '../../icons/download';

export const ProductCard = ({ product, status, ...rest }) => (
  <Card  className='bg-black gridBox'
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    {...rest}
  >
    <CardContent  className='content-box'>
      <Grid
        container
        style={{
          justifyContent: "center",
        }}
      >
        <Grid 
          item
          sx={6}
          
        >
          <Avatar
            style={{
              width: "100%",
              height: "100%"
            }}
            alt="Product"
            src={product.media}
            variant="square"
          />
        </Grid>
        <Grid 
          item
          sx={6}
          padding="15px"
        >
          <Typography
            align="center"
            color="textPrimary"
            gutterBottom
            variant="h5"
          >
            {product.title}
          </Typography>
          <Typography
            align="center"
            color="textPrimary"
            variant="body1"
          >
            {product.description}
          </Typography>
        </Grid>
      </Grid>
      
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 3,  }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'space-between' }}
      >
        { status == 'upcoming' &&
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              style={{
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <Typography
                align="center"
                color="textPrimary"
                gutterBottom
                variant="h5"
              >
                High theme
              </Typography>
            </Grid>
          </Grid>
        }
      </Grid>
    </Box>
  </Card>
);

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};
