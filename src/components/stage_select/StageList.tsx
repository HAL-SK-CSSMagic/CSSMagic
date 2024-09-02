import React from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';
import { stageList } from '@/utils';

export const StageList = () => {
	return (
		<>
			<Box
				sx={{
					flex: 1,
					padding: '10px',
					maxWidth: '35%',
					height: '500px',
					backgroundColor: '#232323',
					overflowY: 'scroll',
					'&::-webkit-scrollbar': {
						width: '8px',
					},
					'&::-webkit-scrollbar-track': {
						background: 'transparent',
					},
					'&::-webkit-scrollbar-thumb': {
						backgroundColor: '#ddd',
						borderRadius: '10px',
						transition: '0.3s',
					},
					'&::-webkit-scrollbar-thumb:hover': {
						backgroundColor: 'rgba(0, 0, 0, 0.8)',
					},
				}}
			>
				<List>
					{stageList.map((stage) => (
						<ListItem
							key={stage.id}
							button
							sx={{
								padding: '20px',
							}}
							style={{ borderBottom: '1px solid black' }}
						>
							<ListItemText primary={stage.stage_name} />
						</ListItem>
					))}
				</List>
			</Box>
		</>
	);
};
