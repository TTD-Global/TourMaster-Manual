# Bókun vs Tour System

*สรุปผลการทดลองใช้งานจริงทุกฟังก์ชันของ Bókun (Trial Account) เปรียบเทียบกับ Tour System*

---

## 1. ภาพรวมการสำรวจ

ทดลองสร้างบัญชี Bókun Start Trial จริง สร้าง Experience ทดสอบ ("Bangkok Temple Walking Tour") ตั้งค่า Availability, Pricing ครบ, ทดลอง Quick Book, และไล่ดูทุกเมนูหลัก: Bookings, Experiences, Sales tools, Your resellers, Marketplace, Operations, Reports, Settings โดยหลีกเลี่ยงขั้นตอนที่ต้องผูกบัตรเครดิตหรือชำระเงินจริงทั้งหมด

---

## 2. โครงสร้างเมนูหลัก

| หมวด | Bókun | Tour System |
|---|---|---|
| **แนวคิดหลัก** | แพลตฟอร์มขาย + จัดจำหน่าย (OTA Distribution + Booking Engine) เน้นหาลูกค้าและปิดการขาย | ระบบปฏิบัติการหลังบ้าน (Back-office) เน้นบริหารทริปหลังได้ Booking แล้ว |
| **เมนูระดับบนสุด** | Bookings, Experiences, Sales tools, Your resellers, Marketplace, Operations, Reports, App store, Agents | Dashboard, Bookings, Excursion, Pick-up/Drop-off Transport, Check In, Payment, Program, Vehicle, Employee, User, Zone Transfer |
| **จุดเริ่มต้นใช้งาน** | ต้องสร้าง "Experience" (สินค้า) ให้ Active ก่อน เครื่องมือ Booking อื่นๆ ถึงจะปลดล็อก | ใช้งานได้ทันทีจากข้อมูล Program ที่ตั้งไว้ ไม่มีขั้นตอน "Activate" แยก |

---

## 3. การสร้างสินค้า/โปรแกรม (Experience vs Program)

Bókun ใช้ตัวช่วยแบบ wizard ทีละขั้น (Title → Description → Photos → Availability → Pricing) คล้าย "ตัวช่วยสร้างสินค้าขาย" มากกว่า "ตั้งค่าโปรแกรมทัวร์" มีรายละเอียดที่ Tour System ไม่มี:

- **Generate with AI** — ปุ่มให้ AI ช่วยเขียนคำโฆษณา/คำบรรยายสินค้า
- **Pricing categories** หลายแบบ (Adults, Children, Infant, Senior, Youth) พร้อมราคาแยกและตั้งเป็น Default ได้
- **Availability rule** แบบ recurring (เลือกวันในสัปดาห์ + PAX ขั้นต่ำ-สูงสุด + สีของ rule) ใกล้เคียงกับ Program + Unit ของ Tour System แต่ยืดหยุ่นกว่าเรื่องการตั้งกฎซ้ำรายสัปดาห์
- **ราคาแปลงสกุลเงินอัตโนมัติ (Auto FX)** สำหรับขายข้ามประเทศ — Tour System ใช้ THB สกุลเดียวเพราะเป็นระบบภายใน

Tour System เน้นความละเอียดด้านต้นทุนปฏิบัติการแทน (Itinerary, Cost, Allowance, Seller, Extra Cost, Guide Fee) ซึ่ง Bókun ไม่มีแนวคิดนี้เลยในหน้าสร้างสินค้า

---

## 4. การสร้าง Booking

Bókun มี 2 เส้นทางสร้าง Booking:

- **Create booking (แบบ Storefront):** จำลองหน้าเว็บขายจริงที่ลูกค้าจะเห็น เลือกวันที่ในปฏิทิน เลือกจำนวนคน คำนวณราคาสด
- **Quick Book (แบบ Staff-facing):** wizard 5 ขั้นตอน (เลือกสินค้า → วันเวลา → จำนวนคน+ราคา → ข้อมูลลูกค้า (optional) → วิธีชำระเงิน) มีตัวเลือกชำระเงินที่ยืดหยุ่น 3 แบบ คือ Pay now, Already paid, Pay later (ยืนยัน Booking ก่อนแล้วเก็บเงินทีหลัง)

