import SEO from '@/components/SEO';
import CSRContent from '@/containers/CSR';
import { sitePaths, BASE_URL } from '@/constants/sitepaths';

function CSR() {
  return (
    <>
      <SEO
        title={`SIGNUM ADVOCATES | ${sitePaths.CSR.name}`}
        description={sitePaths.CSR.longDesc}
        websiteUrl={`${BASE_URL}${sitePaths.CSR.path}`}
      />
      <CSRContent />
    </>
  );
}

//export async function getServerSideProps() {}

export default CSR;
