
import Login from './Login'
import App from './App'

const loggedin= true;

function Logger(){
            return <div>
             {loggedin?<App />:<Login />}
             </div>
}
export default Logger