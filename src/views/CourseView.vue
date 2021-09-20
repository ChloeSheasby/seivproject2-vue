<template>
  <div style="">
    <div style="margin-left: 32%; text-align: left">
      <div style='padding-left: 2%;'>
      <h3>Viewing Course {{ this.course.name }}</h3>
      </div>
      <div style='padding-left: 1%;'>
        <button name="back" v-on:click.prevent="cancel()">Back</button>
        <span> &nbsp; </span>
        <button name="edit" v-on:click.prevent="toEdit()">Edit</button>
        <span> &nbsp; </span>
        <button
          name="delete"
          v-on:click.prevent="deleteCourse(this.course.courseID, this.course.name)">
          Delete
        </button>
      </div>
      <br />
      <div class="text-input">Department: {{ this.course.dept }}</div>
      <div class="text-input">Course Number: {{ this.course.courseNum }}</div>
      <div class="text-input">Course Level: {{ this.course.level }}</div>
      <div class="text-input">Number of Hours: {{ this.course.hours }}</div>
      <div class="text-input" width="150%">
        Description: {{ this.course.description }}
      </div>
    </div>
  </div>
</template>

<style>
@import "../assets/styles/basic.css";
</style>

<script>
import CourseServices from "@/services/services.js";
//import UserDisplay from '@/components/UserDisplay.vue'
export default {
  props: ["id"],

  data() {
    return {
      course: {},
    };
  },
  created() {
    CourseServices.getCourse(this.id)
      .then((response) => {
        this.course = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log("There was an error:", error.response);
      });
  },
  methods: {
    deleteCourse(id, courseName) {
      let confirmed = confirm(`Are you sure you want to delete ${courseName}`);
      if (confirmed) {
        CourseServices.deleteCourse(id)
          .then(() => {
            this.$router.push({ name: "List" });
          })
          .catch((error) => {
            console.log("There was an error:", error.response);
          });
      }
    },
    cancel() {
      this.$router.go(-1);
    },
    toEdit() {
      this.$router.push({ name: "edit", params: { id: this.course.courseID } });
    },
  },
};
</script>