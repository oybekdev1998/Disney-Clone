import React from 'react'
import styled from 'styled-components'

import { useSelector } from 'react-redux';
import { selectRecommend } from '../redux/features/movie/movieSlice';
import { Link } from 'react-router-dom';

const Recommends = () => {
  const movies = useSelector(selectRecommend)
  console.log(movies);
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        { 
          movies && movies.map((movie, index) => {
            return (
              <Wrap key={index}>
                <Link to={"/detail/" + movie.id}>
                  <img src={movie.cardImg} alt={movie.title} />
                </Link>
              </Wrap>
            );
          }) 
        }
      </Content>
      
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0 28px;
  position: relative;
  text-align: left;
  font-size: 18px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 30px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition all 250ms cubic-bezier(0.25, 0.46, 0.45, 1);  
    &:hover {
      box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0/72%) 0px 30px 22px -10px;
      transform: scale(1.05);
      border-color: rgba(249, 249, 249, 0.8);
    }
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 4px solid rgb(249, 249, 249, 0.1);
  }
`;
export default Recommends