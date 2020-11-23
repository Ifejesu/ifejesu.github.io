import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { professionalTitle, email } from '@config';
import { navDelay, loaderDelay } from '@utils';
import { Greeting } from '../greeting';
import { IconArrowDown } from '../icons';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 500px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Arrow = styled.div`
  margin: 0 auto;
  position: relative;
  bottom: -2rem;
  left: 50%;
  margin-left: -20px;
  width: 30px;
  height: 30px;
  animation: bounce 2s infinite;
  @media (max-width: 480px) {
    display: none;
  }
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-15px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <Greeting />;
  const two = <h2 className="big-heading">I'm Ifejesu Olajide.</h2>;
  const three = (
    <h3 className="big-heading">
      {'<'}
      {professionalTitle}
      {'/>'}
    </h3>
  );
  const four = (
    <p>
      I'm an innovative software engineer based in Lagos, Nigeria specializing in developing
      exceptional websites, web applications, and mobile applications.
    </p>
  );
  const five = (
    <a href={`mailto:${email}`} className="email-link">
      Get In Touch
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
      {isMounted && (
        <Arrow>
          <IconArrowDown />
        </Arrow>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
