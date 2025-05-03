<script>
	import { onMount } from 'svelte';
	import { getRandomNumber, isSameDate } from '$utils';
	import cookie from '$lib/images/cookie1.png';
	import crackedCookie from '$lib/images/cookie2.png';
	import Background from './Background.svelte';

	export let data;

	let randomFortuneData;
	let cracked = false;

	const STORAGE_KEY = 'fortuneData';

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
	});

	const crackCookie = () => {
		cracked = true;
	};
</script>

<Background />

<header>
	<h1>아 운세 보고 싶다</h1>
	<span class="date"
		>{new Date().getFullYear()}년 {new Date().getMonth() + 1}월 {new Date().getDate()}일</span
	>
</header>

<div class="container">
	<div
		class="cookie-container"
		role="button"
		aria-pressed={cracked}
		on:click={crackCookie}
		on:keydown={(e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				crackCookie();
			}
		}}
		tabindex="0"
	>
		<img src={cracked ? crackedCookie : cookie} alt="fortune cookie" class:cracked />
		{#if cracked}
			<div class="luck-text">{randomFortuneData}</div>
		{/if}
	</div>
</div>

<style>
	header {
		text-align: center;
		color: white;
	}
	h1 {
		font-size: 1.2rem;
		margin: 2rem 0 1rem 0;
	}
	.date {
		color: #eeeeee;
		font-size: 0.8rem;
	}
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 20px;
		position: relative;
		z-index: 0;
	}
	.cookie-container {
		cursor: pointer;
		width: 80%;
		max-width: 400px;
		position: relative;
	}
	.cookie-container img {
		width: 100%;
		height: auto;
		object-fit: contain;
		transition: transform 0.5s ease, opacity 0.5s ease;
	}
	.cookie-container img.cracked {
		transform: scale(1.1);
		opacity: 0.8;
	}
	.luck-text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		min-width: 30vw;
		max-width: 70vw;
		font-size: 1.5rem;
		font-weight: bold;
		color: #4a4a4a;
		background-color: rgba(255, 255, 255, 0.9);
		padding: 10px;
		text-align: left;
		white-space: pre-wrap;
		word-wrap: break-word;
		animation: fadeIn 0.5s ease;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	@media (max-width: 768px) {
		.luck-text {
			font-size: 0.8rem;
			width: auto;
			min-width: 50vw;
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
