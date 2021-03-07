import {useState} from 'react';

function Home(){

	return(
<div>


<h1>Habitoos está no ar, Gratidão Universo</h1>
<Contador/>
</div>

		
	) 
	
	function Contador(){
		const[contador,setConatdor]= useState(1);
		function adicionarContador() {
			setConatdor(contador +1);
			
		}
		return(

			<div>
			<div>{contador}</div>
			<button onClick={adicionarContador} > adicionar</button>

			</div>
			

		) 
	}


	}

	export default Home