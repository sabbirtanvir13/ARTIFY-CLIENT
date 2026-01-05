import React from 'react';
import Navbar from '../components/Navbar';
import Banner from './Banner';
import Artists from './Artists';
import CommunityHighlights from './CommunityHighlights';
import FeaturedArtworks from './FeaturedArtworks';
import StatsSection from './StatsSection';
import TestimonialsSection from './TestimonialsSection';
import BlogSection from './BlogSection';
import FAQSection from './FAQSection';
import NewsletterSection from './NewsletterSection';
import CTASection from './CTASection';
const FeaturedArtpromise=fetch('https://artify-server-ecru.vercel.app/latest-artifys')
.then(res=>res.json());
const Home = () => {
    return (
        <div>
    <Banner></Banner>
 
  <StatsSection/>
    <FeaturedArtworks FeaturedArtpromise={FeaturedArtpromise}></FeaturedArtworks>
    <Artists></Artists>
    <CommunityHighlights></CommunityHighlights>
     
      <TestimonialsSection />

     
      <BlogSection />

      <FAQSection />

       <NewsletterSection />

  
      <CTASection />
        </div>
    );
};

export default Home;