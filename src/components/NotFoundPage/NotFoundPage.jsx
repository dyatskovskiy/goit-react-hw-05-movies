import { Link } from 'react-router-dom';
import { Button, Label, Text, Title, Wrapper } from './NotFoundPage.styled';

export default function NotFoundTitle() {
  return (
    <Wrapper>
      <Label>404</Label>
      <Title>You have found a secret place.</Title>
      <Text>
        Unfortunately, this is only a 404 page. You may have mistyped the
        address, or the page has been moved to another URL.
      </Text>
      <Link to={'/'}>
        <Button>Take me back to home page</Button>
      </Link>
    </Wrapper>
  );
}
