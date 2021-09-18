<template>
  <div>
    <input
      class="text-input"
      type="text"
      v-model="search"
      placeholder="Search by department..."
    />
    <br />
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
        <CourseDisplay
          v-for="course in filteredCourses"
          :key="course.courseID"
          :course="course"
          @delete-course="deleteCourse"
        />
  </div>
</template>

<style>
@import "../assets/styles/basic.css";
</style>

<script>
import CourseDisplay from "@/components/CourseDisplay.vue";
import CourseServices from "@/services/services.js";
//import UserDisplay from '@/components/UserDisplay.vue'
export default {
  name: "App",
  components: {
    CourseDisplay,
  },
  data() {
    return {
      search: "",
      courses: [],
    };
  },
  created() {
    this.getAllCourses();
  },
  methods: {
    getAllCourses() {
      CourseServices.getAllCourses()
        .then((response) => {
          this.courses = response.data;
        })
        .catch((error) => {
          console.log("There was an error:", error.response);
        });
    },
    deleteCourse(id, courseName) {
      let confirmed = confirm(`Are you sure you want to delete ${courseName}`);
      if (confirmed) {
        CourseServices.deleteCourse(id)
          .then(() => {
            this.getAllCourses();
          })
          .catch((error) => {
            console.log("There was an error:", error.response);
          });
      }
    },
  },
  computed: {
    filteredCourses() {
      return this.courses.filter((course) => {
        return course.dept.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>