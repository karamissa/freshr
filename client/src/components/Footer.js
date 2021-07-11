import styled from 'styled-components';

const Wrapper = styled.footer`
  padding: 0.4em;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--gray);
`;

const Line = styled.p`
  margin: 0.5em;
  padding: 0em;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Line>
        Designed &amp; Developed by{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/karamissa"
          style={{ color: 'white' }}
        >
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
