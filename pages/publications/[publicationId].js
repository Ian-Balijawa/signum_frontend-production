import { DUMMY_PUBLICATESINFO } from "@/constants/publicationdata";
import SinglePublicationContent from "@/containers/Publications/components/SinglePublicationContent";

const singlePublication = ({ publication }) => {
  console.log(publication);
  return (
    <>
      <div>
        <SinglePublicationContent publication={publication} />
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const paths = DUMMY_PUBLICATESINFO.map((publication) => {
    return {
      params: { publicationId: publication.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.publicationId;

  const publication = DUMMY_PUBLICATESINFO.find(
    (publication) => publication.id === id
  );
  return {
    props: { publication },
  };
};

export default singlePublication;
