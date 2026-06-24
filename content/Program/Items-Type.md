---
title: Item Type
sidebar_position: 2
---

# Item Type

หน้า **Item Type** ใช้จัดการประเภทรายการค่าใช้จ่ายใน Program แต่ละ Item Type สามารถมีรายการย่อย (Sub Item) ได้หลายรายการ

เข้าถึงได้จาก **Setting → Program → Item Type**

---

## ตารางรายการ

![Item Type List](/img/Program/item-type-list.png)

ตารางแสดงรายการ Item Type ทั้งหมด ประกอบด้วยคอลัมน์ดังนี้

| คอลัมน์ | คำอธิบาย |
|---------|----------|
| **#** | ลำดับที่ |
| **Item Type** | ชื่อประเภทรายการค่าใช้จ่าย (คลิกได้เพื่อดูรายละเอียด) |
| **Items quantity** | จำนวน Sub Item ที่อยู่ภายใต้ Item Type นี้ (คลิกเพื่อดูรายการ) |
| **Status** | สถานะการใช้งาน |
| | <span class="badge badge-active">Active</span> เปิดใช้งาน |
| | <span class="badge badge-inactive">Inactive</span> ปิดใช้งาน |
| **Last Modify Date** | วันที่แก้ไขล่าสุด |
| **Action** | ปุ่ม `...` สำหรับจัดการ |

---

## ฟังก์ชันบนหน้า

| ปุ่ม | คำอธิบาย |
|------|----------|
| **Create Item Type** | สร้าง Item Type ใหม่ |
| **Search** | ค้นหา Item Type |
| **Filter** | กรองข้อมูลตามเงื่อนไข |
| **Export** | ดาวน์โหลดรายการ Item Type |

---

## Action

กดปุ่ม `...` ในคอลัมน์ **Action** เพื่อเลือกคำสั่ง หรือคลิกที่ชื่อ Item Type เพื่อดูรายละเอียด

:::caution ข้อควรระวัง
ในโหมด View จะ**ไม่สามารถแก้ไขข้อมูล**ได้ — หากต้องการแก้ไขให้กดปุ่ม **Edit** ภายในหน้า View
:::

### View

แสดงข้อมูล Item Type แบบ read-only พร้อมรายชื่อ Sub Item ทั้งหมด

- กดปุ่ม **Edit** เพื่อเข้าสู่โหมดแก้ไข

### Edit

แก้ไขชื่อ Item Type, เพิ่ม/ลบ Sub Item และเปลี่ยนสถานะ Active / Inactive

1. แก้ไขข้อมูลในฟิลด์ที่ต้องการ
2. กด **Save** เพื่อบันทึก หรือ **Cancel** เพื่อยกเลิก

### Delete

กดเพื่อลบ Item Type ออกจากระบบ

:::caution ข้อควรระวัง
การลบ Item Type จะลบ Sub Item ทั้งหมดที่อยู่ภายใต้ด้วย และไม่สามารถกู้คืนได้
:::

---

## Create

กดปุ่ม **Create Item Type** แล้วกรอกข้อมูลในฟอร์ม

![Create Item Type](/img/Program/item-type-create.png)

### General Detail

| ฟิลด์ | คำอธิบาย | จำเป็น |
|-------|----------|:------:|
| **Item Type Name** | ชื่อประเภทรายการค่าใช้จ่ายหลัก เช่น อาหารว่าง, ค่าเช่ารถ, ค่าตัวไกด์ | ✅ |

### Sub Item Type

เพิ่มรายการย่อยภายใต้ Item Type นี้

| ฟิลด์ | คำอธิบาย | จำเป็น |
|-------|----------|:------:|
| **Sub Item Name** | ชื่อรายการย่อย เช่น ขนม, ผลไม้ (ภายใต้ "อาหารว่าง") | — |

1. กรอก **Item Type Name**
2. กด **Add Sub Item** เพื่อเพิ่มรายการย่อย แล้วกรอก **Sub Item Name**
3. กด **Add Sub Item** ซ้ำได้เพื่อเพิ่ม Sub Item หลายรายการ
4. กดไอคอนถังขยะเพื่อลบ Sub Item ที่ไม่ต้องการ
5. กด **Save** เพื่อบันทึก หรือ **Cancel** เพื่อยกเลิก

:::tip เคล็ดลับ
Sub Item เป็นตัวเลือกเสริม — สามารถสร้าง Item Type โดยไม่มี Sub Item ได้ และเพิ่ม Sub Item ภายหลังผ่าน Edit ได้เช่นกัน
:::
