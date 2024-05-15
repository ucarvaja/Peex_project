import { Favorite } from '../models/favorite.model';

class SaveService {


  public setLocalStorage(item: Object) {
    localStorage.setItem('breedList', JSON.stringify(item));
  }

  public getLocalStorage(item: string) {
    return localStorage.getItem(item);
  }

  public saveFavorite(image: string, breed: string) {
    const breedListInit = this.getLocalStorage('breedList');
    let breedList: Favorite[];
    breedListInit ? breedList = JSON.parse(breedListInit) : breedList = [];

    breedList.push({ image, breed});
    this.setLocalStorage(breedList);
  }

  public removeFavorite(image: string) {
    const breedListInit = this.getLocalStorage('breedList');
    let breedList: Favorite[];
    breedListInit ? breedList = JSON.parse(breedListInit) : breedList = [];

    const resultList = breedList.filter(breed => breed.image !== image);
    this.setLocalStorage(resultList);
  }

  public getFavorites() {
    const breedListInit = this.getLocalStorage('breedList');
    let breedList: Favorite[];
    breedListInit ? breedList = JSON.parse(breedListInit) : breedList = [];
    return breedList;
  }
}

export default SaveService;
