/**
 * Docusaurus จะเขียน path แบบ absolute ลงใน .docusaurus (registry.js ฯลฯ)
 * ถ้าโฟลเดอร์เคยถูกสร้างบน Cursor Cloud / remote ที่ path เป็น /sessions/.../mnt/...
 * พอเปิดบนเครื่อง Mac จะ error Module not found
 *
 * สคริปต์นี้รันก่อน start/build — ถ้าเจอ path แปลกจะรัน docusaurus clear ให้อัตโนมัติ
 */
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const filesToCheck = [
  join(root, '.docusaurus', 'registry.js'),
  join(root, '.docusaurus', 'client-modules.js'),
];

/** pattern จาก Cursor cloud / path ที่ไม่ใช่เครื่องปัจจุบัน */
const FOREIGN_PATTERNS = [
  /\/sessions\/[^/]+\//,
  /serene-stoic-babbage/,
  /\/mnt\/TourMaster-Manual\//,
];

function cacheLooksForeign() {
  for (const file of filesToCheck) {
    if (!existsSync(file)) continue;
    let text;
    try {
      text = readFileSync(file, 'utf8');
    } catch {
      continue;
    }
    for (const re of FOREIGN_PATTERNS) {
      if (re.test(text)) return true;
    }
  }
  return false;
}

if (cacheLooksForeign()) {
  console.warn(
    '\n[docusaurus] พบ cache ที่ชี้ path จาก environment อื่น — กำลังรัน docusaurus clear...\n',
  );
  execSync('npx docusaurus clear', { cwd: root, stdio: 'inherit' });
}
