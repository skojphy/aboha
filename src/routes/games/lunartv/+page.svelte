<script>
	export let data;
	let { database } = data;

	const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

	let selectedNumber = 0;
	$: currentData = database[selectedNumber];

	const changeCard = () => {
		selectedNumber = getRandomNumber(0, 31);
	};
</script>

<main>
	<div class="container">
		<h1>루나티비</h1>
		{#if currentData.isMoving}
			<div class="active">동작!</div>
		{/if}
		<p class="card">{currentData.description}</p>
		<p class="low">1: {currentData.low}</p>
		<p class="high">10: {currentData.high}</p>
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

	.active {
		background-color: orange;
		color: white;
		padding: 10px;
		border-radius: 10px;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.card {
		background-color: lightskyblue;
		margin: 20px;
		border-radius: 10px;
		padding: 10px;
		width: 50%;
	}
	button {
		width: 30%;
		padding: 10px;
	}
</style>
