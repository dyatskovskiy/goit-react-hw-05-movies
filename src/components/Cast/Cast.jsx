import { ActorCard } from 'components/ActorCard/ActorCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActors } from 'utils/movies-api';
import { ActorList } from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();

  const [actorData, setActorData] = useState([]);

  useEffect(() => {
    async function getActorData() {
      try {
        const fetchedData = await fetchActors(movieId);
        setActorData(fetchedData);
      } catch (error) {
        alert(error.message);
      }
    }
    getActorData();
  }, [movieId]);

  return (
    <>
      {actorData && (
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
      )}
    </>
  );
};
