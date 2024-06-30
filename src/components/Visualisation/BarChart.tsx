import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

import useFetchJson from "../../hooks/fetchJson";
import { SubscriptionType } from "../../types/subscription";

ChartJS.register(CategoryScale, Tooltip, Legend, LinearScale, BarElement);

function BarChart() {
  const { data: SubscribedUserData } = useFetchJson<SubscriptionType[]>(
    "/subscriptions.json"
  );
  if (!SubscribedUserData) {
    console.error("No subscription data available.");
    return null;
  }

  const planCount = SubscribedUserData?.reduce(
    (acc: Record<string, number>, obj) => {
      const plan = obj.package;
      acc[plan] = (acc[plan] || 0) + 1;
      return acc;
    },
    {}
  );
  const plan1 = planCount["Plan 1"];
  const plan2 = planCount["Plan 2"];
  const plan3 = planCount["Plan3"];
  const plan4 = planCount["Plan 6"];
  const plan5 = planCount["Plan 12"];
  const plan_unlimited = planCount["Plan Unlimited"];

  const userData = {
    labels: [
      " Plan 1",
      "Plan 2",
      "Plan 3",
      "Plan 6",
      "plan 12",
      "Plan unlimited",
    ],
    datasets: [
      {
        label: "Plan Subscribed",
        data: [plan1, plan2, plan3, plan4, plan5, plan_unlimited],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(75,192,192,1)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(172, 99, 255, 0.584)",
          "rgba(214, 204, 18, 0.584)",
          "rgba(13, 216, 84, 0.2)",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  return <Chart type="bar" data={userData} />;
}

export default BarChart;
