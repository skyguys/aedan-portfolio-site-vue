<script setup>
const { data: projects } = await useAsyncData('projects', () =>
  queryCollection('projects').all()
)

const props = defineProps({
  navbar_hue: {
    type: Number,
    required: true
  }
})
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
              <NuxtLink class="nav-link" to="/">Home</NuxtLink>
						</li>
						<li class="nav-item dropdown">	
							<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Portfolio
							</a>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item" href="#">Resume</a></li>
								<li><hr class="dropdown-divider"></li>
								<!-- <li><a class="dropdown-item" href="#">Project #1</a></li> -->
								<!-- <li><a class="dropdown-item" href="#">Project #2</a></li> -->
                <li v-for="project in projects" :key="project.path">
                  <NuxtLink class="dropdown-item" :to="project.path">
                    {{ project.title }}
                  </NuxtLink>
                </li>
							</ul>
						</li>
						<li class="nav-item">
							<NuxtLink class="nav-link" to="/photography">Photography</NuxtLink>
						</li>
						<li class="nav-item">
							<NuxtLink class="nav-link" to="/contact">Contact</NuxtLink>
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

.custom-navbar{
  background-color: hsl(v-bind('props.navbar_hue'), 10%, 60%);
  position: sticky;
  z-index: 1000;
    top: 0;
}

.dropdown-menu{
  background-color: hsl(v-bind('props.navbar_hue'), 10%, 55%);
  
}

.nav-item{
  text-align: center;    
}

</style>