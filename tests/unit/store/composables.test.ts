import { useStore } from "vuex";
jest.mock("vuex");

import {
  useFilteredJobs,
  useUniqueJobTypes,
  useUniqueDegrees,
  useUniqueOrganizations,
  useFetchJobsDispatch,
  useFetchDegreesDispatch
} from "@/store/composables";

const useStoreMock = useStore as jest.Mock;

describe("composables", () => {
  describe("useFilteredJobs", () => {
    it("retrives filtered jobs from store", () => {
      useStoreMock.mockReturnValue({
        getters: {
          FILTERED_JOBS: [{ id: 1 }],
        },
      });
      const result = useFilteredJobs();
      expect(result.value).toEqual([{ id: 1 }]);
    });
  });
  describe("useUniqueJobTypes", () => {
    it("retrives unique job types from store", () => {
      useStoreMock.mockReturnValue({
        getters: {
          UNIQUE_JOB_TYPES: new Set(["Full-time"]),
        },
      });
      const result = useUniqueJobTypes();
      expect(result.value).toEqual(new Set(["Full-time"]));
    });
  });
  describe("useUniqueOrganizations", () => {
    it("retrives unique organization from store", () => {
      useStoreMock.mockReturnValue({
        getters: {
          UNIQUE_ORGANIZATIONS: new Set(["Google"]),
        },
      });
      const result = useUniqueOrganizations();
      expect(result.value).toEqual(new Set(["Google"]));
    });
  });

  describe("useUniqueDegrees", () => {
    it("retrives unique degrees from store", () => {
      useStoreMock.mockReturnValue({
        getters: {
          UNIQUE_DEGREES: new Set(["Master's"]),
        },
      });
      const result = useUniqueDegrees();
      expect(result.value).toEqual(new Set(["Master's"]));
    });
  });

  describe("useFetchJobsDispatch", () => {
    it("sends call to fetch jobs from API", () => {
      const dispatch = jest.fn();
      useStoreMock.mockReturnValue({
        dispatch,
      });
      useFetchJobsDispatch();
      expect(dispatch).toHaveBeenCalledWith("FETCH_JOBS");
    });
  });
  describe("useFetchDegreessDispatch", () => {
    it("sends call to fetch degree from API", () => {
      const dispatch = jest.fn();
      useStoreMock.mockReturnValue({
        dispatch,
      });
      useFetchDegreesDispatch();
      expect(dispatch).toHaveBeenCalledWith("FETCH_DEGREES");
    });
  });
});
