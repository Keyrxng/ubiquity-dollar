export const useRpcHandler = async (networkId = 1) => {
  const config = { networkId, autoStorage: true, cacheRefreshCycles: 10 };
  let handlerInstance;
  if (typeof window !== "undefined") {
    const module = await import("@keyrxng/rpc-handler/dist/esm/src/rpc-handler");
    const { RPCHandler } = module;
    handlerInstance = new RPCHandler(config);
  } else {
    const module = await import("@keyrxng/rpc-handler/dist/cjs/src/rpc-handler");
    const { RPCHandler } = module;
    handlerInstance = new RPCHandler(config);
  }

  console.log("handlerInstance", handlerInstance);

  await handlerInstance.getFastestRpcProvider();

  const latencies = handlerInstance.getLatencies();

  Object.keys(latencies).sort((a, b) => {
    return latencies[a] - latencies[b];
  });

  console.log("latencies", latencies);
  const endPoints = Object.keys(latencies).map((key) => {
    return key.endsWith("_1") ? key.split("_1")[0] : key;
  });

  return endPoints;
};
