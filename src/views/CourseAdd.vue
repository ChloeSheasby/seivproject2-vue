<template>
  <div>
    <!--<UserDisplay></UserDisplay>-->
    <h3>Add Course</h3>

    <form @submit.prevent="addCourse">
      <div class="text-input-group">
        Department:
        <input class="text-input" v-model="course.dept" type="text" id="dept">
        <br>
        Course Number:
        <input class="text-input" v-model="course.courseNum" type="text" id="courseNum">
        <br>
        Level:
        <input class="text-input" v-model="course.level" type="text" id="level">
        <br>
        Hours:
        <input class="text-input" v-model="course.hours" type="text" id="hours">
        <br>
        Name:
        <input class="text-input" v-model="course.name" type="text" id="name">
        <br>
        Description:
        <input class="text-input" v-model="course.description" type="text" id="description">
        <br>
      </div>
      <input class="text-input" type="submit" name="submit" value="Save">
      <button name="cancel" v-on:click.prevent="cancel()">Cancel</button>
    </form>
  </div>
</template>
<style>
  /* @import '@/assets/styles/basic.css'; */
</style>

<script>
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