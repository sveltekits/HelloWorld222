<script lang="ts">
	import '../app.css';
</script>

<div class="main-layout-warp">
	<div class="main-layout-content">
		<slot />
	</div>
</div>

<style>
	.main-layout-warp {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.main-layout-content {
		border: 1px solid rgb(222, 221, 221);
		width: var(--body-max-width);
	}
</style>