> **ข้อสังเกตจากการทดสอบจริง:** ในขั้นตอน Quick Book ช่อง "Phone" ที่เป็น Optional เกิด validation error "Invalid phone number" ค้างอยู่แม้ปล่อยว่าง ทำให้กดยืนยัน Booking ไม่สำเร็จแม้เลือก "Pay later" แล้ว — เป็นจุดบกพร่อง (bug) ของ Bókun ที่พบระหว่างทดสอบจริง

Tour System ใช้ Create Booking แบบฟอร์มเดียวจบ ผูก Itinerary/Cost/Allowance ที่ตั้งไว้ล่วงหน้าจาก Program ทันที ไม่มีแนวคิด "ตะกร้าสินค้า" หรือ "ช่องทางชำระเงินลูกค้า" เพราะ Tour System ไม่ได้เก็บเงินจากนักท่องเที่ยวโดยตรง

---

## 5. ช่องทางขายและการกระจายสินค้า (จุดต่างที่ใหญ่ที่สุด)

นี่คือส่วนที่ Bókun มีแต่ Tour System ไม่มีเลย เพราะ Bókun ถูกออกแบบให้เป็นทั้งเครื่องมือขายและเครื่องมือปฏิบัติการในตัวเดียว:

- **Booking widgets** — สร้างปุ่ม/ปฏิทิน/หน้าสินค้า แปะลงเว็บไซต์ตัวเองได้ทันที (Button, Booking Calendar, Product page)
- **OTAs** — เชื่อมต่อ Viator, GetYourGuide, Airbnb และช่องทางอื่น (booknordics, Civitatis, DayTrip4U) ด้วยคลิกเดียว
- **Marketplace** — เครือข่าย B2B ที่มี Operator/Reseller กว่า 2,000 รายให้จับคู่ขายสินค้าร่วมกัน มีระบบ Contract, Amendment, Proposal, Conversation ในตัว
- **Booking Agents** — ให้ local agent จองแทนลูกค้าได้โดยตรงในระบบ
- **Referral Link Promoters** — สร้างลิงก์ติดตามคอมมิชชันสำหรับ Influencer/พันธมิตรโปรโมท

Tour System ไม่มีแนวคิด "ช่องทางขาย" เลย เพราะ Booking ถูกสร้างจากฝ่ายขาย/ระบบภายในอยู่แล้ว ระบบจึงไม่ต้องแข่งเรื่องการหาลูกค้าใหม่ แต่เน้นบริหารสิ่งที่เกิดขึ้น "หลัง" ได้ Booking แทน

---

## 6. การปฏิบัติงานหน้างาน (Operations)

| หมวด | Bókun | Tour System |
|---|---|---|
| **รายชื่อผู้โดยสาร** | Passenger list — export + ช่อง "diary entry" ให้บันทึกข้อความอิสระต่อวัน | Check-in / Check-in List — ผูกกับ Actual Pax และ No-show โดยตรง |
| **จุดรับ** | Pick-up list — จัดการคนขับ (Manage drivers) ในหน้าเดียวกัน | Pick-up Transport แยกเป็นชุดเมนู (Own Vehicle / Supplier Group) |
| **ข้อมูลลูกค้า** | Customers — CRM เก็บประวัติ/อีเมลลูกค้าทุกคนที่เคยจอง ส่งอีเมลได้จากระบบ | ไม่มี — Tour System เก็บเฉพาะข้อมูลผู้ใช้งานภายใน ไม่ใช่ CRM ลูกค้า |
| **ปิดรอบขาย (Close out)** | ปิดรอบเวลาที่ต้องการแบบ toggle รายวันได้ทันที (ฉุกเฉิน/เต็ม) | ไม่มีฟีเจอร์ปิดรอบเฉพาะ ต้องจัดการผ่านสถานะ Booking/Trip |
| **ทรัพยากร** | Resource overview report (ใหม่) เห็นภาพรวมการใช้รถ/ทีมงานข้ามสินค้า | Vehicle/Employee module แยกจัดการเป็นรายแผนก |

---

## 7. รายงาน/การเงิน

| หมวด | Bókun | Tour System |
|---|---|---|
| **มุมมองหลัก** | มองจาก "ช่องทางขาย" เป็นหลัก (Sales overview แยกตาม Channel, Income statement, Referral tracking Sales พร้อมคอมมิชชัน) | มองจาก "ต้นทุนปฏิบัติการ" เป็นหลัก (Advance, Expense, Balance, Cost Report แยกตามรถ/ไกด์/Supplier) |
| **การคืนเงิน** | Enhanced refund terms — ตั้งเงื่อนไขคืนเงินลูกค้าได้เอง | ไม่มี เพราะไม่ได้รับชำระเงินจากลูกค้าโดยตรง |

