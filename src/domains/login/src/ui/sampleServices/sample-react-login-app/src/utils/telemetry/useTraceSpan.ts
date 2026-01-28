import { trace, SpanStatusCode } from '@opentelemetry/api';

export async function traceAsync<T>(
  spanName: string,
  attrs: Record<string, any>,
//   fn: () => Promise<T>,
) {
console.log("[useTraceSpan.ts/traceAsync] .")
  const tracer = trace.getTracer('ui-interactions');
  console.log("[useTraceSpan.ts/traceAsync] tracer: ", tracer)

  const span = tracer.startSpan(spanName, {
    attributes: attrs,
  });

  try {
    // const result = await fn();
    span.setStatus({ code: SpanStatusCode.OK });
    // return result;
  } catch (err: any) {
    span.recordException(err);
    span.setStatus({ code: SpanStatusCode.ERROR });
    throw err;
  } finally {
    span.end();
  }
}
