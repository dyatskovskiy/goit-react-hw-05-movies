import {
  AuthorName,
  Item,
  ReviewText,
} from 'components/ReviewItem/ReviewItem.styled';

export const ReviewItem = ({ author, text }) => {
  return (
    <Item>
      <AuthorName>Author: {author}</AuthorName>
      <ReviewText>{text}</ReviewText>
    </Item>
  );
};
