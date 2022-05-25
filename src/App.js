import './main.css';
import { Navigation } from "./components/navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <section className="page__top">
        <h1 className="page__top-head">СЫРИУС</h1>
        <p className="page__top-p">Крафтовая семейная сыроварня</p>
        <a className="page__top-b" href="#">Подробнее</a>
    </section>
    <section className="page__list">
        <h2 className="list">Вкусный</h2>
        <h2 className="list list-2"> 100% Натурально</h2>
        <h2 className="list">Свежий</h2>
    </section>
    <section className="page__about"></section>
    <section className="page__carusel"></section>
    <section className="page__edu"></section>
    <section className="page_quote"></section>
    <section clasName="page__shop"></section>
    <section className="page__rate"></section>
    <section className="page__faq"></section>
    <footer></footer>
    </div>
  );
}

export default App;
