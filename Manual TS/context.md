# context.md — ภาพรวมและความคืบหน้าโปรเจกต์ TourMaster Manual

อัปเดตล่าสุด: 2026-06-18

---

## ข้อมูลโปรเจกต์

| รายการ | รายละเอียด |
|--------|-----------|
| ชื่อระบบ | Tour Master |
| Framework | Docusaurus (TypeScript) |
| เนื้อหา path | `content/` |
| Route base | `/content/` |
| Deploy URL | `https://ttd-global.github.io/TourMaster-Manual/` |
| ภาษาหลัก | ภาษาไทย (คำศัพท์ UI = อังกฤษ) |
| Organization | TTD Thailand (`ttd-global`) |

---

## โครงสร้าง Sidebar และสถานะไฟล์

ตารางนี้แสดงทุกหน้าที่อยู่ใน `sidebars.ts` พร้อมสถานะเนื้อหา

### 📂 Dashboard

| ไฟล์ | สถานะ | หมายเหตุ |
|------|--------|---------|
| `Dashboard/Company-Overview.md` | ⚠️ Stub | มีแค่ `# Tour Master Dashboard` และ "This is Dashboard" — ต้องเขียนใหม่ทั้งหมด |
| `Dashboard/Booking.md` | 🔕 Commented out | ไฟล์มีอยู่ แต่ถูก comment ใน sidebar |
| `Dashboard/Tour.md` | 🔕 Commented out | ไฟล์มีอยู่ แต่ถูก comment ใน sidebar |
| `Dashboard/Transfer.md` | 🔕 Commented out | ไฟล์มีอยู่ แต่ถูก comment ใน sidebar |
| `Dashboard/Expense.md` | 🔕 Commented out | ไฟล์มีอยู่ แต่ถูก comment ใน sidebar |
| `Dashboard/Check-In.md` | 🔕 Commented out | ไฟล์มีอยู่ แต่ถูก comment ใน sidebar |
| `Dashboard/Vehicle.md` | 🔕 Commented out | ไฟล์มีอยู่ แต่ถูก comment ใน sidebar |
| `Dashboard/Guide.md` | 🔕 Commented out | ไฟล์มีอยู่ แต่ถูก comment ใน sidebar |
| `Dashboard/KPI.md` | 🔕 Commented out | ไฟล์มีอยู่ แต่ถูก comment ใน sidebar |

### 📂 Management — Bookings

| ไฟล์ | สถานะ | หมายเหตุ |
|------|--------|---------|
| `Booking.md` | ✅ สมบูรณ์ | New style, ตาราง, admonitions, Export/Filter/Create ครบ |
| `Bookings/Create-Booking.md` | ✅ สมบูรณ์ | New style, 7 ขั้นตอนครบ, ตารางฟิลด์, required fields |

### 📂 Management — Excursion

| ไฟล์ | สถานะ | หมายเหตุ |
|------|--------|---------|
| `Excursion/Manage-Group.md` | ✅ สมบูรณ์ | New style |
| `Excursion/Supplier-Group.md` | ✅ สมบูรณ์ | New style |
| `Excursion/Own-Vehicle-Group.md` | ✅ สมบูรณ์ | New style |
| `Excursion/Job-Order.md` | ✅ สมบูรณ์ | New style |
| `Excursion/Report.md` | 🔕 Commented out | ไฟล์มีอยู่ แต่ถูก comment ใน sidebar |

### 📂 Management — Pick-up Transport

| ไฟล์ | สถานะ | หมายเหตุ |
|------|--------|---------|
| `Pick-up-Transport/Manage-Group.md` | ✅ สมบูรณ์ | New style (ใช้โครงสร้างเดียวกับ Excursion) |
| `Pick-up-Transport/Supplier-Group.md` | ✅ สมบูรณ์ | New style |
| `Pick-up-Transport/Own-Vehicle-Group.md` | ✅ สมบูรณ์ | New style |
| `Pick-up-Transport/Job-Order.md` | ✅ สมบูรณ์ | New style |
| `Pick-up-Transport/Report.md` | 🔕 Commented out | ถูก comment ใน sidebar |

### 📂 Management — Drop-off Transport

