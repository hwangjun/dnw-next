import Link from 'next/link';
import * as React from 'react';
import Container from '@mui/material/Container';


const MainPage = () => {
  return (
    <Container>
      <Link href="/about">About</Link>
    </Container>
  );
}

export default MainPage;
