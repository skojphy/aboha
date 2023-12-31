<script>
	import { onMount } from 'svelte';
	import { getRandomNumber, isSameDate } from '$utils';

	export let data;

	let randomFortuneData;
	let loading = true;

	const STORAGE_KEY = 'fortuneData';
	const LOADING_DELAY = 700;

	const currentDate = new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' });

	const generateNewData = () => {
		const { database } = data;
		const dataCount = database.length;
		randomFortuneData = database[getRandomNumber(0, dataCount)];

		const newData = { data: randomFortuneData, date: currentDate };
		localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
	};

	onMount(async () => {
		const storedData = localStorage.getItem(STORAGE_KEY);

		if (storedData) {
			const { data: savedData, date: savedDate } = JSON.parse(storedData);
			if (isSameDate(new Date(savedDate), new Date())) {
				randomFortuneData = savedData;
			} else {
				generateNewData();
			}
		} else {
			generateNewData();
		}

		setTimeout(() => {
			loading = false;
		}, LOADING_DELAY);
	});
</script>

<header>
	<h1>아 운세 보고 싶다</h1>
	<span>for A.B.H.</span>
</header>

<div class="container">
	{#if !loading}
		<span class="date"
			>{new Date().getFullYear()}년 {new Date().getMonth() + 1}월 {new Date().getDate()}일</span
		>

		<span class="luck-title">오늘의 운세</span>
	{/if}

	{#if loading}
		<span class="loader" />
	{:else if randomFortuneData}
		<div class="luck-text">{randomFortuneData}</div>
	{/if}
</div>

<style>
	header {
		text-align: center;
	}
	span {
		font-size: 1.1rem;
	}
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.date,
	.luck-title {
		font-size: 1.3rem;
		font-weight: 100;
		margin: auto;
	}
	.date {
		margin-top: 20px;
	}
	.luck-text {
		font-size: 2rem;
		font-weight: 100;
		margin: 20px auto;
		padding: 10px;
		background-color: #ddceff;
	}
	.loader {
		width: calc(100px - 14px);
		height: 50px;
		margin: 20px auto;
		position: relative;
		animation: flippx 1s infinite linear;
	}
	.loader:before {
		content: '';
		position: absolute;
		inset: 0;
		margin: auto;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: #ddceff;
		transform-origin: -14px 50%;
		animation: spin 0.5s infinite linear;
	}
	@keyframes flippx {
		0%,
		49% {
			transform: scaleX(1);
		}
		50%,
		100% {
			transform: scaleX(-1);
		}
	}
	@keyframes spin {
		100% {
			transform: rotate(360deg);
		}
	}
</style>
