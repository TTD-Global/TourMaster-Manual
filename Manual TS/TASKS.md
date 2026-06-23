# TASKS.md — รายการงานที่ต้องทำ TourMaster Manual

อัปเดตล่าสุด: 2026-06-23  
ดูสถานะภาพรวมทั้งหมดได้ที่ `context.md`

---

## 🔴 Priority 1 — เขียนหน้าที่ยังว่างอยู่ (Empty Pages)

หน้าเหล่านี้มีในระบบแต่เนื้อหาว่างเปล่า จะทำให้ผู้ใช้เข้าหน้าแล้วเห็นแค่ title

- [ ] `content/Dashboard/Company-Overview.md` — หน้าแรกที่ user เห็น ต้องเขียนก่อน
- [ ] `content/Tour/Manage-Group.md`
- [ ] `content/Tour/Job-Order.md`
- [ ] `content/Transfer/Manage-Transfer.md`
- [ ] `content/Transfer/Transfer-Order.md`
- [ ] `content/Guide-Task.md`
- [ ] `content/Zone-Transfer.md`

---

## 🟠 Priority 2 — Rewrite Old Style → New Style

หน้าเหล่านี้มีเนื้อหาครบแต่ใช้รูปแบบเก่า (bullet list, H2-per-column) ต้องแปลงเป็น new style

- [ ] `content/Agent.md` — ใช้ bullet list ทั้งหมด, รูปภาพบางรูปเป็น placeholder `![]`
- [ ] `content/Program/Program-list.mdx` — เนื้อหาครบแต่ format เก่า
- [ ] `content/Program/Items-Type.md` — H2 ต่อทุก column, bullet list
- [ ] `content/Vehicle/Own-vehicle.md` — bullet list, ไม่มี sidebar_position
- [ ] `content/Vehicle/Group-Type.md` — bullet list, ไม่มี sidebar_position
- [ ] `content/Program/Unit.md` — ต้องตรวจสอบ

---

## 🟡 Priority 3 — ตรวจสอบไฟล์ที่ยังไม่ได้ review

- [ ] `content/Vehicle/Supplier.mdx`
- [ ] `content/Employee/Guide-Staff.mdx`
- [ ] `content/Employee/Other.mdx`
- [ ] `content/Employee/Positions.mdx`
- [ ] `content/Expense/Accrued.md` — มี frontmatter แต่ยังไม่ได้ตรวจเนื้อหา
- [ ] `content/Expense/Report.md` — มี frontmatter แต่ยังไม่ได้ตรวจเนื้อหา
- [ ] `content/Company.md` — ไม่อยู่ใน sidebar ต้องตัดสินใจว่าจะเพิ่มหรือลบทิ้ง
- [ ] `content/Guide-List.md` — ไม่อยู่ใน sidebar ต้องตัดสินใจ

---

## 🔵 Priority 4 — Enable Dashboard Sub-pages

หน้า Dashboard ถูก comment out ทั้งหมดใน `sidebars.ts` รอเปิดเมื่อเนื้อหาพร้อม

- [ ] `Dashboard/Booking.md` — เขียนเนื้อหา + uncomment ใน sidebar
- [ ] `Dashboard/Tour.md`
- [ ] `Dashboard/Transfer.md`
- [ ] `Dashboard/Expense.md`
- [ ] `Dashboard/Check-In.md`
- [ ] `Dashboard/Vehicle.md`
- [ ] `Dashboard/Guide.md`
- [ ] `Dashboard/KPI.md`

---

## 🟣 Priority 5 — Enable Report Pages

Report pages ถูก comment out ใน sidebar รอเปิดเมื่อเนื้อหาพร้อม

- [ ] `Excursion/Report.md` — uncomment ใน sidebar
- [ ] `Pick-up-Transport/Report.md`
- [ ] `Drop-off-Transport/Report.md`
- [ ] `Check In/Report.md`
- [ ] `User/Access-Log.md`

---

## ✅ เสร็จแล้ว (Reference)

- [x] `Booking.md`
- [x] `Bookings/Create-Booking.md`
- [x] `Excursion/Manage-Group.md`
- [x] `Excursion/Supplier-Group.md`
- [x] `Excursion/Own-Vehicle-Group.md`
- [x] `Excursion/Job-Order.md`
- [x] `Pick-up-Transport/Manage-Group.md`
- [x] `Pick-up-Transport/Supplier-Group.md`
- [x] `Pick-up-Transport/Own-Vehicle-Group.md`
- [x] `Pick-up-Transport/Job-Order.md`
- [x] `Drop-off-Transport/Manage-Group.md`
- [x] `Drop-off-Transport/Supplier-Group.md`
- [x] `Drop-off-Transport/Own-Vehicle-Group.md`
- [x] `Drop-off-Transport/Job-Order.md`
- [x] `Check In/Check-In.md`
- [x] `Check In/Check-In-List.md`
- [x] `Expense/Advance.md`
- [x] `Expense/Actual.md`
- [x] `Employee/Employee-Summary.mdx`
- [x] `User/User-List.md`
- [x] `User/Roles.md`

---

## หมายเหตุการทำงาน

_ใส่ note ไว้ที่นี่เมื่อทำงานแต่ละ session เช่น decisions, ปัญหาที่พบ, สิ่งที่ต้องถามเจ้าของโปรเจกต์_

- 2026-06-23: สร้างไฟล์ระบบ (CLAUDE.md, SKILL.md, context.md, TASKS.md, prompts.md, img-inventory.md) ครบชุด
