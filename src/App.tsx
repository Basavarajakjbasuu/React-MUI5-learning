import React from 'react';
import MuiAutoComplete from './component/MuiAutoComplete';
import MuiButton from './component/MuiButton';
import MuiCheckBox from './component/MuiCheckBox';
import MuiRadioButton from './component/MuiRadioButton';
import MuiRating from './component/MuiRating';
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

			{/* <MuiSwitch /> */}
			{/* <MuiRating /> */}

			<MuiAutoComplete />
		</div>
	);
};

export default App;
