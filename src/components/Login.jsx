
import Button from './Button';
import Logcompo from './Logcompo';



function Login(){
    return <div>
        <form>
        <Logcompo type='text'
            placeholder='username'
        />
         <Logcompo type='password'
            placeholder='password'
        />
        <Button name='Login'/>
        </form>
    </div>
   
};
export default Login;