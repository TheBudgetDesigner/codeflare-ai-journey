import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import WhatYoullLearn from '@/components/home/WhatYoullLearn';
import FeaturedContent from '@/components/home/FeaturedContent';
import TipOfTheDay from '@/components/home/TipOfTheDay';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <WhatYoullLearn />
      <FeaturedContent />
      <TipOfTheDay />
    </Layout>
  );
};

export default Index;
