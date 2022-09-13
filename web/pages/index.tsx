import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import HomeAppBar from '../src/features/home/Navbar';
import OfferSlider from '../src/features/home/OfferSlider';
import ServiceSection from '../src/features/home/ServiceSection';
import CategorySection from '../src/features/home/CategorySection';
import SessionSection from '../src/features/home/SessionsSection';
import TrendyProducts from '../src/features/home/TrandyProducts';
import SubscribeBox from '../src/features/home/SubscribeBox';
import Footer from '../src/features/Footer';

const Home: NextPage = () => {
  return (
    <>
      <HomeAppBar />
      <OfferSlider />
      <ServiceSection />
      <CategorySection />
      <SessionSection />
      <Box sx={{ marginTop: 10 }}>
        <Typography variant="h3" textAlign="center">
          _______ Trendy Products _______
        </Typography>
      </Box>
      <TrendyProducts />
      <SubscribeBox />
      <Box sx={{ marginTop: 10 }}>
        <Typography variant="h3" textAlign="center">
          _______ Just Arrived _______
        </Typography>
      </Box>
      <TrendyProducts />
      <Footer />
      <Copyright />
    </>
  );
};

export default Home;
