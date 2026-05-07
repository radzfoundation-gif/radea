import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
  
  await page.goto('http://localhost:8080', { waitUntil: 'networkidle' }).catch(e => console.log('Goto error:', e.message));
  
  const content = await page.evaluate(() => document.body.innerHTML);
  console.log('HTML CONTENT LENGTH:', content.length);
  if (content.length < 500) {
     console.log('HTML CONTENT:', content);
  }
  
  await browser.close();
})();
