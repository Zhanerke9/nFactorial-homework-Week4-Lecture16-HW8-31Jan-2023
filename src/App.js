// - Скачать и установить Nodejs
// - Переписать сверстанный вами проект “Media as medium” в React приложение ✨ (загрузку данных fetch/await не нужно)
// - Разбить по компонентам отдельные блоки верстки (Header, Post)

import './style.css';
import Header from './components/Header';
import Mainb from './components/MainBody';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Mainb/>
      <Footer/>
    </div>
  );
}

export default App;
