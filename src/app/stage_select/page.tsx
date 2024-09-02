import React from 'react';
import Box from '@mui/material/Box';
import { StageList } from '@/components/stage_select/StageList';
import { StageDetail } from '@/components/stage_select/StageDetail';

const page = () => (
	<Box
		display="flex"
		flexDirection="column"
		height="100vh"
		sx={{
			backgroundImage: 'url(/wind2.jpg)',
		}}
	>
		<Box
			display="flex"
			width="100%"
			justifyContent="center"
			alignItems="center"
			flexGrow={1}
		>
			<StageList />
			<StageDetail />
		</Box>
	</Box>
);

export default page;
