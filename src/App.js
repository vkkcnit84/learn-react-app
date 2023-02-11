import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';
import movies from './movie.json';

function App() {
  return (
    <div className="App">
    <Header />

    <div className='main'>
      {
        movies.map((item) => {
          return (
            <Movie
              title={item.title}
              year={item.year}
              img={item.img}
          />
          )
        })
      }
    </div>

    <Movie />
    </div>
  );
}

export default App;
