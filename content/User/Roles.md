---
title: Roles
sidebar_position: 2
---

# Roles

หน้า **Roles** ใช้สำหรับกำหนดสิทธิ์การเข้าถึงของผู้ใช้งานในระบบ สามารถตั้งค่าได้ว่าแต่ละ Role จะมีสิทธิ์ View / Create / Edit / Delete ในส่วนใดบ้าง

มีรายละเอียดที่สำคัญ ดังนี้

- **ปุ่ม Create Roles** สำหรับเพิ่มสิทธิ์การเข้าถึงใหม่ (มุมบนขวา)
- **Search** ค้นหา Role
- **Filter** กรองข้อมูล
- **Export** ส่งออกข้อมูล
- **Status** แสดงสถานะเปิด-ปิดการใช้งาน
- **Last Modify Date** วันที่สร้างหรือแก้ไขข้อมูลล่าสุด
- **Action (···)** สำหรับจัดการสิทธิ์รายบุคคล

ตารางแสดงคอลัมน์ดังนี้

| คอลัมน์ | คำอธิบาย |
|---|---|
| **#** | ลำดับที่ |
| **Roles List** | ชื่อ Role (แสดงเป็น Link กดเพื่อเข้าดูรายละเอียด) |
| **Status** | สถานะการใช้งาน Active / Inactive |
| **Last Modify Date** | วันที่แก้ไขล่าสุด (รูปแบบ DD/MM/YYYY) |
| **Action** | ปุ่มจัดการ (···) |

![](/img/user-roles.jpeg)

---

## Create Roles

กดปุ่ม **Create Roles** มุมบนขวา ระบบจะนำไปยังหน้าสร้าง Role ใหม่ แบ่งเป็น 2 ส่วน

### Role Detail

- **Role Name \*** — ตั้งชื่อสิทธิ์การเข้าถึง จำเป็นต้องกรอก หากไม่กรอกจะไม่สามารถบันทึกได้
- **Status** — กำหนดสถานะ Active หรือ Inactive

![](/img/roles-rolename.jpeg)

### Role Permissions

กำหนดสิทธิ์ในการใช้งานแต่ละ Function โดยแบ่งตาม Module ของระบบ เช่น Dashboard, Management, Setting

- **Select All** — กดเพื่อเลือกสิทธิ์ทั้งหมดในทุก Function
- Checkbox ซ้ายสุดของแต่ละแถว — เลือกสิทธิ์ทั้งหมดสำหรับ Function นั้น
- เลือกได้รายสิทธิ์: **View**, **Create**, **Edit**, **Delete**

ตัวอย่างโครงสร้าง Role Permissions

| Function | View | Create | Edit | Delete |
|---|---|---|---|---|
| Dashboard / Company Overview | ✓ | — | — | — |
| Management / Booking | ✓ | ✓ | ✓ | — |
| Management / Excursion / Manage Group | ✓ | ✓ | ✓ | — |
| Management / Transport / Job Order | ✓ | ✓ | ✓ | ✓ |

กด **Save** เพื่อบันทึก หรือ **Cancel** เพื่อยกเลิก

![](/img/roles-rolepermiss.jpeg)

---

## Status

แสดงสถานะการใช้งานของ Role แบ่งเป็น 2 สถานะ

- **Active** — _เปิดการใช้งาน_ สิทธิ์นี้ แสดงเป็น Badge สีเขียว
- **Inactive** — _ปิดการใช้งาน_ สิทธิ์นี้ แสดงเป็น Badge สีแดง

![](/img/roles-status.jpeg)

---

## Last Modify Date

แสดงวันที่ที่สร้างหรือแก้ไขข้อมูล Role ล่าสุด ในรูปแบบ DD/MM/YYYY

![](/img/roles-lastmodify.jpeg)

---

## Action (···)

กดปุ่ม **···** ที่แถว Role หรือกดที่ **ชื่อ Role** โดยตรง จะปรากฏเมนู **View**

![](/img/roles-action.jpeg)

### View

เพื่อเข้าตรวจสอบข้อมูล Role ที่สร้างขึ้น _ไม่สามารถแก้ไขข้อมูลได้ในโหมดนี้_

- แสดง **Role Detail**: ชื่อ Role และ Status (Active/Inactive)
- แสดง **Role Permissions**: ตารางสิทธิ์ทั้งหมดที่กำหนดไว้ แบ่งตามกลุ่ม Function
- **Close** — ปิดและกลับไปหน้ารายการ
- **Edit** — กดเพื่อเข้าสู่โหมดแก้ไข

![](/img/roles-view.jpeg)

### Edit

กดปุ่ม **Edit** จากหน้า View เพื่อแก้ไขข้อมูล Role

- **Role Name \*** — แก้ไขชื่อ Role ได้
- **Status** — Dropdown เลือก **Active** (เปิดใช้งาน) หรือ **Inactive** (ปิดใช้งานชั่วคราว)
- **Role Permissions** — เพิ่มหรือลดสิทธิ์แต่ละ Function ได้ผ่าน Checkbox
- **Select All** — กดเพื่อเลือกสิทธิ์ทั้งหมด
- กด **Save** เพื่อบันทึก หรือ **Cancel** เพื่อยกเลิก

![](/img/roles-edit.jpeg)
