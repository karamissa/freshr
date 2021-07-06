import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { useContext } from 'react';
import { RecommendationsContext } from '../../contexts/RecommendationsContext';

const Wrapper = styled.div`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.9);
  border: 2px solid var(--blue);
  border-radius: 20px;
  padding: 0.8em;
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const ArtistInfo = styled.div`
  display: flex;
  gap: 0.8em;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Image = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 10px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  margin-right: auto;
`;

const Name = styled.p`
  margin-top: 0.2em;
  font-size: 2em;
  font-weight: bold;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1em;
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

const TopTracksWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: var(--gray);
  font-weight: bold;

  ::before {
    content: 'Top Tracks:';
    color: var(--blue);
  }
`;

const Track = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1em;
  padding: 0.6em 0em;
`;

const TrackName = styled.p`
  font-size: 1.2em;
  cursor: pointer;
  transition: color 0.4s;

  :hover {
    color: var(--white);
  }
`;

const TrackLinks = styled.div`
  display: flex;
  gap: 0.5em;
`;

const ArtistCard = ({ artist }) => {
  const { setChosenSuggestion } = useContext(RecommendationsContext);

  const handleTrackClick = (e) => {
    setChosenSuggestion({ id: e.target.dataset.id, type: 'track' });
  };

  return (
    <Wrapper>
      <ArtistInfo>
        <Image src={artist.images[0].url} />
        <InfoWrapper>
          <Name>{artist.name}</Name>
          <Links>
            <SpotifyLink
              target="_blank"
              rel="noopener noreferrer"
              href={artist.link}
            >
              <FontAwesomeIcon icon={faSpotify} size="2x" />
              Spotify
            </SpotifyLink>
            <YoutubeLink
              target="_blank"
              rel="noopener noreferrer"
              href={artist.link}
            >
              <FontAwesomeIcon icon={faYoutube} size="2x" />
              Youtube
            </YoutubeLink>
          </Links>
        </InfoWrapper>
      </ArtistInfo>

      <TopTracksWrapper>
        {artist.topTracks.map((track, index) => {
          return (
            <Track key={track.id}>
              <TrackName
                data-id={track.id}
                className="track-name"
                onClick={handleTrackClick}
              >
                {index + 1}. {track.name}
              </TrackName>
              <TrackLinks>
                <SpotifyLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={track.link}
                >
                  <FontAwesomeIcon icon={faSpotify} size="lg" />
                </SpotifyLink>
                <YoutubeLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.youtube.com/results?search_query=${track.name}+${artist.name}`}
                >
                  <FontAwesomeIcon icon={faYoutube} size="lg" />
                </YoutubeLink>
              </TrackLinks>
            </Track>
          );
        })}
      </TopTracksWrapper>
    </Wrapper>
  );
};

export default ArtistCard;
