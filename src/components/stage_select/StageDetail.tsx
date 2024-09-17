import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { StageData } from '@/utils/stage/stageData';

interface StageDetailProps {
	stage: StageData | null;
}

export const StageDetail: React.FC<StageDetailProps> = ({ stage }) => {
	const contentWidth = '100%';

	if (!stage) {
		return (
			<Box
				style={{
					flex: 1,
					padding: '20px',
					borderRadius: '0 10px 10px 0',
					backdropFilter: 'blur(60px)',
					backgroundColor: 'rgba(255, 255, 255, 0.7)',
					height: '80vh',
					maxWidth: '55%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			></Box>
		);
	}

	return (
		<Box
			style={{
				flex: 1,
				padding: '20px',
				borderRadius: '0 10px 10px 0',
				backdropFilter: 'blur(60px)',
				backgroundColor: 'rgba(255, 255, 255, 0.7)',
				height: '80vh',
				maxWidth: '55%',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Box
				width={700}
				my={1}
				display="flex"
				flexDirection="column"
				alignItems="center"
				gap={2}
				style={{ margin: '15px auto 0 auto' }}
			>
				<Typography
					variant="h6"
					textAlign="left"
					width="100%"
					sx={{
						color: '#000',
					}}
				>
					{stage.stage_name}
				</Typography>
				<Box width={contentWidth} display="flex" justifyContent="center">
					<Image
						src={stage.stage_background}
						alt="ステージ画像"
						width={700}
						height={700 * (9 / 16)}
					/>
				</Box>
				<Typography
					variant="body1"
					textAlign="left"
					width="100%"
					sx={{
						color: '#000',
					}}
				>
					{stage.stage_details}
				</Typography>
			</Box>
			<Box mt="auto" display="flex" justifyContent="center">
				<Link href={`/stage_select/${stage.id}/stage`} passHref>
					<Button
						variant="contained"
						sx={{
							width: '500px',
							fontWeight: 'bold',
						}}
					>
						ステージへ
					</Button>
				</Link>
			</Box>
		</Box>
	);
};
