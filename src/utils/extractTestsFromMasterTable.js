const fs = require('fs').promises;
const fsmkdir = require('fs').mkdirSync;
const path = require('path')
const trace = require("./trace").trace
const argv = require('yargs/yargs')(process.argv.slice(2)).argv;

const readTestStrategyDoc = async () => {
    trace("Reading test trategy doc ...")
    trace(argv.insrc);
    trace(argv.outsrc);

    const docPath = path.join(__dirname, argv.insrc);

    try {
        const content = await fs.readFile(docPath, 'utf8');
        return content
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

const getMasterTableFrom_ = (doc) => {
    trace()
    const regex = /<masterTable>([\s\S]*?)<\\masterTable>/g;
    const matches = [...doc.matchAll(regex)];
    const out = matches[0][1]
    return out
}

const turn_toCsvTable = (mdTable) => {
    trace()
    const lines = mdTable
        .split('\n')
        .filter(line => line.trim() && !line.startsWith('| ---')); // remove empty lines & separator

    const csvLines = lines.map(line => {
        const cells = line.split('|').map(cell => cell.trim());
        if (cells[0] === '') cells.shift();
        if (cells[cells.length - 1] === '') cells.pop();
        return cells.map(cell => `"${cell.replace(/"/g, '""')}"`).join(',');
    });

    return csvLines.join('\n');
};

const makeStringsFrom_ = (csvMasterTable) => {
    trace()
    return csvMasterTable.split("\n")
}
const getHeaderFrom_ = (csvMasterTableStrings) => {
    trace()
    return csvMasterTableStrings[0]
}
const getUnitTestHeadersFrom = (constHeaders) => {
    trace()
    const filteredColumns = (e) => {
        const filters = argv.f.split(",")
        return filters.includes(e)
    }
    return constHeaders
        .split(",")
        .slice(4)
        .map(header => header.replace(" Input", ""))
        .map(header => header.replace(" Output", ""))
        .map(header => header.replaceAll("\"", ""))
        .filter(e => filteredColumns(e))
        .reduce((acc, cur, i) => {
            if (!acc[cur]) {
                acc[cur] = [i + 4]
            } else {
                acc[cur].push(i + 4)
            }
            return acc
        }, {})
}
const getUnitTestDataFrom_by_ = (csvMasterTableStrings, unitTestHeaderIndices) => {
    const dict = {}
    for (const key in unitTestHeaderIndices) {
        const requiredIndices = [0, 1, 2, 3].concat(...unitTestHeaderIndices[key])
        const testRows = csvMasterTableStrings.map(tablesString => {
            return tablesString.split(",").filter((value, i) => requiredIndices.includes(i))
        })
        dict[key] = "           | " + testRows
            .slice(0, -1)
            .map(row => row.join(" | "))
            .join("|\n           | ")
            .replaceAll(key + " ", "")
            .replaceAll("\"", "")
            .replaceAll(",", "")
            + " |"
    }
    return dict
}

const gherkinTest = (testName) => 
    `
    
    Feature: ${testName} module requirements matrix test

    Scenario Outline: unit scenario driven by test matrix
      Given the requirement "<REQ-ID>"
      Given the requirement risk "<RISK-ID>"
      Given the test id "<TEST-ID>"
      Given the test name "<Scenario Name>"
      When the unit input is "<Input>"
      Then the unit output is "<Output>"

        Examples:
`

const makeUnitTestsFrom_using_data = (gherkinTest, unitTestData) => {
    const unitTestSuites = Object.entries(unitTestData)
    const out = unitTestSuites.map(([suiteName, suiteData]) => {
        return [suiteName, gherkinTest(suiteName) + suiteData]
    })
    return Object.fromEntries(out)
}



async function write_(tests) {
    for (const test in tests) {
        const testsPath = path.join(__dirname, argv.outsrc, test.replaceAll(" ", "_") + "/")
        fsmkdir(testsPath, { recursive: true });
        try {
            await fs.writeFile(testsPath + test.replaceAll(" ", "_") + ".unit.feature", tests[test], 'utf8');
            trace("File written: " + testsPath);
        } catch (err) {
            trace("Write error:", err);
        }
    }
}

const main = async () => {

    const doc = await readTestStrategyDoc()
    const masterTable = getMasterTableFrom_(doc)
    const csvMasterTable = turn_toCsvTable(masterTable)
    const csvMasterTableStrings = makeStringsFrom_(csvMasterTable)
    const header = getHeaderFrom_(csvMasterTableStrings)
    const unitTestHeaderIndices = getUnitTestHeadersFrom(header)
    const unitTestData = getUnitTestDataFrom_by_(
        csvMasterTableStrings,
        unitTestHeaderIndices
    )
    const unitTests = makeUnitTestsFrom_using_data(gherkinTest, unitTestData)
    const writtenUnitTests = await write_(unitTests)
}

main()