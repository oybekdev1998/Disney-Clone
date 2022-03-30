import React from 'react'
import styled from 'styled-components'
const Recommends = () => {
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Wrap>
        <a href="2#">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQfjytcYL57rNGLeuu4nkBe0D3v2RKMEdIXA&usqp=CAU"
            alt="Cartoon"
          />
        </a>
        <a href="2#">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS5vTLFNvYrFHKDXYnACBpnC6ytUxCD-LWTw&usqp=CAU"
            alt="Cartoon"
          />
        </a>
        <a href="2#">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf5ojnfalP0WLQtr3QblciqNNjUDlVlXzOvw&usqp=CAU"
            alt="Cartoon"
          />
        </a>
        <a href="2#">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwl8sW_CQOnWSixTY0nmxSYRd_riict7LWzg&usqp=CAU"
            alt="Cartoon"
          />
        </a>
      </Wrap>
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

const Wrap = styled.div`
  position: relative;
  display: grid;
  grid-gap: 30px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  a {
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
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 4px solid rgb(249, 249, 249, 0.1);
  }
`;
export default Recommends