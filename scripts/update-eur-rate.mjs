import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const outputDir = path.join(projectRoot, "data");
const outputFile = path.join(outputDir, "exchange-rate.json");
const sourceUrl =
  "https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt";

function parsePublishedDate(rawDate) {
  const match = rawDate.match(/^(\d{1,2})\s([A-Za-z]{3})\s(\d{4})$/);
  if (!match) {
    throw new Error(`Unexpected date format: ${rawDate}`);
  }

  const [, day, month, year] = match;
  const months = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12"
  };

  const monthNumber = months[month];
  if (!monthNumber) {
    throw new Error(`Unexpected month: ${month}`);
  }

  return `${year}-${monthNumber}-${day.padStart(2, "0")}`;
}

function parseCnbRateFile(content) {
  const lines = content.trim().split(/\r?\n/);
  const header = lines[0];
  const eurLine = lines.find((line) => line.includes("|EUR|"));

  if (!header || !eurLine) {
    throw new Error("EUR rate not found in CNB source.");
  }

  const [rawDate, listNumberPart] = header.split("#").map((part) => part.trim());
  const eurParts = eurLine.split("|");
  const rate = Number.parseFloat(eurParts[4]);

  if (!Number.isFinite(rate)) {
    throw new Error(`Invalid EUR rate: ${eurParts[4]}`);
  }

  return {
    source: "CNB",
    sourceUrl,
    currency: "EUR",
    amount: Number.parseInt(eurParts[2], 10),
    rateCzkPerEur: rate,
    publishedDate: parsePublishedDate(rawDate),
    listNumber: listNumberPart,
    updatedAt: new Date().toISOString()
  };
}

async function main() {
  const response = await fetch(sourceUrl, {
    headers: {
      "user-agent": "moon-aura-rate-updater"
    }
  });

  if (!response.ok) {
    throw new Error(`CNB request failed with ${response.status}`);
  }

  const content = await response.text();
  const payload = parseCnbRateFile(content);

  await mkdir(outputDir, { recursive: true });
  await writeFile(outputFile, `${JSON.stringify(payload, null, 2)}\n`, "utf8");

  console.log(
    `Updated EUR rate: 1 EUR = ${payload.rateCzkPerEur} CZK (CNB ${payload.publishedDate})`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
