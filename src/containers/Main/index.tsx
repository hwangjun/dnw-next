import * as React from 'react';
import Container from '@mui/material/Container';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import PortFolio from '@/components/Portfolio/PortFolio';
import FeaturedPost from '../../components/Post/FeaturedPost';

const sections = [
  { title: '페이지1', url: '#' },
  { title: '페이지2', url: '#' },
  { title: '페이지3', url: '#' },
  { title: '페이지4', url: '#' },
  { title: '페이지5', url: '#' },
  { title: '페이지6', url: '#' },
];

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const MainPage = () => {
  return (
    <Container>
      <Header sections={sections} title="dnwTest"/>
      <FeaturedPost post={mainFeaturedPost}/>
      <PortFolio />
      <Footer description='Footer 내용' title='Footer 제목'/>
    </Container>
  );
}

export default MainPage;
