
import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './request';

function App() {
  return (
    <div>
      <Banner fetchUrl={requests.fetchPopularMovies}/>
      <Row isPresent={true} title= "PopularShows" fetchUrl={requests.fetchPopularShows}/>

      <Row title= "PopularMovies" fetchUrl={requests.fetchPopularMovies}/>

      <Row title= "Upcoming" fetchUrl={requests.fetchUpcoming}/>

      <Row title= "ActionMovies" fetchUrl={requests.fetchActionMovies}/>

      <Row title= "HorrorMovies" fetchUrl={requests.fetchHorrorMovies}/>

      <Row title= "AnimationMovies" fetchUrl={requests.fetchAnimationMovies}/>
     
      
    </div>
    
  );
}

export default App;
