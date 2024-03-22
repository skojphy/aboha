<script>
	// export let data;
	import mainImage from '$lib/dol/images/invitation1.png';
	import sampleImage from '$lib/dol/images/sample-image.jpeg';
</script>

<header>
	<h1 class="visually-hidden">아보하 돌</h1>
</header>
<main class="container">
	<img
		src={mainImage}
		alt="아보하, 첫 돌. 소중한 아기의 첫 번째 생일을 축하해 주세요."
		class="main-image"
	/>

	<section>
		<p>2024-4-20</p>
		<p>서울특별시 무슨구 무슨무슨동</p>
		<a href="https://map.kakao.com/link/to/D2%ED%8C%8C%ED%8B%B0%EB%A3%B8,37.504547,126.897091"
			>어디어디 파티룸</a
		>

		<p>🌸 아보하 돌까지 D-00 🌸</p>
	</section>

	<div id="map" />

	<div class="line" />

	<section>
		<h2>
			<p>아보하와의</p>
			<p>행복했던 시간들</p>
		</h2>
		<div class="gallery">
			<img class="gallery-images" src={sampleImage} alt="아보하" />
			<img class="gallery-images" src={sampleImage} alt="아보하" />
			<img class="gallery-images" src={sampleImage} alt="아보하" />
			<img class="gallery-images" src={sampleImage} alt="아보하" />
			<img class="gallery-images" src={sampleImage} alt="아보하" />
			<img class="gallery-images" src={sampleImage} alt="아보하" />
			<img class="gallery-images" src={sampleImage} alt="아보하" />
			<img class="gallery-images" src={sampleImage} alt="아보하" />
			<img class="gallery-images" src={sampleImage} alt="아보하" />
		</div>
	</section>

	<section>
		<h2>엄마에게 연락하기</h2>
		<p>
			방문 전 궁금하신 점이 있다면
			<br />
			언제든 연락하셔서 질문해 주세요.
		</p>
		<a href="./">연락하기</a>
	</section>

	<section>
		<h2>회비 전하실 곳</h2>
		<p>
			축하의 마음을 담아 5만 원을 전달해 주세요.
			<br />
			일부 금액은 환급 예정입니다. 4월 13일까지 입금 가능합니다.
		</p>
		<a href="./">입금하기</a>
	</section>

	<section>
		<h2>축하 메시지 전하기</h2>
		<div>아보하야 생일 축하해~. 너의 돌잔치가 대단히 기대되는구나!</div>
		<div>아보하야 생일 축하해~. 너의 돌잔치가 대단히 기대되는구나!</div>
		<div>아보하야 생일 축하해~. 너의 돌잔치가 대단히 기대기는구나!</div>
		<button>전체보기</button>
		<button>작성하기</button>
	</section>

	<section>
		<p>
			주의사항
			<br />
			주의하상
			<br />
			어쩌구저꺼구
		</p>
	</section>
</main>

<footer>footer</footer>

<style>
	main {
		padding: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.main-image {
		width: 100vw;
		max-width: 480px;
	}

	#map {
		/* overflow: auto; */
		width: 80vw;
		height: 50vw;
	}

	.line {
		width: 1px;
		height: 200px;
		background-color: gray;
		margin: 30px;
	}

	.gallery {
		display: flex;
		max-width: 90vw;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.gallery-images {
		width: 30%;
	}
</style>
