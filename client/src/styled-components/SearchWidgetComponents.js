import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: var(--black);
  color: var(--gray);
  width: 100%;
  margin: 0 0.5em;

  @media (max-width: 1024px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 85%;
  }
`;

const ArtistWrapper = styled.div`
  ::before {
    content: 'Artist Results:';
    font-weight: bold;
  }
`;

const ArtistResult = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const ArtistImage = styled.img`
  margin: 0.4em;
  height: 5em;
  width: 5em;
`;

const ArtistName = styled.h2`
  text-decoration: none;
`;

const TrackWrapper = styled.div`
  ::before {
    content: 'Track Results:';
    font-weight: bold;
  }
`;

export {
  Wrapper,
  ArtistWrapper,
  ArtistResult,
  ArtistImage,
  ArtistName,
  TrackWrapper
};
