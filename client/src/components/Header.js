import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Wrapper = styled.header`
  display: flex;
  padding: 1% 3.5%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 2% 5%;
  }
`;

const Logo = styled.a`
  font-size: 3em;
  font-weight: bold;
  color: var(--blue);
`;

const Header = () => {
  return (
    <Wrapper>
      <Logo href="/">Freshr</Logo>
      <a href="/">
        <FontAwesomeIcon icon={faGithub} size="2x" inverse />
      </a>
    </Wrapper>
  );
};

export default Header;
