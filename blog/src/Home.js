import React from 'react';
import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
	const [blogs, setBlogs] = useState([
		{ title: 'My new website', body: 'lorem ipsum...', author: 'Zbys', id: 1 },
		{ title: 'Welcome party!', body: 'lorem ipsum...', author: 'Aga', id: 2 },
		{
			title: 'We want holliday:)',
			body: 'lorem ipsum...',
			author: 'Goga',
			id: 3,
		},
	]);

	const handleDelete = (id) => {
		const newBlogs = blogs.filter(blog => blog.id !== id)
		setBlogs(newBlogs)
	};

	return (
		<div className="home">
			<BlogList blogs={blogs} handleDelete={handleDelete}/>
		</div>
	);
};

export default Home;
