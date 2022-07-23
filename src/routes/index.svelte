<svelte:head>
	<title>Home</title>
	<meta name="description" content="souptrippers | welcome" />
</svelte:head>

<div class="drawer drawer-end">
	<input id="drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">

		<div class="grid grid-cols-none grid-rows-3 justify-items-center h-screen">
			
			<div class="w-1/2 h-2/3 col-span-full row-start-1 row-span-2 justify-center">

				<div class="clip-shadow h-full w-full pr-8">
					<div class="welcome-top h-full bg-accent">
						<a href="/">
							<img class="mx-auto pb-6" src="/ST_logo.png" alt="souptrippers logo" />
						</a>
					</div>
				</div>

			</div>
			
			<div class="w-11/12 col-span-full row-start-2 row-span-2 items-end justify-center">

				<div class="clip-shadow h-full w-full pl-4">
					<div
						class="welcome-bottom grid items-end h-full pt-10 mx-3 bg-accent text-accent-content"
					>
						<div class="prose">
							<h1>COMING SOON</h1>
							<p>google fonts: Jost (sans serif) Merllweather (serif)</p>
						</div>
						<div>
							<span class="clip-shadow m-6">
								<label for="drawer" class="menu-button btn btn-secondary w-1/2">
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
							</span>
						</div>
					</div>
				</div>

			</div>
		</div>

	</div>

	<div class="drawer-side">
		<label for="my-drawer-4" class="drawer-overlay" />
		<ul class="menu p-4 overflow-y-auto w-full bg-base-100 text-base-content">
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
	.welcome-top {
		clip-path: polygon(0 0, 100% 0, 90% 90%, 10% 100%);
		img {
      height: auto;
			width: 60%;
		}
	}
	.welcome-bottom {
		clip-path: polygon(22% 5%, 80% 0%, 100% 100%, 0% 100%);
		overflow: hidden;
		text-align: center;
	}
	.clip-shadow {
		filter: drop-shadow(0 0 10px rgba(50, 50, 0, 0.5));
	}
	.menu-button {
		clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 100%, 0 100%, 0% 20%);
	}
</style>
