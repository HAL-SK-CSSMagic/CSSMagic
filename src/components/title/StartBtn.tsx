import { Box, Link } from '@mui/material';
import React from 'react';

const StartBtn = () => {
	return (
		<Box width="500px" m="20px auto" textAlign="center" color="#000">
			<Link
				href="/stage_select"
				display="block"
				letterSpacing="10px"
				fontFamily="" //後で追加
				fontSize="3rem"
				sx={{
					position: 'relative',
					textDecoration: 'none',
					color: 'inherit',
					'&::after': {
						content: "''",
						position: 'absolute',
						bottom: 0,
						left: 0,
						width: '100%',
						height: '2px',
						backgroundColor: '#ceb849',
						transform: 'scaleX(0)',
						transition: 'transform 0.3s',
					},
					'&:hover::after': {
						transform: 'scaleX(1)',
					},
				}}
			>
				Click to Start
			</Link>
		</Box>
	);
};

export default StartBtn;
