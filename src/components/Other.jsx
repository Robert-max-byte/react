function Other(props){
    
    return <div className='container-md' Key={props.id}>
                <div className='row'>
                    <div class="col-sm-6">
                            <img src={props.img} id="main" alt="" />
                        </div>
                        <div class="col-sm-6">
                            <p>Home/{props.name}</p>
                            <h1>{props.description}</h1>
                            <p>{props.price}</p>
                            <a href="https://www.instagram.com/lennieshirts/" class="btn btn-danger">
                                <div class="media"><img src="instagram.png" alt='' />
                                </div> Message</a>
                    </div>
                </div>
                <h1 class="titleq">AVAILABLE</h1><div class="container-md">
		<div class="row">
			<div class="col-sm-4">
				<div class="inside">
					<img src="product/product-4.jpg" alt=''/>
					<div class="describe">
						<h4>Blue T-Shirt</h4>
						<p>Gh20</p>
					</div>
				</div>
			</div>
			<div class="col-sm-4">
				<div class="inside">
					<img src="product/product-5.jpg" alt=''/>
						<div class="describe">
							<h4>Shoe</h4>
							<p>Gh100</p>
						</div>
				</div>
			</div>
			<div class="col-sm-4">
				<div class="inside">
					<img src="product/product-6.jpg" alt=''/>
					<div class="describe">
						<h4>Black round-neck</h4>
						<p>Gh15</p>
					</div>
				</div>
			</div>
		</div>
	</div>
            </div>
}
export default Other;