| ไฟล์ | สถานะ | หมายเหตุ |
|------|--------|---------|
| `Drop-off-Transport/Manage-Group.md` | ✅ สมบูรณ์ | New style |
| `Drop-off-Transport/Supplier-Group.md` | ✅ สมบูรณ์ | New style |
| `Drop-off-Transport/Own-Vehicle-Group.md` | ✅ สมบูรณ์ | New style |
| `Drop-off-Transport/Job-Order.md` | ✅ สมบูรณ์ | New style |
| `Drop-off-Transport/Report.md` | 🔕 Commented out | ถูก comment ใน sidebar |

### 📂 Management — Check In

| ไฟล์ | สถานะ | หมายเหตุ |
|------|--------|---------|
| `Check In/Check-In.md` | ✅ สมบูรณ์ | New style, ขั้นตอน + สถานะ + admonitions |
| `Check In/Check-In-List.md` | ✅ สมบูรณ์ | New style, ตาราง + Filter + Export |
| `Check In/Report.md` | 🔕 Commented out | ถูก comment ใน sidebar |

### 📂 Management — Expense

| ไฟล์ | สถานะ | หมายเหตุ |
|------|--------|---------|
| `Expense/Advance.md` | ✅ สมบูรณ์ | New style, ตารางสถานะ, ขั้นตอนสร้าง |
| `Expense/Actual.md` | ✅ สมบูรณ์ | New style, ตารางคอลัมน์, ขั้นตอนบันทึก |
| `Expense/Accrued.md` | ✅ สมบูรณ์ | มี frontmatter และ title ถูกต้อง |
| `Expense/Report.md` | ✅ สมบูรณ์ | มี frontmatter และ title ถูกต้อง |

### 📂 Management — Tour (ใน sidebar แต่ยังไม่เต็ม)

| ไฟล์ | สถานะ | หมายเหตุ |
|------|--------|---------|
| `Tour/Manage-Group.md` | ❌ Empty | มีแค่ `title: Manage Group` ใน frontmatter — ต้องเขียนเนื้อหา |
| `Tour/Job-Order.md` | ❌ Empty | มีแค่ `title: Job Order` ใน frontmatter — ต้องเขียนเนื้อหา |

### 📂 Management — Guide Task

| ไฟล์ | สถานะ | หมายเหตุ |
|------|--------|---------|
| `Guide-Task.md` | ❌ Empty | มีแค่ `title: Guide Task` — ต้องเขียนเนื้อหาทั้งหมด |

### 📂 Management — Transfer

| ไฟล์ | สถานะ | หมายเหตุ |
|------|--------|---------|
| `Transfer/Manage-Transfer.md` | ❌ Empty | มีแค่ `title: Transfer` — ต้องเขียนเนื้อหา |
| `Transfer/Transfer-Order.md` | ❌ Empty | มีแค่ `title: Transfer Order` — ต้องเขียนเนื้อหา |

---

### 📂 Setting — Program

| ไฟล์ | สถานะ | หมายเหตุ |
|------|--------|---------|
| `Program/Program-list.mdx` | ⚠️ Old style | ใช้ bullet list, ไม่มีตาราง, มี MDX import — ควร rewrite เป็น new style |
| `Program/Items-Type.md` | ⚠️ Old style | ใช้ bullet list + H2 ต่อทุก column — ควร rewrite |
| `Program/Unit.md` | ⚠️ ไม่ได้ตรวจ | ต้องตรวจสอบ |

### 📂 Setting — Agent (Seller)

| ไฟล์ | สถานะ | หมายเหตุ |
|------|--------|---------|
| `Agent.md` | ⚠️ Old style | เนื้อหาครบแต่รูปแบบเก่า ใช้ bullet list, มีรูปภาพบางรูปเป็น placeholder `![]` |

### 📂 Setting — Vehicle

| ไฟล์ | สถานะ | หมายเหตุ |
|------|--------|---------|
| `Vehicle/Supplier.mdx` | ⚠️ ไม่ได้ตรวจ | ต้องตรวจสอบ |
| `Vehicle/Own-vehicle.md` | ⚠️ Old style | เนื้อหาครบแต่รูปแบบเก่า — ควร rewrite |
| `Vehicle/Group-Type.md` | ⚠️ Old style | เนื้อหาครบแต่รูปแบบเก่า — ควร rewrite |

### 📂 Setting — Employee

