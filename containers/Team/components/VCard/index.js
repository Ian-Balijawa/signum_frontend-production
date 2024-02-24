import React, { useRef, useEffect, useState } from 'react';
import vCard from 'vcf';

const VCard = ({ teamMember, children }) => {
  const cardRef = useRef(null);
  const [vCardFile, setVCardFile] = useState(null);

  const generateVCard = () => {
    const card = new vCard();

    const nameArray = teamMember?.name?.split(' ');
    const firstName = nameArray[0] || '';
    const lastName = nameArray[nameArray?.length - 1 || 0] || '';

    card.add('n', `${lastName};${firstName}`);
    card.add('fn', teamMember?.name); // Full name
    card.add('title', teamMember?.position); // Position
    card.add('email', teamMember?.email); // Email
    card.add('tel', teamMember?.contact); // Phone number
    card.add('org', 'Signum Advocates');

    return card.toString(); // Convert vCard object to string
  };

  useEffect(() => {
    if (teamMember) {
      const vCardData = generateVCard();
      const file = new Blob([vCardData], { type: 'text/vcard' });
      const fileURL = URL.createObjectURL(file);
      setVCardFile(fileURL);
    }
  }, [teamMember]);

  return (
    <a ref={cardRef} href={vCardFile} download={`${teamMember?.name}.vcf`}>
      {children}
    </a>
  );
};

export default VCard;
