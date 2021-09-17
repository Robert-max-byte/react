

function Footer(){
    let currentDay= new Date();
    let year = currentDay.getFullYear();
    return  <nav class="bg-dark downn  navbar-expand-lg">
	<div className="container-lg footera">
		<div><h3 className="navbar-brand">Contact Us</h3>
		<div class="social">
		<a href="https://www.instagram.com/lennieshirts/"><img src="instagram.png" alt=''/></a>
	</div></div>
        <div><h3 className="navbar-brand ">Copyright { year }</h3></div>
	
	</div>
</nav>
};
export default Footer;