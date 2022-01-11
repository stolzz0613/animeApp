import { Card, HeroHeader, Stack } from "./components/atoms";
import useGetAnimes from "./hooks/useGetAnimes";

function App() {
  const { data, nextPage, selectAnime, animeSelected, prevPage } = useGetAnimes();

  return (
    <div className="App">
      <HeroHeader
        background={animeSelected?.attributes?.coverImage?.large || animeSelected?.attributes?.posterImage?.large}
      />
      <Stack
        horizontalAlignment={'center'}
        direction={'row'}
        marginTop={'-150px'}
      >
        <button onClick={() => prevPage()}>{'<'}</button>
        {
          data.length > 0 && data.map((anime, pos) =>
            <Card
              key={anime?.attributes?.ratingRank}
              title={anime?.attributes?.titles?.en_jp}
              background={anime?.attributes?.posterImage?.large || anime?.attributes?.coverImage?.large}
              size={'small'}
              onClick={() => selectAnime(pos)}
            />
          )
        }
        <button onClick={() => nextPage()}>{'>'}</button>
      </Stack>
    </div>
  );
}

export default App;
