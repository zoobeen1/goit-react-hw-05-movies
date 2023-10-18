import { toast } from 'react-toastify';
import { useSearchParams, useLocation, Link, NavLink } from 'react-router-dom';
import { fetchMovies } from 'services/api';
import {
  FormStyled,
  InputStyled,
  ButtonStyled,
  ButtonLabelStyled,
  ListItem,
  List,
} from './Searchbar.styled';
import { useState } from 'react';
import { Loader } from 'components/Loader';
import { useEffect } from 'react';

function Searchbar() {
  const [status, setStatus] = useState('idle');
  //State machine:
  //idle - простой,
  //pending - добавляется,
  //resolved - успешно,
  //rejected - отклонено
  const [movies, setMovies] = useState(null);
  //SearchParameters
  const [searchParams, setSearchParams] = useSearchParams({ searchQuery: '' });
  const searchQuery = searchParams.get('searchQuery');
  const location = useLocation();

  // Вызывается при отправке формы
  // очищает поле ввода
  function handleSubmit(e) {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      toast.error('Введите запрос прежде чем отправлять!!!');
      return;
    }
    fetch();
  }
  // Вызывается при изменении поля ввода
  // изменяет searchParameters - паттерн "Контролируемый элемент"
  const handleChange = e => {
    setSearchParams({ searchQuery: e.currentTarget.value.toLowerCase() });
  };

  useEffect(() => {
    const foo = async () => {
      setStatus('pending');
      try {
        const resp = await fetchMovies('search/movie', { query: searchQuery });
        if (resp) {
          setStatus('resolved');
          setMovies(resp.results);
          return;
        }
      } catch (error) {
        console.log(error);
        return;
      }
    };
    foo();
  }, [searchQuery]);

  // *************************************************************************
  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <ButtonStyled type="submit">
          <ButtonLabelStyled>Search</ButtonLabelStyled>
        </ButtonStyled>
        <InputStyled
          type="text"
          name="search"
          autocomplete="off"
          value={searchQuery}
          autoFocus
          placeholder="Search films"
          onChange={handleChange}
        />
      </FormStyled>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <List>
          {movies.map(movie => (
            <ListItem key={movie.id}>
              <NavLink to={movie.id.toString()} state={{ from: location }}>
                {movie.title}
              </NavLink>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
}
export default Searchbar;
