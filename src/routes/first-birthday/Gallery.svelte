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
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		max-width: 80vw;
	}
	.thumbnail-image {
		width: 25vw;
		height: 25vw;
		margin: 4px 0;
	}
</style>
