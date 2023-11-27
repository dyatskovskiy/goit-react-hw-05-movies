import {
  Card,
  PhotoLayout,
  CardInfo,
  Character,
  Name,
} from './ActorCard.styled';

export const ActorCard = ({
  photo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ09uJRvSYTZguOy_L--3XALEwxqNIuvBvF8yJOHWNiew&s',
  name,
  character,
}) => {
  return (
    <Card>
      <PhotoLayout src={photo} alt={name} />

      <CardInfo>
        <Name>{name}</Name>
        <Character>Character: {character}</Character>
      </CardInfo>
    </Card>
  );
};
