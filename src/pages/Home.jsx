// import React from "react";
// import { Link } from "react-router-dom";

// import Helmet from "../components/Helmet";
// import HeroSlider from "../components/HeroSlider";
// import Section, { SectionTitle, SectionBody } from "../components/Section";
// import PolicyCard from "../components/PolicyCard";
// import Grid from "../components/Grid";
// import ProductCard from "../components/ProductCard";

// import heroSliderData from "../assets/fake-data/hero-slider";
// import policy from "../assets/fake-data/policy";
// import productData from "../assets/fake-data/products";

// import banner from "../assets/images/flash_sale.png";
// import productSet from "../assets/fake-data/set";

// const Home = () => {
//   return (
//     <Helmet title="Trang chủ">
//       {/* hero slider */}
//       <HeroSlider
//         data={heroSliderData}
//         control={true}
//         auto={true}
//         timeOut={5000}
//       />
//       {/* end hero slider */}

//       {/* policy section */}
//       <Section>
//         <SectionBody>
//           <Grid col={4} mdCol={2} smCol={1} gap={20}>
//             {policy.map((item, index) => (
//               <Link key={index} to="/policy">
//                 <PolicyCard
//                   name={item.name}
//                   description={item.description}
//                   icon={item.icon}
//                 />
//               </Link>
//             ))}
//           </Grid>
//         </SectionBody>
//       </Section>
//       {/* end policy section */}

//       {/* best selling section */}
//       <Section>
//         <SectionTitle>New products 🛒</SectionTitle>
//         <SectionBody>
//           <Grid col={4} mdCol={2} smCol={1} gap={20}>
//             {productData.getProducts(4).map((item, index) => (
//               <ProductCard
//                 key={index}
//                 img01={item.image01}
//                 img02={item.image02}
//                 name={item.title}
//                 price={Number(item.price)}
//                 slug={item.slug}
//               />
//             ))}
//           </Grid>
//         </SectionBody>
//       </Section>
//       {/* end best selling section */}

//       {/* new arrival section */}
//       <Section>
//         <SectionTitle>Top sell products of this month 🆙</SectionTitle>
//         <SectionBody>
//           <Grid col={4} mdCol={2} smCol={1} gap={20}>
//             {productData.getProducts(8).map((item, index) => (
//               <ProductCard
//                 key={index}
//                 img01={item.image01}
//                 img02={item.image02}
//                 name={item.title}
//                 price={Number(item.price)}
//                 slug={item.slug}
//               />
//             ))}
//           </Grid>
//         </SectionBody>
//       </Section>
//       {/* end new arrival section */}

//       {/* banner */}
//       <Section>
//         <SectionBody>
//           <Link to="/catalog">
//             <img src={banner} alt="" />
//           </Link>
//         </SectionBody>
//       </Section>
//       {/* end banner */}

//       {/* popular product section */}
//       <Section>
//         <SectionTitle>Top popular 🤝</SectionTitle>
//         <SectionBody>
//           <Grid col={4} mdCol={2} smCol={1} gap={20}>
//             {productData.getProducts(12).map((item, index) => (
//               <ProductCard
//                 key={index}
//                 img01={item.image01}
//                 img02={item.image02}
//                 name={item.title}
//                 price={Number(item.price)}
//                 slug={item.slug}
//               />
//             ))}
//           </Grid>
//         </SectionBody>
//       </Section>


//       <Section>
//         <SectionTitle>Set</SectionTitle>
//         <SectionBody>
//           <Grid col={4} mdCol={2} smCol={1} gap={20}>
//             {productSet.getProducts(3).map((item, index) => (
//               <ProductCard
//                 key={index}
//                 img01={item.image01}
//                 img02={item.image02}
//                 name={item.title}
//                 price={Number(item.price)}
//                 slug={item.slug}
//               />
//             ))}
//           </Grid>
//         </SectionBody>
//       </Section>
//       {/* end popular product section */}
//     </Helmet>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import PolicyCard from "../components/PolicyCard";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";

import heroSliderData from "../assets/fake-data/hero-slider";
import policy from "../assets/fake-data/policy";
import productData from "../assets/fake-data/products";

import banner from "../assets/images/flash_sale.png";
import productSet from "../assets/fake-data/set";

const Home = () => {
  const [newProducts, setNewProducts] = useState([]);
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    // Fetch new products
    const newProductsData = productData.getProducts(4);
    setNewProducts(newProductsData);

    // Fetch top products
    const topProductsData = productData.getProducts(8);
    setTopProducts(topProductsData);
  }, []);

  return (
    <Helmet title="Trang chủ">
      {/* hero slider */}
      <HeroSlider
        data={heroSliderData}
        control={true}
        auto={true}
        timeOut={5000}
      />
      {/* end hero slider */}

      {/* policy section */}
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => (
              <Link key={index} to="/policy">
                <PolicyCard
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end policy section */}

      {/* best selling section */}
      <Section>
        <SectionTitle>New products 🛒</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {newProducts.map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end best selling section */}

      {/* new arrival section */}
      <Section>
        <SectionTitle>Top sell products of this month 🆙</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {topProducts.map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end new arrival section */}

      {/* banner */}
      <Section>
        <SectionBody>
          <Link to="/catalog">
            <img src={banner} alt="" />
          </Link>
        </SectionBody>
      </Section>
      {/* end banner */}

      {/* popular product section */}
      <Section>
        <SectionTitle>Top popular 🤝</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(12).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle>Set</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productSet.getProducts(3).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end popular product section */}
    </Helmet>
  );
};

export default Home;
