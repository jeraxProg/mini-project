// array of object where you can find the data product details
 const data = [
    {
        id: 1,
        brand: "AMD",
        name: "AMD RYZEN 5 3600 (AM4)",
        img: "https://www.pcworth.com/_next/image?url=https%3A%2F%2Fproduction-rdj-web-asset.s3.ap-east-1.amazonaws.com%2Fproducts%2Fcpu%2Fdetails%2F507%2Fimage%2FNRjKVybGWttHhJl61cbZyuwrnMBrXLTaYeZrrWhq.jpg&w=1920&q=75",
        price: 6295,
        baseSpeed: 3.6,
        turboSpeed: 4.2,
        socket: "AM4",
        cores: 6,
        threads: 12,
        memoryType: "DDR4",
        cat: "CPU",
    },
    {
        id: 2,
        brand: "AMD",
        name: "AMD Ryzen™ 9 7950X (AM5)",
        img: "https://bermorzone.com.ph/wp-content/uploads/2022/09/AMD-Ryzen-7-7950X-PH.webp",
        price: 43950,
        baseSpeed: 4.5,
        turboSpeed: 5.7,
        socket: "AM5",
        cores: 6,
        threads: 12,
        memoryType:"DDR5", 
        cat: "CPU",
    },
    {
        id: 3,
        brand: "AMD",
        name: "Ryzen™ 7 7700X(AM5)",
        img: "https://m.media-amazon.com/images/I/41e3FCk+M6L._AC_SL1500_.jpg",
        price: 19500,
        baseSpeed: 4.5,
        turboSpeed: 5.4,
        socket: "AM5",
        cores: 8,
        threads: 16,
        memoryType:"DDR5", 
        cat: "CPU",
    },
    {
        id: 4,
        brand: "AMD",
        name: "Ryzen™ 9 5950X(AM4)",
        img: "https://ph-test-11.slatic.net/p/5a51be8c2b53ba2f96077d93bbfc65ea.jpg",
        price: 29995,
        baseSpeed: 3.4,
        turboSpeed: 4.9,
        socket: "AM4",
        cores: 16,
        threads: 32,
        memoryType:"DDR4", 
        cat: "CPU",
    },
    {
        id: 5,
        brand: "AMD",
        name: "Ryzen™ 7 5800X(AM4)",
        img: "https://s3.pricemestatic.com/Large/Images/RetailerProductImages/StRetailer1338/rp_36412956_0081051606_l.jpg",
        price: 20588,
        baseSpeed: 3.8,
        turboSpeed: 4.7,
        socket: "AM4",
        cores: 8,
        threads: 16,
        memoryType:"DDR4", 
        cat: "CPU",
    },
    {
        id: 6,
        brand: "AMD",
        name: "Ryzen™ 5 5600X(AM4)",
        img: "https://m.media-amazon.com/images/I/61vGQNUEsGL._AC_SL1384_.jpg",
        price: 10850,
        baseSpeed: 3.7,
        turboSpeed: 4.6,
        socket: "AM4",
        cores: 6,
        threads: 12,
        memoryType:"DDR4", 
        cat: "CPU",
    },
    {
        id: 7,
        brand: "INTEL",
        name: "Intel® Core™ i9-13900K (LGA1700)",
        img: "https://gameone.ph/media/catalog/product/cache/4219e9b59d00ffcd8142a0edd5bc497f/i/n/intel-core-13th-gen-i9-13900k-lga1700-36mb-1.jpg",
        price: 38495,
        baseSpeed: 3.0,
        turboSpeed: 5.8,
        socket: "LGA1700",
        cores: 24,
        threads: 32,
        memoryType:"DDR5", 
        cat: "CPU",
    },
    {
        id: 8,
        brand: "INTEL",
        name: "Core i7-13700K (LGA1700)",
        img: "https://villman.com/product_photos/ezgif-4-0b93ec0e73_jq0k5.gif",
        price: 27999,
        baseSpeed: 3.4,
        turboSpeed: 5.4,
        socket: "LGA1700",
        cores: 16,
        threads: 24,
        memoryType:"DDR5", 
        cat: "CPU",
    },
    {
        id: 9,
        brand: "INTEL",
        name: "Core i9-12900K (LGA1700)",
        img: "https://s3.pricemestatic.com/Large/Images/RetailerProductImages/StRetailer34/rp_42060379_0_0026366004_multi_l.jpg",
        price: 35600,
        baseSpeed: 3.2,
        turboSpeed: 5.2,
        socket: "LGA1700",
        cores: 16,
        threads: 24,
        memoryType:"DDR5", 
        cat: "CPU",
    },
    {
        id: 10,
        brand: "INTEL",
        name: "Intel® Core™ i7-12700K (LGA1700)",
        img: "https://s3.pricemestatic.com/Large/Images/RetailerProductImages/StRetailer34/rp_42060381_1_0027038034_multi_l.jpg",
        price: 26240,
        baseSpeed: 3.6,
        turboSpeed: 5.0,
        socket: "LGA1700",
        cores: 12,
        threads: 20,
        memoryType:"DDR5", 
        cat: "CPU",
    },
    {
        id: 11,
        brand: "INTEL",
        name: "Intel® Core™ i5-12600K (LGA1700)",
        img: "https://s3.pricemestatic.com/Large/Images/RetailerProductImages/StRetailer34/rp_42060376_0_0027215897_multi_l.jpg",
        price: 18390,
        baseSpeed: 3.6,
        turboSpeed: 5.0,
        socket: "LGA1700",
        cores: 10,
        threads: 16,
        memoryType:"DDR5", 
        cat: "CPU",
    },




    {
        id: 12,
        name: "MSI A320M PRO-VH (AM4/MATX)",
        img: "https://www.pcworth.com/_next/image?url=https%3A%2F%2Fproduction-rdj-web-asset.s3.ap-east-1.amazonaws.com%2Fproducts%2Fmotherboard%2Fdetails%2F1048%2Fimage%2Fm2Omf8jIQ3kF1VotQox5YkgGPt2ispfomfaOTY59.jpg&w=1920&q=75",
        price: 3395,
        chipset: "A320",
        formFactor: "M-ATX",
        maxMemory: 64,
        memorySlots: "DDR4",
        socket: "AM4",
        cat: "Motherboard",
    },
    {
        id: 13,
        name: "MSI MAG Z790 TOMAHAWK WIFI(ATX)",
        img: "https://asset.msi.com/resize/image/global/product/product_1664265391459c76c55d481a806150407f1b07a6bb.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
        price: 3395,
        chipset: "Intel Z790",
        formFactor: "ATX",
        maxMemory: 128,
        memorySlots: "DDR5",
        socket: "LGA1700",
        cat: "Motherboard",
    },
    {
        id: 14,
        name: "MSI MAG B660M MORTAR WIFI DDR4",
        img: "https://asset.msi.com/resize/image/global/product/product_1641286137e783dc88493caf02ffef8a5e33699a81.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
        price: 11150,
        chipset: "Intel B660",
        formFactor: "ATX",
        maxMemory: 128,
        memorySlots: "DDR4",
        socket: "LGA1700",
        cat: "Motherboard",
    },

    {
        id: 15,
        name: "X670 AORUS ELITE AX DDR5",
        img: "https://www.gigabyte.com/FileUpload/Global/KeyFeature/2172/innergigabyteimages/box.png",
        price: 19950,
        chipset: "AMD X670",
        formFactor: "ATX",
        maxMemory: 128,
        memorySlots: "DDR4",
        socket: "AM5",
        cat: "Motherboard",
    },

    {
        id: 16,
        name: "TUF GAMING X570-PLUS (WI-FI)",
        img: "https://www.asus.com/media/global/gallery/rpnlp1x0ca5udyxm_setting_xxx_0_90_end_800.png",
        price: 12850,
        chipset: "AMD X570",
        formFactor: "ATX",
        maxMemory: 128,
        memorySlots: "DDR4",
        socket: "AM5",
        cat: "Motherboard",
    },
    


    {
        id: 17,
        name: "RAMSTA 4GB 2666MHZ DDR4",
        img: "https://www.pcworth.com/_next/image?url=https%3A%2F%2Fproduction-rdj-web-asset.s3.ap-east-1.amazonaws.com%2Fproducts%2Fram%2Fdetails%2F567%2Fimage%2Fy2CK35tJERjnv5bZOjM1guDScPWUqk9ziC3RsQYe.jpg&w=1920&q=75",
        price: 495,
        ramSize: 4,
        kit: "SINGLE",
        frequency: 2666,
        ramType: "DDR4",
        cat: "Memory"
    },
    {
        id: 18,
        name: "G.Skill Trident Z5 RGB Series 32GB 2 x 16GB DDR5",
        img: "https://gameone.ph/media/catalog/product/cache/7a2235b416a1900151232a782f707140/t/r/trident-z5-rgb-ddr5-16gb-silver-1.jpg",
        price: 7565,
        ramSize: 32,
        kit: "DUAL",
        frequency: 6400,
        ramType: "DDR5",
        cat: "Memory"
    },
    {
        id: 19,
        name: "TEAMGROUP T-Force Delta RGB DDR5 Ram 32GB Kit 2x16GB",
        img: "https://lzd-img-global.slatic.net/g/p/327393c0c538294a0926216a152b57c3.png_720x720q80.jpg_.webp",
        price: 19999,
        ramSize: 32,
        kit: "DUAL",
        frequency: 6400,
        ramType: "DDR5",
        cat: "Memory"
    },

    {
        id: 20,
        name: "G.Skill TridentZ RGB, 16GB (2 x 8GB) DDR4",
        img: "https://m.media-amazon.com/images/I/61l4EStxhnL._AC_SL1274_.jpg",
        price: 6700,
        ramSize: 16,
        kit: "DUAL",
        frequency: 3600,
        ramType: "DDR4",
        cat: "Memory"
    },
    {
        id: 21,
        name: "Kingston HyperX Predator 16GB (2x8gb) 4800MHz DDR4",
        img: "https://m.media-amazon.com/images/I/71Odx0X0tvL._AC_SL1500_.jpg",
        price: 4015,
        ramSize: 16,
        kit: "DUAL",
        frequency: 4800,
        ramType: "DDR4",
        cat: "Memory"
    },
    {
        id: 22,
        brand: "Seagate",
	    name: "Seagate BarraCuda 2TB SATA 3 6Gb/s, Internal Hard Drive with 7200 RPM & 256MB Cache",
        img: "https://m.media-amazon.com/images/I/71Czt9ypIbL._AC_SL1500_.jpg",
        price: 3150,
	    capacity: "2TB",
	    rpm: 7200,
	    interface: "SATA 6 Gb/s",
	    cacheMemory: 256,
	    formFactor: 3.5,
        cat: "HDD"

    },
    {
        id: 23,
        brand: "Seagate",
	    name: "Western Digital WD Blue 1TB SATA 3 6Gb/s, 3.5 Internal Hard Drive with 7200 RPM & 64 MB Cache",
        img: "https://m.media-amazon.com/images/I/61fiQSb2-hS._AC_SL1500_.jpg",
        price: 2195,
	    capacity: "1TB",
	    rpm: 7200,
	    interface: "SATA 6 Gb/s",
	    cacheMemory: 64,
	    formFactor: 3.5,
        cat: "HDD"

    },
    {
        id: 24,
        brand: "Seagate",
	    name: "Seagate BarraCuda 4TB SATA 6Gb/s, 3.5 Internal Hard Drive with 5400 RPM & 256MB Cache",
        img: "https://m.media-amazon.com/images/I/71ijXHv0jHL._AC_SL1500_.jpg",
        price: 6988,
	    capacity: "4TB",
	    rpm: 7200,
	    interface: "SATA 6 Gb/s",
	    cacheMemory: 256,
	    formFactor: 3.5,
        cat: "HDD"

    },
    {
        id: 25,
        brand: "Western Digital",
	    name: "Western Digital WD Black 2TB High Performance 3.5 Internal Hard Drive with 7200 RPM & 64 MB Cache",
        img: "https://m.media-amazon.com/images/I/714xDSJWrkL._AC_SL1500_.jpg",
        price: 7200,
	    capacity: "2TB",
	    rpm: 7200,
	    interface: "SATA 6 Gb/s",
	    cacheMemory: 64,
	    formFactor: 3.5,
        cat: "HDD"

    },
    {
        id: 26,
        brand: "Samsung",
	    name: "Samsung EVO 970 1TB PCIe Gen3 x4 NVMe M.2-2280 Internal SSD with V-NAND Technology & 1024MB Cache",
        img: "https://m.media-amazon.com/images/I/71OYNmVRFhL._AC_SL1500_.jpg",
        price: 5469,
	    capacity: "1TB",
	    rpm: 7200,
	    interface: "PCIe 3.0 x4",
	    cacheMemory: 64,
	    formFactor: "M.2",
        cat: "SSD"

    },

    {
        id: 27,
        brand: "Samsung",
	    name: "SAMSUNG EVO 970 Plus 2TB PCIe NVMe M.2-2280 Internal SSD with V-NAND Technology & 1024MB Cache",
        img: "https://m.media-amazon.com/images/I/41y+3XYLFFL._AC_.jpg",
        price: 10300,
	    capacity: "2TB",
	    rpm: 7200,
	    interface: "PCIe 3.0 x4",
	    cacheMemory: 1024,
	    formFactor: "M.2",
        cat: "SSD"

    },

    {
        id: 28,
        brand: "Crucial",
	    name: "Crucial P1 1TB PCIe Gen3 x4 NVMe M.2-2280 3D NAND Internal SSD",
        img: "https://m.media-amazon.com/images/I/61uqrREgItL._AC_SL1280_.jpg",
        price: 4338,
	    capacity: "1TB",
	    rpm: 7200,
	    interface: "PCIe 3.0 x4",
	    cacheMemory: 2000 ,
	    formFactor: "M.2",
        cat: "SSD"

    },
    {
        id: 29,
        brand: "Western Digital",
	    name: "Western Digital WD Blue 1TB SATA 3 6Gb/s, M.2-2280 3D NAND Internal SSD",
        img: "https://m.media-amazon.com/images/I/71F6WPWe41L._AC_SL1500_.jpg",
        price: 5352,
	    capacity: "1TB",
	    rpm: 7200,
	    interface: "SATA III 6 Gb/s",
	    cacheMemory: 2000 ,
	    formFactor: "M.2",
        cat: "SSD"
    },
    {
        id: 30,
        brand: "MSI",
	    name: "MSI Gaming GeForce RTX 4090 24GB GDRR6X ",
        img: "https://m.media-amazon.com/images/I/71iaHwob9DL._AC_SL1500_.jpg",
        price: 152626,
        memory: 24,
        memoryInterface:"GDDR6X",
        length: 337,
        interface: "PCIe 4.0 x16",
        chipsetGpu: "GeForce RTX 4090",
        baseClock: 2235,
        clockSpeed: 2535,
        frameSync: "G-Sync",
        cat: "GPU"
    },
    {
        id: 31,
        brand: "ASUS",
	    name: "ASUS ROG Strix NVIDIA GeForce RTX 3070 Ti OC Edition Gaming Graphics Card GDDR6X",
        img: "https://m.media-amazon.com/images/I/91V+jq4ixES._AC_SL1500_.jpg",
        price: 46142,
        memory: 8,
        memoryInterface:"GDDR6X",
        length: 318.5,
        interface: "PCIe 4.0 x16",
        chipsetGpu: "GeForce RTX 3070 Ti",
        baseClock: 1575,
        clockSpeed: 1845,
        frameSync: "G-Sync",
        cat: "GPU"
    },
    {
        id: 32,
        brand: "MSI",
	    name: "GeForce RTX 3060 Ti VENTUS 2X OCV1 LHR",
        img: "https://m.media-amazon.com/images/I/81uam+7+BMS._AC_SL1500_.jpg",
        price: 29578,
        memory: 8,
        memoryInterface:"GDDR6",
        length: 235,
        interface: "PCIe 4.0 x16",
        chipsetGpu: "GeForce RTX 3060 Ti",
        baseClock: 1410,
        clockSpeed: 1695,
        frameSync: "G-Sync",
        cat: "GPU"
    },
    {
        id: 33,
        brand: "EVGA",
	    name: "EVGA GeForce RTX 2060 Super SC Ultra Gaming, 8GB GDDR6, Dual HDB Fans",
        img: "https://m.media-amazon.com/images/I/81uam+7+BMS._AC_SL1500_.jpg",
        price: 29578,
        memory: 8,
        memoryInterface:"GDDR6",
        length: 269.83,
        interface: "PCIe 3.0 x16",
        chipsetGpu: "GeForce RTX 2060 SUPER",
        baseClock: 1470,
        clockSpeed: 1680,
        frameSync: "G-Sync",
        cat: "GPU"
    },
    {
        id: 34,
        brand: "ZOTAC",
	    name: "ZOTAC Gaming GeForce GTX 1660 Super 6GB GDDR6 ",
        img: "https://m.media-amazon.com/images/I/71AAVqtFfvL._AC_SL1355_.jpg",
        price: 13409,
        memory: 6,
        memoryInterface:"GDDR6",
        length: 73.4,
        interface: "PCIe 3.0 x16",
        chipsetGpu: "GeForce GTX 1660 SUPER",
        baseClock: 1530,
        clockSpeed: 1785,
        frameSync: "G-Sync",
        cat: "GPU"
    },

    {
        id: 35,
        brand: "Corsair",
	    name: "Corsair RMX Series (RM650X), 80+ Gold Certified 650W Fully Modular Power Supply ",
        price: 5521,
        img: "https://m.media-amazon.com/images/I/81Xue+By69L._AC_SL1500_.jpg",
        Power: 650,
        Efficiency: "80+ Gold",
        color: "Black",
        cat: "PSU"
    },
    {
        id: 36,
        brand: "Corsair",
	    name: "Seasonic Focus GX-750, 80+ Gold Certified 750W Full-Modular Power Supply",
        price: 7267,
        img: "https://m.media-amazon.com/images/I/71sXUdG4rlS._AC_SL1500_.jpg",
        Power: 750,
        Efficiency: "80+ Gold",
        color: "Black",
        cat: "PSU"
    },
    {
        id: 37,
        brand: "SilverStone Technology",
	    name: "SilverStone Technology 850W Computer Power Supply PSU Fully Modular",
        price: 8000,
        img: "https://m.media-amazon.com/images/I/71vwFWXkRxL._AC_SL1500_.jpg",
        Power: 850,
        Efficiency: "80+ Gold",
        color: "Black",
        cat: "PSU"
    },
    {
        id: 38,
        brand: "EVGA",
	    name: "EVGA SuperNOVA 1000 G6, 80 Plus Gold 1000W, Fully Modular",
        price: 9465,
        img: "https://m.media-amazon.com/images/I/71PeYnXO+dS._AC_SL1500_.jpg",
        Power: 1000,
        Efficiency: "80+ Gold",
        color: "Black",
        cat: "PSU"
    },
    {
        id: 39,
        brand: "ASUS",
	    name: "ASUS Rog Thor 1200, 80+ Platinum Certified 1200W Fully-Modular RGB Power Supply",
        price: 19795,
        img: "https://m.media-amazon.com/images/I/81u+iAQ4mWL._AC_SL1500_.jpg",
        Power: 1200,
        Efficiency: "80+ Platinum",
        color: "Black",
        cat: "PSU"
    },
    {
        id: 40,
        brand: "NZXT",
	    name: "NZXT H510 - CA-H510B-W1 - Compact ATX Mid-Tower PC Gaming Case",
        price: 3943,
        img: "https://m.media-amazon.com/images/I/510cWHKXlrL._AC_SL1000_.jpg",
        sidePanel: "Tempered Glass, Steel",
        cabinetType: "ATX Mid Tower",
        color: "White",
        cat: "Casing"
    },
    {
        id: 41,
        brand: "ASUS",
	    name: "Asus ROG Strix Helios Mid-Tower Computer Case",
        price: 14085,
        img: "https://m.media-amazon.com/images/I/81u+iAQ4mWL._AC_SL1500_.jpg",
        sidePanel: "Tempered Glass",
        cabinetType: "ATX Full Tower",
        color: "Black",
        cat: "Casing"
    },

    {
        id: 42,
        brand: "Corsair",
	    name: "Corsair 4000D Airflow Tempered Glass Mid-Tower ATX PC Case",
        price: 5859,
        img: "https://m.media-amazon.com/images/I/81DLXBMhpoL._AC_SL1500_.jpg",
        sidePanel: "Tempered Glass",
        cabinetType: "ATX Mid Tower",
        color: "Black",
        cat: "Casing"
    },
    {
        id: 43,
        brand: "Cooler Master",
	    name: "Cooler Master MasterBox MB320L ARGB",
        price: 4225,
        img: "https://m.media-amazon.com/images/I/61BFX1QctKL._AC_SL1200_.jpg",
        sidePanel: "Tempered Glass",
        cabinetType: "MicroATX Mid Tower",
        color: "Black",
        cat: "Casing"
    },
    {
        id: 44,
        brand: "Cooler Master",
	    name: "Cooler Master Hyper 212 EVO V2 CPU Air Cooler with SickleFlow 120",
        price: 3098,
        img: "https://m.media-amazon.com/images/I/818WvPlXOLL._AC_SL1500_.jpg",
        fanRPM: "650 to 1800 RPM",
        noiseLevel: "8 to 27 dBA",
        color: "Black",
        cat: "CPU Cooler"
    },
    {
        id: 45,
        brand: "NZXT",
	    name: "NZXT Kraken X53 240mm, AIO RGB CPU Liquid Cooler",
        price: 7549,
        img: "https://m.media-amazon.com/images/I/71KweETBdGL._SL1500_.jpg",
        fanRPM: "500 to 2000 RPM",
        noiseLevel: "21 to 36 dBA",
        color: "RGB",
        cat: "CPU Cooler"
    },
    {
        id: 46,
        brand: "Noctua",
	    name: "Noctua NH-D15 chromax.Black, Dual-Tower CPU Cooler",
        price: 6141,
        img: "https://m.media-amazon.com/images/I/91t48GBv8TL._AC_SL1500_.jpg",
        fanRPM: "300 to 1500 RPM",
        noiseLevel: "19.2 to 24.6 dB",
        color: "Black",
        cat: "CPU Cooler"
    },
    {
        id: 47,
        brand: "be quiet!",
	    name: "be quiet! Dark Rock Pro 4, BK022, 250W TDP, CPU Cooler",
        price: 5070,
        img: "https://m.media-amazon.com/images/I/61CGQH59UGL._AC_SL1000_.jpg",
        fanRPM: "1500 RPM",
        noiseLevel: "24 dBA",
        color: "Black",
        cat: "CPU Cooler"
    },
    {
        id: 48,
        brand: "Cooler Master",
	    name: "CoolerMaster MasterLiquid PL240 FLUX Close-Loop AIO CPU Liquid Cooler",
        price: 7267,
        img: "https://m.media-amazon.com/images/I/71M05ekX6CL._AC_SL1500_.jpg",
        fanRPM: "2300 RPM",
        noiseLevel: "32 dBA",
        color: "Black RGB",
        cat: "CPU Cooler"
    },

    {
        id: 49,
        brand: "ARCTIC",
	    name: "ARCTIC P12 PWM PST - 120 mm Case Fan with PWM Sharing Technology (PST)",
        price: 563,
        img: "https://m.media-amazon.com/images/I/61Ir6tCra7L._SL1000_.jpg",
        fanRPM: "1800 RPM",
        airFlow: "56.3 CFM",
        noiseLevel: "56.3 dBA",
        cat: "Fan"
    },
    {
        id: 50,
        brand: "DEEP COOL",
	    name: "DEEP COOL RF120M 5IN1, 5x120mm RGB PWM Fans with 2 Fan Hubs",
        price: 4225,
        img: "https://m.media-amazon.com/images/I/81YW4S7W5FL._SL1500_.jpg",
        fanRPM: "500 to 1500 RPM",
        airFlow: "56.5 CFM",
        noiseLevel: "27 dBA",
        cat: "Fan"
    },
    {
        id: 51,
        brand: "Lian Li",
	    name: "Lian Li UNI Fan AL120 3 Pack Black-AL120-3B,UF-AL120-3B",
        price: 8169,
        img: "https://m.media-amazon.com/images/I/31XnVjsq2SL.jpg",
        fanRPM: "800 - 1900 RPM",
        airFlow: "64.5 CFM",
        noiseLevel: "17 - 28.3 dB",
        cat: "Fan"
    },
    {
        id: 52,
        brand: "NZXT",
	    name: "NZXT AER RGB 2 - HF-2812C-T1 - 3-Pack of 120mm RGB PWM Fans",
        price: 1802,
        img: "https://m.media-amazon.com/images/I/7106LKt1ioL._AC_SL1500_.jpg",
        fanRPM: "1150 RPM",
        airFlow: "62 CFM",
        noiseLevel: "26 dBA",
        cat: "Fan"
    },
    {
        id: 53,
        brand: "Cooler Master",
	    name: "Cooler Master SickleFlow 120 V2 Red Led 120mm Square Frame Fan",
        price: 507,
        img: "https://m.media-amazon.com/images/I/616Lx7sbCiL._AC_SL1200_.jpg",
        fanRPM: "1800 RPM",
        airFlow: "62 CFM",
        noiseLevel: "27 dBA",
        cat: "Fan"
    },

];


