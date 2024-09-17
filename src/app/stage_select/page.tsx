import React from 'react';
import Box from '@mui/material/Box';
import { StageSelectionContainer } from '@/components/stage_select/StageSelectContainer';

const Page = () => (
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
			<StageSelectionContainer />
		</Box>
	</Box>
);

export default Page;
