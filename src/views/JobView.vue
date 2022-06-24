<template>
  <div>Job Page for job {{ currentJobId }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {useRoute} from "vue-router";
export default defineComponent({
  name: "JobView",
  setup(){
    const router = useRoute();
    const currentJobId = router.params.id;
    return{currentJobId}
  }
});
</script>
