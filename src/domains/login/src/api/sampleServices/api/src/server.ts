import contract from "../contract.json"
import { trace, type Span } from '@opentelemetry/api';
import cors from 'cors';
import {
    ATTR_CODE_FILE_PATH,
} from '@opentelemetry/semantic-conventions';
import express, { Request, Response } from "express";
const tracer = trace.getTracer('loginApi', '0.1.0');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/health", (_req: Request, res: Response) => {
    return tracer.startActiveSpan('http://localhost:3000/health', (span: Span) => {
        res.json({ status: "ok" });

        span.setAttribute('method', "GET");
        span.setAttribute(ATTR_CODE_FILE_PATH, __filename);
        span.end();
    })
});

// example GET endpoint
app.get("/hello", (req: Request, res: Response) => {
    const name = req.query.name ?? "world";
    res.json({ message: `Hello ${name}` });
});

app.post("/login", (req: Request, res: Response) => {
    return tracer.startActiveSpan('http://localhost:3000/login', (span: Span) => {

        const { login, pass } = req.body;
        const apiContract: Record<string, string> = contract["apiContract"]
        span.setAttribute('method', "POST");
        span.setAttribute(ATTR_CODE_FILE_PATH, __filename);
        span.setAttribute('test-level', "unit");
        res.json({
            callStatus: apiContract[`/login?login=${login}&pass=${pass}`],
            success: true,
            user: login
        });
        span.end();
    })
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
