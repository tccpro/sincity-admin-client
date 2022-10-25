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

import Textarea from '@mui/joy/Textarea';

const categories = [
  {
    "label": "Pistols",
    "value": 1
  },
  {
    "label": "Rifles",
    "value": 2
  },
  {
    "label": "Optics",
    "value": 3
  },
  {
    "label": "Knives",
    "value": 4
  },
  {
    "label": "Accessories",
    "value": 5
  }

]

const statuses = [
  {
    "label": "Draft",
    "value": "draft"
  },
  {
    "label": "Active",
    "value": "active"
  }
]

export const ProductDetailProfile = (props) => {
  const [values, setValues] = useState({
    title: '',
    desciption: '',
    imageURLs: 'http://localhost:3331/img/img(1).png',
    category: 1,
    categoryName: 'Pistols',
    price: 450,
    manufacture: 'Manufacture 1 ',
    stock: 34,
    status: 'Active'
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
          title="Product Detail Information"
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
                helperText="Please specify the title"
                label="Title"
                name="title"
                onChange={handleChange}
                required
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
                label="Select Category"
                name="category"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.category}
                variant="outlined"
                className='option-black'
              >
                {categories.map((option) => (
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
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Description"
                name="description"
                type="textarea"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={3}
              xs={6}
            >
              <TextField
                fullWidth
                label="Price"
                name="price"
                onChange={handleChange}
                type="nubmer"
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={3}
              xs={6}
            >
              <TextField
                fullWidth
                label="Price Discount"
                name="priceDiscount"
                onChange={handleChange}
                type="nubmer"
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={3}
              xs={6}
            >
              <TextField
                fullWidth
                label="Stock"
                name="stock"
                required
                onChange={handleChange}
                type="nubmer"
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={3}
              xs={6}
            >
              <TextField
                fullWidth
                label="Status"
                name="status"
                onChange={handleChange}
                select
                SelectProps={{ native: true }}
                defaultValue="draft"
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
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Manufacture"
                name="manufacture"
                required
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
                label="UPC"
                name="upc"
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
                label="Finish/Color"
                name="finishAndColor"
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
                label="Grips/Stock"
                name="gripsAndStock"
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
                label="Barrel/Length"
                name="barrelAndLength"
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
                label="Action"
                name="action"
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
                label="Caliber"
                name="caliber"
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
                label="Frame/Material"
                name="frameAndMaterial"
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
                label="Type"
                name="type"
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
                label="Hand"
                name="hand"
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
                label="Capacity"
                name="capacity"
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
                label="Sights"
                name="sights"
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
                label="Size"
                name="size"
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
                label="Safety"
                name="safety"
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
                label="Model"
                name="model"
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
                label="Meta"
                name="meta"
                variant="outlined"
              />
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
