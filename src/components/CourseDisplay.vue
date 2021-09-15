<template>
    <div>
        <router-link :to="{ name: 'Course', params: { id: course.courseID } }">
            <span>{{ course.courseNum }} {{ course.name }} (</span>
        </router-link>
        <router-link :to="{ name: 'edit', params: { id: course.courseID } }">
            <span>edit </span>
        </router-link>
        <span>|</span>
        <a href = "#" @click="deleteCourse(course.courseID, course.name)">
            <span> delete</span>
        </a>
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