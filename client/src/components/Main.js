import styled from 'styled-components';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  padding: 1em 0;
  gap: 2em;
`;

const SearchBar = styled.input`
  width: 60%;
  padding: 0.2em;
  font-size: 2em;
  color: var(--light-gray);
  background-color: inherit;
  border-bottom: 2px solid var(--dark-gray);
  transition: border-bottom 0.4s ease-in-out;
  :focus {
    border-bottom: 2px solid var(--light-gray);
  }
  :focus::placeholder {
    color: transparent;
  }

  @media (max-width: 1024px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 85%;
  }
`;

const HelpText = styled.div`
  color: var(--gray);
  background: rgba(0, 0, 0, 0.85);
  text-align: center;
  padding: 1.2em;
  border-radius: 20px;
  font-weight: 600;
`;

const HelpTextParagraph = styled.p``;

const Main = () => {
  return (
    <Wrapper>
      <SearchBar placeholder="Search" />
      <HelpText>
        <HelpTextParagraph>
          Are you looking for some fresh music recommendations?
        </HelpTextParagraph>
        <HelpTextParagraph>
          Well, you've come to the right place!
        </HelpTextParagraph>
        <HelpTextParagraph>
          Search for a song/artist you like to get recommendations :{')'}
        </HelpTextParagraph>
      </HelpText>
    </Wrapper>
  );
};

export default Main;
