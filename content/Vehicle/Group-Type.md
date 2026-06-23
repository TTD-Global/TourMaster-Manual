---
title: Group Type
sidebar_position: 1
---

# Group Type

หน้า **Group Type** ใช้จัดการประเภทยานพาหนะและจำนวนที่นั่งที่รองรับ ข้อมูลนี้จะถูกนำไปใช้ในหน้า Own Vehicle และ Supplier

เข้าถึงได้จาก **Setting → Vehicle → Group Type**

---

## ตารางรายการ

![Group Type List](/img/Vehicle/group-type-list.png)

ตารางแสดงรายการประเภทยานพาหนะทั้งหมด ประกอบด้วยคอลัมน์ดังนี้

| คอลัมน์ | คำอธิบาย |
|---------|----------|
| **#** | ลำดับที่ |
| **Group type Name** | ชื่อประเภทยานพาหนะ (คลิกได้เพื่อดูรายละเอียด) |
| **Capacity** | จำนวนที่นั่งทั้งหมด |
| **Arrangement Type** | ประเภทการจัดรถ (Excursion / Transport) |
| **Status** | สถานะการใช้งาน |
| | **Active**: เปิดใช้งาน (Badge สีเขียว) |
| | **Inactive**: ปิดใช้งาน (Badge สีแดง) |
| **Last Modify Date** | วันที่แก้ไขล่าสุด |
| **Action** | ปุ่ม `...` สำหรับจัดการ |

---

## ฟังก์ชันบนหน้า

| ปุ่ม | คำอธิบาย |
|------|----------|
| **Create Group Type** | สร้างประเภทยานพาหนะใหม่ |
| **Search** | ค้นหาประเภทยานพาหนะ |
| **Filter** | กรองข้อมูลตามเงื่อนไข |
| **Export** | ดาวน์โหลดรายการประเภทยานพาหนะ |

---

## Action

กดปุ่ม `...` ในคอลัมน์ **Action** เพื่อเลือกคำสั่ง หรือคลิกที่ชื่อ Group Type เพื่อดูรายละเอียด

:::caution ข้อควรระวัง
ในโหมด View จะ**ไม่สามารถแก้ไขข้อมูล**ได้ — หากต้องการแก้ไขให้กดปุ่ม **Edit** ภายในหน้า View
:::

### View

แสดงข้อมูล Group Type แบบ read-only

- กดปุ่ม **Edit** เพื่อเข้าสู่โหมดแก้ไข

### Edit

แก้ไขข้อมูล Group Type ได้ทุกส่วน รวมถึงเปลี่ยนสถานะ Active / Inactive

1. แก้ไขข้อมูลในฟิลด์ที่ต้องการ
2. กด **Save** เพื่อบันทึก หรือ **Cancel** เพื่อยกเลิก

### Delete

กดเพื่อลบประเภทยานพาหนะออกจากระบบ

:::caution ข้อควรระวัง
ไม่ควรลบ Group Type ที่มีการใช้งานอยู่ใน Own Vehicle หรือ Supplier
:::

---

## Create

กดปุ่ม **Create Group Type** แล้วกรอกข้อมูลในฟอร์ม

![Create Group Type](/img/Vehicle/group-type-create.png)

| ฟิลด์ | คำอธิบาย | จำเป็น |
|-------|----------|:------:|
| **Arrangement Type** | ประเภทการจัดรถ — เลือกได้ทั้งสอง: **Excursion** / **Transport** | ✅ |
| **Group Type Name** | ชื่อประเภทยานพาหนะ เช่น Bus, Van, Car | ✅ |
| **Capacity** | จำนวนที่นั่งทั้งหมดของยานพาหนะประเภทนี้ | ✅ |
| **Recommend** | จำนวนที่นั่งที่แนะนำ (ใช้อ้างอิงใน Booking) | — |
| **Type** | รูปแบบยานพาหนะ — เลือก 1 รูปแบบ: Car / MPV/SUV / Bus / Van / Boat / Motorcycle / Guide | ✅ |

1. เลือก **Arrangement Type** (Excursion / Transport หรือทั้งสอง)
2. กรอก **Group Type Name**
3. กรอก **Capacity**
4. กรอก **Recommend** (ไม่บังคับ)
5. เลือก **Type** ของยานพาหนะ
6. กด **Save** เพื่อบันทึก หรือ **Cancel** เพื่อยกเลิก

:::info
**Recommend** ควรน้อยกว่าหรือเท่ากับ **Capacity** — หากมากกว่าจะไม่สามารถบันทึกได้
:::
