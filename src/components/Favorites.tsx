import { useState } from 'react';
import { Favorite } from '../models/favorite.model';
import BreedCard from './BreedCard';
import Filter from './Filter';

interface Props {
  favorites: Favorite[];
}

const Favorites = ({ favorites }: Props) => {
  const filterFavoriteList = (favorites: Favorite[], query: string) => {
    if (!query) {
      return favorites;
    }
    return favorites.filter((fav) => {
      const favName = fav.breed.toLowerCase();
      return favName.includes(query.toLowerCase());
    });
  };

  const [searchQuery, setSearchQuery] = useState('');
  const filteredFavoriteList = filterFavoriteList(favorites, searchQuery);

  return (
    <div className='container d-flex flex-column'>
      <div>
        <h1>Favorites</h1>
      <Filter placeholder='Filter by breed' searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      {filteredFavoriteList.length > 0 ?  (
        <div className='d-flex flex-row flex-wrap justify-content-center'>
          {filteredFavoriteList?.map((fav, index) => {
            return (
              <div key={index} className='p-2'>
                <BreedCard
                  breed={fav.breed}
                  image={fav.image}
                  showText={true}
                  showFav={true}
                  favorite={true}
                  refreshList={true}
                ></BreedCard>
              </div>
            );
          })}
        </div>
      ): (
        <p>There is not favorites yet!</p>
      )}
    </div>
  );
};

export default Favorites;
