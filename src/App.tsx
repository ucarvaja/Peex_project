import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComponent from './components/Navbar';
import HomeList from './components/HomeList';
import AppService from './services/app.service';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Favorites from './components/Favorites';
import BreedList from './components/BreedList';
import SaveService from './services/save.service';
import { Favorite } from './models/favorite.model';

function App() {
  const filterBreedList = (breedList: string[], query: string) => {
    if (!query) {
      return breedList;
    }
    return breedList.filter((breed) => {
      const breedName = breed.toLowerCase();
      return breedName.includes(query.toLowerCase());
    });
  };

  const [dogs, setDogs] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const { search } = window.location;
  const query = new URLSearchParams(search).get('search');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredBreedList = filterBreedList(dogs, searchQuery);

  useEffect(() => {
    const appService = new AppService();
    const saveService = new SaveService();
    const getAllDogsBreed = async () => {
      const response = await appService.getAllDogsBreed();
      setDogs(Object.keys(response.message));
    };


    const getFavorites = () => {
      const favs =  saveService.getFavorites();
      setFavorites(favs);
    }

    getFavorites();
    getAllDogsBreed();
  }, []);

  return (
    <BrowserRouter>
      <div className='App'>
        <NavbarComponent
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <Switch>
          <Route path={'/favorites'}>
            <Favorites favorites={favorites} />
          </Route>
          <Route path={'/breed/:breed'}>
            <BreedList favorites={favorites}/>
          </Route>
          <Route path={'/'}>
            <HomeList breedList={filteredBreedList} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
