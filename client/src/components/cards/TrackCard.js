import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faSpotify } from '@fortawesome/free-brands-svg-icons';

const Wrapper = styled.div`
  width: 20%;
  background-color: rgba(0, 0, 0, 0.9);
  border: 2px solid var(--blue);
  border-radius: 20px;
  padding: 1em;
  gap: 0.5em;
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

const Title = styled.p`
  font-size: 2em;
  font-weight: bold;
`;

const TrackArtistsNames = styled.p`
  color: var(--gray);
  font-size: 1.2em;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5em;
  align-items: center;
`;

const Link = styled.a`
  display: flex;
  gap: 0.5em;
  align-items: center;
  font-weight: bold;
`;

const SpotifyLink = styled(Link)`
  color: var(--green);
`;

const YoutubeLink = styled(Link)`
  color: var(--red);
`;

const TrackCard = ({ track }) => {
  return (
    <Wrapper>
      <Image src={track.images[0].url} />
      <Title>{track.track}</Title>
      <TrackArtistsNames>{track.artists[0].artistName}</TrackArtistsNames>
      <Links>
        <SpotifyLink href={track.link}>
          <FontAwesomeIcon icon={faSpotify} size="2x" />
          Spotify
        </SpotifyLink>
        <YoutubeLink href={track.link}>
          <FontAwesomeIcon icon={faYoutube} size="2x" />
          Youtube
        </YoutubeLink>
      </Links>
    </Wrapper>
  );
};

export default TrackCard;
