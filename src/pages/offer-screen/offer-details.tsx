import { OfferTypeById } from '../../types/offer-types';

type OfferDetails = {
  offer: OfferTypeById;
}


function OfferDetails({offer}: OfferDetails): JSX.Element {
  return(
    <>
      {offer.isPremium && <div className="offer__mark"><span>Premium</span></div>}

      <div className="offer__name-wrapper">
        <h1 className="offer__name">
          {offer.title}
        </h1>
        <button className="offer__bookmark-button button" type="button">
          <svg className="offer__bookmark-icon" width={31} height={33}>
            <use xlinkHref="#icon-bookmark" />
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="offer__rating rating">
        <div className="offer__stars rating__stars">
          <span style={{ width: `${offer.rating * 20}%` }} />
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="offer__rating-value rating__value">{offer.rating}</span>
      </div>
      <ul className="offer__features">
        <li className="offer__feature offer__feature--entire">Apartment</li>
        <li className="offer__feature offer__feature--bedrooms">
          {offer.bedrooms} Bedrooms
        </li>
        <li className="offer__feature offer__feature--adults">
          Max {offer.maxAdults} adults
        </li>
      </ul>
      <div className="offer__price">
        <b className="offer__price-value">€{offer.price}</b>
        <span className="offer__price-text">&nbsp;night</span>
      </div>
      <div className="offer__inside">
        <h2 className="offer__inside-title">What&apos;s inside</h2>
        <ul className="offer__inside-list">
          {offer.goods.map((good) => <li key={good} className="offer__inside-item">{good}</li>)}
        </ul>
      </div>
      <div className="offer__host">
        <h2 className="offer__host-title">Meet the host</h2>
        <div className="offer__host-user user">
          <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
            <img
              className="offer__avatar user__avatar"
              src={offer.host.avatarUrl}
              width={74}
              height={74}
              alt="Host avatar"
            />
          </div>
          <span className="offer__user-name">{offer.host.name}</span>
          {offer.host.isPro && <span className="offer__user-status">Pro</span>}
        </div>
        <div className="offer__description">
          <p className="offer__text">
            {offer.description}
          </p>
        </div>
      </div>
    </>
  );
}

export default OfferDetails;
