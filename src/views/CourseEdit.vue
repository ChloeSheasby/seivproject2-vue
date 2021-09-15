<template>
  <div>
    <!--<UserDisplay></UserDisplay>-->
    <h3>Editing {{ this.course.name }} </h3>

    <form @submit.prevent="updateCourse">
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
import CourseServices from "@/services/services.js";

export default {
  props: ['id'],

  data() {
    return {
      course: {},
      message: "Make updates to the Course",
    }
  },
  created() {
    CourseServices.getCourse(this.id)  
      .then(response => {
        this.course = response.data;
        console.log(response.data);
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      });
  },

  methods: {
    updateCourse() {
      CourseServices.updateCourse(this.id, this.course)
        .then (() => {
          this.$router.go(-1)
        })
        .catch(error => {
          console.log(error);
        });
    },
    cancel() {
      this.$router.go(-1)
    }
  }
}
</script>