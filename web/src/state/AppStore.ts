import { Store } from "pullstate";

export enum EProgress {
  P0_CONNECT_NETWORK,
  P1_SEND_AMOUNT,
}

interface IPortalFormInputs {
  progress: EProgress;
  amount: number;
  symbol?: string;
}

interface IAppStore {
  formInputs: IPortalFormInputs;
}

export const AppStore = new Store<IAppStore>({
  formInputs: {
    progress: EProgress.P0_CONNECT_NETWORK,
    amount: 0,
  },
});
