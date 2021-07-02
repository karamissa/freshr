import styled from 'styled-components';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`;

const Search = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 80%;
  }
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 0.2em;
  font-size: 2em;
  color: var(--gray);
  background-color: transparent;
  border-bottom: 2px solid var(--gray);
  transition: border-bottom 0.4s ease-in-out;

  :focus {
    border-bottom: 2px solid var(--blue);
  }

  :focus::placeholder {
    color: transparent;
  }
`;

const HelpText = styled.div`
  color: var(--white);
  background: var(--black);
  border: 2px solid var(--blue);
  text-align: center;
  padding: 1.2em;
  margin: 1em;
  border-radius: 20px;
  font-weight: 600;
`;

export { Wrapper, Search, SearchBar, HelpText };
