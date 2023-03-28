import React from 'react';

import { Index as Header } from '../components/global/Header/index';
import { Index as Footer } from '../components/global/Footer/index';

import { Index as Main } from '../components/Main/index';
import { Container } from '../assets/styles/ClassUtils.style';

const Home = () => {
   return (
      <Container>
         <Header />
         <Main />
         <Footer />
      </Container>
   );
};

export default Home;
