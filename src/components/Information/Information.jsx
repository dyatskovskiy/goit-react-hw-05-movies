import { InformationLayout, StyledLink } from './Information.styled';

export const Information = () => {
  return (
    <InformationLayout>
      <StyledLink to="cast">Cast</StyledLink>
      <StyledLink to="reviews">Reviews</StyledLink>
    </InformationLayout>
  );
};
