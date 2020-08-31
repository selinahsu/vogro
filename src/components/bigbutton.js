import React from 'react';

import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	buttons: {
		marginTop: theme.spacing(2),
		padding: '15px 30px',
		fontWeight: '700',
		textTransform: 'capitalize'
	},
}));

function BigButton(props) {
	const classes = useStyles();
	return (
		<Button className={classes.buttons} variant="contained" size="large" color="primary" href={ props.buttonLink } target={ props.target } disableElevation>
			{ props.buttonLabel }
		</Button>
	);
};

export default BigButton;