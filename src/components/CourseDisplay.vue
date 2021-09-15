<template>
    <div>
        <span>{{ course.courseNum }} {{ course.name }} (</span>
        <router-link :to="{ name: 'edit', params: { id: course.courseID } }">
            <span>edit </span>
        </router-link>
        <span>|</span>
        <a href = "#" @click="deleteCourse(course.courseID, course.name)">
            <span> delete</span>
        </a>
        <!-- <button name="delete" v-on:click.prevent="deleteCourse(course.courseID)">delete </button> -->
        <span>)</span>
    </div>
</template>

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