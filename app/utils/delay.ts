interface DelayFunction {
  (ms: number): Promise<void>;
}

export const delay: DelayFunction = async function(ms: number): Promise<void> {
  return new Promise<void>(resolve => setTimeout(resolve, ms));
};
