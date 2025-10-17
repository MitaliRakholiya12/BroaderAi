import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { marked } from 'marked';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the markdown file
const markdownPath = path.join(__dirname, 'BroaderAI_Project_Documentation.md');
const markdown = fs.readFileSync(markdownPath, 'utf-8');

// Convert markdown to HTML
const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>BroaderAI Project Documentation</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 210mm;
      margin: 0 auto;
      padding: 20mm;
    }
    h1, h2, h3, h4, h5, h6 {
      color: #2c3e50;
      margin-top: 1.5em;
      margin-bottom: 0.5em;
    }
    h1 {
      font-size: 28px;
      border-bottom: 2px solid #3498db;
      padding-bottom: 10px;
    }
    h2 {
      font-size: 24px;
      border-bottom: 1px solid #bdc3c7;
      padding-bottom: 5px;
    }
    h3 {
      font-size: 20px;
    }
    p {
      margin-bottom: 1em;
    }
    ul, ol {
      margin-bottom: 1em;
      padding-left: 2em;
    }
    blockquote {
      background: #f9f9f9;
      border-left: 10px solid #ccc;
      margin: 1.5em 10px;
      padding: 0.5em 10px;
    }
    code {
      background: #f4f4f4;
      padding: 2px 5px;
      border-radius: 3px;
      font-family: monospace;
    }
    pre {
      background: #f4f4f4;
      padding: 10px;
      border-radius: 5px;
      overflow-x: auto;
    }
    pre code {
      background: transparent;
      padding: 0;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      margin-bottom: 1em;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
    th {
      background-color: #f2f2f2;
    }
    img {
      max-width: 100%;
      height: auto;
    }
    .page-break {
      page-break-after: always;
    }
    .cover-page {
      text-align: center;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .cover-page h1 {
      font-size: 32px;
      border: none;
      margin-bottom: 50px;
    }
    .cover-page p {
      font-size: 18px;
      margin-bottom: 20px;
    }
    @page {
      size: A4;
      margin: 20mm;
    }
  </style>
</head>
<body>
  ${marked.parse(markdown)}
</body>
</html>
`;

// Generate PDF
async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });
  
  await page.pdf({
    path: 'BroaderAI_Project_Documentation_Enhanced.pdf',
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<div style="font-size: 8px; width: 100%; text-align: center;"></div>',
    footerTemplate: '<div style="font-size: 8px; width: 100%; text-align: center; margin: 0 auto;"><span class="pageNumber"></span> / <span class="totalPages"></span></div>',
    margin: {
      top: '20mm',
      bottom: '20mm',
      left: '20mm',
      right: '20mm'
    }
  });

  await browser.close();
  console.log('PDF generated successfully!');
}

generatePDF().catch(err => console.error('Error generating PDF:', err));