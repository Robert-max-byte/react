import {Link} from 'react-router-dom';


function Inside(props){
    return <div className="col-sm-4" Key={props.id}>
		        <div className="inside">
                    <Link to={`/Product${props.id}`}>
                            <img src={props.img} alt='' />
                            <div class="describe">
                                <h4>{props.name}</h4>
                                <p>{props.price}</p>
                            </div>
                    </Link>
             </div>
		</div>

}
export default Inside;