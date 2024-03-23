<script>
	// export let data;
	import mainImage from '$lib/dol/images/invitation1.png';
	import sampleImage from '$lib/dol/images/sample-image.jpeg';
	import sampleThumb from '$lib/dol/images/sample-thumb.png';
	import { onMount } from 'svelte';
	import Gallery from './Gallery.svelte';
	onMount(() => {
		const [lat, lng] = [37.504547, 126.897091];
		const markerPosition = new kakao.maps.LatLng(lat, lng);
		const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
		const options = {
			center: markerPosition,
			level: 3
		};

		const map = new kakao.maps.Map(container, options);

		const zoomControl = new kakao.maps.ZoomControl();

		const marker = new kakao.maps.Marker({
			position: markerPosition
		});
		const content =
			'<div class ="label" style="transform: translateY(-57px); background-color: black; padding: 4px 8px; border-radius: 8px;"><span class="left"></span><span class="center" style="color: white"><a style="color:white" href="https://map.kakao.com/link/to/D2%ED%8C%8C%ED%8B%B0%EB%A3%B8,37.504547,126.897091">어쩌구 저쩌구!</a></span><span class="right"></span></div>';

		const customOverlay = new kakao.maps.CustomOverlay({
			position: markerPosition,
			content: content
		});

		map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
		marker.setMap(map);
		customOverlay.setMap(map);
	});

	const images = [
		{
			largeURL: sampleImage,
			thumbnailURL: sampleThumb,
			width: 500,
			height: 500,
			alt: '333'
		},
		{
			largeURL: sampleImage,
			thumbnailURL: sampleThumb,
			width: 500,
			height: 500,
			alt: '333'
		},
		{
			largeURL: sampleImage,
			thumbnailURL: sampleThumb,
			width: 500,
			height: 500,
			alt: '333'
		},
		{
			largeURL: sampleImage,
			thumbnailURL: sampleThumb,
			width: 500,
			height: 500,
			alt: '333'
		},
		{
			largeURL: sampleImage,
			thumbnailURL: sampleThumb,
			width: 500,
			height: 500,
			alt: '333'
		},
		{
			largeURL: sampleImage,
			thumbnailURL: sampleThumb,
			width: 500,
			height: 500,
			alt: '333'
		},
		{
			largeURL: sampleImage,
			thumbnailURL: sampleThumb,
			width: 500,
			height: 500,
			alt: '333'
		},
		{
			largeURL: sampleImage,
			thumbnailURL: sampleThumb,
			width: 500,
			height: 500,
			alt: '333'
		},
		{
			largeURL: sampleImage,
			thumbnailURL: sampleThumb,
			width: 500,
			height: 500,
			alt: '333'
		}
	];
</script>

<header>
	<h1 class="visually-hidden">아보하 돌</h1>
</header>
<main class="container">
	<img
		src={mainImage}
		alt="아보하, 첫 돌. 소중한 아기의 첫 번째 생일을 축하해 주세요."
		class="main-image"
	/>

	<section class="info">
		<p>
			2024-4-20<br />
			서울특별시 무슨구 무슨무슨동<br />
			<a href="https://map.kakao.com/link/to/D2%ED%8C%8C%ED%8B%B0%EB%A3%B8,37.504547,126.897091"
				>어디어디 파티룸</a
			>
		</p>

		<p class="dday">🌸 아보하 돌까지 D-00 🌸</p>
	</section>

	<div id="map" />

	<div class="line" />

	<section>
		<h2>
			<p>
				아보하와의<br />
				행복했던 시간들
			</p>
		</h2>

		<Gallery galleryID="aboha-gallery" {images} />
	</section>

	<section class="call">
		<h2>엄마에게 연락하기</h2>
		<p>
			방문 전 궁금하신 점이 있다면
			<br />
			언제든 연락하셔서 질문해 주세요.
		</p>
		<a href="./" class="link">연락하기</a>
	</section>

	<section class="money">
		<h2>회비 전하실 곳</h2>
		<p>
			축하의 마음을 담아 5만 원을 전달해 주세요.
			<br />
			일부 금액은 환급 예정입니다. <br />
			4월 13일까지 입금 가능합니다.
		</p>
		<a href="./" class="link">입금하기</a>
	</section>

	<section class="guest-book">
		<h2>축하 메시지 전하기</h2>
		<div class="message">아보하야 생일 축하해~. 너의 돌잔치가 대단히 기대되는구나!</div>
		<div class="message">아보하야 생일 축하해~. 너의 돌잔치가 대단히 기대되는구나!</div>
		<div class="message">아보하야 생일 축하해~. 너의 돌잔치가 대단히 기대되는구나!</div>
		<div class="buttons">
			<button>전체보기</button>
			<button>작성하기</button>
		</div>
	</section>

	<section>
		<p>
			주의사항
			<br />
			주의하상
			<br />
			어쩌구저꺼구
		</p>
	</section>
</main>

<footer>footer</footer>

<style>
	@font-face {
		font-family: 'Cafe24Oneprettynight';
		font-weight: normal;
		font-style: normal;
		src: url('https://cdn.jsdelivr.net/gh/webfontworld/Cafe24Oneprettynight/Cafe24Oneprettynight.eot');
		src: url('https://cdn.jsdelivr.net/gh/webfontworld/Cafe24Oneprettynight/Cafe24Oneprettynight.eot?#iefix')
				format('embedded-opentype'),
			url('https://cdn.jsdelivr.net/gh/webfontworld/Cafe24Oneprettynight/Cafe24Oneprettynight.woff2')
				format('woff2'),
			url('https://cdn.jsdelivr.net/gh/webfontworld/Cafe24Oneprettynight/Cafe24Oneprettynight.woff')
				format('woff'),
			url('https://cdn.jsdelivr.net/gh/webfontworld/Cafe24Oneprettynight/Cafe24Oneprettynight.ttf')
				format('truetype');
		font-display: swap;
	}

	main {
		padding: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: 'Cafe24Oneprettynight', Calibri, 'Trebuchet MS', sans-serif;
	}

	h2 {
		text-align: center;
	}

	.main-image {
		width: 100vw;
		max-width: 480px;
	}

	.info {
		text-align: center;
	}

	.dday,
	.link {
		background-color: lightgrey;
		border-radius: 30px;
		color: black;
		padding: 2px 10px;
		font-size: 0.8em;
	}

	#map {
		/* overflow: auto; */
		width: 80vw;
		height: 50vw;
	}

	.line {
		width: 1px;
		height: 130px;
		background-color: lightgrey;
		margin: 30px;
	}

	.gallery {
		display: flex;
		max-width: 90vw;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.gallery-images {
		width: 30%;
	}

	.call {
		text-align: center;
	}

	.money {
		text-align: center;
	}

	.guest-book {
		background-color: rgb(235, 244, 231);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.message {
		background-color: rgb(250, 254, 249);
		margin: 10px;
		padding: 10px;
		border-radius: 10px;
		font-size: 0.9em;
	}

	.buttons {
		display: flex;
	}
</style>
