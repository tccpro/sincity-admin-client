import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';
import { status } from 'nprogress';

const states = [{"label":"Alabama","value":"AL"},{"label":"Alaska","value":"AK"},{"label":"Arizona","value":"AZ"},{"label":"Arkansas","value":"AR"},{"label":"California","value":"CA"},{"label":"Colorado","value":"CO"},{"label":"Connecticut","value":"CT"},{"label":"Delaware","value":"DE"},{"label":"Florida","value":"FL"},{"label":"Georgia","value":"GA"},{"label":"Hawaii","value":"HI"},{"label":"Idaho","value":"ID"},{"label":"Illinois","value":"IL"},{"label":"Indiana","value":"IN"},{"label":"Iowa","value":"IA"},{"label":"Kansas","value":"KS"},{"label":"Kentucky","value":"KY"},{"label":"Louisiana","value":"LA"},{"label":"Maine","value":"ME"},{"label":"Maryland","value":"MD"},{"label":"Massachusetts","value":"MA"},{"label":"Michigan","value":"MI"},{"label":"Minnesota","value":"MN"},{"label":"Mississippi","value":"MS"},{"label":"Missouri","value":"MO"},{"label":"Montana","value":"MT"},{"label":"Nebraska","value":"NE"},{"label":"Nevada","value":"NV"},{"label":"New Hampshire","value":"NH"},{"label":"New Jersey","value":"NJ"},{"label":"New Mexico","value":"NM"},{"label":"New York","value":"NY"},{"label":"North Carolina","value":"NC"},{"label":"North Dakota","value":"ND"},{"label":"Ohio","value":"OH"},{"label":"Oklahoma","value":"OK"},{"label":"Oregon","value":"OR"},{"label":"Pennsylvania","value":"PA"},{"label":"Rhode Island","value":"RI"},{"label":"South Carolina","value":"SC"},{"label":"South Dakota","value":"SD"},{"label":"Tennessee","value":"TN"},{"label":"Texas","value":"TX"},{"label":"Utah","value":"UT"},{"label":"Vermont","value":"VT"},{"label":"Virginia","value":"VA"},{"label":"Washington","value":"WA"},{"label":"West Virginia","value":"WV"},{"label":"Wisconsin","value":"WI"},{"label":"Wyoming","value":"WY"}];
const statuses = [
  {
    "label": "Unactive",
    "value": "unactive"
  },
  {
    "label": "Active",
    "value": "active"
  },
  {
    "label": "Restrict",
    "value": "restricted"
  },
  {
    "label": "Suspend ❌",
    "value": "suspended"
  }
]

export const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    address: '',
    stateCode: '',
    country: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card className='bg-black gridBox'>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent className='content-box'>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                type="text"
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Country"
                name="country"
                required
                value={'USA'}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Select State"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.stateCode}
                variant="outlined"
                className='option-black'
              >
                {states.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    style={{
                      backgroundColor: "#0f0f0f"
                    }}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="City"
                name="city"
                required
                value={values.city}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Address"
                name="address"
                required
                value={values.address}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Address2"
                name="address2"
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Status"
                name="state"
                onChange={handleChange}
                select
                defaultValue="unactive"
                SelectProps={{ native: true }}
                variant="outlined"
                className='option-black'
              >
                {statuses.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    style={{
                      backgroundColor: "#0f0f0f"
                    }}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Create
          </Button>
        </Box>
      </Card>
    </form>
  );
};
