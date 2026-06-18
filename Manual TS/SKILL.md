# SKILL.md — Workflow การเขียนหน้าคู่มือใหม่ (TourMaster Docusaurus)

## วิธีใช้ Skill นี้

เมื่อได้รับคำสั่งให้เขียนหน้าคู่มือใหม่ หรือ rewrite หน้าเก่า ให้ทำตามขั้นตอนด้านล่างนี้ตามลำดับ **ห้ามข้ามขั้นตอน**

---

## STEP 1 — รับข้อมูล Input จาก User

ก่อนเริ่มเขียน ต้องรู้ข้อมูลเหล่านี้:

```
[ ] ชื่อหน้า (ภาษาอังกฤษ)
[ ] ไฟล์ path ที่ต้องการสร้าง เช่น content/Tour/Manage-Group.md
[ ] sidebar_position (ลำดับที่ในหมวด)
[ ] ประเภทหน้า → ดูตาราง Page Type ด้านล่าง
[ ] หน้าที่ใกล้เคียงที่ทำเสร็จแล้ว (Reference file)
[ ] รายชื่อ column / field ที่ UI มี
[ ] รูปภาพที่มี (ถ้ามี ระบุชื่อไฟล์ใน /img/)
```

ถ้าข้อมูลไม่ครบ → ถามผู้ใช้ก่อนเริ่มเขียน

---

## STEP 2 — ระบุ Page Type

เลือก template ให้ถูกต้องตามประเภทหน้า:

| Page Type | ลักษณะ | ตัวอย่างไฟล์ |
|-----------|--------|-------------|
| **List Page** | หน้าแสดงตารางรายการ + filter + export | `Booking.md` |
| **Create/Form Page** | หน้ากรอกฟอร์มสร้างรายการ | `Bookings/Create-Booking.md` |
| **Management Page** | หน้าจัดกลุ่ม/จัดสรรงาน (Group, Supplier, OV) | `Excursion/Manage-Group.md` |
| **Process Page** | หน้าที่มีลำดับขั้นตอนการทำงาน | `Check In/Check-In.md` |
| **CRUD Page** | หน้า master data ที่มี Create/View/Edit/Delete | `User/User-List.md`, `User/Roles.md` |
| **Job Order Page** | หน้าใบสั่งงาน / ออกเอกสาร | `Excursion/Job-Order.md` |
| **Report Page** | หน้ารายงาน + export | `Expense/Report.md` |
| **Dashboard Page** | หน้า dashboard widget/chart | `Dashboard/Company-Overview.md` |
| **Setting/Config Page** | หน้าตั้งค่า master data | `Agent.md`, `Vehicle/Own-vehicle.md` |

---

## STEP 3 — เขียนเนื้อหาตาม Template

ใช้ template ที่ตรงกับ Page Type โดย **ทุก template บังคับมี frontmatter**

---

### Template A: List Page

```markdown
---
title: [ชื่อหน้า]
sidebar_position: [N]
---

# [ชื่อหน้า]

**[ชื่อหน้า]** คือหน้าสำหรับ[คำอธิบายสั้นๆ ว่าหน้านี้ทำอะไร]

---

## ภาพรวมหน้า [ชื่อหน้า]

[ประโยคอธิบายภาพรวม ถ้ามี summary card/widget ให้อธิบาย]

---

## ตารางรายการ [ชื่อ]

ตารางแสดงรายการทั้งหมด ประกอบด้วยคอลัมน์ดังนี้

| คอลัมน์ | คำอธิบาย |
|---------|----------|
| # | ลำดับที่ |
| [Column 1] | [คำอธิบาย] |
| Status | สถานะ |
| Action | ปุ่มคำสั่ง |

---

## การกรองข้อมูล

- **[Filter 1]** — [คำอธิบาย]
- **[Filter 2]** — [คำอธิบาย]

---

## การ Export ข้อมูล

กดปุ่ม **Export** เพื่อส่งออกข้อมูลเป็นไฟล์ Excel

---

## การสร้าง[รายการ]ใหม่

กดปุ่ม **+ [ชื่อปุ่ม]** ที่มุมขวาบน เพื่อ[อธิบาย action]

:::tip
[เคล็ดลับที่เป็นประโยชน์]
:::
```

---

### Template B: Create/Form Page

