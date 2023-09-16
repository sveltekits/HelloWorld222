<script lang="ts">
	import '../app.css';
</script>

<div class="main-warp">
	<div class="main-content">
		<slot />
	</div>
</div>

<style>
	.main-warp {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.main-content {
		border: 1px solid rgb(222, 221, 221);
		width: var(--body-max-width);
	}
</style>
