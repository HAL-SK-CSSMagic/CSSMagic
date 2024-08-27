'use client';
// import SettingBtn from '@/components/title/SettingBtn';
import StartBtn from '@/components/title/StartBtn';
import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const page = () => {
	return (
		<>
			<Box
				height="100vh"
				display="flex"
				flexDirection="column"
				overflow="hidden"
				sx={{
					backgroundImage: 'url(/wind_bf.jpg)',
				}}
			>
				{/* <Box position="absolute" top="10px" right="10px">
					<SettingBtn />
				</Box> */}

				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					flexGrow={1}
					flexDirection="column"
				>
					<Box paddingTop={'40px'} textAlign="center">
						<Image
							src="/css_magic_logo.png"
							alt="Code Magic"
							layout="intrinsic"
							width={854}
							height={170}
						/>
					</Box>

					<Box display="flex" justifyContent="center">
						{/* Click to Start ボタン */}
						<StartBtn />
					</Box>
				</Box>

				{/* 右下のコピーライト */}
				<Box position="fixed" bottom="10px" right="10px" color="gray">
					© 2024 CSS Magic
				</Box>
			</Box>
		</>
	);
};

export default page;
