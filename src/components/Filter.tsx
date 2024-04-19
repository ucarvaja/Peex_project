import { FormControl } from 'react-bootstrap';

interface Props {
  placeholder: string
  searchQuery: string;
  setSearchQuery: Function;
}

const Filter = ({ placeholder, searchQuery, setSearchQuery }: Props) => {
  return (
    <div className='container d-flex flex-column'>
        <FormControl
          type='search'
          placeholder={placeholder}
          className='me-2 form-control'
          aria-label={placeholder}
          value={searchQuery}
          onInput={(e) => setSearchQuery((e.target as HTMLInputElement).value)}
        />
    </div>
  );
};

export default Filter;
