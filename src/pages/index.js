import React from "react"
import { createGlobalStyle } from "styled-components"
import { ScrollingProvider } from 'react-scroll-section';
import { graphql } from "gatsby"

import Layout from '../components/layout/Layout';
import Welcome from '../components/welcome/Welcome';
import Card from '../components/cards/Cards';
import AppPortal from '../components/appPortal/AppPortal';
import Insurance from '../components/insurance/Insurance';
import VirtualCard from '../components/virtualCard/VirtualCard';
import Footer from '../components/footer/Footer';
import SideMenu from '../components/sideMenu/SideMenu';

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

const IndexPage = ({ data }) => {
  const [showCards, setShowCards] = React.useState(false);
  return (
    <ScrollingProvider scrollBehavior="smooth">
      <Layout {...data}>
        <GlobalStyle/>
        <Welcome {...data} showCards={() => setShowCards(true)}/>
        <Card {...data} show={showCards} hideCards={() => setShowCards(false)}/>
        <AppPortal {...data}/>
        <Insurance {...data} />
        <VirtualCard {...data} />
        <SideMenu showCards={showCards}/>
        <Footer />
      </Layout>
    </ScrollingProvider>
  )
}

export const query = graphql`
  query {
    ...Cards_images
    ...AppPortal_images
    ...Welcome_images
    ...Insurance_images
    ...VirtualCard_images
    ...Header_images  
  }  
`;

export default IndexPage
