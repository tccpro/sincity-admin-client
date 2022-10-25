import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { AccountProfileDetails } from '../../components/customer/detail/account-profile-details';
import { AccountProfile } from '../../components/customer/detail/account-profile';
import { DashboardLayout } from '../../components/dashboard-layout';
import { PageTitle } from '../../components/page-title';
import { useRouter } from 'next/router';


const Page = () => {
    const router = useRouter()
    const { id } = router.query;

    return (
  <>
    <Head>
      <title>
        Customer | Sincity
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
        <PageTitle AttrTitle="Customer" />
        
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
)
    }

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
