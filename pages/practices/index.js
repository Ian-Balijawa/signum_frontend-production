import SEO from '@/components/SEO';
import SinglePracticesContent from '@/containers/Practices';
import { sitePaths, BASE_URL } from '@/constants/sitepaths';
import { practicesEndpoints, FetchFunctions } from '../../beConstants';

function Practices({ data }) {
  return (
    <>
      <SEO
        title={`SIGNUM ADVOCATES | ${sitePaths.Practices.name}`}
        description={sitePaths.Practices.longDesc}
        websiteUrl={`${BASE_URL}${sitePaths.Practices.path}`}
      />
      <SinglePracticesContent practices={data} />
    </>
  );
}

export async function getServerSideProps() {
  const res = await FetchFunctions.getData(practicesEndpoints.getAll);
  const practices = res?.result || [];

  return { props: { data: practices } };
}

export default Practices;
