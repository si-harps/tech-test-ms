import styles from "./User.module.css";

interface Offer {
  id: string,
  title: string,
  type: string
}

interface Props {
  id: string;
  badges: string;
  offers?: Offer[];
  offerIds?: string[];
  mockedOfferIds?: string[];
}

const User: React.FC<Props> = ({ id, badges, offers, offerIds, mockedOfferIds }) => {
  
  const labels = {};
  const renderedBadges = [];
  const decodedBadges: string[] = badges.split('||');

  for (let badge of decodedBadges) {

    let parts = badge.split(':');

    for (let label of parts[1].split(',')) {
      labels[label] = parts[0];
    }
  }

  for(let offer of offers) {

    if (~mockedOfferIds.indexOf(offer.id) && labels[offer.type]) {
      renderedBadges.push(labels[offer.type])
    }
  }

  return <div className={styles.user}>
    { [...new Set(renderedBadges)].map( (type, i) => <span key={i} className="">
      <img src={`/${type}_icon.jpg`} /> 
    </span>)}
  </div>
}

export default User;