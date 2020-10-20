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
  offerIds?: Array<string>;
}

const User: React.FC<Props> = ({ id, badges, offers, offerIds }) => {

  console.log(id, badges, offers, offerIds);

  return <div>
    <ul>
      <li>{ id }</li>
      <li>Badges:</li>
      <ul>
        { !!badges.length && badges.split('||').map( (badge, i) => <li key={i}>{ badge }</li> )}
      </ul>
      <li>Offers:</li>
      <ul>
        { !!offers.length && offers.map( offer => <li key={offer.id}>{`${offer.id}: ${offer.title}`}</li> )}
      </ul>
    </ul>

    {/* <img src={`/gonesoon_icon.jpg`} />
    <img src={`/loyalty_icon.jpg`} />
    <img src={`/sale_icon.jpg`} /> */}

  </div>
}

export default User;