---
title: Seller
---

# Seller

หน้า **Seller** ใช้จัดการรายชื่อผู้ขาย (ตัวแทนจำหน่าย) ที่ผูกโปรแกรมทัวร์ไว้

เข้าถึงได้จาก **Setting → Seller** ในเมนูหลัก

---

## ตารางรายการ

<div className="manual-img-500">

![Seller List](/img/Seller/seller-list.png)

</div>

ตารางแสดงรายการ Seller ทั้งหมด ประกอบด้วยคอลัมน์ดังนี้

| คอลัมน์ | คำอธิบาย |
|---------|----------|
| **#** | ลำดับที่ |
| **Image** | รูปโปรไฟล์ |
| **Seller Name** | ชื่อ Seller (คลิกได้เพื่อดูรายละเอียด) |
| **Program Quantity** | จำนวนโปรแกรมที่ผูกไว้ (คลิกได้) |
| **Status** | สถานะการใช้งาน |
| | <span class="badge badge-active">Active</span> เปิดใช้งาน |
| | <span class="badge badge-inactive">Inactive</span> ปิดใช้งาน |
| **Last Modify Date** | วันที่แก้ไขล่าสุด |
| **Action** | ปุ่ม `...` สำหรับจัดการ |

---

## ฟังก์ชันบนหน้า

| ปุ่ม | คำอธิบาย |
|------|----------|
| **Create Seller** | สร้าง Seller ใหม่ |
| **Search** | ค้นหา Seller |
| **Filter** | กรองข้อมูลตามเงื่อนไข |
| **Export** | ดาวน์โหลดรายชื่อ Seller |

---

## ตัวกรอง

<div className="manual-img-500">

![Seller Filter](/img/Filter/filter-seller-modal.png)

</div>

กดปุ่ม **Filter** เพื่อเปิด Modal กรองข้อมูลตามเงื่อนไขที่ต้องการ

| ฟิลด์ | คำอธิบาย |
|-------|----------|
| **Seller Name** | กรองตามชื่อ Seller |
| **Status** | กรองตามสถานะ Active / Inactive |

กด **Search** เพื่อค้นหา หรือ **Clear all** เพื่อล้างเงื่อนไข

---

## Action

กดปุ่ม `...` ในคอลัมน์ **Action** เพื่อเลือกคำสั่ง หรือคลิกที่ชื่อ Seller เพื่อเข้าดูรายละเอียด

:::caution ข้อควรระวัง
ในโหมด View จะ**ไม่สามารถแก้ไขข้อมูล**ได้ — หากต้องการแก้ไขให้กดปุ่ม **Edit** ภายในหน้า View
:::

### View

แสดงข้อมูล Seller แบบ read-only พร้อมรายชื่อโปรแกรมที่ผูกไว้

- กดปุ่ม **Edit** เพื่อเข้าสู่โหมดแก้ไข
- กดตัวเลข **Program Quantity** เพื่อดูรายการโปรแกรมทั้งหมด

### Edit

แก้ไขข้อมูล Seller ได้ทุกส่วน รวมถึงเปลี่ยนสถานะ Active / Inactive

1. แก้ไขข้อมูลในฟิลด์ที่ต้องการ
2. กด **Save** เพื่อบันทึก หรือ **Cancel** เพื่อยกเลิก

## Create

กดปุ่ม **Create Seller** แล้วกรอกข้อมูลในฟอร์ม

<div className="manual-img-500">

![Create Seller](/img/Seller/seller-create.png)

</div>

### General Detail

| ฟิลด์ | คำอธิบาย | จำเป็น |
|-------|----------|:------:|
| รูปโปรไฟล์ | อัปโหลดรูป Seller | — |
| **Seller Name** | ชื่อ Seller | ✅ |
| **Phone Number** | เบอร์โทรศัพท์ | — |
| **Email** | อีเมล | — |
| **Address** | ที่อยู่ | — |
| **Country** | ประเทศ (dropdown) | — |
| **Destination** | จังหวัด / ปลายทาง (dropdown) | — |
| **District** | เขต/อำเภอ (dropdown) | — |
| **Sub-district** | แขวง/ตำบล (dropdown) | — |
| **Postal Code** | รหัสไปรษณีย์ | — |

### Booking No.

| ฟิลด์ | คำอธิบาย | จำเป็น |
|-------|----------|:------:|
| **Auto Booking No.** | เปิดใช้งานการสร้างเลข Booking อัตโนมัติสำหรับ Seller นี้ | — |

1. กรอกข้อมูลในฟอร์ม
2. กด **Save** เพื่อบันทึก หรือ **Cancel** เพื่อยกเลิก
