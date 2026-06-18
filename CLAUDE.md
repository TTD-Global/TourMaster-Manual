# CLAUDE.md — กฎการเขียนคู่มือ TourMaster Manual (Docusaurus)

## โปรเจกต์นี้คืออะไร

คู่มือการใช้งานระบบ TourMaster สร้างด้วย **Docusaurus** (TypeScript)  
เขียนเป็น **ภาษาไทย** เป็นหลัก คำศัพท์เทคนิคและชื่อ UI ใช้ **ภาษาอังกฤษ**  
Deploy บน GitHub Pages: `https://ttd-global.github.io/TourMaster-Manual/`

---

## โครงสร้างโปรเจกต์

```
TourMaster-Manual/
├── content/          ← ไฟล์เนื้อหาคู่มือทั้งหมด (docs path)
│   ├── Dashboard/
│   ├── Bookings/
│   ├── Excursion/
│   ├── Pick-up-Transport/
│   ├── Drop-off-Transport/
│   ├── Check In/
│   ├── Expense/
│   ├── Program/
│   ├── Vehicle/
│   ├── Employee/
│   ├── User/
│   └── Transfer/
├── sidebars.ts       ← กำหนดลำดับ sidebar
├── docusaurus.config.ts
└── src/
```

- `docs path` = `content/` (ไม่ใช่ `docs/`)
- `routeBasePath` = `/content/`

---

## กฎบังคับ — Frontmatter

**ทุกไฟล์ `.md` และ `.mdx` ต้องมี frontmatter นี้เสมอ:**

```yaml
---
title: ชื่อหน้า (ภาษาอังกฤษหรือภาษาไทย ตามชื่อที่ปรากฏใน sidebar)
sidebar_position: <ตัวเลข>
---
```

- `title` → ชื่อที่แสดงใน browser tab และ breadcrumb
- `sidebar_position` → ลำดับในหมวดหมู่ (1, 2, 3...)
- หน้าที่เป็น root ของ category (ไม่มีหน้าพี่น้อง) ให้ใส่แค่ `title` ได้
- **ห้ามสร้างไฟล์โดยไม่มี frontmatter** ไม่ว่ากรณีใด

---

## โครงสร้างเนื้อหามาตรฐาน (ต้องทำตามลำดับนี้)

```markdown
---
title: ชื่อหน้า
sidebar_position: N
---

# ชื่อหน้า

**ชื่อหน้า** คือ[คำอธิบายสั้นๆ ว่าหน้านี้ทำอะไร]

---

## ภาพรวม

[ตารางคอลัมน์ หรือคำอธิบายภาพรวมของหน้า]

---

## [ส่วน Feature/Function ต่างๆ]

[เนื้อหา]

---

## Action

[View / Edit / Delete]
```

**กฎสำคัญ:**
- ใช้ `---` (horizontal rule) คั่นระหว่างทุก H2 section เสมอ
- H1 (`#`) ใช้แค่ครั้งเดียวที่บนสุด — ต้องตรงกับ `title` ใน frontmatter
- H2 (`##`) = sections หลัก
- H3 (`###`) = sub-sections (เช่น View, Edit, Delete ภายใน Action)
- H4 (`####`) = รายละเอียดย่อยภายใน H3 (เช่น Reset Password ภายใน Edit)

---

## ตาราง (Tables)

ใช้ตารางแสดงคอลัมน์ของ UI เสมอ รูปแบบมาตรฐาน:

```markdown
| คอลัมน์ | คำอธิบาย |
|---------|----------|
| # | ลำดับที่ |
| Program Name | ชื่อโปรแกรม |
| Status | สถานะการใช้งาน |
| Action | ปุ่มคำสั่ง |
```

ตารางฟิลด์ฟอร์ม (มี required):

```markdown
| ฟิลด์ | คำอธิบาย | จำเป็น |
|-------|----------|--------|
| **Program Name** | ชื่อโปรแกรม | ✅ |
| **Remark** | หมายเหตุ | — |
```

---

## Required Field

สำหรับฟิลด์บังคับในเนื้อหาแบบ inline ให้ใช้:

```html
**Field Name<span class="required-asterisk">*</span>**
```

---

## Admonitions (Docusaurus callout boxes)

```markdown
:::tip เคล็ดลับ
ข้อแนะนำเพิ่มเติมที่เป็นประโยชน์
:::

:::info
ข้อมูลเพิ่มเติมที่ควรทราบ
:::

:::caution ข้อควรระวัง
สิ่งที่ต้องระมัดระวังก่อนดำเนินการ
:::
```

- `:::tip` → เคล็ดลับ / คำแนะนำ
- `:::info` → ข้อมูลที่ควรทราบ / เงื่อนไขระบบ
- `:::caution` → คำเตือน / การกระทำที่ย้อนไม่ได้

---

## รูปภาพ (Screenshots)

```markdown
![คำอธิบาย](/img/ชื่อไฟล์.png)
```

- รูปภาพทั้งหมดอยู่ใน `static/img/`
- ชื่อไฟล์รูปต้องตรงกับไฟล์จริงใน `static/img/`
- ถ้ายังไม่มีรูป ให้ใส่ `![ชื่อหน้า screenshot]` เป็น placeholder ไว้ก่อน

---

## Numbered Steps (ขั้นตอนการใช้งาน)

```markdown
1. กดปุ่ม **Create** มุมขวาบน
2. กรอกข้อมูลในฟอร์ม
3. กด **Save** เพื่อบันทึก
```

- ใช้ numbered list เมื่อมีลำดับขั้นตอน
- ใช้ bullet list เมื่อไม่มีลำดับ
- **ชื่อปุ่มหรือ label ใน UI** ต้อง bold เสมอ

---

## ภาษา

| ใช้ภาษาไทย | ใช้ภาษาอังกฤษ |
|------------|---------------|
| คำอธิบาย, เนื้อหา, หัวข้อ | ชื่อปุ่ม UI (Create, Save, Cancel) |
| ขั้นตอน, คำแนะนำ | ชื่อ column, field, status |
| คำอธิบายสถานะ | ชื่อ feature (Booking, Trip, Program) |

---

## ไฟล์ที่ต้องใช้สกุล `.mdx` แทน `.md`

ใช้ `.mdx` เมื่อไฟล์นั้นต้องใช้ Docusaurus component เช่น:
```mdx
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TOCInline from '@theme/TOCInline';
```

ไฟล์ปกติที่ไม่ต้องการ React component ให้ใช้ `.md` ธรรมดา

---

## ห้ามทำ

- ❌ สร้างไฟล์โดยไม่มี frontmatter
- ❌ ใช้ H1 (`#`) มากกว่าหนึ่งครั้งต่อไฟล์
- ❌ ใช้ `**ชื่อ H2**` แทน `## ชื่อ H2`
- ❌ เขียนเนื้อหาแบบ bullet list ล้วนโดยไม่มีตาราง เมื่อเนื้อหาเป็น column ของ UI
- ❌ ลืม `---` คั่น section
- ❌ ใส่ path รูปภาพแบบ relative (ต้องเป็น `/img/...` เสมอ)
