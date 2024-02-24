import AboutContent from "@/containers/AboutUs";
import SEO from "@/components/SEO";
import { sitePaths, BASE_URL } from "@/constants/sitepaths";

function AboutUs() {
  return (
    <>
      <SEO
        title={`SIGNUM ADVOCATES | ${sitePaths.AboutUs.name}`}
        description={sitePaths.AboutUs.longDesc}
        websiteUrl={`${BASE_URL}${sitePaths.AboutUs.path}`}
      />
      <AboutContent />
    </>
  );
}

export default AboutUs;
