---
title: Roles
sidebar_position: 2
---

# Roles

หน้า **Roles** ใช้สำหรับกำหนดสิทธิ์การเข้าถึงของผู้ใช้งานในระบบ สามารถตั้งค่าได้ว่าแต่ละ Role จะมีสิทธิ์ View / Create / Edit / Delete ในส่วนใดบ้าง

ตารางแสดงคอลัมน์ดังนี้

| คอลัมน์ | คำอธิบาย |
|---|---|
| **#** | ลำดับที่ |
| **Roles List** | ชื่อ Role |
| **Status** | สถานะการใช้งาน Active / Inactive |
| **Last Modify Date** | วันที่สร้าง/แก้ไขล่าสุด |
| **Action** | ปุ่มคำสั่ง |

![](/img/roles-table.jpeg)

---

## Create Roles

กดปุ่ม **Create Roles** มุมบนขวา ระบบจะนำไปยังหน้าสร้าง Role แบ่งเป็น 2 ส่วน

### Role Detail

- **Role Name**<span class="required-asterisk">*</span> — ตั้งชื่อสิทธิ์การเข้าถึง
- **Status** — กำหนดสถานะ Active หรือ Inactive

![](/img/roles-rolename.png)

### Role Permissions

กำหนดสิทธิ์ในการใช้งานแต่ละ Function

- **Select All/Unselect All** — เลือก/ไม่เลือกสิทธิ์ทั้งหมด
- **Role Permissions** — เลือกกำหนดสิทธิ์แต่ละ Function
- กด **Save** เพื่อบันทึก หรือ **Cancel** เพื่อยกเลิก

![](/img/roles-rolepermiss.jpeg)

---

## Status

แสดงสถานะการใช้งานของ Role แบ่งเป็น 2 สถานะ

- **Active** — _เปิดการใช้งาน_ สิทธิ์นี้ แสดงเป็น Badge สีเขียว
- **Inactive** — _ปิดการใช้งาน_ สิทธิ์นี้ แสดงเป็น Badge สีแดง

![สถานะ Role Active และ Inactive](/img/roles-status2.jpg)

---

### View

![](/img/roles-action.png)

- แสดง **Role Detail**: ชื่อ Role และ Status (Active/Inactive)
- แสดง **Role Permissions**: ตารางสิทธิ์ทั้งหมดที่กำหนดไว้ แบ่งกลุ่มตาม Function
- **Close** — ปิดและกลับไปหน้ารายการ
- **Edit** — กดเพื่อเข้าสู่โหมดแก้ไข

![](/img/roles-view.jpeg)

### Edit

กดปุ่ม **Edit** จากหน้า View เพื่อแก้ไขข้อมูล Role

- **Role Name**<span class="required-asterisk">*</span> — แก้ไขชื่อ Role
- **Status** — Dropdown เลือก **Active** (เปิดใช้งาน) หรือ **Inactive** (ปิดใช้งาน)
- **Role Permissions** — เลือกกำหนดสิทธิ์แต่ละ Function
- **Select All/Unselect All** — เลือก/ไม่เลือกสิทธิ์ทั้งหมด
- กด **Save** เพื่อบันทึก หรือ **Cancel** เพื่อยกเลิก

![](/img/roles-edit.jpeg)
