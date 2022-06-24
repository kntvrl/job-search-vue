<template>
  <JobFiltersSidebarCheckboxGroup
    :unique-values="uniqueOrganizations"
    :mutation="ADD_SELECTED_ORGANIZATIONS"
    data-test="job-organizations-filter"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useUniqueOrganizations } from "@/store/composables";
import { ADD_SELECTED_ORGANIZATIONS } from "@/store/constants";
import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebarCheckboxGroup.vue";

export default defineComponent({
  name: "JobFiltersSidebarOrganizations",
  components: {
    JobFiltersSidebarCheckboxGroup,
  },
  setup() {
    const uniqueOrganizations = useUniqueOrganizations();
    return {
      uniqueOrganizations,
      ADD_SELECTED_ORGANIZATIONS,
    };
  },
});
</script>
