import SEO from "@/components/SEO";
import PublicationContent from "@/containers/Publications";
import { sitePaths, BASE_URL } from "@/constants/sitepaths";

function Publications() {
  return (
    <>
      <SEO
        title={`SIGNUM ADVOCATES | ${sitePaths.Publications.name}`}
        description={sitePaths.Publications.longDesc}
        websiteUrl={`${BASE_URL}${sitePaths.Publications.path}`}
      />
      <PublicationContent />
    </>
  );
}

export default Publications;
