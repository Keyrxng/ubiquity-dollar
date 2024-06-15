import { JsonRpcProvider, JsonRpcSigner, Web3Provider } from "@ethersproject/providers";
import { useAccount, useSigner } from "wagmi";
import { WagmiConfig, createClient, chain } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { FC, useEffect, useState } from "react";
import { ChildrenShim } from "./children-shim";
// @ts-expect-error - no types
import { RPCHandler } from "@ubiquity-dao/rpc-handler";

const IS_DEV = process.env.NEXT_PUBLIC_NODE_ENV === "development";

export type PossibleProviders = Web3Provider | JsonRpcProvider | null;

export type Web3State = {
  metamaskInstalled: boolean;
  jsonRpcEnabled: boolean;
  providerMode: "none" | "metamask" | "jsonrpc";
  provider: PossibleProviders;
  connecting: boolean;
  walletAddress: null | string;
  signer?: JsonRpcSigner;
};

const metamaskInstalled = typeof window !== "undefined" ? !!window?.ethereum?.request : false;

const client = createClient(
  getDefaultClient({
    chains: [chain.mainnet, chain.hardhat, chain.localhost],
    autoConnect: true,
    appName: "Ubiquity",
  })
);

export const UseWeb3Provider: FC<ChildrenShim> = ({ children }) => {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider
        theme="midnight"
        customTheme={{
          "--ck-body-background": "#000",
          "--ck-border-radius": "8px",
        }}
      >
        {children}
      </ConnectKitProvider>
    </WagmiConfig>
  );
};

const useHandlerFastestRpc = (): JsonRpcProvider => {
  const [provider, setProvider] = useState<JsonRpcProvider | null>(null);

  const handler = new RPCHandler({
    networkId: IS_DEV ? 31337 : 1,
    autoStorage: true,
    cacheRefreshCycles: 10,
    rpcTimeout: 1500,
    networkName: null,
    runtimeRpcs: null,
    networkRpcs: null,
  });

  useEffect(() => {
    async function getProvider() {
      const provider = await handler.getFastestRpcProvider();
      setProvider(provider);
    }
    getProvider();
  }, []);

  return provider as JsonRpcProvider;
};

const useWeb3 = (): [Web3State] => {
  const { isConnecting, address } = useAccount();
  const { data: signer } = useSigner();
  const provider = useHandlerFastestRpc();

  const web3State = {
    metamaskInstalled,
    jsonRpcEnabled: IS_DEV,
    providerMode: "none" as "none" | "metamask" | "jsonrpc",
    provider: provider as PossibleProviders,
    connecting: isConnecting,
    walletAddress: address as string,
    signer: signer as JsonRpcSigner,
  };

  return [web3State];
};

export default useWeb3;
