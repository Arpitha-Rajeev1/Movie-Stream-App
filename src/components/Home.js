import React, { useEffect } from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import Movies from './Movies';
import Viewers from './Viewers';
import db from '../firebase';
import { useDispatch } from 'react-redux';
import { setMovies } from '../features/movie/movieSlice';
import { collection, getDocs } from 'firebase/firestore';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, 'movies'));
      let tempMovies = []
      querySnapshot.forEach((doc) => {
          tempMovies = [...tempMovies, doc.data()]
      })
      dispatch(setMovies(tempMovies));
  }
  fetchData()    
  }, [dispatch])
  
  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
    </Container>
  )
}

export default Home

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;

  &:before {
    background: url('/images/home-background.png') center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;