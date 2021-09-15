<!--<template src="./templates/course-list.html"></template>-->
<template>
  <div>
    <!--<UserDisplay></UserDisplay>-->
    <div class="navbar">
      <router-link :to="{ name: 'List'}">List </router-link> | 
      <router-link :to="{ name: 'Search'}">Search </router-link> | 
      <router-link :to="{ name: 'Add'}">Add </router-link>
      <router-view />
    </div>
  </div>
</template>

<style>
  @import '/assets/styles/basic.css';
</style>

<script>
</script>