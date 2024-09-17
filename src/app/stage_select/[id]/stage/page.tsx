// app/stage/[id]/page.tsx
import React from 'react';

import { stageData } from '@/utils/stage/stageData'; // stageDataのパスを適宜修正
import { GameStage } from '@/components/stage/GameStage';

const Page = ({ params }: { params: { id: string } }) => {
	const stageId = parseInt(params.id, 10);
	const stage = stageData.find((s) => s.id === stageId);

	if (!stage) {
		return <div>ステージが見つかりません。</div>;
	}

	return <GameStage stage={stage} />;
};

export default Page;
