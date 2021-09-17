import Header from "./Header";
import Footer from "./Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Inside from "./Inside";
import Other from "./Other";
import indid from "./Details";

function product(indid){
    return <Inside 
    img={indid.img}
    price={indid.price}
    name={indid.name}
    id={indid.id}
            />

}
function prolong(indid){
    return <Other 
                img={indid.img}
                price={indid.price}
                name={indid.name}
                description={indid.description}
            />
}

function App(){
    return <Router>
        <div>
            <Header />
            <Switch>
            <div className="container-md">
                <div className='row'>
                <Route exact path='/'>{indid.map(product)}</Route>
                <Route path='/Product:id'>{indid.map(prolong)}</Route>
                </div>
            </div>
            </Switch>
            <Footer />
    </div>
    </Router>
};
export default App;