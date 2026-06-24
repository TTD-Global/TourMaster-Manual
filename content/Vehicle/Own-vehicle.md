---
title: Own Vehicle
sidebar_position: 2
---

# Own Vehicle

หน้า **Own Vehicle** ใช้จัดการยานพาหนะและบุคลากรของบริษัทเอง แบ่งออกเป็น 2 ส่วน ได้แก่ ทะเบียนรถ (Registration) และรายชื่อบุคลากร (Personnel list)

เข้าถึงได้จาก **Setting → Vehicle → Own Vehicle**

---

## ภาพรวม

หน้านี้แสดงข้อมูลของบริษัทที่เข้าสู่ระบบ โดยมี 2 แท็บ

### Registration

<div className="manual-img-500">

![Own Vehicle Registration](/img/Vehicle/own-vehicle-registration.png)

</div>

ตารางแสดงรายการทะเบียนรถทั้งหมด ประกอบด้วยคอลัมน์ดังนี้

| คอลัมน์ | คำอธิบาย |
|---------|----------|
| **#** | ลำดับที่ |
| **Registration** | หมายเลขป้ายทะเบียนรถ |
| **Group Type** | ประเภทยานพาหนะ (อ้างอิงจาก Group Type) |
| **Active** | สถานะเปิด-ปิดใช้งานรถคันนี้ (toggle) |
| **Action** | ปุ่ม `...` สำหรับจัดการ |

### Personnel list

<div className="manual-img-500">

![Own Vehicle Personnel](/img/Vehicle/own-vehicle-personnel.png)

</div>

ตารางแสดงรายชื่อบุคลากรที่ผูกกับยานพาหนะ ประกอบด้วยคอลัมน์ดังนี้

| คอลัมน์ | คำอธิบาย |
|---------|----------|
| **#** | ลำดับที่ |
| **Image** | รูปโปรไฟล์ |
| **Position** | ตำแหน่งงาน |
| **Name** | ชื่อบุคลากร (คลิกได้เพื่อดูรายละเอียด) |
| **Phone Number** | เบอร์โทรศัพท์ |
| **Registration** | ทะเบียนรถที่มอบหมาย |
| **Action** | ปุ่ม `...` สำหรับจัดการ |

---

## ฟังก์ชันบนหน้า

| ปุ่ม | แท็บ | คำอธิบาย |
|------|------|----------|
| **Add Registration** | Registration | เพิ่มทะเบียนรถใหม่ |
| **Add Personnel** | Personnel list | เพิ่มบุคลากรใหม่ |
| **Search** | ทั้งสองแท็บ | ค้นหาข้อมูล |

---

## Action

กดปุ่ม `...` ในคอลัมน์ **Action** เพื่อเลือกคำสั่ง

### View

แสดงข้อมูลทะเบียนรถหรือบุคลากรแบบ read-only

### Edit

แก้ไขข้อมูลได้ทุกส่วน รวมถึงเปลี่ยนสถานะ Active / Inactive

## Add Registration

กดปุ่ม **Add Registration** บนแท็บ Registration

<div className="manual-img-500">

![Add Registration](/img/Vehicle/own-vehicle-add-registration.png)

</div>

1. กด **Add group type** เพื่อเปิด modal เลือกประเภทรถ
2. เลือกแท็บ **Excursion** หรือ **Transport** เพื่อกรองประเภทรถ
3. เลือก Group Type ที่ต้องการ (เลือกได้หลายรายการ)
4. กรอกหมายเลขทะเบียนสำหรับแต่ละ Group Type ที่เลือก
5. กด **Save** เพื่อบันทึก หรือ **Cancel** เพื่อยกเลิก

:::tip เคล็ดลับ
สามารถกด **Add group type** ซ้ำได้เพื่อเพิ่มทะเบียนรถหลายประเภทในครั้งเดียว
:::
