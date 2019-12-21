import React from 'react';

//we can destructure the props while getting it into the funstion as following (instead of writting (props)=> )
const Card = ({ name, email, id }) =>{
	//we can destructure here as well as following:
	//const { name, email, id } = props;
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
		<img alt='photo' src ={`https://robohash.org/${id}?200x200`}/>
		<div>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
		</div>
	);
}

export default Card;