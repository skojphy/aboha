<script>
	export let data;
	import lunarProfile from '$lib/images/lunarProfile.jpeg';

	let { database } = data;

	const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

	let selectedNumber = getRandomNumber(0, database.length - 1);
	$: currentData = database[selectedNumber];

	const changeCard = () => {
		selectedNumber = getRandomNumber(0, database.length - 1);
	};
</script>

<main>
	<div class="container">
		<h1>루나티비</h1>
		<img class="profile" src={lunarProfile} alt="루나" />

		{#if currentData.isMoving}
			<div class="active">동작!</div>
		{/if}
		<p class="card">{currentData.description}</p>
		<p class="instruction low"><span class="one">1</span> {currentData.low}</p>
		<p class="instruction high"><span class="ten">10</span> {currentData.high}</p>
		<button on:click={changeCard}>다시 뽑기</button>
	</div>
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
		background-color: white;
		color: black;
	}

	.profile {
		width: 30%;
		border-radius: 50%;
	}

	.active {
		background-color: orange;
		color: white;
		padding: 10px;
		border-radius: 10px;
		margin-top: 20px;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.card {
		background-color: #0766ad;
		margin: 20px;
		border-radius: 10px 0 10px 0;
		padding: 20px;
		width: 50%;
		min-width: 20rem;
		font-size: 1.2rem;
		color: white;
	}

	.instruction {
		font-size: 1.2rem;
	}

	.one,
	.ten {
		display: inline-block;
		width: 2rem;
		height: 2rem;
		color: white;
		border-radius: 50%;
		line-height: 2rem;
		text-align: center;
	}

	.one {
		background-color: rgb(89, 178, 89);
	}

	.ten {
		background-color: rgb(255, 99, 99);
	}

	button {
		width: 50%;
		min-width: 10rem;
		padding: 10px;
		font-size: 1.3rem;
		border-radius: 10px;
		background-color: #0766ad;
		color: white;
		border: none;
		margin: 20px;
	}
</style>
