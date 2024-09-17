export interface StageData {
	id: number;
	stage_name: string;
	stage_details: string;
	stage_background: string;
	css: React.CSSProperties;
}

export const stageData: StageData[] = [
	{
		id: 1,
		stage_name: 'ステージ1',
		stage_details: '初級編、世界を救う第一歩。',
		stage_background: '/wind3_c_r.jpg',
		css: {
			backgroundColor: '#768579',
			borderRadius: '10px',
			boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
			border: '1px solid #ccc',
		},
	},
	{
		id: 2,
		stage_name: 'ステージ2',
		stage_details: 'Boxの異変の原因を突き止めるべく我々は森の奥へと向かった……',
		stage_background: '/woods.jpg',
		css: {
			backgroundColor: '#f5a623',
			border: '3px solid #000',
			boxShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)',
			transform: 'skew(10deg)',
		},
	},
	{
		id: 3,
		stage_name: 'ステージ3',
		stage_details: '遺跡を発見。慎重に進もう。',
		stage_background: '/w_iseki02.jpg',
		css: {
			backgroundColor: '#50e3c2',
			borderRadius: '20px',
			boxShadow:
				'4px 4px 10px rgba(0, 0, 0, 0.4), inset 1px 1px 3px rgba(255, 255, 255, 0.2)',
			border: '2px dashed #333',
			opacity: 0.8,
		},
	},
	{
		id: 4,
		stage_name: 'ステージ4',
		stage_details: '遺跡にもやはりBoxは居た。落ち着いて解放していこう。',
		stage_background: '/iseki01.jpg',
		css: {
			backgroundColor: '#bd10e0',
			transform: 'rotate(5deg) skew(5deg)',
			boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.5)',
			border: '4px dotted #ff5722',
			opacity: 0.9,
		},
	},
	{
		id: 5,
		stage_name: 'ステージ5',
		stage_details: '風邪をひかないよう、体を温めながら進もう。',
		stage_background: '/ice02_dan.jpg',
		css: {
			backgroundColor: '#4a90e2',
			border: '5px double #000',
			filter: 'brightness(1.2) contrast(0.9)',
			boxShadow: '6px 6px 12px rgba(0, 0, 0, 0.6)',
			transform: 'rotate(20deg)',
		},
	},
	{
		id: 6,
		stage_name: 'ステージ6',
		stage_details:
			'氷の神殿でも異変は起きていた。凍えないようなるべく早く解放しよう。',
		stage_background: '/icedan.jpg',
		css: {
			backgroundColor: '#f8e71c',
			transform: 'rotate(-15deg) scale(1.1)',
			filter: 'grayscale(50%) blur(2px)',
			boxShadow: 'inset 2px 2px 6px rgba(0, 0, 0, 0.3)',
			border: '1px solid #222',
		},
	},
	{
		id: 7,
		stage_name: 'ステージ7',
		stage_details: '水分補給を欠かさずに。',
		stage_background: '/wilderness_bf_y.jpg',
		css: {
			background: 'linear-gradient(135deg, #ff6f61, #de6262)',
			boxShadow:
				'0 5px 15px rgba(0, 0, 0, 0.5), inset 0 1px 3px rgba(255, 255, 255, 0.1)',
			borderRadius: '25px',
			filter: 'hue-rotate(30deg)',
			opacity: 0.7,
		},
	},
	{
		id: 8,
		stage_name: 'ステージ8',
		stage_details: '突然の大雨に見舞われた。気を付けて。',
		stage_background: '/wilderness_nr.jpg',
		css: {
			backgroundColor: '#7ed321',
			transform: 'rotate(-10deg) skew(5deg)',
			filter: 'sepia(60%)',
			boxShadow: '5px 10px 15px rgba(0, 0, 0, 0.5)',
			border: '3px solid #222',
		},
	},
	{
		id: 9,
		stage_name: 'ステージ9',
		stage_details: 'ラストダンジョン入口、最後まで油断は禁物。',
		stage_background: '/fire_dan1.jpg',
		css: {
			backgroundColor: 'rgba(255, 99, 71, 0.7)',
			transform: 'perspective(200px) rotateX(30deg)',
			boxShadow:
				'10px 20px 25px rgba(0, 0, 0, 0.7), inset 2px 2px 5px rgba(255, 255, 255, 0.2)',
			filter: 'blur(3px) contrast(1.1)',
			border: '1px dashed #333',
		},
	},
	{
		id: 10,
		stage_name: 'ステージ10',
		stage_details: '今までの集大成、世界の平和はすぐそこ。',
		stage_background: '/fire2_tan_tan_tani.jpg',
		css: {
			background: 'radial-gradient(circle, #ff7e5f, #feb47b)',
			transform: 'rotate(360deg) skew(10deg)',
			filter: 'contrast(1.2) brightness(0.9)',
			borderRadius: '50%',
			boxShadow:
				'15px 30px 50px rgba(0, 0, 0, 0.8), inset 5px 5px 15px rgba(255, 255, 255, 0.2)',
			opacity: 0.85,
		},
	},
];
