import React from 'react';
import vCard  from 'vcf';

type Props = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

const VCardGenerator: React.FC<Props> = ({ firstName, lastName, email, phoneNumber }) => {
  const generateVCard = () => {
    const card = new vCard();

    card.add('n', `${lastName};${firstName}`);
    card.add('fn', `${firstName} ${lastName}`);
    card.add('email', email);
    card.add('tel', phoneNumber);

    // Générer un lien pour télécharger la vCard
    const blob = new Blob([card.toString()], { type: 'text/vcard' });
    const href = URL.createObjectURL(blob);
    return href;
  };

  return (
    <div>
      <h1>Votre vCard</h1>
      <p>Nom: {firstName} {lastName}</p>
      <p>Email: {email}</p>
      <p>Téléphone: {phoneNumber}</p>
      <a href={generateVCard()} download="contact.vcf">Télécharger vCard</a>
    </div>
  );
};

export default VCardGenerator;
