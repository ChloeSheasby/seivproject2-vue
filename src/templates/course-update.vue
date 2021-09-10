<template>
  <div>
    <UserDisplay></UserDisplay>
    <H1>Course Edit</H1>
    <p>{{message}}</p>
    <h2>Editing {{ this.course.name}}</h2>

    <form @submit.prevent="updateList">
      Name:
      <input v-model="list.name" type="text" id="id" />
      <input type="submit" name="submit" value="Save" />
      <button name="cancel" v-on:click.prevent="cancel()">Cancel</button>
    </form>
    <button name="addCourse" v-on:click.prevent="addForm()">Add Course</button>
        <table class="center">
      <ListCourseDisplay
      v-for="item in courses"
      :key="item.id"
      :item="item"
      @deletecourse="deleteCourse(course.id)"
      @updatecourse="updateCourse(course)"
      />
      <ListCourseAdd v-if="addCourseDisplay" @addCourse="addCourse"/>
    </table>
  </div>
</template>

<script>
import CourseServices from "@/services/services.js";
import UserDisplay from "@/components/UserDisplay.vue";
import ListCourseDisplay from "@/components/ListCourseDisplay.vue";
import ListCourseAdd from "@/components/ListCourseAdd.vue";

export default {
  props: ['id'],
  components: {
    UserDisplay,
    ListCourseDisplay,
    ListCourseAdd
  },

  data() {
    return {
      list: {},
      courses:{},
      message: "Make updates to the List",
      addCourseDisplay : false
    }
  },
  created() {
    CourseServices.getList(this.id)  
      .then(response => {
        this.list = response.data.list;
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      });
    CourseServices.getListCourses(this.id)  
      .then(response => {
        this.courses = response.data.courses;
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      });
  },

  methods: {
    addForm(){
      this.addCourseDisplay = true;
    },
    updateList() {
      CourseServices.updateList(this.id, this.list)
        .then (() => {
          this.$router.push({ name: "list"});
        })
        .catch(error => {
          console.log(error);
        });
    },
    cancel() {
      this.$router.push({ name: 'list' })
    },

    updateCourse(course){
      CourseServices.updateListCourse(this.id, course.id, course)
        .catch(error => {
          this.messsage = error.response.data.message;
        })
    },

    deleteCourse(id){
      CourseServices.deleteListCourse(this.id, id)
        .then(() => {
          this.courses.forEach((course, i)=> {
            if (course.id == id) {
              this.courses.splice(i, 1);
            }
          });
        })
        .catch(error => {
          this.messsage = error.response.data.message;
        })
    },
    addCourse(course){
      CourseServices.addListCourse(this.id, course)
        .then(response => {
          course.id = response.data.id;
          this.courses.push(course);
          this.addCourseDisplay = false;
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
}
</script>