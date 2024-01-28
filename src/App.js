import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className='bg-slate-900 min-h-screen px-10'>
      <div className='background-gradient absolute inset-0 -z-50 max-h-screen' />
      {/* <div className="pointer-events-none absolute inset-0 -z-40 h-full bg-[url('./noisetexture.jpg')] opacity-20 mix-blend-soft-light"></div> */}
      <Home />
    </div>
  );
}

export default App;
