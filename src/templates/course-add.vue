<template>
  <div>
    <H1>Course List Add</H1>

    <form @submit.prevent="addCourseList">
      Dept:
      <input v-model="course.dept" type="text" id="id">
      <br>
      Course Number:
      <input v-model="course.courseNum" type="text" id="id">
      <br>
      Level:
      <input v-model="course.level" type="text" id="id">
      <br>
      Hours:
      <input v-model="course.hours" type="text" id="id">
      <br>
      Name:
      <input v-model="course.name" type="text" id="id">
      <br>
      Description:
      <input v-model="course.description" type="text" id="id">
      <br>
      
      <input type="submit" name="submit" value="Save">
      <button name="cancel" v-on:click.prevent="cancel()">Cancel</button>
    </form>
  </div>
</template>

<script>
import CourseServices from "@/services/services.js"
export default {
  data() {
    return {
      list: {},
    }
  },

  methods: {
    addCourseList() {
      CourseServices.addList(this.list)
        .then(() => {
          this.$router.push({ name: 'list' })
        })
        .catch(error => {
          console.log(error);
        })
    },
    cancel() {
      this.$router.push({ name: 'list' })
    },
  }
}
</script>

<style scoped>
</style>
