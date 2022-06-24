import axios from "axios";
jest.mock("axios");

const axiosGetMock = axios.get as jest.Mock;

import getJobs from "@/api/getJobs";
beforeEach(() => {
  axiosGetMock.mockResolvedValue({
    data: [
      {
        id: 1,
        title: "Java Engineer",
      },
    ],
  });
});
describe("getJobs", () => {
  it("fetches jobs that candidates can apply to", async () => {
    await getJobs();
    expect(axios.get).toHaveBeenCalledWith("http://myfakeapi.com/jobs");
  });

  it("extract jobs from response", async () => {
    const data = await getJobs();
    expect(data).toEqual([
      {
        id: 1,
        title: "Java Engineer",
      },
    ]);
  });
});
