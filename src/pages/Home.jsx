
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
const FeaturedArtpromise=fetch(`${import.meta.env.VITE_API_URL}/latest-artifys`)
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


// // import React, { useEffect, useState } from "react";
// // import Banner from "./Banner";
// // import Artists from "./Artists";
// // import CommunityHighlights from "./CommunityHighlights";
// // import FeaturedArtworks from "./FeaturedArtworks";
// // import StatsSection from "./StatsSection";
// // import TestimonialsSection from "./TestimonialsSection";
// // import BlogSection from "./BlogSection";
// // import FAQSection from "./FAQSection";
// // import NewsletterSection from "./NewsletterSection";
// // import CTASection from "./CTASection";

// // const Home = () => {
// //   const [featuredArts, setFeaturedArts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState("");

// //   useEffect(() => {
// //     fetch("https://artify-server-ecru.vercel.app/latest-artifys")
// //       .then(res => {
// //         if (!res.ok) {
// //           throw new Error("Server error");
// //         }
// //         return res.json();
// //       })
// //       .then(data => {
// //         setFeaturedArts(data);
// //         setLoading(false);
// //       })
// //       .catch(err => {
// //         console.error(err);
// //         setError("Failed to load artworks");
// //         setLoading(false);
// //       });
// //   }, []);

// //   return (
// //     <div>
// //       <Banner />
// //       <StatsSection />

// //       <FeaturedArtworks
// //         artworks={featuredArts}
// //         loading={loading}
// //         error={error}
// //       />

// //       <Artists />
// //       <CommunityHighlights />
// //       <TestimonialsSection />
// //       <BlogSection />
// //       <FAQSection />
// //       <NewsletterSection />
// //       <CTASection />
// //     </div>
// //   );
// // };

// // export default Home;


// import React, { useEffect, useState } from "react";
// import Banner from "./Banner";
// import Artists from "./Artists";
// import CommunityHighlights from "./CommunityHighlights";
// import FeaturedArtworks from "./FeaturedArtworks";
// import StatsSection from "./StatsSection";
// import TestimonialsSection from "./TestimonialsSection";
// import BlogSection from "./BlogSection";
// import FAQSection from "./FAQSection";
// import NewsletterSection from "./NewsletterSection";
// import CTASection from "./CTASection";

// const Home = () => {
//   const [featuredArts, setFeaturedArts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const API_URL = import.meta.env.VITE_API_URL;
//     if (!API_URL) {
//       console.error("VITE_API_URL is undefined");
//       setError("API URL not set");
//       setLoading(false);
//       return;
//     }

//     fetch(`${API_URL}/latest-artifys`)
//       .then((res) => {
//         if (!res.ok) throw new Error("Server error");
//         return res.json();
//       })
//       .then((data) => {
//         setFeaturedArts(data);
//       })
//       .catch((err) => {
//         console.error("Failed to fetch:", err);
//         setError("Failed to load artworks");
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <div>
//       <Banner />
//       <StatsSection />

//       <FeaturedArtworks arts={featuredArts} loading={loading} error={error} />

//       <Artists />
//       <CommunityHighlights />
//       <TestimonialsSection />
//       <BlogSection />
//       <FAQSection />
//       <NewsletterSection />
//       <CTASection />
//     </div>
//   );
// };

// export default Home;
