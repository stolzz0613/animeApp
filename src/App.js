import {
  Card,
  HeroHeader,
  DescriptionCard,
  InfoBox,
  Stack,
  Button
} from "./components";
import useGetAnimes from "./hooks/useGetAnimes";

function App() {
  const { data, nextPage, selectAnime, animeSelected, prevPage, characters } = useGetAnimes();
  const currentAnime = animeSelected?.attributes;

  return (
    <div className="App">
      <HeroHeader
        background={currentAnime?.coverImage?.large || currentAnime?.posterImage?.large}
      >
        <DescriptionCard>
          <InfoBox>
            <InfoBox.Title title={currentAnime?.titles?.en_jp} rating={currentAnime?.averageRating}/>
            <InfoBox.ExtraDetails
              extraDetails={[
                  currentAnime?.startDate,
                  currentAnime?.showType,
                  currentAnime?.status
              ]}
            />
            <InfoBox.Description description={currentAnime?.synopsis} />
            <InfoBox.Characters data={characters} />
          </InfoBox>
          <Card
            background={animeSelected?.attributes?.posterImage?.large || animeSelected?.attributes?.coverImage?.large}
            size={'medium'}
          />
        </DescriptionCard>
      </HeroHeader>
      <Stack
        horizontalAlignment={'center'}
        direction={'row'}
        marginTop={'-300px'}
      >
        <Button size='md' text={'<'} action={() => prevPage()}/>
        {
          data.length > 0 && data.map((anime, pos) =>
            <div onClick={() => selectAnime(pos)}>
              <Card
                key={anime?.attributes?.ratingRank}
                background={anime?.attributes?.posterImage?.large || anime?.attributes?.coverImage?.large}
                size={'small'}
              />
            </div>
          )
        }
        <Button size='md' text={'>'} action={() => nextPage()}/>
      </Stack>
    </div>
  );
}

export default App;
