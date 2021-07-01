import { Wrapper, Line } from '../styled-components/FooterComponents';

const Footer = () => {
  return (
    <Wrapper>
      <Line>
        Designed &amp; Developed by{' '}
        <a href="#" style={{ color: 'white' }}>
          Karam Issa
        </a>
        .
      </Line>

      <Line>
        Built using <span style={{ color: 'var(--blue)' }}>React</span> &amp;{' '}
        <span style={{ color: 'var(--green)' }}>Node.js</span>.
      </Line>
    </Wrapper>
  );
};

export default Footer;
