import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { DashboardLayout } from '../../components/dashboard-layout';
import { PageTitle } from '../../components/page-title';
import { ProductDetailProfile } from '../../components/product/create/product-details';
import { ProductImage } from '../../components/product/create/product-image';


const Page = () => (
  <>
    <Head>
      <title>
        Create Product | Sincity
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <PageTitle AttrTitle="Create Product"/>
        
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={5}
            md={6}
            xs={12}
          >
            <ProductImage />
          </Grid>
          <Grid
            item
            lg={7}
            md={6}
            xs={12}
          >
            <ProductDetailProfile />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
