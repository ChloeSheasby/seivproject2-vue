<!--<template src="./templates/course-list.html"></template>-->
<template>
  <div>
    <!--<UserDisplay></UserDisplay>-->
    <h1>Course List with Vue</h1>
    <router-link to="/add">Add</router-link>
    <button name="previous" v-on:click.prevent="getPrevious()">Previous</button>
    <button name="next" v-on:click.prevent="getNext()">Next</button>
    <CourseDisplay v-for="course in courses" :key="course.courseID" :course="course"/>
  </div>
</template>

<style>
  @import './assets/styles/basic.css';
</style>

<script>
  import CourseDisplay from '@/components/CourseDisplay.vue'
  import CourseServices from '@/services/services.js'
  //import UserDisplay from '@/components/UserDisplay.vue'

  export default {
    name: 'App',
    components: {
      CourseDisplay
    },
    data() {
      return {
        courses: [],
        start: 1,
        length: 100
      }
    },
    created() {
      this.getCourses(this.start, this.length);
    },
    methods: {
      getCourses(start, length) {
        CourseServices.getCourses(start, length)
        .then(response => {
          this.courses = response.data;
        })
        .catch(error => {
          console.log("There was an error:", error.response)
        });
      },
      getPrevious() {
        if(this.start >= this.length) {
          this.start -= this.length;
          this.getCourses(this.start, this.length);
        }
      },
      getNext() {
        if(this.courses.length === this.length) {
          this.start += this.length;
          this.getCourses(this.start, this.length);
        }
      }
    }
  }
</script>