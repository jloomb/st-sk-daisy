<div class="navbar bg-primary text-primary-content">
	<div class="navbar-start">
		<a sveltekit:prefetch href="/" class="btn btn-ghost normal-case text-xl">souptrippers</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal p-0">
			<li><a>Item 1</a></li>
			<li tabindex="0">
				<a>
					Parent
					<svg
						class="fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
					>
				</a>
				<ul class="p-2">
					<li><a>Submenu 1</a></li>
					<li><a>Submenu 2</a></li>
				</ul>
			</li>
			<li><a>Item 3</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<div class="dropdown dropdown-end">
			<button tabindex="0" class="btn btn-square btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block w-5 h-5 stroke-current"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/></svg
				>
			</button>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li><a sveltekit:prefetch href="/">Home</a></li>
				<li tabindex="0">
					<a class="justify-between">
						Parent
						<svg
							class="fill-current"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg
						>
					</a>
					<ul class="p-2">
						<li><a>Submenu 1</a></li>
						<li><a>Submenu 2</a></li>
					</ul>
				</li>
				<li><a>Item 3</a></li>
			</ul>
		</div>
	</div>
</div>

<div class="my-8" />

<div data-theme="light">
	<!-- example -->
	<div class="container mx-auto bg-base-100">
		<!-- buttons -->
		<div class="p-4 flex justify-center">
			<button class="btn btn-primary">primary</button>
			<button class="btn btn-secondary">secondary</button>
			<button class="btn btn-accent">accent</button>
		</div>

		<!-- same buttons with another theme! -->
		<div class="p-4 flex justify-center" data-theme="valentine">
			<button class="btn btn-primary">primary</button>
			<button class="btn btn-secondary">secondary</button>
			<button class="btn btn-accent">accent</button>
		</div>

		<!-- tab -->
		<div class="tabs p-4 flex justify-center">
			<button class="tab tab-lifted">Tab 1</button>
			<button class="tab tab-active tab-lifted">Tab 2</button>
			<button class="tab tab-lifted">Tab 3</button>
		</div>

		<!-- toggle -->
		<div class="p-4 flex justify-center">
			<input type="checkbox" class="toggle toggle-primary" />
			<input type="checkbox" class="toggle toggle-secondary" />
			<input type="checkbox" class="toggle toggle-accent" />
		</div>

		<!-- card -->
		<div class="flex justify-center">
			<div class="card m-4 w-80 shadow-2xl">
				<figure>
					<img src="https://picsum.photos/id/1005/500/250" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">DaisyUI Card</h2>
					<p>
						Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus.
					</p>
				</div>
			</div>
		</div>

		<div class="">
			<!-- dropdown -->
			<div class="dropdown m-4">
				<div tabindex="0" class="btn m-1">Dropdown</div>
				<ul
					tabindex="0"
					class="dropdown-content menu rounded-box w-52 bg-neutral p-2 text-neutral-content"
				>
					<li><a>Item 1</a></li>
					<li><a>Item 2</a></li>
				</ul>
			</div>

			<!-- modal button -->
			<label for="my-modal" class="modal-button btn">Modal</label>
			<!-- modal content -->
			<input type="checkbox" id="my-modal" class="modal-toggle" />
			<div class="modal">
				<div class="modal-box">
					<p>
						Enim dolorem dol4orum omnis atque necessitatibus. Consequatur aut adipisci qui iusto
						illo eaque. Consequatur repudiandae et. Nulla ea quasi eligendi. Saepe velit autem
						minima.
					</p>
					<div class="modal-action">
						<label for="my-modal" class="btn">Close</label>
					</div>
				</div>
			</div>
		</div>

		<!-- steps -->
		<ul class="steps my-4 w-full">
			<li class="step step-primary">Register</li>
			<li class="step step-primary">Choose plan</li>
			<li class="step">Purchase</li>
			<li class="step">Receive Product</li>
		</ul>

		<!-- avatar -->
		<div class="avatar online m-10">
			<div class="h-24 w-24 rounded-full">
				<img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" />
			</div>
		</div>
		<div class="avatar offline m-10">
			<div class="h-24 w-24 rounded-full">
				<img src="http://daisyui.com/tailwind-css-component-profile-2@94w.png" />
			</div>
		</div>

		<!-- see all components: https://daisyui.com/components/button -->
	</div>
