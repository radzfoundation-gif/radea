const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx') && !f.includes('NotFound'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // 1. Replace header
  const headerRegex = /<header className="flex items-center justify-between px-8 py-5 border-b border-border">[\s\S]*?<\/header>/;
  if (headerRegex.test(content)) {
    content = content.replace(headerRegex, '<Header t={t} isDark={isDark} setIsDark={setIsDark} />');
  }

  // 2. Add import for Header
  if (!content.includes('import { Header }')) {
    content = content.replace(
      'import PageTransition from "@/components/PageTransition";',
      'import PageTransition from "@/components/PageTransition";\nimport { Header } from "@/components/Header";'
    );
  }

  // 3. Make padding responsive
  content = content.replace(/px-12 py-10/g, 'px-6 md:px-12 py-8 md:py-10');

  // 4. Make Profile section flex-col on mobile
  content = content.replace(
    /flex items-start gap-6/g,
    'flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left'
  );

  // 5. Avatar size
  content = content.replace(/w-32 h-32/g, 'w-24 h-24 md:w-32 md:h-32');
  
  // 6. Name text size
  content = content.replace(/text-3xl font-display/g, 'text-2xl md:text-3xl font-display');

  fs.writeFileSync(filePath, content, 'utf-8');
}
console.log("Refactoring complete.");
