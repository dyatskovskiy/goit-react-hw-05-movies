import { PageTitle } from './Home.styled';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';

export default function Home() {
  return (
    <div>
      <PageTitle>Trending today</PageTitle>
      <MoviesGallery />
    </div>
  );
}
