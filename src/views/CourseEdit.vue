<template>
  <div>
    <!--<UserDisplay></UserDisplay>-->
    <h3 class="name-tag">Editing {{ this.course.name }}</h3>

    <form @submit.prevent="updateCourse">

      <div class="text-input-group">
              <div class='input-label'>Department Name</div>
              <input
                class="text-input"
                v-model="course.dept"
                type="text"
                id="dept"
                placeholder="Department Name"
              />
              <br>
              <div class='input-label'>Course Number</div>
              <input
                class="text-input"
                v-model="course.courseNum"
                type="text"
                id="courseNum"
                placeholder="Course Number"
              />
              <br>
              <div class='input-label'>Level</div>
              <input
                class="text-input"
                v-model="course.level"
                type="text"
                id="level"
                placeholder="level"
              />
              <br>
              <div class='input-label'>Hours</div>
              <input
                class="text-input"
                v-model="course.hours"
                type="text"
                id="hours"
                placeholder="Hours"
              />
              <br>
              <div class='input-label'>Description</div>
              <textarea
                class="textarea-input"
                v-model="course.description"
                type="textarea"
                rows='4'
                id="description"
                placeholder="Description...">
              </textarea>
      </div>
      <input type="submit" name="submit" value="Save" />
      <button name="cancel" v-on:click.prevent="cancel()">Cancel</button>
    </form>
  </div>
</template>
<style>
@import "../assets/styles/basic.css";
</style>

<script>
import CourseServices from "@/services/services.js";

export default {
  props: ["id"],

  data() {
    return {
      course: {},
      message: "Make updates to the Course",
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
    updateCourse() {
      CourseServices.updateCourse(this.id, this.course)
        .then(() => {
          this.$router.go(-1);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    cancel() {
      this.$router.go(-1);
    },
  },
};
</script>