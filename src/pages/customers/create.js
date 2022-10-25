import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { AccountProfileDetails } from '../../components/customer/create/account-profile-details';
import { AccountProfile } from '../../components/customer/create/account-profile';
import { DashboardLayout } from '../../components/dashboard-layout';
import { PageTitle } from '../../components/page-title';


const Page = () => (
  <>
    <Head>
      <title>
        Create Customer | Sincity
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
        <PageTitle AttrTitle="Create Customer Account" />
        
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <AccountProfile />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <AccountProfileDetails />
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