```markdown
---
title: [ชื่อหน้า]
sidebar_position: [N]
---

# [ชื่อหน้า]

หน้า **[ชื่อหน้า]** ใช้สำหรับ[คำอธิบาย]

---

## ขั้นตอนการสร้าง [ชื่อ]

### 1. [ขั้นตอนแรก]

[คำอธิบาย]

---

### 2. กรอกข้อมูล [ส่วน]

| ฟิลด์ | คำอธิบาย | จำเป็น |
|-------|----------|--------|
| **[Field 1]** | [คำอธิบาย] | ✅ |
| **[Field 2]** | [คำอธิบาย] | — |

---

### [N]. ยืนยันการสร้าง

- กดปุ่ม **[ปุ่ม Confirm]** เพื่อบันทึก
- กดปุ่ม **[ปุ่ม Cancel]** เพื่อยกเลิก

:::caution ข้อควรระวัง
[คำเตือน ถ้ามี]
:::

:::tip เคล็ดลับ
[คำแนะนำ ถ้ามี]
:::
```

---

### Template C: Management Page (Group/Supplier/OV/Job Order)

```markdown
---
title: [ชื่อหน้า]
sidebar_position: [N]
---

# [ชื่อหน้า] — [หมวดหมู่]

**[ชื่อหน้า]** ใน[หมวด]คือ[คำอธิบายสั้น]

---

## ภาพรวม

[ประโยคอธิบายหน้า]

| คอลัมน์ | คำอธิบาย |
|---------|----------|
| # | ลำดับที่ |
| Program Name | ชื่อโปรแกรม |
| [Column] | [คำอธิบาย] |
| Action | ปุ่มจัดการ |

---

## การกรองข้อมูล

- **Date Filter** — เลือกวันที่ที่ต้องการดูรายการ
- **[Filter อื่น]** — [คำอธิบาย]

---

## [Action หลัก]

1. [ขั้นตอนที่ 1]
2. [ขั้นตอนที่ 2]
3. [ขั้นตอนที่ 3]

:::tip
[คำแนะนำก่อนใช้งาน เช่น ต้องตั้งค่า Setting ก่อน]
:::

:::info
[เงื่อนไขของระบบ เช่น จะแสดงเฉพาะรายการ Confirmed]
:::
```

---

### Template D: CRUD Page (Setting Master Data)

```markdown
---
title: [ชื่อหน้า]
sidebar_position: [N]
---

# [ชื่อหน้า]

**[ชื่อหน้า]** คือ[คำอธิบาย]

ตารางแสดงคอลัมน์ดังนี้

| คอลัมน์ | คำอธิบาย |
|---------|----------|
| # | ลำดับที่ |
| [Column] | [คำอธิบาย] |
| Status | สถานะ Active / Inactive |
| Last Modify Date | วันที่สร้าง/แก้ไขล่าสุด |
| Action | ปุ่มคำสั่ง |

![ตาราง [ชื่อหน้า]](/img/[ชื่อรูป])

---

## Create [ชื่อ]

กดปุ่ม **Create [ชื่อ]** มุมขวาบน ระบบจะนำไปยังหน้าสร้าง

### [ส่วนข้อมูล 1]

- **[Field 1]<span class="required-asterisk">*</span>** — [คำอธิบาย]
- **[Field 2]** — [คำอธิบาย]

![](/img/[ชื่อรูป-create])

---

## Status

แสดงสถานะการใช้งาน แบ่งเป็น 2 สถานะ

- **Active** — _เปิดการใช้งาน_ แสดงเป็น Badge สีเขียว
- **Inactive** — _ปิดการใช้งาน_ แสดงเป็น Badge สีแดง

---

## Action

![](/img/[ชื่อรูป-action])

### View

- แสดงข้อมูลทั้งหมดแบบ read-only
- **Close** — ปิดและกลับหน้ารายการ
- **Edit** — เข้าสู่โหมดแก้ไข

![](/img/[ชื่อรูป-view])

### Edit

กดปุ่ม **Edit** เพื่อแก้ไขข้อมูล

- **Status** — เลือก Active หรือ Inactive
- กด **Save** เพื่อบันทึก หรือ **Cancel** เพื่อยกเลิก

![](/img/[ชื่อรูป-edit])

### Delete

กดปุ่ม **Delete** เพื่อลบข้อมูลที่ไม่ต้องการออกจากระบบ
```

---

## STEP 4 — เติม Placeholder ด้วยข้อมูลจริง

หลังเลือก template แล้ว ให้แทนที่ `[...]` ทุกตัวด้วยข้อมูลจริงของหน้านั้น:

