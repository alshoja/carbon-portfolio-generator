import React from 'react';

export interface CardProps {
  id: number;
  allocatedTons: number;
  country: string;
  description: string;
  distributionWeight: number;
  earliestDelivery: string;
  image: string;
  name: string;
  offeredVolumeInTons: number;
  pricePerTon: number;
  summary?: string;
  supplierName?: string;
}

const Card: React.FC<CardProps> = ({
  image,
  name,
  allocatedTons,
  country,
  description,
  distributionWeight,
  earliestDelivery,
  offeredVolumeInTons,
  pricePerTon,
  supplierName,
}) => (
  <div className="col-12 col-md-4 col-lg-3 mb-4">
    <div className="project-card-4 text-center">
      <div className="img-responsive">
        <img style={{ width: "100%" }} src={image} className="img" />
      </div>

      <div className="profile-content">
        <div className="profile-name">
          {name}
          <p>
            {supplierName} ({country})
          </p>
        </div>
        <div className="profile-supplier">
          <p className="small">
            Earliest Delivery:
            <span className="text-muted"> {earliestDelivery}</span>
          </p>
        </div>
        <div className="profile-description">{description}</div>
        <div className="row">
          <div className="col-xs-3 col-md-3">
            <div className="profile-overview">
              <p>Price Per Ton</p>
              <h4>{pricePerTon}</h4>
            </div>
          </div>
          <div className="col-xs-3 col-md-3">
            <div className="profile-overview">
              <p>Offered Volume</p>
              <h4>{offeredVolumeInTons}</h4>
            </div>
          </div>
          <div className="col-xs-3 col-md-3">
            <div className="profile-overview">
              <p>Distri Weight</p>
              <h4>{distributionWeight}</h4>
            </div>
          </div>
          <div className="col-xs-3 col-md-3">
            <div className="profile-overview ">
              <p>Credits Allocated</p>
              <h4 className="text-success">{allocatedTons}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
