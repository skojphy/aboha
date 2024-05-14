<script>
	import { onMount } from 'svelte';
	import { getRandomNumber } from '$utils';

	export let data;

	let randomBoardgameData;
	let loading = true;

	const LOADING_DELAY = 800;

	const generateNewData = () => {
		const { database } = data;
		const dataCount = database.length;
		randomBoardgameData = database[getRandomNumber(0, dataCount)];
	};

	onMount(async () => {
		generateNewData();

		setTimeout(() => {
			loading = false;
		}, LOADING_DELAY);
	});
</script>

<header>
	<h1>아 보드게임 하고 싶다</h1>
</header>

<div class="container">
	<span class="sub-title">랜덤 냥냥보</span>
	{#if loading}
		<div class="spinner">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 100 100"
				preserveAspectRatio="xMidYMid"
				width="256"
				height="256"
				style="shape-rendering: auto; display: block; background: rgb(0, 0, 0, 0);"
				class="s-IfjlXBuVZRt-"
				><g data-idx="1" class="s-IfjlXBuVZRt-"
					><g
						data-idx="2"
						transform="matrix(-0.8109657885293009,-0.5850935735718256,0.5850935735718256,-0.8109657885293009,61.29361074787377,119.80296810505632)"
						class="s-IfjlXBuVZRt-"
						><circle
							stroke-dasharray="21.0414px, 300px"
							fill="none"
							stroke-width="14.4"
							stroke="#b5e3ff"
							r="39.891"
							cy="50"
							cx="50"
							data-idx="4"
							class="s-IfjlXBuVZRt-"
						/><circle
							stroke-dasharray="21.0414px, 300px"
							fill="none"
							stroke-width="7.2"
							stroke="#cacaca"
							r="39.891"
							cy="50"
							cx="50"
							data-idx="6"
							class="s-IfjlXBuVZRt-"
						/><circle
							stroke-dasharray="17.6709px, 300px"
							fill="none"
							stroke-width="1"
							stroke="#9a9a9a"
							r="32.771"
							cy="50"
							cx="50"
							data-idx="8"
							class="s-IfjlXBuVZRt-"
						/><circle
							stroke-dasharray="24.7716px, 300px"
							fill="none"
							stroke-width="1"
							stroke="#9a9a9a"
							r="47.171"
							cy="50"
							cx="50"
							data-idx="10"
							class="s-IfjlXBuVZRt-"
						/></g
					><g
						data-idx="12"
						transform="matrix(-0.4593180168927949,-0.8882718949497784,0.8882718949497784,-0.4593180168927949,28.552306097150822,117.37949559212866)"
						class="s-IfjlXBuVZRt-"
						><path
							d="M97.2,50.1c0,6.1-1.2,12.2-3.5,17.9l-13.3-5.4c1.6-3.9,2.4-8.2,2.4-12.4"
							stroke="#9a9a9a"
							fill="#b5e3ff"
							data-idx="14"
							class="s-IfjlXBuVZRt-"
						/><path
							d="M93.5,49.9c0,1.2,0,2.7-0.1,3.9l-0.4,3.6c-0.4,2-2.3,3.3-4.1,2.8l-0.2-0.1c-1.8-0.5-3.1-2.3-2.7-3.9l0.4-3 c0.1-1,0.1-2.3,0.1-3.3"
							fill="#cacaca"
							data-idx="15"
							class="s-IfjlXBuVZRt-"
						/><path
							d="M85.4,62.7c-0.2,0.7-0.5,1.4-0.8,2.1c-0.3,0.7-0.6,1.4-0.9,2c-0.6,1.1-2,1.4-3.2,0.8c-1.1-0.7-1.7-2-1.2-2.9 c0.3-0.6,0.5-1.2,0.8-1.8c0.2-0.6,0.6-1.2,0.7-1.8"
							stroke="#9a9a9a"
							fill="#b5e3ff"
							data-idx="16"
							class="s-IfjlXBuVZRt-"
						/><path
							d="M94.5,65.8c-0.3,0.9-0.7,1.7-1,2.6c-0.4,0.9-0.7,1.7-1.1,2.5c-0.7,1.4-2.3,1.9-3.4,1.3h0 c-1.1-0.7-1.5-2.2-0.9-3.4c0.4-0.8,0.7-1.5,1-2.3c0.3-0.8,0.7-1.5,0.9-2.3"
							stroke="#9a9a9a"
							fill="#b5e3ff"
							data-idx="17"
							class="s-IfjlXBuVZRt-"
						/></g
					><g
						data-idx="18"
						transform="matrix(-0.8109657885293009,-0.5850935735718256,0.5850935735718256,-0.8109657885293009,61.29361074787377,119.80296810505632)"
						class="s-IfjlXBuVZRt-"
						><path
							d="M86.9,35.3l-6,2.4c-0.4-1.2-1.1-2.4-1.7-3.5c-0.2-0.5,0.3-1.1,0.9-1C82.3,33.8,84.8,34.4,86.9,35.3z"
							stroke="#9a9a9a"
							fill="#cacaca"
							data-idx="20"
							class="s-IfjlXBuVZRt-"
						/><path
							d="M87.1,35.3l6-2.4c-0.6-1.7-1.5-3.3-2.3-4.9c-0.3-0.7-1.2-0.6-1.4,0.1C88.8,30.6,88.2,33,87.1,35.3z"
							stroke="#9a9a9a"
							fill="#cacaca"
							data-idx="21"
							class="s-IfjlXBuVZRt-"
						/><path
							d="M82.8,50.1c0-3.4-0.5-6.8-1.6-10c-0.2-0.8-0.4-1.5-0.3-2.3c0.1-0.8,0.4-1.6,0.7-2.4c0.7-1.5,1.9-3.1,3.7-4l0,0 c1.8-0.9,3.7-1.1,5.6-0.3c0.9,0.4,1.7,1,2.4,1.8c0.7,0.8,1.3,1.7,1.7,2.8c1.5,4.6,2.2,9.5,2.3,14.4"
							stroke="#9a9a9a"
							fill="#b5e3ff"
							data-idx="22"
							class="s-IfjlXBuVZRt-"
						/><path
							d="M86.3,50.2l0-0.9l-0.1-0.9l-0.1-1.9c0-0.9,0.2-1.7,0.7-2.3c0.5-0.7,1.3-1.2,2.3-1.4l0.3,0 c0.9-0.2,1.9,0,2.6,0.6c0.7,0.5,1.3,1.4,1.4,2.4l0.2,2.2l0.1,1.1l0,1.1"
							fill="#cacaca"
							data-idx="23"
							class="s-IfjlXBuVZRt-"
						/><path
							d="M93.2,34.6c0.1,0.4-0.3,0.8-0.9,1c-0.6,0.2-1.2,0.1-1.4-0.2c-0.1-0.3,0.3-0.8,0.9-1 C92.4,34.2,93,34.3,93.2,34.6z"
							fill="#fca5a5"
							data-idx="24"
							class="s-IfjlXBuVZRt-"
						/><path
							d="M81.9,38.7c0.1,0.3,0.7,0.3,1.3,0.1c0.6-0.2,1-0.6,0.9-0.9c-0.1-0.3-0.7-0.3-1.3-0.1 C82.2,38,81.8,38.4,81.9,38.7z"
							fill="#fca5a5"
							data-idx="25"
							class="s-IfjlXBuVZRt-"
						/><path
							d="M88.5,36.8c0.1,0.3-0.2,0.7-0.6,0.8c-0.5,0.2-0.9,0-1.1-0.3c-0.1-0.3,0.2-0.7,0.6-0.8C87.9,36.3,88.4,36.4,88.5,36.8z"
							fill="#9a9a9a"
							data-idx="26"
							class="s-IfjlXBuVZRt-"
						/><path
							d="M85.9,38.9c0.2,0.6,0.8,0.9,1.4,0.7c0.6-0.2,0.9-0.9,0.6-2.1c0.3,1.2,1,1.7,1.6,1.5c0.6-0.2,0.9-0.8,0.8-1.4"
							stroke="#9a9a9a"
							data-idx="27"
							class="s-IfjlXBuVZRt-"
						/><path
							d="M86.8,42.3l0.4,2.2c0.1,0.4,0.1,0.7,0.2,1.1l0.1,1.1c0.1,1.2-0.9,2.3-2.2,2.3c-1.3,0-2.5-0.8-2.5-1.9l-0.1-1 c0-0.3-0.1-0.6-0.2-1l-0.3-1.9"
							stroke="#9a9a9a"
							fill="#b5e3ff"
							data-idx="28"
							class="s-IfjlXBuVZRt-"
						/><path
							d="M96.2,40.3l0.5,2.7c0.1,0.5,0.2,0.9,0.2,1.4l0.1,1.4c0.1,1.5-0.9,2.8-2.2,2.9h0c-1.3,0-2.5-1.1-2.6-2.4 L92.1,45c0-0.4-0.1-0.8-0.2-1.2l-0.4-2.5"
							stroke="#9a9a9a"
							fill="#b5e3ff"
							data-idx="29"
							class="s-IfjlXBuVZRt-"
						/><path
							d="M91.1,34.1c0.3,0.7,0,1.4-0.7,1.6c-0.6,0.2-1.3-0.1-1.6-0.7c-0.2-0.6,0-1.4,0.7-1.6C90.1,33.1,90.8,33.5,91.1,34.1z"
							fill="#9a9a9a"
							data-idx="30"
							class="s-IfjlXBuVZRt-"
						/><path
							d="M85.5,36.3c0.2,0.6-0.1,1.2-0.7,1.5c-0.6,0.2-1.3,0-1.5-0.6C83,36.7,83.4,36,84,35.8C84.6,35.5,85.3,35.7,85.5,36.3z"
							fill="#9a9a9a"
							data-idx="31"
							class="s-IfjlXBuVZRt-"
						/></g
					><g data-idx="32" class="s-IfjlXBuVZRt-" /></g
				></svg
			>
		</div>
	{:else if randomBoardgameData}
		<div class="boardgame">{randomBoardgameData}</div>
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
	.sub-title {
		font-size: 1.3rem;
		font-weight: 100;
		margin: auto;
		margin-top: 20px;
		margin-bottom: 20px;
	}
	.boardgame {
		font-size: 2rem;
		font-weight: 100;
		margin: 20px auto;
		padding: 10px;
		background-color: #b5e3ff;
		max-width: 80vw;
	}
	.spinner {
		animation: spin 1.2s infinite linear;
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
			transform: rotate(-360deg);
		}
	}
</style>
