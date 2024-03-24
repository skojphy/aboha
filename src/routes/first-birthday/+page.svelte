<script>
	export let data;
	const { database } = data;
	import { enhance } from '$app/forms';
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
		const marker = new kakao.maps.Marker({
			position: markerPosition
		});
		const content =
			'<div class ="label" style="transform: translateY(-57px); background-color: rgba(102, 115, 92, 0.9); padding: 4px 8px; border-radius: 8px; font-size: 0.8em;"><span class="left"></span><span class="center" style="color: white"><a style="color:white" href="https://map.kakao.com/link/to/D2%ED%8C%8C%ED%8B%B0%EB%A3%B8,37.504547,126.897091">어쩌구 저쩌구!</a></span><span class="right"></span></div>';

		const customOverlay = new kakao.maps.CustomOverlay({
			position: markerPosition,
			content: content
		});

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

	const now = new Date();
	const eventDay = new Date('2024-04-20');
	let diffDay = eventDay - now;
	const days = Math.floor(diffDay / (1000 * 60 * 60 * 24));

	let isModalOpen = false;
	const openModal = () => {
		isModalOpen = true;
	};
	const closeModal = () => {
		isModalOpen = false;
	};
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
			2024-04-20<br />
			서울특별시 무슨구 무슨무슨동<br />
			<a href="https://map.kakao.com/link/to/D2%ED%8C%8C%ED%8B%B0%EB%A3%B8,37.504547,126.897091"
				>어디어디 파티룸</a
			>
		</p>

		<p class="dday">🌸 아보하 돌까지 D-{days} 🌸</p>
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
		<a href="https://open.kakao.com/o/s5sjNUwf" class="link">연락하기</a>
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

		{#each database.reverse() as { name, message }}
			<div class="message">{message} - {name}</div>
		{/each}
		<div class="buttons">
			<button>전체보기</button>
			<button on:click={openModal}>작성하기</button>
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

{#if isModalOpen}
	<div class="modal" style={isModalOpen ? 'display: flex' : 'display: none'}>
		<div class="modal-content">
			<h2>방명록 작성하기</h2>
			<form
				method="POST"
				action="?/submitForm"
				use:enhance={() => {
					return async ({ result }) => {
						if (result.type === 'error') {
							window.alert('잠시 후 다시 시도해 주세요.');
						}
						window.location.href = './first-birthday';
					};
				}}
				on:submit={true}
			>
				<label for="message"
					>메시지를 작성해 주세요.
					<textarea id="message" name="message" rows="4" cols="50" required />
				</label>

				<label>
					이름을 적어 주세요.
					<input type="text" name="name" placeholder="이름" required />
				</label>

				<div class="buttons">
					<button type="submit">전송</button>
					<button on:click={closeModal}>취소</button>
				</div>
			</form>
		</div>
	</div>
{/if}

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

	@font-face {
		font-family: 'Cafe24Shiningstar';
		src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Shiningstar.woff')
			format('woff');
		font-weight: normal;
		font-style: normal;
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

	section {
		padding: 10px;
		margin: 15px 0;
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
		background-color: rgba(102, 115, 92, 0.2);
		border-radius: 30px;
		color: #66725e;
		padding: 3px 25px;
		font-size: 0.85em;
	}

	#map {
		/* overflow: auto; */
		width: 85vw;
		height: 60vw;
	}

	.line {
		width: 1px;
		height: 130px;
		background-color: #66725e;
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

	.call h2,
	.money h2,
	.guest-book h2 {
		font-family: Cafe24Shiningstar;
		font-size: 1.5em;
		color: #66725d;
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

	.guest-book button {
		background-color: rgba(102, 115, 92, 0.2);
		border-radius: 30px;
		color: black;
		padding: 2px 10px;
		font-size: 0.8em;
		border: none;
		margin: 10px;
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
		justify-content: space-evenly;
	}

	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 999;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal-content {
		background-color: white;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		max-width: 80%;
		max-height: 80%;
		overflow: auto;
	}

	.close-button {
		position: absolute;
		top: 10px;
		right: 10px;
		cursor: pointer;
		font-size: 1.5rem;
	}

	.modal-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: white;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		max-width: 80%;
		max-height: 80%;
		overflow: auto;
	}

	.close-button {
		position: absolute;
		top: 10px;
		right: 10px;
		cursor: pointer;
		font-size: 1.5rem;
	}
</style>
