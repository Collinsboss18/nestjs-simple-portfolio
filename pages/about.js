import Link from 'next/link'
import Layout from '../components/Layout'

const About = () => {
	return (
		<Layout title={'About'}>
            <Link as={'a'} href="/">Home</Link>
			<h3>About Page</h3>
			<img src={'/static/img/img1.jpg'} alt='Display Image' height='200px' />
		</Layout>
	);
};

export default About;
