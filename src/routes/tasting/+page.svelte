<script>
	let satisfactionData = {
		양: { value: 0, min: 1, max: 5 },
		맛: { value: 0, min: 1, max: 5 },
		가격: { value: 0, min: 1, max: 5 },
		간: { value: 0, min: 1, max: 5 },
		플레이팅: { value: 0, min: 1, max: 5 }
	};

	let tastingDate = '';
	let tastingMenu = '';
	let freeComment = '';

	function handleRatingChange(item, rating) {
		satisfactionData[item].value = rating;
		calculateTotalScore();
	}

	let totalScore = 0;

	function calculateTotalScore() {
		totalScore = Object.values(satisfactionData).reduce((sum, item) => sum + item.value, 0);
	}
</script>

<main>
	<h1>시식평가표</h1>

	<div>
		<label for="tastingDate">시식 일자:</label>
		<input type="text" bind:value={tastingDate} id="tastingDate" />
	</div>

	<div>
		<label for="tastingMenu">시식 메뉴:</label>
		<input type="text" bind:value={tastingMenu} id="tastingMenu" />
	</div>

	<table>
		<thead>
			<tr>
				<th>항목</th>
				<th>매우 만족</th>
				<th>만족</th>
				<th>보통</th>
				<th>불만족</th>
				<th>매우 불만족</th>
			</tr>
		</thead>
		<tbody>
			{#each Object.keys(satisfactionData) as item}
				<tr>
					<td>{item}</td>
					{#each [5, 4, 3, 2, 1] as rating}
						<td>
							<input
								type="radio"
								bind:group={satisfactionData[item].value}
								value={rating}
								on:change={() => handleRatingChange(item, rating)}
							/>
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>

	<div class="extra">
		<label for="freeComment">추가 의견을 작성해 주세요.</label>
		<textarea bind:value={freeComment} id="freeComment" rows="4" />
	</div>

	<div>
		<label>총점:</label>
		<span>{totalScore * 4}</span>
	</div>

	<button on:click={submitFeedback}>피드백 제출</button>
</main>

<style>
	main {
		margin: 20px;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		margin-top: 20px;
	}

	th,
	td {
		padding: 10px;
		text-align: center;
		border: 1px solid #ddd;
	}

	th {
		background-color: #f2f2f2;
	}

	input {
		margin: 0;
		cursor: pointer;
	}

	input:checked {
		background-color: #4caf50;
		color: white;
	}

	label {
		margin-right: 10px;
	}

	textarea {
		width: 100%;
		padding: 10px;
		margin-top: 10px;
		resize: vertical;
	}
	.extra {
		margin-top: 20px;
	}
</style>
