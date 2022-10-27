import Page from 'components/04-layouts/page/page';
import Header from 'components/03-organisms/header/header';
import Options from 'components/03-organisms/options/options';
import Form from 'components/03-organisms/form/form';
import List from 'components/03-organisms/list/list';

const Dashboard = () => {
	
	return (
		<Page className="dashboard">
				<Header />
				<Options />
				<List />
				<Form />
		</Page>
	);

};

export default Dashboard;