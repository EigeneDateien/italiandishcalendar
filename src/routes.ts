import { createHashRouter } from "react-router";
import { Root } from "./components/Root";
import { TodaysDish } from "./pages/TodaysDish";
import { MonthlyOverview } from "./pages/MonthlyOverview";
import { DishPage } from "./pages/DishPage";

export const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: TodaysDish,
      },
      {
        path: "month",
        Component: MonthlyOverview,
      },
      {
        path: "dish/:dayId",
        Component: DishPage,
      },
    ],
  },
]);
