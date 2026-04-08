---
title: User List
sidebar_position: 1
---

# User List

หน้า **User List** แสดงรายชื่อผู้ใช้งาน

ตารางแสดงคอลัมน์ดังนี้

| คอลัมน์ | คำอธิบาย |
|---|---|
| **#** | ลำดับที่ |
| **Image** | รูปภาพโปรไฟล์ |
| **Employee Code** | รหัสพนักงาน |
| **Role** | สิทธิ์การเข้าถึง |
| **Username** | ชื่อผู้ใช้งาน |
| **Name** | ชื่อ-นามสกุล |
| **Email** | อีเมล |
| **Last Login** | วันและเวลาที่เข้าสู่ระบบล่าสุด |
| **Action** | ปุ่มคำสั่ง |

![](/img/User-list.jpeg)

---

## Create User

กดปุ่ม **Create User** มุมบนขวา ระบบจะนำไปยังหน้าสร้างผู้ใช้งาน โดยแบ่งเป็น 2 ส่วน

### General Detail — ข้อมูลทั่วไป

- **Image** — อัปโหลดรูปภาพ
- **Employee Code** — รหัสพนักงาน
- **First Name** — ชื่อ
- **Last Name** — นามสกุล
- **Email** — อีเมล
- **Phone** — เบอร์โทรศัพท์ 

### Security — ข้อมูลสำคัญ

- **Role <span class="required-asterisk">*</span>** — สิทธิ์การเข้าถึง 
- **Username <span class="required-asterisk">*</span>** — ชื่อ หรือ ID สำหรับเข้าสู่ระบบ
- **Password <span class="required-asterisk">*</span>** — รหัสผ่าน
- **Confirm Password <span class="required-asterisk">*</span>** — ยืนยันรหัสผ่านให้ตรงกับ Password
- กด **Save** เพื่อบันทึก หรือ **Cancel** เพื่อยกเลิก

![](/img/Create-User.jpeg)

---

### View

![](/img/Action-user.png)

- แสดงข้อมูลของ General Detail และ Security
- **Close** — ปิดหน้าและกลับไปหน้ารายการ
- **Edit** — กดเพื่อเข้าสู่โหมดแก้ไข

![View](/img/View-user.jpeg)

### Edit

กดปุ่ม **Edit** จากหน้า View เพื่อแก้ไขข้อมูลผู้ใช้งาน

- **Status** — เลือกสถานะ **Active** (เปิดใช้งาน) หรือ **Inactive** (ปิดใช้งาน)
- **Reset Password** — กดเพื่อเปลี่ยนรหัสผ่าน
- กด **Save** เพื่อบันทึก หรือ **Cancel** เพื่อยกเลิก

![Edit](/img/Edit-user.jpg)

#### Reset Password

- **New Password <span class="required-asterisk">*</span>** — รหัสผ่านใหม่
- **Confirm Password <span class="required-asterisk">*</span>** — ยืนยันรหัสผ่านใหม่
- กด **Save** เพื่อบันทึก หรือ **Cancel** เพื่อยกเลิก

![resetpassword](/img/reset-password.png)
