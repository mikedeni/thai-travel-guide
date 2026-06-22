export type Attraction = {
  nameTh: string;
  nameEn: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type Province = {
  slug: string;
  nameTh: string;
  nameEn: string;
  region: string;
  identity: string;
  image: string;
  imageAlt: string;
  lat: number;
  lng: number;
  attractions: Attraction[];
};

// A small set of known-good Unsplash Thailand/travel photo IDs, reused across
// provinces. Repeating a few reliable images is preferable to inventing IDs
// that 404.
const IMG = {
  temple: "photo-1528181304800-259b08848526",
  templeGold: "photo-1563492065599-3520f775eeed",
  beach: "photo-1552465011-b4e21bf6e79a",
  longtail: "photo-1537956965359-7573183d1f57",
  ruins: "photo-1570366583862-f91883984fde",
  bangkok: "photo-1508009603885-50cf7c579365",
  mountain: "photo-1528127269322-539801943592",
  market: "photo-1504457047772-27faf1c00561",
  city: "photo-1563492065599-3520f775eeed",
} as const;

function unsplash(id: string): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;
}

export const provinces: Province[] = [
  {
    slug: "bangkok",
    nameTh: "กรุงเทพมหานคร",
    nameEn: "Bangkok",
    region: "ภาคกลาง",
    identity:
      "เมืองหลวงที่ไม่เคยหลับใหล ผสานวัดวาอารามอันงดงาม พระบรมมหาราชวัง ตลาดคึกคัก และวิถีริมแม่น้ำเจ้าพระยาเข้ากับความทันสมัยของเมืองใหญ่",
    image: unsplash(IMG.bangkok),
    imageAlt: "ทิวทัศน์เมืองกรุงเทพมหานครยามค่ำคืน",
    lat: 13.7563,
    lng: 100.5018,
    attractions: [
      {
        nameTh: "พระบรมมหาราชวัง",
        nameEn: "Grand Palace",
        description: "พระราชวังหลวงอันวิจิตร ที่ตั้งของวัดพระแก้วและพระแก้วมรกต",
        image: unsplash(IMG.templeGold),
        imageAlt: "พระบรมมหาราชวังและวัดพระแก้ว",
      },
      {
        nameTh: "วัดอรุณราชวราราม",
        nameEn: "Wat Arun",
        description: "วัดแจ้งริมแม่น้ำเจ้าพระยา โดดเด่นด้วยพระปรางค์ประดับกระเบื้องเคลือบ",
        image: unsplash(IMG.temple),
        imageAlt: "พระปรางค์วัดอรุณริมแม่น้ำเจ้าพระยา",
      },
      {
        nameTh: "วัดโพธิ์",
        nameEn: "Wat Pho",
        description: "วัดเก่าแก่ที่ประดิษฐานพระพุทธไสยาสน์ และต้นกำเนิดการนวดแผนไทย",
        image: unsplash(IMG.temple),
        imageAlt: "พระพุทธไสยาสน์ภายในวัดโพธิ์",
      },
      {
        nameTh: "ตลาดนัดจตุจักร",
        nameEn: "Chatuchak Market",
        description: "ตลาดนัดสุดสัปดาห์ขนาดใหญ่ รวมสินค้าหลากหลายกว่าหมื่นร้านค้า",
        image: unsplash(IMG.market),
        imageAlt: "บรรยากาศตลาดนัดจตุจักร",
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
    image: unsplash(IMG.mountain),
    imageAlt: "ทิวเขาและธรรมชาติของจังหวัดเชียงใหม่",
    lat: 18.7883,
    lng: 98.9853,
    attractions: [
      {
        nameTh: "วัดพระธาตุดอยสุเทพ",
        nameEn: "Doi Suthep",
        description: "วัดศักดิ์สิทธิ์บนยอดดอย ชมวิวเมืองเชียงใหม่ได้กว้างไกล",
        image: unsplash(IMG.templeGold),
        imageAlt: "เจดีย์ทองวัดพระธาตุดอยสุเทพ",
      },
      {
        nameTh: "เมืองเก่าเชียงใหม่",
        nameEn: "Old City",
        description: "เขตคูเมืองโบราณที่เต็มไปด้วยวัดเก่าแก่และร้านรวงน่ารัก",
        image: unsplash(IMG.temple),
        imageAlt: "วัดในเขตเมืองเก่าเชียงใหม่",
      },
      {
        nameTh: "ย่านนิมมานเหมินท์",
        nameEn: "Nimman",
        description: "ย่านฮิปเต็มไปด้วยคาเฟ่ ร้านอาหาร และงานศิลป์ร่วมสมัย",
        image: unsplash(IMG.market),
        imageAlt: "บรรยากาศคาเฟ่ย่านนิมมานเหมินท์",
      },
    ],
  },
  {
    slug: "phuket",
    nameTh: "ภูเก็ต",
    nameEn: "Phuket",
    region: "ภาคใต้",
    identity: "ไข่มุกแห่งอันดามัน เกาะท่องเที่ยวชื่อดังระดับโลก หาดทรายขาว น้ำทะเลใส และเมืองเก่าสไตล์ชิโน-โปรตุกีส",
    image: unsplash(IMG.beach),
    imageAlt: "หาดทรายและทะเลสีฟ้าของภูเก็ต",
    lat: 7.8804,
    lng: 98.3923,
    attractions: [
      {
        nameTh: "หาดป่าตอง",
        nameEn: "Patong Beach",
        description: "หาดยอดนิยมที่คึกคักด้วยกิจกรรมทางน้ำและชีวิตยามค่ำคืน",
        image: unsplash(IMG.beach),
        imageAlt: "หาดป่าตองยามกลางวัน",
      },
      {
        nameTh: "พระใหญ่เมืองภูเก็ต",
        nameEn: "Big Buddha",
        description: "พระพุทธรูปสีขาวขนาดใหญ่บนเขานาคเกิด ชมวิวเกาะได้รอบทิศ",
        image: unsplash(IMG.temple),
        imageAlt: "พระใหญ่สีขาวบนยอดเขาในภูเก็ต",
      },
      {
        nameTh: "หมู่เกาะพีพี",
        nameEn: "Phi Phi Islands",
        description: "ทริปดำน้ำดูปะการังท่ามกลางอ่าวมรกตและหน้าผาหินปูนงดงาม",
        image: unsplash(IMG.longtail),
        imageAlt: "เรือหางยาวและอ่าวหมู่เกาะพีพี",
      },
    ],
  },
  {
    slug: "krabi",
    nameTh: "กระบี่",
    nameEn: "Krabi",
    region: "ภาคใต้",
    identity: "ดินแดนแห่งหน้าผาหินปูนและทะเลอันดามันสุดงาม จุดหมายของนักปีนผา นักดำน้ำ และผู้หลงใหลธรรมชาติ",
    image: unsplash(IMG.longtail),
    imageAlt: "เรือหางยาวและหน้าผาหินปูนที่กระบี่",
    lat: 8.0863,
    lng: 98.9063,
    attractions: [
      {
        nameTh: "อ่าวไร่เลย์",
        nameEn: "Railay Beach",
        description: "ชายหาดที่เข้าถึงได้ด้วยเรือ ล้อมรอบด้วยหน้าผาสำหรับปีนเขา",
        image: unsplash(IMG.beach),
        imageAlt: "หาดไร่เลย์ล้อมรอบด้วยหน้าผา",
      },
      {
        nameTh: "เกาะปอดะ",
        nameEn: "Koh Poda",
        description: "เกาะน้ำใสหาดทรายขาว เหมาะแก่การเล่นน้ำและดำน้ำตื้น",
        image: unsplash(IMG.longtail),
        imageAlt: "ทะเลใสและเกาะปอดะ",
      },
      {
        nameTh: "สระมรกต",
        nameEn: "Emerald Pool",
        description: "สระน้ำสีเขียวมรกตกลางป่าเขตรักษาพันธุ์สัตว์ป่า",
        image: unsplash(IMG.mountain),
        imageAlt: "สระมรกตกลางผืนป่ากระบี่",
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
    image: unsplash(IMG.ruins),
    imageAlt: "โบราณสถานในอุทยานประวัติศาสตร์อยุธยา",
    lat: 14.3692,
    lng: 100.5877,
    attractions: [
      {
        nameTh: "วัดมหาธาตุ",
        nameEn: "Wat Mahathat",
        description: "ที่ตั้งของเศียรพระพุทธรูปในรากต้นไม้อันโด่งดังของอยุธยา",
        image: unsplash(IMG.ruins),
        imageAlt: "เศียรพระในรากต้นไม้ วัดมหาธาตุ",
      },
      {
        nameTh: "วัดไชยวัฒนาราม",
        nameEn: "Wat Chaiwatthanaram",
        description: "วัดริมแม่น้ำทรงปรางค์งดงาม ได้รับอิทธิพลศิลปะขอม",
        image: unsplash(IMG.ruins),
        imageAlt: "ปรางค์วัดไชยวัฒนารามริมแม่น้ำ",
      },
      {
        nameTh: "วัดพระศรีสรรเพชญ์",
        nameEn: "Wat Phra Si Sanphet",
        description: "วัดในเขตพระราชวังหลวง เด่นด้วยเจดีย์ทรงลังกาสามองค์",
        image: unsplash(IMG.temple),
        imageAlt: "เจดีย์สามองค์วัดพระศรีสรรเพชญ์",
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
    image: unsplash(IMG.ruins),
    imageAlt: "พระพุทธรูปในอุทยานประวัติศาสตร์สุโขทัย",
    lat: 17.0078,
    lng: 99.8237,
    attractions: [
      {
        nameTh: "อุทยานประวัติศาสตร์สุโขทัย",
        nameEn: "Sukhothai Historical Park",
        description: "กลุ่มโบราณสถานกลางสวนสวย สะท้อนความรุ่งเรืองของอาณาจักรสุโขทัย",
        image: unsplash(IMG.ruins),
        imageAlt: "โบราณสถานในอุทยานประวัติศาสตร์สุโขทัย",
      },
      {
        nameTh: "วัดมหาธาตุ",
        nameEn: "Wat Mahathat",
        description: "วัดศูนย์กลางเมืองเก่า เด่นด้วยเจดีย์ทรงพุ่มข้าวบิณฑ์",
        image: unsplash(IMG.temple),
        imageAlt: "เจดีย์ทรงดอกบัวตูม วัดมหาธาตุสุโขทัย",
      },
      {
        nameTh: "วัดศรีชุม",
        nameEn: "Wat Si Chum",
        description: "ที่ประดิษฐานพระอจนะ พระพุทธรูปนั่งขนาดใหญ่ในมณฑป",
        image: unsplash(IMG.templeGold),
        imageAlt: "พระอจนะภายในมณฑปวัดศรีชุม",
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
    image: unsplash(IMG.mountain),
    imageAlt: "ทิวเขาและไร่ชาของจังหวัดเชียงราย",
    lat: 19.9105,
    lng: 99.8406,
    attractions: [
      {
        nameTh: "วัดร่องขุ่น",
        nameEn: "White Temple",
        description: "วัดสีขาวงานศิลป์ร่วมสมัยของอาจารย์เฉลิมชัย โฆษิตพิพัฒน์",
        image: unsplash(IMG.temple),
        imageAlt: "วัดร่องขุ่นสีขาวอันวิจิตร",
      },
      {
        nameTh: "ดอยตุง",
        nameEn: "Doi Tung",
        description: "พระตำหนักและสวนแม่ฟ้าหลวงบนดอยสูง อากาศเย็นสบายตลอดปี",
        image: unsplash(IMG.mountain),
        imageAlt: "สวนดอกไม้บนดอยตุง",
      },
      {
        nameTh: "สามเหลี่ยมทองคำ",
        nameEn: "Golden Triangle",
        description: "จุดบรรจบสามประเทศริมแม่น้ำโขง ไทย ลาว และเมียนมา",
        image: unsplash(IMG.longtail),
        imageAlt: "แม่น้ำโขงบริเวณสามเหลี่ยมทองคำ",
      },
    ],
  },
  {
    slug: "kanchanaburi",
    nameTh: "กาญจนบุรี",
    nameEn: "Kanchanaburi",
    region: "ภาคตะวันตก",
    identity: "เมืองแห่งธรรมชาติและประวัติศาสตร์ ที่ตั้งของสะพานข้ามแม่น้ำแคว น้ำตกสวย และผืนป่าอุทยานแห่งชาติกว้างใหญ่",
    image: unsplash(IMG.mountain),
    imageAlt: "ธรรมชาติและสายน้ำของกาญจนบุรี",
    lat: 14.0227,
    lng: 99.5328,
    attractions: [
      {
        nameTh: "สะพานข้ามแม่น้ำแคว",
        nameEn: "Bridge over the River Kwai",
        description: "สะพานประวัติศาสตร์สมัยสงครามโลกครั้งที่สองอันโด่งดัง",
        image: unsplash(IMG.longtail),
        imageAlt: "สะพานข้ามแม่น้ำแคว",
      },
      {
        nameTh: "น้ำตกเอราวัณ",
        nameEn: "Erawan Falls",
        description: "น้ำตกเจ็ดชั้นสีเขียวมรกตกลางอุทยานแห่งชาติเอราวัณ",
        image: unsplash(IMG.mountain),
        imageAlt: "น้ำตกเอราวัณสีเขียวมรกต",
      },
      {
        nameTh: "เมืองมัลลิกา ร.ศ. 124",
        nameEn: "Mallika City",
        description: "เมืองจำลองวิถีชีวิตชาวสยามในสมัยรัชกาลที่ ๕",
        image: unsplash(IMG.market),
        imageAlt: "บรรยากาศเมืองมัลลิกาแบบย้อนยุค",
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
    image: unsplash(IMG.beach),
    imageAlt: "ชายหาดหัวหินในจังหวัดประจวบคีรีขันธ์",
    lat: 12.5704,
    lng: 99.9579,
    attractions: [
      {
        nameTh: "หาดหัวหิน",
        nameEn: "Hua Hin Beach",
        description: "ชายหาดตากอากาศชื่อดัง สงบและเหมาะแก่การพักผ่อน",
        image: unsplash(IMG.beach),
        imageAlt: "หาดหัวหินยามเช้า",
      },
      {
        nameTh: "อุทยานแห่งชาติเขาสามร้อยยอด",
        nameEn: "Khao Sam Roi Yot",
        description: "ภูเขาหินปูน ถ้ำพระยานคร และพื้นที่ชุ่มน้ำที่งดงาม",
        image: unsplash(IMG.mountain),
        imageAlt: "ภูเขาหินปูนเขาสามร้อยยอด",
      },
      {
        nameTh: "ตลาดน้ำหัวหินสามพันนาม",
        nameEn: "Sam Phan Nam Floating Market",
        description: "ตลาดน้ำย้อนยุคพร้อมอาหารถิ่นและบรรยากาศริมน้ำ",
        image: unsplash(IMG.market),
        imageAlt: "บรรยากาศตลาดน้ำในหัวหิน",
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
    image: unsplash(IMG.beach),
    imageAlt: "ทะเลและเกาะในจังหวัดสุราษฎร์ธานี",
    lat: 9.1342,
    lng: 99.3334,
    attractions: [
      {
        nameTh: "เกาะสมุย",
        nameEn: "Koh Samui",
        description: "เกาะท่องเที่ยวระดับโลก หาดทรายขาวและรีสอร์ตหรู",
        image: unsplash(IMG.beach),
        imageAlt: "หาดทรายขาวบนเกาะสมุย",
      },
      {
        nameTh: "เขื่อนรัชชประภา",
        nameEn: "Cheow Lan Lake",
        description: "กุ้ยหลินเมืองไทย ทะเลสาบสีเขียวมรกตล้อมด้วยหน้าผาหินปูน",
        image: unsplash(IMG.mountain),
        imageAlt: "ทะเลสาบเขื่อนรัชชประภาและหน้าผาหินปูน",
      },
      {
        nameTh: "เกาะเต่า",
        nameEn: "Koh Tao",
        description: "สวรรค์ของนักดำน้ำ น้ำทะเลใสและแนวปะการังอุดมสมบูรณ์",
        image: unsplash(IMG.longtail),
        imageAlt: "อ่าวและเรือที่เกาะเต่า",
      },
    ],
  },
  {
    slug: "nakhon-ratchasima",
    nameTh: "นครราชสีมา",
    nameEn: "Nakhon Ratchasima",
    region: "ภาคตะวันออกเฉียงเหนือ",
    identity: "ประตูสู่อีสาน เมืองย่าโม ดินแดนแห่งอุทยานมรดกโลกเขาใหญ่ ปราสาทหินโบราณ และไร่องุ่นไวน์เมืองหนาว",
    image: unsplash(IMG.mountain),
    imageAlt: "ผืนป่าและภูเขาในจังหวัดนครราชสีมา",
    lat: 14.9799,
    lng: 102.0978,
    attractions: [
      {
        nameTh: "อุทยานแห่งชาติเขาใหญ่",
        nameEn: "Khao Yai National Park",
        description: "อุทยานมรดกโลก ป่าดิบ น้ำตก และสัตว์ป่านานาชนิด",
        image: unsplash(IMG.mountain),
        imageAlt: "ทิวป่าเขาใหญ่",
      },
      {
        nameTh: "ปราสาทหินพิมาย",
        nameEn: "Phimai Historical Park",
        description: "ปราสาทหินขอมขนาดใหญ่ที่สุดแห่งหนึ่งในประเทศไทย",
        image: unsplash(IMG.ruins),
        imageAlt: "ปราสาทหินพิมาย",
      },
      {
        nameTh: "อนุสาวรีย์ท้าวสุรนารี",
        nameEn: "Thao Suranari Monument",
        description: "อนุสาวรีย์ย่าโม วีรสตรีอันเป็นที่เคารพของชาวโคราช",
        image: unsplash(IMG.city),
        imageAlt: "อนุสาวรีย์ท้าวสุรนารี",
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
    image: unsplash(IMG.mountain),
    imageAlt: "ทะเลหมอกและขุนเขาของแม่ฮ่องสอน",
    lat: 19.301,
    lng: 97.9685,
    attractions: [
      {
        nameTh: "ปาย",
        nameEn: "Pai",
        description: "เมืองเล็กในหุบเขา บรรยากาศชิลล์ คาเฟ่ และทะเลหมอกยามเช้า",
        image: unsplash(IMG.mountain),
        imageAlt: "ทิวเขาและทุ่งนาที่ปาย",
      },
      {
        nameTh: "วัดพระธาตุดอยกองมู",
        nameEn: "Wat Phra That Doi Kong Mu",
        description: "วัดไทใหญ่บนยอดดอย ชมวิวเมืองแม่ฮ่องสอนทั้งเมือง",
        image: unsplash(IMG.templeGold),
        imageAlt: "เจดีย์สีขาววัดพระธาตุดอยกองมู",
      },
      {
        nameTh: "บ้านรักไทย",
        nameEn: "Ban Rak Thai",
        description: "หมู่บ้านชาวจีนยูนนานริมทะเลสาบ ไร่ชาและบ้านดินกลางหุบเขา",
        image: unsplash(IMG.market),
        imageAlt: "หมู่บ้านรักไทยริมทะเลสาบ",
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
