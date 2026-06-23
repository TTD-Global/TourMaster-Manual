# prompts.md — Prompt สำเร็จรูปสำหรับ Claude Code

Copy prompt ด้านล่างแล้ว paste ใน Claude Code ได้เลย  
แก้ไขส่วนที่อยู่ใน `[วงเล็บ]` ให้ตรงกับงานที่ต้องการ

---

## 🚀 เริ่มต้น Session ใหม่

ใช้ทุกครั้งที่เปิด Claude Code ขึ้นมาใหม่ เพื่อโหลด context:

```
อ่านไฟล์เหล่านี้ก่อนเริ่มทำงาน:
1. CLAUDE.md — กฎการเขียน
2. context.md — ภาพรวมโปรเจกต์และสถานะไฟล์
3. TASKS.md — รายการงานที่ต้องทำ

จากนั้นสรุปให้ฉันว่า งานที่ต้องทำต่อไปคืออะไร (Priority 1 ก่อน)
```

---

## ✍️ เขียนหน้าใหม่ (Empty Page)

```
อ่าน CLAUDE.md และ SKILL.md ก่อน

จากนั้นเขียนไฟล์ content/[path/FileName].md
โดยใช้ content/[reference-file.md] เป็นตัวอย่าง

ข้อมูลหน้านี้:
- ชื่อหน้า: [ชื่อภาษาอังกฤษ]
- sidebar_position: [ตัวเลข]
- column ที่มีใน UI: [รายชื่อ column]
- ฟีเจอร์: [สิ่งที่หน้านี้ทำได้]
```

**ตัวอย่างจริง:**
```
อ่าน CLAUDE.md และ SKILL.md ก่อน

จากนั้นเขียนไฟล์ content/Tour/Manage-Group.md
โดยใช้ content/Excursion/Manage-Group.md เป็นตัวอย่าง

ข้อมูลหน้านี้:
- ชื่อหน้า: Manage Group — Tour
- sidebar_position: 1
- column ที่มีใน UI: #, Program Name, Travel Date, Pax, Action
- ฟีเจอร์: Date Filter, ค้นหาโปรแกรม, จัดสรรรถ
```

---

## 🔄 Rewrite Old Style → New Style

```
อ่าน CLAUDE.md และ SKILL.md ก่อน

จากนั้นอ่านไฟล์ content/[FileName].md ที่มีอยู่แล้ว
แล้ว rewrite ใหม่ให้ตรงมาตรฐาน new style โดย:
- แปลง bullet list → ตาราง (เฉพาะส่วนที่เป็น column ของ UI)
- รวม H2 per column → ตารางเดียว
- เพิ่ม --- คั่น section
- เพิ่ม frontmatter ให้ครบ (title, sidebar_position)
- เพิ่ม admonition ถ้ามีคำเตือนหรือเคล็ดลับในเนื้อหาเดิม
- ห้ามลบข้อมูลที่ยังถูกต้องออก
```

**ตัวอย่างจริง:**
```
อ่าน CLAUDE.md และ SKILL.md ก่อน
แล้ว rewrite content/Agent.md ให้ตรงมาตรฐาน new style
ใช้ content/User/User-List.md เป็น reference สำหรับ CRUD page
```

---

## 📝 เขียนหลายหน้าพร้อมกัน (Batch)

```
อ่าน CLAUDE.md และ SKILL.md ก่อน

เขียนไฟล์ต่อไปนี้ทีละไฟล์ตามลำดับ โดยใช้ pattern เดียวกัน:
1. content/[File1].md — [คำอธิบายสั้น]
2. content/[File2].md — [คำอธิบายสั้น]
3. content/[File3].md — [คำอธิบายสั้น]

Reference: content/[reference-file.md]
```

**ตัวอย่างจริง (Dashboard sub-pages):**
```
อ่าน CLAUDE.md ก่อน

เขียนไฟล์ต่อไปนี้ทีละไฟล์ ทุกหน้าเป็น Dashboard widget summary:
1. content/Dashboard/Booking.md — สรุปสถานะ Booking (Reserved/Confirmed/Completed/Canceled)
2. content/Dashboard/Tour.md — สรุปจำนวน Tour ในแต่ละวัน
3. content/Dashboard/Expense.md — สรุปค่าใช้จ่ายรวม

ใช้ content/Dashboard/Company-Overview.md เป็น reference
```

---

## 🔧 เพิ่มหน้าใหม่ใน Sidebar

```
เปิดไฟล์ sidebars.ts แล้วเพิ่ม [ชื่อหน้า] เข้าไปใน category [ชื่อหมวด]
path ที่ต้องเพิ่มคือ "[path/FileName]" (ไม่ต้องมี .md และไม่ต้องมี content/ นำหน้า)

ตำแหน่งที่เพิ่ม: [ระบุว่าเพิ่มก่อนหรือหลัง item ไหน]
```

**ตัวอย่างจริง:**
```
เปิด sidebars.ts แล้วเพิ่ม Tour/Manage-Group และ Tour/Job-Order
เข้าไปใน category "Tour" ให้อยู่ในลำดับนี้:
items: ["Tour/Manage-Group", "Tour/Job-Order"]
```

---

## 🖼️ ใส่รูปภาพในไฟล์ที่มีอยู่แล้ว

```
อ่าน img-inventory.md เพื่อดูว่ามีรูปอะไรใน /img/ แล้ว
จากนั้นเปิด content/[FileName].md แล้วเพิ่มรูปภาพที่เหมาะสมใน section ต่างๆ

รูปที่มีอยู่แล้วสำหรับหน้านี้: [ระบุถ้าทราบ]
ถ้าไม่มีรูปให้ใส่ placeholder: ![ชื่อหน้า screenshot]
```

---

## 🔍 ตรวจสอบคุณภาพไฟล์

```
อ่าน CLAUDE.md เพื่อทราบมาตรฐาน
แล้วตรวจสอบไฟล์ content/[FileName].md ว่าตรงตามมาตรฐานหรือไม่ โดยเช็ค:
- frontmatter ครบ (title, sidebar_position)
- H1 ใช้ครั้งเดียวและตรงกับ title
- มี --- คั่นทุก H2
- column ที่เป็น UI ใช้ตาราง ไม่ใช่ bullet
- ชื่อปุ่ม UI เป็น bold
- path รูปขึ้นต้นด้วย /img/

ถ้าพบปัญหา แก้ไขให้ถูกต้องเลย
```

---

## 📊 อัปเดตสถานะหลัง Session

```
อัปเดต TASKS.md โดย:
- tick [x] งานที่เพิ่งทำเสร็จ
- เพิ่ม note วันที่และสิ่งที่ทำในส่วน "หมายเหตุการทำงาน"
- ถ้าพบงานใหม่ที่ต้องทำ เพิ่มเข้าไปใน priority ที่เหมาะสม
```

---

## 🗺️ ดูภาพรวมโปรเจกต์

```
อ่าน context.md แล้วสรุปให้ฉันว่า:
1. ไฟล์ไหนทำเสร็จแล้ว
2. ไฟล์ไหนยังขาด
3. งานที่ควรทำต่อไปคืออะไร
```
