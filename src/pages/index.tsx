import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../Link';
import ProTip from '../ProTip';
import Copyright from '../Copyright';
import HomeAppBar from '../features/home/Navbar';
import BannerView from '../features/home/BannerView';
import ServiceSection from '../features/home/ServiceSection';
import CategorySection from '../features/home/CategorySection';
import SessionSection from '../features/home/SessionsSection';
import TrendyProducts from '../features/home/TrandyProducts';
import SubscribeBox from '../features/home/SubscribeBox';
import Footer from '../features/Footer';
import { BannerType } from '../features/home/types/BannerType';

const banners = [
  {
    id: 1,
    label: 'Fashionable Dress',
    simpleText: '10% OFF YOUR FIRST ORDER',
    imgPath: '/static/carousel-1.jpg',
  } as BannerType,
  {
    id: 2,
    label: 'Reasonable Price',
    simpleText: '10% OFF YOUR FIRST ORDER',
    imgPath: '/static/carousel-2.jpg',
  } as BannerType,
] as BannerType[];

export interface HomeProps {
  banners?: Array<BannerType>;
}

const Home: NextPage = (props: HomeProps) => {
  const { banners } = props;
  return (
    <>
      <HomeAppBar />
      <BannerView banners={banners as Array<BannerType>} />
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


export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      banners,
    } as HomeProps,
  }
}
export default Home;
