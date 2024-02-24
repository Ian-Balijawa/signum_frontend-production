import ContactContent from "@/containers/ContactUs";
import SEO from "@/components/SEO";
import { sitePaths, BASE_URL } from "@/constants/sitepaths";

function ContactUs() {
  return (
    <>
      <>
        <SEO
          title={`SIGNUM ADVOCATES | ${sitePaths.ContactUs.name}`}
          description={sitePaths.ContactUs}
          websiteUrl={`${BASE_URL}${sitePaths.ContactUs.path}`}
        />
        <ContactContent />
      </>
    </>
  );
}

export default ContactUs;
