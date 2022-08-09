<svelte:head>
	<title>souptrippers | welcome</title>
	<meta name="description" content="souptrippers | welcome" />
</svelte:head>

<script context="module">
  import Drawer from "$lib/Drawer.svelte";
  export const router = false;
  export const hydrate = false;
</script>

<Drawer>
  <div slot="content">
    <label for="drawer" class="drawer-button btn btn-secondary">Open</label>
  </div>
  <div slot="side">
    <label for="drawer" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-full bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
      <li>
				<label for="drawer" class="drawer-button btn btn-secondary text-white">Close drawer</label>
			</li>
    </ul>
  </div>
</Drawer>

<style lang="scss">
	.welcome-top {
		clip-path: polygon(0 0, 100% 0, 90% 95%, 10% 100%);
		img {
			height: auto;
			width: 60%;
		}
	}
	.welcome-bottom {
		clip-path: polygon(18% 5%, 80% 0%, 100% 100%, 0% 100%);
		overflow: hidden;
		text-align: center;
	}
	.MenuButton {
		clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 100%, 0 100%, 0% 20%);
	}
</style>
