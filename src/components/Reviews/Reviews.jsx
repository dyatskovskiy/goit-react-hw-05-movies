import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'utils/movies-api';
import { ReviewItem } from 'components/ReviewItem/ReviewItem';
import { Loader } from 'components/Loader/Loader';

export const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      setIsLoading(true);

      try {
        const fetchedReviews = await fetchReviews(movieId);
        setReviews(fetchedReviews);
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getReviews();
  }, [movieId]);
  return (
    <ul>
      {isLoading && <Loader />}

      {reviews.length > 0 ? (
        reviews.map(review => {
          const { id, author_details, content } = review;
          return (
            <ReviewItem
              key={id}
              author={author_details.username}
              text={content}
            />
          );
        })
      ) : (
        <b>There is no reviews</b>
      )}
    </ul>
  );
};
