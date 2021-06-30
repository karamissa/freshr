import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 0.4em;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--gray);
`;

const FooterLine = styled.p`
  margin: 0.5em;
  padding: 0em;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLine>
        Designed &amp; Developed by{' '}
        <a href="#" style={{ color: 'white' }}>
          Karam Issa
        </a>
        .
      </FooterLine>

      <FooterLine>
        Built using <span style={{ color: 'var(--blue)' }}>React</span> &amp;{' '}
        <span style={{ color: 'var(--green)' }}>Node.js</span>.
      </FooterLine>
    </FooterWrapper>
  );
};

export default Footer;
