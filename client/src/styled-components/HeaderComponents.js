import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  padding: 1% 3%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 4% 5%;
  }
`;

const Logo = styled.a`
  font-size: 3em;
  font-weight: bold;
  color: var(--blue);
`;

export { Wrapper, Logo };
