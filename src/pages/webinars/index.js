import Head from 'next/head';
import { Box, Container, Grid, Pagination, Tabs, Tab } from '@mui/material';
import { products } from '../../__mocks__/products';
import { ProductListToolbar } from '../../components/webinar/product-list-toolbar';
import { ProductCard } from '../../components/webinar/product-card';
import { DashboardLayout } from '../../components/dashboard-layout';
import { useState } from 'react';
import Router from 'next/router';

const Page = () => {
  const [tab, setTab] = useState('upcoming');
  const handleTabChange = (event, value) => {
    setTab(value);
  }
  const gotoWebinarDetailPage = (id) => {
    Router.push(`/webinars/${id}`);
  }
  return (
    <>
      <Head>
        <title>
          Webinar | Sincity
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
          <ProductListToolbar />
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
            >
              <Tab
                label="Upcoming Webinars"
                value="upcoming"
              />
              <Tab
                label="Live Webinars"
                value="live"
              />
              <Tab
                label="Processing Webinars"
                value="processing"
              />
              <Tab
                label="Expired Webinars"
                value="expired"
              />
            </Tabs>
          </Box>
          { tab == 'upcoming' &&
            <Box sx={{ pt: 3 }}>
              <Grid
                container
                spacing={3}
              >
                {products.map((product) => (
                  <Grid
                    item
                    key={product.id}
                    lg={4}
                    md={6}
                    xs={12}
                    onClick={()=> {gotoWebinarDetailPage(product.id)}}
                  >
                    <ProductCard product={product} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          }
          { tab == 'live' &&
            <Box sx={{ pt: 3 }}>
              <Grid
                container
                spacing={3}
              >
                {products.map((product) => (
                  <Grid
                    item
                    key={product.id}
                    lg={4}
                    md={6}
                    xs={12}
                    onClick={()=> {gotoWebinarDetailPage(product.id)}}
                  >
                    <ProductCard product={product} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          }
          { tab == 'processing' &&
            <Box sx={{ pt: 3 }}>
              <Grid
                container
                spacing={3}
              >
                {products.map((product) => (
                  <Grid
                    item
                    key={product.id}
                    lg={4}
                    md={6}
                    xs={12}
                    onClick={()=> {gotoWebinarDetailPage(product.id)}}
                  >
                    <ProductCard product={product} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          }
          { tab == 'expired' &&
            <Box sx={{ pt: 3 }}>
              <Grid
                container
                spacing={3}
              >
                {products.map((product) => (
                  <Grid
                    item
                    key={product.id}
                    lg={4}
                    md={6}
                    xs={12}
                    onClick={()=> {gotoWebinarDetailPage(product.id)}}
                  >
                    <ProductCard product={product} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          }
          <Box
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
          </Box>
        </Container>
      </Box>
    </>
  )
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
