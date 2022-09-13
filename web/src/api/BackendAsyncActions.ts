import { createAsyncActionWithErrors } from "./asyncActionsUtils";

interface IOGetRates_Input {
  symbol: string;
}

interface IOGetRates_Output {
  crypto_rate: number;
  near_rate: number;
  swap_rate: number;
}

async function GetRates({ symbol }: IOGetRates_Input): Promise<IOGetRates_Output> {
  return {
    crypto_rate: 35.0495,
    near_rate: 4.5874,
    swap_rate: 7.640384531542923,
  };
}

export const BackendAsyncActions = {
  GetRates: createAsyncActionWithErrors(GetRates),
};
