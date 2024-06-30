import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

import { Usertype } from "../../types/user";
import useFetchJson from "../../hooks/fetchJson";
import { SubscriptionType } from "../../types/subscription";

function PieChart() {
  const { data: SubscribedUserData } = useFetchJson<SubscriptionType[]>(
    "/subscriptions.json"
  );

  const {
    data: TotalUserData,
    isLoading,
    error,
  } = useFetchJson<Usertype[]>("/users.json");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const subscribedUserCount =
    SubscribedUserData?.map((data) => data.id)?.length ?? 0;
  const TotalUserCount = TotalUserData?.map((data) => data.id)?.length ?? 0;
  const unSubscribedUserCount = TotalUserCount - subscribedUserCount;

  const userData = {
    labels: [" Subscribed", "Total", "Not Subscribed"],
    datasets: [
      {
        label: "Users",
        data: [subscribedUserCount, TotalUserCount, unSubscribedUserCount],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  return <Chart type="pie" data={userData} />;
}

export default PieChart;
