import React from 'react';
import MuiButton from './component/MuiButton';
import MuiCheckBox from './component/MuiCheckBox';
import MuiRadioButton from './component/MuiRadioButton';
import MuiSelect from './component/MuiSelect';
import MuiSwitch from './component/MuiSwitch';
import MuiTextField from './component/MuiTextField';
import MuiTypography from './component/MuiTypography';

type Props = {};

const App = (props: Props) => {
	return (
		<div className="app">
			{/* <MuiTypography /> */}
			{/* <MuiButton /> */}
			{/* <MuiTextField /> */}
			{/* <MuiSelect /> */}
			{/* <MuiRadioButton /> */}
			{/* <MuiCheckBox /> */}

			<MuiSwitch />
		</div>
	);
};

export default App;
