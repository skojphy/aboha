<script>
	import { onMount } from 'svelte';
	import { getRandomNumber } from '$utils';

	const STORAGE_KEY = 'fortuneData';

	export let data;
	let randomFortuneData;
	let loading = true;

	onMount(async () => {
		// 브라우저 로컬 스토리지에서 이전에 저장한 데이터 확인
		const storedData = localStorage.getItem(STORAGE_KEY);

		if (storedData) {
			// 저장된 데이터가 있으면 이를 사용
			randomFortuneData = storedData;
		} else {
			// 저장된 데이터가 없으면 새로운 데이터를 생성
			const { database } = data;
			const dataCount = database.length;
			randomFortuneData = database[getRandomNumber(0, dataCount)];

			// 새로운 데이터를 로컬 스토리지에 저장
			localStorage.setItem(STORAGE_KEY, randomFortuneData);
		}

		loading = false;
	});
</script>

<header>
	<h1>아 운세 보고 싶다</h1>
	<span>for A.B.H</span>
</header>

<div class="container">
	{#if loading}
		<span class="loading-spinner">Loading...</span>
	{:else if randomFortuneData}
		<div class="luck-text">{randomFortuneData}</div>
	{/if}
</div>

<style>
	header {
		text-align: center;
	}
	span {
		font-size: 1.3rem;
	}
	.container {
		display: flex;
	}
	.loading-spinner {
		font-size: 10px;
		width: 1em;
		height: 1em;
		border-radius: 50%;
		position: relative;
		text-indent: -9999em;
		animation: mulShdSpin 1.1s infinite ease;
		transform: translateZ(0);
	}
	.luck-text {
		font-size: 2rem;
		font-weight: 100;
		margin: 20px auto;
		padding: 10px;
		background-color: blanchedalmond;
	}
</style>
