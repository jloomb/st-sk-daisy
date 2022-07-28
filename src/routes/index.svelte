<svelte:head>
	<title>Home</title>
	<meta name="description" content="souptrippers | welcome" />
</svelte:head>

<div class="drawer drawer-end">
	<input id="drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">

		<div class="welcome h-screen grid grid-rows-3 sm-landscape:grid-rows-2 sm-landscape:grid-cols-2">

			<div class="welcome-1 drop-shadow-[0_0_10px_rgba(50,50,0,0.5)] w-1/2 mx-auto -mb-16">
				<div class="welcome-top grid place-items-center h-full max-w-md mx-auto pb-6 bg-primary">
					<a href="/">
						<img
							width="300"
							height="300"
							class="mx-auto max-h-96 "
							src="/ST_logo.png"
							alt="souptrippers logo"
						/>
					</a>
				</div>
			</div>

			<div class="welcome-2 row-span-2 drop-shadow-[0_0_10px_rgba(50,50,0,0.5)] max-w-screen-xl px-6 w-11/12 mx-auto">
				<div
					class="welcome-bottom grid items-end h-full bg-primary text-accent-content justify-items-center"
				>
					<div class="prose px-16 sm:px-20">
						<h1 class="text-4xl italic text-secondary">COMING SOON</h1>
						<p class="font-serif text-neutral">
							Join us as we hurtle through space on a giant rock
						</p>
					</div>

					<div class="drop-shadow-[0_0_10px_rgba(50,50,0,0.5)] w-2/3">
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

	<div class="drawer-side">
		<label for="my-drawer-4" class="drawer-overlay" />
		<ul class="menu p-4 overflow-y-auto w-full DrawerBG text-base-100">
			<!-- Sidebar content here -->
			<li><a href="/example">Examples</a></li>
			<li><a href="/">Home</a></li>
			<li>
				<label for="drawer" class="drawer-button btn btn-secondary text-white">Close drawer</label>
			</li>
			<li>
				#9966FF purple #8AC63F green #FFCB00 yellow #EC008B magenta #FF9 light yellow neutral #252525 dark grey text and lines
			</li>
		</ul>
	</div>
</div>

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
