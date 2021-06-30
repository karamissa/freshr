import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  padding: 2% 0;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 3%;
  }
`;

const Logo = styled.a`
  font-size: 3em;
  font-weight: bold;
  color: var(--blue);
`;

const GitHubLink = styled.a`
  padding: 1% 1% 0 0;

  @media (max-width: 768px) {
    padding: 2% 2% 0 0;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Logo href="#">Freshr</Logo>
      <GitHubLink href="#">
        <FontAwesomeIcon icon={faGithub} size="2x" inverse />
      </GitHubLink>
    </Wrapper>
  );
};

export default Header;
