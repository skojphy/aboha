<script>
	export let data;
	const { database } = data;
</script>

<h1>아보하 맛집 리스트</h1>

{#each database as d}
	<div class="card">
		<p>작성자: {d.writer}</p>
		<p>작성일: {d.created}</p>
		<p>식당: {d.restaurant}</p>
		<p>위치: {d.location}</p>
	</div>
{/each}

<style>
	.card {
		background-color: lightsalmon;
		border-radius: 20px;
		padding: 15px;
	}
</style>
