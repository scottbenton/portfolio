<div class="flex flex-col gap-4 py-4">
	<h2 class="text-xl font-semibold">At a Glance</h2>
	<div class="about-item">
		<div><span class="icon-[pixelarticons--chevron-right]"></span></div>
		<p><b>Software Engineer</b> at Indeed</p>
	</div>

	<div class="about-item">
		<div>
			<span class="icon-[pixelarticons--pin]"></span>
		</div>
		<p>Philadelphia, PA</p>
	</div>
	<div class="about-item">
		<div><span class="icon-[pixelarticons--mail]"></span></div>
		<p>scott@scottbenton.dev</p>
	</div>
	<div class="flex flex-wrap items-center gap-2">
		<div class="about-item">
			<a href="https://github.com/scottbenton" target="_blank" rel="noopener noreferrer">
				<span class="icon-[pixelarticons--user]"></span>
				<p>LinkedIn</p>
			</a>
		</div>
		<div class="about-item">
			<a href="https://github.com/scottbenton" target="_blank" rel="noopener noreferrer">
				<span class="icon-[pixelarticons--github]"></span>
				<p>Github: ScottBenton</p>
			</a>
		</div>
	</div>
</div>

<style>
	@reference "../app.css";

	.about-item {
		@apply flex items-center gap-3;
		> div,
		a {
			@apply flex items-center justify-center rounded-full bg-slate-900 p-2 text-white;
			> span {
				@apply text-2xl;
			}
			> p {
				@apply ml-2 pr-2;
			}
		}
		> a {
			@apply from-blue-700 to-violet-800 pr-3 transition-colors duration-300 ease-in-out hover:bg-gradient-to-r;
		}
		> p {
			@apply text-lg text-slate-700 dark:text-slate-200;
		}
	}
</style>
