import './App.css';
import Booth from './components/Booth';
import Banner from './components/Banner';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import Menu from './components/Menu';
import { data } from './data';

function App() {
  let name = 'Finsen';

  return (
    <div>
      <header className='header'>
        <Header name={name} />
      </header>

      <main className='main'>
        <div className='filter-container'>
          <SearchBar />
          <Menu />
        </div>

        <div className='banner-container'>
          <Banner 
            title='NECDC Physical Career Fair'
            subTitle='@ Our Tampines Hub'
          />
        </div>

        <div className='booth-container'>
          <div className='booths'>
            {data.map((item, index) => 
             <Booth item={item} key={index} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
