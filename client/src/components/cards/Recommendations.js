import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faSpotify } from '@fortawesome/free-brands-svg-icons';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Recommendation = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  border: 2px solid var(--blue);
  border-radius: 20px;
  padding: 0.5em;
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

const Image = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 10px;
`;

const InfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 1.2em;
`;

const ArtistName = styled.p`
  color: var(--gray);
  font-size: 1em;
  margin: 0.2em 0;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

const SpotifyLink = styled.a`
  color: var(--green);
`;

const YoutubeLink = styled.a`
  color: var(--red);
`;

const Recommendations = ({ recommendations }) => {
  return (
    <Wrapper>
      {recommendations &&
        recommendations.map((recommendation) => {
          return (
            <Recommendation key={recommendation.id}>
              <Image src={recommendation.images[2].url} />
              <InfoWrapper>
                <Title>{recommendation.name}</Title>
                <ArtistName>{recommendation.artists[0].name}</ArtistName>
              </InfoWrapper>
              <Links>
                <SpotifyLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={recommendation.spotifyLink}
                >
                  <FontAwesomeIcon icon={faSpotify} size="lg" />
                </SpotifyLink>
                <YoutubeLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.youtube.com/results?search_query=${recommendation.name}+${recommendation.artists[0].name}`}
                >
                  <FontAwesomeIcon icon={faYoutube} size="lg" />
                </YoutubeLink>
              </Links>
            </Recommendation>
          );
        })}
    </Wrapper>
  );
};

export default Recommendations;
