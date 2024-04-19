import BreedCard from './BreedCard';

interface Props {
    breedList: string[]
}

const HomeList = ({breedList}: Props) => {
  
  return (
    <div className='container d-flex flex-row flex-wrap justify-content-center'>
      {breedList.length > 0 ? breedList?.map(breed => {
        return (
        <div key={breed} className='p-2'>
          <BreedCard breed={breed} image={''}></BreedCard>
        </div>
        )
      }) :
      <p>There are not matches!</p>
      }
      
    </div>
  );
}

export default HomeList;
