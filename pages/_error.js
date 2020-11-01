import Layout from '../components/Layout';

const Error = ({ statusCode, message }) => {
	return (
		<Layout title={'Error'}>
			<p>Internal Error try later</p>
		</Layout>
	);
};

export default Error;
