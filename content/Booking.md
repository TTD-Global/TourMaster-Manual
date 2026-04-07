---
title: Booking List
sidebar_position: 1
---

# Booking List

**Booking List** คือหน้าสำหรับดูและจัดการรายการ Booking ทั้งหมดในระบบ สามารถค้นหา กรอง และดูสถานะของ Booking แต่ละรายการได้

---

## ภาพรวมหน้า Booking List

หน้า Booking List แสดงข้อมูลสรุปสถานะ Booking แบ่งออกเป็น 2 กลุ่ม

- **In Progress** — Booking ที่อยู่ระหว่างดำเนินการ
  - **Reserved** จำนวน Booking ที่ยังรอยืนยัน
  - **Confirmed** จำนวน Booking ที่ยืนยันแล้ว
- **Processed** — Booking ที่ดำเนินการเสร็จสิ้น (กรองตามเดือนปัจจุบัน)
  - **Completed** จำนวน Booking ที่เสร็จสมบูรณ์
  - **Canceled** จำนวน Booking ที่ถูกยกเลิก

---

## ตารางรายการ Booking

ตารางแสดงรายการ Booking ทั้งหมด ประกอบด้วยคอลัมน์ดังนี้

| คอลัมน์ | คำอธิบาย |
|---------|----------|
| # | ลำดับที่ |
| Seller | ชื่อผู้ขาย/ตัวแทน |
| Travel Date | วันที่เดินทาง |
| Booking Date | วันที่สร้าง Booking |
| Booking No. | เลขที่ Booking |
| Trip Type | ประเภทของ Trip |
| Travel Time | เวลาเดินทาง |
| Program | ชื่อโปรแกรมทัวร์ |
| Pax | จำนวนผู้เดินทาง |
| Trip Code | รหัส Trip |
| Status | สถานะปัจจุบัน |
| Action | ปุ่มจัดการ (View / Edit / Cancel) |

---

## การกรองข้อมูล

- **Date Filter** — เลือกวันที่ที่ต้องการดู Booking
- **Status Filter** — กรองตามสถานะ (Reserved, Confirmed, Completed, Canceled)
- **Advance Search** — ค้นหาขั้นสูง สามารถกรองตามเงื่อนไขหลายอย่างพร้อมกัน

---

## การ Export ข้อมูล

กดปุ่ม **Export** เพื่อส่งออกข้อมูล Booking เป็นไฟล์ Excel สำหรับรายงานหรือใช้งานภายนอก

---

## การสร้าง Booking ใหม่

กดปุ่ม **+ Booking** ที่มุมขวาบนของหน้า เพื่อเข้าสู่หน้า Create Booking

:::tip
สามารถคลิกที่แถวรายการ Booking ในตารางเพื่อดูรายละเอียดหรือแก้ไขข้อมูลได้
:::
