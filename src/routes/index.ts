import { ErpController } from "../controllers/erpController";
import { HisController } from "../controllers/hisController";

const hisRoutes = [
  {
    method: "get",
    route: "/his/getPerson",
    controller: HisController,
    action: "getPersonHis",
  },
];

const erpRoutes = [
    {
      method: "get",
      route: "/erp/getSomething",
      controller: ErpController,
      action: "getSomething",
    },
  ];

export const Routes = [...hisRoutes,...erpRoutes];
