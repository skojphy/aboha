<script>
	export let data;
	const { database } = data;
</script>

<header>
	<h1>참석자 명단</h1>
</header>
<main class="container">
	<section class="attendee-container">
		{#each database as { nickname, bank, account, arrival, leave, boardgame, timeStamp }}
			<div class="attendee">
				<p class="name"><span>이름: </span>{nickname}</p>
				<p class="bank"><span>계좌: </span>{bank} - {account}</p>
				<p class="time"><span>참석 시간: </span>{arrival} - {leave}</p>
				<p class="boardgame"><span>보겜 가져옴? </span>{boardgame}</p>
				<p class="timestamp"><span>제출 시각: </span>{timeStamp}</p>
			</div>
		{/each}
	</section>
</main>

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
		width: 100vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: 'Cafe24Oneprettynight', Calibri, 'Trebuchet MS', sans-serif;
	}

	section {
		width: 100vw;
		padding: 10px;
		margin: 0;
	}

	.attendee-container {
		background-color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.attendee {
		background-color: rgb(102, 114, 92, 0.2);
		margin: 10px;
		padding: 15px;
		border-radius: 10px;
		font-size: 0.9em;
		min-width: 85%;
		max-width: 85%;
		box-sizing: border-box;
	}

	.attendee p {
		margin: 0;
	}

	.attendee span {
		font-weight: bold;
		color: black;
	}
</style>
