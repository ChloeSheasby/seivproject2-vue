<template>
    <div>
        <table width='100%'>
        <tr width='100%'>
            <td width='20%'>
                {{ course.courseNum }}
            </td>
            <td width='20%'>
            <router-link :to="{ name: 'Course', params: { id: course.courseID } }"  class='edit-btn'>
                {{ course.name }}
                <div id="myId" ref="myId">{{ message }}</div>
            </router-link>
            </td>
            <td width='40%'>
                {{ course.description }}
            </td>
            <td width='10%'>
                <router-link :to="{ name: 'edit', params: { id: course.courseID } }"  class='edit-btn'>
                    <span>edit </span>
                </router-link>
            </td>
            <td width='10%'>
                <a  class='delete-btn' href = "#" @click="deleteCourse(course.courseID, course.name)">
                    <span> delete</span>
                </a>
            </td>
        </tr>
        </table>
    </div>
</template>
<style>
  @import '../assets/styles/course-list.css';
</style>

<script>
    export default {
        props: {
            course: Object
        },
        methods: {
            deleteCourse(id, courseName) {
                this.$emit('delete-course', id, courseName);
            },
        }
    }
</script>