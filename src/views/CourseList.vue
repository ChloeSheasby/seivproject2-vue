<template>
  <div>
    <h3 class='name-tag'>Course List</h3>
    <NavBar />
    <br>
    <CourseDisplay v-for="course in courses" :key="course.courseID" :course="course" @delete-course=deleteCourse />
  </div>
</template>

<style>
  @import '../assets/styles/basic.css';
</style>

<script>
  import CourseDisplay from '@/components/CourseDisplay.vue'
  import NavBar from '@/components/NavBar.vue'
  import CourseServices from '@/services/services.js'
  //import UserDisplay from '@/components/UserDisplay.vue'
  export default {
    name: 'App',
    components: {
      CourseDisplay,
      NavBar
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
      deleteCourse(id, courseName) {
        let confirmed = confirm(`Are you sure you want to delete ${courseName}`);
        if(confirmed) {
          CourseServices.deleteCourse(id)
          .then(() => {
            this.getCourses(this.start, this.length);
          })
          .catch(error => {
            console.log("There was an error:", error.response)
          });
        }
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