<script>
	import { enhance } from '$app/forms';
	import dol from '$lib/dol/images/dol.png';
	let dialog;

	const onSubmit = () => {
		dialog.showModal();
		return true;
	};
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
					setTimeout(() => {
						window.location.href = '../first-birthday';
					}, 1800);
				};
			}}
			on:submit={onSubmit}
		>
			<div class="input-container">
				<label class="text-input" for="nickname"
					><span>이름 </span>
					<input type="text" name="nickname" placeholder="닉네임/본명" required />
				</label>

				<label class="text-input" for="account"
					><span>환급 계좌</span>
					<input type="text" name="account" placeholder="숫자만 적어 주세요" required />
				</label>

				<label class="text-input" for="bank"
					><span>은행</span>
					<input type="text" name="bank" placeholder="예) 아보하뱅크" required />
				</label>

				<label class="text-input" for="arrival"
					><span>참석 시간</span>
					<input type="text" name="arrival" placeholder="예) 늦참 - 20시, 정시 참여" required />
				</label>

				<label class="text-input" for="leave"
					><span>퇴근 시간</span>
					<input type="text" name="leave" placeholder="예) 올나잇, 조퇴 - 23시" required />
				</label>

				<div class="text-input">
					<span>보드게임 가져오세요?</span>
					<label>
						<input type="radio" name="boardgame" value="yes" />
						<span>예</span>
					</label>

					<label>
						<input type="radio" name="boardgame" value="no" />
						<span>아니요</span>
					</label>
				</div>
			</div>

			<div class="buttons">
				<button type="submit">제출하기</button>
			</div>
		</form>
	</section>

	<dialog bind:this={dialog}>
		<h2>감사합니다.<br />돌잔치에서 만나요!</h2>
		소중한 개인 정보는<br />돌잔치 이후 일괄 삭제할 예정입니다.
	</dialog>
</main>

<style>
	/* 아이폰 버튼 스타일 초기화 */
	input:not([type='color']),
	button,
	button {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
	}

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

	h1 {
		font-family: 'Cafe24Shiningstar';
	}

	img {
		width: 85vw;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 20px 0;
	}

	.text-input {
		width: 85vw;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin: 15px 0;
	}

	.text-input span {
		font-size: 0.9em;
	}

	.text-input [type='text'] {
		width: 60vw;
		border: none;
		background-color: #e0e3de;
		color: #66725d;
		border-radius: 5px;
		padding: 0 7px;
	}

	.text-input input::placeholder {
		font-size: 0.8em;
	}

	input {
		height: 1.8rem;
	}

	[type='radio'],
	span {
		vertical-align: middle;
	}

	[type='radio'] {
		appearance: none;
		border: max(2px, 0.1em) solid gray;
		border-radius: 50%;
		width: 1.15em;
		height: 1.15em;
		transition: border 0.5s ease-in-out;
	}

	[type='radio']:checked {
		border: 0.35em solid #66725d;
	}

	[type='radio']:focus-visible {
		outline-offset: max(2px, 0.1em);
		outline: max(2px, 0.1em) dotted #66725d;
	}

	[type='radio']:hover {
		box-shadow: 0 0 0 max(4px, 0.2em) lightgray;
		cursor: pointer;
	}

	.input-container {
		min-height: 65vh;
	}

	.buttons button {
		width: 100vw;
		height: 3.5rem;
		border: none;
		position: fixed;
		left: 0;
		bottom: 0;
		background-color: #e0e3de;
	}

	dialog {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 70vw;
		border: none;
		border-radius: 10px;
		color: #66725d;
		text-align: center;
		padding: 20px;
		box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
			rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
			rgba(0, 0, 0, 0.09) 0px -3px 5px;
	}

	dialog h2 {
		font-family: 'Cafe24Shiningstar';
		font-size: 1.5rem;
		margin: 0 0 15px 0;
	}
</style>
