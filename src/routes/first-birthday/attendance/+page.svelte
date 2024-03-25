<script>
	export let data;
	const { database } = data;
	import { enhance } from '$app/forms';
	import dol from '$lib/dol/images/dol.png';
</script>

<header>
	<h1>🌸 참석 의사 전달 🌸</h1>
</header>
<main class="container">
	<img src={dol} alt="아보하 돌 사진" />
	<section class="attendance">
		<form
			method="POST"
			action="?/submitForm"
			use:enhance={() => {
				return async ({ result }) => {
					if (result.type === 'error') {
						window.alert('잠시 후 다시 시도해 주세요.');
					}
					window.location.href = '../first-birthday';
				};
			}}
			on:submit={true}
		>
			<label for="nickname"
				>이름
				<input type="text" name="nickname" placeholder="닉네임/본명" required />
			</label>

			<label for="account"
				>환급 계좌
				<input type="text" name="account" placeholder="숫자만 적어 주세요" required />
			</label>

			<label for="bank"
				>은행
				<input type="text" name="bank" placeholder="예) 아보하뱅크" required />
			</label>

			<label for="arrival"
				>참석 시간
				<input type="text" name="arrival" placeholder="예) 늦참 - 20시, 정시 참여" required />
			</label>

			<label for="leave"
				>퇴근 시간
				<input type="text" name="leave" placeholder="예) 올나잇, 조퇴 - 23시" required />
			</label>

			<label for="boardgame"
				>보드게임 가져오세요?
				<input type="radio" name="boardgame" required />
			</label>

			<div class="buttons">
				<button type="submit">전송</button>
			</div>
		</form>
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
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: 'Cafe24Oneprettynight', Calibri, 'Trebuchet MS', sans-serif;
	}

	label {
		display: block;
	}
</style>
