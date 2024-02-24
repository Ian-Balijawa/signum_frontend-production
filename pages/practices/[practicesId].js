//import Menubar from "@/components/Menubar";
import { DUMMY_PRACTICESCONTENT } from "@/constants/practicesdata";
import SEO from "@/components/SEO";
import SinglePracticeContent from "@/containers/Practices/components/SinglePracticeContent";
import { sitePaths, BASE_URL } from "@/constants/sitepaths";
import {
  practicesEndpoints,
  teamMemberEndpoints,
  FetchFunctions,
} from "../../beConstants";

const singlePractice = ({ practice, practiceNumber, teamMembers }) => {
  console.log("Team members received are", teamMembers);
  return (
    <>
      <SEO
        title={`SIGNUM ADVOCATES | ${sitePaths.Practices.name} | ${
          practice?.title || ""
        }`}
        description={`${practice?.title} at Signum Advocates`}
        websiteUrl={`${BASE_URL}${sitePaths.Practices.path}/${practice?._id}`}
      />
      {/* <Menubar /> */}
      <div>
        <SinglePracticeContent
          practice={practice}
          practiceNumber={practiceNumber}
          teamMembers={teamMembers}
        />
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { params, query } = context;

  const { practiceNumber } = query;
  const { practicesId } = params;

  const [practiceRes, teamMembersRes] = await Promise.all([
    FetchFunctions.getData(practicesEndpoints.get(practicesId)),
    FetchFunctions.getData(teamMemberEndpoints.getByPractice(practicesId)),
  ]);

  const teamMembers = teamMembersRes?.data || [];

  const practice = practiceRes?.result?.[0];
  console.log("data", practiceNumber);
  return {
    props: {
      id: practicesId,
      practice,
      practiceNumber,
      teamMembers,
      // data: article.result[0],
    },
  };
}

export default singlePractice;
