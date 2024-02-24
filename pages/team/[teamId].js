import {
  DUMMY_TEAMINFO,
  DUMMY_TEAMINFO_ADMIN,
  DUMMY_TEAMINFO_LAWYERS,
} from '@/constants/teamdata';
import TeamProfileContent from '@/containers/Team';
import Link from 'next/link';
import styles from './style.module.css';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { teamMemberEndpoints, FetchFunctions } from '../../beConstants';
import SEO from '@/components/SEO';
import { sitePaths, BASE_URL } from '@/constants/sitepaths';

const TeamProfile = ({ teamMember, nextTeamMemberId }) => {
  //   return null;
  return (
    <>
      <SEO
        title={`SIGNUM ADVOCATES | ${sitePaths.Team.name} | ${teamMember.name}`}
        description={sitePaths.Team.longDesc}
        websiteUrl={`${BASE_URL}${sitePaths.Team.path}`}
      />
      <TeamProfileContent teamMember={teamMember} />
      <div className={styles.nextPage}>
        <h3>Want to see more?</h3>
        <hr />
        <article>
          <Link href={`/team`}>More team members</Link>
          <button>
            <MdKeyboardDoubleArrowRight />
          </button>
        </article>
      </div>
    </>
  );
};
export async function getServerSideProps(context) {
  const { params, query } = context;

  const { teamId } = params;

  const res = await FetchFunctions.getData(teamMemberEndpoints.get(teamId));
  const teamMember = res?.data;
  console.log('team member found is ', res?.data);
  return {
    props: {
      id: teamId,
      teamMember,
      // data: article.result[0],
    },
  };
}

export default TeamProfile;
