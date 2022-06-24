import { GlobalState } from "@/store/types";
import { Job, Degree } from "@/api/types";
import {
  LOGIN_USER,
  RECEIVE_JOBS,
  RECEIVE_DEGREES,
  ADD_SELECTED_ORGANIZATIONS,
  ADD_SELECTED_JOB_TYPES,
  ADD_SELECTED_DEGREES,
  CLEAR_USER_JOB_FILTER_SELECTIONS,
  UPDATE_SKILLS_SEARCH_TERM,
} from "@/store/constants";

const mutations = {
  [LOGIN_USER](state: GlobalState) {
    state.isLoggedIn = true;
  },
  [RECEIVE_JOBS](state: GlobalState, jobs: Job[]) {
    state.jobs = jobs;
  },

  [RECEIVE_DEGREES](state: GlobalState, degrees: Degree[]) {
    state.degrees = degrees;
  },
  [ADD_SELECTED_ORGANIZATIONS](
    state: GlobalState,
    selectedOrganizations: string[]
  ) {
    state.selectedOrganizations = selectedOrganizations;
  },
  [ADD_SELECTED_JOB_TYPES](state: GlobalState, jobTypes: string[]) {
    state.selectedJobTypes = jobTypes;
  },
  [ADD_SELECTED_DEGREES](state: GlobalState, degrees: string[]) {
    state.selectedDegrees = degrees;
  },
  [CLEAR_USER_JOB_FILTER_SELECTIONS](state: GlobalState) {
    state.selectedOrganizations = [];
    state.selectedJobTypes = [];
    state.selectedDegrees = [];
    state.skillsSearchTerm = "";
  },
  [UPDATE_SKILLS_SEARCH_TERM](state: GlobalState, skillsSearchTerm: string) {
    state.skillsSearchTerm = skillsSearchTerm;
  },
};

export default mutations;
