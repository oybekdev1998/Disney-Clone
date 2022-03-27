import React from 'react'
import styled from 'styled-components'

const Login = () => {


  return (
    <Container>
      <Content>
        <BgImage />
        <CTA>
          <CTALogoOne src="./images/cta-logo-one.svg" alt="Logo" />
          <SignUp>get all there</SignUp>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            distinctio omnis sapiente. Soluta numquam excepturi neque esse
            rerum, magni adipisci dolores sapiente voluptas quam nisi
            perspiciatis obcaecati illo id? Voluptates, quasi repudiandae
            perferendis commodi nemo deleniti. Autem temporibus similique ab.
          </Description>
          <CTALogoTwo src="./images/cta-logo-two.png" alt="Logo" />
        </CTA>
      </Content>
    </Container>
  );
}

const Container = styled.section`
  overflow: hidden;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  
`
const Content = styled.div`
  margin-bottom: 10vh;
  width: 100%;
  min-height: 100vh;
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`
const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  
`
const CTA = styled.div`
  margin-bottom: 2vh;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  text-align: center;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
`

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  display: block;
  max-width: 600px;
  min-height: 1px;
  width: 100%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  margin-bottom: 12px;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;

  &:hover{
    background-color: #0483ee;
  }
`

const Description = styled.p`
  color: hsla(0, 0%, 95,3%, 1);
  font-size: 14px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`

const CTALogoTwo = styled(CTALogoOne)`
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

export default Login