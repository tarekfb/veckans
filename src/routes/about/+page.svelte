<script lang="ts">
	import img from '$lib/assets/bmc-button.png';
</script>

<div class="h-screen bg-base-200">
	<section
		class="flex flex-col items-center justify-center pb-5 pt-2 bg-gradient-to-b base-gradient-colors md:px-12 md:pt-0 md:h-2/6"
	>
		<div
			class="flex justify-between w-full text-3xl font-mono text-center px-5 md:px-20 md:text-6xl"
		>
			<p>"</p>
			<p>"</p>
		</div>
		<h1 class="text-2xl -mt-2 font-semibold px-10 md:text-4xl md:px-40">
			here’s the paradox: the image of a dangerous world has never been
			broadcast more effectively than it is now, while the world has never been
			less violent and more safe.
		</h1>
		<h2 class="mt-2 px-10 md:text-2xl md:px-64">
			― Hans Rosling, Factfulness: Ten Reasons We're Wrong About the World—and
			Why Things Are Better Than You Think
		</h2>
	</section>
	<main class="px-6 md:px-12 bg-gradient-to-t base-gradient-colors md:h-2/5 flex flex-col">
		<div class="divider mt-0" />
		<h1 class="text-3xl mb-3 md:text-4xl md:mt-6">Stöd oss</h1>
		<p class="mb-5 md:mb-12 md:text-xl">
			I och med all positiv feedback på
			<a
				href="https://www.reddit.com/r/sweden/?f=flair_name%3A%22Positiva%20Nyheter%22"
				class="link link-primary">smurfjojjo123's inlägg</a
			>, samt att jag själv upplevt att man hör alldeles för få positiva nyheter
			ville jag bidra till initiativet. Om du håller med kan du välja att stödja
			hemsidans hosting, domännamn & underhåll eller smurfjojjo123 fortsatta
			skapande av inlägg.
		</p>

		<div
			class="flex justify-evenly space-x-5 pb-5 md:justify-center md:items-center md:h-5/6"
		>
			<div class="card bg-base-100 shadow-xl md:rounded-[40px] md:w-4/6 max-w-3xl ">
				<figure>
					<img src={img} alt="Buy me a coffee logo" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">Stöd hemsidan</h2>
					<div class="flex justify-center space-x-4">
						<p>
							Hjälp till att betala för kostnaderna för hemsidan så att inläggen
							fortsatt finns tillgängliga här.
						</p>
						<div class="card-actions justify-center">
							<a href="https://ko-fi.com/tarekb" class="btn btn-primary"
								>Ge stöd</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</div>

<!-- <div>
	<div class="card bg-primary-content shadow-xl">
		<figure>
			<img src={img} alt="Buy me a coffee logo" />
		</figure>
		<div class="card-body">
			<h2 class="card-title">Stödja inläggen</h2>
			<p>
				Hjälp till att stödja smurfjojjo123 så att inläggen fortsätter hamna
				på reddit.
			</p>
			<div class="card-actions justify-center">
						<button class="btn btn-primary">Ge stöd</button>
					</div>
				</div>
			</div>
		</div> -->
<!-- <p class="mb-3">
		Vill ni stödja hemsidan kan ni göra det <a
			href="https://ko-fi.com/tarekb"
			class="link link-primary">här</a
		>.
	</p> -->
<!-- <p class="mb-10">
		Vill ni stödja att inläggen fortsätter kan ni göra det här
		<a href="https://buymeacoffee.com/smurfjojjo123" class="link link-primary"
			>här</a
		>.
	</p> -->
