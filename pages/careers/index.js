import SEO from '@/components/SEO';
import Careercontent from '@/containers/Careers';
import Careermodal from '@/containers/Careers/components/Careermodal';
import { useState } from 'react';
import { sitePaths, BASE_URL } from '@/constants/sitepaths';
import {
  FetchFunctions,
  teamMemberEndpoints,
  TEAM_MEMBER_ROLES,
} from '../../beConstants';

function Careers({ teamMembers }) {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <>
      <SEO
        title={`SIGNUM ADVOCATES | ${sitePaths.Careers.name}`}
        description={sitePaths.Careers.longDesc}
        websiteUrl={`${BASE_URL}${sitePaths.Careers.path}`}
      />
      <Careercontent
        onButtonClick={handleButtonClick}
        teamMembers={teamMembers}
      />
      {showModal && <Careermodal onClose={handleButtonClick} />}
    </>
  );
}

export async function getServerSideProps() {
  const PartnersUrl = teamMemberEndpoints.getByRole(TEAM_MEMBER_ROLES.Lawyer);
  // const PartnersUrl = `${teamMemberEndpoints.getAll}?limit=20`;

  const PartnersData = await FetchFunctions.getData(PartnersUrl);

  const teamMembers = PartnersData?.data || [];

  return {
    props: {
      teamMembers,
    },
  };
}

// export async function getServerSideProps() {}

export default Careers;
