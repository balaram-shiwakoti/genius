import { useParams } from "react-router-dom";

import subscriptions from "../data/subscriptions.json";

const USerDetail = () => {
  const { id } = useParams();

  const subscriptionDetail = subscriptions.filter(
    (subs) => Number(subs.user_id) == Number(id)
  );

  return (
    <div className="detail">
      {subscriptionDetail.length > 0 ? (
        <div className="detail-container">
          <p>User ID: {subscriptionDetail[0].user_id}</p>
          <p>Package : {subscriptionDetail[0].package}</p>
          <p>Expires on: {subscriptionDetail[0].expires_on}</p>
        </div>
      ) : (
        <p>No subscription found with the given ID.</p>
      )}
    </div>
  );
};

export default USerDetail;
