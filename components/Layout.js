import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = (url) => {
	console.log(url);
	NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = ({ children, title }) => {
	return (
		<div>
			<Head>
				<title>Portfolio</title>
				<meta name='viewport' content='width=device-width' />
			</Head>
			<header>
				<Link href='/'>
					<a>Home</a>
				</Link>
				<Link href='/about'>
					<a>About</a>
				</Link>
				<Link href='/hireme'>
					<a>Hire Me</a>
				</Link>
			</header>
			{children}
			<footer>CopyWrite &copy; {new Date().getFullYear()}</footer>
		</div>
	);
};
export default Layout;
