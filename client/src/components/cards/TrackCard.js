import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faSpotify } from '@fortawesome/free-brands-svg-icons';

const Wrapper = styled(motion.div)`
  flex: 1;
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
    <Wrapper
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ duration: 0.75 }}
    >
      <Image src={track.images[0].url} />
      <Title>{track.name}</Title>
      <TrackArtistsNames>{track.artists[0].name}</TrackArtistsNames>
      <Links>
        <SpotifyLink
          target="_blank"
          rel="noopener noreferrer"
          href={track.link}
        >
          <FontAwesomeIcon icon={faSpotify} size="2x" />
          Spotify
        </SpotifyLink>
        <YoutubeLink
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.youtube.com/results?search_query=${track.name}+${track.artists[0].name}`}
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
          Youtube
        </YoutubeLink>
      </Links>
    </Wrapper>
  );
};

export default TrackCard;
