import React from 'react';
import MuiButton from './component/MuiButton';
import MuiSelect from './component/MuiSelect';
import MuiTextField from './component/MuiTextField';
import MuiTypography from './component/MuiTypography';

type Props = {};

const App = (props: Props) => {
	return (
		<div className="app">
			{/* <MuiTypography /> */}
			{/* <MuiButton /> */}
			{/* <MuiTextField /> */}
			<MuiSelect />
		</div>
	);
};

export default App;
