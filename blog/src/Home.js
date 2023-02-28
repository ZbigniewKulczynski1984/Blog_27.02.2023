import React from 'react';
import { useState } from 'react';

const Home = () => {
	const [blogs, setBlogs] = useState([
		{ title: 'My new website', body: 'lorem ipsum...', author: 'Zbys', id: 1 },
		{ title: 'Welcome party!', body: 'lorem ipsum...', author: 'Aga', id: 2 },
		{
			title: 'We want holliday',
			body: 'lorem ipsum...',
			author: 'Goga',
			id: 3,
		},
	]);
	return (
		<div className="home">
			{blogs.map((blog) => (
				<div className="blog-preview" key={blog.id}>
					<h2>{blog.title}</h2>
					<p>Written by {blog.author}</p>
				</div>
			))}
		</div>
	);
};

export default Home;
