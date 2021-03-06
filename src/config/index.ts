type ConfigName = 'chainURL' | 'logMethod';

type Config = {
  logMethod: (message: string) => void;
  chainURL: string;
  apiURL: string;
  mainnet: boolean;
  wasmPath: string;
};

type SetConfigName = {
  logMethod?: (message: string) => void;
  chainURL?: string;
  apiURL?: string;
  mainnet?: boolean;
  wasmPath?: string;
};

// default config
let config: Config = {
  chainURL: null,
  apiURL: null,
  logMethod: console.log,
  mainnet: ENV.MAINNET,
  wasmPath: null
};

export function getConfig() {
  const apiURL = config.apiURL || (config.mainnet ? ENV.DEFAULT_API_URL_MAINNET : ENV.DEFAULT_API_URL_TESTNET);
  const chainURL = config.chainURL || (config.mainnet ? ENV.DEFAULT_CHAIN_URL_MAINNET : ENV.DEFAULT_CHAIN_URL_TESTNET);
  
  return {
    ...config,
    apiURL,
    chainURL
  };
}

export function setConfig(newConfig: SetConfigName) {
  config = {
    ...config,
    ...newConfig,
  };
}
