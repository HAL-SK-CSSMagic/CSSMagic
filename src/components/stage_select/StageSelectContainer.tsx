'use client';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { StageList } from './StageList';
import { StageDetail } from './StageDetail';
import { StageData, stageData } from '@/utils/stage/stageData';

export const StageSelectionContainer: React.FC = () => {
	const [selectedStage, setSelectedStage] = useState<StageData | null>(null);

	useEffect(() => {
		// 初期値としてID 1のステージを設定
		const initialStage = stageData.find((stage) => stage.id === 1);
		if (initialStage) {
			setSelectedStage(initialStage);
		}
	}, []);

	const handleStageSelect = (stage: StageData) => {
		setSelectedStage(stage);
	};

	return (
		<Box
			display="flex"
			width="100%"
			justifyContent="center"
			alignItems="center"
		>
			<StageList
				onStageSelect={handleStageSelect}
				selectedStageId={selectedStage?.id}
			/>
			<StageDetail stage={selectedStage} />
		</Box>
	);
};
