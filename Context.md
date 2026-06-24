# Playwright Session Context

## สรุปสิ่งที่ทำไปก่อนหน้านี้

### Environment & URL
- **App URL หลัก (dev):** `https://dev-toursystem.techmaster.in.th/`
- **App URL (green/staging):** `https://dev-green.techmaster.in.th/`
- **API Base:** `https://dev-toursystem-api.techmaster.in.th/api/`
- **App Version:** v.0.0.33 (2026-03-31)

### ลำดับการทำงาน (ตามลำดับเวลา)

#### Session 1 — `2026-04-02T04:18:34` (`dev-toursystem.techmaster.in.th`)
- เปิดหน้า Login ของ TourSystem
- Login ครั้งแรก → **ล้มเหลว** (401 — username or password denied)
- Login ครั้งที่สอง → **สำเร็จ** → redirect ไปหน้า `/dashboard`

#### Session 2 — `2026-04-02T04:19:10` (`dev-toursystem.techmaster.in.th`)
- Rehydrate session (มี token อยู่แล้ว, isAuthenticated: true)
- Navigate ไปหน้า **Agents/Seller** (`/agents`) — permissions: [SELLER]

#### Session 3 — `2026-04-02T04:19:19` (`dev-toursystem.techmaster.in.th`)
- Rehydrate session (authenticated)
- Navigate ไปหน้า Zone Transfer (`region_code: undefined`)

#### Session 4 — `2026-04-02T04:19:25` (`dev-toursystem.techmaster.in.th`)
- Rehydrate session (authenticated)
- Navigate ไปหน้า Zone Transfer (`region_code: undefined → null`)

#### Session สุดท้าย (ปัจจุบัน) — `dev-green.techmaster.in.th`
- Browser เปิดอยู่ที่: `https://dev-green.techmaster.in.th/employee/guide?page=1&page_size=15&guide_type=guide`
- Session authenticated (มี JWT token)
- Permissions: [GUIDE_VIEW]

### URL จริงของแต่ละหน้า (สำคัญ — ต่างจากที่คาดไว้)
| หน้า | URL จริง |
|------|----------|
| Payment Advance | `/payment/advance` |
| Payment Balance | `/payment/balance` |
| Payment Expenses | `/payment/expenses` (ไม่ใช่ `/expense`) |
| Payment Report | `/payment/report` |
| Program Item Type | `/program/items-type` (ไม่ใช่ `/setting/item-type`) |
| Program Unit | `/program/units` (ไม่ใช่ `/setting/unit`) |
| Seller | `/agents` |
| Vehicle Group Type | `/vehicle/group-type` |
| Vehicle Own Vehicle | `/vehicle/own-vehicle` |
| Vehicle Supplier | `/vehicle/supplier` |
| Employee Summary | `/employee/summary` |
| Employee Guide | `/employee/guide?guide_type=guide` |
| Employee Staff | `/employee/guide?guide_type=staff` |
| Employee Other | `/employee/other` |
| Employee Positions | `/employee/positions` (ไม่ใช่ `/employee/position`) |
| Zone Transfer | `/zone-transfer` |

### Screenshots ที่ถ่ายแล้ว (2026-06-24)
- [x] Payment → Advance, Balance, Expenses, Report
- [x] Program → Items-Type (`program-items-type.png`), Unit (`program-unit.png`)
- [x] Seller → `seller-list.png`
- [x] Vehicle → Group-Type (`vehicle-group-type.png`), Own-vehicle (`vehicle-own-vehicle.png`), Supplier (`vehicle-supplier.png`)
- [x] Employee → Summary, Guide-list, Staff-list, Other-list, Positions-list
- [x] Zone-Transfer → `zone-transfer-list.png`

### หมายเหตุ
- Browser session ปัจจุบันอยู่บน `dev-green.techmaster.in.th` และ authenticated อยู่แล้ว
- Screenshots ทั้งหมดเก็บไว้ใน `static/img/` ตาม subdirectory ของแต่ละ module
