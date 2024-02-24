import Navbar from '@/components/Navbar';
import TeamTabs from '@/containers/Team/components/NavTab';
import {
  FetchFunctions,
  teamMemberEndpoints,
  TEAM_MEMBER_ROLES,
} from '../../beConstants';
import { getData } from '@/utils/fetchFunctions';
import SEO from '@/components/SEO';
import { sitePaths, BASE_URL } from '@/constants/sitepaths';

function Team({ teamMembers }) {
  return (
    <>
      <SEO
        title={`SIGNUM ADVOCATES | ${sitePaths.Team.name}`}
        description={sitePaths.Team.longDesc}
        websiteUrl={`${BASE_URL}${sitePaths.Team.path}`}
      />
      <Navbar />
      <TeamTabs teamMembers={teamMembers} />
    </>
  );
}

export async function getServerSideProps() {
  const defaultLimit = 20;
  const PartnersUrl = teamMemberEndpoints.getByRole(
    TEAM_MEMBER_ROLES.Partner,
    defaultLimit,
  );
  const LawyersUrl = teamMemberEndpoints.getByRole(
    TEAM_MEMBER_ROLES.Lawyer,
    defaultLimit,
  );
  const AdministratorsUrl = teamMemberEndpoints.getByRole(
    TEAM_MEMBER_ROLES.Administrator,
    defaultLimit,
  );

  const [PartnersData, LawyersData, AdminsData] = await Promise.all([
    FetchFunctions.getData(PartnersUrl),
    FetchFunctions.getData(LawyersUrl),
    FetchFunctions.getData(AdministratorsUrl),
  ]);
  console.log('PartnersData', PartnersData);
  const teamMembers = {
    Partners: PartnersData?.data || [],
    Lawyers: LawyersData?.data || [],
    Administrators: AdminsData?.data || [],
  };

  console.log('teamMembers', teamMembers);
  return {
    props: {
      teamMembers,
    },
  };
}

export default Team;
