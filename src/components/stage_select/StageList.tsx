import React from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';
import { stageData, StageData } from '@/utils/stage/stageData';

interface StageListProps {
	onStageSelect: (stage: StageData) => void;
	selectedStageId: number | undefined;
}

export const StageList: React.FC<StageListProps> = ({
	onStageSelect,
	selectedStageId,
}) => {
	return (
		<Box
			sx={{
				flex: 1,
				padding: '10px',
				maxWidth: '35%',
				height: '80vh',
				borderRadius: '10px 0 0 10px',
				backdropFilter: 'blur(60px)',
				backgroundColor: 'rgba(255, 255, 255, 0.7)',
				overflowY: 'scroll',
				'&::-webkit-scrollbar': {
					width: '8px',
				},
				'&::-webkit-scrollbar-track': {
					background: 'transparent',
				},
				'&::-webkit-scrollbar-thumb': {
					backgroundColor: '#ccc',
					borderRadius: '10px',
				},
			}}
		>
			<List>
				{stageData.map((stage) => (
					<ListItem
						button
						key={stage.id}
						onClick={() => onStageSelect(stage)}
						sx={{
							padding: '20px',
							borderBottom: '1px solid black',
							backgroundColor:
								stage.id === selectedStageId
									? 'rgba(0, 0, 0, 0.1)'
									: 'transparent',
						}}
					>
						<ListItemText
							primary={stage.stage_name}
							sx={{
								color: '#000',
							}}
						/>
					</ListItem>
				))}
			</List>
		</Box>
	);
};
