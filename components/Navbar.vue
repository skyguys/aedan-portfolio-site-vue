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
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" aria-expanded="false" 
                aria-label="Toggle navigation"
        >
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav">
						<li class="nav-item">
              <NuxtLink class="nav-link" to="/">
                Home
              </NuxtLink>
						</li>
						<li class="nav-item dropdown">	
							<a class="nav-link dropdown-toggle" href="#" role="button" 
                 data-bs-toggle="dropdown" aria-expanded="false"
              >
								Portfolio
							</a>
							<ul class="dropdown-menu">
								<li>
                  <NuxtLink class="dropdown-item" to="/resume">
                    Resume
                  </NuxtLink>
                </li>
								<li><hr class="dropdown-divider"></li>
                <li v-for="project in projects" :key="project.path">
                  <NuxtLink class="dropdown-item" :to="project.path">
                    {{ project.title }}
                  </NuxtLink>
                </li>
							</ul>
						</li>
						<li class="nav-item">
							<NuxtLink class="nav-link" to="/photography">
                Photography
              </NuxtLink>
						</li>
						<li class="nav-item">
							<NuxtLink class="nav-link" to="/contact">
                Contact
              </NuxtLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
  </div>
</template>

<style lang="scss" scoped>

@mixin hover-highlight {
  transition: 0.5s;
  background-color: rgba(0, 0, 0, 0.15);
}

@mixin hover-move {
  transition: 0.25;
  transform: translate(0px, -3px);
}

.navbar-toggler{
  border: none;
}

.nav-item {
  &:hover > a {
    @include hover-highlight;
    @include hover-move;
  }
}

.dropdown-item {
  &:hover {
    @include hover-highlight;
    @include hover-move;
  }
}

.custom-navbar, .dropdown-menu{
  --base-color: v-bind('props.navbar_hue');
  background-color: hsl(var(--base-color), 10%, 60%);
}

.custom-navbar{
  position: sticky;
  z-index: 1000;
  top: 0;
}

.nav-item{
  text-align: center;    
}

</style>