const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
// const priceRange = document.querySelector(".priceRange");
// const priceValue = document.querySelector(".priceValue");
// const selectCats = document.querySelector("#mySelect");



 const displayProducts = (filteredProducts) => {
    productsContainer.innerHTML = filteredProducts.map(
        (product) => 
        `
        <div class="product">
        <img src=${product.img} alt="">

        <span class="name" id="${product.cat}">${product.name}</span>
       
        <div class="product_price"> 
        <span class="priceText">₱ ${product.price}.00</span>
        <button type="button" onclick="location.href='${product.img}'">View Item</button>
        </div>
        </div>
         `
        
        ).join("");
};

    displayProducts(data);

    searchInput.addEventListener("keyup",(e) => {
        const value = e.target.value.toLowerCase();

        if(value) {
            displayProducts(data.filter(item=> item.name.toLowerCase().indexOf(value) !== -1 ))

        } else {
            displayProducts(data)
        }
    });

    const setCategories = () => {
        const allCats = data.map((item)=>item.cat);
        const categories = [
            "All",
            ...allCats.filter((item, i) => {
            return allCats.indexOf(item) === i;
        }),
        
        ];
        categoriesContainer.innerHTML = categories.map(cat=> 
            `<span class="cat" >${cat}</span>
            `
            ).join("")

            categoriesContainer.addEventListener("click", (e) => {
                const selectedCat = e.target.textContent;

                selectedCat === "All" 
                ? displayProducts(data) 
                : displayProducts(data.filter((item) => item.cat === selectedCat));
            });
           
    }
    setCategories();