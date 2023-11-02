import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { useState } from 'react'
import Cat from './data/cat';
import CatCard from './components/cat_card';
import { catData } from './data/cat-data';

function App(): JSX.Element {

	const [ cats, setCats ] = useState<Array<Cat>>(catData);

	 console.log("Our pretties 😻: ", cats)

	return (
		<>
		<Navbar />
		<Header count = {cats.length} />

		<main>
			<div>{cats.map((cat, index) => (
				<CatCard
				key = {cat.id}
				name = {cat.name}
				species = {cat.species}
				favFoods = {cat.favFoods}
				birthYear = {cat.birthYear}
				catIndex = {index}
				/>
			))}</div>
		</main>

		<Footer />
		</>
	)
}

export default App;
