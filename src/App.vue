<!--<template src="./templates/course-list.html"></template>-->
<template>
  <div>
    <!--<UserDisplay></UserDisplay>-->
    <h1>Course List</h1>
    <router-link :to="{ name: 'List'}">List</router-link> | 
    <router-link :to="{ name: 'Add'}">Add</router-link>
    <router-view />
  </div>
</template>

<style>
  @import '/assets/styles/basic.css';
</style>

<script>
</script>