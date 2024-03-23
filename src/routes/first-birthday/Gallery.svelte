<script>
	import { onMount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';
	export let galleryID;
	export let images;

	onMount(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: '#' + galleryID,
			children: 'a',
			pswpModule: () => import('photoswipe')
		});
		lightbox.init();
	});
</script>

<div class="pswp-gallery" id={galleryID}>
	{#each images as image}
		<a
			href={image.largeURL}
			data-pswp-width={image.width}
			data-pswp-height={image.height}
			target="_blank"
			rel="noreferrer"
		>
			<img src={image.thumbnailURL} alt={image.alt} class="thumbnail-image" />
		</a>
	{/each}
</div>

<style>
	.pswp-gallery {
		grid-template-columns: 30% 30% 30%;
		display: grid;
		width: 90vw;
		justify-items: center;
	}
	.thumbnail-image {
		width: 100px;
		height: 100px;
	}
</style>
