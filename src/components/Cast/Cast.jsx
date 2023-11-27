import { ActorCard } from 'components/ActorCard/ActorCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActors } from 'utils/movies-api';
import { ActorList } from './Cast.styled';
import { Loader } from 'components/Loader/Loader';

export const Cast = () => {
  const [actorData, setActorData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getActorData() {
      setIsLoading(true);

      try {
        const fetchedData = await fetchActors(movieId);
        setActorData(fetchedData);
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getActorData();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {actorData.length > 0 ? (
        <ActorList>
          {actorData.map(actor => {
            const { id, profile_path, name, character } = actor;
            return (
              <ActorCard
                key={id}
                photo={
                  profile_path
                    ? `http://image.tmdb.org/t/p/w185/${profile_path}`
                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ09uJRvSYTZguOy_L--3XALEwxqNIuvBvF8yJOHWNiew&s'
                }
                name={name}
                character={character}
              />
            );
          })}
        </ActorList>
      ) : (
        <b>There is no info about actors</b>
      )}
    </>
  );
};
