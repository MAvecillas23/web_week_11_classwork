<script setup>
// code goes here
import NewStudentForm from "./components/NewStudentForm.vue";
import StudentTable from "./components/StudentTable.vue";
import StudentMessage from "./components/StudentMessage.vue";




</script>
<template>
  <!--HTML goes here-->
<!--  components. each component has complex code and templates
      components can have other components inside of them as well
      like how StudentTable has StudentRow as the child component -->
  <StudentTable></StudentTable>

  <StudentMessage></StudentMessage>

  <NewStudentForm></NewStudentForm>




</template>
<style scoped>
/* CSS here */



</style>