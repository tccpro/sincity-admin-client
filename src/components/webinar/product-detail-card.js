import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { Clock as ClockIcon } from '../../icons/clock';
import { Download as DownloadIcon } from '../../icons/download';

export const ProductDetailCard = ({ product, ...rest }) => (
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
    <Box sx={{ p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <ClockIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            Updated 2hr ago
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <DownloadIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            {product.totalDownloads}
            {' '}
            Downloads
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Card>
);

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};
