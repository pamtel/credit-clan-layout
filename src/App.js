import './App.scss';
import Header from './components/Header';
import Modal from './components/Modal';
import SearchInput from './components/SearchInput';

function App() {
  return (
    <div className="app">
      <Header />
      <SearchInput />
      <Modal />
    </div>
  );
}

export default App;
