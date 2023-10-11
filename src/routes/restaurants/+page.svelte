<script>
	export let data;
	const { database } = data;
</script>

<h1>아보하 맛집 리스트</h1>

{#each database as { restaurant, location, writer, created }}
	<div class="card">
		<span class="restaurant">{restaurant}</span>
		<span class="location">{location}</span>
		<div class="created-info">
			<span class="created">{created}</span>
			<span class="writer">{writer}</span>
		</div>
	</div>
{/each}

<style>
	.card {
		background-color: lightsalmon;
		border-radius: 10px;
		padding: 15px;
		width: 260px;
		margin: 20px;
	}
	.restaurant {
		display: block;
		font-size: 20px;
		margin-bottom: 5px;
	}
	.location {
		display: block;
		font-size: 15px;
	}
	.created-info {
		font-size: 13px;
		text-align: right;
	}
</style>
