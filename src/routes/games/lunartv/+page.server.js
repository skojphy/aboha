// import { database } from '$db/database';

export const load = async function () {
	console.log('>>>> load start');
	// const data = await database.find({}).toArray();

	const data = [
		{
			id: 0,
			description:
				'당신의 인터넷 접속 기록이 상사에게 전송되었습니다. 어떤 접속 기록이 전송되었을까요?',
			low: '가장 비난을 받을 것 같은 사이트부터',
			high: '업무와 관련있어 보이는 사이트까지',
			isMoving: false
		},
		{
			id: 1,
			description: '당신은 식당을 개업했습니다. 식당 이름은 무엇일까요?',
			low: '아무도 안 올 것 같은 이름부터',
			high: '모두가 오고 싶어 할 이름까지',
			isMoving: false
		},
		{
			id: 2,
			description: '크리스마스 선물을 받았습니다. 선물에 따른 당신의 반응을 표현해 주세요.',
			low: '아무 쓸모 없는 선물을 받은 반응부터',
			high: '최고로 좋은 선물을 받은 반응까지',
			isMoving: true
		},
		{
			id: 3,
			description: '당신은 발명가입니다. 가장 최근에 발명한 제품은 무엇인가요?',
			low: '아무도 관심 갖지 않을 발명품부터',
			high: '불티나게 잘 팔릴 발명품까지',
			isMoving: false
		},
		{
			id: 4,
			description: '당신은 칼을 든 해적입니다. 이제부터 칼싸움을 시작합니다.',
			low: '칼을 처음 잡아본 것 같은 초보자의 칼싸움부터',
			high: '영화에 나올 법한 멋진 칼싸움까지',
			isMoving: true
		},
		{
			id: 5,
			description:
				'당신은 10년 후의 당신을 만났습니다. 완전히 바뀌어 있는 당신의 삶은 어떤 모습일까요?',
			low: '완전 최악의 모습부터',
			high: '정말 최고의 모습까지',
			isMoving: false
		},
		{
			id: 6,
			description:
				'당신은 사랑하는 사람과 휴가를 떠났습니다. 휴가지에 도착해서 어떤 상황을 마주쳤는지 알려주세요.',
			low: '최악의 휴가 상황부터',
			high: '최고의 휴가 상황까지',
			isMoving: false
		},
		{
			id: 7,
			description: '친구가 당신에게 반려동물을 잠시 맡겼습니다. 어떤 동물일까요?',
			low: '하루도 함께하기 어려운 반려동물부터',
			high: '평생 함께하고 싶은 반려동물까지',
			isMoving: false
		},
		{
			id: 8,
			description: '당신은 드럼 연주자입니다. 다음 음악에 맞게 드럼을 연주하는 모습을 보여주세요.',
			low: 'BPM 60의 아주 느린 음악부터',
			high: 'BPM 200의 아주 빠른 음악까지',
			isMoving: true
		},
		{
			id: 9,
			description: '친구의 집에 놀러 간 당신, 실수로 물건을 깨뜨렸습니다. 어떤 물건일까요?',
			low: '별거 아닌 물건부터',
			high: '엄청난 물건까지',
			isMoving: false
		},
		{
			id: 10,
			description: '가방을 잃어버렸습니다. 가방 안에 무엇이 들어있나요?',
			low: '잃어버려도 괜찮은 물건부터',
			high: '절대 잃어버리면 안 되는 물건까지',
			isMoving: false
		},
		{
			id: 11,
			description: '옆 사람에게 윙크를 해 주세요.',
			low: '담백한 윙크부터',
			high: '느끼한 윙크까지',
			isMoving: true
		},
		{
			id: 12,
			description:
				'당신은 외계인과의 첫 만남에 대비해야 합니다. 어떤 상황에 대해 대비하시겠습니까?',
			low: '가장 무력한 상황부터',
			high: '최첨단 기술과 무기를 활용한 상황까지',
			isMoving: false
		},
		{
			id: 13,
			description: '당신은 마법 세계로 순간이동했습니다. 어떤 능력을 갖고 싶은가요?',
			low: '주변을 간단히 변화시킬 수 있는 능력부터',
			high: '세계를 구원할 수 있는 강력한 마법 능력까지',
			isMoving: false
		},
		{
			id: 14,
			description:
				'당신은 시간 여행을 할 수 있는 기계를 발견했습니다. 어떤 시간대로 이동하시겠습니까?',
			low: '과거에서 가장 의미있는 순간부터',
			high: '미래의 혁신적인 시대까지',
			isMoving: false
		},
		{
			id: 15,
			description:
				'당신은 신비로운 동굴에 들어가 보물 상자를 발견했습니다. 보물 상자 안에는 무엇이 들어 있을까요?',
			low: '평범해 보이는 작은 물건부터',
			high: '전설적인 힘을 지닌 보물까지',
			isMoving: false
		},
		{
			id: 16,
			description: '당신은 로봇 동료를 만났습니다. 어떤 업무를 맡길 것인가요?',
			low: '일상적인 업무 처리부터',
			high: '전투 및 위험한 임무 수행까지',
			isMoving: false
		},
		{
			id: 17,
			description: '당신은 파티에서 마법 물약을 마셨습니다. 어떤 효과를 기대하시나요?',
			low: '기분 전환을 위한 경미한 효과부터',
			high: '강력한 마법 능력을 발휘할 수 있는 효과까지',
			isMoving: false
		},
		{
			id: 18,
			description: '당신은 어떤 문을 발견했습니다. 문을 열고 들어가는 모습을 보여 주세요.',
			low: '단순한 방문을 여는 모습부터',
			high: '신비한 세계로 들어가는 모습까지',
			isMoving: true
		},
		{
			id: 19,
			description: '갓난아이가 처음으로 말을 했습니다. 무슨 말을 했을까요?',
			low: '갓난아이가 할만한 평범한 말부터',
			high: '갓난아이가 했다고는 믿을 수 없는 말까지',
			isMoving: false
		},
		{
			id: 20,
			description: '당신은 비밀 조직의 요원이 되었습니다. 어떤 임무를 맡게 되었나요?',
			low: '정보 수집 및 간단한 작전 수행부터',
			high: '세계적인 위기를 해결하기 위한 임무까지',
			isMoving: false
		},
		{
			id: 21,
			description: '친구의 샌드위치를 한 입만 얻어먹기로 했습니다. 얼마만큼 먹을지 표현해 주세요.',
			low: '양심껏 조금 먹는 동작부터',
			high: '눈치 보지 않고 한입에 다 먹어버리는 동작까지',
			isMoving: true
		},
		{
			id: 22,
			description: '유명 연예인인 당신에게 팬이 선물을 보냈습니다. 어떤 선물일까요?',
			low: '전혀 필요 없는 선물부터',
			high: '꼭 가지고 싶은 선물까지',
			isMoving: false
		},
		{
			id: 23,
			description:
				'친구와 배낭여행 중인 당신, 친구가 내 물건 1개를 들어주겠다고 합니다. 가방에서 무엇을 꺼낼 건가요?',
			low: '가장 가벼운 짐부터',
			high: '가장 무거운 짐까지',
			isMoving: false
		},
		{
			id: 24,
			description: '당신은 스케이트를 타고 있습니다. 어떤 모습으로 타는지 보여주세요.',
			low: '엉상한 동작부터',
			high: '멋진 동작까지',
			isMoving: true
		},
		{
			id: 25,
			description: '당신은 가상의 인물을 현실로 데려올 수 있습니다. 누구를 데려올 건가요?',
			low: '현실에 악영향을 끼칠 최악의 인물부터',
			high: '세상을 이롭게 만들 최고의 인물까지',
			isMoving: false
		},
		{
			id: 26,
			description: '누군가가 당신을 위해 문을 열어줬습니다. 감사의 인사를 해 주세요.',
			low: '건성으로 하는 인사부터',
			high: '너무 과하다고 생각되는 인사까지',
			isMoving: true
		},
		{
			id: 27,
			description: '놀이동산에서 바이킹을 타고 있습니다. 당신의 반응은?',
			low: '전혀 안 무서워하는 모습부터',
			high: '엄청나게 무서워하는 모습까지',
			isMoving: true
		},
		{
			id: 28,
			description: '사랑하는 사람에게 프로포즈를 하려고 합니다. 프로포즈 하는 모습을 보여 주세요.',
			low: '최악의 프로포즈부터',
			high: '최고로 로맨틱한 프로포즈까지',
			isMoving: true
		},
		{
			id: 29,
			description: '당신은 헬스장 최고의 트레이너입니다. 당신이 새롭게 개발한 운동을 보여주세요.',
			low: '가벼운 동작의 운동부터',
			high: '땀이 날 정도로 격렬한 운동까지',
			isMoving: true
		},
		{
			id: 30,
			description:
				'운동을 하고 난 후 목이 너무 마른 당신, 눈앞에 있는 음료를 마신 후의 모습을 표현해 주세요.',
			low: '갈증이 해소되지 않는 동작부터',
			high: '완전히 갈증이 해소된 동작까지',
			isMoving: true
		},
		{
			id: 31,
			description: '버스를 기다리며 서 있는 당신, 저 멀리 오는 버스에 승차 신호를 보내 주세요.',
			low: '버스 기사가 눈치채지 못할 동작부터',
			high: '도저히 못 보고 지나치지 못할 동작까지',
			isMoving: true
		},
		{
			id: 32,
			description: '올림픽에서 그메달을 딴 당신, 시상대에 올라가 메달을 받는 모습을 연기해 주세요.',
			low: '아주 겸손한 모습부터',
			high: '아주 거만한 모습까지',
			isMoving: true
		},
		{
			id: 33,
			description: '당신은 복숭아를 먹으려고 합니다. 먹는 모습을 보여주세요.',
			low: '아주 물렁물렁한 복숭아를 먹는 모습부터',
			high: '아주 딱딱한 복숭아를 먹는 모습까지',
			isMoving: true
		},
		{
			id: 34,
			description:
				'아이스크림 사장님이 된 당신, 2가지 맛 아이스크림을 섞어 새로운 맛을 만들려고 합니다. 어떤 맛을 만들까요?',
			low: '최고의 조합일 것 같은 맛부터',
			high: '전혀 안 어울릴 것 같은 맛까지',
			isMoving: false
		},
		{
			id: 35,
			description: '가족 모임에서 중대 발표를 하려는 당신, 무슨 내용의 발표일까요?',
			low: '별로 놀랍지 않은 발표부터',
			high: '깜짝 놀랄만 한 발표까지',
			isMoving: false
		},
		{
			id: 36,
			description: '당신의 반려견을 산책시키는 모습을 보여주세요.',
			low: '작고 귀여운 반려견부터',
			high: '크고 사나운 반려견까지',
			isMoving: true
		},
		{
			id: 37,
			description: '당신은 짝사랑하던 사람에게 말을 걸어 보기로 결심했습니다. 어떤 말을 할 건가요?',
			low: '너무나도 진부한 멘트부터',
			high: '아주 참신한 멘트까지',
			isMoving: false
		},
		{
			id: 38,
			description: '수업 시간에 잠이 쏟아집니다. 어떻게 잠을 쫓을 건가요?',
			low: '절대 잠이 깨지 않을 것 같은 동작부터',
			high: '한 방에 잠이 달아날 것 같은 동작까지',
			isMoving: true
		},
		{
			id: 39,
			description: '인기 스타인 당신, 팬미팅장에서 팬들에게 인사를 합니다. 어떻게 인사하고 있나요?',
			low: '거만한 인사부터',
			high: '겸손하고 깍듯한 인사까지',
			isMoving: true
		},
		{
			id: 40,
			description: '빨래가 끝난 세탁기 안에서 어떤 물건을 발견했습니다. 무엇이 들어있을까요?',
			low: '별로 당황스럽지 않을 만한 것부터',
			high: '발견하자마자 경악할 만한 것까지',
			isMoving: false
		}
	];
	data.forEach((item) => {
		console.log('>>>> title : ' + item.id);
	});
	const loadData = JSON.parse(JSON.stringify(data));
	return {
		database: loadData
	};
};
