<template>
  <div>
    <!--<UserDisplay></UserDisplay>-->
    <h3 class='name-tag'>Add Course</h3>

    <form @submit.prevent="addCourse">
      
      <div class="text-input-group">
              <input
                class="text-input"
                v-model="course.dept"
                type="text"
                id="dept"
                placeholder="Department Name"
              />
              <br>
              <input
                class="text-input"
                v-model="course.courseNum"
                type="text"
                id="courseNum"
                placeholder="Course Number"
              />
              <br>
              <input
                class="text-input"
                v-model="course.level"
                type="text"
                id="level"
                placeholder="Level"
              />
              <br>
              <input
                class="text-input"
                v-model="course.hours"
                type="text"
                id="hours"
                placeholder="Hours"
              />
              <br>
              <textarea
                class="textarea-input"
                v-model="course.description"
                type="textarea"
                rows='4'
                id="description"
                placeholder="Description...">
              </textarea>
      </div>
      
            <div class="text-input-group">
              <table class='center transparent-background' width='100%'>
                <tr>
                  <td style='text-align: right;'><button name="cancel" v-on:click.prevent="cancel()">Cancel</button></td>
                  <td style='text-align: left;'><input type="submit" name="submit" value="Save"></td>
                </tr>
              </table>
            </div>
    </form>
  </div>
</template>
<style>
@import "../assets/styles/basic.css";
</style>

<script>
import CourseServices from "@/services/services.js";
export default {
  data() {
    return {
      course: {},
    };
  },
  methods: {
    addCourse() {
      CourseServices.addCourse(this.course)
        .then(() => {
          this.$router.push({ name: "List" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    cancel() {
      this.$router.push({ name: "List" });
    },
  },
};
</script>