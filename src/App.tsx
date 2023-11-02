import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { useState } from 'react'
import Cat from './data/cat';
import CatCard from './components/cat_card';
import { catData } from './data/cat-data';
import { v4 as uuidv4 } from 'uuid';
import { images } from './components/cat_card';

function App(): JSX.Element {

	catData.forEach((cat, index) => {
		const id = uuidv4();
		cat.id = id;
		if (images.length > index) images[index].id = id;
	})

	const [ cats ] = useState<Array<Cat>>(catData);

	 console.log("Our pretties 😻: ", cats)

	return (
		<>
		<Navbar />
		<Header count = {cats.length} />

		<main>
			<div className='cards__wrapper'>{
				<div>{cats.map((cat, index) => (
					<CatCard
					key = {index}
					name = {cat.name}
					species = {cat.species}
					favFoods = {cat.favFoods}
					birthYear = {cat.birthYear}
					catIndex = {index}
					image = {images.find(image => image.id === cat.id)}
					/>
				))}</div>
			}</div>
		</main>

		<Footer />
		</>
	)
}

export default App;
