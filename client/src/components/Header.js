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

const Logo = styled.h1`
  font-size: 3em;
  font-weight: bold;
  color: var(--blue);
  cursor: pointer;
`;

const Header = () => {
  return (
    <Wrapper>
      <Logo onClick={() => window.location.reload()}>Freshr</Logo>
      <a target="_blank" rel="noopener noreferrer" href="/">
        <FontAwesomeIcon icon={faGithub} size="2x" inverse />
      </a>
    </Wrapper>
  );
};

export default Header;
