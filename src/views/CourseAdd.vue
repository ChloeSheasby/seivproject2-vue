<template>
  <div>
    <!--<UserDisplay></UserDisplay>-->
    <h3>Add Course </h3>

    <form @submit.prevent="addCourse">
      Dept:
      <input v-model="course.dept" type="text" id="dept">
      <br>
      Course Number:
      <input v-model="course.courseNum" type="text" id="courseNum">
      <br>
      Level:
      <input v-model="course.level" type="text" id="level">
      <br>
      Hours:
      <input v-model="course.hours" type="text" id="hours">
      <br>
      Name:
      <input v-model="course.name" type="text" id="name">
      <br>
      Description:
      <input v-model="course.description" type="text" id="description">
      <br>
      
      <input type="submit" name="submit" value="Save">
      <button name="cancel" v-on:click.prevent="cancel()">Cancel</button>
    </form>
  </div>
</template>
<style>
  /* @import '@/assets/styles/basic.css'; */
</style>

<script>
/*import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld
  }
}*/

import CourseServices from "@/services/services.js"
export default {
  data() {
    return {
      course: {},
    }
  },
  methods: {
    addCourse() {
      CourseServices.addCourse(this.course)
        .then(() => {
          this.$router.push({ name: 'List' })
        })
        .catch(error => {
          console.log(error);
        })
    },
    cancel() {
      this.$router.push({ name: 'List' })
    },
  }
}
</script>