---
title: Zone Transfer
---

# Zone Transfer

หน้า **Zone Transfer** ใช้จัดการโซนปลายทางของการรับส่ง แต่ละโซนประกอบด้วยปลายทาง (Destination) และรายชื่อจุดย่อยภายในโซนนั้น

เข้าถึงได้จาก **Zone Transfer** ในเมนูหลัก

---

## ตารางรายการ

![Zone Transfer List](/img/ZoneTransfer/zone-transfer-list.png)

ตารางแสดงรายการ Zone Transfer ทั้งหมด ประกอบด้วยคอลัมน์ดังนี้

| คอลัมน์ | คำอธิบาย |
|---------|----------|
| **#** | ลำดับที่ |
| **Zone Transfer Name** | ชื่อโซน (คลิกได้เพื่อดูรายละเอียด) |
| **Zone Transfer Quantity** | จำนวนจุดย่อยภายในโซนนี้ (คลิกได้) |
| **Status** | สถานะการใช้งาน |
| | **Active**: เปิดใช้งาน (Badge สีเขียว) |
| | **Inactive**: ปิดใช้งาน (Badge สีแดง) |
| **Last Modify Date** | วันที่แก้ไขล่าสุด |
| **Action** | ปุ่ม `...` สำหรับจัดการ |

---

## ฟังก์ชันบนหน้า

| ปุ่ม | คำอธิบาย |
|------|----------|
| **Create Zone Transfer** | สร้าง Zone Transfer ใหม่ |
| **Search** | ค้นหาโซน |
| **Filter** | กรองข้อมูลตามเงื่อนไข |
| **Export** | ดาวน์โหลดรายการโซน |

---

## Action

กดปุ่ม `...` ในคอลัมน์ **Action** เพื่อเลือกคำสั่ง หรือคลิกที่ชื่อโซนเพื่อเข้าดูรายละเอียด

:::caution ข้อควรระวัง
ในโหมด View จะ**ไม่สามารถแก้ไขข้อมูล**ได้ — หากต้องการแก้ไขให้กดปุ่ม **Edit** ภายในหน้า View
:::

### View

แสดงข้อมูล Zone Transfer แบบ read-only พร้อมรายชื่อจุดย่อยทั้งหมดภายในโซน

### Edit

แก้ไขข้อมูล Zone Transfer ได้ทุกส่วน

1. แก้ไขข้อมูลที่ต้องการ
2. กด **Save** เพื่อบันทึก หรือ **Cancel** เพื่อยกเลิก

### Delete

กดเพื่อลบ Zone Transfer ออกจากระบบ

:::caution ข้อควรระวัง
การลบ Zone Transfer จะไม่สามารถกู้คืนได้
:::

---

## Create

กดปุ่ม **Create Zone Transfer** แล้วกรอกข้อมูลในฟอร์ม

![Create Zone Transfer](/img/ZoneTransfer/zone-transfer-create.png)

| ฟิลด์ | คำอธิบาย | จำเป็น |
|-------|----------|:------:|
| **Destination** | ปลายทางของโซน (dropdown) | ✅ |
| **Zone Transfer Name** | ชื่อจุดย่อยภายในโซน (กรอกได้หลายจุด) | ✅ |

1. เลือก **Destination** จาก dropdown
2. กด **Add Zone Transfer** เพื่อเพิ่มจุดย่อย แล้วกรอก **Zone Transfer Name**
3. กด **Add Zone Transfer** ซ้ำได้เพื่อเพิ่มจุดย่อยหลายจุดในโซนเดียวกัน
4. กด **Save** เพื่อบันทึก หรือ **Cancel** เพื่อยกเลิก

:::tip เคล็ดลับ
สามารถเพิ่มจุดย่อย (Zone Transfer Name) ได้หลายรายการภายใต้ Destination เดียวกัน โดยกด **Add Zone Transfer** ซ้ำ
:::