</div>

<div data-theme="light">
	<h2 class="px-2 pb-4 text-xl font-bold">Preview</h2>
	<div
		class="rounded-box bg-base-100 border-base-content/5 text-base-content not-prose grid gap-3 border p-6"
		data-theme="mytheme"
		style="--p:87 54% 51%; --s:260 100% 70%; --a:48 100% 50%; --n:60 100% 80%; --b1:0 0% 100%; --in:212 100% 48%; --su:137 72% 46%; --wa:5 100% 66%; --er:325 78% 49%; --pf:87 54% 41%; --sf:260 100% 56%; --af:48 100% 40%; --nf:60 100% 64%; --b2:0 0% 90%; --b3:0 0% 80%; --bc:0 0% 20%; --pc:87 100% 10%; --sc:260 100% 14%; --ac:48 100% 10%; --nc:60 100% 16%; --inc:212 100% 90%; --suc:137 100% 9%; --wac:5 100% 13%; --erc:325 100% 90%;"
	>
		<div class="grid grid-cols-2 gap-2 md:grid-cols-4">
			<button class="btn">Default</button> <button class="btn btn-primary">Primary</button>
			<button class="btn btn-secondary">Secondary</button>
			<button class="btn btn-accent">Accent</button> <button class="btn btn-info">Info</button>
			<button class="btn btn-success">Success</button>
			<button class="btn btn-warning">Warning</button> <button class="btn btn-error">Error</button>
		</div>
		<div class="grid grid-cols-2 place-items-center gap-2 md:grid-cols-4">
			<span class="badge">Default</span> <span class="badge badge-primary">Primary</span>
			<span class="badge badge-secondary">Secondary</span>
			<span class="badge badge-accent">Accent</span> <span class="badge badge-info">Info</span>
			<span class="badge badge-success">Success</span>
			<span class="badge badge-warning">Warning</span> <span class="badge badge-error">Error</span>
		</div>
		<div class="flex flex-col gap-3">
			<div class="flex flex-col gap-3 md:flex-row">
				<div class="md:w-1/2">
					<div class="tabs">
						<button class="tab tab-lifted">Tab</button>
						<button class="tab tab-lifted tab-active">Tab</button>
						<button class="tab tab-lifted">Tab</button>
					</div>
					<div class="flex flex-col">
						<span class="link">I'm a simple link</span>
						<span class="link link-primary">I'm a simple link</span>
						<span class="link link-secondary">I'm a simple link</span>
						<span class="link link-accent">I'm a simple link</span>
					</div>
				</div>
				<div class="flex flex-col gap-3 md:w-1/2">
					<progress max="100" class="progress" value="20">Default</progress>
					<progress max="100" class="progress progress-primary" value="25">Primary</progress>
					<progress max="100" class="progress progress-secondary" value="30">Secondary</progress>
					<progress max="100" class="progress progress-accent" value="40">Accent</progress>
					<progress max="100" class="progress progress-info" value="45">Info</progress>
					<progress max="100" class="progress progress-success" value="55">Success</progress>
					<progress max="100" class="progress progress-warning" value="70">Warning</progress>
					<progress max="100" class="progress progress-error" value="90">Error</progress>
				</div>
			</div>
			<div class="flex flex-col gap-3 md:flex-row">
				<div class="stats bg-base-300 border-base-300 border md:w-1/2">
					<div class="stat">
						<div class="stat-title">Total Page Views</div>
						<div class="stat-value">89,400</div>
						<div class="stat-desc">21% more than last month</div>
					</div>
				</div>
				<div class="flex flex-wrap items-center justify-center gap-3 md:w-1/2">
					<div class="radial-progress" style="--value:60; --size:3.5rem;">60%</div>
					<div class="radial-progress" style="--value:75; --size:3.5rem;">75%</div>
					<div class="radial-progress" style="--value:90; --size:3.5rem;">90%</div>
				</div>
			</div>
		</div>
		<div class="flex flex-col gap-3">
			<div class="flex flex-col gap-3 md:flex-row">
				<div class="md:w-1/2">
					<div>
						<input type="checkbox" class="toggle" />
						<input type="checkbox" class="toggle toggle-primary" />
						<input type="checkbox" class="toggle toggle-secondary" />
						<input type="checkbox" class="toggle toggle-accent" />
					</div>
					<div>
						<input type="checkbox" class="checkbox" />
						<input type="checkbox" class="checkbox checkbox-primary" />
						<input type="checkbox" class="checkbox checkbox-secondary" />
						<input type="checkbox" class="checkbox checkbox-accent" />
					</div>
					<div>
						<input type="radio" name="radio-1" class="radio" />
						<input type="radio" name="radio-1" class="radio radio-primary" />
						<input type="radio" name="radio-1" class="radio radio-secondary" />
						<input type="radio" name="radio-1" class="radio radio-accent" />
					</div>
				</div>
				<div class="md:w-1/2">
					<input type="range" min="0" max="100" class="range range-xs" />
					<input type="range" min="0" max="100" class="range range-xs range-primary" />
					<input type="range" min="0" max="100" class="range range-xs range-secondary" />
					<input type="range" min="0" max="100" class="range range-xs range-accent" />
				</div>
			</div>
			<div class="flex flex-col gap-3 md:flex-row">
				<div class="flex flex-col gap-3 md:w-1/2">
					<input type="text" placeholder="Default" class="input input-bordered w-full" />
					<input
						type="text"
						placeholder="Primary"
						class="input input-primary input-bordered w-full"
					/>
					<input
						type="text"
						placeholder="Secondary"
						class="input input-secondary input-bordered w-full"
					/>
					<input
						type="text"
						placeholder="Accent"
						class="input input-accent input-bordered w-full"
					/>
				</div>
				<div class="flex flex-col gap-3 md:w-1/2">
					<input type="text" placeholder="Info" class="input input-info input-bordered w-full" />
					<input
						type="text"
						placeholder="Success"
						class="input input-success input-bordered w-full"
					/>
					<input
						type="text"
						placeholder="Warning"
						class="input input-warning input-bordered w-full"
					/>
					<input type="text" placeholder="Error" class="input input-error input-bordered w-full" />
				</div>
			</div>
			<div class="navbar bg-neutral text-neutral-content rounded-box">
				<div class="flex-none">
					<button class="btn btn-square btn-ghost"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="inline-block h-5 w-5 stroke-current"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/></svg
						></button
					>
				</div>
				<div class="flex-1"><button class="btn btn-ghost text-xl normal-case">daisyUI</button></div>
			</div>
			<div class="flex gap-3">
				<div class="flex flex-grow flex-col gap-3">
					<div class="text-4xl font-bold">Text Size 1</div>
					<div class="text-3xl font-bold">Text Size 2</div>
					<div class="text-2xl font-bold">Text Size 3</div>
					<div class="text-xl font-bold">Text Size 4</div>
					<div class="text-lg font-bold">Text Size 5</div>
					<div class="text-sm font-bold">Text Size 6</div>
					<div class="text-xs font-bold">Text Size 7</div>
				</div>
				<ul class="steps steps-vertical">
					<li class="step step-primary">Step 1</li>
					<li class="step step-primary">Step 2</li>
					<li class="step">Step 3</li>
					<li class="step">Step 4</li>
				</ul>
			</div>
		</div>
		<div class="flex flex-col gap-3">
			<div class="alert">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="stroke-info h-6 w-6 flex-shrink-0"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					> <span>12 unread messages. Tap to see.</span>
				</div>
			</div>
			<div class="alert alert-info">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="h-6 w-6 flex-shrink-0 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					> <span>New software update available.</span>
				</div>
			</div>
			<div class="alert alert-success">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 flex-shrink-0 stroke-current"
						fill="none"
						viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					> <span>Your purchase has been confirmed!</span>
				</div>
			</div>
			<div class="alert alert-warning">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 flex-shrink-0 stroke-current"
						fill="none"
						viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
						/></svg
					> <span>Warning: Invalid email address!</span>
				</div>
			</div>
			<div class="alert alert-error">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 flex-shrink-0 stroke-current"
						fill="none"
						viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					> <span>Error! Task failed successfully.</span>
				</div>
			</div>
		</div>
	</div>
</div>
