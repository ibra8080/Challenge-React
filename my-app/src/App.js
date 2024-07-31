import Content from './components/Content';
import css from './App.module.css';
import NavBarForm from './components/NavBarForm';
// import NavBarSimple from './components/NavBarSimple';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <Content />
      <NavBarForm />
      <Sidebar />
    </div>
  );
}

export default App;