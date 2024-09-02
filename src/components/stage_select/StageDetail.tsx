import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
import Image from 'next/image';

export const StageDetail = () => {
	const contentWidth = '100%';
	return (
		<>
			<Box
				style={{
					flex: 1,
					padding: 17,
					marginRight: 16,
					backgroundColor: '#232323',
					maxWidth: '55%',
				}}
			>
				<Box width={contentWidth} display="flex" justifyContent="center">
					<Image
						src="/thumbnail.webp"
						alt="ステージ画像"
						width={600}
						height={300}
					/>
				</Box>
				<Box
					width={550}
					height={150}
					my={1}
					display="flex"
					flexDirection="column"
					alignItems="center"
					gap={2}
					p={3}
					sx={{ border: '2px solid grey' }}
					style={{ margin: '15px auto 0 auto ' }}
				>
					<Typography variant="h6" textAlign="left" width="100%">
						ステージ名
					</Typography>
					<Typography variant="body1" textAlign="left" width="100%">
						ステージ説明が入りますステージ説明が入りますステージ説明が入りますステージ説明が入ります
						ステージ説明が入りますステージ説明が入ります
					</Typography>
				</Box>
			</Box>
		</>
	);
};
