<script lang="ts">
	import img from '$lib/assets/bmc-button.png';
</script>

<section
	class="flex flex-col items-center justify-center py-10 md:py-24 bg-gradient-to-b from-base-200 to-base-100"
>
	<div class="flex justify-between w-full text-3xl font-mono text-center px-5">
		<p>"</p>
		<p>"</p>
	</div>
	<h1 class="text-2xl -mt-2 font-semibold px-10">
		here’s the paradox: the image of a dangerous world has never been broadcast
		more effectively than it is now, while the world has never been less violent
		and more safe.
	</h1>
	<h2 class="mt-2 px-10">
		― Hans Rosling, Factfulness: Ten Reasons We're Wrong About the World—and Why
		Things Are Better Than You Think
	</h2>
</section>
<div class="divider px-6 my-6" />
<main class="px-6">
	<h1 class="text-3xl mb-3">
		Stöd att hemsidan finns kvar, och att inlägg trillar in
	</h1>
	<p class="mb-5">
		I och med all positiv feedback på
		<a
			href="https://www.reddit.com/r/sweden/?f=flair_name%3A%22Positiva%20Nyheter%22"
			class="link link-primary">smurfjojjo123's inlägg</a
		>, samt att jag själv upplevt att man hör alldeles för få positiva nyheter
		ville jag bidra till initiativet. Om du håller med kan du välja att stödja
		hemsidans hosting, domännamn & underhåll eller smurfjojjo123 fortsatta
		skapande av inlägg.
	</p>

	<div class="flex justify-evenly space-x-5 mb-5">
		<div class="card bg-base-200 shadow-xl rounded-t-3xl">
			<figure class="-mt-1">
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
						<button class="btn btn-primary">Ge stöd</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>

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
			href="https://buymeacoffee.com/tarekb"
			class="link link-primary">här</a
		>.
	</p> -->
<!-- <p class="mb-10">
		Vill ni stödja att inläggen fortsätter kan ni göra det här
		<a href="https://buymeacoffee.com/smurfjojjo123" class="link link-primary"
			>här</a
		>.
	</p> -->
