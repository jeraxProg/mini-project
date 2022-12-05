// array of object where you can find the data product details
const data = [

    // CPU PRODUCTS
    {
        id: 1,
        brand: "AMD",
        name: "Ryzen™ 9 7950X",
        img: "../images/ryzen.png",
        price: 48350,
        baseSpeed: 4.5,
        turboSpeed: 5.7,
        socket: "AM5",
        cores: 16,
        threads: 32,
        memoryType:"DDR5", 
        cat: "CPU",
    },

    {
        id: 2,
        brand: "AMD",
        name: "Ryzen™ 7 7700X",
        img: "../images/ryzen1.png",
        price: 26350,
        baseSpeed: 4.5,
        turboSpeed: 5.4,
        socket: "AM5",
        cores: 8,
        threads: 16,
        memoryType:"DDR5", 
        cat: "CPU",
    },

    {
        id: 3,
        brand: "AMD",
        name: "Ryzen™ 9 5950X",
        img: "../images/ryzen2.png",
        price: 34500,
        baseSpeed: 3.4,
        turboSpeed: 4.9,
        socket: "AM4",
        cores: 16,
        threads: 32,
        memoryType:"DDR4", 
        cat: "CPU",
    },

    {
        id: 4,
        brand: "AMD",
        name: "Ryzen™ 7 5800X",
        img: "../images/ryzen3.png",
        price: 17250,
        baseSpeed: 3.8,
        turboSpeed: 4.7,
        socket: "AM4",
        cores: 8,
        threads: 16,
        memoryType:"DDR4", 
        cat: "CPU",
    },

    {
        id: 5,
        brand: "AMD",
        name: "Ryzen™ 5 5600X",
        img: "../images/ryzen4.png",
        price: 10895,
        baseSpeed: 3.7,
        turboSpeed: 4.6,
        socket: "AM4",
        cores: 6,
        threads: 12,
        memoryType: "DDR4",
        cat: "CPU",
    },

    {
        id: 6,
        brand: "Intel",
        name: "Core™ i9-13900K",
        img: "../images/intel.png",
        price: 37960,
        baseSpeed: 3.0,
        turboSpeed: 5.8,
        socket: "LGA 1700",
        cores: 24,
        threads: 32,
        memoryType:"DDR5", 
        cat: "CPU",
    },

    {
        id: 7,
        brand: "Intel",
        name: "Core™ i7-13700K",
        img: "../images/intel1.png",
        price: 26980,
        baseSpeed: 3.4,
        turboSpeed: 5.4,
        socket: "LGA 1700",
        cores: 16,
        threads: 24,
        memoryType:"DDR5", 
        cat: "CPU",
    },

    {
        id: 8,
        brand: "Intel",
        name: "Core™ i9-12900K",
        img: "../images/intel2.png",
        price: 35600,
        baseSpeed: 3.2,
        turboSpeed: 5.2,
        socket: "LGA 1700",
        cores: 16,
        threads: 24,
        memoryType:"DDR5", 
        cat: "CPU",
    },

    {
        id: 9,
        brand: "Intel",
        name: "Core™ i7-12700K",
        img: "../images/intel3.png",
        price: 26240,
        baseSpeed: 3.6,
        turboSpeed: 5.0,
        socket: "LGA 1700",
        cores: 12,
        threads: 20,
        memoryType:"DDR5", 
        cat: "CPU",
    },

    {
        id: 10,
        brand: "Intel",
        name: "Core™ i5-12600K",
        img: "../images/intel4.png",
        price: 18390,
        baseSpeed: 3.7,
        turboSpeed: 4.9,
        socket: "LGA 1700",
        cores: 10,
        threads: 16,
        memoryType:"DDR5", 
        cat: "CPU",
    },

    // MOTHERBOARD PRODUCTS
    {
        id: 12,
        name: "MAG Z790 TOMAHAWK WIFI",
        brand: "MSI",
        img: "../images/motherboard.png",
        price: 19895,
        chipset: "Intel Z790",
        formFactor: "ATX",
        maxMemory: 128,
        memorySlots: "DDR5",
        socket: "LGA 1700",
        cat: "Motherboard",
    },

    {
        id: 13,
        name: "MAG B660M MORTAR WIFI DDR4",
        brand: "MSI",
        img: "../images/motherboard1.png",
        price: 9595,
        chipset: "Intel B660",
        formFactor: "ATX",
        maxMemory: 128,
        memorySlots: "DDR4",
        socket: "LGA 1700",
        cat: "Motherboard",
    },

    {
        id: 14,
        name: "X670 AORUS ELITE AX",
        brand: "Gigabyte",
        img: "../images/motherboard2.png",
        price: 19950,
        chipset: "AMD X670",
        formFactor: "ATX",
        maxMemory: 128,
        memorySlots: "DDR4",
        socket: "AM5",
        cat: "Motherboard",
    },

    {
        id: 15,
        name: "TUF GAMING X570-PLUS",
        brand: "ASUS",
        img: "../images/motherboard3.png",
        price: 11950,
        chipset: "AMD X570",
        formFactor: "ATX",
        maxMemory: 128,
        memorySlots: "DDR4",
        socket: "AM4",
        cat: "Motherboard",
    },

    // RAM PRODUCTS
    {
        id: 16,
        name: "G.Skill Trident Z5 RGB Series",
        brand: "G.Skill",
        img: "../images/ram.png",
        price: 12995,
        ramSize: 32,
        kit: "DUAL",
        ramSpeed: 6400,
        ramType: "DDR5",
        cat: "Memory"
    },

    {
        id: 17,
        name: "TEAMGROUP T-Force Delta RGB",
        brand: "TEAMGROUP",
        img: "../images/ram1.png",
        price: 20891,
        ramSize: 32,
        kit: "DUAL",
        ramSpeed: 6000,
        ramType: "DDR5",
        cat: "Memory"
    },

    {
        id: 18,
        name: "G.Skill TridentZ RGB",
        brand: "G.Skill",
        img: "../images/ram2.png",
        price: 5275,
        ramSize: 16,
        kit: "DUAL",
        ramSpeed: 4600,
        ramType: "DDR4",
        cat: "Memory"
    },

    {
        id: 19,
        name: "Corsair Vengeance LPX",
        brand: "Corsair",
        img: "../images/ram3.png",
        price: 4472,
        ramSize: 16,
        kit: "DUAL",
        ramSpeed: 3600,
        ramType: "DDR4",
        cat: "Memory"
    },

    // HDD PRODUCTS
    {
        id: 20,
	    name: "Seagate BarraCuda 2TB",
        brand: "Seagate",
        img: "../images/hdd.png",
        price: 3150,
	    capacity: "2TB",
	    rpm: 7200,
	    interface: "SATA 6 Gb/s",
	    cacheMemory: 256,
	    formFactor: 3.5,
        cat: "HDD"
    },

    {
        id: 21,
	    name: "Western Digital WD Blue 1TB",
        brand: "Western Digital",
        img: "../images/hdd1.png",
        price: 2650,
	    capacity: "1TB",
	    rpm: 7200,
	    interface: "SATA 6 Gb/s",
	    cacheMemory: 64,
	    formFactor: 3.5,
        cat: "HDD"
    },

    {
        id: 22,
	    name: "Seagate BarraCuda 4TB",
        brand: "Seagate",
        img: "../images/hdd2.png",
        price: 5350,
	    capacity: "4TB",
	    rpm: 5400,
	    interface: "SATA 6 Gb/s",
	    cacheMemory: 256,
	    formFactor: 3.5,
        cat: "HDD"
    },

    {
        id: 23,
	    name: "Western Digital WD Black 2TB",
        brand: "Western Digital",
        img: "../images/hdd3.png",
        price: 7220,
	    capacity: "2TB",
	    rpm: 7200,
	    interface: "SATA 6 Gb/s",
	    cacheMemory: 64,
	    formFactor: 3.5,
        cat: "HDD"
    },

    // SSD
    {
        id: 24,
	    name: "Samsung EVO 970 1TB",
        brand: "Samsung",
        img: "../images/ssd.png",
        price: 6870,
	    capacity: "1TB",
	    interface: "PCIe 3.0 x4",
	    cacheMemory: 1024,
	    formFactor: "M.2",
        cat: "SSD"
    },

    {
        id: 25,
	    name: "SAMSUNG EVO 970 Plus 2TB",
        brand: "Samsung",
        img: "../images/ssd1.png",
        price: 8790,
	    capacity: "2TB",
	    interface: "PCIe x4",
	    cacheMemory: 1024,
	    formFactor: "M.2",
        cat: "SSD"
    },

    {
        id: 26,
	    name: "Crucial P1 1TB",
        brand: "Crucial",
        img: "../images/ssd2.png",
        price: 3470,
	    capacity: "1TB",
	    interface: "PCIe 3.0 x4",
	    formFactor: "M.2",
        cat: "SSD"

    },

    {
        id: 27,
	    name: "Western Digital WD Blue 1TB",
        brand: "Western Digital",
        img: "../images/ssd3.png",
        price: 6399,
	    capacity: "1TB",
	    interface: "PCIe 3.0 x4",
	    formFactor: "M.2",
        cat: "SSD"
    },

    // GPU PRODUCTS
    {
        id: 28,
	    name: "MSI Gaming GeForce RTX 4090 24GB",
        brand: "MSI",
        img: "../images/gpu.png",
        price: 111500,
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
        id: 29,
	    name: "ASUS ROG Strix GeForce RTX 3070 Ti",
        brand: "ASUS",
        img: "../images/gpu1.png",
        price: 55090,
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
        id: 30,
	    name: "MSI GeForce RTX 3060 Ti",
        brand: "MSI",
        img: "../images/gpu2.png",
        price: 32800,
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
        id: 31,
	    name: "EVGA GeForce RTX 2060 Super",
        brand: "EVGA",
        img: "../images/gpu3.png",
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
        id: 32,
	    name: "ZOTAC GeForce GTX 1660 Super",
        brand: "ZOTAC",
        img: "../images/gpu4.png",
        price: 14780,
        memory: 6,
        memoryInterface:"GDDR6",
        length: 173.4,
        interface: "PCIe 3.0 x16",
        chipsetGpu: "GeForce GTX 1660 SUPER",
        baseClock: 1530,
        clockSpeed: 1785,
        frameSync: "G-Sync",
        cat: "GPU"
    },

    // PSU PRODUCTS
    {
        id: 33,
	    name: "Corsair RM650X 80+ Gold PSU",
        brand: "Corsair",
        price: 6495,
        img: "../images/psu.png",
        Power: 650,
        Efficiency: "80+ Gold",
        color: "Black",
        cat: "PSU"
    },

    {
        id: 34,
	    name: "Seasonic Focus GX-750 80+ Gold PSU",
        brand: "Seasonic",
        price: 6750,
        img: "../images/psu1.png",
        Power: 750,
        Efficiency: "80+ Gold",
        color: "Black",
        cat: "PSU"
    },

    {
        id: 35,
	    name: "EVGA SuperNOVA 850 80+ Gold PSU",
        brand: "EVGA",
        price: 10150,
        img: "../images/psu2.png",
        Power: 850,
        Efficiency: "80+ Gold",
        color: "Black",
        cat: "PSU"
    },

    {
        id: 36,
	    name: "EVGA SuperNOVA 1000 G6 80+ Gold PSU",
        brand: "EVGA",
        price: 14689,
        img: "../images/psu3.png",
        Power: 1000,
        Efficiency: "80+ Gold",
        color: "Black",
        cat: "PSU"
    },

    {
        id: 37,
	    name: "ASUS Rog Thor 1200 80+ Platinum PSU",
        brand: "ASUS",
        price: 21499,
        img: "../images/psu4.png",
        Power: 1200,
        Efficiency: "80+ Platinum",
        color: "Black",
        cat: "PSU"
    },

    // CASING PRODUCT
    {
        id: 38,
	    name: "NZXT H510 - CA-H510B-W1",
        brand: "NZXT",
        price: 3800,
        img: "../images/casing.png",
        sidePanel: "Tempered Glass, Steel",
        cabinetType: "ATX Mid Tower",
        color: "White",
        cat: "Casing"
    },

    {
        id: 39,
	    name: "Asus ROG Strix Helios",
        brand: "ASUS",
        price: 6430,
        img: "../images/casing1.png",
        sidePanel: "Tempered Glass",
        cabinetType: "ATX Full Tower",
        color: "Black",
        cat: "Casing"
    },

    {
        id: 40,
	    name: "Corsair 4000D Airflow",
        brand: "Corsair",
        price: 5430,
        img: "../images/casing2.png",
        sidePanel: "Tempered Glass",
        cabinetType: "ATX Mid Tower",
        color: "Black",
        cat: "Casing"
    },

    {
        id: 41,
	    name: "Cooler Master MasterBox",
        brand: "Cooler Master",
        price: 2970,
        img: "../images/casing3.png",
        sidePanel: "Tempered Glass",
        cabinetType: "MicroATX Mid Tower",
        color: "Black",
        cat: "Casing"
    },

    // CPU COOLER PRODUCTS
    {
        id: 42,
	    name: "Noctua NH-D15 chromax.Black",
        brand: "Noctua",
        price: 6895,
        img: "../images/cpu-cooler.png",
        fanRPM: "300 to 1500 RPM",
        noiseLevel: "19.2 to 24.6 dB",
        color: "Black",
        cat: "CPU Cooler"
    },

    {
        id: 43,
	    name: "be quiet! Dark Rock Pro 4",
        brand: "be quiet!",
        price: 4450,
        img: "../images/cpu-cooler1.png",
        fanRPM: "1500 RPM",
        noiseLevel: "24 dBA",
        color: "Black",
        cat: "CPU Cooler"
    },

    {
        id: 44,
	    name: "CoolerMaster MasterLiquid PL240",
        brand: "Cooler Master",
        price: 8450,
        img: "../images/cpu-cooler2.png",
        fanRPM: "2300 RPM",
        noiseLevel: "32 dBA",
        color: "Black RGB",
        cat: "CPU Cooler"
    },

    {
        id: 45,
	    name: "Cooler Master Hyper 212 EVO V2",
        brand: "Cooler Master",
        price: 1919,
        img: "../images/cpu-cooler3.png",
        fanRPM: "650 to 1800 RPM",
        noiseLevel: "8 to 27 dBA",
        color: "Black",
        cat: "CPU Cooler"
    },

    {
        id: 46,
	    name: "NZXT Kraken X53",
        brand: "NZXT",
        price: 7980,
        img: "../images/cpu-cooler4.png",
        fanRPM: "500 to 2000 RPM",
        noiseLevel: "21 to 36 dBA",
        color: "RGB",
        cat: "CPU Cooler"
    },

    //FAN PRODUCTS
    {
        id: 47,
	    name: "ARCTIC P12 PWM PST",
        brand: "ARCTIC",
        price: 850,
        img: "../images/fan.png",
        fanRPM: "1800 RPM",
        airFlow: "56.3 CFM",
        noiseLevel: "56.3 dBA",
        cat: "Fan"
    },

    {
        id: 48,
	    name: "DEEPCOOL RF120M 5IN1",
        brand: "DEEPCOOL",
        price: 2835,
        img: "../images/fan1.png",
        fanRPM: "500 to 1500 RPM",
        airFlow: "56.5 CFM",
        noiseLevel: "27 dBA",
        cat: "Fan"
    },
    {
        id: 49,
	    name: "Lian Li UNI Fan AL120",
        brand: "Lian Li",
        price: 4720,
        img: "../images/fan2.png",
        fanRPM: "800 - 1900 RPM",
        airFlow: "64.5 CFM",
        noiseLevel: "17 - 28.3 dB",
        cat: "Fan"
    },
    {
        id: 50,
	    name: "NZXT AER RGB 2",
        brand: "NZXT",
        price: 1690,
        img: "../images/fan3.png",
        fanRPM: "1150 RPM",
        airFlow: "62 CFM",
        noiseLevel: "26 dBA",
        cat: "Fan"
    },
    {
        id: 51,
	    name: "Cooler Master SickleFlow 120 V2",
        brand: "Cooler Master",
        price: 507,
        img: "../images/fan4.png",
        fanRPM: "1800 RPM",
        airFlow: "62 CFM",
        noiseLevel: "27 dBA",
        cat: "Fan"
    },

];


const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const showContainer = document.querySelector(".list");






 const displayProducts = (filteredProducts) => {
    productsContainer.innerHTML = filteredProducts.map(
        (product) => 
        `
        <div class="product"  data-name="${product.id}">
        <img src=${product.img} alt="">

        <span class="name" id="${product.cat}">${product.name}</span>
       
        <div class="product_price"> 
        <span class="priceText">₱ ${product.price}.00</span>
        <button class="modal-button" type="button">View Item</button>
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





  

   
    



   

