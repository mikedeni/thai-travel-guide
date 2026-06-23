export type Credit = {
  author: string;
  license: string;
  url: string;
};

export type Attraction = {
  nameTh: string;
  nameEn: string;
  description: string;
  lat: number;
  lng: number;
  image: string;
  imageAlt: string;
  credit?: Credit;
};

export type Province = {
  slug: string;
  nameTh: string;
  nameEn: string;
  region: string;
  identity: string;
  image: string;
  imageAlt: string;
  credit?: Credit;
  lat: number;
  lng: number;
  attractions: Attraction[];
};

export const provinces: Province[] = [
  {
    slug: "bangkok",
    nameTh: "กรุงเทพมหานคร",
    nameEn: "Bangkok",
    region: "ภาคกลาง",
    identity:
      "เมืองหลวงที่ไม่เคยหลับใหล ผสานวัดวาอารามอันงดงาม พระบรมมหาราชวัง ตลาดคึกคัก และวิถีริมแม่น้ำเจ้าพระยาเข้ากับความทันสมัยของเมืองใหญ่",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e8/%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%A3%E0%B8%B1%E0%B8%95%E0%B8%99%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%94%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%A1_%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7_%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3_-_Wat_Phra_Kaew%2C_Temple_of_Emerald_Buddha%2C_Bangkok%2C_Thailand.jpg",
    credit: {
      author: "Basile Morin",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%A3%E0%B8%B1%E0%B8%95%E0%B8%99%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%94%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%A1_%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7_%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3_-_Wat_Phra_Kaew,_Temple_of_Emerald_Buddha,_Bangkok,_Thailand.jpg",
    },
    imageAlt: "ทิวทัศน์เมืองกรุงเทพมหานครยามค่ำคืน",
    lat: 13.7563,
    lng: 100.5018,
    attractions: [
      {
        nameTh: "พระบรมมหาราชวัง",
        nameEn: "Grand Palace",
        description: "พระราชวังหลวงอันวิจิตร ที่ตั้งของวัดพระแก้วและพระแก้วมรกต",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/e/e8/%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%A3%E0%B8%B1%E0%B8%95%E0%B8%99%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%94%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%A1_%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7_%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3_-_Wat_Phra_Kaew%2C_Temple_of_Emerald_Buddha%2C_Bangkok%2C_Thailand.jpg",
        credit: {
          author: "Basile Morin",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%A3%E0%B8%B1%E0%B8%95%E0%B8%99%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%94%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%A1_%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7_%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3_-_Wat_Phra_Kaew,_Temple_of_Emerald_Buddha,_Bangkok,_Thailand.jpg",
        },
        imageAlt: "พระบรมมหาราชวังและวัดพระแก้ว",
        lat: 13.7501,
        lng: 100.492,
      },
      {
        nameTh: "วัดอรุณราชวราราม",
        nameEn: "Wat Arun",
        description: "วัดแจ้งริมแม่น้ำเจ้าพระยา โดดเด่นด้วยพระปรางค์ประดับกระเบื้องเคลือบ",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/b/b3/Templo_Wat_Arun%2C_Bangkok%2C_Tailandia%2C_2013-08-22%2C_DD_30.jpg",
        credit: {
          author: "Diego Delso",
          license: "CC BY-SA 3.0",
          url: "https://commons.wikimedia.org/wiki/File:Templo_Wat_Arun,_Bangkok,_Tailandia,_2013-08-22,_DD_30.jpg",
        },
        imageAlt: "พระปรางค์วัดอรุณริมแม่น้ำเจ้าพระยา",
        lat: 13.74361111,
        lng: 100.48888889,
      },
      {
        nameTh: "วัดโพธิ์",
        nameEn: "Wat Pho",
        description: "วัดเก่าแก่ที่ประดิษฐานพระพุทธไสยาสน์ และต้นกำเนิดการนวดแผนไทย",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/1/1c/Wat_Pho%2C_Bangkok%2C_Tailandia%2C_2013-08-22%2C_DD_02.jpg",
        credit: {
          author: "Diego Delso",
          license: "CC BY-SA 3.0",
          url: "https://commons.wikimedia.org/wiki/File:Wat_Pho,_Bangkok,_Tailandia,_2013-08-22,_DD_02.jpg",
        },
        imageAlt: "พระพุทธไสยาสน์ภายในวัดโพธิ์",
        lat: 13.74638889,
        lng: 100.49361111,
      },
      {
        nameTh: "ตลาดนัดจตุจักร",
        nameEn: "Chatuchak Market",
        description: "ตลาดนัดสุดสัปดาห์ขนาดใหญ่ รวมสินค้าหลากหลายกว่าหมื่นร้านค้า",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/6e/Chatuchak_weekend_market_roofs.jpg",
        credit: {
          author: "Jarcje at en.wikipedia",
          license: "CC BY 2.5",
          url: "https://commons.wikimedia.org/wiki/File:Chatuchak_weekend_market_roofs.jpg",
        },
        imageAlt: "บรรยากาศตลาดนัดจตุจักร",
        lat: 13.80083333,
        lng: 100.55138889,
      },
    ],
  },
  {
    slug: "chiang-mai",
    nameTh: "เชียงใหม่",
    nameEn: "Chiang Mai",
    region: "ภาคเหนือ",
    identity:
      "เมืองหลวงแห่งล้านนา เปี่ยมด้วยวัฒนธรรมเก่าแก่ วัดงามบนดอย อากาศเย็นสบาย และย่านสร้างสรรค์อย่างนิมมานเหมินท์",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/14/20171106_Wat_Phra_That_Doi_Suthep_0103_DxO.jpg",
    credit: {
      author: "Jakub Hałun",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:20171106_Wat_Phra_That_Doi_Suthep_0103_DxO.jpg",
    },
    imageAlt: "ทิวเขาและธรรมชาติของจังหวัดเชียงใหม่",
    lat: 18.7883,
    lng: 98.9853,
    attractions: [
      {
        nameTh: "วัดพระธาตุดอยสุเทพ",
        nameEn: "Doi Suthep",
        description: "วัดศักดิ์สิทธิ์บนยอดดอย ชมวิวเมืองเชียงใหม่ได้กว้างไกล",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/1/14/20171106_Wat_Phra_That_Doi_Suthep_0103_DxO.jpg",
        credit: {
          author: "Jakub Hałun",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:20171106_Wat_Phra_That_Doi_Suthep_0103_DxO.jpg",
        },
        imageAlt: "เจดีย์ทองวัดพระธาตุดอยสุเทพ",
        lat: 18.80498,
        lng: 98.92156,
      },
      {
        nameTh: "เมืองเก่าเชียงใหม่",
        nameEn: "Old City",
        description: "เขตคูเมืองโบราณที่เต็มไปด้วยวัดเก่าแก่และร้านรวงน่ารัก",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/20/20171105_Wat_Chedi_Luang_Chiang_Mai_9897_DxO.jpg",
        credit: {
          author: "Jakub Hałun",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:20171105_Wat_Chedi_Luang_Chiang_Mai_9897_DxO.jpg",
        },
        imageAlt: "วัดในเขตเมืองเก่าเชียงใหม่",
        lat: 18.78694444,
        lng: 98.98638889,
      },
      {
        nameTh: "ย่านนิมมานเหมินท์",
        nameEn: "Nimman",
        description: "ย่านฮิปเต็มไปด้วยคาเฟ่ ร้านอาหาร และงานศิลป์ร่วมสมัย",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c2/One_Nimman_View.jpg",
        credit: {
          author: "F.Borromini",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:One_Nimman_View.jpg",
        },
        imageAlt: "บรรยากาศคาเฟ่ย่านนิมมานเหมินท์",
        lat: 18.8005,
        lng: 98.967,
      },
    ],
  },
  {
    slug: "phuket",
    nameTh: "ภูเก็ต",
    nameEn: "Phuket",
    region: "ภาคใต้",
    identity: "ไข่มุกแห่งอันดามัน เกาะท่องเที่ยวชื่อดังระดับโลก หาดทรายขาว น้ำทะเลใส และเมืองเก่าสไตล์ชิโน-โปรตุกีส",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/09/Isla_Phi_Phi_Lay%2C_Tailandia%2C_2013-08-19%2C_DD_04.JPG",
    credit: {
      author: "Diego Delso",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Isla_Phi_Phi_Lay,_Tailandia,_2013-08-19,_DD_04.JPG",
    },
    imageAlt: "หาดทรายและทะเลสีฟ้าของภูเก็ต",
    lat: 7.8804,
    lng: 98.3923,
    attractions: [
      {
        nameTh: "หาดป่าตอง",
        nameEn: "Patong Beach",
        description: "หาดยอดนิยมที่คึกคักด้วยกิจกรรมทางน้ำและชีวิตยามค่ำคืน",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/65/Patong_Beach_Phuket_November_2012.jpg",
        credit: {
          author: "Arnaud-Victor Monteux",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Patong_Beach_Phuket_November_2012.jpg",
        },
        imageAlt: "หาดป่าตองยามกลางวัน",
        lat: 7.89305556,
        lng: 98.29833333,
      },
      {
        nameTh: "พระใหญ่เมืองภูเก็ต",
        nameEn: "Big Buddha",
        description: "พระพุทธรูปสีขาวขนาดใหญ่บนเขานาคเกิด ชมวิวเกาะได้รอบทิศ",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/56/The_Big_Buddha%2C_Phuket.jpg",
        credit: {
          author: "Subhrajyoti07",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:The_Big_Buddha,_Phuket.jpg",
        },
        imageAlt: "พระใหญ่สีขาวบนยอดเขาในภูเก็ต",
        lat: 7.827598,
        lng: 98.312853,
      },
      {
        nameTh: "หมู่เกาะพีพี",
        nameEn: "Phi Phi Islands",
        description: "ทริปดำน้ำดูปะการังท่ามกลางอ่าวมรกตและหน้าผาหินปูนงดงาม",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/8/88/Maya_Bay%2C_Koh_Phi_Phi%2C_Krabi%2C_Thailand.jpg",
        credit: {
          author: "Vyacheslav Argenberg",
          license: "CC BY 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Maya_Bay,_Koh_Phi_Phi,_Krabi,_Thailand.jpg",
        },
        imageAlt: "เรือหางยาวและอ่าวหมู่เกาะพีพี",
        lat: 7.73333333,
        lng: 98.76666667,
      },
    ],
  },
  {
    slug: "krabi",
    nameTh: "กระบี่",
    nameEn: "Krabi",
    region: "ภาคใต้",
    identity: "ดินแดนแห่งหน้าผาหินปูนและทะเลอันดามันสุดงาม จุดหมายของนักปีนผา นักดำน้ำ และผู้หลงใหลธรรมชาติ",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/West_Rai_Leh_%2811%29.jpg",
    credit: {
      author: "Krzysztof Golik",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:West_Rai_Leh_(11).jpg",
    },
    imageAlt: "เรือหางยาวและหน้าผาหินปูนที่กระบี่",
    lat: 8.0863,
    lng: 98.9063,
    attractions: [
      {
        nameTh: "อ่าวไร่เลย์",
        nameEn: "Railay Beach",
        description: "ชายหาดที่เข้าถึงได้ด้วยเรือ ล้อมรอบด้วยหน้าผาสำหรับปีนเขา",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Railay_Beach_5.jpg",
        credit: {
          author: "kallerna",
          license: "CC BY-SA 3.0",
          url: "https://commons.wikimedia.org/wiki/File:Railay_Beach_5.jpg",
        },
        imageAlt: "หาดไร่เลย์ล้อมรอบด้วยหน้าผา",
        lat: 8.01055556,
        lng: 98.83944444,
      },
      {
        nameTh: "เกาะปอดะ",
        nameEn: "Koh Poda",
        description: "เกาะน้ำใสหาดทรายขาว เหมาะแก่การเล่นน้ำและดำน้ำตื้น",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Ko_Kai_%26_Ko_Tub_12.jpg",
        credit: {
          author: "kallerna",
          license: "CC BY-SA 3.0",
          url: "https://commons.wikimedia.org/wiki/File:Ko_Kai_%26_Ko_Tub_12.jpg",
        },
        imageAlt: "ทะเลใสและเกาะปอดะ",
        lat: 7.97138889,
        lng: 98.80861111,
      },
      {
        nameTh: "สระมรกต",
        nameEn: "Emerald Pool",
        description: "สระน้ำสีเขียวมรกตกลางป่าเขตรักษาพันธุ์สัตว์ป่า",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/8/8f/Emerald_pool_park%2C_Krabi_province%2C_Thailand_2018_2.jpg",
        credit: {
          author: "Karelj",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Emerald_pool_park,_Krabi_province,_Thailand_2018_2.jpg",
        },
        imageAlt: "สระมรกตกลางผืนป่ากระบี่",
        lat: 7.9242,
        lng: 99.2667,
      },
    ],
  },
  {
    slug: "ayutthaya",
    nameTh: "พระนครศรีอยุธยา",
    nameEn: "Ayutthaya",
    region: "ภาคกลาง",
    identity:
      "อดีตราชธานีเก่าแก่ของไทย เมืองมรดกโลกที่เต็มไปด้วยโบราณสถานและร่องรอยความรุ่งเรืองของอาณาจักรอยุธยา",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/%E0%B9%80%E0%B8%A8%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%9E%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B9%83%E0%B8%99%E0%B8%A3%E0%B8%B2%E0%B8%81%E0%B9%82%E0%B8%9E%E0%B8%98%E0%B8%B4%E0%B9%8C.jpg",
    credit: {
      author: "Siripatwongpin",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:%E0%B9%80%E0%B8%A8%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%9E%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B9%83%E0%B8%99%E0%B8%A3%E0%B8%B2%E0%B8%81%E0%B9%82%E0%B8%9E%E0%B8%98%E0%B8%B4%E0%B9%8C.jpg",
    },
    imageAlt: "โบราณสถานในอุทยานประวัติศาสตร์อยุธยา",
    lat: 14.3692,
    lng: 100.5877,
    attractions: [
      {
        nameTh: "วัดมหาธาตุ",
        nameEn: "Wat Mahathat",
        description: "ที่ตั้งของเศียรพระพุทธรูปในรากต้นไม้อันโด่งดังของอยุธยา",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/4/40/Buddha_head_in_bodhi_tree%2C_Wat_Mahathat.jpg",
        credit: {
          author: "Jatoo",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Buddha_head_in_bodhi_tree,_Wat_Mahathat.jpg",
        },
        imageAlt: "เศียรพระในรากต้นไม้ วัดมหาธาตุ",
        lat: 14.3569,
        lng: 100.5675,
      },
      {
        nameTh: "วัดไชยวัฒนาราม",
        nameEn: "Wat Chaiwatthanaram",
        description: "วัดริมแม่น้ำทรงปรางค์งดงาม ได้รับอิทธิพลศิลปะขอม",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/e/e9/Timeless_of_Ayutthaya_Wat_Chaiwatthanaram.jpg",
        credit: {
          author: "Tang2bar",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Timeless_of_Ayutthaya_Wat_Chaiwatthanaram.jpg",
        },
        imageAlt: "ปรางค์วัดไชยวัฒนารามริมแม่น้ำ",
        lat: 14.34305556,
        lng: 100.54166667,
      },
      {
        nameTh: "วัดพระศรีสรรเพชญ์",
        nameEn: "Wat Phra Si Sanphet",
        description: "วัดในเขตพระราชวังหลวง เด่นด้วยเจดีย์ทรงลังกาสามองค์",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/7/76/Templo_Phra_Si_Sanphet%2C_Ayutthaya%2C_Tailandia%2C_2013-08-23%2C_DD_17.jpg",
        credit: {
          author: "Diego Delso",
          license: "CC BY-SA 3.0",
          url: "https://commons.wikimedia.org/wiki/File:Templo_Phra_Si_Sanphet,_Ayutthaya,_Tailandia,_2013-08-23,_DD_17.jpg",
        },
        imageAlt: "เจดีย์สามองค์วัดพระศรีสรรเพชญ์",
        lat: 14.3558,
        lng: 100.5583,
      },
    ],
  },
  {
    slug: "sukhothai",
    nameTh: "สุโขทัย",
    nameEn: "Sukhothai",
    region: "ภาคเหนือ",
    identity:
      "รุ่งอรุณแห่งความสุข ราชธานีแรกของไทยและเมืองมรดกโลก โดดเด่นด้วยอุทยานประวัติศาสตร์และพระพุทธรูปศิลปะสุโขทัยอันอ่อนช้อย",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/28/Wat_Mahathat%2C_Sukhothai_%28I%29.jpg",
    credit: {
      author:
        "This Photo was taken by Supanut Arunoprayote. Feel free to use any of my images, but please mention me as the author and may send me a message. (สามารถใช้ภาพได้อิสระ แต่กรุณาใส่เครดิตผู้ถ่ายและอาจส่งข้อความบอกกล่าวด้วย) Please do not upload an updated image here without consultation with the Author. The author would like to make corrections only at his own source. This ensures that the changes are preserved.Please if you think that any changes should be required, please inform the author.Otherwise you can upload a new image with a new name. Please use one of the templates derivative or extract.",
      license: "CC BY 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Wat_Mahathat,_Sukhothai_(I).jpg",
    },
    imageAlt: "พระพุทธรูปในอุทยานประวัติศาสตร์สุโขทัย",
    lat: 17.0078,
    lng: 99.8237,
    attractions: [
      {
        nameTh: "อุทยานประวัติศาสตร์สุโขทัย",
        nameEn: "Sukhothai Historical Park",
        description: "กลุ่มโบราณสถานกลางสวนสวย สะท้อนความรุ่งเรืองของอาณาจักรสุโขทัย",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/28/Wat_Mahathat%2C_Sukhothai_%28I%29.jpg",
        credit: {
          author:
            "This Photo was taken by Supanut Arunoprayote. Feel free to use any of my images, but please mention me as the author and may send me a message. (สามารถใช้ภาพได้อิสระ แต่กรุณาใส่เครดิตผู้ถ่ายและอาจส่งข้อความบอกกล่าวด้วย) Please do not upload an updated image here without consultation with the Author. The author would like to make corrections only at his own source. This ensures that the changes are preserved.Please if you think that any changes should be required, please inform the author.Otherwise you can upload a new image with a new name. Please use one of the templates derivative or extract.",
          license: "CC BY 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Wat_Mahathat,_Sukhothai_(I).jpg",
        },
        imageAlt: "โบราณสถานในอุทยานประวัติศาสตร์สุโขทัย",
        lat: 17.0211,
        lng: 99.7036,
      },
      {
        nameTh: "วัดมหาธาตุ",
        nameEn: "Wat Mahathat",
        description: "วัดศูนย์กลางเมืองเก่า เด่นด้วยเจดีย์ทรงพุ่มข้าวบิณฑ์",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/28/Wat_Mahathat%2C_Sukhothai_%28I%29.jpg",
        credit: {
          author:
            "This Photo was taken by Supanut Arunoprayote. Feel free to use any of my images, but please mention me as the author and may send me a message. (สามารถใช้ภาพได้อิสระ แต่กรุณาใส่เครดิตผู้ถ่ายและอาจส่งข้อความบอกกล่าวด้วย) Please do not upload an updated image here without consultation with the Author. The author would like to make corrections only at his own source. This ensures that the changes are preserved.Please if you think that any changes should be required, please inform the author.Otherwise you can upload a new image with a new name. Please use one of the templates derivative or extract.",
          license: "CC BY 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Wat_Mahathat,_Sukhothai_(I).jpg",
        },
        imageAlt: "เจดีย์ทรงดอกบัวตูม วัดมหาธาตุสุโขทัย",
        lat: 17.0206,
        lng: 99.7029,
      },
      {
        nameTh: "วัดศรีชุม",
        nameEn: "Wat Si Chum",
        description: "ที่ประดิษฐานพระอจนะ พระพุทธรูปนั่งขนาดใหญ่ในมณฑป",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/01/Hand_of_Wat_Si_Chum.jpg",
        credit: {
          author: "Gzzz",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Hand_of_Wat_Si_Chum.jpg",
        },
        imageAlt: "พระอจนะภายในมณฑปวัดศรีชุม",
        lat: 17.0277,
        lng: 99.6968,
      },
    ],
  },
  {
    slug: "chiang-rai",
    nameTh: "เชียงราย",
    nameEn: "Chiang Rai",
    region: "ภาคเหนือ",
    identity:
      "เมืองเหนือสุดแดนสยาม ดินแดนแห่งศิลปะร่วมสมัย วัดสีขาวสุดอลังการ ดอยสูง ไร่ชา และวัฒนธรรมชาวเขาหลากชาติพันธุ์",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Wat_Rong_Khun-001.jpg",
    credit: {
      author: "Ddalbiez",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Wat_Rong_Khun-001.jpg",
    },
    imageAlt: "ทิวเขาและไร่ชาของจังหวัดเชียงราย",
    lat: 19.9105,
    lng: 99.8406,
    attractions: [
      {
        nameTh: "วัดร่องขุ่น",
        nameEn: "White Temple",
        description: "วัดสีขาวงานศิลป์ร่วมสมัยของอาจารย์เฉลิมชัย โฆษิตพิพัฒน์",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/a/a6/Chiang_Rai_-_Wat_Rong_Khun_%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%A3%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%82%E0%B8%B8%E0%B9%88%E0%B8%99_%282026%29_-_img_11.jpg",
        credit: {
          author: "Chainwit.",
          license: "CC BY 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Chiang_Rai_-_Wat_Rong_Khun_%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%A3%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%82%E0%B8%B8%E0%B9%88%E0%B8%99_(2026)_-_img_11.jpg",
        },
        imageAlt: "วัดร่องขุ่นสีขาวอันวิจิตร",
        lat: 19.82466667,
        lng: 99.76333333,
      },
      {
        nameTh: "ดอยตุง",
        nameEn: "Doi Tung",
        description: "พระตำหนักและสวนแม่ฟ้าหลวงบนดอยสูง อากาศเย็นสบายตลอดปี",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/DoiTungGarden.JPG",
        credit: {
          author: "Elgaard",
          license: "CC BY-SA 3.0",
          url: "https://commons.wikimedia.org/wiki/File:DoiTungGarden.JPG",
        },
        imageAlt: "สวนดอกไม้บนดอยตุง",
        lat: 20.34583333,
        lng: 99.83444444,
      },
      {
        nameTh: "สามเหลี่ยมทองคำ",
        nameEn: "Golden Triangle",
        description: "จุดบรรจบสามประเทศริมแม่น้ำโขง ไทย ลาว และเมียนมา",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/c/c9/Sop-Ruak_Thailand_Golden-Triangle-01.jpg",
        credit: {
          author: "CEphoto, Uwe Aranas",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Sop-Ruak_Thailand_Golden-Triangle-01.jpg",
        },
        imageAlt: "แม่น้ำโขงบริเวณสามเหลี่ยมทองคำ",
        lat: 20.35,
        lng: 100.08333333,
      },
    ],
  },
  {
    slug: "kanchanaburi",
    nameTh: "กาญจนบุรี",
    nameEn: "Kanchanaburi",
    region: "ภาคตะวันตก",
    identity: "เมืองแห่งธรรมชาติและประวัติศาสตร์ ที่ตั้งของสะพานข้ามแม่น้ำแคว น้ำตกสวย และผืนป่าอุทยานแห่งชาติกว้างใหญ่",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/61/Erawan_Falls_4.JPG",
    credit: {
      author: "FearOfMusic",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Erawan_Falls_4.JPG",
    },
    imageAlt: "ธรรมชาติและสายน้ำของกาญจนบุรี",
    lat: 14.0227,
    lng: 99.5328,
    attractions: [
      {
        nameTh: "สะพานข้ามแม่น้ำแคว",
        nameEn: "Bridge over the River Kwai",
        description: "สะพานประวัติศาสตร์สมัยสงครามโลกครั้งที่สองอันโด่งดัง",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/24/Bridge_on_the_River_Kwai_-_tourist_plaza.JPG",
        credit: {
          author: "PumpkinSky",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Bridge_on_the_River_Kwai_-_tourist_plaza.JPG",
        },
        imageAlt: "สะพานข้ามแม่น้ำแคว",
        lat: 14.0413,
        lng: 99.5036,
      },
      {
        nameTh: "น้ำตกเอราวัณ",
        nameEn: "Erawan Falls",
        description: "น้ำตกเจ็ดชั้นสีเขียวมรกตกลางอุทยานแห่งชาติเอราวัณ",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/61/Erawan_Falls_4.JPG",
        credit: {
          author: "FearOfMusic",
          license: "CC BY-SA 3.0",
          url: "https://commons.wikimedia.org/wiki/File:Erawan_Falls_4.JPG",
        },
        imageAlt: "น้ำตกเอราวัณสีเขียวมรกต",
        lat: 14.38333333,
        lng: 99.11666667,
      },
      {
        nameTh: "เมืองมัลลิกา ร.ศ. 124",
        nameEn: "Mallika City",
        description: "เมืองจำลองวิถีชีวิตชาวสยามในสมัยรัชกาลที่ ๕",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/a/a5/Thailand_Immigration_Stamps.png",
        credit: {
          author: "Alexnevzorov",
          license: "CC BY-SA 3.0",
          url: "https://commons.wikimedia.org/wiki/File:Thailand_Immigration_Stamps.png",
        },
        imageAlt: "บรรยากาศเมืองมัลลิกาแบบย้อนยุค",
        lat: 14.0186,
        lng: 99.5895,
      },
    ],
  },
  {
    slug: "prachuap-khiri-khan",
    nameTh: "ประจวบคีรีขันธ์",
    nameEn: "Prachuap Khiri Khan",
    region: "ภาคตะวันตก",
    identity:
      "เมืองชายทะเลใกล้กรุงเทพฯ ที่ตั้งของหัวหิน เมืองตากอากาศคลาสสิก หาดทรายยาว ตลาดน้ำ และอุทยานแห่งชาติเขาสามร้อยยอด",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Beagle_at_Hua_Hin_beach_03.jpg",
    credit: {
      author: "Slyronit",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Beagle_at_Hua_Hin_beach_03.jpg",
    },
    imageAlt: "ชายหาดหัวหินในจังหวัดประจวบคีรีขันธ์",
    lat: 12.5704,
    lng: 99.9579,
    attractions: [
      {
        nameTh: "หาดหัวหิน",
        nameEn: "Hua Hin Beach",
        description: "ชายหาดตากอากาศชื่อดัง สงบและเหมาะแก่การพักผ่อน",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Beagle_at_Hua_Hin_beach_03.jpg",
        credit: {
          author: "Slyronit",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Beagle_at_Hua_Hin_beach_03.jpg",
        },
        imageAlt: "หาดหัวหินยามเช้า",
        lat: 12.56861111,
        lng: 99.95777778,
      },
      {
        nameTh: "อุทยานแห่งชาติเขาสามร้อยยอด",
        nameEn: "Khao Sam Roi Yot",
        description: "ภูเขาหินปูน ถ้ำพระยานคร และพื้นที่ชุ่มน้ำที่งดงาม",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/96/01-%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%99%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%84%E0%B8%B9%E0%B8%AB%E0%B8%B2%E0%B8%84%E0%B8%A4%E0%B8%AB%E0%B8%B2%E0%B8%AA%E0%B8%99%E0%B9%8C.jpg",
        credit: {
          author: "BerryJ",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:01-%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%99%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%84%E0%B8%B9%E0%B8%AB%E0%B8%B2%E0%B8%84%E0%B8%A4%E0%B8%AB%E0%B8%B2%E0%B8%AA%E0%B8%99%E0%B9%8C.jpg",
        },
        imageAlt: "ภูเขาหินปูนเขาสามร้อยยอด",
        lat: 12.1825,
        lng: 99.94833333,
      },
      {
        nameTh: "ตลาดน้ำหัวหินสามพันนาม",
        nameEn: "Sam Phan Nam Floating Market",
        description: "ตลาดน้ำย้อนยุคพร้อมอาหารถิ่นและบรรยากาศริมน้ำ",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/92/Hua_Hin_Floating_Market_-_panoramio.jpg",
        credit: {
          author: "Thaweesak Churasri",
          license: "CC BY 3.0",
          url: "https://commons.wikimedia.org/wiki/File:Hua_Hin_Floating_Market_-_panoramio.jpg",
        },
        imageAlt: "บรรยากาศตลาดน้ำในหัวหิน",
        lat: 12.5897,
        lng: 99.969,
      },
    ],
  },
  {
    slug: "surat-thani",
    nameTh: "สุราษฎร์ธานี",
    nameEn: "Surat Thani",
    region: "ภาคใต้",
    identity:
      "เมืองคนดีและประตูสู่หมู่เกาะอ่าวไทย ที่ตั้งของเกาะสมุย เกาะพะงัน เกาะเต่า และผืนป่าเขื่อนรัชชประภาอันงดงาม",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Koh_Samui_Lipa_Noi2.jpg",
    credit: {
      author: "Manfred Werner",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Koh_Samui_Lipa_Noi2.jpg",
    },
    imageAlt: "ทะเลและเกาะในจังหวัดสุราษฎร์ธานี",
    lat: 9.1342,
    lng: 99.3334,
    attractions: [
      {
        nameTh: "เกาะสมุย",
        nameEn: "Koh Samui",
        description: "เกาะท่องเที่ยวระดับโลก หาดทรายขาวและรีสอร์ตหรู",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Koh_Samui_Lipa_Noi2.jpg",
        credit: {
          author: "Manfred Werner",
          license: "CC BY-SA 3.0",
          url: "https://commons.wikimedia.org/wiki/File:Koh_Samui_Lipa_Noi2.jpg",
        },
        imageAlt: "หาดทรายขาวบนเกาะสมุย",
        lat: 9.5,
        lng: 100,
      },
      {
        nameTh: "เขื่อนรัชชประภา",
        nameEn: "Cheow Lan Lake",
        description: "กุ้ยหลินเมืองไทย ทะเลสาบสีเขียวมรกตล้อมด้วยหน้าผาหินปูน",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/7/70/Rajjaprabha_Dam_Reservoir_05.jpg",
        credit: {
          author: "Avenlarosa",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Rajjaprabha_Dam_Reservoir_05.jpg",
        },
        imageAlt: "ทะเลสาบเขื่อนรัชชประภาและหน้าผาหินปูน",
        lat: 8.97666667,
        lng: 98.80444444,
      },
      {
        nameTh: "เกาะเต่า",
        nameEn: "Koh Tao",
        description: "สวรรค์ของนักดำน้ำ น้ำทะเลใสและแนวปะการังอุดมสมบูรณ์",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Hin_Tha_Toh_Ko_Tao_1.jpg",
        credit: {
          author: "kallerna",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Hin_Tha_Toh_Ko_Tao_1.jpg",
        },
        imageAlt: "อ่าวและเรือที่เกาะเต่า",
        lat: 10.09,
        lng: 99.8381,
      },
    ],
  },
  {
    slug: "nakhon-ratchasima",
    nameTh: "นครราชสีมา",
    nameEn: "Nakhon Ratchasima",
    region: "ภาคตะวันออกเฉียงเหนือ",
    identity: "ประตูสู่อีสาน เมืองย่าโม ดินแดนแห่งอุทยานมรดกโลกเขาใหญ่ ปราสาทหินโบราณ และไร่องุ่นไวน์เมืองหนาว",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/29/Haew_narok_waterfall_first_tier.jpg",
    credit: {
      author: "Tontanthailand",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Haew_narok_waterfall_first_tier.jpg",
    },
    imageAlt: "ผืนป่าและภูเขาในจังหวัดนครราชสีมา",
    lat: 14.9799,
    lng: 102.0978,
    attractions: [
      {
        nameTh: "อุทยานแห่งชาติเขาใหญ่",
        nameEn: "Khao Yai National Park",
        description: "อุทยานมรดกโลก ป่าดิบ น้ำตก และสัตว์ป่านานาชนิด",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/27/Khao_Yai%2C_Thailand%2C_Haew_Suwat_Waterfall%2C_Top.jpg",
        credit: {
          author: "Vyacheslav Argenberg",
          license: "CC BY 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Khao_Yai,_Thailand,_Haew_Suwat_Waterfall,_Top.jpg",
        },
        imageAlt: "ทิวป่าเขาใหญ่",
        lat: 14.35,
        lng: 101.44,
      },
      {
        nameTh: "ปราสาทหินพิมาย",
        nameEn: "Phimai Historical Park",
        description: "ปราสาทหินขอมขนาดใหญ่ที่สุดแห่งหนึ่งในประเทศไทย",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/1/11/Phimai_Historical_Park_Thailand_08.jpg",
        credit: {
          author: "Philip Nalangan",
          license: "CC BY 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Phimai_Historical_Park_Thailand_08.jpg",
        },
        imageAlt: "ปราสาทหินพิมาย",
        lat: 15.22083333,
        lng: 102.49388889,
      },
      {
        nameTh: "อนุสาวรีย์ท้าวสุรนารี",
        nameEn: "Thao Suranari Monument",
        description: "อนุสาวรีย์ย่าโม วีรสตรีอันเป็นที่เคารพของชาวโคราช",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/b/bd/Thao_Suranaree_Statue_Korat_Thailand.JPG",
        credit: {
          author: "Khaosaming",
          license: "CC BY-SA 3.0",
          url: "https://commons.wikimedia.org/wiki/File:Thao_Suranaree_Statue_Korat_Thailand.JPG",
        },
        imageAlt: "อนุสาวรีย์ท้าวสุรนารี",
        lat: 14.976,
        lng: 102.0987,
      },
    ],
  },
  {
    slug: "mae-hong-son",
    nameTh: "แม่ฮ่องสอน",
    nameEn: "Mae Hong Son",
    region: "ภาคเหนือ",
    identity:
      "เมืองสามหมอกในอ้อมกอดขุนเขา ดินแดนแห่งทะเลหมอก วัฒนธรรมไทใหญ่ ปาย และเส้นทางคดเคี้ยวงดงามกว่าพันโค้ง",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1c/Mae_Hong_Son%2C_Forested_hills_2%2C_Thailand.jpg",
    credit: {
      author: "Vyacheslav Argenberg",
      license: "CC BY 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Mae_Hong_Son,_Forested_hills_2,_Thailand.jpg",
    },
    imageAlt: "ทะเลหมอกและขุนเขาของแม่ฮ่องสอน",
    lat: 19.301,
    lng: 97.9685,
    attractions: [
      {
        nameTh: "ปาย",
        nameEn: "Pai",
        description: "เมืองเล็กในหุบเขา บรรยากาศชิลล์ คาเฟ่ และทะเลหมอกยามเช้า",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/e/ee/Pai_countryside_2%2C_Thailand.jpg",
        credit: {
          author: "Vyacheslav Argenberg",
          license: "CC BY 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Pai_countryside_2,_Thailand.jpg",
        },
        imageAlt: "ทิวเขาและทุ่งนาที่ปาย",
        lat: 19.35861111,
        lng: 98.44,
      },
      {
        nameTh: "วัดพระธาตุดอยกองมู",
        nameEn: "Wat Phra That Doi Kong Mu",
        description: "วัดไทใหญ่บนยอดดอย ชมวิวเมืองแม่ฮ่องสอนทั้งเมือง",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/61/Shane_-_Phra_That_Doi_Kong_Mu_Temple.jpg",
        credit: {
          author: "Shane WP Wongperk",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Shane_-_Phra_That_Doi_Kong_Mu_Temple.jpg",
        },
        imageAlt: "เจดีย์สีขาววัดพระธาตุดอยกองมู",
        lat: 19.3001,
        lng: 97.9601,
      },
      {
        nameTh: "บ้านรักไทย",
        nameEn: "Ban Rak Thai",
        description: "หมู่บ้านชาวจีนยูนนานริมทะเลสาบ ไร่ชาและบ้านดินกลางหุบเขา",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/8/82/Ban_Rak_Thai_Mae_Hong_Sorn_Thailand_%28125159247%29.jpeg",
        credit: {
          author: "Wichian Ratanatongchai",
          license: "CC BY-SA 3.0",
          url: "https://commons.wikimedia.org/wiki/File:Ban_Rak_Thai_Mae_Hong_Sorn_Thailand_(125159247).jpeg",
        },
        imageAlt: "หมู่บ้านรักไทยริมทะเลสาบ",
        lat: 19.4889,
        lng: 98.0492,
      },
    ],
  },
];

export function getAllProvinces(): Province[] {
  return provinces;
}

export function getProvinceBySlug(slug: string): Province | undefined {
  return provinces.find((province) => province.slug === slug);
}
