import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faSpotify } from '@fortawesome/free-brands-svg-icons';

const Wrapper = styled.div`
  background-color: var(--black);
  border: 2px solid var(--blue);
  border-radius: 20px;
  padding: 1em;
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 10px;
`;

const Title = styled.p`
  margin: 0.5em 0 0 0;
  font-size: 2em;
  font-weight: bold;
`;

const TrackArtistsNames = styled.p`
  color: var(--gray);
  font-size: 1.2em;
  margin: 0.4em 0 0 0;
`;

const Links = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  margin-top: auto;
  justify-content: space-around;
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
