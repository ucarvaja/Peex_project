import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppService from '../services/app.service';
import LoadingSpinner from '../utils/LoadSpinner';
import HeartFavorite from '../utils/HeartFavorite';

interface Props {
  breed?: string;
  image: string;
  showText?: boolean;
  showFav?: boolean;
  favorite?: boolean;
  refreshList?: boolean;
}

const BreedCard = ({
  breed = '',
  image,
  showText = true,
  showFav = false,
  favorite = false,
  refreshList = false
}: Props) => {
  const [breedimage, setBreedImage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [addFavorite, setAddFavorite] = useState(favorite);

  useEffect(() => {
    if (image) {
      setIsLoading(false);
      setBreedImage(image);
      return;
    }
    const appService = new AppService();

    if (!breed) {
      return;
    }

    const getBreedImage = async (breed: string) => {
      const response = await appService.getBreedImage(breed);
      setBreedImage(response.message);
      setIsLoading(false);
    };

    getBreedImage(breed);
  }, [breed, image]);

  return !showFav ? (
    <Link
      to={`/breed/${breed}/`}
      style={{ color: 'black', textDecoration: 'none' }}
    >
      <Card style={{ width: '250px', height: showText ? '19rem' : '' }}>
        {isLoading ? (
          <LoadingSpinner></LoadingSpinner>
        ) : (
          <div className='img-container'>
            <Card.Img
              variant='top'
              src={`${breedimage}?rnd=${Math.random()}`}
              style={{ height: '250px', width: '250px' }}
            />
          </div>
        )}
        <Card.Body>
          <Card.Title className='text-capitalize'>{breed}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  ) : (
    <Card style={{ width: '250px', height: showText ? '19rem' : '' }}>
      {isLoading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <div className='img-container'>
          <Card.Img
            variant='top'
            src={`${breedimage}?rnd=${Math.random()}`}
            style={{ height: '250px', width: '250px' }}
          />
          <HeartFavorite
            breed={breed}
            image={image}
            favorite={addFavorite}
            setFavorite={setAddFavorite}
            refreshList={refreshList}
          />
        </div>
      )}
      {showText ? (
        <Card.Body>
          <Card.Title className='text-capitalize'>{breed}</Card.Title>
        </Card.Body>
      ) : (
        ''
      )}
    </Card>
  );
};

export default BreedCard;
