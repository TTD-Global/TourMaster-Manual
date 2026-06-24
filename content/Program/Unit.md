---
title: Unit
sidebar_position: 3
---

# Unit

หน้า **Unit** ใช้จัดการหน่วยการจองที่ใช้ระบุราคาของโปรแกรมทัวร์ เช่น Per Person, Child, Adult, Group

เข้าถึงได้จาก **Setting → Program → Unit**

---

## ตารางรายการ

<div className="manual-img-500">

![Unit List](/img/Program/unit-list.png)

</div>

ตารางแสดงรายการ Unit ทั้งหมด ประกอบด้วยคอลัมน์ดังนี้

| คอลัมน์ | คำอธิบาย |
|---------|----------|
| **#** | ลำดับที่ |
| **Unit Name** | ชื่อหน่วยการจอง (คลิกได้เพื่อดูรายละเอียด) |
| **Status** | สถานะการใช้งาน |
| | <span class="badge badge-active">Active</span> เปิดใช้งาน |
| | <span class="badge badge-inactive">Inactive</span> ปิดใช้งาน |
| **Last Modify Date** | วันที่แก้ไขล่าสุด |
| **Action** | ปุ่ม `...` สำหรับจัดการ |

---

## ฟังก์ชันบนหน้า

| ปุ่ม | คำอธิบาย |
|------|----------|
| **Create Unit** | สร้าง Unit ใหม่ |
| **Search** | ค้นหา Unit |
| **Filter** | กรองข้อมูลตามเงื่อนไข |
| **Export** | ดาวน์โหลดรายการ Unit |

---

## ตัวกรอง

<div className="manual-img-500">

![Program Unit Filter](/img/Filter/filter-program-unit-modal.png)

</div>

กดปุ่ม **Filter** เพื่อเปิด Modal กรองข้อมูลตามเงื่อนไขที่ต้องการ

| ฟิลด์ | คำอธิบาย |
|-------|----------|
| **Unit Name** | กรองตามชื่อ Unit |
| **Status** | กรองตามสถานะ Active / Inactive |

กด **Search** เพื่อค้นหา หรือ **Clear all** เพื่อล้างเงื่อนไข

---

## Action

กดปุ่ม `...` ในคอลัมน์ **Action** เพื่อเลือกคำสั่ง หรือคลิกที่ชื่อ Unit เพื่อดูรายละเอียด

:::caution ข้อควรระวัง
ในโหมด View จะ**ไม่สามารถแก้ไขข้อมูล**ได้ — หากต้องการแก้ไขให้กดปุ่ม **Edit** ภายในหน้า View
:::

### View

แสดงข้อมูล Unit แบบ read-only

- กดปุ่ม **Edit** เพื่อเข้าสู่โหมดแก้ไข

### Edit

แก้ไขชื่อ Unit, Type และเปลี่ยนสถานะ Active / Inactive

1. แก้ไขข้อมูลในฟิลด์ที่ต้องการ
2. กด **Save** เพื่อบันทึก หรือ **Cancel** เพื่อยกเลิก

## Create

กดปุ่ม **Create Unit** แล้วกรอกข้อมูลในฟอร์ม

<div className="manual-img-500">

![Create Unit](/img/Program/unit-create.png)

</div>

| ฟิลด์ | คำอธิบาย | จำเป็น |
|-------|----------|:------:|
| **Unit Name** | ชื่อหน่วยการจอง เช่น Person, Child, Adult, Per Person (Group of 6-8) | ✅ |
| **Type** | ประเภทหน่วย (dropdown) | ✅ |

1. กรอก **Unit Name**
2. เลือก **Type** จาก dropdown
3. กด **Save** เพื่อบันทึก หรือ **Cancel** เพื่อยกเลิก
