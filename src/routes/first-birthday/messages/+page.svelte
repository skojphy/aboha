<script>
	export let data;
	const { database } = data;
</script>

<header>
	<h1 class="visually-hidden">방명록</h1>
</header>
<main class="container">
	<section class="guest-book">
		<h2>To. 아보하</h2>

		{#each database as { name, message }}
			<div class="message">{message} - {name}</div>
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

	h2 {
		text-align: center;
		display: block;
	}

	section {
		width: 100vw;
		padding: 10px;
		margin: 0;
	}

	.guest-book h2 {
		font-family: Cafe24Shiningstar;
		font-size: 1.5em;
		color: #66725d;
	}

	.guest-book {
		background-color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.message {
		background-color: rgb(102, 114, 92, 0.2);
		margin: 10px;
		padding: 15px;
		border-radius: 10px;
		font-size: 0.9em;
		min-width: 85%;
		max-width: 85%;
		box-sizing: border-box;
	}
</style>
