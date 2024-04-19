import { Env } from '../constants/env';

class AppService {
    public async getAllDogsBreed () {
        const response = fetch(`${Env.api}/breeds/list/all`);
        return (await response).json();
    }

    public async getBreedImage(breed: string) {
        const response = fetch(`${Env.api}/breed/${breed}/images/random`);
        return (await response).json();
    }

    public async getDogBreedList (breed: string) {
        const response = fetch(`${Env.api}/breed/${breed}/images`);
        return (await response).json();
    }
}

export default AppService;
