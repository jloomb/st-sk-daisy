<svelte:head>
	<title>Home</title>
	<meta name="description" content="souptrippers | welcome" />
</svelte:head>

<div class="drawer drawer-end">
	<input id="drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">

		<div class="grid grid-cols-none grid-rows-9 justify-items-center h-screen">
			
			<div class="w-1/2 max-w-3/4 col-span-full row-start-1 row-span-3">

				<div class="clip-shadow h-full">
					<div class="welcome-top grid grid-rows-2 place-items-end h-full bg-accent">
						<div class="">
							<a href="/">
								<img width="300" height="300" class="mx-auto" src="/ST_logo.png" alt="souptrippers logo" />
							</a>
						</div>

					</div>
				</div>

			</div>
			
			<div class="w-11/12 col-span-full row-start-3 row-span-6">

				<div class="clip-shadow h-full w-full">
					<div
						class="welcome-bottom grid items-end h-full mx-3 bg-accent text-accent-content justify-items-center"
					>
						<div class="prose px-20">
							<h1 class="text-4xl italic">COMING SOON</h1>
							<p class="font-serif">
								#9966FF purple
								#8AC63F green
								#FFCB00 yellow
								#EC008B  magenta
								#FF9 light yellow neutral
								#252525 dark grey text and lines
							</p>
						</div>

						<div class="clip-shadow w-2/3">
							<label for="drawer" class="MenuButton btn btn-secondary w-full">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									class="inline-block w-5 h-5 stroke-current"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							</label>
						</div>

					</div>
				</div>

			</div>
		</div>

	</div>

	<div class="drawer-side">
		<label for="my-drawer-4" class="drawer-overlay" />
		<ul class="menu p-4 overflow-y-auto w-full DrawerBG text-base-content">
			<!-- Sidebar content here -->
			<li><a href="/example">Examples</a></li>
			<li><a href="/">Home</a></li>
			<li>
        <label for="drawer" class="drawer-button btn btn-secondary">Close drawer</label>
      </li>
		</ul>
	</div>

</div>

<style lang="scss">
  h1 {
    color: 	hsl(260, 100%, 70%);
	}
	p {
		color: hsl(0, 0%, 15%);
	}
	.welcome-top {
		clip-path: polygon(0 0, 100% 0, 90% 90%, 10% 100%);
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
	.clip-shadow {
		filter: drop-shadow(0 0 10px rgba(50, 50, 0, 0.5));
	}
	.MenuButton {
		clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 100%, 0 100%, 0% 20%);
	}
</style>
