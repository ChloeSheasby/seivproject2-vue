<!--<template src="./templates/course-list.html"></template>-->
<template>
  <div>
    <!--<UserDisplay></UserDisplay>-->
    <div class="navbar">
      <ul>
        <li>
          <router-link :to="{ name: 'List' }" class="routerlinks"
            >List
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Search' }" class="routerlinks"
            >Search
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Add' }" class="routerlinks"
            >Add
          </router-link>
        </li>
      </ul>
      <br />
      <hr />
    </div>
    <router-view />
  </div>
</template>

<style>
@import "./assets/styles/basic.css";
</style>

<script>
</script>