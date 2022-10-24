import React from 'react'
import styled from 'styled-components'

export default function Login() {
  return (
    <Container>
      <ContentBox>
        <LogoOne src='/images/cta-logo-one.svg' />
        <SignUp>GET ALL THREE</SignUp>
        <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam minima tempore nesciunt, nulla inventore sed sunt, possimus, quod sapiente corporis recusandae vero eligendi nihil facere corrupti molestiae a earum ut.</Description>
      </ContentBox>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.8;
    z-index: -1;
  }
`;

const ContentBox = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 70%;
  margin: auto;
`;

const LogoOne = styled.img`
`;

const SignUp = styled.div`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;