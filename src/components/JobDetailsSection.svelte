<script lang="ts"></script>

<div class="py-4">
	<h2 class="text-xl font-semibold">Experience</h2>
	<div class="mt-4 grid grid-cols-1 gap-x-4 sm:grid-cols-[auto_1fr] sm:gap-y-6">
		<p class="date">2022-Present</p>
		<div class="job-details">
			<h3>Indeed</h3>
			<p>Software Engineer</p>
			<p>
				At Indeed, I work as a part of our access management team, building and maintaining critical
				components of our authorization systems that allow large employers to better organize their
				hiring efforts on our platform. I work closely with cross-functional teams such as design
				and product management to deliver stable, scalable software that meets the needs of our
				employers, and the needs of other teams.
			</p>
		</div>
		<p class="date">2021-2022</p>
		<div class="job-details">
			<h3>InFlight Integrations</h3>
			<p>Software Developer</p>
			<p>
				At InFlight, I helped to modernize HR platforms by building custom, user friendly,
				accessible applications that integrated with existing HR systems. After our acquisition by
				Skuid, I continued supporting our companies largest client, delivering new features on tight
				timelines.
			</p>
		</div>
		<p class="date">2019-2021</p>
		<div class="job-details">
			<h3>WSFS Bank</h3>
			<p>Software Developer Intern / Software Developer</p>
			<p>
				At WSFS, I built and maintained many different internal tools that supported different teams
				within the bank. I was responsible for building and designing new features, fixing bugs, and
				transitioning our department to using React.
			</p>
		</div>
	</div>
</div>

<style>
	@reference "../app.css";

	.date {
		@apply leading-7 text-slate-600 sm:text-right dark:text-slate-300;
	}
	.job-details {
		@apply mb-4 sm:mb-0;
	}
	.job-details h3 {
		@apply text-lg font-bold text-slate-900 dark:text-white;
	}
</style>
