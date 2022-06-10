import Header from "../components/Header";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NotFound from "../components/NotFound";
import Collection from "../components/MainPage";
import Cart from "../components/cart";


function App() {
        return (
       <div>
           <Header/>
            <Router>
               <Routes>
                   <Route path='/' element={<Collection/>}/>
                   <Route path='/cart' element={<Cart/>}/>
                   <Route path='*' element={<NotFound/>}/>
               </Routes>
           </Router>
       </div>
    );
}
export default App;
