<script>
	import galaxy from '$lib/images/galaxy.png';
</script>

<div class="background" style="background-image: url({galaxy});" />
<div class="twinkle green" />
<div class="twinkle red" />

<style>
	.background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;

		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		filter: brightness(0.8);
		z-index: -2;
	}

	.twinkle {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		pointer-events: none;
		background: none;
		z-index: -1;
	}

	.green {
		animation: twinkle 6.8s ease-in-out infinite;
		background-color: rgb(0, 255, 81);
	}

	.red {
		animation: twinkle 5.1s ease-in-out infinite;
		background-color: rgb(255, 0, 0);
	}

	@keyframes twinkle {
		0%,
		100% {
			opacity: 0.04;
		}
		50% {
			opacity: 0.07;
		}
	}
</style>
