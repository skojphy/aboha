<script>
	export let data;
	const { database } = data;
</script>

<header>
	<h1>아보하 맛집 리스트</h1>
</header>

<div class="container">
	{#each database as { restaurant, location, writer, created, type, menu }}
		<div class="card">
			<span class="restaurant">{restaurant}</span>
			<span class="location">{location}</span>
			<span class="type">{type}</span>
			<span class="menu"
				>{#each menu as dish}
					<p>{dish.name}</p>
				{/each}</span
			>
			<div class="created-info">
				<span class="created">{created}</span>
				<span class="writer">{writer}</span>
			</div>
		</div>
	{/each}
</div>

<style>
	header {
		text-align: center;
	}
	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
	.card {
		background-color: rgb(206, 234, 223);
		border-radius: 10px;
		padding: 15px;
		width: 240px;
		min-height: 120px;
		margin: 20px;
		position: relative;
	}
	.restaurant {
		display: block;
		font-size: 20px;
		margin-bottom: 5px;
	}
	.location,
	.type {
		display: block;
		font-size: 15px;
	}
	.created-info {
		font-size: 13px;
		text-align: right;
		position: absolute;
		bottom: 15px;
		right: 15px;
	}
</style>
