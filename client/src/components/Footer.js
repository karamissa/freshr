import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding-bottom: 1em;
  text-align: center;
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
