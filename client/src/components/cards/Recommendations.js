import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { useContext } from 'react';
import { RecommendationsContext } from '../../contexts/RecommendationsContext';

const Wrapper = styled.div`
  flex: 4;
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

const Recommendation = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.9);
  border: 2px solid var(--blue);
  border-radius: 20px;
  padding: 0.5em;
  display: flex;
  align-items: center;
  gap: 0.5em;
  transition: background-color 0.2s;

  :hover {
    background-color: rgba(220, 220, 220, 1);

    p:first-child {
      font-weight: bold;
      color: var(--black);
    }

    p:nth-child(2) {
      font-weight: bold;
      color: var(--dark-gray);
    }
  }
`;

const LinkContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.5em;
  cursor: pointer;
`;

const Image = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 10px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 1.2em;

  transition: color 0.2s;

  :hover {
    color: var(--blue) !important;
  }
`;

const ArtistName = styled.p`
  color: var(--gray);
  font-size: 1em;
  margin: 0.2em 0;
  transition: color 0.2s;

  :hover {
    color: var(--blue) !important;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  @media (max-width: 600px) {
    flex-direction: row;
    font-size: 1.6em;
    gap: 0.6em;
  }
`;

const SpotifyLink = styled.a`
  color: var(--green);
`;

const YoutubeLink = styled.a`
  color: var(--red);
`;

const Recommendations = ({ recommendations }) => {
  const { setChosenSuggestion } = useContext(RecommendationsContext);

  const handleRecommendationClick = (e) => {
    if (e.target.classList.contains('artist')) {
      setChosenSuggestion({
        id: e.target.dataset.id,
        type: 'artist'
      });
    } else if (e.target.classList.contains('track')) {
      setChosenSuggestion({
        id: e.target.parentElement.parentElement.dataset.id,
        type: 'track'
      });
    } else if (e.target.tagName === 'IMG' || e.target.tagName === 'DIV') {
      setChosenSuggestion({
        id: e.target.parentElement.dataset.id,
        type: 'track'
      });
    }
  };

  return (
    <Wrapper>
      {recommendations &&
        recommendations.map((recommendation) => {
          return (
            <Recommendation
              key={recommendation.id}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <LinkContainer
                data-id={recommendation.id}
                onClick={handleRecommendationClick}
              >
                <Image src={recommendation.images[2].url} />
                <InfoWrapper>
                  <Title className="track">{recommendation.name}</Title>
                  <ArtistName
                    data-id={recommendation.artists[0].id}
                    className="artist"
                  >
                    {recommendation.artists[0].name}
                  </ArtistName>
                </InfoWrapper>
              </LinkContainer>

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
