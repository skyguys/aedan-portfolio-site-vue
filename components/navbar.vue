<script setup>
</script>

<template>
	<div class="custom-navbar">
		<nav class="navbar navbar-expand-lg">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">Aedan Magsombol</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav">
						<li class="nav-item">
							<!-- <a class="nav-link" aria-current="page" href="#">Home</a> -->
              <NuxtLink class="nav-link" to="/">Home</NuxtLink>
						</li>
						<li class="nav-item dropdown">	
							<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Portfolio
							</a>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item" href="#">Resume</a></li>
								<li><hr class="dropdown-divider"></li>
								<li><a class="dropdown-item" href="#">Project #1</a></li>
								<li><a class="dropdown-item" href="#">Project #2</a></li>
							</ul>
						</li>
						<li class="nav-item">
							<NuxtLink class="nav-link" to="/photography">Photography</NuxtLink>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
  </div>
</template>

<style>

.navbar-toggler{
  border: none;
}

.nav-item:hover > a, .dropdown-item:hover {
  transition: 0.5s;
  background-color: rgba(0, 0, 0, 0.15);
}

.navbar{
  background-color: hsl(0, 10%, 60%);
}

.dropdown-menu{
  background-color: hsl(0, 10%, 55%);
  
}

.nav-item{
  text-align: center;    
}

</style>