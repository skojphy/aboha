<script>
	export let data;
	const { database } = data;
	import { enhance } from '$app/forms';
	import mainImage from '$lib/dol/images/invitation1.png';
	import { onMount } from 'svelte';
	import Gallery from './Gallery.svelte';
	import images from './images';
	let dialog;

	onMount(() => {
		const [lat, lng] = [37.5184067, 126.9094536];
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
			'<div class ="label" style="transform: translateY(-57px); background-color: rgba(102, 115, 92, 0.93); padding: 4px 8px; border-radius: 8px; font-size: 0.8em;"><span class="left"></span><span class="center" style="color: white"><a style="color:white" href="https://map.kakao.com/link/to/D2%ED%8C%8C%ED%8B%B0%EB%A3%B8,37.504547,126.897091">4층 자갈자갈 바베큐!</a></span><span class="right"></span></div>';

		const customOverlay = new kakao.maps.CustomOverlay({
			position: markerPosition,
			content: content
		});

		marker.setMap(map);
		customOverlay.setMap(map);
	});

	const now = new Date();
	const eventDay = new Date('2024-04-20');
	let diffDay = eventDay - now;
	const days = Math.floor(diffDay / (1000 * 60 * 60 * 24));

	// let isModalOpen = false;
	// const openModal = () => {
	// 	isModalOpen = true;
	// };
	// const closeModal = () => {
	// 	isModalOpen = false;
	// };
	const onClose = () => {
		dialog.close();
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
			서울특별시 영등포구 영등포동3가 13<br />
			<a href="https://map.kakao.com/link/to/D2%ED%8C%8C%ED%8B%B0%EB%A3%B8,37.504547,126.897091"
				>자갈자갈 바베큐</a
			>
		</p>

		<p class="dday">🌸 아보하 돌까지 D-{days} 🌸</p>
	</section>

	<div id="map" />

	<div class="line" />

	<section class="photos">
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
		<a href="https://open.kakao.com/me/Ssamzzang" class="link">연락하기</a>
	</section>

	<section class="money">
		<h2>회비 전하실 곳</h2>
		<p>
			축하의 마음을 담아 5만 원을 전달해 주세요.
			<br />
			일부 금액은 환급 예정입니다. <br />
			4월 13일까지 입금 가능합니다.
		</p>
		<a href="https://qr.kakaopay.com/FdzAxOci761a808252" class="link">입금하기</a>
	</section>

	<section class="guest-book">
		<h2>축하 메시지 전하기</h2>

		{#each database as { name, message }}
			<div class="message">{message} - {name}</div>
		{/each}
		<div class="buttons">
			<a class="link" href="./first-birthday/messages">전체보기</a>
			<!-- <button on:click={openModal}>작성하기</button> -->
			<button on:click={() => dialog.showModal()}>작성하기</button>
		</div>
	</section>

	<dialog bind:this={dialog} on:close={() => console.log('메시지 작성 취소')}>
		<button class="close-button" on:click={onClose}> × </button>
		<h2>축하 메시지 작성하기</h2>
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
			on:submit={() => {
				console.log('메시지 전송');
			}}
		>
			<div class="input-container">
				<textarea
					class="message-dialog"
					id="message"
					name="message"
					rows="4"
					cols="50"
					required
					placeholder="메시지를 입력해 주세요."
				/>

				<div class="name-container">
					<span>From</span>
					<input
						class="message-dialog"
						type="text"
						name="name"
						placeholder="이름을 입력해 주세요."
						required
					/>
				</div>
			</div>

			<div class="buttons">
				<button type="submit">전송하기</button>
				<button type="button" on:click={onClose}>취소하기</button>
			</div>
		</form>
	</dialog>

	<section class="notice">
		<h2>안내 사항</h2>
		<ul>
			<li>여러분의 소중한 개인 정보는 정모 이후 파기 예정이에요.</li>
			<li>
				파티룸 자체의 주차장이 없어요. 주차가 필요하시면 검색하시거나, 쌈장에게 연락해 주세요.
			</li>
			<li>늦참, 조기 퇴근 모두 가능하지만 회비 차이는 없습니다.</li>
			<li>추후 준비물 안내를 드릴 예정이에요. 잊지 말고 준비해 주세요!</li>
			<li>파티룸에 보드게임이 없어요. 재미있는 게임 가져와 주세요!</li>
		</ul>
	</section>

	<section class="attendance">
		<h2>
			<a href="./first-birthday/attendance">🌸 참석 의사 전달하기 🌸</a>
		</h2>
	</section>
</main>

<style>
	/* 아이폰 버튼 스타일 초기화 */
	input:not([type='color']),
	button,
	textarea,
	button {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
	}
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
		margin: 10px 0;
	}

	p {
		margin: 10px 0;
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
		padding: 5px 10px;
		font-size: 0.85em;
	}

	.dday {
		height: 1.3rem;
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
		margin: 25px 0 -5px 0;
	}

	.call {
		text-align: center;
	}

	.call h2,
	.money h2,
	.guest-book h2,
	.notice h2,
	.photos h2,
	dialog h2 {
		font-family: Cafe24Shiningstar;
		font-size: 1.5em;
		color: #66725d;
		margin: 5px;
	}

	.money {
		text-align: center;
	}

	.guest-book {
		background-color: #e0e3de;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100vw;
		padding: 15px 0;
		margin-top: 20px;
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
		background-color: white;
		min-width: 85%;
		max-width: 85%;
		margin: 10px;
		padding: 10px;
		border-radius: 10px;
		font-size: 0.9em;
	}

	.message-dialog {
		background-color: rgb(102, 114, 93, 0.2);
		border: none;
		border-radius: 8px;
		box-sizing: border-box;
		margin: 10px 0;
		padding: 10px;
	}

	textarea {
		width: 100%;
		height: 10em;
		font-family: 'Cafe24Oneprettynight';
		font-size: 1rem;
	}

	dialog {
		padding: 20px;
		border: none;
		border-radius: 10px;
		width: 85%;
		max-width: 450px;
	}

	dialog::backdrop {
		background: rgba(0, 0, 0, 0.4);
	}

	dialog h2 {
		margin: 0;
	}

	.close-button {
		font-family: sans-serif;
		position: absolute;
		top: 22px;
		right: 22px;
		border: none;
		color: #66725d;
		background-color: white;
		font-size: 1.7rem;
		line-height: 1rem;
		padding: 0;
		border: none;
	}

	dialog .input-container {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}

	.name-container {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}

	.name-container input {
		margin-left: 10px;
	}

	dialog input {
		width: 70%;
		max-width: 150px;
	}

	.message-dialog::placeholder {
		font-size: 13px;
		font-family: 'Cafe24Oneprettynight';
		color: #66725d;
	}

	dialog .buttons button {
		border: none;
		border-radius: 10px;
	}

	.buttons {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		margin: 5px 0;
	}

	.buttons button,
	.buttons a {
		color: #66725e;
		padding: 5px 10px;
		font-size: 0.9em;
		height: 1.5rem;
		box-sizing: border-box;
		margin: 5px 20px;
	}

	ul {
		padding: 0 10px 10px 30px;
		margin: 0;
	}

	li {
		padding: 7px;
		font-size: 0.9em;
	}

	li::marker {
		content: '❥';
	}

	.attendance {
		background-color: #e0e3de;
		width: 100%;
		margin-bottom: 0;
		padding: 0;
		height: 3.5rem;
	}

	.attendance h2 {
		margin: 0;
	}

	.attendance a {
		color: black;
		display: block;
		line-height: 3.5rem;
	}

	.message a {
		background-color: rgb(102, 114, 94, 0.2);
	}
</style>