| ไฟล์ | สถานะ | หมายเหตุ |
|------|--------|---------|
| `Employee/Employee-Summary.mdx` | ✅ New style | Frontmatter, ภาพรวม, ตาราง |
| `Employee/Guide-Staff.mdx` | ⚠️ ไม่ได้ตรวจ | ต้องตรวจสอบ |
| `Employee/Other.mdx` | ⚠️ ไม่ได้ตรวจ | ต้องตรวจสอบ |
| `Employee/Positions.mdx` | ⚠️ ไม่ได้ตรวจ | ต้องตรวจสอบ |

### 📂 Setting — Zone Transfer

| ไฟล์ | สถานะ | หมายเหตุ |
|------|--------|---------|
| `Zone-Transfer.md` | ❌ Empty | มีแค่ `title: Zone Transfer` — ต้องเขียนเนื้อหา |

### 📂 Setting — User

| ไฟล์ | สถานะ | หมายเหตุ |
|------|--------|---------|
| `User/User-List.md` | ✅ สมบูรณ์ | New style, มีรูปภาพ, Create/View/Edit/Reset Password ครบ |
| `User/Roles.md` | ✅ สมบูรณ์ | New style, มีรูปภาพ, Create/View/Edit ครบ |
| `User/Access-Log.md` | 🔕 Commented out | ถูก comment ใน sidebar |

---

## ไฟล์ที่มีในโฟลเดอร์แต่ไม่อยู่ใน Sidebar

| ไฟล์ | หมายเหตุ |
|------|---------|
| `Company.md` | อาจเป็นหน้าข้อมูลบริษัท — ต้องตรวจสอบว่าจะ include ใน sidebar หรือไม่ |
| `Guide-List.md` | อาจเป็นรายชื่อ Guide — ต้องตรวจสอบ |

---

## สรุปสถานะ

| สถานะ | จำนวน | ความหมาย |
|-------|--------|---------|
| ✅ สมบูรณ์ | ~22 ไฟล์ | เนื้อหา new style ครบถ้วน พร้อม publish |
| ⚠️ Old style | ~6 ไฟล์ | เนื้อหาครบแต่รูปแบบเก่า ควร rewrite |
| ❌ Empty/Stub | ~7 ไฟล์ | ต้องเขียนเนื้อหาใหม่ทั้งหมด |
| 🔕 Commented out | ~12 ไฟล์ | รอ enable ใน sidebar เมื่อเนื้อหาพร้อม |
| ⚠️ ไม่ได้ตรวจ | ~5 ไฟล์ | ต้องตรวจสอบคุณภาพ |

---

## ลำดับความสำคัญในการทำงานต่อ

### Priority 1 — เขียนเนื้อหาใหม่ (Empty)
1. `Dashboard/Company-Overview.md` — หน้าแรกที่ user เห็น
2. `Tour/Manage-Group.md`
3. `Tour/Job-Order.md`
4. `Transfer/Manage-Transfer.md`
5. `Transfer/Transfer-Order.md`
6. `Guide-Task.md`
7. `Zone-Transfer.md`

### Priority 2 — Rewrite Old Style
1. `Agent.md`
2. `Program/Program-list.mdx`
3. `Vehicle/Own-vehicle.md`
4. `Vehicle/Group-Type.md`
5. `Program/Items-Type.md`

### Priority 3 — ตรวจสอบและ Enable Sidebar
- Dashboard sub-pages (8 หน้า) — เมื่อเนื้อหาพร้อม ให้ uncomment ใน `sidebars.ts`
- Report pages (Excursion, Pick-up, Drop-off, Check In)

---

## รูปแบบเนื้อหาที่ใช้งานได้ดี (Reference)

ไฟล์เหล่านี้เป็น **ตัวอย่างมาตรฐาน** ให้ใช้เป็น reference เมื่อเขียนหน้าใหม่:

- `Booking.md` — ตัวอย่าง list page พร้อม filter/export/table
- `Bookings/Create-Booking.md` — ตัวอย่าง create form page พร้อม numbered steps
- `Excursion/Manage-Group.md` — ตัวอย่าง management page แบบกระชับ
- `Check In/Check-In.md` — ตัวอย่างหน้า process/flow
- `User/User-List.md` — ตัวอย่าง CRUD page พร้อมรูปภาพ
