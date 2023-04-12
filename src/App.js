import NavBar from "./Components/Navbar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {originals,action,HorrorMovies} from './urls'
function App() {
 
  return (
    <div className="App">
     <NavBar />
     <Banner />
     <RowPost title='Netflix Originals' url={originals}/>
     <RowPost title='Action' isSmall url={action}/>
     <RowPost title='Horror Movie' isSmall url={HorrorMovies}/>

    </div>
  );
}

export default App;
