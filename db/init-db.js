const mongoose = require('mongoose');

const uri = 'mongodb://admin:password123@mongo:27017/site?authSource=admin'; // Replace with your database name

const siteSchema = new mongoose.Schema({
  site_id: String,
  site_desc: String,
  site_address: String,
  site_tel: String,
  location: {
    type: { type: String },
    coordinates: [Number]
  },
  site_close_time: String,
  site_open_time: String
});

const Site = mongoose.model('Site', siteSchema);

const sites = [{
  "site_id" : "1",
  "site_desc" : "สุขุมวิท 71",
  "site_address" : "20/1 ถนนสุขุมวิท 71 แขวงพระโขนงเหนือ เขตวัฒนา กรุงเทพฯ 10110",
  "site_tel" : "(02)538-2229 ต่อ 1",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.594908,
          13.714791
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "10",
  "site_desc" : "สำนักงานใหญ่",
  "site_address" : "2585/2 ถนนลาดพร้าว แขวงคลองเจ้าคุณสิงห์ เขตวังทองหลาง กรุงเทพฯ 10310",
  "site_tel" : "(02)538-7900",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          0,
          0
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "14",
  "site_desc" : "สุขุมวิท 103",
  "site_address" : "120 ถนนอุดมสุข แขวงบางนาเหนือ เขตบางนา กรุงเทพฯ 10260",
  "site_tel" : "(02)538-2229 ต่อ 14",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.612361,
          13.678618
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "16",
  "site_desc" : "พัฒนาการ 20",
  "site_address" : "702-702/1 ปากซอยพัฒนาการ 20 ถนนพัฒนาการ แขวงสวนหลวง เขตสวนหลวง กรุงเทพฯ 10250",
  "site_tel" : "(02)538-2229 ต่อ 16",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.609199,
          13.737431
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "18",
  "site_desc" : "หทัยราษฎร์",
  "site_address" : "133/9 ถนนหทัยราษฏร์ หน้าหมู่บ้านรื่นฤดี (โครงการ 3) แขวงมีนบุรี เขตมีนบุรี กรุงเทพฯ 10510",
  "site_tel" : "(02)538-2229 ต่อ 18",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.720124,
          13.829504
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "19",
  "site_desc" : "รังสิต คลอง 1",
  "site_address" : "238 ถนนเลียบคลองรังสิต (คลอง 1 สะพานแดง) ตำบลประชาธิปัตย์ อำเภอธัญบุรี จังหวัดปทุมธานี 12110",
  "site_tel" : "(02)538-2229 ต่อ 19",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.626341,
          13.985705
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "20",
  "site_desc" : "ถนนจันทน์",
  "site_address" : "234, 236 ถนนจันทน์ (ใกล้ปากซอยจันทน์ 18/4) แขวงทุ่งวัดดอน เขตสาทร กรุงเทพมหานคร 10120",
  "site_tel" : "(02)538-2229 ต่อ 20",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.527963772452,
          13.7061925354219
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "21",
  "site_desc" : "Daytime พระราม 4 (ซอยภูมิจิตร)",
  "site_address" : "4858 ถนนพระราม 4 (ใกล้ปากซอยภูมิจิตร) แขวงพระโขนง เขตคลองเตย กรุงเทพฯ 10110",
  "site_tel" : "(02)538-2229 ต่อ 21",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.591571,
          13.713175
      ]
  },
  "site_close_time" : "23:00:00",
  "site_open_time" : "07:00:00"
},
{
  "site_id" : "22",
  "site_desc" : "นาคนิวาส",
  "site_address" : "15/3 หมู่ที่ 4 ถนนนาคนิวาส (ใกล้ปากซอยนาคนิวาส 48) แขวงลาดพร้าว เขตลาดพร้าว กรุงเทพฯ 10230",
  "site_tel" : "(02)538-2229 ต่อ 22",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.609177,
          13.82076
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "25",
  "site_desc" : "ลาดปลาเค้า 63",
  "site_address" : "359 ถนนลาดปลาเค้า แขวงจรเข้บัว เขตลาดพร้าว กรุงเทพมหานคร 10310",
  "site_tel" : "(02)538-2229 ต่อ 25",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.601348,
          13.845494
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "27",
  "site_desc" : "Daytime อินทามระ 25",
  "site_address" : "317 ถนนสุทธิสารวินิจฉัย แขวงสามเสนใน เขตพญาไท กรุงเทพฯ 10400",
  "site_tel" : "(02)538-2229 ต่อ 27",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.558942,
          13.789233
      ]
  },
  "site_close_time" : "23:00:00",
  "site_open_time" : "07:00:00"
},
{
  "site_id" : "28",
  "site_desc" : "รามอินทรา 67",
  "site_address" : "131 ถนนรามอินทรา แขวงรามอินทรา เขตคันนายาว กรุงเทพฯ 10230",
  "site_tel" : "(02)538-2229 ต่อ 28",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.652871,
          13.844505
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "31",
  "site_desc" : "ม.รามคำแหง 2",
  "site_address" : "105 ถนนรามคำแหง 2 ซอย 23 แขวงดอกไม้ เขตประเวศ กรุงเทพฯ 10260",
  "site_tel" : "(02)538-2229 ต่อ 31",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.681573,
          13.6726
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "33",
  "site_desc" : "Daytime เคหะชุมชนรามคำแหง",
  "site_address" : "1/54 ซอยรามคำแหง 190/2 (เคหะชุมชนรามคำแหง) แขวงมีนบุรี เขตมีนบุรี กรุงเทพฯ 10510",
  "site_tel" : "(02)538-2229 ต่อ 33",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.729842,
          13.802736
      ]
  },
  "site_close_time" : "21:00:00",
  "site_open_time" : "20:00:00"
},
{
  "site_id" : "34",
  "site_desc" : "ลาดพร้าว 87",
  "site_address" : "2585/2 ถนนลาดพร้าว แขวงคลองเจ้าคุณสิงห์ เขตวังทองหลาง กรุงเทพฯ 10310",
  "site_tel" : "(02)538-2229 ต่อ 34",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.618436,
          13.781204
      ]
  },
  "site_close_time" : "18:00:00",
  "site_open_time" : "17:00:00"
},
{
  "site_id" : "37",
  "site_desc" : "Daytime โชคชัย 4 (กองปราบ)",
  "site_address" : "93 ถนนโชคชัย 4 แขวงลาดพร้าว เขตลาดพร้าว กรุงเทพฯ 10230",
  "site_tel" : "(02)538-2229 ต่อ 37",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.596681,
          13.804645
      ]
  },
  "site_close_time" : "20:00:00",
  "site_open_time" : "22:00:00"
},
{
  "site_id" : "38",
  "site_desc" : "ลาดพร้าว 101",
  "site_address" : "51 ซอยลาดพร้าว 101 ถนนลาดพร้าว แขวงคลองจั่น เขตบางกะปิ กรุงเทพมหานคร 10240",
  "site_tel" : "(02)538-2229 ต่อ 38",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.628172998016,
          13.7917794495179
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "39",
  "site_desc" : "พัฒนาการ 25",
  "site_address" : "1319/1 ถนนพัฒนาการ แขวงสวนหลวง เขตสวนหลวง กรุงเทพฯ 10250",
  "site_tel" : "(02)538-2229 ต่อ 39",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.616044,
          13.738197
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "40",
  "site_desc" : "แฮปปี้แลนด์",
  "site_address" : "769 ซอยศูนย์บันเทิงการค้า แขวงคลองจั่น เขตบางกะปิ กรุงเทพฯ 10240",
  "site_tel" : "(02)538-2229 ต่อ 40",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.643681,
          13.780334
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "44",
  "site_desc" : "ศรีนครินทร์ 26",
  "site_address" : "1168 ถนนศรีนครินทร์ แขวงสวนหลวง เขตสวนหลวง กรุงเทพฯ 10250",
  "site_tel" : "(02)538-2229 ต่อ 44",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.643402,
          13.713438
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "45",
  "site_desc" : "Daytime พัฒนาการ 38",
  "site_address" : "1408 ถนนพัฒนาการ แขวงสวนหลวง เขตสวนหลวง กรุงเทพฯ 10250",
  "site_tel" : "(02)538-2229 ต่อ 45",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.624407,
          13.736837
      ]
  },
  "site_close_time" : "23:00:00",
  "site_open_time" : "07:00:00"
},
{
  "site_id" : "46",
  "site_desc" : "รามคำแหง 118",
  "site_address" : "154 ,156 ถนนรามคำแหง แขวงสะพานสูง เขตสะพานสูง กรุงเทพฯ 10240",
  "site_tel" : "(02)538-2229 ต่อ 46",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.67895,
          13.7798
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "47",
  "site_desc" : "รามอินทรา 40",
  "site_address" : "60/357 ซอยรามอินทรา 40 แยก 33 ถนนรามอินทรา แขวงคลองกุ่ม เขตบึงกุ่ม กรุงเทพมหานคร 10230",
  "site_tel" : "(02)538-2229 ต่อ 47",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.641691,
          13.841643
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "49",
  "site_desc" : "ปรีดีพนมยงค์ 40",
  "site_address" : "984/93 ซอยปรีดีพนมยงค์ 40 ถนนสุขุมวิท 71 แขวงคลองตันเหนือ เขตวัฒนา กรุงเทพฯ 10110",
  "site_tel" : "(02)538-2229 ต่อ 49",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.597274,
          13.732819
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "51",
  "site_desc" : "เคหะร่มเกล้า 25",
  "site_address" : "360/4 หมู่ที่ 4 แขวงคลองสองต้นนุ่น เขตลาดกระบัง กรุงเทพฯ 10520",
  "site_tel" : "(02)538-2229 ต่อ 51",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.732414,
          13.767746
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "53",
  "site_desc" : "พหลโยธิน 62",
  "site_address" : "11/7,11/8 หมู่ที่ 6 ถนนพหลโยธิน 62 แขวงสายไหม เขตสายไหม กรุงเทพมหานคร 10220",
  "site_tel" : "(02)538-2229 ต่อ 53",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.624262,
          13.940531
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "54",
  "site_desc" : "พหลโยธิน 34",
  "site_address" : "1340/1 ซอยพหลโยธิน 34 แขวงเสนานิคม เขตจตุจักร กรุงเทพฯ 10230",
  "site_tel" : "(02)538-2229 ต่อ 54",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.58229,
          13.83733
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "55",
  "site_desc" : "เพชรบุรี 43/1",
  "site_address" : "1633 ถนนเพชรบุรีตัดใหม่ แขวงมักกะสัน เขตราชเทวี กรุงเทพฯ 10400",
  "site_tel" : "(02)538-2229 ต่อ 55",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.5587,
          13.74955
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "56",
  "site_desc" : "สุขุมวิท 95",
  "site_address" : "2363 ,2365 ถนนสุขุมวิท แขวงบางจาก เขตพระโขนง กรุงเทพฯ 10260",
  "site_tel" : "(02)538-2229 ต่อ 56",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.604639,
          13.698588
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "57",
  "site_desc" : "Daytime เสนานิเวศน์ 1",
  "site_address" : "39/90 ถนนเสนานิคม 1 แขวงจรเข้บัว เขตลาดพร้าว กรุงเทพมหานคร 10230",
  "site_tel" : "(02)538-2229 ต่อ 57",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.606028,
          13.83122
      ]
  },
  "site_close_time" : "21:00:00",
  "site_open_time" : "09:00:00"
},
{
  "site_id" : "59",
  "site_desc" : "Daytime อ่อนนุช 44 (พึ่งมี 50)",
  "site_address" : "25/189 ซอยพึ่งมี 50 แขวงบางจาก เขตพระโขนง กรุงเทพฯ 10260",
  "site_tel" : "(02)538-2229 ต่อ 59",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.630573,
          13.701566
      ]
  },
  "site_close_time" : "21:00:00",
  "site_open_time" : "09:00:00"
},
{
  "site_id" : "60",
  "site_desc" : "โชคชัย 4 ซอย 51 (ต.รวมโชค)",
  "site_address" : "7/57 หมู่ที่ 10 ซอยโชคชัยสี่ 51 แขวงลาดพร้าว เขตลาดพร้าว กรุงเทพฯ 10230",
  "site_tel" : "(02)538-2229 ต่อ 60",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.596254,
          13.815442
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "61",
  "site_desc" : "วชิรธรรมสาธิต 15",
  "site_address" : "339/2 ซอยสุขุมวิท 101/1 แขวงบางจาก เขตพระโขนง กรุงเทพฯ 10260",
  "site_tel" : "(02)538-2229 ต่อ 61",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.618836,
          13.684469
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "64",
  "site_desc" : "Daytime บางนา-ตราด 37",
  "site_address" : "9 ถนนเดอะพาร์คแลนด์ แขวงบางนาเหนือ เขตบางนา กรุงเทพฯ 10260",
  "site_tel" : "(02)538-2229 ต่อ 64",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.650408,
          13.666554
      ]
  },
  "site_close_time" : "23:00:00",
  "site_open_time" : "07:00:00"
},
{
  "site_id" : "65",
  "site_desc" : "Daytime นาคนิวาส 19",
  "site_address" : "18/8 หมู่ที่ 7 แขวงลาดพร้าว เขตลาดพร้าว กรุงเทพฯ 10230",
  "site_tel" : "(02)538-2229 ต่อ 65",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.606938,
          13.803507
      ]
  },
  "site_close_time" : "23:00:00",
  "site_open_time" : "07:00:00"
},
{
  "site_id" : "68",
  "site_desc" : "Daytime เอื้ออาทรมีนบุรี",
  "site_address" : "33 ซอยรามอินทรา 127 แขวงมีนบุรี เขตมีนบุรี กรุงเทพฯ 10510",
  "site_tel" : "(02)538-2229 ต่อ 68",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.715151,
          13.817656
      ]
  },
  "site_close_time" : "21:00:00",
  "site_open_time" : "09:00:00"
},
{
  "site_id" : "69",
  "site_desc" : "ตลาดสวนพลู",
  "site_address" : "506/2 ซอยสวนพลู แขวงทุ่งมหาเมฆ เขตสาทร กรุงเทพๆ 10120",
  "site_tel" : "(02)538-2229 ต่อ 69",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.538566,
          13.719085
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "70",
  "site_desc" : "คู้บอน 27",
  "site_address" : "11 ซอยคู้บอน 27 แยก 9 แขวงท่าแร้ง เขตบางเขน กรุงเทพฯ 10220",
  "site_tel" : "(02)538-2229 ต่อ 70",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.664999,
          13.85832
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "75",
  "site_desc" : "งามวงศ์วาน 47 (ชินเขต 2)",
  "site_address" : "345/2 ซอยงามวงศ์วาน 47 แยก 42 (ชินเขต 2/40) แขวงทุ่งสองห้อง  เขตหลักสี่  กรุงเทพฯ 10210",
  "site_tel" : "(02)538-2229 ต่อ 75",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.558175,
          13.870018
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "77",
  "site_desc" : "Daytime หนองใหญ่",
  "site_address" : "1311/1 ซอยกาญจนาภิเษก 008 แขวงบางแค เขตบางแค กรุงเทพฯ 10160",
  "site_tel" : "(02)538-2229 ต่อ 77",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.414916,
          13.692581
      ]
  },
  "site_close_time" : "23:00:00",
  "site_open_time" : "07:00:00"
},
{
  "site_id" : "79",
  "site_desc" : "ศรีนครินทร์ 40 (ยงเจริญ)",
  "site_address" : "151/1 ซอยสุภาพงษ์ 1 แขวงหนองบอน เขตประเวศ กรุงเทพฯ 10250",
  "site_tel" : "(02)538-2229 ต่อ 79",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.639215,
          13.693147
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "83",
  "site_desc" : "รามคำแหง 24 แยก 18",
  "site_address" : "324 ซอยรามคำแหง 24 แขวงหัวหมาก เขตบางกะปิ กรุงเทพฯ 10240",
  "site_tel" : "(02)538-2229 ต่อ 83",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.621250098147,
          13.7532335575926
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "85",
  "site_desc" : "ทิพวัล ซอย 21",
  "site_address" : "420/795 ,420/796 หมู่ที่ 5 ถนนเทพารักษ์ ตำบลเทพารักษ์ อำเภอเมือง จังหวัดสมุทรปราการ 10270",
  "site_tel" : "(02)538-2229 ต่อ 85",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.605434890195,
          13.633234315287
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "87",
  "site_desc" : "อุดมสุข 51",
  "site_address" : "44,46 ซอยอุดมสุข 51 แขวงบางจาก เขตพระโขนง กรุงเทพฯ 10260",
  "site_tel" : "(02)538-2229 ต่อ 87",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.637059,
          13.679911
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "88",
  "site_desc" : "เสรีไทย 7",
  "site_address" : "2/1 ซอย 58 (การเคหะแห่งชาติ) แขวงคลองจั่น เขตบางกะปิ กรุงเทพฯ 10240",
  "site_tel" : "(02)538-2229 ต่อ 88",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.64932,
          13.77565
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "91",
  "site_desc" : "ประเสริฐมนูกิจ 44",
  "site_address" : "23/25,23/26 ถนนประเสริฐมนูกิจ แขวงนวมินทร์ เขตบึงกุ่ม กรุงเทพฯ 10240",
  "site_tel" : "(02)538-2229 ต่อ 91",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.649239,
          13.810292
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "94",
  "site_desc" : "รามคำแหง 50",
  "site_address" : "578,580 ถนนรามคำแหง แขวงหัวหมาก เขตบางกะปิ กรุงเทพฯ 10240",
  "site_tel" : "(02)538-2229 ต่อ 94",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.642651,
          13.762197
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "95",
  "site_desc" : "เสนานิคม 1 ซอย 23",
  "site_address" : "339 ถนนเสนานิคม 1 แยก 23 แขวงลาดพร้าว เขตลาดพร้าว กรุงเทพฯ 10230",
  "site_tel" : "(02)538-2229 ต่อ 95",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.597834,
          13.831631
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "97",
  "site_desc" : "รางน้ำ",
  "site_address" : "104/27 ถนนรางน้ำ แขวงถนนพญาไท เขตราชเทวี กรุงเทพฯ 10400",
  "site_tel" : "(02)538-2229 ต่อ 97",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.540894,
          13.759431
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "101",
  "site_desc" : "พระราม 2 ซอย 43",
  "site_address" : "973 ซอยพระรามที่ 2 ซอย 43 แขวงบางมด เขตจอมทอง กรุงเทพฯ 10150",
  "site_tel" : "(02)538-2229 ต่อ 101",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.45752,
          13.668839
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "102",
  "site_desc" : "เทพลีลา 1",
  "site_address" : "129/6 ซอยรามคำแหง 39 (เทพลีลา 1) แขวงพลับพลา เขตวังทองหลาง กรุงเทพฯ 10310",
  "site_tel" : "(02)538-2229 ต่อ 102",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.612063,
          13.760275
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "103",
  "site_desc" : "ลาดพร้าว 80 แยก 22",
  "site_address" : "35, 35/1 ซอยลาดพร้าว 80 แยก 22 ถนนลาดพร้าว แขวงวังทองหลาง เขตวังทองหลาง กรุงเทพฯ 10310",
  "site_tel" : "(02)538-2229 ต่อ 103",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.601066,
          13.782587
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "23:00:00"
},
{
  "site_id" : "104",
  "site_desc" : "Daytime เพชรบุรี 5",
  "site_address" : "147/1,147/2 ตรอก ร.ร.เพชรบุรี แขวงทุ่งพญาไท เขตราชเทวี กรุงเทพมหานคร 10400",
  "site_tel" : "(02)538-2229 ต่อ 104",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.528942,
          13.756122
      ]
  },
  "site_close_time" : "23:00:00",
  "site_open_time" : "07:00:00"
},
{
  "site_id" : "106",
  "site_desc" : "พระยาสุเรนทร์ 9",
  "site_address" : "60/387,60/388 ซอยพระยาสุเรนทร์ 9 แขวงบางชัน เขตคลองสามวา กรุงเทพมหานคร 10510",
  "site_tel" : "(02)538-2229 ต่อ 106",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.699112,
          13.827496
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "109",
  "site_desc" : "วัดด่าน 47/2",
  "site_address" : "1342 ,1342/1 หมู่ 4 ซอยวัดด่าน 47/2 ตำบลสำโรงเหนือ อำเภอเมือง จังหวัดสมุทรปราการ 10270",
  "site_tel" : "(02)538-2229 ต่อ 109",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.60848,
          13.64231
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "110",
  "site_desc" : "อ่อนนุช 57",
  "site_address" : "377/1,377/2 ถนนอ่อนนุช แขวงประเวศ เขตประเวศ กรุงเทพมหานคร 10250",
  "site_tel" : "(02)538-2229 ต่อ 110",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.6708,
          13.71924
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "112",
  "site_desc" : "Daytime ท่าข้าม 16",
  "site_address" : "140 ถนนท่าข้าม แขวงแสมดำ เขตบางขุนเทียน กรุงเทพฯ 10150",
  "site_tel" : "(02)538-2229 ต่อ 112",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.443548,
          13.649781
      ]
  },
  "site_close_time" : "21:00:00",
  "site_open_time" : "09:00:00"
},
{
  "site_id" : "114",
  "site_desc" : "พัฒนาการ 61",
  "site_address" : "187 ถนนพัฒนาการ แขวงประเวศ เขตประเวศ กรุงเทพฯ 10250",
  "site_tel" : "(02)538-2229 ต่อ 114",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.65623,
          13.72861
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "115",
  "site_desc" : "สามเสน 28",
  "site_address" : "62,64 ซอยองครักษ์ แขวงถนนนครไชยศรี เขตดุสิต กรุงเทพฯ 10300",
  "site_tel" : "(02)538-2229 ต่อ 115",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.51639,
          13.78957
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "116",
  "site_desc" : "สุทธิสารวินิจฉัย",
  "site_address" : "1286 ถนนสุทธิสารวินิจฉัย แขวงห้วยขวาง เขตห้วยขวาง กรุงเทพฯ 10310",
  "site_tel" : "(02)538-2229 ต่อ 116",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.5749,
          13.78961
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "118",
  "site_desc" : "Daytime รามคำแหง 36",
  "site_address" : "450 ถนนรามคำแหง แขวงหัวหมาก เขตบางกะปิ กรุงเทพมหานคร 10240",
  "site_tel" : "(02)538-2229 ต่อ 118",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.63676,
          13.76157
      ]
  },
  "site_close_time" : "23:00:00",
  "site_open_time" : "07:00:00"
},
{
  "site_id" : "121",
  "site_desc" : "Daytime อ่อนนุช 70/1",
  "site_address" : "42 ถนนอ่อนนุช แขวงประเวศ เขตประเวศ กรุงเทพมหานคร 10250",
  "site_tel" : "(02)538-2229 ต่อ 121",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.6539,
          13.71621
      ]
  },
  "site_close_time" : "21:00:00",
  "site_open_time" : "09:00:00"
},
{
  "site_id" : "122",
  "site_desc" : "Daytime พหลโยธิน 52 แยก 16",
  "site_address" : "363/535 ซอยแยกจากหมู่ 6 เดิม ถนนพหลโยธิน 52 แขวงคลองถนน เขตสายไหม กรุงเทพฯ 10220",
  "site_tel" : "(02)538-2229 ต่อ 122",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.61587,
          13.8935
      ]
  },
  "site_close_time" : "23:00:00",
  "site_open_time" : "07:00:00"
},
{
  "site_id" : "124",
  "site_desc" : "Daytime เอื้ออาทรบึงกุ่ม (เสรีไทย 43)",
  "site_address" : "138/2 ซอยเสรีไทย 43 แยก 3 แขวงคลองกุ่ม เขตบึงกุ่ม กรุงเทพมหานคร 10240",
  "site_tel" : "(02)538-2229 ต่อ 124",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.67039,
          13.78684
      ]
  },
  "site_close_time" : "23:00:00",
  "site_open_time" : "07:00:00"
},
{
  "site_id" : "125",
  "site_desc" : "Daytime 101 The Third Place",
  "site_address" : "101 ถนนสุขุมวิท แขวงบางจาก เขตพระโขนง กรุงเทพมหานคร 10260",
  "site_tel" : "(02)538-2229 ต่อ 125",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.61062,
          13.6856453
      ]
  },
  "site_close_time" : "21:00:00",
  "site_open_time" : "09:00:00"
},
{
  "site_id" : "126",
  "site_desc" : "Daytime ประชาสงเคราะห์ 2 (ตรงข้ามแยก 7)",
  "site_address" : "380 ซอยสุทธิพร แขวงดินแดง เขตดินแดง กรุงเทพมหานคร 10400",
  "site_tel" : "(02)538-2229 ต่อ 126",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.5581498,
          13.7614165
      ]
  },
  "site_close_time" : "23:00:00",
  "site_open_time" : "07:00:00"
},
{
  "site_id" : "128",
  "site_desc" : "เพิ่มสิน 28",
  "site_address" : "173/2 หมู่ที่ 2 แขวงคลองถนน เขตสายไหม กรุงเทพมหานคร 10220",
  "site_tel" : "(02)538-2229 ต่อ 128",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.6350698,
          13.9000675
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "129",
  "site_desc" : "สวนสยาม 30",
  "site_address" : "422 ถนนสวนสยาม แขวงคันนายาว เขตคันนายาว กรุงเทพมหานคร 10230",
  "site_tel" : "(02)538-2229 ต่อ 129",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.690735,
          13.7962319
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "130",
  "site_desc" : "รามอินทรา 21 (พี.พี.เพลส)",
  "site_address" : "97/1 ซ.รามอินทรา 21 แขวงอนุสาวรีย์ เขตบางเขน กรุงเทพมหานคร 10220",
  "site_tel" : "(02)538-2229 ต่อ 130",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.6198679,
          13.8684466
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "131",
  "site_desc" : "เจริญกรุง 83/1",
  "site_address" : "2113-2115 ถนนเจริญกรุง แขวงวัดพระยาไกร เขตบางคอแหลม กรุงเทพมหานคร 10120",
  "site_tel" : "(02)538-2229 ต่อ 131",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.5084563,
          13.7074536
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "132",
  "site_desc" : "ลาดพร้าว 18",
  "site_address" : "36/8 ซอยลาดพร้าว 18 ถนนลาดพร้าว แขวงจอมพล เขตจตุจักร กรุงเทพฯ 10900",
  "site_tel" : "(02)538-2229 ต่อ 132",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.5699793,
          13.8063853
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "133",
  "site_desc" : "เพชรเกษม 65/1",
  "site_address" : "1721 ถ.เพชรเกษม แขวงหลักสอง เขตบางแค กรุงเทพมหานคร 10160",
  "site_tel" : "(02)538-2229 ต่อ 133",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.3823536,
          13.7084847
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "134",
  "site_desc" : "ลำลูกกา คลอง 2",
  "site_address" : "9/11 หมู่ 6 ตำบลคูคต อำเภอลำลูกกา จังหวัดปทุมธานี 12130",
  "site_tel" : "(02)538-2229 ต่อ 134",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.643030890163,
          13.9609406212734
      ]
  },
  "site_close_time" : "00:00:00",
  "site_open_time" : "00:00:00"
},
{
  "site_id" : "136",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          110.792775,
          18.720839
      ]
  },
  "site_address" : "608/4 ถนนหลวงแพ่ง แขวงทับยาว เขตลาดกระบัง กรุงเทพมหานคร 10520",
  "site_desc" : "Daytime ปตท. สุวรรณภูมิ-ลาดกระบัง",
  "site_tel" : "(02)538-2229 ต่อ 136",
  "site_close_time" : "23:00:00",
  "site_open_time" : "07:00:00"
},
{
  "site_id" : "138",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.663716439885,
          14.0062703135544
      ]
  },
  "site_address" : "125/1 ซอยรังสิต-นครนายก 67 ตำบลประชาธิปัตย์ อำเภอธัญบุรี จังหวัดปทุมธานี 12130",
  "site_close_time" : "00:00:00",
  "site_desc" : "รังสิต คลอง 3",
  "site_open_time" : "00:00:00",
  "site_tel" : "(02)538-2229 ต่อ 138"
},
{
  "site_id" : "139",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.539214511052,
          13.8812575096836
      ]
  },
  "site_address" : "663 ถนนสามัคคี ตำบลท่าทราย อำเภอเมืองนนทบุรี จังหวัดนนทบุรี 11000",
  "site_close_time" : "00:00:00",
  "site_desc" : "สามัคคี 61",
  "site_open_time" : "00:00:00",
  "site_tel" : "(02)538-2229 ต่อ 139"
},
{
  "site_id" : "140",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.701767071907,
          13.8600803001758
      ]
  },
  "site_address" : "169/1 ถนนเลียบคลองสอง แขวงบางชัน เขตคลองสามวา กรุงเทพมหานคร 10510",
  "site_close_time" : "00:00:00",
  "site_desc" : "เลียบคลองสอง (ซาฟารีเวิลด์)",
  "site_open_time" : "00:00:00",
  "site_tel" : "(02)538-2229 ต่อ 140"
},
{
  "site_id" : "141",
  "location" : {
      "type" : "Point",
      "coordinates" : [
          100.653098209958,
          13.7541618230729
      ]
  },
  "site_address" : "70/1 ซอยกรุงเทพกรีฑา 7 แขวงหัวหมาก เขตบางกะปิ กรุงเทพมหานคร 10240",
  "site_close_time" : "23:00:00",
  "site_desc" : "Daytime กรุงเทพกรีฑา 7",
  "site_open_time" : "07:00:00",
  "site_tel" : "(02)538-2229 ต่อ 141"
}
];

const seedDB = async () => {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await Site.deleteMany({});
    await Site.insertMany(sites);
    console.log('Data seeded successfully!');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();
