import { ReviewItem } from 'components/ReviewItem/ReviewItem';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'utils/movies-api';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    async function getReviews() {
      try {
        const fetchedReviews = await fetchReviews(movieId);
        setReviews(fetchedReviews);
      } catch (error) {
        alert(error.message);
      }
    }
    getReviews();
  }, [movieId]);
  return (
    <ul>
      {reviews &&
        reviews.map(review => {
          const { id, author_details, content } = review;
          return (
            <ReviewItem
              key={id}
              author={author_details.username}
              text={content}
            />
          );
        })}
    </ul>
  );
};