```
[ชื่อหน้า]        → ชื่อจริง เช่น "Tour Manage Group"
[N]              → ตัวเลข sidebar_position
[Column]         → ชื่อ column จริงใน UI
[Field]          → ชื่อ input field จริง
[ชื่อรูป]         → ชื่อไฟล์รูปใน /img/ (ถ้ายังไม่มีให้ใส่ placeholder)
[คำอธิบาย]       → คำอธิบายเป็นภาษาไทย
```

---

## STEP 5 — ตรวจสอบก่อน Save

ติ๊กทุกรายการก่อนสร้างไฟล์:

```
[ ] frontmatter มี title และ sidebar_position
[ ] H1 ตรงกับ title ใน frontmatter
[ ] H1 ใช้แค่ครั้งเดียว
[ ] มี --- คั่นระหว่างทุก H2 section
[ ] ชื่อปุ่ม/label UI เป็น bold (**bold**)
[ ] ตารางมีทุก column ที่ UI แสดง
[ ] รูปภาพ path ขึ้นต้นด้วย /img/
[ ] ไม่มี [ข้อความ placeholder] เหลือในไฟล์จริง
[ ] Admonition ใช้ถูกประเภท (tip/info/caution)
[ ] ภาษาไทยเป็นหลัก คำศัพท์ UI เป็นอังกฤษ
```

---

## STEP 6 — บันทึกไฟล์ใน path ที่ถูกต้อง

```
content/[Category]/[FileName].md
```

ตัวอย่าง:
- `content/Tour/Manage-Group.md`
- `content/Transfer/Manage-Transfer.md`
- `content/Zone-Transfer.md`

**หลังสร้างไฟล์ใหม่** → ตรวจสอบว่าชื่อไฟล์ตรงกับที่ระบุใน `sidebars.ts` หรือไม่

---

## STEP 7 — (ถ้า Rewrite Old Style) ขั้นตอนเพิ่มเติม

เมื่อ rewrite ไฟล์ old style ให้ทำเพิ่ม:

1. **อ่านไฟล์เดิม** — ดึงข้อมูล content ทั้งหมด (column names, steps, descriptions)
2. **ระบุ Page Type** → เลือก template ที่ตรง
3. **Map เนื้อหาเก่า → template ใหม่** — ห้ามละทิ้งข้อมูลที่ยังถูกต้อง
4. **แปลง bullet list → table** เมื่อเนื้อหาเป็น column หรือ field
5. **แปลง H2 per column → ตาราง** (old style มักใช้ `## Column Name` ต่อทุก column)
6. **เพิ่ม admonition** ถ้าเนื้อหาเดิมมีคำเตือนหรือเคล็ดลับฝังอยู่

---

## Quick Reference — Pattern ที่พบบ่อย

### Status Table

```markdown
| สถานะ | ความหมาย |
|-------|----------|
| Active | เปิดการใช้งาน |
| Inactive | ปิดการใช้งาน |
```

### Required Field (inline)

```html
**Field Name<span class="required-asterisk">*</span>**
```

### Screenshot Placeholder (ยังไม่มีรูป)

```markdown
![หน้า [ชื่อหน้า]]
```

### Screenshot จริง

```markdown
![คำอธิบายรูป](/img/ชื่อไฟล์.png)
```

### การ Export

```markdown
กดปุ่ม **Export** เพื่อส่งออกข้อมูลเป็นไฟล์ Excel
```

### ปุ่ม Create มาตรฐาน (List Page)

```markdown
กดปุ่ม **+ [ชื่อ]** ที่มุมขวาบนของหน้า เพื่อ[สร้าง/เข้าสู่]หน้า [ชื่อหน้า]
```

---

## Sidebar — การเพิ่มหน้าใหม่ใน sidebars.ts

หลังสร้างไฟล์เนื้อหาแล้ว ให้ตรวจสอบ `sidebars.ts`:

1. ถ้าหน้าใหม่อยู่ใน category ที่มีอยู่แล้ว → เพิ่ม path ใน `items: [...]` ของ category นั้น
2. ถ้าหน้าที่ถูก comment out → uncomment เมื่อเนื้อหาพร้อม
3. path ใน sidebars.ts ไม่ต้องใส่ extension `.md` และไม่ต้องใส่ `content/` นำหน้า

ตัวอย่าง:
```ts
// ถูกต้อง
items: ["Tour/Manage-Group", "Tour/Job-Order"]

// ผิด
items: ["content/Tour/Manage-Group.md"]
```
