import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Favorite } from '../models/favorite.model';
import AppService from '../services/app.service';
import BreedCard from './BreedCard';

interface Props {
  favorites: Favorite[];
}

const BreedList = ({ favorites }: Props) => {
  const { breed } = useParams<any>();
  const [breedList, setBreedList] = useState<string[]>([]);

  useEffect(() => {
    const appService = new AppService();
    const getDogsBreedList = async () => {
      const response = await appService.getDogBreedList(breed);
      setBreedList(response.message);
    };
    getDogsBreedList();
  }, [breed]);

  return (
    <div className='container d-flex flex-column'>
      <div>
        <h1 className='text-capitalize'>{breed}</h1>
      </div>
      {breedList.length > 0 ? (
        <div className='d-flex flex-row flex-wrap justify-content-center'>
          {breedList?.map((breedItem, index) => {
            const hasFavorite = favorites.filter((fav) => fav.image === breedItem);
            return (
              <div key={index} className='p-2'>
                <BreedCard
                  breed={breed}
                  image={breedItem}
                  showText={false}
                  showFav={true}
                  favorite={hasFavorite.length > 0}
                ></BreedCard>
              </div>
            );
          })}
        </div>
      ) : (
        <p>There are not matches!</p>
      )}
    </div>
  );
};

export default BreedList;