---

## 8. ผู้ใช้งาน สิทธิ์ และการตั้งค่า

- Bókun มี User Roles สำเร็จรูป 6 แบบ (Admin, Driver/Guide, Product manager, Sales, Sales manager, Technical) ปรับ/เพิ่มเองได้ — ใกล้เคียงกับ Roles/Permissions ของ Tour System
- Bókun มี Connections > API keys, Webhooks เปิดให้ Developer เชื่อมระบบภายนอกเอง — Tour System ไม่มีชั้นนี้ให้ผู้ใช้ทั่วไปเข้าถึง
- Bókun มี Sales settings ทั้งชุด (Payment providers: Stripe/PayPal/RePayD, Promo codes, Commission groups, Terms & Conditions, Privacy policy) เพราะต้องรับเงินจากลูกค้าโดยตรง — Tour System ไม่ต้องมีชั้นนี้เลย
- หน้า Password and authentication ของ Bókun เป็น self-service เต็มรูปแบบ รองรับ Google SSO ส่วน Tour System ยังเป็นแค่ popup Reset Password ที่ Admin กดให้

---

## 9. สรุปจุดแข็ง-จุดต่างที่สำคัญที่สุด

### Bókun แข็งเรื่อง "หาลูกค้า/ขาย"

- มีช่องทางกระจายสินค้าครบวงจร (Widget, OTA, Marketplace, Agent, Referral)
- มี CRM ลูกค้า, Promo code, ระบบชำระเงินในตัว, และ AI ช่วยเขียนคำโฆษณา
- เหมาะกับธุรกิจที่ต้องการหาลูกค้าใหม่ผ่านช่องทางออนไลน์หลากหลาย

### Tour System แข็งเรื่อง "ควบคุมงานหลังบ้าน"

- ผูก Booking เข้ากับการจัดกลุ่ม รถ ไกด์ Job Order และต้นทุนจริงในระบบเดียวกันอย่างละเอียดกว่า Bókun มาก
- มีการแยกเงินทดรอง/ค่าใช้จ่ายจริง/ยอดชดเชยเป็นขั้นตอนบัญชีเฉพาะ ซึ่ง Bókun ไม่มีแนวคิดนี้เลย
- เหมาะกับองค์กรที่ Booking เข้ามาจากฝ่ายขายอยู่แล้ว และต้องการควบคุมการปฏิบัติงาน/ต้นทุนรายทริปอย่างละเอียด

**สรุปสั้นๆ:** Bókun ตอบโจทย์ "ก่อนขาย" และ "ระหว่างขาย" ได้ดีมาก แต่รายละเอียด "หลังขาย" (ปฏิบัติการหน้างาน + ปิดต้นทุน) ตื้นกว่า Tour System ชัดเจน ส่วน Tour System ตรงข้ามกัน คือแทบไม่มีชั้น "ขาย" เลย แต่ลึกมากในชั้น "ปฏิบัติการและต้นทุน" — ทั้งสองระบบจึงเสริมกันได้มากกว่าจะแข่งกันโดยตรง

---

## 10. ข้อควรทราบจากการทดสอบ

- สร้างสินค้าทดสอบ "Bangkok Temple Walking Tour" (#1250611) ไว้ในบัญชี Bókun Trial เพื่อปลดล็อกฟีเจอร์สำรวจ — ยังคงสถานะ Active อยู่ในระบบ ถ้าต้องการให้ปิด/ลบแจ้งได้
- ไม่ได้ผูกบัตรเครดิต ไม่ได้เชื่อมต่อ Payment provider ไม่ได้ส่ง Contract ใน Marketplace จริง และไม่มีการชำระเงินใดๆ เกิดขึ้นระหว่างการทดสอบ
- พบ bug ในขั้นตอน Quick Book ของ Bókun ที่ validation ช่อง Phone (Optional) ค้าง Error แม้ปล่อยว่าง ทำให้ไม่สามารถกดยืนยัน Booking แบบ Pay later ให้จบขั้นตอนได้ในการทดสอบนี้
