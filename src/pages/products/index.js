import Head from 'next/head';
import { useState } from 'react';
import { Box, Container, Grid, Pagination, Tabs, Tab, TextField } from '@mui/material';
import { products } from '../../__mocks__/products';
import { ProductListToolbar } from '../../components/product/product-list-toolbar';
import { ProductCard } from '../../components/product/product-card';
import { DashboardLayout } from '../../components/dashboard-layout';
import Router from 'next/router';


const Page = () => {
  const [tab, setTab] = useState('1');
  const [keyword, setKeyWord] = useState('');
  const handleTabChange = (event, value) => {
    setTab(value);
  }
  const gotoProductDetailPage = (id) => {
    Router.push(`/products/${id}`);
  }
  const SearchOnInput = (event, value) => {
    setKeyWord(value);
  }
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
  return (
    <>
      <Head>
        <title>
          Products | Sincity
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={false}>
          <ProductListToolbar onInputFunction={SearchOnInput}/>
          <Box
            className='bg-black rounded'
            style={{
              margin: "20px 0px 0px",
              padding: "0px 24px" 
            }}
          >
            <Tabs
              onChange={handleTabChange}
              sx={{ my: 3 }}
              value={tab}
              className="mobile-hide"
            >
              <Tab
                label="Pistols"
                value="1"
              />
              <Tab
                label="Rifles"
                value="2"
              />
              <Tab
                label="Optics"
                value="3"
              />
              <Tab
                label="Knives"
                value="4"
              />
              <Tab
                label="Knives"
                value="5"
              />
            </Tabs>
            <TextField
                sx={{
                  my: "20px"
                }}
                fullWidth
                label="Select Category"
                name="category"
                select
                SelectProps={{ native: true }}
                defaultValue={tab}
                variant="outlined"
                className='option-black mobile-show'
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
          </Box>
          { tab == 1 && 
            <Box sx={{ pt: 3 }}>
              <Grid
                container
                spacing={3}
                
              >
                {products.filter(item => item.category == tab && (item.title.indexOf(keyword) != -1 || item.description.indexOf(keyword) != -1)).map((product) => (
                  <Grid
                    item
                    key={product.id}
                    lg={4}
                    md={6}
                    xs={12}
                    onClick={()=>{gotoProductDetailPage(product.id)}}
                  >
                    <ProductCard product={product} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          }
          { tab == 2 && 
            <Box sx={{ pt: 3 }}>
              <Grid
                container
                spacing={3}
              >
                {products.filter(item => item.category == tab).map((product) => (
                  <Grid
                    item
                    key={product.id}
                    lg={4}
                    md={6}
                    xs={12}
                    onClick={()=>{gotoProductDetailPage(product.id)}}
                  >
                    <ProductCard product={product} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          }
          { tab == 3 && 
            <Box sx={{ pt: 3 }}>
              <Grid
                container
                spacing={3}
              >
                {products.filter(item => item.category == tab).map((product) => (
                  <Grid
                    item
                    key={product.id}
                    lg={4}
                    md={6}
                    xs={12}
                    onClick={()=>{gotoProductDetailPage(product.id)}}
                  >
                    <ProductCard product={product} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          }
          { tab == 4 && 
            <Box sx={{ pt: 3 }}>
              <Grid
                container
                spacing={3}
              >
                {products.filter(item => item.category == tab).map((product) => (
                  <Grid
                    item
                    key={product.id}
                    lg={4}
                    md={6}
                    xs={12}
                    onClick={()=>{gotoProductDetailPage(product.id)}}
                  >
                    <ProductCard product={product} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          }
          { tab == 5 && 
            <Box sx={{ pt: 3 }}>
              <Grid
                container
                spacing={3}
              >
                {products.filter(item => item.category == tab).map((product) => (
                  <Grid
                    item
                    key={product.id}
                    lg={4}
                    md={6}
                    xs={12}
                    onClick={()=>{gotoProductDetailPage(product.id)}}
                  >
                    <ProductCard product={product} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          }
          {/* <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pt: 3
            }}
          >
            <Pagination
              color="primary"
              count={3}
              size="small"
            />
          </Box> */}
        </Container>
      </Box>
    </>
  );
}

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
