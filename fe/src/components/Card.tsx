interface CardProps {
  image: string;
  name: string;
  company: string;
  deliveryDate: string;
  description: string;
  price: number;
  volume: number;
  weight: number;
}
const Card: React.FC<CardProps> = ({
  image,
  name,
  company,
  deliveryDate,
  description,
  price,
  volume,
  weight,
}) => (
  <div className="col-12 col-md-4 col-lg-3 mb-4">
    <div className="profile-card-4 text-center">
      <img src={image} alt={name} className="img img-responsive" />
      <div className="profile-content">
        <div className="profile-name">
          {name}
          <p>{company}</p>
        </div>
        <div className="profile-supplier">
          <p className="small">
            Earliest Delivery:{" "}
            <span className="text-muted">{deliveryDate}</span>
          </p>
        </div>
        <div className="profile-description">{description}</div>
        <div className="row">
          <div className="col-xs-4 col-md-4">
            <div className="profile-overview">
              <p>Price Per Ton</p>
              <h4>{price}</h4>
            </div>
          </div>
          <div className="col-xs-4 col-md-4">
            <div className="profile-overview">
              <p>Offered Volume</p>
              <h4>{volume}</h4>
            </div>
          </div>
          <div className="col-xs-4 col-md-4">
            <div className="profile-overview">
              <p>Distri Weight</p>
              <h4>{weight}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
