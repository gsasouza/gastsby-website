import React from "react"
import { createGlobalStyle } from "styled-components"

import Layout from '../components/layout/Layout';
import Welcome from '../components/welcome/Welcome';
import Card from '../components/cards/Cards';
import AppPortal from '../components/appPortal/AppPortal';
import Insurance from '../components/insurance/Insurance';
import VirtualCard from '../components/virtualCard/VirtualCard';
import Footer from '../components/footer/Footer';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
  }
  a {
    text-decoration: none;
  }
  body {
    margin: 0;
  }
`;

const IndexPage = () => {
  const [showCards, setShowCards] = React.useState(false);
  return (
    <Layout>
      <GlobalStyle/>
      <Welcome showCards={() => setShowCards(true)}/>
      <Card show={showCards} hideCards={() => setShowCards(false)}/>
      <AppPortal/>
      <Insurance/>
      <VirtualCard/>
      <Footer />
    </Layout>
  )
}

export default IndexPage
