import styled, { keyframes } from 'styled-components';

export const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -50%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const Title = styled.h1`
  font-size: 3.6rem;
  line-height: 4.6rem;
  font-weight: normal;
  width: 64rem;
  margin-top: 26rem;
  @media (max-width: 768px) {
    font-size: 2.6rem;
    line-height: 3.6rem;
    margin-top: 10rem;
    width: 100%;
    text-align: center;
  }
  @media (max-width: 600px) {
    font-size: 2rem;
    line-height: 3rem;
  }
`;

const Button = styled.button`
  color: black;
`;

const OperationText = styled.div`
  font-size: 1rem;
  padding-top: 0.25rem;
  color: #9fa0a1;
`;

const SubText = styled.div`
  display: flex;
`;

const Navigation = styled.div`
  position: relative;
  z-index: 5;
  margin-top: 13rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 64rem;
  color: #828282;
  letter-spacing: 0.2rem;
  font-size: 1.4rem;
  opacity: 0;
  animation: ${fadeInDown} 0.78s cubic-bezier(0.215, 0.61, 0.355, 1) 0.28s forwards;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 5rem;
    padding-bottom: 10rem;
    flex-direction: column;
  }
`;

const LightSwitch = styled.button`
  position: fixed;
  z-index: 1000;
  top: 1rem;
  left: 1rem;
  background: none;
  border: none;
  outline: 0;
  cursor: pointer;
`;

const SwitchBubble = styled.div`
  position: relative;
  border-radius: 100%;
  width: 4rem;
  height: 4rem;
  margin: auto;
  background: ${props =>
    props.dark
      ? 'linear-gradient(40deg, #46BFBF, #50ECEC 70%)'
      : 'linear-gradient(0deg, #F8C346, #FFCF5D 100%)'};
  :before {
    content: ' ';
    position: absolute;
    border-radius: 100%;
    right: 0;
    width: 3rem;
    height: 3rem;
    background: white;
    transform-origin: top right;
    transition: transform 0.3s;
    transform: ${props => (props.dark ? 'scale(1)' : 'scale(0.5)')};
    background: ${props => (props.dark ? props.theme.background : 'transparent')};
  }
`;

const Cloud = styled.div`
  transition: transform 0.3s;
  transform-origin: top center;
  transform: ${props => (props.dark ? 'scale(0)' : 'scale(1)')};
  position: absolute;
  right: -1.5rem;
  bottom: -0.8rem;
  width: 4rem;
  height: 1.3rem;
  border-radius: 1.3rem;
  background: #f3f5f9;
  &:before,
  &:after {
    content: '';
    border-radius: 1.3rem;
    position: absolute;
    background: #f3f5f9;
  }
  &:before {
    width: 1.6rem;
    height: 1.6rem;
    top: -0.8rem;
    left: 0.55rem;
  }
  &:after {
    width: 2rem;
    height: 2rem;
    top: -1.1rem;
    right: 0.55rem;
  }
`;

const IconLink = styled.a`
  transition: 0.4s all cubic-bezier(0.17, 0.67, 0.83, 0.67);
  color: ${props => props.theme.text};
  display: inline-block;
  padding: 1.4rem;
  margin-right: 1rem;
  height: 3rem;
  width: 3rem;
  display: inline-block;
  border-radius: 30%;
  &:hover {
    transform: translate(0, -0.5rem);
    border-radius: 50%;
    background: ${props => props.theme.text};
    color: ${props => props.theme.background};
  }
  &:active {
    background: ${props => props.theme.background};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 12rem;
  right: -10rem;
  @media (max-width: 768px) {
    top: 17rem;
    right: 5rem;
  }
  @media (max-width: 670px) {
    top: 14rem;
    right: 0;
    svg {
      width: 100% !important;
    }
  }
  @media (max-width: 370px) {
    top: 19rem;
    right: 0;
    svg {
      width: 100% !important;
    }
  }
`;

const MobileSaver = styled.div`
  padding: 1rem;
`;

export {
  MobileSaver,
  Title,
  Button,
  OperationText,
  Navigation,
  SubText,
  IconLink,
  IconWrapper,
  LightSwitch,
  SwitchBubble,
  Cloud,
};
