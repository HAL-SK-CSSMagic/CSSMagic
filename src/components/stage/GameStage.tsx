'use client';
import React, { useState, useEffect, FormEvent } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation'; // App Routerの場合はこのフックを使用
import { StageData } from '@/utils/stage/stageData';

interface GameStageProps {
	stage: StageData;
}

export const GameStage: React.FC<GameStageProps> = ({ stage }) => {
	const [appliedStyles, setAppliedStyles] = useState<React.CSSProperties>({
		...stage.css,
	});
	const [inputValue, setInputValue] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	const router = useRouter();

	// 残りのプロパティ数を計算
	const remainingProperties = Object.keys(appliedStyles).length;

	useEffect(() => {
		if (remainingProperties === 0) {
			// アラートを1秒遅らせる
			setTimeout(() => {
				alert('CSSキメラを解放した！');
				router.push('/stage_select');
			}, 500); // 1000ms（1秒）遅らせる
		}
	}, [remainingProperties, router]);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const property = inputValue.trim();

		if (property in appliedStyles) {
			const updatedStyles = { ...appliedStyles };
			delete updatedStyles[property as keyof React.CSSProperties];
			setAppliedStyles(updatedStyles);
			setMessage(`"${property}" 解除成功！`);
		} else {
			setMessage(
				`"${property}" は使われていないようだ…別のものを試してみよう。`
			);
		}

		setInputValue('');
	};

	return (
		<Box
			height="100vh"
			display="flex"
			overflow="hidden"
			sx={{
				height: '100vh',
				backgroundPosition: 'center',
				backgroundImage: `url(${stage.stage_background})`,
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Box
				sx={{
					textAlign: 'center',
					width: '700px',
					padding: '20px',
					borderRadius: '20px',
					backdropFilter: 'blur(60px)',
					backgroundColor: 'rgba(255, 255, 255, 0.7)',
				}}
			>
				<Typography variant="h5">{stage.stage_name}</Typography>

				{/* 残りのプロパティ数を表示 */}
				<Typography variant="body2" sx={{ mb: 2 }}>
					残りのプロパティ数: {remainingProperties}
				</Typography>

				<Box
					sx={{
						width: 200,
						height: 200,
						margin: '100px auto',
						backgroundColor: '#fff',
						...appliedStyles,
						transition: 'all 0.3s ease',
					}}
				/>

				{message && (
					<Typography variant="body1" color="#000" sx={{ mb: 2 }}>
						{message}
					</Typography>
				)}

				<form onSubmit={handleSubmit}>
					<TextField
						label="CSSプロパティを入力"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						variant="outlined"
						size="small"
						sx={{ mr: 2, width: '500px' }}
					/>
					<Button type="submit" variant="contained" color="primary">
						削除
					</Button>
				</form>
			</Box>
		</Box>
	);
};
