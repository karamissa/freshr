import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Wrapper, Logo } from '../styled-components/HeaderComponents';

const Header = () => {
  return (
    <Wrapper>
      <Logo href="#">Freshr</Logo>
      <a href="#">
        <FontAwesomeIcon icon={faGithub} size="2x" inverse />
      </a>
    </Wrapper>
  );
};

export default Header;
