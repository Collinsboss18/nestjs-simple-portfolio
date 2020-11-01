import { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import Error from './_error';

const About = () => {
	const [user, setUser] = useState([]);
	const [status, setStatus] = useState(false);

	useEffect(() => {
		getUser();
		// eslint-disable-next-line
	}, []);

	const getUser = async () => {
		try {
			let res = await fetch('https://api.github.com/users/collinsboss18');
			const statusCode = res.status > 200 ? res.status : false;
			const data = await res.json();
			setUser(data);
			setStatus(statusCode);
		} catch (err) {
			console.log(err);
		}
	};

	if (status) return <Error statusCode={status} />;

	return (
		<Layout title={'About'}>
			<h3>About Page</h3>
			<p>Username: {user.login}</p>
			<img src={user.avatar_url} alt='Display Image' height='200px' />
		</Layout>
	);
};

export default About;
