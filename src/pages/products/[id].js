import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { DashboardLayout } from '../../components/dashboard-layout';
import { PageTitle } from '../../components/page-title';
import { ProductDetailProfile } from '../../components/product/detail/product-details';
import { ProductImage } from '../../components/product/detail/product-image';
import { products } from '../../__mocks__/products';
import {useRouter} from 'next/router';
import { useState } from 'react';

const Page = () => {
  const router = useRouter()
  const { id } = router.query;
  const selectedProduct  = products.find(item => item.id === id);
  const [product, setProduct] = useState({
    id: selectedProduct.id,
    title: selectedProduct.title,
    description: selectedProduct.description,
    media: selectedProduct.media,
    category: selectedProduct.category,
    price: selectedProduct.price,
    manufacture: selectedProduct.manufacture,
    stock: selectedProduct.stock,
    status: selectedProduct.status
  })
  return (
    <>
      <Head>
        <title>
          Product | Sincity
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
          <PageTitle AttrTitle="Product"/>
          
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
              <ProductImage productInfo={product} />
            </Grid>
            <Grid
              item
              lg={7}
              md={6}
              xs={12}
            >
              <ProductDetailProfile productInfo={product} />
            </Grid>
          </Grid>
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
