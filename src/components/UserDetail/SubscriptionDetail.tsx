import { useParams } from "react-router-dom";

import "./subscriptiondetail.css";
import useFetchJson from "../../hooks/fetchJson";
import { SubscriptionType } from "../../types/subscription";

const SubscriptionDetail = () => {
  const {
    data: subscriptions,
    isLoading,
    error,
  } = useFetchJson<SubscriptionType[]>("/subscriptions.json");

  const { id } = useParams();

  const subscriptionDetail = subscriptions?.filter(
    (subs) => Number(subs.user_id) == Number(id)
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="detail">
      {subscriptionDetail && subscriptionDetail.length > 0 ? (
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

export default SubscriptionDetail;
