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
  gap: 1em;
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
  display: flex;
  flex-direction: column;
  color: var(--gray);
  font-weight: bold;
`;

const Track = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.6em 0em;
`;

const TrackName = styled.p`
  font-size: 1.2em;
`;

const TrackLinks = styled.div`
  display: flex;
  gap: 0.5em;
`;

const ArtistCard = ({ artist }) => {
  return (
    <Wrapper>
      <ArtistInfo>
        <Image src={artist.images[0].url} />
        <InfoWrapper>
          <Name>{artist.name}</Name>
          <Links>
            <SpotifyLink href={artist.link}>
              <FontAwesomeIcon icon={faSpotify} size="2x" />
              Spotify
            </SpotifyLink>
            <YoutubeLink href={artist.link}>
              <FontAwesomeIcon icon={faYoutube} size="2x" />
              Youtube
            </YoutubeLink>
          </Links>
        </InfoWrapper>
      </ArtistInfo>

      <TopTracksWrapper>
        {artist.topTracks.map((track, index) => {
          return (
            <Track key={track.trackID}>
              <TrackName>
                {index + 1}. {track.trackName}
              </TrackName>
              <TrackLinks>
                <Link href={track.trackLink}>
                  <FontAwesomeIcon icon={faSpotify} size="lg" />
                </Link>
                <Link href={track.trackLink}>
                  <FontAwesomeIcon icon={faYoutube} size="lg" />
                </Link>
              </TrackLinks>
            </Track>
          );
        })}
      </TopTracksWrapper>
    </Wrapper>
  );
};

export default ArtistCard;
