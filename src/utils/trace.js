function trace(msg = "..." , depth = 3) {
    const rawStack = new Error(msg).stack
        .split('\n')
        .slice(0, depth + 1)
    // console.log("[] filename: ", rawStack.slice(1)[1].split("playwright-automation-framework")[1].split(":")[0])
    const fileName = rawStack.slice(1)[1]
        .split("(")[1]
        .split("/")
        .slice(-1)[0]
        .split(":")[0]
    const localCallSrc = rawStack.slice(1)
        .map(e => e.split(" ").slice(5, 6))
        .map(e => e[0])
        .reverse()
        .slice(0, 2)
        .join("/")
    const outLog = "[" + fileName + "/" + localCallSrc + "]: " + msg
    console.log(outLog);
}

module.exports = { trace }