<template>
  <div>
    <div class='name-tag'>Course List</div>    
  <div>
    <table class='center transparent-background' width='100%'>
      <tr>
        <td style='padding-left: 25%; text-align: left;'><button class='arrows' name="previous" v-on:click.prevent="getPrevious()">&#60;</button></td>
        <td style='padding-right: 25%; text-align: right;'><button class='arrows' name="next" v-on:click.prevent="getNext()">&#62;</button></td>
      </tr>
    </table>
  </div>
    <br>
        <table width='100%'>
          <thead>
            <tr>
              <th width='20%'>
                  Course Number
              </th>
              <th width='40%'>
                  Course Name
              </th>
              <th width='10%'></th>
              <th width='10%'></th>
            </tr>
          </thead>
        </table>
        <CourseDisplay v-for="course in courses" :key="course.courseID" :course="course" @delete-course=deleteCourse />
  </div>
</template>

<style>
  @import '../assets/styles/basic.css';
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