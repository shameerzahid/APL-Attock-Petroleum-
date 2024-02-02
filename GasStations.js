// api.js

async function fetchGasStationData() {
    try {
        const response = await fetch('http://115.186.178.11:8080/RaadAPI/Locator/GetWebRetailSites/json?UserID=SUPER&VersionCode=1&priceFetch=true');
        const newData = await response.json();
        console.log(newData.List)
        // Update or add new data to the GasStations array
        newData.List.forEach(newStation => {
            const existingStationIndex = GasStations.findIndex(existingStation => existingStation.CusCode === newStation.CusCode);

            if (existingStationIndex !== -1) {
                // If the station exists, update its data
                GasStations[existingStationIndex] = newStation;
            } else {
                // If the station doesn't exist, add it to the GasStations array
                GasStations.push(newStation);
            }
        });

        return newData;
    } catch (error) {
        console.error('Error fetching data from the API:', error);
        throw error;
    }
}

fetchGasStationData()

GasStations=  [
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Lahore Sargodha Road Farooqabad (Sheikhupura)",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Farooqabad",
        "longi": "73.85560021",
        "Lati": "31.74321834",
        "CusDesc": "Bilal Petroleum Services Farooqabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200330001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Sheikhupura",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Chakwal Road, TALAGANG",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Talagang",
        "longi": "72.43522167",
        "Lati": "32.92592024",
        "CusDesc": "Al-Hussain Filling Station Talagang",
        "HSDPrice": "280.6284",
        "Services": [
            {
                "ServiceCode": "001",
                "ServiceDes": "Tyre Shop"
            },
            {
                "ServiceCode": "002",
                "ServiceDes": "Lube Change"
            }
        ],
        "CusCode": "2010200390001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Chakwal",
        "PMGPrice": "274.5584",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Head baloki road more khunda, District Nankana.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Head Balloki",
        "longi": "73.817829",
        "Lati": "31.287387",
        "CusDesc": "Sindho Filling Station More Khunda",
        "HSDPrice": "279.9378",
        "Services": [],
        "CusCode": "2010200480001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Nankana Sahib",
        "PMGPrice": "273.8678",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Gohain Nala Road, Mutyal Maira Teh. Rawalakot Distt. Poonch",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalakot",
        "longi": "73.74988765",
        "Lati": "33.84473616",
        "CusDesc": "Tahir Filling Station Rawalakot AJK",
        "HSDPrice": "278.96",
        "Services": [],
        "CusCode": "2010200490001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-East",
        "Region": "Rawalpindi-2",
        "District": "Rawalakot",
        "PMGPrice": "272.89",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Sialkot Airport Road, Ghansar Pur, Sialkot",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sialkot",
        "longi": "74.479472",
        "Lati": "32.52686",
        "CusDesc": "Sair Petroleum Services Sialkot",
        "HSDPrice": "279.9577",
        "Services": [],
        "CusCode": "2010202410001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Sialkot",
        "PMGPrice": "273.8877",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Sargodha-Mianwali-Bannu Road Tehsil and District Mianwali",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sargodha",
        "longi": "72.30597943",
        "Lati": "32.29096574",
        "CusDesc": "Ahmad Petroleum Services Mianwali",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202740001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Sargodha",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Dali Bath, Dunga Road Distt. Gujrat",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Dalibanth",
        "longi": "73.9528732",
        "Lati": "32.60753481",
        "CusDesc": "Sial Petroleum Services Gujrat",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200830001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Gujrat",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "18 Km Multan Road",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "74.19582903",
        "Lati": "31.44127645",
        "CusDesc": "Khyber Petroleum Service Multan Road LHR",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200290001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Lahore",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Village Haji Lawang, Munda Road, Bajor Agency",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bajaur Agency",
        "longi": "71.56592175",
        "Lati": "34.76307792",
        "CusDesc": "Zia Filling Station Bajor Agency",
        "HSDPrice": "281.1509",
        "Services": [],
        "CusCode": "2010201470001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Bajaur Agency",
        "PMGPrice": "275.0809",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Gujrat Road Dinga",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Dinga",
        "longi": "73.77299488",
        "Lati": "32.62753543",
        "CusDesc": "Imtiaz Filling Station Dinga",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201490001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Gujrat",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "4.7 Km from Musa Khel on Mianwali Talagang Road, Musa Khel",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Musakheil",
        "longi": "71.69794813",
        "Lati": "32.61647498",
        "CusDesc": "Rawalpindi Filling Station Musa Khel",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201500001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Mianwali",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Gujrat Samman Phalia Road, Khojian Wali Gujrat",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gujrat",
        "longi": "73.93066451",
        "Lati": "32.44999815",
        "CusDesc": "Tariq Petroleum Services Khojian Wali Gujrat",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200500001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Gujrat",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Sheikhupura-Faisalabad-Lahore Road, Bhukhi Distt: Faisalabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sheikhupura",
        "longi": "73.90873611",
        "Lati": "31.62178454",
        "CusDesc": "Haider Filling Station Bhukhi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202620001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Sheikhupura",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Multan Road, Near Thokar Niaz Baig, Lahore",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "74.23254043",
        "Lati": "31.46805027",
        "CusDesc": "Highway CNG & Filling Station Thoker Niaz Baig LHR",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201010001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Lahore",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Alam Chowk, Awan Chowk ByPass Gujranwala",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gujranwala",
        "longi": "74.15097982",
        "Lati": "32.14685263",
        "CusDesc": "Ibrahim Filling Station Gujranwala",
        "HSDPrice": "279.892",
        "Services": [],
        "CusCode": "2010201030001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Gujranwala",
        "PMGPrice": "273.822",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Wahgah Road Lahore",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "74.41790521",
        "Lati": "31.58890663",
        "CusDesc": "Data Filling Station Lahore",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201050001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Lahore",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Landi Akhon Ahmed, Ring Road, Reshawar",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Peshawar",
        "longi": "71.52867526",
        "Lati": "33.96326552",
        "CusDesc": "Abdul Malik Petroleum Services Peshawar",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202080001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Peshawar",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Fateh Jhang Road, RAWALPINDI",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mori Khetran",
        "longi": "72.83210009",
        "Lati": "33.59614693",
        "CusDesc": "Zahid Petroleum Service Morikhethran Fateh Jhang",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200070001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-West",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Main G.T Road Tarnab Farm Towards Peshawar.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Peshawar",
        "longi": "71.69415012",
        "Lati": "34.01661156",
        "CusDesc": "Amjad Petroleum Service Tarnab Farm Peshawar",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200100001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Peshawar",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Sargodha Road, Near Motorway Interchange, Faisalabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Faisalabad",
        "longi": "73.06544155",
        "Lati": "31.52428051",
        "CusDesc": "Ashfaq Petroleum Services Faisalabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201580001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Faisalabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Kotli Road, Gul Pur, Azad Kashmir",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gulpur",
        "longi": "73.85351479",
        "Lati": "33.43925645",
        "CusDesc": "Rashid Filling Station Gulpur City",
        "HSDPrice": "278.96",
        "Services": [],
        "CusCode": "2010201590001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-East",
        "Region": "Rawalpindi-2",
        "District": "Kotli",
        "PMGPrice": "272.89",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Channi Alam Sher (Rawat) Rawalpindi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "73.22361946",
        "Lati": "33.44920926",
        "CusDesc": "Karwan Filling Station Rewat",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200380001",
        "CNGPrice": "0",
        "Sub_Region": "Key Accounts - RWP-L",
        "Region": "Key Accounts - RWP",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "GT Road, Mandra",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mandra",
        "longi": "73.23454946",
        "Lati": "33.3810823",
        "CusDesc": "Mirpur Petroleum Services Mandra",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200420001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-Local",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Pind Dadan Khan Road, Tehsil Khewra, Distt. Jehlum",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Khewra",
        "longi": "73.01715374",
        "Lati": "32.621043",
        "CusDesc": "Geo Sherazi Filling Station Khewra",
        "HSDPrice": "280.3339",
        "Services": [],
        "CusCode": "2010201600001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Jhelum",
        "PMGPrice": "274.2639",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Jinnah Chowk Gondalwala Road, Dhullay, Gujranwala",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gujranwala",
        "longi": "74.17109236",
        "Lati": "32.17349088",
        "CusDesc": "Alpha Filling station Gujranwala",
        "HSDPrice": "279.9683",
        "Services": [],
        "CusCode": "2010201610001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Gujranwala",
        "PMGPrice": "273.8983",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Chota Lahore Swabi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Swabi",
        "longi": "72.35330433",
        "Lati": "34.06240427",
        "CusDesc": "Shams Filling Station Chota Lahore Sawabi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201620001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Swabi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Airport Road, Skardu Bypass, Skardu",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Skardu",
        "longi": "75.57278663",
        "Lati": "35.29525425",
        "CusDesc": "Hamalia Petroleum Services Skardu",
        "HSDPrice": "278.96",
        "Services": [],
        "CusCode": "2010201630001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi North",
        "Region": "Rawalpindi-1",
        "District": "Skardu",
        "PMGPrice": "272.89",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Jahangira-Swabi Road, Swabi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Swabi",
        "longi": "72.4644658",
        "Lati": "34.11059721",
        "CusDesc": "Karam Filling Station Sawabi",
        "HSDPrice": "279.8628",
        "Services": [],
        "CusCode": "2010201650001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Swabi",
        "PMGPrice": "273.7928",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Alipur Road, Chowk Thata, Qureshi, Khangarh, Muzaffargarh",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Khangar",
        "longi": "71.1730814",
        "Lati": "29.97015348",
        "CusDesc": "Chandia & Qureshi Petroleum Services Khangarh",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201660001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Muzaffargarh",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Indus Highway Village Gilloti, Teh & Distt. D.I Khan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Dera Ismail Khan",
        "longi": "70.76813892",
        "Lati": "32.16660206",
        "CusDesc": "Super Kundi Petroleum Gilloti D.I Khan",
        "HSDPrice": "279.8286",
        "Services": [],
        "CusCode": "2010200250001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Dera Ismail Khan",
        "PMGPrice": "273.7586",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Dalwal Road, Choa Saiden Shah, Chakwal",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Choa Saidan Shah",
        "longi": "72.99216226",
        "Lati": "32.73121364",
        "CusDesc": "Sawal Petroleum Services Choasaidanshah",
        "HSDPrice": "280.4844",
        "Services": [],
        "CusCode": "2010200900001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Chakwal",
        "PMGPrice": "274.4144",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Moqam Chowk Mardan, Swabi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mardan",
        "longi": "72.02790543",
        "Lati": "34.20699615",
        "CusDesc": "Khattak Filling Station Mardan",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200950001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Mardan",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khan Autos Near Madrassa Taleem-ul-Quran Multan Road Mailsi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mailsi",
        "longi": "72.16258049",
        "Lati": "29.81139215",
        "CusDesc": "Naseem Sadiq Petroleum Services Mailsi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200990001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Vehari",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Chowk Garh Mor Jhang",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Jhang",
        "longi": "71.84537038",
        "Lati": "30.84512775",
        "CusDesc": "Cheema Petroleum Services Jhang",
        "HSDPrice": "280.9065",
        "Services": [],
        "CusCode": "2010201000001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Jhang",
        "PMGPrice": "274.8365",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Kahuta Kotli Road, Sehnsa, opp. Sehnsa Floor Mill.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sehnsa",
        "longi": "73.7472631",
        "Lati": "33.5013796",
        "CusDesc": "Muhammadi Petroleum Services Sehnsa",
        "HSDPrice": "278.96",
        "Services": [],
        "CusCode": "2010201770001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-East",
        "Region": "Rawalpindi-2",
        "District": "Kotli",
        "PMGPrice": "272.89",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Ojla Kalan, G.T.Road, Tehsil Wazirabad, Distt. Gujranwala",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gujranwala",
        "longi": "74.13639531",
        "Lati": "32.34441175",
        "CusDesc": "Jameel & Brothers Filling Station Wazirabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201780001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Gujranwala",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Pull 111, Sargodha",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sargodha",
        "longi": "72.72997767",
        "Lati": "31.93641102",
        "CusDesc": "Shahzad Petroleum Services Pull 111 Sargodha",
        "HSDPrice": "280.4185",
        "Services": [],
        "CusCode": "2010200650001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Sargodha",
        "PMGPrice": "274.3485",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Hasalpur - Chishtian Road, Chishtian",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Chishtian",
        "longi": "72.82854483",
        "Lati": "29.77957108",
        "CusDesc": "Rizwan Petroleum Services Chishtian",
        "HSDPrice": "279.9132",
        "Services": [],
        "CusCode": "2010200670001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Bahawal Nagar",
        "PMGPrice": "273.8432",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Fateh Jang-Kohat Road at Nethein Teh. Jand Distt. ATTOCK",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Jand",
        "longi": "72.31068403",
        "Lati": "33.50056882",
        "CusDesc": "Mirjaal Petroleum Services Jand Attock",
        "HSDPrice": "280.1562",
        "Services": [],
        "CusCode": "2010200750001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi North",
        "Region": "Rawalpindi-1",
        "District": "Attock",
        "PMGPrice": "274.0862",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Haider Nagar, Chak Shahana Road, Khanewal",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Khanewal",
        "longi": "71.93219081",
        "Lati": "30.29081577",
        "CusDesc": "Zarnab Filling Station Khanewal",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200760001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Khanewal",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Wallayat Khan Road, Ghareeabad, Scheme III, Chaklala, Rawalpindi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "73.09645861",
        "Lati": "33.58764327",
        "CusDesc": "Seven Star Filling Station Chaklala Rawalpindi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200770001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-Local",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mianwali Road Bilalabad Talagang Distt Chakwal",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Talagang",
        "longi": "72.30902374",
        "Lati": "32.93631311",
        "CusDesc": "The Awan Petroleum Services Talagang",
        "HSDPrice": "280.7841",
        "Services": [],
        "CusCode": "2010200780001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Chakwal",
        "PMGPrice": "274.7141",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Chun Hinda, GT Road Kamonke dist Gujranwala",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kamoke",
        "longi": "74.22915146",
        "Lati": "31.93559158",
        "CusDesc": "Al-Jehad Filling Station Kamonke",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200230001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Gujranwala",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Bhakkar Multan Road Jhang",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Jhang",
        "longi": "72.24587113",
        "Lati": "31.17804089",
        "CusDesc": "Bilal Safdar Petroleum Services Jhang",
        "HSDPrice": "280.3092",
        "Services": [],
        "CusCode": "2010200910001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Jhang",
        "PMGPrice": "274.2392",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Michni Road, Shabqadar, Charsada",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Shab Qadar",
        "longi": "71.56082824",
        "Lati": "34.22121485",
        "CusDesc": "Modern Petroleum Services Shabqadar",
        "HSDPrice": "279.7751",
        "Services": [],
        "CusCode": "2010200920001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Charsadda",
        "PMGPrice": "273.7051",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Kasur - Depalpur Road, Talvindi, Tehsil Chunian, Distt Karsur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kasur",
        "longi": "74.1390802",
        "Lati": "30.91142433",
        "CusDesc": "Al-Yaqub Filling Station Kasur",
        "HSDPrice": "280.6886",
        "Services": [],
        "CusCode": "2010202020001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Kasur",
        "PMGPrice": "274.6186",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Jamrud, Landi Kotal Road, Khyber Agency, Peshawar",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Khyber Agency",
        "longi": "71.39068097",
        "Lati": "33.99887449",
        "CusDesc": "Al-Jamrud Filling Station Peshawar",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202030001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "FATA",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Okara - Faisalabad Road, Sutgrah More, Adda Sutgrah, Okara",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Okara",
        "longi": "73.50993589",
        "Lati": "30.92662738",
        "CusDesc": "Pak Petroleum Services Okara",
        "HSDPrice": "279.8678",
        "Services": [],
        "CusCode": "2010202040001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Okara",
        "PMGPrice": "273.7978",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Asgharabad, Kohala Road, Muzaffarabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kohala",
        "longi": "73.47973287",
        "Lati": "34.3115749",
        "CusDesc": "Saadat Filling Station Kohala",
        "HSDPrice": "278.96",
        "Services": [],
        "CusCode": "2010200160001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-East",
        "Region": "Rawalpindi-2",
        "District": "Muzaffarabad",
        "PMGPrice": "272.89",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "P.O. Khas Sham ki Bhattian, 35-km Multan Road",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sham Ki Bhattian",
        "longi": "74.10963088",
        "Lati": "31.33030956",
        "CusDesc": "Bhatti Petroleum Services Sham ki Bhattian LHR",
        "HSDPrice": "279.8636",
        "Services": [],
        "CusCode": "2010200180001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Lahore",
        "PMGPrice": "273.7936",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Moza Salam Gujrat Road Sargodha",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bhalwal",
        "longi": "73.00505027",
        "Lati": "32.30066061",
        "CusDesc": "Insaf Petroleum Services Salim",
        "HSDPrice": "280.4044",
        "Services": [],
        "CusCode": "2010200190001",
        "CNGPrice": "0",
        "Sub_Region": "Key Accounts - FSD",
        "Region": "Key Accounts - RWP",
        "District": "Sargodha",
        "PMGPrice": "274.3344",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Multan Jhang Road, Shorkot c/o Ikram Oil Traders",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Shorkot",
        "longi": "72.08099306",
        "Lati": "30.83870034",
        "CusDesc": "Bismillah Petroleum Services Shorkot",
        "HSDPrice": "280.8588",
        "Services": [],
        "CusCode": "2010200210001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Jhang",
        "PMGPrice": "274.7888",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Sargodha Road, Malakwal, Tala Gang",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Talagang",
        "longi": "72.39681512",
        "Lati": "32.91787458",
        "CusDesc": "Awais Filling Station Talagang",
        "HSDPrice": "280.7116",
        "Services": [],
        "CusCode": "2010201310001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Chakwal",
        "PMGPrice": "274.6416",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "National Highway Road, Renala Khurd Bypass, Renala Khurd, Distt Okara",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Renala Khurd",
        "longi": "73.6109291",
        "Lati": "30.8772518",
        "CusDesc": "Al-Sayed Filling Station Renala Khurd Bypass",
        "HSDPrice": "279.8892",
        "Services": [],
        "CusCode": "2010202420001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Okara",
        "PMGPrice": "273.8192",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Sargodha Road, Adda Chund Distt. Jhang",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Jhang",
        "longi": "72.26598501",
        "Lati": "31.42056038",
        "CusDesc": "Ashiq-e-Mustafa Petroleum Services Jhang",
        "HSDPrice": "280.3446",
        "Services": [],
        "CusCode": "2010201820001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Jhang",
        "PMGPrice": "274.2746",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Jhang-Faisalabad Road, 43 KM Adda Fatihabad, Distt. Jhang",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Jhang",
        "longi": "72.65877306",
        "Lati": "31.31492777",
        "CusDesc": "New Lahore Petroleum Services Jhang",
        "HSDPrice": "280.2647",
        "Services": [],
        "CusCode": "2010201830001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Jhang",
        "PMGPrice": "274.1947",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Habibabad Mapalka Road, District Okara",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Renala Khurd",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Haji Siddique Filling Station Habibabad",
        "HSDPrice": "281.3601",
        "Services": [],
        "CusCode": "2010202240001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Okara",
        "PMGPrice": "275.2901",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Gojra Tahli Ada Road, Chikna Syed Tehsil Phalia Distt Mundi Bahhudin",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Phalia",
        "longi": "73.27358767",
        "Lati": "32.24648442",
        "CusDesc": "Ali Petroleum Services Phalia Mandi Bahauddin",
        "HSDPrice": "280.3683",
        "Services": [],
        "CusCode": "2010200860001",
        "CNGPrice": "0",
        "Sub_Region": "Key Accounts - RWP-L",
        "Region": "Key Accounts - RWP",
        "District": "Mandi Bahauddin",
        "PMGPrice": "274.2983",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "GT Road, Near Chak Pirana Dipot, Kharian",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kharian",
        "longi": "73.91113669",
        "Lati": "32.75340402",
        "CusDesc": "Mukhtar Filling Station Kharian",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200870001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Gujrat",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Fatehjang- Khaur- Dhulian Chowk Road Talagang Road, Pindi Gheb Distt. Attock",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Dhullian",
        "longi": "72.359457",
        "Lati": "33.210408",
        "CusDesc": "Dhullian Petroleum Services Pindi Gheb",
        "HSDPrice": "280.3574",
        "Services": [],
        "CusCode": "2010200890001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi North",
        "Region": "Rawalpindi-1",
        "District": "Attock",
        "PMGPrice": "274.2874",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Bawana Road, Aminpur Bangla, Teh. Chiniot, Distt. Jhang",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Aminpur Bangla",
        "longi": "72.84937218",
        "Lati": "31.49402929",
        "CusDesc": "Sipra Friends Petroleum Services Aminpur Bangla Faisalabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201370001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Jhang",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Kahuta road District Rawalpindi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kahuta",
        "longi": "73.3440949",
        "Lati": "33.60000414",
        "CusDesc": "Raja Brothers Filling Station Kahuta",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201380001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-East",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Murree Road, Tret",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Tret",
        "longi": "73.29876289",
        "Lati": "33.83672495",
        "CusDesc": "Abbasi Filling Station Tret Murree",
        "HSDPrice": "280.0303",
        "Services": [],
        "CusCode": "2010200300001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-East",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.9603",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Shabqadar Ghandahab Road, Sro Kalay Charsada",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Charsadda",
        "longi": "71.5129602",
        "Lati": "34.21743001",
        "CusDesc": "Awami Petroleum Service Sro Kalay",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200630001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Charsadda",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Gujranwala-Daska Road Ranjhai Tehsil Daska Distt. Sialkot",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Daska",
        "longi": "74.314439",
        "Lati": "32.30145184",
        "CusDesc": "Ahmad Petroleum Services Daska",
        "HSDPrice": "279.8034",
        "Services": [],
        "CusCode": "2010201540001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Sialkot",
        "PMGPrice": "273.7334",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Okara-Faisalabad Road, Near Railway Fatik, Tandianwala, Faisalabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Tandlian Wala",
        "longi": "73.11742947",
        "Lati": "31.01724744",
        "CusDesc": "Al-Qadir Filling Station Tandlianwala",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201860001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Faisalabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khurrana More, Zafarwal Road, Sialkot",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sialkot",
        "longi": "74.644965",
        "Lati": "32.474952",
        "CusDesc": "Madina Filling Station Sialkot",
        "HSDPrice": "280.095",
        "Services": [],
        "CusCode": "2010201930001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Sialkot",
        "PMGPrice": "274.025",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Kharanwala Road, Near Rafhan Miaze Factory, Jaranwala, Faisalabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Faisalabad",
        "longi": "73.41362178",
        "Lati": "31.36091788",
        "CusDesc": "Afzal Petroleum Services Jaranwala (Faisalabad)",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201960001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Faisalabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "3 K.M Dhoke Saidian Stop, Khaur Road, Fateh Jhang, Attock",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Fateh Jhang",
        "longi": "72.64197305",
        "Lati": "33.52719082",
        "CusDesc": "Bismillah Petroleum Services Fateh Jhang Attock",
        "HSDPrice": "279.7852",
        "Services": [],
        "CusCode": "2010201250001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi North",
        "Region": "Rawalpindi-1",
        "District": "Attock",
        "PMGPrice": "273.7152",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Bahawalpur - Mandi Yazman Road, Mandi Yazman, Bahawalpur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mandi Yazman",
        "longi": "71.74726725",
        "Lati": "29.13563396",
        "CusDesc": "Haroon Petroleum Services Mandi Yazman",
        "HSDPrice": "280.9416",
        "Services": [],
        "CusCode": "2010201550001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Bahawalpur",
        "PMGPrice": "274.8716",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Near New Sabzi Mandi, Sargodha Road, Khushab",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Khushab",
        "longi": "72.37473384",
        "Lati": "32.31302481",
        "CusDesc": "Joyia Petroleum Services Khushab",
        "HSDPrice": "280.5834",
        "Services": [],
        "CusCode": "2010201570001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Khushab",
        "PMGPrice": "274.5134",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "100/F, Near Ameer Chowk, Sabazi Mandi (Chishtian-Daharwala Road) Tehsil Chishtian Distt. Bhawalnagar",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Chishtian",
        "longi": "72.87206719",
        "Lati": "29.69494226",
        "CusDesc": "Zulfiqar Petroleum Service Chistian",
        "HSDPrice": "280.5719",
        "Services": [],
        "CusCode": "2010200270001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Bahawal Nagar",
        "PMGPrice": "274.5019",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Charsadda Road, Peshawar Nera Gul Bella",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Charsadda",
        "longi": "71.69316709",
        "Lati": "34.1351141",
        "CusDesc": "Sheraz Petroleum Services Peshawer",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200150001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Charsadda",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Kharia - Dinga Road NEar Dhulial Chowk, Dinga City, Gujrat",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Dinga",
        "longi": "73.71647537",
        "Lati": "32.6462612",
        "CusDesc": "Khan Petroleum Services Dinga",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201970001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Gujrat",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Dargai Towards Malakand Top",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Dargai",
        "longi": "71.89752191",
        "Lati": "34.50124583",
        "CusDesc": "Muslim Khan & Brothers Dargai",
        "HSDPrice": "280.024",
        "Services": [],
        "CusCode": "2010200010001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Malakand",
        "PMGPrice": "273.954",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "GT Road Main Channu Bypass",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mian Channu",
        "longi": "72.33579621",
        "Lati": "30.44685852",
        "CusDesc": "Waqas Petroleum Services M. Channu",
        "HSDPrice": "279.8485",
        "Services": [],
        "CusCode": "2010202110001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Khanewal",
        "PMGPrice": "273.7785",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Ali Pur Road, Muzaffar Garh",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Muzaffargarh",
        "longi": "71.05867714",
        "Lati": "29.73745524",
        "CusDesc": "Faizan-e-Mehboob Petroleum Services Muzaffargarh",
        "HSDPrice": "279.8425",
        "Services": [],
        "CusCode": "2010202130001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Muzaffargarh",
        "PMGPrice": "273.7725",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Near Niazi Chowk, Distt Khanewal",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Khanewal",
        "longi": "71.96503311",
        "Lati": "30.31889585",
        "CusDesc": "Al-Haq Petroleum Services Khanewal",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202140001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Khanewal",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Batagram",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mansehra",
        "longi": "73.02043006",
        "Lati": "34.68001935",
        "CusDesc": "Trand Filling Station Batgram",
        "HSDPrice": "282.1814",
        "Services": [],
        "CusCode": "2010202150001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi North",
        "Region": "Rawalpindi-1",
        "District": "Mansehra",
        "PMGPrice": "276.1114",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Kundian Chashma, Mianwali",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mianwali",
        "longi": "71.47395685",
        "Lati": "32.43275612",
        "CusDesc": "Al-Kundi Filling Station Kundian",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202160001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Mianwali",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Indust Highway Tehsil Takht Nusrati, Distt Karak",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Karak",
        "longi": "70.980952",
        "Lati": "32.990071",
        "CusDesc": "Waseem Afridi Filling Station Karak",
        "HSDPrice": "281.2087",
        "Services": [],
        "CusCode": "2010202180001",
        "CNGPrice": "0",
        "Sub_Region": "Key Accounts - PSH",
        "Region": "Key Accounts - RWP",
        "District": "Karak",
        "PMGPrice": "275.1387",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "New Lari Adda, Pindi Gheb, Attock",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Pindi Gheb",
        "longi": "72.2745949",
        "Lati": "33.25486532",
        "CusDesc": "Danyal Filling Station Pindi Gheb",
        "HSDPrice": "280.4959",
        "Services": [],
        "CusCode": "2010200610001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi North",
        "Region": "Rawalpindi-1",
        "District": "Attock",
        "PMGPrice": "274.4259",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Sakhi Sarwar Road, D.G. Khan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Dera Gazi Khan",
        "longi": "70.49662292",
        "Lati": "29.99698309",
        "CusDesc": "Quaid Petroleum Services D.G.Khan",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202210001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Dera Ghazi Khan",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "National High way N-5 Kharian City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kharian",
        "longi": "73.86296555",
        "Lati": "32.8120231",
        "CusDesc": "Askari Petroleum Services Kharian",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201160001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Gujrat",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Jumber Chumian Road, Changa Manga Kasur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Chunnian",
        "longi": "73.95898059",
        "Lati": "31.09352214",
        "CusDesc": "Zahid Filling Station Chunian",
        "HSDPrice": "280.4093",
        "Services": [],
        "CusCode": "2010202100001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Kasur",
        "PMGPrice": "274.3393",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Karakuran Highway, Gilgit",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gilgit",
        "longi": "74.63332817",
        "Lati": "35.69365359",
        "CusDesc": "New Karakuram Petroleum Services Karakuram",
        "HSDPrice": "278.96",
        "Services": [],
        "CusCode": "2010202170001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi North",
        "Region": "Rawalpindi-1",
        "District": "Gilgit",
        "PMGPrice": "272.89",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Tehsil Ferozpur, Distt Sheikhupura",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sharaqpur",
        "longi": "74.09056038",
        "Lati": "31.46007029",
        "CusDesc": "Sharqpur Filling Station Ferozwala",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202230001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Sheikhupura",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Indus Highway Dara Adam Khel, Kohat Peshawer Road Srai Khora",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Peshawar",
        "longi": "71.56447068",
        "Lati": "33.83188912",
        "CusDesc": "Three Star Filling Station Sraikhora Peshawar",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201170001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Peshawar",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Muslim Coporatoin Grain Market, Marot Tehsil Fortabad Disst Bahawalnagar",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Fort Abbas",
        "longi": "72.40861014",
        "Lati": "29.22398264",
        "CusDesc": "Muslim Petroleum Services Fortabbas",
        "HSDPrice": "280.6555",
        "Services": [],
        "CusCode": "2010201020001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Bahawal Nagar",
        "PMGPrice": "274.5855",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "KKH Road Gilgit Nmothern Area",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gilgit",
        "longi": "74.4026944",
        "Lati": "35.8862193",
        "CusDesc": "Karakuram Petroleum Services Gilgit",
        "HSDPrice": "278.96",
        "Services": [],
        "CusCode": "2010201080001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi North",
        "Region": "Rawalpindi-1",
        "District": "Gilgit",
        "PMGPrice": "272.89",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Daska - Sambryal Road, Madranwalla, Tehsil Daska, Distt Sialkot",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Daska",
        "longi": "74.35656309",
        "Lati": "32.34997248",
        "CusDesc": "Mughal Petroleum Services Daska",
        "HSDPrice": "279.8075",
        "Services": [],
        "CusCode": "2010201940001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Sialkot",
        "PMGPrice": "273.7375",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mianwalli Multan Road, Sarai Muhajar, Bhakkar",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bhakkar",
        "longi": "71.23848",
        "Lati": "31.498131",
        "CusDesc": "Jatial Petroleum Services Bhakkar",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202010001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Bhakkar",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Chak # 559 Sarwer Shaheed Chow Tehsil Kot Adu Muzafar Garh",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Muzaffargarh",
        "longi": "71.24214828",
        "Lati": "30.62263404",
        "CusDesc": "Adil Waziristan Filling Station Kotaddu",
        "HSDPrice": "279.9949",
        "Services": [],
        "CusCode": "2010200940001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Muzaffargarh",
        "PMGPrice": "273.9249",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Faisalabad - Sargodha Road, Ahmad Nagar, Chinat, Distt Chiniot",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Ahmed Nagar",
        "longi": "72.88855389",
        "Lati": "31.78207444",
        "CusDesc": "Kings Petroleum Services & CNG Ahmad Nagar Jhang",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202050001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Jhang",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Near Railway Station, Narowal Road, Pasrur City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sialkot",
        "longi": "74.66829881",
        "Lati": "32.27169878",
        "CusDesc": "Dogar Petroleum Services Pasrur City",
        "HSDPrice": "280.2023",
        "Services": [],
        "CusCode": "2010202070001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Sialkot",
        "PMGPrice": "274.1323",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "kacha Khu By-Pass KHANEWAL",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kacha Khuh",
        "longi": "72.13142127",
        "Lati": "30.37588345",
        "CusDesc": "Al-Rehman Petroleum Services Kacha Khu",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200370001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Khanewal",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Gujrat Road, Jalalpur Jattan, Gujrat",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Jalal Pur Jatan",
        "longi": "74.1895929",
        "Lati": "32.63528551",
        "CusDesc": "Majid Filling Station Jalalpur Jattan",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201670001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Gujrat",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mata Bazar Mingora Road Swat",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Matta",
        "longi": "72.41421059",
        "Lati": "34.92090404",
        "CusDesc": "Nawaz Petroleum Services Mata Sawat",
        "HSDPrice": "281.1357",
        "Services": [],
        "CusCode": "2010200790001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Swat",
        "PMGPrice": "275.0657",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Layyah-Kot Addu Road, Shah Jamal, Layyah",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Layyah",
        "longi": "70.93830228",
        "Lati": "30.83330929",
        "CusDesc": "Sarhad Baluchistan Petroleum Services Layyah",
        "HSDPrice": "279.9015",
        "Services": [],
        "CusCode": "2010201810001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Layyah",
        "PMGPrice": "273.8315",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Indus Highway Dara Adam Kheil Towards Kohat.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kohat",
        "longi": "71.50332436",
        "Lati": "33.73056014",
        "CusDesc": "Universal Petroleum Services Peshawar",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201190001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Kohat",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Channan, Kharian – Dinga Road, Kharian (Gujrat)",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kharian",
        "longi": "73.76575693",
        "Lati": "32.6882746",
        "CusDesc": "Channan Petroleum Services Kharian",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201280001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Gujrat",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Multan Vehari Road, Multan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Multan",
        "longi": "71.70887813",
        "Lati": "30.06234898",
        "CusDesc": "Faran Petroleum Services Multan",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201300001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Multan",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Rajana Road, Toba Tak Singh",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Toba Tek Singh",
        "longi": "72.48671606",
        "Lati": "30.96407666",
        "CusDesc": "Saeed Filling Station Tobatak Singh",
        "HSDPrice": "280.0812",
        "Services": [],
        "CusCode": "2010201360001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Toba Tek Sing",
        "PMGPrice": "274.0112",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Main G.T Road Akora Khattak Towards Nowshera.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Akora Khattak",
        "longi": "72.14296147",
        "Lati": "33.99672713",
        "CusDesc": "Nabi Filling Station Akora Khattak",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200020001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Nowshera",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Bara Road Peshawer",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Peshawar",
        "longi": "71.5024807",
        "Lati": "33.9576094",
        "CusDesc": "Wali Petroleum Services Peshawar",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200800001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Peshawar",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Main G.T. Road Aman Garh Nowshehra",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Amangarh",
        "longi": "71.93174958",
        "Lati": "34.01003849",
        "CusDesc": "Bashar Filling Station Aman Garh Peshawar",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200810001",
        "CNGPrice": "0",
        "Sub_Region": "Key Accounts - PSH",
        "Region": "Key Accounts - RWP",
        "District": "Nowshera",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Near Khui Ratta By Pass, Khui Ratta Kotli Road, Tehsil & District Kotli",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Khui Ratta",
        "longi": "74.01829362",
        "Lati": "33.36660128",
        "CusDesc": "Kareem Petroleum Services Kotli",
        "HSDPrice": "278.96",
        "Services": [],
        "CusCode": "2010202390001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-East",
        "Region": "Rawalpindi-2",
        "District": "Kotli",
        "PMGPrice": "272.89",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Aminpur Road, Faisalabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Faisalabad",
        "longi": "72.99003929",
        "Lati": "31.45033996",
        "CusDesc": "Al-Rasheed Petroleum Services Faisalabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201680001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Faisalabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Kotli Road, Chakswari, Azad Kashmir",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Chaksawari",
        "longi": "73.784205",
        "Lati": "33.264089",
        "CusDesc": "Younis Filling Station Chakswari",
        "HSDPrice": "278.96",
        "Services": [],
        "CusCode": "2010201700001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-East",
        "Region": "Rawalpindi-2",
        "District": "Mirpur",
        "PMGPrice": "272.89",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Kalarkahar-choa Sayden Shah Road, Opp. D.G.Khan Factory, Teh. Kalarkahar Distt. Chakwal",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kallar Kahar",
        "longi": "72.81139746",
        "Lati": "32.7343431",
        "CusDesc": "Al-Hassan Petroleum Services Kallar Kahar",
        "HSDPrice": "280.5565",
        "Services": [],
        "CusCode": "2010201710001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "274.4865",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza surraki Dadyal, Rawalpindi Road, Teh. Dadyal, Distt. Mirpur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Dadyal",
        "longi": "73.619089",
        "Lati": "33.379738",
        "CusDesc": "Chaudhry Ayub Filling Station Dadyal",
        "HSDPrice": "278.96",
        "Services": [],
        "CusCode": "2010201850001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-East",
        "Region": "Rawalpindi-2",
        "District": "Mirpur",
        "PMGPrice": "272.89",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Kot Farid Road, Near New Sabzi Mandi, Iqbal Colony, Sargodha City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sargodha",
        "longi": "72.67713815",
        "Lati": "32.0947787",
        "CusDesc": "Sherazi Petroleum Services Sargodha City",
        "HSDPrice": "280.6793",
        "Services": [],
        "CusCode": "2010201870001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Sargodha",
        "PMGPrice": "274.6093",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Shangla Road, Khawazakhela, Swat",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Khawazkhela",
        "longi": "72.47624204",
        "Lati": "34.93660854",
        "CusDesc": "Saad Filling Station Khawazakhela",
        "HSDPrice": "281.232",
        "Services": [],
        "CusCode": "2010201880001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Swat",
        "PMGPrice": "275.162",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Takht Bai-Rajjar Road, Tehsil Takht Bai, Mardan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Takht Bhai",
        "longi": "71.926804",
        "Lati": "34.252237",
        "CusDesc": "Speen Kore Filling Station Mardan",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201890001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Mardan",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Jhang Road, Near Chinat Courts, Tehsil Chinot, Distt Jhang",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Chiniot",
        "longi": "72.98768967",
        "Lati": "31.71871157",
        "CusDesc": "Madina Petroleum Service Chiniot City",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201900001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Chiniot",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Hattar Industrial Estate, Near Saadi Cement, Hattar Road, Hattar, Distt Haripur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Hattar",
        "longi": "72.85591945",
        "Lati": "33.86468296",
        "CusDesc": "Saani Petroleum Services Hattar",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201910001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi North",
        "Region": "Rawalpindi-1",
        "District": "Haripur",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khushab-Mianwali Road, Mouza Bandial, Tehsil & Distt Khushab",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Khushab",
        "longi": "71.81426615",
        "Lati": "32.37143384",
        "CusDesc": "Bandial Petroleum Services Khushab",
        "HSDPrice": "281.2413",
        "Services": [],
        "CusCode": "2010202280001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Khushab",
        "PMGPrice": "275.1713",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Near Frontier Constabulory Head Quarter, Peshawar road, Bannu",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bannu",
        "longi": "70.62538102",
        "Lati": "32.99664783",
        "CusDesc": "F.C. Filling Station Bannu",
        "HSDPrice": "281.5326",
        "Services": [],
        "CusCode": "2010202300001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Bannu",
        "PMGPrice": "275.4626",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Near Korang River Bridger Lehtrar Road, Islamabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Islamabad",
        "longi": "73.13307077",
        "Lati": "33.63331325",
        "CusDesc": "Rehman Filling Station Islamabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202320001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-Local",
        "Region": "Rawalpindi-2",
        "District": "Islamabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Dodyal City, Azad Kashmir",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Dadyal",
        "longi": "73.71627823",
        "Lati": "33.34487747",
        "CusDesc": "Sultania Petroleum Services Dadyal",
        "HSDPrice": "278.96",
        "Services": [],
        "CusCode": "2010202200001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-East",
        "Region": "Rawalpindi-2",
        "District": "Mirpur",
        "PMGPrice": "272.89",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Gatyali Mirpur Road Pakhwal Khas Jhelum",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Jhelum",
        "longi": "73.75113219",
        "Lati": "32.98765732",
        "CusDesc": "Welcome Petroleum Service Jhelum",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200040001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Jhelum",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Kotla Kahlwaan, Sheikhupura Faisalabad Road, Shahkot Nankana Sahib Distt.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Nankana Sahib",
        "longi": "73.54337901",
        "Lati": "31.58464998",
        "CusDesc": "Kahlon Filling Station Shahkot",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201410001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Nankana Sahib",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Near DCO Tank Office, Tank-Wana Road, Tank, D.I. Khan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Dera Ismail Khan",
        "longi": "70.38324058",
        "Lati": "32.2072531",
        "CusDesc": "Gomal Petroleum Services D.I.Khan",
        "HSDPrice": "280.0831",
        "Services": [],
        "CusCode": "2010202250001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Dera Ismail Khan",
        "PMGPrice": "274.0131",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Pattokki Distt. Kasur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Pattoki",
        "longi": "73.80975321",
        "Lati": "31.29668969",
        "CusDesc": "Sandhu Petroleum Services Pattoki",
        "HSDPrice": "280.2853",
        "Services": [],
        "CusCode": "2010200850001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Kasur",
        "PMGPrice": "274.2152",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "G.T. Road Haji Camp Sarbulandpura Peshawer",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sarbulandpura",
        "longi": "71.61274776",
        "Lati": "34.01595806",
        "CusDesc": "Al-Mumtaz Filling Station Surbulandpura Peshawar",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200980001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Peshawar",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "MithaTawana Sargodha",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mitha Tiwana",
        "longi": "72.10852593",
        "Lati": "32.25214644",
        "CusDesc": "Alam Sher Petroleum Services Mitha Tawana Sargodha",
        "HSDPrice": "280.9662",
        "Services": [],
        "CusCode": "2010201040001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Khushab",
        "PMGPrice": "274.8962",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Chak Khojian Bajwat Distt Sialkot",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sialkot",
        "longi": "74.551515",
        "Lati": "32.557559",
        "CusDesc": "Bajwat Filling Station Sialkot",
        "HSDPrice": "280.0342",
        "Services": [],
        "CusCode": "2010201090001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Sialkot",
        "PMGPrice": "273.9642",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Near Timergarh District jail, Tehsil District Dir Lower",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Timergarh",
        "longi": "71.82973579",
        "Lati": "34.8067129",
        "CusDesc": "Al-Azeem Petroleum Services Timergarh",
        "HSDPrice": "280.8497",
        "Services": [],
        "CusCode": "2010202440001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Lower Dir",
        "PMGPrice": "274.7797",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Indus Highway Krappa Karak Towards Kohat",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Karak",
        "longi": "71.31589428",
        "Lati": "33.35454051",
        "CusDesc": "Mehboob Filling Station Karrapa Distt Karak",
        "HSDPrice": "279.7745",
        "Services": [],
        "CusCode": "2010200050001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Karak",
        "PMGPrice": "273.7045",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Sur Gul Chowk, Bannu Road Indus Highway Muslimabad Kohat.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kohat",
        "longi": "71.4193865",
        "Lati": "33.4920236",
        "CusDesc": "Waseem Filling Station Muslimabad Kohat",
        "HSDPrice": "279.7745",
        "Services": [],
        "CusCode": "2010200080001",
        "CNGPrice": "0",
        "Sub_Region": "Key Accounts - PSH",
        "Region": "Key Accounts - PSH",
        "District": "Kohat",
        "PMGPrice": "273.7045",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Main G.T Road Takht Bhai Dargai Towards Mardan.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Takht Bhai",
        "longi": "71.960656",
        "Lati": "34.258695",
        "CusDesc": "Mehran Filling Station Takhatbai",
        "HSDPrice": "279.7845",
        "Services": [],
        "CusCode": "2010200110001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Mardan",
        "PMGPrice": "273.7145",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Main Charsada Peshawar Road.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Charsadda",
        "longi": "71.72368392",
        "Lati": "34.15456557",
        "CusDesc": "Kamran Filling Station Charsadda",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200130001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Charsadda",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Hasil-pur-Vehari Road, Tehsil Hasilpur, Distt Bahawalpur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Hasilpur",
        "longi": "72.55029783",
        "Lati": "29.73492749",
        "CusDesc": "Ali Petroleum Services Hasilpur",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202310001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Bahawalpur",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Ilahabad Kangan Road, Tehsil Chunian`",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kasur",
        "longi": "74.099579",
        "Lati": "30.829226",
        "CusDesc": "Abdul Ghani Petroleum Services Kasur",
        "HSDPrice": "280.8706",
        "Services": [],
        "CusCode": "2010202360001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Kasur",
        "PMGPrice": "274.8006",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Railway Workshop Road, Ratta Amral RAWALPINDI",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "73.04584399",
        "Lati": "33.61657152",
        "CusDesc": "Al-Rehman Filling Station Rataamral Rawalpindi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200560001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-Local",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Makeyal Road, Kotli, Azad Kashmir",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kotli",
        "longi": "73.9109382",
        "Lati": "33.52243259",
        "CusDesc": "Kayani Filling Station Kotly",
        "HSDPrice": "278.96",
        "Services": [],
        "CusCode": "2010201420001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-East",
        "Region": "Rawalpindi-2",
        "District": "Kotli",
        "PMGPrice": "272.89",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Tahir Chowk, Bus Stand, Bosal Sokka, Teh. Malikwal, Distt. Mani Bahuddin",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mandi Bahauddin",
        "longi": "73.30318987",
        "Lati": "32.36788619",
        "CusDesc": "Al-Karam Petroleum Services Malikwal",
        "HSDPrice": "280.1551",
        "Services": [],
        "CusCode": "2010201460001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Mandi Bahauddin",
        "PMGPrice": "274.0851",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mianwali-Multan Road, near PAF Base, Mianwali",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mianwali",
        "longi": "71.55224651",
        "Lati": "32.54661421",
        "CusDesc": "New Khan Petroleum Services Mianwali",
        "HSDPrice": "281.897",
        "Services": [],
        "CusCode": "2010201430001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Mianwali",
        "PMGPrice": "275.827",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Lahore Road, Burewala City, Distt. Vehari",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Burewala",
        "longi": "72.70448059",
        "Lati": "30.1619623",
        "CusDesc": "Dawn Petroleum Services Burewala",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201560001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Vehari",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Adda Khthiala Khurd, Tehsil Malikwal, Distt. Mandi Bahauddin",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Malikwal",
        "longi": "73.2280679",
        "Lati": "32.51092661",
        "CusDesc": "Al-Madina Petroleum Services Malikwal",
        "HSDPrice": "280.0861",
        "Services": [],
        "CusCode": "2010201720001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Mandi Bahauddin",
        "PMGPrice": "274.0161",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Near Ghazi Chowk, Indus Highway, Tehsil Jampur, Distt Rajanpur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Jampur",
        "longi": "73.217639",
        "Lati": "34.302288",
        "CusDesc": "Ghazi Filling Station Jampur",
        "HSDPrice": "279.909",
        "Services": [],
        "CusCode": "2010202430001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Rajanpur",
        "PMGPrice": "273.839",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Lalian-Jhang Road Teh. Chinot Distt. Jhang",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lallian",
        "longi": "72.730094",
        "Lati": "31.777376",
        "CusDesc": "Al-Riaz Petroleum Services Lalian",
        "HSDPrice": "279.8486",
        "Services": [],
        "CusCode": "2010200310001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Jhang",
        "PMGPrice": "273.7786",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Chakwal-Khushab Road, Kallar Kahar, Chakwal",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kallar Kahar",
        "longi": "72.70575061",
        "Lati": "32.7840556",
        "CusDesc": "Valley Filling Station Kallar Kahar",
        "HSDPrice": "280.4133",
        "Services": [],
        "CusCode": "2010200530001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "274.3433",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Dargodha Mianwali Road, Tehsil Shahpur, District Sargodha",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sargodha",
        "longi": "72.5280717",
        "Lati": "32.2048058",
        "CusDesc": "Faiz Petroleum Services Shahpur Sargodha",
        "HSDPrice": "280.3446",
        "Services": [],
        "CusCode": "2010202460001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Sargodha",
        "PMGPrice": "274.2746",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "B/W Balakot Road, Dara, Manshera",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mansehra",
        "longi": "73.214301",
        "Lati": "34.342703",
        "CusDesc": "Gilani Filling Station Mansehra",
        "HSDPrice": "280.9395",
        "Services": [],
        "CusCode": "2010202270001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi North",
        "Region": "Rawalpindi-1",
        "District": "Mansehra",
        "PMGPrice": "274.8695",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khanewal - Lodhran Road, Chowk Maitla, Teh. Mailsi, Distt. Vehari",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Vehari",
        "longi": "71.81691483",
        "Lati": "30.00618225",
        "CusDesc": "Ahmed Raza Petroleum Services Chowk Maitla Vehari",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201510001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Vehari",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Near Ali Masjid, Jehlum Road, Chakwal City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Chakwal",
        "longi": "72.86416322",
        "Lati": "32.9290935",
        "CusDesc": "Bhatti Brothers Filling Station Chakwal",
        "HSDPrice": "280.1201",
        "Services": [],
        "CusCode": "2010201520001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Chakwal",
        "PMGPrice": "274.0501",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Faisalbad-Pirmahal-Sindhalinawali-Multan Road, Kamalia Distt Toba Tek Singh",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kamalia",
        "longi": "72.41391554",
        "Lati": "30.74453941",
        "CusDesc": "Chaudhry Petroleum Services Kamalia",
        "HSDPrice": "280.4403",
        "Services": [],
        "CusCode": "2010202580001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Toba Tek Sing",
        "PMGPrice": "274.3703",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Haryawala Gujrat By-pass Teh & Distt. GUJRAT",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gujrat",
        "longi": "74.06696498",
        "Lati": "32.53199014",
        "CusDesc": "New Zamindara Filling Station Gujrat",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200320001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Gujrat",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Mouza Ghunike, Daska Road, Sialkot.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sialkot",
        "longi": "74.47159365",
        "Lati": "32.42650317",
        "CusDesc": "Ghuman Petroleum Services Sialkot",
        "HSDPrice": "280.01",
        "Services": [],
        "CusCode": "2010201790001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Sialkot",
        "PMGPrice": "273.94",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "182-183, Millat Colony, Quaid-e-Millat Road, Committee Chowk, Rawalpindi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "73.07023868",
        "Lati": "33.61339969",
        "CusDesc": "Malik CNG Filling Station Rawalpindi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201800001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-Local",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Shah Derry, Kabal, Village Kataja, Kabul, Shamozai Distt. Swat",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Swat",
        "longi": "72.24426851",
        "Lati": "34.87744508",
        "CusDesc": "Khan Baba Filling Station Katyar Sawat",
        "HSDPrice": "280.9806",
        "Services": [],
        "CusCode": "2010201840001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Swat",
        "PMGPrice": "274.9106",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Adda Bin Hafiz Jee, Talagang Road, Mianwali",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mianwali",
        "longi": "71.85777962",
        "Lati": "32.73220867",
        "CusDesc": "Bilal Petroleum Services Mianwali",
        "HSDPrice": "281.3912",
        "Services": [],
        "CusCode": "2010201530001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Mianwali",
        "PMGPrice": "275.3212",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "D.G. Khan-Multan-bannu-Peshawar Road, D.I. Khan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Dera Ismail Khan",
        "longi": "70.8921079",
        "Lati": "31.8104257",
        "CusDesc": "Alizai & Brothers Filling Station D.I.Khan",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202330001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Dera Ismail Khan",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Rasul Kharian Road, 5/572 Gurrah Mohalla, Mandi Bahuddin",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mandi Bahauddin",
        "longi": "73.49904075",
        "Lati": "32.61622195",
        "CusDesc": "Noor Petroleum Services Mandi Bahuddin",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200360001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Mandi Bahauddin",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Sheikhupura-Hafizabad Road, Ajniawalla, Sheikhupura",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sheikhupura",
        "longi": "73.77643079",
        "Lati": "31.9330285",
        "CusDesc": "Bestway Filling Station Ajnianwala Sheikhupura",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201440001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Sheikhupura",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khushab Road, Tehsil Joharabad, Distt. Khushab",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Joharabad",
        "longi": "72.30597943",
        "Lati": "32.29096574",
        "CusDesc": "Khokhar Petroleum Services Johrabad",
        "HSDPrice": "280.6672",
        "Services": [],
        "CusCode": "2010201740001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Khushab",
        "PMGPrice": "274.5972",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "18, Hazari Chowk, 1 km, Muzafargarh Road, Jhang",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Jhang",
        "longi": "72.09638491",
        "Lati": "31.15758208",
        "CusDesc": "Shaheen Hamsafar Petroleum services Jhang",
        "HSDPrice": "280.5125",
        "Services": [],
        "CusCode": "2010201750001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Jhang",
        "PMGPrice": "274.4425",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Sahiwal Road, Farooka City, Tehsil Sahiwal, Distt: Sargodha",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Faisalabad",
        "longi": "72.410005",
        "Lati": "31.891591",
        "CusDesc": "Ahmad Petroleum Srevices Farooka",
        "HSDPrice": "280.5834",
        "Services": [],
        "CusCode": "2010201760001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Faisalabad",
        "PMGPrice": "274.5134",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Sakhi Sarwar Quetta Road, Mouza Gadai Gharib, Dera Ghazi Khan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Dera Gazi Khan",
        "longi": "70.60888141",
        "Lati": "30.02061301",
        "CusDesc": "Foundation Filling Station D.G.Khan",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202650001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Dera Ghazi Khan",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Lidher, Bedian Road, Lahore",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "74.44502905",
        "Lati": "31.45622305",
        "CusDesc": "Wahab Petroleum Services Lahore",
        "HSDPrice": "279.9042",
        "Services": [],
        "CusCode": "2010202680001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Lahore",
        "PMGPrice": "273.8342",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Manshera Road, Baloch Regment Centre, Abbottabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Abbottabad",
        "longi": "73.21693003",
        "Lati": "34.15159495",
        "CusDesc": "ASR A Hussain Filling Station Abbottabad",
        "HSDPrice": "280.6524",
        "Services": [],
        "CusCode": "2010202700001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi North",
        "Region": "Rawalpindi-1",
        "District": "Abbotabad",
        "PMGPrice": "274.5824",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Chishtian-Qaziwal-Haroonabad Road, Chishtian Distt Bahawalnagar",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Chishtian",
        "longi": "72.86575779",
        "Lati": "29.78690635",
        "CusDesc": "Chaudhry Filling Station Chishtian",
        "HSDPrice": "279.9714",
        "Services": [],
        "CusCode": "2010202720001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Bahawal Nagar",
        "PMGPrice": "273.9014",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Kabul Airport Green Chowk Road Tehsil and District Swat",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Swat",
        "longi": "72.35629097",
        "Lati": "34.7800705",
        "CusDesc": "Azmat Brothers Petroleum Services Sawat",
        "HSDPrice": "280.8615",
        "Services": [],
        "CusCode": "2010202730001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Swat",
        "PMGPrice": "274.7915",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Multan Vehari Road, Mailsi, Vehari",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Garha More",
        "longi": "72.07151011",
        "Lati": "30.04618762",
        "CusDesc": "Chaudhry Din Mohammad Petroleum Services Vehari",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202340001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Vehari",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Jalalabad Opposit GOP, Old Secretariat, Muzaffarabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Muzaffarabad",
        "longi": "73.47302601",
        "Lati": "34.36083012",
        "CusDesc": "Gillani Petroleum Services Muzaffarabad",
        "HSDPrice": "278.96",
        "Services": [],
        "CusCode": "2010202350001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-East",
        "Region": "Rawalpindi-2",
        "District": "Muzaffarabad",
        "PMGPrice": "272.89",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Near Nakaso Pull, 20 KM Kabirwala-Shorkot Road, Abdul Hakeem, Kabirwala Distt Khanewal",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kabirwala",
        "longi": "72.0561102",
        "Lati": "30.64652161",
        "CusDesc": "Gujranwala National Petroleum Services Abdul Hakeem",
        "HSDPrice": "280.0483",
        "Services": [],
        "CusCode": "2010202380001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Khanewal",
        "PMGPrice": "273.9783",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Sumbrial Road, Raipur SIALKOT C/o Dr. Naseem Waleed Hospital, Wazirabad Sailkot Rd Sumbrial, Slkt",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sialkot",
        "longi": "74.42570105",
        "Lati": "32.47796728",
        "CusDesc": "Shareef Petroleum Services Sialkot",
        "HSDPrice": "280.1243",
        "Services": [],
        "CusCode": "2010200510001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Sialkot",
        "PMGPrice": "274.0543",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Main Mirpur Khas Road, Near Fateh Industries, SITE Area, Latifabad, Distt. Hyderabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Hyderabad",
        "longi": "68.39636475",
        "Lati": "25.37848393",
        "CusDesc": "Sindh Filling Station Hyderabad",
        "HSDPrice": "280.7053",
        "Services": [],
        "CusCode": "2010202910001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Hyderabad",
        "PMGPrice": "274.6353",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Attock Pump Mitthi Road, Noakot",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Naokot",
        "longi": "69.41085398",
        "Lati": "24.84975376",
        "CusDesc": "The Awan Petroleum Services, Naokot Mitthi Road",
        "HSDPrice": "281.9812",
        "Services": [],
        "CusCode": "2010202960001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Thar Parkar",
        "PMGPrice": "275.9112",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Distt Tando Muhammad Khan Near Shah Murad Sugar Mill,Sajawal Road, Shah Karim Bulri",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Tando Muhammad Khan",
        "longi": "68.32302108",
        "Lati": "24.828189",
        "CusDesc": "Ballach Filling Station, Tando Muhammad Khan",
        "HSDPrice": "280.7748",
        "Services": [],
        "CusCode": "2010202980001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Tando Muhammad Khan",
        "PMGPrice": "274.7048",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Jaranwala Lahore Road,  Bucheki, Nankana Sahib",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Nankana Sahib",
        "longi": "73.688844",
        "Lati": "31.307189",
        "CusDesc": "Sunny Filling Station Bucheki Nankana Sahab",
        "HSDPrice": "279.8754",
        "Services": [],
        "CusCode": "2010201390001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Nankana Sahib",
        "PMGPrice": "273.8054",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Swabi-Mardan Road, Swabi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Swabi",
        "longi": "72.4050495",
        "Lati": "34.17198317",
        "CusDesc": "Chand Filling Station Sawabi Peshawar",
        "HSDPrice": "279.9799",
        "Services": [],
        "CusCode": "2010200740001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Swabi",
        "PMGPrice": "273.9099",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Chak No 30 R.B, Shahkot, Faisalabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Shahkot",
        "longi": "73.44594777",
        "Lati": "31.5658309",
        "CusDesc": "Kings Petroleum Services Shahkot",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201070001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Nankana Sahib",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Lilla Interchange Sargodha",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Pind Dadan Khan",
        "longi": "72.8081131",
        "Lati": "32.57871098",
        "CusDesc": "Ahmed Petroleum Services Lilla",
        "HSDPrice": "280.5475",
        "Services": [],
        "CusCode": "2010201100001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Jhelum",
        "PMGPrice": "274.4775",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Sadiqabad-Manthar Road, Sadiqabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sadiqabad",
        "longi": "70.131344",
        "Lati": "28.29402",
        "CusDesc": "Sarwar Petroleum Services. Sadiqabad",
        "HSDPrice": "281.6225",
        "Services": [],
        "CusCode": "2010203050001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Rahim Yar Khan",
        "PMGPrice": "275.5525",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Shadiwal Road, Gujrat",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gujrat",
        "longi": "74.07565534",
        "Lati": "32.55836601",
        "CusDesc": "Gujrat Filling Station Gujrat",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200520001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Gujrat",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Sargodha Road, Mandi Bahauddin",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mandi Bahauddin",
        "longi": "73.36794242",
        "Lati": "32.43282969",
        "CusDesc": "Gheega Petroleum Services Mandi Bahauddin",
        "HSDPrice": "279.9147",
        "Services": [],
        "CusCode": "2010202220001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Mandi Bahauddin",
        "PMGPrice": "273.8447",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "General Bus Stand, Shahi Road, At Liaquatpur City District Rahim  Yar Khan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Liaqat Pur",
        "longi": "70.9385705",
        "Lati": "28.93828641",
        "CusDesc": "Al-Meezan Petroleum Services Liaqatpur",
        "HSDPrice": "281.0265",
        "Services": [],
        "CusCode": "2010202500001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Rahim Yar Khan",
        "PMGPrice": "274.9565",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Karakuram Highway, General Bus Stand, Manshera City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mansehra",
        "longi": "73.20240453",
        "Lati": "34.3528499",
        "CusDesc": "Yousafzai Filling Station Mansehra",
        "HSDPrice": "280.976",
        "Services": [],
        "CusCode": "2010202510001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi North",
        "Region": "Rawalpindi-1",
        "District": "Mansehra",
        "PMGPrice": "274.906",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Arifwala Road, Near Arifwala Bypass Opp: Spring Feeds, Sahiwal",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sahiwal",
        "longi": "73.09453011",
        "Lati": "30.62493332",
        "CusDesc": "Ahmad Petroleum Services Arifwala Bypass Sahiwal",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202630001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Sahiwal",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khipro Road,Taluka Hussain Bux Mari,Mirpur Khas",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mirpur Khas",
        "longi": "69.03411493",
        "Lati": "25.54092408",
        "CusDesc": "Arfat Filling Station, Mirpur",
        "HSDPrice": "280.978",
        "Services": [],
        "CusCode": "2010203060001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Mirpur Khas",
        "PMGPrice": "274.908",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Kadhar Pull, Mandi Bahuddin",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mandi Bahauddin",
        "longi": "73.49015325",
        "Lati": "32.4361156",
        "CusDesc": "Al-Makkah Petroleum Services Mandi Bahauddin",
        "HSDPrice": "279.9714",
        "Services": [],
        "CusCode": "2010201230001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Mandi Bahauddin",
        "PMGPrice": "273.9014",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Dhudial Road, Chak Bali Khan, Rawalpindi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Chak Beli",
        "longi": "72.91628391",
        "Lati": "33.22565025",
        "CusDesc": "Chaudhry Habib Petroleum Services Chak Baili Rawat",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201240001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "NOUMANPURA BAGH City AJK",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bagh",
        "longi": "73.743799",
        "Lati": "33.973563",
        "CusDesc": "Akhtar Filling Station Bagh",
        "HSDPrice": "278.96",
        "Services": [],
        "CusCode": "2010201270001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-East",
        "Region": "Rawalpindi-2",
        "District": "Bagh",
        "PMGPrice": "272.89",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "22 KM Jaranwala, Faisalabad Road, Jaranwala Faisalabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Faisalabad",
        "longi": "73.29022005",
        "Lati": "31.35936615",
        "CusDesc": "Ribco Petroleum Services Jaranwala",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201290001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Faisalabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Main City Barnala",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Barnala",
        "longi": "74.24199387",
        "Lati": "32.87341946",
        "CusDesc": "Barnala Filling Station Barnala",
        "HSDPrice": "278.96",
        "Services": [],
        "CusCode": "2010201320001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Bhimber",
        "PMGPrice": "272.89",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "207 RB, Chak Jhumra Road, Gatti, Faisalabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Chak Jhumra",
        "longi": "73.1379953",
        "Lati": "31.4810079",
        "CusDesc": "Chattha Petroleum Services Faisalabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202540001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Faisalabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Shah Jhangir Road, Gujrat City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gujrat",
        "longi": "74.09605354",
        "Lati": "32.58209213",
        "CusDesc": "Al-Makkah Filling Station Gujrat City",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202570001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Gujrat",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Sargodha Road, Gujrat",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kang Channan",
        "longi": "73.83202493",
        "Lati": "32.47697621",
        "CusDesc": "Al-Rehman Filling Station Kang Chanan Gujrat",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200600001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Gujrat",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Plot # F-94 / A-1, Main State Avenue, Near Gulbai Bridge, Karachi.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Karachi",
        "longi": "66.97128028",
        "Lati": "24.87976827",
        "CusDesc": "Nadeem Filling Station, karachi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202930001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Karachi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khosko Badin Road, Badin",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Badin",
        "longi": "68.84981096",
        "Lati": "24.65964456",
        "CusDesc": "Arbab Jummo Abro Petroleum Service Badin",
        "HSDPrice": "281.3007",
        "Services": [],
        "CusCode": "2010202950001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Badin",
        "PMGPrice": "275.2307",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Distt Sadiqabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sadiqabad",
        "longi": "70.17499387",
        "Lati": "28.38002889",
        "CusDesc": "Irfanullah Petroleum Services, Sadiqabad",
        "HSDPrice": "281.7421",
        "Services": [],
        "CusCode": "2010203010001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Rahim Yar Khan",
        "PMGPrice": "275.6721",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Deh Shulam Hasan, Taluka Thatta, Thatta",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Thatta",
        "longi": "67.93881208",
        "Lati": "24.76960358",
        "CusDesc": "Ghosia-2 Petroleum Service, Thatta",
        "HSDPrice": "280.0522",
        "Services": [],
        "CusCode": "2010203040001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Thatta",
        "PMGPrice": "273.9822",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Near Naheed Khamboo Hospital, Mouza Berote Main RCD Road,Hub,Lasbella",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Hub",
        "longi": "66.8638967",
        "Lati": "25.04281667",
        "CusDesc": "Hub CNG & Filling Station Lasbella",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010203080001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Lasbella",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Jallo Park, Lahore",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "74.48252633",
        "Lati": "31.58231937",
        "CusDesc": "Hassan Jalal Filling Station Jalopark Lahore",
        "HSDPrice": "279.7995",
        "Services": [],
        "CusCode": "2010200550001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Lahore",
        "PMGPrice": "273.7295",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Chochak Road Kohla, Okara",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Okara",
        "longi": "73.54103878",
        "Lati": "31.01888563",
        "CusDesc": "Rai M. Ahmed Petroleum Services Okara",
        "HSDPrice": "279.9993",
        "Services": [],
        "CusCode": "2010200620001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Okara",
        "PMGPrice": "273.9293",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Kot Laloo Town Taluka Faiz Ganj Dist. Khairpur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Khairpur",
        "longi": "68.31363201",
        "Lati": "26.69094926",
        "CusDesc": "Pervez Dehri Filling Station Khairpur",
        "HSDPrice": "279.8482",
        "Services": [],
        "CusCode": "2010203090001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-DLP)",
        "Region": "Karachi",
        "District": "Khairpur",
        "PMGPrice": "273.7782",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "C 8/4, Main Mauripur Road, S.I.T.E. Karachi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Karachi",
        "longi": "66.97006389",
        "Lati": "24.87974758",
        "CusDesc": "Umer Filling & CNG Station, Mauripur",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202920001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Karachi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Baqrani Road, Larkana City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Larkana",
        "longi": "68.20922032",
        "Lati": "27.53493524",
        "CusDesc": "Waqar Filling Station, Larkana",
        "HSDPrice": "280.2958",
        "Services": [],
        "CusCode": "2010202900001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-SKP)",
        "Region": "Karachi",
        "District": "Larkana",
        "PMGPrice": "274.2258",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Opposite Premier Sugar Mills Mardan, Nowshera Mardan Road (N-45), Tehsil & Distt Mardan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mardan",
        "longi": "72.03144059",
        "Lati": "34.17459506",
        "CusDesc": "Q-Energy Filling Station Mardan",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202490001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Mardan",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Mouza Noor-e-Wali, Rahim Yar Khan by pass, Tehsil & District Rahim Yar Khan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rahim Yar Khan",
        "longi": "70.30394912",
        "Lati": "28.43650501",
        "CusDesc": "Al-Falah Filling Station  Rahim Yar Khan",
        "HSDPrice": "281.9805",
        "Services": [],
        "CusCode": "2010202760001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Rahim Yar Khan",
        "PMGPrice": "275.9105",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Sheikhupura Road, Jarranwala Faisalabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Faisalabad",
        "longi": "73.23808461",
        "Lati": "31.48371388",
        "CusDesc": "Kamboh Petroleum Services Jarranwala Faisalabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202370001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Faisalabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khyber Mehran Petroleum Services, Attock Petrol Pump, Rohri Bypass, Rohri",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rohri",
        "longi": "68.86929855",
        "Lati": "27.66865732",
        "CusDesc": "Khyber Mehran Petroleum Services, Rohri",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202860001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-SKP)",
        "Region": "Karachi",
        "District": "Sukkur",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Vehari Chowk, Multan City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Multan",
        "longi": "71.50862709",
        "Lati": "30.17461544",
        "CusDesc": "Talagang Petroleum Services Vehari Chowk Multan",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201980001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Multan",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "39-3 R, Akbar Road, Okara",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Okara",
        "longi": "73.3981964",
        "Lati": "30.81810871",
        "CusDesc": "Ittefaq Petroleum Services Okara",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201350001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Okara",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Kotri near DCO Office, Shewan Sharif, District, Jamshoro, Sindh",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sehwan Sharif",
        "longi": "67.86602631",
        "Lati": "26.39343379",
        "CusDesc": "Sikandar Petroleum Services Jamshoro",
        "HSDPrice": "279.9057",
        "Services": [],
        "CusCode": "2010203120001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-DLP)",
        "Region": "Karachi",
        "District": "Jamshoro",
        "PMGPrice": "273.8357",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Chunnian Patoki Road, Village Roosa Tiba",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Pattoki",
        "longi": "73.72886717",
        "Lati": "30.83617317",
        "CusDesc": "Ahbab Filling Station Pattoki",
        "HSDPrice": "280.0584",
        "Services": [],
        "CusCode": "2010200660001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Kasur",
        "PMGPrice": "273.9884",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Bajli Ghar Chowk, Narowal-Pasroor-Muridkay Road, District Narowal",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Narowal",
        "longi": "74.81375635",
        "Lati": "32.10595426",
        "CusDesc": "A.R. Filling Station Bijli Ghar Chowk Narowal",
        "HSDPrice": "280.4044",
        "Services": [],
        "CusCode": "2010202610001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Narowal",
        "PMGPrice": "274.3344",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "25 KM, Sahiwal - Arifwala Road, Adda Sabeel, Sahiwal",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sahiwal",
        "longi": "73.06007713",
        "Lati": "30.50123938",
        "CusDesc": "Marshal Petroleum Services Sahiwal",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202480001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Sahiwal",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Pir Mahal Toba Taik Singh",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Toba Tek Singh",
        "longi": "72.4397479",
        "Lati": "30.77819462",
        "CusDesc": "Sardar Petroleum Services Pir Mahal",
        "HSDPrice": "280.3926",
        "Services": [],
        "CusCode": "2010201340001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Toba Tek Sing",
        "PMGPrice": "274.3226",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Karlui Chowk, Opposite Pakistan Cement, Kalar Kahar-Choasaiden Shah Road, Kallar Kahar, Chakwal",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kallar Kahar",
        "longi": "72.74743214",
        "Lati": "32.75581539",
        "CusDesc": "Kahoon Vallay Filling Station Kallar Kahar",
        "HSDPrice": "280.4844",
        "Services": [],
        "CusCode": "2010202060001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "274.4144",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "National Highway, Hala Road, Hyderabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Hyderabad",
        "longi": "68.38392869",
        "Lati": "25.43843886",
        "CusDesc": "Al-Rehmat Waziristan Petroleum Services Hyderabad",
        "HSDPrice": "280.4998",
        "Services": [],
        "CusCode": "2010202810001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Hyderabad",
        "PMGPrice": "274.4298",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "By-pass Ghotki",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Ghotki",
        "longi": "69.31042135",
        "Lati": "28.01304363",
        "CusDesc": "Mehran Petroleum Service, Ghotki",
        "HSDPrice": "280.4761",
        "Services": [],
        "CusCode": "2010202830001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-SKP)",
        "Region": "Karachi",
        "District": "Ghotki",
        "PMGPrice": "274.4061",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Bypass Road, Near Bakra Mandi, Tando Allahyar.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Tando Allah Yar",
        "longi": "68.69860947",
        "Lati": "25.46686442",
        "CusDesc": "Madina Filling Station, Tando Allahyar",
        "HSDPrice": "280.7153",
        "Services": [],
        "CusCode": "2010202970001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Tando Allah Yar",
        "PMGPrice": "274.6453",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Plot # 37,A-2, Landhi  Industrial Area, Korangi, Karachi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Karachi",
        "longi": "67.19708204",
        "Lati": "24.8533242",
        "CusDesc": "Get n Fly Service Station, Landhi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010203000001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Karachi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Rani Pur Road,Taluka Taur,Shaheed Benazirabad, Nawab Shah",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Shaheed Benazir Abad",
        "longi": "68.304655",
        "Lati": "25.5645",
        "CusDesc": "Zohaib Gorchani Filling Station, Nawabshah",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010203070001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-DLP)",
        "Region": "Karachi",
        "District": "Shaheed Benazirabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "B-28, Phase 1, Qasimabad, Khyber Road, Oderolal, District Matiari, Hyderabad.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Oderolal",
        "longi": "68.562225",
        "Lati": "25.697231",
        "CusDesc": "Shan Petroleum Services Matiari",
        "HSDPrice": "280.2853",
        "Services": [],
        "CusCode": "2010203110001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Matiari",
        "PMGPrice": "274.2153",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Sandha Khan, New Second Ravi Bridge Approach Road,Lahore.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "74.27510306",
        "Lati": "31.57491015",
        "CusDesc": "Khalil Filling Station Sandha Khan Lahore",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202470001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Lahore",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Lahore- Sheikhupura Road, Hudhlathi, District Sheikhpura",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sheikhupura",
        "longi": "73.96239504",
        "Lati": "31.67956372",
        "CusDesc": "SAM CNG Filling Station Sheikhupura",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202530001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Sheikhupura",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Kharian - Jalalpur Jattian Road, Gujrat",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gujrat",
        "longi": "74.17284787",
        "Lati": "32.66802226",
        "CusDesc": "Al-Hakim Petroleum Services Gujrat",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202600001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Gujrat",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Ahmad Pur East Road Tehsil & District Bahawalpur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bahawalpur",
        "longi": "71.66271061",
        "Lati": "29.38603954",
        "CusDesc": "Allied Power Filling Station Bahawalpur",
        "HSDPrice": "280.4044",
        "Services": [],
        "CusCode": "2010202670001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Bahawalpur",
        "PMGPrice": "274.3344",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Faisalabad Road, Tehsil Jaranwala, Distt Faisalabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Faisalabad",
        "longi": "73.3752206",
        "Lati": "31.32861375",
        "CusDesc": "Dogar Filling Station Jaranwala",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202690001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Faisalabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Rawalpindi-Mukhad-Kohat Road, Opp: Police Station, Jand City, Attock",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "72.024265",
        "Lati": "33.438198",
        "CusDesc": "Hanif Qureshi Petroleum Services Jand City Attock",
        "HSDPrice": "280.5194",
        "Services": [],
        "CusCode": "2010202710001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi North",
        "Region": "Rawalpindi-1",
        "District": "Rawalpindi",
        "PMGPrice": "274.4494",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Gojra Bypass, Tehsil Gojra, District Toba Tek Singh.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gojra",
        "longi": "72.69977331",
        "Lati": "31.16138186",
        "CusDesc": "Habib Filling Station Gojra",
        "HSDPrice": "279.8392",
        "Services": [],
        "CusCode": "2010203270001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Toba Tek Sing",
        "PMGPrice": "273.7692",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Main G.T Road, Lowysum Bajor Khar",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bajaur Agency",
        "longi": "71.39809594",
        "Lati": "34.69881157",
        "CusDesc": "Jameel Petroleum Service Bajor",
        "HSDPrice": "281.378",
        "Services": [],
        "CusCode": "2010203410001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Bajaur Agency",
        "PMGPrice": "275.308",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "GT Road Juliani Gujrat",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gujrat",
        "longi": "74.01719525",
        "Lati": "32.62617102",
        "CusDesc": "Al-Aziz Petroleum Service Juliani Gujrat",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200350001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Gujrat",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Beto Road Mehar District Dadu",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Dadu",
        "longi": "67.83533245",
        "Lati": "27.17209651",
        "CusDesc": "M. Qasim Filling Station Dadu",
        "HSDPrice": "280.1667",
        "Services": [],
        "CusCode": "2010204400001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-DLP)",
        "Region": "Karachi",
        "District": "Dadu",
        "PMGPrice": "274.0967",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Near totli rise mills talkua khan pur dist shikarpur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Shikarpur",
        "longi": "68.72184947",
        "Lati": "28.00094621",
        "CusDesc": "Essa Filling Station Shikarpur",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204410001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-SKP)",
        "Region": "Karachi",
        "District": "Shikarpur",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Tehsil Gambat,District Khairpur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Khairpur",
        "longi": "68.53409886",
        "Lati": "27.35164544",
        "CusDesc": "Askari 8 F/s Khairpur Gambat (Project of AWT NTN # 0801477-9)",
        "HSDPrice": "280.2734",
        "Services": [],
        "CusCode": "2010204190001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-SKP)",
        "Region": "Karachi",
        "District": "Khairpur",
        "PMGPrice": "274.2034",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Dhoke Hassu, Rawalpindi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "73.02422673",
        "Lati": "33.62986511",
        "CusDesc": "Askari 9 F/s Dhoke Hassu Rawalpindi  (Project of AWT NTN # 0801477-9)",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204220001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-West",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Srinagar Road, Dhani Sayedian, Muzzafarabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Muzaffarabad",
        "longi": "73.493959",
        "Lati": "34.344219",
        "CusDesc": "Chaudhry Mumtaz Filling Station Muzzafarabad",
        "HSDPrice": "278.96",
        "Services": [],
        "CusCode": "2010201990001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-East",
        "Region": "Rawalpindi-2",
        "District": "Muzaffarabad",
        "PMGPrice": "272.89",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "College Road, Township, Lahore",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "74.29608196",
        "Lati": "31.44585999",
        "CusDesc": "Green Tech Filling Station Township Lahore",
        "HSDPrice": "279.8468",
        "Services": [],
        "CusCode": "2010204430001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Lahore",
        "PMGPrice": "273.7768",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Shareefabad, shawai Ada, Mardan - Swabi Road, Swabi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Swabi",
        "longi": "72.46143356",
        "Lati": "34.13535831",
        "CusDesc": "Amin Filling Station Swabi",
        "HSDPrice": "279.8992",
        "Services": [],
        "CusCode": "2010202750001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Swabi",
        "PMGPrice": "273.8292",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Village Mitho Khoso , Tando Adam District Sanghar",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Tando Adam",
        "longi": "68.66036385",
        "Lati": "25.77592867",
        "CusDesc": "Mehran-01 Filling Station Tando Adam",
        "HSDPrice": "280.3092",
        "Services": [],
        "CusCode": "2010204340001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-DLP)",
        "Region": "Karachi",
        "District": "Tando Adam City",
        "PMGPrice": "274.2392",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "General Bus Satnd Dera Ghazi Khan City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Dera Gazi Khan",
        "longi": "70.65193221",
        "Lati": "30.04702887",
        "CusDesc": "Al-Imran Filling Station D. G. Khan City",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204310001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Dera Ghazi Khan",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Vehari - Mailsi Road, Vehari",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Vehari",
        "longi": "72.26321027",
        "Lati": "29.85192137",
        "CusDesc": "New Naseem Sadiq Filling Station Vehari",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204380001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Vehari",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Bhakkar - Darya Khan - D.I Khan Road, Bhakkar",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bhakkar",
        "longi": "71.07279629",
        "Lati": "31.63395353",
        "CusDesc": "Jatial-2 Filling Station Bhakkar",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202770001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Bhakkar",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Misrial Road, Chur Rawalpindi Cantonment",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "73.00630689",
        "Lati": "33.60384106",
        "CusDesc": "RAJCO CNG & Filling Station Rawalpindi Cantt",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204130001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-West",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Plot # B-1, Sector 31-G,Mehran Town, Main Korangi Crossing Karachi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Karachi",
        "longi": "67.1032497",
        "Lati": "24.8203972",
        "CusDesc": "Classic CNG Filling Station Karachi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204170001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Karachi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Indus Highway Barda Bira Dara Adam Khel Boundry, Kohat Road, Peshawar",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Peshawar",
        "longi": "71.56306922",
        "Lati": "33.87101202",
        "CusDesc": "Indus Petroleum Services Peshawar",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200710001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Peshawar",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Shahra-e-Resham, Manshera",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mansehra",
        "longi": "73.217639",
        "Lati": "34.302288",
        "CusDesc": "Ghazi Kot Filling Station Mansehra",
        "HSDPrice": "280.8296",
        "Services": [],
        "CusCode": "2010202550001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi North",
        "Region": "Rawalpindi-1",
        "District": "Mansehra",
        "PMGPrice": "274.7596",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Ring Road Hazar Khwani",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Peshawar",
        "longi": "71.613767",
        "Lati": "34.0047889",
        "CusDesc": "Sheikh Abdul Qadir Jilani Filling Station Hazar Khwani PSH",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204070001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Peshawar",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khan Pur Adda, Rahim Yar Khan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rahim Yar Khan",
        "longi": "70.32579303",
        "Lati": "28.42902448",
        "CusDesc": "Askari 6 F/s (Project of AWT NTN # 0801477-9) Rahim Yar Khan",
        "HSDPrice": "281.9805",
        "Services": [],
        "CusCode": "2010204120001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Rahim Yar Khan",
        "PMGPrice": "275.9105",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Sakrand Bypass National Highway N-5, Near Nonari CNG, Distt- Nawabshah.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Shaheed Benazir Abad",
        "longi": "68.26186135",
        "Lati": "26.13616992",
        "CusDesc": "Makkah-1 Petroleum Services Skrand Bypass",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204200001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-DLP)",
        "Region": "Karachi",
        "District": "Shaheed Benazirabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Roshanwala Bypass, District Faisalabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Faisalabad",
        "longi": "73.02238405",
        "Lati": "31.39736294",
        "CusDesc": "Naveed Enterprises Petroleum FSD",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010203570001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Faisalabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Rawalpindi Kohat Road Fateh Jhang City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Fateh Jhang",
        "longi": "72.648643",
        "Lati": "33.571222",
        "CusDesc": "Askari 1 F/s Fateh Jhang City (Project of AWT NTN # 0801477-9)",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010203660001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi North",
        "Region": "Rawalpindi-1",
        "District": "Attock",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Sialkot Pasrur Road, Near Village Sahowali, Tehsil & District Sialkot",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sialkot",
        "longi": "74.59000513",
        "Lati": "32.41973356",
        "CusDesc": "Gujjar Filling Station (Sahowali) Sialkot",
        "HSDPrice": "280.1177",
        "Services": [],
        "CusCode": "2010203720001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Sialkot",
        "PMGPrice": "274.0477",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Ring Road, Peshawar",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Peshawar",
        "longi": "71.61960617",
        "Lati": "34.00990286",
        "CusDesc": "Falcon Filling Station Peshawar",
        "HSDPrice": "279.7744",
        "Services": [],
        "CusCode": "2010203730001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Peshawar",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Between Niazi & Hamza Street, Range Road, Rataamral, Rawalpindi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "73.01017329",
        "Lati": "33.60039063",
        "CusDesc": "Awan-3 Filling Station Rattaamral Rawalpindi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204210001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-West",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Tangi Road Rajjar Chowk Charsadda",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Charsadda",
        "longi": "71.75517842181762",
        "Lati": "34.16665374048567",
        "CusDesc": "Rajjar Filling Station Charsada",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010203210001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Charsadda",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Daowod Chorangi, Near UBL Bank, Landhi Industrial Area Landhi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Karachi",
        "longi": "67.21040994",
        "Lati": "24.84845163",
        "CusDesc": "Landhi Filling Station Karachi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204360001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Karachi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Sarhand Bypass District Ghotki",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Ghotki",
        "longi": "69.35108498",
        "Lati": "28.01404172",
        "CusDesc": "Lal Petroleum Service Ghotki",
        "HSDPrice": "280.5363",
        "Services": [],
        "CusCode": "2010204320001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-SKP)",
        "Region": "Karachi",
        "District": "Ghotki",
        "PMGPrice": "274.4663",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Matiari Bypass on National Highway (N-5) Near Wapda Colony, Grid station, District Matiari.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Matiari",
        "longi": "68.44158411",
        "Lati": "25.5865306",
        "CusDesc": "ZAM ZAM-2 Filling Station Matairi",
        "HSDPrice": "280.3683",
        "Services": [],
        "CusCode": "2010204440001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Matiari",
        "PMGPrice": "274.2983",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Peshawar Road, Sare-e-Kharbooza Near Tarnol, Islamabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Islamabad",
        "longi": "72.89213061",
        "Lati": "33.66245388",
        "CusDesc": "AR Traders Filling Station Tarnol",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010203800001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-West",
        "Region": "Rawalpindi-2",
        "District": "Islamabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Near Gulshan-e-Batool Colony, Bahawalnagar Road, Chishtian",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Chishtian",
        "longi": "72.87183166",
        "Lati": "29.80774759",
        "CusDesc": "Abu Bilal Petroleum Service Chishtian",
        "HSDPrice": "279.9777",
        "Services": [],
        "CusCode": "2010203640001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Bahawal Nagar",
        "PMGPrice": "273.9077",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Main Tamirgrah Road Chakdara Exit Tehsil Adenzai Lower Dir Swat",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Chakdara",
        "longi": "72.02823669",
        "Lati": "34.65807934",
        "CusDesc": "Haji Nawab Filling Station Chakdara",
        "HSDPrice": "280.4079",
        "Services": [],
        "CusCode": "2010203690001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Lower Dir",
        "PMGPrice": "274.3379",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Indus Highway Dara Faizu, Opposite Lucky Cement Factory, D.I.Khan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Dera Ismail Khan",
        "longi": "70.7236585",
        "Lati": "32.2684617",
        "CusDesc": "Muslim Wazirristan Filling Station D.I. Khan",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204450001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Dera Ismail Khan",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Main Bazar, Kot Addu City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Multan",
        "longi": "70.96610069",
        "Lati": "30.46082708",
        "CusDesc": "Al-Quresh CNG & Filling Station Kot Addu City",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204460001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Multan",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Railway Road, Sialkot",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sialkot",
        "longi": "74.54606384",
        "Lati": "32.49951358",
        "CusDesc": "Askari 4 F/s Sialkot (Project of AWT NTN # 0801477-9)",
        "HSDPrice": "280.0225",
        "Services": [],
        "CusCode": "2010204110001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Sialkot",
        "PMGPrice": "273.9525",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mirpur City, Azad Jammu Kashmir",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mirpur",
        "longi": "73.73703048",
        "Lati": "33.14934065",
        "CusDesc": "Askari 3 F/s Mirpur City (Project of AWT NTN # 0801477-9)",
        "HSDPrice": "278.96",
        "Services": [],
        "CusCode": "2010204100001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-East",
        "Region": "Rawalpindi-2",
        "District": "Mirpur",
        "PMGPrice": "272.89",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Shama Chowk, Sargodha",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sargodha",
        "longi": "72.67806351",
        "Lati": "32.08158029",
        "CusDesc": "Askari 5 F/s Sargodha (Project of AWT NTN # 0801477-9)",
        "HSDPrice": "280.0552",
        "Services": [],
        "CusCode": "2010204140001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Sargodha",
        "PMGPrice": "273.9852",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Moza Makanah, Jhang - Bhakkar Road, Tehsil 18-Hazari, District Jhang.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Jhang",
        "longi": "72.10433498",
        "Lati": "31.16009654",
        "CusDesc": "Tabarak Imran Filling Station 18 Hazari Jhang",
        "HSDPrice": "280.5125",
        "Services": [],
        "CusCode": "2010204090001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Jhang",
        "PMGPrice": "274.4425",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khanpur By-pass, Khanpur City, Rahim Yar Khan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rahim Yar Khan",
        "longi": "70.66441789",
        "Lati": "28.65504184",
        "CusDesc": "Tufail Filling Station Khanpur City (R.Y Khan)",
        "HSDPrice": "281.5505",
        "Services": [],
        "CusCode": "2010204270001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Rahim Yar Khan",
        "PMGPrice": "275.4805",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Chak Jano Kalan, Gujrat-Phalia-Manid Bahuddin Road, Tehsil Phalia, District Mandi Bahuddin",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mandi Bahauddin",
        "longi": "73.72743085",
        "Lati": "32.45137882",
        "CusDesc": "Jano Chak Filling Station Phalia",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010203880001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Mandi Bahauddin",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Near Metro Shopping Mall 1-11/4 Faqeer Aipee Road Islamabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Islamabad",
        "longi": "73.02531168",
        "Lati": "33.63824961",
        "CusDesc": "Natco Filling Station Faqeer Aipee Road Islamabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204300001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-West",
        "Region": "Rawalpindi-2",
        "District": "Islamabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Aliabad, Hunza, Gilgit",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Hunza-Nagar",
        "longi": "74.6096201",
        "Lati": "36.3043182",
        "CusDesc": "Silk Rout Filling Station Aliabad Hunza",
        "HSDPrice": "278.96",
        "Services": [],
        "CusCode": "2010201640001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi North",
        "Region": "Rawalpindi-1",
        "District": "Hunza",
        "PMGPrice": "272.89",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Shabqadar Road, Aguman Chowk Naghoman Charsada, Shabqadar",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Shab Qadar",
        "longi": "71.60922468",
        "Lati": "34.12919952",
        "CusDesc": "Al-Fakhar Filling Station Shabqadar",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200930001",
        "CNGPrice": "0",
        "Sub_Region": "Key Accounts - PSH",
        "Region": "Key Accounts - RWP",
        "District": "Charsadda",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Shamozi Zarakhela Swat",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Chakdara",
        "longi": "72.13287234",
        "Lati": "34.68199085",
        "CusDesc": "Morning Star Filling Station Swat",
        "HSDPrice": "280.551",
        "Services": [],
        "CusCode": "2010200460001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Lower Dir",
        "PMGPrice": "274.481",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Ghulam Muhammad Abad Faisalabad City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Faisalabad",
        "longi": "73.0372797",
        "Lati": "31.43540043",
        "CusDesc": "Rana Faiz CNG & Filling Station Faisalabad City",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204330001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Faisalabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Main Jamshoro Road, Near Ghoot/Village, Karan Khan Shoro, Main Jamshoro Road, Hyderabad City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Hyderabad",
        "longi": "68.33180398",
        "Lati": "25.43844492",
        "CusDesc": "Indus Filling Station Hyderabad City",
        "HSDPrice": "280.9295",
        "Services": [],
        "CusCode": "2010204490001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Hyderabad",
        "PMGPrice": "274.8595",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khushab - Rawalpindi Road, Khushab",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Khushab",
        "longi": "72.42857784",
        "Lati": "32.46839779",
        "CusDesc": "Nari Filling Station Khushab",
        "HSDPrice": "280.8822",
        "Services": [],
        "CusCode": "2010204280001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Khushab",
        "PMGPrice": "274.8122",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Rahim Yar Khan Bypass KLP Road",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rahim Yar Khan",
        "longi": "70.22736132",
        "Lati": "28.46597264",
        "CusDesc": "Asia Petroleum Service Rahim Yar Khan",
        "HSDPrice": "281.9092",
        "Services": [],
        "CusCode": "2010204350001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Rahim Yar Khan",
        "PMGPrice": "275.8392",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "University Road, Jamrod Road Peshawer",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Peshawar",
        "longi": "71.49202019",
        "Lati": "33.99821702",
        "CusDesc": "Gul Haji Filling Station Peshawar",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201110001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Peshawar",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Sector X-3,Plot # ST.2, Gulistan-E-Rizwan Lawn, Near Bank Al-Habib, Gulshan e Maymaar Karachi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Karachi",
        "longi": "67.09668025",
        "Lati": "25.00888714",
        "CusDesc": "Fahad Petroleum Services Karachi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204160001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Karachi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Masoom Shah Road, Multan City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Multan",
        "longi": "71.51021764",
        "Lati": "30.20843923",
        "CusDesc": "Moon Light Filling Station Multan City",
        "HSDPrice": "279.9133",
        "Services": [],
        "CusCode": "2010204370001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Multan",
        "PMGPrice": "273.8433",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "PSO,Plot D/6, Survey # 194, Deh Khari Lakhi, Gadap Town, Northern Bypass, Karachi.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Karachi",
        "longi": "67.0946297",
        "Lati": "25.08262065",
        "CusDesc": "Ajmer-2 Petroleum Services Karachi",
        "HSDPrice": "279.9276",
        "Services": [],
        "CusCode": "2010204470001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Karachi",
        "PMGPrice": "273.8576",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Ring Road Faisalabad City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Faisalabad",
        "longi": "73.22748587",
        "Lati": "31.42703545",
        "CusDesc": "Bismillah Petroleum Service Ring Road FSD",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204250001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Faisalabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Village Meeran Shah, North Waziristan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Miran Shah",
        "longi": "70.46858159",
        "Lati": "32.97011941",
        "CusDesc": "Chashma Meeran Shah Filling Station Meeran Shah",
        "HSDPrice": "282.7114",
        "Services": [],
        "CusCode": "2010201330001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "FATA",
        "PMGPrice": "276.6414",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Baloch House # 105/ 2, 24th Street, Khayanban-E-Muhafiz, Phase-6, DHA, Hala Naka Hyderabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Hyderabad",
        "longi": "68.39534551",
        "Lati": "25.46884163",
        "CusDesc": "Hammad Ullah Trucking Station Hyderabad",
        "HSDPrice": "280.5476",
        "Services": [],
        "CusCode": "2010204480001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Hyderabad",
        "PMGPrice": "274.4776",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "National Highway, Qaziahmed",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Shaheed Benazir Abad",
        "longi": "68.11250791",
        "Lati": "26.29749932",
        "CusDesc": "Askari 10 Filling Station Nawabshah (Project of AWT NTN # 0801477-9)",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204500001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-DLP)",
        "Region": "Karachi",
        "District": "Shaheed Benazirabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Chak No. 343, W.B. Basti Malok Road, Dunyapur, Distt Lodhrain",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Dunya Pur",
        "longi": "71.68562874",
        "Lati": "29.81641543",
        "CusDesc": "Yes Petroleum Services Lodhran",
        "HSDPrice": "279.9754",
        "Services": [],
        "CusCode": "2010202090001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Lodhran",
        "PMGPrice": "273.9054",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Deh Chamaro,District Sanghar",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sanghar",
        "longi": "68.93643156",
        "Lati": "26.03227603",
        "CusDesc": "Askari 7 F/s Sanghar (Project of AWT NTN # 0801477-9)",
        "HSDPrice": "280.4761",
        "Services": [],
        "CusCode": "2010204180001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-DLP)",
        "Region": "Karachi",
        "District": "Sanghar",
        "PMGPrice": "274.4061",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Dhullian Chowk Road Khaur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Khaur",
        "longi": "72.46173799",
        "Lati": "33.26943555",
        "CusDesc": "POL Khaur Filling Station Khaur Pindi Gheb",
        "HSDPrice": "280.214",
        "Services": [],
        "CusCode": "2010200960001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi North",
        "Region": "Rawalpindi-1",
        "District": "Attock",
        "PMGPrice": "274.144",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "NC-105 Plot#1, New sabzi mandi super highway ,Gulsha-e-maymaar",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Karachi",
        "longi": "67.14155227",
        "Lati": "24.99584314",
        "CusDesc": "Sardar Filling Station Karachi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204000001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Karachi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mutan - Lodrhan Road, Adda Makhdoom Aali, Tehsil Dunyapur, Distt Lodhran",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Dunya Pur",
        "longi": "71.55534446",
        "Lati": "29.79071577",
        "CusDesc": "Yes-II Petroleum Service Lodhran",
        "HSDPrice": "280.1482",
        "Services": [],
        "CusCode": "2010203590001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Lodhran",
        "PMGPrice": "274.0782",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Dalazak Road Peshawar City.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Peshawar",
        "longi": "71.5870522",
        "Lati": "34.01963854",
        "CusDesc": "Abaseen Filling Station Peshawar",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010203610001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Peshawar",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Super Highway (M-9) North Bound, Sonvalhar Tapo, Tehsil Kotri, District jamshoro.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Jamshoro",
        "longi": "68.22904453",
        "Lati": "25.37846939",
        "CusDesc": "Royal-01 Filling Station Jamshoro",
        "HSDPrice": "280.7153",
        "Services": [],
        "CusCode": "2010203510001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Jamshoro",
        "PMGPrice": "274.6453",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Multan - Mianwalli Road, 394 TDA, Golla Adda, Near Chowk Azam, Tehsil & Distt Layyah",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Layyah",
        "longi": "71.22459054",
        "Lati": "30.87925188",
        "CusDesc": "Bashir Awan Petroleum Services Chowk Azam",
        "HSDPrice": "280.2958",
        "Services": [],
        "CusCode": "2010201920001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Layyah",
        "PMGPrice": "274.2258",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Main Super Highway 48 Km, Kathore, Karachi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Karachi",
        "longi": "67.38915503",
        "Lati": "25.02663991",
        "CusDesc": "Al-Hafiz Petroleum Services Karachi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202850001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Karachi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "NORTHERN BY-PASS, OPPOSITE INTERCITY BUS TERMINAL, BALDIA TOWN, KARACHI.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Karachi",
        "longi": "66.92342028",
        "Lati": "24.95814974",
        "CusDesc": "Bahria Filling Station Karachi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204030001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Karachi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Kot Fateh Khan, Between Km No.62/63, At Mouza Gagan On - Kohat Road, Tehsil Fateh Jhang Distt Attock",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Fateh Jhang",
        "longi": "72.487933",
        "Lati": "33.520934",
        "CusDesc": "Sardar Balli Khan Filling Station Fateh Jhang",
        "HSDPrice": "279.931",
        "Services": [],
        "CusCode": "2010203820001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi North",
        "Region": "Rawalpindi-1",
        "District": "Attock",
        "PMGPrice": "273.861",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "On Sialkot Head Merala Road Sialkot.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Head Marala",
        "longi": "74.50367689",
        "Lati": "32.53533913",
        "CusDesc": "Majeed Filling Station Sialkot",
        "HSDPrice": "279.9529",
        "Services": [],
        "CusCode": "2010203750001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Sialkot",
        "PMGPrice": "273.8829",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Bypass Exit at Daewoo Bus Stand, Chak # 135-A/9-I, Sahiwal",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sahiwal",
        "longi": "73.07511091",
        "Lati": "30.64485821",
        "CusDesc": "Royal Petroleum Services Sahiwal",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202640001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Sahiwal",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Farooqia HMC Road, Taxila, Rawalpindi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Taxila",
        "longi": "72.81808287",
        "Lati": "33.79496135",
        "CusDesc": "Al-Barket CNG / Filling Station Taxila",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010203740001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-West",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "KLP Road at Janpur City Rahim Yar Khan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rahim Yar Khan",
        "longi": "70.79832047",
        "Lati": "29.01215695",
        "CusDesc": "Five Star Filling Station Janpur City",
        "HSDPrice": "280.9188",
        "Services": [],
        "CusCode": "2010203780001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Rahim Yar Khan",
        "PMGPrice": "274.8488",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Sassi Toll Plaza NHA District Thatta",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Thatta",
        "longi": "67.4539344",
        "Lati": "24.83656634",
        "CusDesc": "Khilji Filling Station Thatta",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010203950001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Thatta",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Malakand Top, Swat",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Malakand",
        "longi": "71.93116486",
        "Lati": "34.56460183",
        "CusDesc": "Sun Shine Filling Station Malakand Top",
        "HSDPrice": "280.2176",
        "Services": [],
        "CusCode": "2010203680001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Malakand",
        "PMGPrice": "274.1476",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Lahore-Kasur Road, Mouza Qutba, Tehsil & District Kasur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kasur",
        "longi": "74.35634181",
        "Lati": "31.03181119",
        "CusDesc": "Maqbool Filling Station Mouza Qutba (Kasur)",
        "HSDPrice": "280.4718",
        "Services": [],
        "CusCode": "2010203520001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Kasur",
        "PMGPrice": "274.4018",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Zafarullah Khan Road Khanewal",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Khanewal",
        "longi": "71.92205071",
        "Lati": "30.3124682",
        "CusDesc": "A-One Petroleum Services Zafarullah Road Khanewal",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201120001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Khanewal",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Provincial Highway Mandra Chakwal Road, Jatli, Gujar Khan, Rawalpindi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gujar Khan",
        "longi": "73.12232852",
        "Lati": "33.22971241",
        "CusDesc": "Al-Hamad Filling Station Jatli",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010203810001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "I. J Principle Road, Mouza Chur Sulemanabad, Rawalpindi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "73.00746694207191",
        "Lati": "33.621690862606556",
        "CusDesc": "Ali Petroleum Service Mouza Chur Sulemanabad (RWP)",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010203530001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-West",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Sargodha Mandi bahhaudin Road, Warriyat Tehsit Malik Wal Disst. Mandi Bahauddin",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mandi Bahauddin",
        "longi": "73.173486",
        "Lati": "32.397555",
        "CusDesc": "Al-Hayat Petroleum Services Mandi Bahauddin",
        "HSDPrice": "280.2621",
        "Services": [],
        "CusCode": "2010200820001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Mandi Bahauddin",
        "PMGPrice": "274.1921",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Qila Dewan Singh in K.M No 65 Kasur Khaddian Depalpur Road Teh. Depalpur Distt. OKARA",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Depalpur",
        "longi": "73.89106",
        "Lati": "30.806761",
        "CusDesc": "Al-Awan Petroleum Service Depalpur",
        "HSDPrice": "280.2618",
        "Services": [],
        "CusCode": "2010200280001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Okara",
        "PMGPrice": "274.1918",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Railway Road Dunyapur City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Dunya Pur",
        "longi": "71.73220396",
        "Lati": "29.80445434",
        "CusDesc": "Yes 1 Petroleum Service Dunyapur City",
        "HSDPrice": "279.9188",
        "Services": [],
        "CusCode": "2010204230001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Lodhran",
        "PMGPrice": "273.8488",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Canal Bank Lahore",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "74.22618762",
        "Lati": "31.45624936",
        "CusDesc": "U & S Filling Station Lahore",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204260001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Lahore",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "National Highway, Bhriya City, District Naushero Feroz",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bhirya",
        "longi": "68.19612443",
        "Lati": "26.92873249",
        "CusDesc": "Ayan Petroleum Service Naushero Feroz",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010203960001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-DLP)",
        "Region": "Karachi",
        "District": "Nowsheraferoz",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Korangi No 5, Plot No. ST-16, 35 E, Main Korangi Road, Karachi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Karachi",
        "longi": "67.1617114",
        "Lati": "24.8286229",
        "CusDesc": "Khalid Filling Station Karachi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010203990001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Karachi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "F-748-O,Textile Avenue, Near Jamaia Banoria, S.I.T.E. Police Station, Karachi.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Karachi",
        "longi": "66.99436739",
        "Lati": "24.90529317",
        "CusDesc": "Al Ain Filling Station Karachi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204010001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Karachi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Main G.T Road, Near Kala Shah Kaku Interchange, Toward Lahore, Ferozwala, Lahore",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sheikhupura",
        "longi": "74.28297669",
        "Lati": "31.6559785",
        "CusDesc": "Malik CNG & Filling Station Feroz Wala",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010203600001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Sheikhupura",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "1547-1548 SB, Opposite Kohinoor Mill, Main Peshawar Road, Near Quied - e Azam Hospital, Golra Chowk,",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "72.97665775",
        "Lati": "33.6222269",
        "CusDesc": "Khan Badshah Filling Station Rawalpindi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010203630001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-West",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Akhtar Bad, Main G. T Road, Teh Ranala Khurd Distt Okara",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Okara",
        "longi": "73.66173953",
        "Lati": "30.91092726",
        "CusDesc": "Jhulay Lal Petroleum Services Okara",
        "HSDPrice": "280.7825",
        "Services": [],
        "CusCode": "2010201220001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Okara",
        "PMGPrice": "274.7125",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Deh Kinarokakohe, Indus Highway bypass Road, Taluke Mehar, Distt Dadu",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Dadu",
        "longi": "67.80240163",
        "Lati": "27.16892282",
        "CusDesc": "Darvi Filling Station Taluke Mehar (Dadu)",
        "HSDPrice": "280.2495",
        "Services": [],
        "CusCode": "2010203030001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-DLP)",
        "Region": "Karachi",
        "District": "Dadu",
        "PMGPrice": "274.1795",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mandra Chakwal Road, Jatli Bus Stand, Tehsil Gujar Khan, Distt. Rawalpindi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Jatli",
        "longi": "73.09462801",
        "Lati": "33.19857896",
        "CusDesc": "Al-Rehman Filling Station Jatli Gujar Khan",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200730001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Plot No. 501, Deh Marri, Taluka Moro & District Nawabshah",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Nawabshah",
        "longi": "67.98385978",
        "Lati": "26.60874753",
        "CusDesc": "Jamali Trucking Station Nawabshah",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010203970001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-DLP)",
        "Region": "Karachi",
        "District": "Nowsheraferoz",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "G. T Road, Near Sowan Adda, Rawalpindi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "73.10521334",
        "Lati": "33.54353186",
        "CusDesc": "Al-Basit CNG/Filling Station Sowan Adda Rawalpindi",
        "HSDPrice": "279.7743",
        "Services": [
            {
                "ServiceCode": "001",
                "ServiceDes": "Tyre Shop"
            },
            {
                "ServiceCode": "002",
                "ServiceDes": "Tuck Shop"
            }
        ],
        "CusCode": "2010203620001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-Local",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Kahuta Road, Near Kak Bridge, Islamabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Islamabad",
        "longi": "73.18251595",
        "Lati": "33.5444909",
        "CusDesc": "Attock Quick Filling Station Kak Bridge Islamabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010203700001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-Local",
        "Region": "Rawalpindi-2",
        "District": "Islamabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "N-5 (GT Road), near Harro Toll Plaza, District Attock",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Attock",
        "longi": "72.5310798",
        "Lati": "33.82515793",
        "CusDesc": "Tiger CNG Filling Staton Attock",
        "HSDPrice": "279.9604",
        "Services": [],
        "CusCode": "2010203760001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi North",
        "Region": "Rawalpindi-1",
        "District": "Attock",
        "PMGPrice": "273.8904",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Kallar Syedan Road, Darkal-Memori, Tehsil Kallar Syedan District Rawalpindi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "73.36727992",
        "Lati": "33.42438329",
        "CusDesc": "Saif Ullah Petroleum Services Kallar Syedan",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010203830001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-East",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Model Town Extension, Main Road, Faisal Town, Lahore.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "74.30733517",
        "Lati": "31.48170365",
        "CusDesc": "Farooq Filling/CNG Station Lahore",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010203790001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Lahore",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Samundari Road, Jahangir Mor Faisalabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Faisalabad",
        "longi": "73.001148",
        "Lati": "31.255536",
        "CusDesc": "Kasana Petroleum Services Jahangir Mor Faisalabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010201180001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Faisalabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Rawalpindi Road, Chakwal",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Chakwal",
        "longi": "72.86287308",
        "Lati": "32.95199072",
        "CusDesc": "Al-Malik Filling Station Chakwal",
        "HSDPrice": "280.1111",
        "Services": [],
        "CusCode": "2010201200001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Chakwal",
        "PMGPrice": "274.0411",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Abbas Pur Bypass, Kahuta-Rawalpindi Road, Tehsil Abbas Pur, Distt Punch",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Abbas Pur",
        "longi": "73.9815782",
        "Lati": "33.81591478",
        "CusDesc": "Al-Hasham Filling Station Abbaspur Punch",
        "HSDPrice": "278.96",
        "Services": [],
        "CusCode": "2010202780001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-East",
        "Region": "Rawalpindi-2",
        "District": "Punch",
        "PMGPrice": "272.89",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Faisalabad Road, Jhang City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Jhang",
        "longi": "72.33420834",
        "Lati": "31.27844159",
        "CusDesc": "Akbar Filling Station Jhang City",
        "HSDPrice": "280.1171",
        "Services": [],
        "CusCode": "2010202790001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Jhang",
        "PMGPrice": "274.0471",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "National Highway N-5 NaushehroFeroz Bypass",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Naushehro Feroze",
        "longi": "68.10341388",
        "Lati": "26.83766318",
        "CusDesc": "Sohail Asghar Petroleum Service NaushehroFeroz",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204050001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-DLP)",
        "Region": "Karachi",
        "District": "Nowsheraferoz",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Near Natha Khan Bridge  Main Shahrah-e-Faisal,Karachi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Karachi",
        "longi": "67.14397028",
        "Lati": "24.8871275",
        "CusDesc": "Zam Zam Filling & CNG Station Karachi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204020001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Karachi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "19KM, Chak No. 70 J.B Near bypass, Jhang Road, Faisalabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Faisalabad",
        "longi": "72.9013145",
        "Lati": "31.36154772",
        "CusDesc": "Golden Petroleum Services Faisalabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202260001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Faisalabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Katchery Chowk Towards Kotla on Bhimber Road, Gujrat",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "74.07865807",
        "Lati": "32.62359011",
        "CusDesc": "Boken Filling Station Gujrat",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202560001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Rawalpindi Road (G.T Road) Chamkani, Sardar Garhi, Peshawar",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Peshawar",
        "longi": "71.64145276",
        "Lati": "34.01966077",
        "CusDesc": "Highway Petroleum Services Peshawar",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010202290001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Peshawar",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Sat Sira Chowk Mandi Bahauddin",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mandi Bahauddin",
        "longi": "73.4774597",
        "Lati": "32.57262978",
        "CusDesc": "Al-Janat Petroleum Services Mandi Bahuddin",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200580001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Mandi Bahauddin",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Ahmed Pur Sharqia Bypass, KLP Road, Ahmed Pur Sharqia",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bahawalpur",
        "longi": "71.24437988",
        "Lati": "29.13569722",
        "CusDesc": "Ahmed Petroleum Services Ahmed Pur Sharqia",
        "HSDPrice": "280.8381",
        "Services": [],
        "CusCode": "2010201480001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Bahawalpur",
        "PMGPrice": "274.7681",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "C/o Captain Gulistan Khan G.T. Road Tehsil Sohawal Distt. Jhelum",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sohawa",
        "longi": "73.42489243",
        "Lati": "33.12978089",
        "CusDesc": "Aqra Filling Station Sohawa (Sohawa) Jhelum",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010200340001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-Local",
        "Region": "Rawalpindi-2",
        "District": "Jhelum",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Main Odigram Mingawarah Swat Road.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Swat",
        "longi": "72.29321346",
        "Lati": "34.74851751",
        "CusDesc": "Al-Noor Filling Station Odigram",
        "HSDPrice": "280.7666",
        "Services": [],
        "CusCode": "2010200030001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Swat",
        "PMGPrice": "274.6966",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Survey No. 197/7-13,Deh:Ratodero,Taluka Ratodero District Larkana Sindh",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Larkana",
        "longi": "68.29431608",
        "Lati": "27.7913146",
        "CusDesc": "Makkah Petroleum Services Larkana",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010203980001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-SKP)",
        "Region": "Karachi",
        "District": "Larkana",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Opposite Police Station, Kaloor Kot, Bhakkar",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bhakkar",
        "longi": "71.28590584",
        "Lati": "32.1564455",
        "CusDesc": "Al Raza Hattar Filling Station Bhakkar",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204040001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Bhakkar",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Vehari - Burewala Road, Tehsil & District Vehari",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Vehari",
        "longi": "72.46829063",
        "Lati": "30.08615246",
        "CusDesc": "Zam Zam Filling Station Vehari",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010203710001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Vehari",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Lahore-Kasur Road, Village Jullukey, Lahore",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "74.38997939",
        "Lati": "31.31897596",
        "CusDesc": "Atta Filling Station Jullukey (Lahore)",
        "HSDPrice": "279.9364",
        "Services": [],
        "CusCode": "2010203140001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Lahore",
        "PMGPrice": "273.8664",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Karakuram Highway, Main Bazar, Besham City Distt. Shangla",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Besham",
        "longi": "72.87145212",
        "Lati": "34.91750208",
        "CusDesc": "IMEX Associates",
        "HSDPrice": "283.2357",
        "Services": [],
        "CusCode": "2010203850001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi North",
        "Region": "Rawalpindi-1",
        "District": "Shangla",
        "PMGPrice": "277.1657",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Ghulam Muhammad Chanar, Main KLP Road, Chowk Nurpur Nouranga, Distt Bahawalpur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bahawalpur",
        "longi": "71.42702088",
        "Lati": "29.22021269",
        "CusDesc": "Abbasi Filling Station Nurpur Nouranga (Bahawalpur)",
        "HSDPrice": "280.7029",
        "Services": [],
        "CusCode": "2010203890001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Bahawalpur",
        "PMGPrice": "274.6329",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Abbotabad Road, Shahia",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Shahia",
        "longi": "72.76297018",
        "Lati": "33.87904489",
        "CusDesc": "Malik Petroleum Service Shahia",
        "HSDPrice": "279.8733",
        "Services": [],
        "CusCode": "2010203910001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi North",
        "Region": "Rawalpindi-1",
        "District": "Haripur",
        "PMGPrice": "273.8033",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Sohawa Bulani, Near Sath Sira Chowk, Tehsil & District Mandi Bahuddin",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mandi Bahauddin",
        "longi": "73.4703438",
        "Lati": "32.5555435",
        "CusDesc": "Gondal Bar Filling Station Mandi Bahuddin",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010203930001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Mandi Bahauddin",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Besham-Khawazakhela-Mingora Road, Tehsil Al-Puri, District Shangla",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Al-Puri",
        "longi": "72.63277655",
        "Lati": "34.91729411",
        "CusDesc": "Saad-2 Filling Station Al-Puri Shangla",
        "HSDPrice": "283.8814",
        "Services": [],
        "CusCode": "2010202190001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Shangla",
        "PMGPrice": "277.8114",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Daira Adda, Multan City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Multan",
        "longi": "71.45201236",
        "Lati": "30.19029019",
        "CusDesc": "City Fuelers Multan",
        "HSDPrice": "279.84",
        "Services": [],
        "CusCode": "2010203860001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Multan",
        "PMGPrice": "273.77",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Lahore-Faisalabad-Jhang-Bhakkar-Multan Road, Tehsil & Distt Jhang",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Faisalabad",
        "longi": "72.24733964",
        "Lati": "31.18231523",
        "CusDesc": "Khan Petroleum Service Jhang",
        "HSDPrice": "280.182",
        "Services": [],
        "CusCode": "2010203870001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Faisalabad",
        "PMGPrice": "274.112",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Ghulwan Awal, Alipur - Muzaffar Garh Road,  Tehsil Ali Pur, Muzaffar Garh",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Muzaffargarh",
        "longi": "70.92854038",
        "Lati": "29.40584063",
        "CusDesc": "Al-Wasey Power Point Alipur",
        "HSDPrice": "280.1551",
        "Services": [],
        "CusCode": "2010203900001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Muzaffargarh",
        "PMGPrice": "274.0851",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Palandri City, Near Model Pilot School, Palandri, Tehsil & Distrcit Palandri",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Palandri",
        "longi": "73.6843767",
        "Lati": "33.721369",
        "CusDesc": "Dewa Filling Station Palandri",
        "HSDPrice": "278.96",
        "Services": [],
        "CusCode": "2010203920001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-East",
        "Region": "Rawalpindi-2",
        "District": "Rawalakot",
        "PMGPrice": "272.89",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Jhelum - Pind Dadan Khan Road, Jhelum",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Jhelum",
        "longi": "73.61445084",
        "Lati": "32.8822902",
        "CusDesc": "Dewan Filling Station Jhelum",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010203650001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Jhelum",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Gakhar CNG, Jhangi Syedan, Peshawar Road, Islamabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Jhangi Syedan",
        "longi": "72.92600155",
        "Lati": "33.63921988",
        "CusDesc": "Gakhar CNG/Filling Station Jhangi Syedan Islamabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010203670001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-West",
        "Region": "Rawalpindi-2",
        "District": "Islamabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Mustafabad, 17 KM From Kasur, Tehsil & District Kasur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "74.41493735",
        "Lati": "31.26616787",
        "CusDesc": "Ch. Shoukat Sindhu Filling Station Kasur",
        "HSDPrice": "280.0055",
        "Services": [],
        "CusCode": "2010204560001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Lahore",
        "PMGPrice": "273.9355",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Depalpur, Kasur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kasur",
        "longi": "74.46900398",
        "Lati": "31.10516413",
        "CusDesc": "Abdullah Filling Station Kasur",
        "HSDPrice": "280.2285",
        "Services": [],
        "CusCode": "2010204520001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Kasur",
        "PMGPrice": "274.1585",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Talrai Kalan, Islamabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Islamabad",
        "longi": "73.15114751",
        "Lati": "33.63985629",
        "CusDesc": "Al-Mehrban & Sons Islamabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204540001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-Local",
        "Region": "Rawalpindi-2",
        "District": "Islamabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Cantonment Road, Shorkot",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Faisalabad",
        "longi": "72.08921403",
        "Lati": "30.82479048",
        "CusDesc": "Rehmat Filling Station Shorkot",
        "HSDPrice": "280.7628",
        "Services": [],
        "CusCode": "2010204550001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Faisalabad",
        "PMGPrice": "274.6928",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Odhrewal, Chakwal-Talagang Road.Chakwal",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Chakwal",
        "longi": "72.82301679",
        "Lati": "32.93137291",
        "CusDesc": "Global CNG Petroleum Service Chakwal",
        "HSDPrice": "280.1456",
        "Services": [],
        "CusCode": "2010204530001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Chakwal",
        "PMGPrice": "274.0756",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Zandani Village Daraban Road-Zhob Road, Dera Imail Khan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Dera Ismail Khan",
        "longi": "70.89210793",
        "Lati": "31.81042571",
        "CusDesc": "ZAM Filling Station Dera Ismail Khan",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204830001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Dera Ismail Khan",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Golra Sharif road Sector E-11 Islamabad.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Islamabad",
        "longi": "72.9758665",
        "Lati": "33.68810871",
        "CusDesc": "Gillani Petroleum Services E-11 Islamabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204690001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-West",
        "Region": "Rawalpindi-2",
        "District": "Islamabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Small Industrial Estate Road, Faisalabad City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Faisalabad",
        "longi": "73.06849122",
        "Lati": "31.47043712",
        "CusDesc": "Madni International Faisalabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204590001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Faisalabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Corner of Mangla Bypass, GT Road, Dina City, District Jehlum",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Jhelum",
        "longi": "73.61914873",
        "Lati": "33.02265171",
        "CusDesc": "Dina Mangla Bypass Filling Station Jehlum",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204650001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Jhelum",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "G. T. ROAD Mardan - Nowshera",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mardan",
        "longi": "72.01763257",
        "Lati": "34.10921923",
        "CusDesc": "Green CNG & Filling Station Mardan",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204720001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Mardan",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "District Mitiari post office,Khyber main national  Hyderabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Matiari",
        "longi": "68.50022256",
        "Lati": "25.6682462",
        "CusDesc": "Akhund Petroleum Service Mitiari",
        "HSDPrice": "280.3339",
        "Services": [],
        "CusCode": "2010204860001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Matiari",
        "PMGPrice": "274.2639",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Main Barki Road, Lahore City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "74.4469589",
        "Lati": "31.52617513",
        "CusDesc": "Mashallah CNG & Filling Station Barki Road Lahore",
        "HSDPrice": "279.8073",
        "Services": [],
        "CusCode": "2010204840001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Lahore",
        "PMGPrice": "273.7373",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Jhang Chinot Road, Chak Shikhana, jhang",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Jhang",
        "longi": "72.38979444",
        "Lati": "31.37165941",
        "CusDesc": "Ahad Filling Station Chinot Road Jhang",
        "HSDPrice": "280.1893",
        "Services": [],
        "CusCode": "2010204870001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Jhang",
        "PMGPrice": "274.1193",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Main Adiala Road Rawalpindi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "73.05397242",
        "Lati": "33.5445032",
        "CusDesc": "Mashallah CNG Filling Station Rawalpindi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204600001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-Local",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khurram Colony, Muslim Town, Band Khanna Road, Rawalpindi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "73.09606969",
        "Lati": "33.6273582",
        "CusDesc": "Sultan Petroleum Services Muslim Town Rawalpindi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204790001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-Local",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Ntaional highway sextor 22/C Shah Latif town",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Karachi",
        "longi": "67.27699175",
        "Lati": "24.86008998",
        "CusDesc": "Kangore Filling Station",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204670001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Karachi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "GT Road, DI Khan, Bannu",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bannu",
        "longi": "70.63586175",
        "Lati": "32.96383393",
        "CusDesc": "Zahir Filling station Bannu",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204630001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Bannu",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Balkasar, Tehsil and District Chakwal",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Chakwal",
        "longi": "72.6757139",
        "Lati": "32.9389041",
        "CusDesc": "Fine Fuel CNG Filling Station Chakwal",
        "HSDPrice": "280.3292",
        "Services": [],
        "CusCode": "2010204770001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Chakwal",
        "PMGPrice": "274.2592",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Pull Bagar Road, Abdul Hakeem City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Khanewal",
        "longi": "72.11268067",
        "Lati": "30.55468135",
        "CusDesc": "Al-Noor Petroleum Service Abdul Hakeem City",
        "HSDPrice": "279.8711",
        "Services": [],
        "CusCode": "2010204700001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Khanewal",
        "PMGPrice": "273.8011",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Chowk Metla Dunyapur Lodhran Road District Vehari",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Vehari",
        "longi": "71.81626707",
        "Lati": "30.00164937",
        "CusDesc": "Al - Wali Petroleum Service Vehari",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204750001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Vehari",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Chowk Aziz Hotel, Multan City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Multan",
        "longi": "71.43934429",
        "Lati": "30.18128861",
        "CusDesc": "Askari 12 F/s (Project of AWT NTN # 0801477-9) Multan",
        "HSDPrice": "279.8206",
        "Services": [],
        "CusCode": "2010204570001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Multan",
        "PMGPrice": "273.7506",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Jhang-Chiniot Road, Tehsil Bhawana, District Chiniot",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Faisalabad",
        "longi": "72.62136564",
        "Lati": "31.54762519",
        "CusDesc": "Ali Mustafa Filling Station Chinot",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204660001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Faisalabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Vehari Road Opposite Fatima Colony Multan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Multan",
        "longi": "71.51625529",
        "Lati": "30.16968099",
        "CusDesc": "Mian Petroleum & CNG Filling Station Multan",
        "HSDPrice": "279.8704",
        "Services": [],
        "CusCode": "2010204780001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Multan",
        "PMGPrice": "273.8004",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Phool Nagar- Jaranwala Road, Tehsil Pattoki District Kasur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kasur",
        "longi": "73.9159593",
        "Lati": "31.2004305",
        "CusDesc": "Al-Badar Filling Station Kasur",
        "HSDPrice": "280.2575",
        "Services": [],
        "CusCode": "2010204580001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Kasur",
        "PMGPrice": "274.1875",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Swat Exit Towards Swat",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Swat",
        "longi": "72.47463405",
        "Lati": "34.48576169",
        "CusDesc": "SS Filling Station Swat",
        "HSDPrice": "280.6332",
        "Services": [],
        "CusCode": "2010204610001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Swat",
        "PMGPrice": "274.5632",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Halani Bus Stang National Highway Halani",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Naushehro Feroze",
        "longi": "68.34199101",
        "Lati": "27.11255337",
        "CusDesc": "Al-Rehman Filling Station Sukkur",
        "HSDPrice": "280.0602",
        "Services": [],
        "CusCode": "2010204760001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-DLP)",
        "Region": "Karachi",
        "District": "Nowsheraferoz",
        "PMGPrice": "273.9902",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Shahi Road, Mouza Kot Samaba, Tehsil & District Rahim Yar Khan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rahim Yar Khan",
        "longi": "70.47518402",
        "Lati": "28.54844284",
        "CusDesc": "Shaffay Petroleum Service Rahim Yar Khan",
        "HSDPrice": "282.2079",
        "Services": [],
        "CusCode": "2010204740001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Rahim Yar Khan",
        "PMGPrice": "276.1379",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Memon Muhallah Nindo Tehsil and District Badin",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Badin",
        "longi": "69.12154555",
        "Lati": "24.6392085",
        "CusDesc": "Ahmed Petroleum Service Karachi",
        "HSDPrice": "281.6707",
        "Services": [],
        "CusCode": "2010204800001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Badin",
        "PMGPrice": "275.6007",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khushab-Mianwali Road Tehsil and District Khushab",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Khushab",
        "longi": "72.06971839",
        "Lati": "32.29850679",
        "CusDesc": "F. K. Tiwana Peteroleum Service khushab",
        "HSDPrice": "280.9295",
        "Services": [],
        "CusCode": "2010204810001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Khushab",
        "PMGPrice": "274.8595",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mamukajan-Muridwala Road Tehsil Tandianwala District Faisalabad.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Faisalabad",
        "longi": "72.80108973",
        "Lati": "30.82048203",
        "CusDesc": "Hassan Arshad Petroleum Service Faisalabad",
        "HSDPrice": "280.0251",
        "Services": [],
        "CusCode": "2010204620001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Faisalabad",
        "PMGPrice": "273.9551",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Plot # 14, Main Super Highway, Nooriabad.  Hyderabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Jamshoro",
        "longi": "67.81241566",
        "Lati": "25.18014849",
        "CusDesc": "Dua CNG & Filling Station Hyderabad",
        "HSDPrice": "280.1893",
        "Services": [],
        "CusCode": "2010204680001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Jamshoro",
        "PMGPrice": "274.1193",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "KLP Road Fatehpur Kamal District Rahim Yar Khan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rahim Yar Khan",
        "longi": "70.59623212",
        "Lati": "28.85306706",
        "CusDesc": "Universal Petroleum Service Rahim Yar Khan",
        "HSDPrice": "281.3601",
        "Services": [],
        "CusCode": "2010204820001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Rahim Yar Khan",
        "PMGPrice": "275.2901",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "National Highway District Malir Near Gulshan-e-Hadeed Karachi City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Karachi",
        "longi": "67.38945544",
        "Lati": "24.86464085",
        "CusDesc": "Shah Bhitai Filling Station Karachi City",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204890001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Karachi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mirpur Bathoro District Sajawal Sub District and town of Thatta.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Thatta",
        "longi": "68.25757384",
        "Lati": "24.72752779",
        "CusDesc": "Al-Meezan Filling Station Thatta",
        "HSDPrice": "280.6079",
        "Services": [],
        "CusCode": "2010204900001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Thatta",
        "PMGPrice": "274.5379",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Wazirabad Sialkot Road, Wazirabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gujranwala",
        "longi": "74.17860523",
        "Lati": "32.45027089",
        "CusDesc": "Khokhar Petroleum Service Wazirabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205030001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Gujranwala",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "G.T Road, Tehsil Ferozewala, District Sheikhupura",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sheikhupura",
        "longi": "74.27876428",
        "Lati": "31.67039767",
        "CusDesc": "Green Fuel CNG & Filling Station Sheikhupura",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205070001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Sheikhupura",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "20 KM Kashmore Road Indus Highway Rajanpur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rajan Pur",
        "longi": "70.270339",
        "Lati": "28.940027",
        "CusDesc": "Quswa Power Point Rajanpur",
        "HSDPrice": "281.1087",
        "Services": [],
        "CusCode": "2010205090001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Rajanpur",
        "PMGPrice": "275.0387",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Main G.T Road Haroonabad City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bahawalpur",
        "longi": "73.12911585",
        "Lati": "29.60996315",
        "CusDesc": "Al-Siddique Filling Station Haroonabad",
        "HSDPrice": "280.4876",
        "Services": [],
        "CusCode": "2010205110001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Bahawalpur",
        "PMGPrice": "274.4176",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Choubargi Development Housing Scheme, Mouza Mouzang, Tehsil & District Lahore",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "74.30530474",
        "Lati": "31.55317265",
        "CusDesc": "Mehmand CNG & Filling Station Lahore",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205080001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Lahore",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Muzaffargarh Road, D.G Khan Road, Multan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Multan",
        "longi": "71.31771952",
        "Lati": "30.07704815",
        "CusDesc": "Ali Abbas Petroleum Service Multan",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205130001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Multan",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Ferozepur Road Lahore",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "74.32258755",
        "Lati": "31.52635232",
        "CusDesc": "PNI CNG & Filling Station Lahore",
        "HSDPrice": "279.8021",
        "Services": [],
        "CusCode": "2010205150001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Lahore",
        "PMGPrice": "273.7321",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Bosal Road, Attock City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Attock",
        "longi": "72.34379724",
        "Lati": "33.76794712",
        "CusDesc": "Pak CNG & Filling Station Attock City",
        "HSDPrice": "280.1648",
        "Services": [],
        "CusCode": "2010205270001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi North",
        "Region": "Rawalpindi-1",
        "District": "Attock",
        "PMGPrice": "274.0948",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Feroz Watwan on Sheikhupura Faisalabad GT Road Tehsil & District Sheikhupura",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sheikhupura",
        "longi": "73.79490316",
        "Lati": "31.58890663",
        "CusDesc": "Mashallah Khan Petroleum Service Sheikhupura",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205050001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Sheikhupura",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "GT Road, Sangjani District, Islamabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Islamabad",
        "longi": "72.85464406",
        "Lati": "33.67490558",
        "CusDesc": "Nayab CNG & Filling Station Sangjani Islamabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205260001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-West",
        "Region": "Rawalpindi-2",
        "District": "Islamabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Sargodha bypass Jhang road, Tehsil & District Sargodha",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sargodha",
        "longi": "72.60626346",
        "Lati": "32.05766129",
        "CusDesc": "Abdullah Filling Station By Pass Sargodha",
        "HSDPrice": "280.0764",
        "Services": [],
        "CusCode": "2010204990001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Sargodha",
        "PMGPrice": "274.0064",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Khasra No. 739, Property No. 544 Army Camping Ground Oil G.T Road Gujrat",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gujrat",
        "longi": "74.0633212",
        "Lati": "32.57807134",
        "CusDesc": "Petro Fuels Gujrat",
        "HSDPrice": "279.7751",
        "Services": [],
        "CusCode": "2010205170001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Gujrat",
        "PMGPrice": "273.7051",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Multan Road, Kabirwala City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kabirwala",
        "longi": "71.85415864",
        "Lati": "30.39916389",
        "CusDesc": "Sohail Petroleum Service Kabirwala City",
        "HSDPrice": "279.9132",
        "Services": [],
        "CusCode": "2010205320001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Khanewal",
        "PMGPrice": "273.8432",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Neel Kot Bosan Road Multan City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Multan",
        "longi": "71.48047194",
        "Lati": "30.23182705",
        "CusDesc": "Al-Hamd CNG & Filling Station Multan City",
        "HSDPrice": "279.9118",
        "Services": [],
        "CusCode": "2010204940001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Multan",
        "PMGPrice": "273.8418",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Multan Road Phool Nagar Bypass Tehsil Pattoki District Kasur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kasur",
        "longi": "73.96220729",
        "Lati": "31.20284746",
        "CusDesc": "Double Speed CNG Filling Station Pattoki",
        "HSDPrice": "280.2149",
        "Services": [],
        "CusCode": "2010204960001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Kasur",
        "PMGPrice": "274.1449",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Wazirabad Road Sialkot",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sialkot",
        "longi": "74.4897911",
        "Lati": "32.49715072",
        "CusDesc": "Askari 11 Filling Station Sialkot (Project of AWT NTN # 0801477-9)",
        "HSDPrice": "279.8949",
        "Services": [],
        "CusCode": "2010204950001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Sialkot",
        "PMGPrice": "273.8249",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "65kl m Nooriabad Karachi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Hyderabad",
        "longi": "67.54591942",
        "Lati": "25.08170481",
        "CusDesc": "Dahri Filling Station Karachi",
        "HSDPrice": "279.7845",
        "Services": [],
        "CusCode": "2010205140001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Hyderabad",
        "PMGPrice": "273.7145",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "on Adda Phattay Stop Sargodha Faisalabad Road",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Chiniot",
        "longi": "72.79202253",
        "Lati": "31.84431126",
        "CusDesc": "Faris Petroleum Service Sargodha",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205160001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Chiniot",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Tajazai-Mianwali Road, Meena Khel, at Lakki Marwat exit.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lakki Marwat",
        "longi": "70.89509591",
        "Lati": "32.61403801",
        "CusDesc": "Doctor Filling Station Lakki Marwat",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205380001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "FATA",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Ahmed Nagar to Sial More Road, District Chiniot",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Chiniot",
        "longi": "72.9117389",
        "Lati": "31.80880281",
        "CusDesc": "Al Najaf Petroleum Service Chinot",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204980001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Chiniot",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Gujranwala Road, Hafizabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Hafizabad",
        "longi": "73.70348141",
        "Lati": "32.07240528",
        "CusDesc": "Bhoon CNG & Filling Station Hafizabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205120001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Gujranwala",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Deh Doozan Scheme No. 33 Plot No. / Sector No. 34-A Near Safroon Chowrangi Karachi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Karachi",
        "longi": "67.15863258",
        "Lati": "24.94054394",
        "CusDesc": "Shoaib Petroleum &  CNG Services Karachi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205720001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Karachi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Raiwind Road, Kasur City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kasur",
        "longi": "74.43818405",
        "Lati": "31.13467726",
        "CusDesc": "Bashir Filling Station Kasur City",
        "HSDPrice": "280.2037",
        "Services": [],
        "CusCode": "2010205290001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Kasur",
        "PMGPrice": "274.1337",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Abbotabad Road Balapir Muzaffarabad AJK",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Muzaffarabad",
        "longi": "73.46455559",
        "Lati": "34.36503249",
        "CusDesc": "Balouch Petroleum Service Muzaffarabad",
        "HSDPrice": "278.96",
        "Services": [],
        "CusCode": "2010205480001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-East",
        "Region": "Rawalpindi-2",
        "District": "Muzaffarabad",
        "PMGPrice": "272.89",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Village Dhani Bux Junejo P.O Moen Jo Daro Taluka Dhokri District Larkana",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Larkana",
        "longi": "68.1100966",
        "Lati": "27.36783826",
        "CusDesc": "Waqar-2 Filling Station Larkana",
        "HSDPrice": "280.4876",
        "Services": [],
        "CusCode": "2010205100001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-SKP)",
        "Region": "Karachi",
        "District": "Larkana",
        "PMGPrice": "274.4176",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Gujranwala Road, Mandi Faizabad, Tehsil & District Nankana Sahib",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Nankana Sahib",
        "longi": "74.00039122",
        "Lati": "31.42416571",
        "CusDesc": "A & B Trucking Station Nankana Sahib",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205280001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Nankana Sahib",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "On Gujranwala Daska Road Tehsil & District Sialkot",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sialkot",
        "longi": "74.50959519",
        "Lati": "32.4627029",
        "CusDesc": "Chaudhry Majeed Filling Station Sialkot",
        "HSDPrice": "280.0021",
        "Services": [],
        "CusCode": "2010204970001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Sialkot",
        "PMGPrice": "273.9321",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Quaidabad Sakesar Road Tehsil Quaidabad District Khushab",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Khushab",
        "longi": "71.8942295",
        "Lati": "32.44513848",
        "CusDesc": "Wasaway Khail Petroleum Service Khushab",
        "HSDPrice": "281.2882",
        "Services": [],
        "CusCode": "2010205040001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Khushab",
        "PMGPrice": "275.2182",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Jhook Jhamki, Makwal Kalan PO, Tunsa Sharif, Dera Ghazi Khan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Dera Gazi Khan",
        "longi": "70.68259656",
        "Lati": "30.6019862",
        "CusDesc": "Basit Filling Station Dera Ghazi Khan",
        "HSDPrice": "279.9049",
        "Services": [],
        "CusCode": "2010205330001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Dera Ghazi Khan",
        "PMGPrice": "273.8349",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Bhakhar - Darya Khan Pul Road D.I.K",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Dera Ismail Khan",
        "longi": "70.90151253",
        "Lati": "31.77109683",
        "CusDesc": "A-One Chashma Filling Station D.I Khan",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205370001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Dera Ismail Khan",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Hajvairy CNG, Pir Wadai Road, Rawalpindi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "73.03941473",
        "Lati": "33.63121811",
        "CusDesc": "Hajveri Filling Station Rawalpindi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205390001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-West",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Al Rahim CNG, Kamonke City, District Gujranwala",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kamoke",
        "longi": "74.22484785",
        "Lati": "31.96475695",
        "CusDesc": "Al Raheem CNG Filling Station Kamonke",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205520001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Gujranwala",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Tarnol Market on Fateh Jhang Road, Rawalpindi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Islamabad",
        "longi": "72.90810987",
        "Lati": "33.64607507",
        "CusDesc": "AKA CNG Filling Station Rawalpindi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205240001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-West",
        "Region": "Rawalpindi-2",
        "District": "Islamabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Yazman Road Bahawalpur City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bahawalpur",
        "longi": "71.69131637",
        "Lati": "29.38682597",
        "CusDesc": "Rehman Gasoline Bahawalpur City",
        "HSDPrice": "280.3574",
        "Services": [],
        "CusCode": "2010205310001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Bahawalpur",
        "PMGPrice": "274.2874",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "On Okara Faisalabad Road Tehsil & District Okara",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Okara",
        "longi": "73.34018961",
        "Lati": "30.94165893",
        "CusDesc": "Dastagir Gillani Filling Station Okara",
        "HSDPrice": "279.8766",
        "Services": [],
        "CusCode": "2010205000001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Okara",
        "PMGPrice": "273.8066",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Rasoolabad Main National Highway District Khairpur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Khairpur",
        "longi": "68.38346064",
        "Lati": "27.16361803",
        "CusDesc": "Al-Yousaf Shahwani Petroleum Service Khairpur",
        "HSDPrice": "280.5848",
        "Services": [],
        "CusCode": "2010205210001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-DLP)",
        "Region": "Karachi",
        "District": "Khairpur",
        "PMGPrice": "274.5148",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Chungi No 26, Jhangi Sydhan, Main Peshawar Road, Islamabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Islamabad",
        "longi": "72.93651849031448",
        "Lati": "33.63293025406663",
        "CusDesc": "Mehar Filling Station Islamabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205490001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-West",
        "Region": "Rawalpindi-2",
        "District": "Islamabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Anwar CNG, Southbound at 0.1km before Haryawala Chowk, Gujrat G.T. Road Bypass, District Gujrat",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gujrat",
        "longi": "74.06070739",
        "Lati": "32.53927194",
        "CusDesc": "Anwar CNG & Filling Station Gujrat",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205410001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Gujrat",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Shahaan CNG & Filling Station, Shahi Road, Exit of Khanpur City toward Bahawalpur, District Rahim",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rahim Yar Khan",
        "longi": "70.68187639",
        "Lati": "28.64987665",
        "CusDesc": "Shahaan CNG Station Khanpur",
        "HSDPrice": "281.5876",
        "Services": [],
        "CusCode": "2010205430001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (SWL)",
        "Region": "Multan",
        "District": "Rahim Yar Khan",
        "PMGPrice": "275.5176",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Plot no.PP-1 (st-41-S) Sector 36-F Korangi Township Landi # 4, Landi Town Karachi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Karachi",
        "longi": "67.18378231",
        "Lati": "24.8388751",
        "CusDesc": "Karrar Petroleum Service Korangi (Karachi)",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010204910001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Karachi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "GT Road, Kala Shah Kaku towards Gujranwala, District Shiekhupura",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sheikhupura",
        "longi": "74.26299825",
        "Lati": "31.74585056",
        "CusDesc": "Gas line CNG & Filling Station Sheikhupura",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205020001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Sheikhupura",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Railway Phattak GT road at entrance of Okara city.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Okara",
        "longi": "73.46963033080101",
        "Lati": "30.816940840040957",
        "CusDesc": "WAW Petroleum & CNG Filling Station Okara",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205610001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Okara",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rahim Yar Khan",
        "longi": "70.32492131",
        "Lati": "28.40012225",
        "CusDesc": "Ahmed Khizer Filling Station Rahimyar Khan",
        "HSDPrice": "281.9566",
        "Services": [],
        "CusCode": "2010205200001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Rahim Yar Khan",
        "PMGPrice": "275.8866",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Kontrilla Main GT Road N-5 Jhelum",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Jhelum",
        "longi": "73.70524764",
        "Lati": "32.95555803",
        "CusDesc": "Al-Noor Filling Station Jhelum",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205220001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Jhelum",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Murree Road, Barakahu, Islamabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Islamabad",
        "longi": "73.18393886",
        "Lati": "33.74185891",
        "CusDesc": "Vision CNG & Filling Station Barakahu Islamabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205340001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-Local",
        "Region": "Rawalpindi-2",
        "District": "Islamabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "KW CNG, Okara Faisalabad Road, Okara City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Okara",
        "longi": "73.45173329",
        "Lati": "30.82834596",
        "CusDesc": "KW CNG/Filling Station Okara City",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205420001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Okara",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Vehari-Mailsi-Kahror Pacca Lodhran Road Tehsil Mailsi District Vehari",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mailsi",
        "longi": "72.15728119",
        "Lati": "29.78753242",
        "CusDesc": "Al Rehman Filling Station Mailsi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205440001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Vehari",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "GT Road, Rawalpindi-Islamabad Junction, Rawat",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Islamabad",
        "longi": "73.1820412",
        "Lati": "33.50982541",
        "CusDesc": "Shandar Petroleum Service Rawat Islamabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205250001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-Local",
        "Region": "Rawalpindi-2",
        "District": "Islamabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "T-Chowk Rawat Islamabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Islamabad",
        "longi": "73.17802057",
        "Lati": "33.5123048",
        "CusDesc": "Subhan Filling Station T-Chow Rawat Islamabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205740001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-Local",
        "Region": "Rawalpindi-2",
        "District": "Islamabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mianwali Muzaffargarh road Teshil Mankara District Bhakkar",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bhakkar",
        "longi": "71.23032779",
        "Lati": "31.37624406",
        "CusDesc": "Muslim Waziristan 1 Filling station Bhakkar",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205870001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Bhakkar",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "National Highway (N-5) Hala Town District Hyderabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Hyderabad",
        "longi": "68.418117",
        "Lati": "25.838862",
        "CusDesc": "Sarwari 2 Filling Station Hyderabad",
        "HSDPrice": "279.9628",
        "Services": [],
        "CusCode": "2010205880001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Hyderabad",
        "PMGPrice": "273.8928",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Main Ferozpur Road, Tehsil & Distt Kasur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kasur",
        "longi": "74.45757",
        "Lati": "31.14343",
        "CusDesc": "A. B Filling Station Kasur",
        "HSDPrice": "280.207",
        "Services": [],
        "CusCode": "2010204920001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Kasur",
        "PMGPrice": "274.137",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Odigram Mingora Road, Swat",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Swat",
        "longi": "72.2869572",
        "Lati": "34.73839525",
        "CusDesc": "Aziz 2 Filling Station Swat",
        "HSDPrice": "280.7425",
        "Services": [],
        "CusCode": "2010205230001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Swat",
        "PMGPrice": "274.6725",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Lahore-Multan Road, Near Habibabad, Kasur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kasur",
        "longi": "73.74508917",
        "Lati": "30.94845093",
        "CusDesc": "Petrogas CNG & Filling Station",
        "HSDPrice": "280.0617",
        "Services": [],
        "CusCode": "2010205760001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Kasur",
        "PMGPrice": "273.9917",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Village Mir Hassan Mari Taluka Foji Mor Tando Adam Sanghar",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Tando Adam",
        "longi": "68.66946056",
        "Lati": "25.74237373",
        "CusDesc": "Rasool Bux Filling Station Sanghar",
        "HSDPrice": "280.4403",
        "Services": [],
        "CusCode": "2010205010001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-DLP)",
        "Region": "Karachi",
        "District": "Tando Adam City",
        "PMGPrice": "274.3703",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Ghousia CNG, Muridke Narowal Road, District Sheikhupura",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sheikhupura",
        "longi": "74.31604564",
        "Lati": "31.86230279",
        "CusDesc": "Ghousia CNG/Filling Station Ferozwala",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205530001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Sheikhupura",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Union CNG, Lahore-Shiekhupura Road, Shiekhupura City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sheikhupura",
        "longi": "74.02763441",
        "Lati": "31.69983631",
        "CusDesc": "Union CNG/Filling Station Sheikhupura",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205540001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Sheikhupura",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Waseem Ashraf Good Transport Company Kot Sultan Layyah",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Layyah",
        "longi": "70.93159676",
        "Lati": "30.76029443",
        "CusDesc": "Garwan Petroleum Service Layyah",
        "HSDPrice": "279.8046",
        "Services": [],
        "CusCode": "2010205180001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Layyah",
        "PMGPrice": "273.7346",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Near D-Type Chowk, Samundari Road, Faisalabad City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Faisalabad",
        "longi": "73.07206526",
        "Lati": "31.3762391",
        "CusDesc": "Madinah Petroleum Service Faisalabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205780001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Faisalabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Hafizabad Road, Qilla Deedar Singh, Gujranwala",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gujranwala",
        "longi": "74.00301307",
        "Lati": "32.12922236",
        "CusDesc": "Al-Sheikh CNG & Filling Station Gujranwala",
        "HSDPrice": "279.9754",
        "Services": [],
        "CusCode": "2010205060001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Gujranwala",
        "PMGPrice": "273.9054",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Dera Masti KLP Road (N-5) Bahawalpur Bypass",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bahawalpur",
        "longi": "71.57234564",
        "Lati": "29.33135779",
        "CusDesc": "Crystal CNG Station Bahawalpur Bypass",
        "HSDPrice": "280.4403",
        "Services": [],
        "CusCode": "2010205300001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Bahawalpur",
        "PMGPrice": "274.3703",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Main Shahmansor Bazar, Al-Jehangira Road, Near Swabi Interchange, District Swabi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Swabi",
        "longi": "72.42982507",
        "Lati": "34.05687348",
        "CusDesc": "Topi Filling Station Swabi",
        "HSDPrice": "279.7823",
        "Services": [],
        "CusCode": "2010205570001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Swabi",
        "PMGPrice": "273.7123",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Shekhwal Khyber Agency Landi Kotal, Torkham Road, Tehsil Landikotal, District Khyber Agency.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Khyber Agency",
        "longi": "71.17931888",
        "Lati": "34.08189689",
        "CusDesc": "Sultan Khel Filling Station Landi Kotal",
        "HSDPrice": "279.8034",
        "Services": [],
        "CusCode": "2010205580001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "FATA",
        "PMGPrice": "273.7334",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Plot No. /Registry No. 1792, Bahi No. 01, Book No. 984 On House 1808-E, West Circular Road, SaadAbad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Dera Ismail Khan",
        "longi": "70.8962895",
        "Lati": "31.82677543",
        "CusDesc": "Al-Baber Filling Station D.I. Khan",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205590001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Dera Ismail Khan",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Main Multan Road near Jamber Bus Stop Pattoki (5-Star CNG)",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Pattoki",
        "longi": "73.91897008",
        "Lati": "31.13170983",
        "CusDesc": "Five Star Fuels Pattoki",
        "HSDPrice": "280.3395",
        "Services": [],
        "CusCode": "2010205650001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Kasur",
        "PMGPrice": "274.2695",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "09 KM Sargodha-Lahore Road (Sial More)",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sargodha",
        "longi": "73.01681176",
        "Lati": "32.00888566",
        "CusDesc": "Abrar Petroleum Service Sial More",
        "HSDPrice": "280.0166",
        "Services": [],
        "CusCode": "2010205660001",
        "CNGPrice": "0",
        "Sub_Region": "Key Accounts - FSD",
        "Region": "Key Accounts - RWP",
        "District": "Sargodha",
        "PMGPrice": "273.9466",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Darya Khan Bhakkar Road Darya Khan City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bhakkar",
        "longi": "71.10720372",
        "Lati": "31.77959838",
        "CusDesc": "Jatial Petroleum Services-3 Bhakkar",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205770001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Bhakkar",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Main Indus Highway (N-55) Near Khairpur Nathan Shah, Deh Khatlashkar, District Dadu",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Dadu",
        "longi": "69.0109098",
        "Lati": "25.49479663",
        "CusDesc": "Syed Lakyari Petroleum Service Dadu",
        "HSDPrice": "279.9628",
        "Services": [],
        "CusCode": "2010205560001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-DLP)",
        "Region": "Karachi",
        "District": "Dadu",
        "PMGPrice": "273.8928",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Gazcon CNG, Noorpura, Pasroor Road, Village Bhekoshor, Sialkot",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sialkot",
        "longi": "74.56325144",
        "Lati": "32.45958205",
        "CusDesc": "Gazcon Sialkot",
        "HSDPrice": "280.024",
        "Services": [],
        "CusCode": "2010205630001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Sialkot",
        "PMGPrice": "273.954",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Al-Makkah CNG Conversion, Hafizabad Gujranwala Road, Hafizabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Hafizabad",
        "longi": "73.72489616",
        "Lati": "32.07534402",
        "CusDesc": "Al-Makkah CNG Filling Station Hafizabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205640001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Gujranwala",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Pakpattan Road, ArifWala City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Pakpattan",
        "longi": "73.09350014",
        "Lati": "30.30611886",
        "CusDesc": "Empire Petroleum Services Arifwala City",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205670001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Pakpattan",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khewat # 63 Khatooni # 117 Khasra # 117 khasra # 499/4 50 situated at Tablianwala Rd Bilal Town Jhe",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Jhelum",
        "longi": "73.7450476",
        "Lati": "32.9485163",
        "CusDesc": "Mehfooz CNG & Filling Station Jhelum",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205800001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Jhelum",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "03 Km Sargodha-Silanwali Road, Sargodha",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sargodha",
        "longi": "72.63768017",
        "Lati": "32.06465115",
        "CusDesc": "Al-Siddique CNG/Filling Station Sargodha",
        "HSDPrice": "280.0843",
        "Services": [],
        "CusCode": "2010205810001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Sargodha",
        "PMGPrice": "274.0143",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Bahawali Chowk-Bahawalnagar City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bahawalnagar",
        "longi": "73.24714914",
        "Lati": "29.99347037",
        "CusDesc": "Baba Fareed Filling Station Bahawalnagar",
        "HSDPrice": "279.949",
        "Services": [],
        "CusCode": "2010205680001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Bahawal Nagar",
        "PMGPrice": "273.879",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Doulatabad, Sher Shah Road, Multan City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Multan",
        "longi": "71.40618145",
        "Lati": "30.16175358",
        "CusDesc": "Save Filling Station Multan",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205700001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Multan",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Jhang Kabirwala Road Kabirwala",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Khanewal",
        "longi": "71.87170029",
        "Lati": "30.40023309",
        "CusDesc": "Friends Biz CNG Petroleum Service Kabirwala",
        "HSDPrice": "279.8971",
        "Services": [],
        "CusCode": "2010205830001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Khanewal",
        "PMGPrice": "273.8271",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Minara Road Sukkur City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sukkur",
        "longi": "68.8771306",
        "Lati": "27.69888722",
        "CusDesc": "HM Ali Filling Station Sukkur City",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205840001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-SKP)",
        "Region": "Karachi",
        "District": "Sukkur",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Jatoi Jamal Shah Road",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Muzaffargarh",
        "longi": "70.85856557",
        "Lati": "29.52090102",
        "CusDesc": "Al-Madina Filling Station Muzaffargarh",
        "HSDPrice": "279.946",
        "Services": [],
        "CusCode": "2010205550001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Muzaffargarh",
        "PMGPrice": "273.876",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Bahawalpur Road, Qaimpur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bahawalpur",
        "longi": "72.42975265",
        "Lati": "29.68623756",
        "CusDesc": "Hassam Filling Station Bahawalpur",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205690001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Bahawalpur",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Shahdad Kot",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Qambar Shahdadkot",
        "longi": "67.91479424",
        "Lati": "27.83345721",
        "CusDesc": "Shahdad Kot Petroleum Services Shahdadkot",
        "HSDPrice": "280.2495",
        "Services": [],
        "CusCode": "2010205710001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-SKP)",
        "Region": "Karachi",
        "District": "Shahdadkot",
        "PMGPrice": "274.1795",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Peco Road, Pindi Stop, Kot Lakhpat, Lahore",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "74.32888269",
        "Lati": "31.45873756",
        "CusDesc": "Askari 13 CNG & Filling Station (Project of AWT NTN # 0801477-9) Lahore",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205860001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Lahore",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Main KLP Road (N-5), Near Ashraf Sugar Mills, Musafir Khana, District Bahawalpur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bahawalpur",
        "longi": "71.50776476",
        "Lati": "29.28751243",
        "CusDesc": "F & U Filling Station Bahawalpur",
        "HSDPrice": "280.5475",
        "Services": [],
        "CusCode": "2010205190001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Bahawalpur",
        "PMGPrice": "274.4775",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Gadoon Amazai industrial Area Swabi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Swabi",
        "longi": "72.639193",
        "Lati": "34.100126",
        "CusDesc": "Swabi Petroleum Services Swabi",
        "HSDPrice": "280.0552",
        "Services": [],
        "CusCode": "2010205730001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Swabi",
        "PMGPrice": "273.9852",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khasra # 276, 277 & 278, Khewat # 941, Share 8/1340, Mouza Tarbella Road Tehsil & District Chakwal.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Chakwal",
        "longi": "72.4112843",
        "Lati": "32.92903384",
        "CusDesc": "Ussama Filling Station Talagang",
        "HSDPrice": "280.6764",
        "Services": [],
        "CusCode": "2010205930001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Chakwal",
        "PMGPrice": "274.6064",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Plot No. D-12-B, Estates Avenue SITE Area Karachi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Karachi",
        "longi": "66.999304",
        "Lati": "24.9005595",
        "CusDesc": "Ayan CNG & Petroleum Service Karachi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205960001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Karachi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Chak No. 11/w.b Multan Burewala Road Tehsil and District Vehari",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Vehari",
        "longi": "72.33504385",
        "Lati": "30.04047201",
        "CusDesc": "Gasco Filling Station Vehari City",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206000001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Vehari",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Junction of Talagang-Pindi Road & Talagang Bypass, Tehsil Talagang, District Chakwal.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Chakwal",
        "longi": "72.41358855",
        "Lati": "32.95287396",
        "CusDesc": "Al-Mehboob Petroleum Service Chakwal",
        "HSDPrice": "280.6198",
        "Services": [],
        "CusCode": "2010205940001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Chakwal",
        "PMGPrice": "274.5498",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "N-5 Taluka Qazi Ahmad District Shaheed Banazirabad Nawab Shah",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Nawabshah",
        "longi": "68.01255",
        "Lati": "26.435819",
        "CusDesc": "Afridi & Jamali Filling Station Nawab Shah",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010205950001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-DLP)",
        "Region": "Karachi",
        "District": "Nowsheraferoz",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Small Industrial Estates/Industrial Park MPK Mirwah Road Mirpur Khas",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mirpur Khas",
        "longi": "69.0109098",
        "Lati": "25.49479663",
        "CusDesc": "Ayan Enterprises Petroleum Service Mirpus Khas",
        "HSDPrice": "281.0139",
        "Services": [],
        "CusCode": "2010205920001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Mirpur Khas",
        "PMGPrice": "274.9439",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Amin CNG Zarrar Shaheed Road",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "74.40674856",
        "Lati": "31.54884237",
        "CusDesc": "Amin CNG & Filling Station Lahore",
        "HSDPrice": "279.8181",
        "Services": [],
        "CusCode": "2010205910001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Lahore",
        "PMGPrice": "273.7481",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "10 - KM Arifwala Road Mari Mian Sahib, Bahawalnagar",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bahawalnagar",
        "longi": "73.18074569",
        "Lati": "30.06141732",
        "CusDesc": "Nishat Filling Station Bahawalnagar",
        "HSDPrice": "279.7853",
        "Services": [],
        "CusCode": "2010206280001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Bahawal Nagar",
        "PMGPrice": "273.7153",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Munda Samar Bagh",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lower Dir",
        "longi": "71.67825803",
        "Lati": "34.83527968",
        "CusDesc": "New Jan Filling Station Samar Bagh",
        "HSDPrice": "280.9576",
        "Services": [],
        "CusCode": "2010206270001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Lower Dir",
        "PMGPrice": "274.8876",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Hyderabad Badin Road Matli",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Tando Muhammad Khan",
        "longi": "68.65277857",
        "Lati": "25.0224681",
        "CusDesc": "Allah Bachayo Filling Station Matli",
        "HSDPrice": "281.3433",
        "Services": [],
        "CusCode": "2010206040001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Tando Muhammad Khan",
        "PMGPrice": "275.2733",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mailsi Chowk, Mailsi Road, Karoor Pacca City, District Vehari",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Vehari",
        "longi": "71.90915465",
        "Lati": "29.63821061",
        "CusDesc": "Dr. Haider Filling Station Multan",
        "HSDPrice": "279.7852",
        "Services": [],
        "CusCode": "2010206180001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Vehari",
        "PMGPrice": "273.7152",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Mitha Lak, on Sargodha Bhalwal Road, Tehsil & District Sargodha",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sargodha",
        "longi": "72.74477139",
        "Lati": "32.11595169",
        "CusDesc": "Bismillah Petroleum Service Sargodha",
        "HSDPrice": "280.0861",
        "Services": [],
        "CusCode": "2010206240001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Sargodha",
        "PMGPrice": "274.0161",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Shahbaz pur Road, Coca Cola Factory Rahim Yar Khan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rahim Yar Khan",
        "longi": "70.24961561",
        "Lati": "28.43291753",
        "CusDesc": "Riyyan Gasoline Station Rahim Yar Khan",
        "HSDPrice": "281.8739",
        "Services": [],
        "CusCode": "2010206010001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Rahim Yar Khan",
        "PMGPrice": "275.8039",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Bahawalpur Bypass",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bahawalpur",
        "longi": "71.63369447",
        "Lati": "29.39443171",
        "CusDesc": "Madina Petroleum Services Bahawalpur",
        "HSDPrice": "280.3339",
        "Services": [],
        "CusCode": "2010206170001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Bahawalpur",
        "PMGPrice": "274.2639",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Dhoke Fateh, Fateh Jhnag Road Attock City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Attock",
        "longi": "72.36078233",
        "Lati": "33.76099795",
        "CusDesc": "Unique Gas CNG Station Attock",
        "HSDPrice": "280.1677",
        "Services": [],
        "CusCode": "2010206330001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi North",
        "Region": "Rawalpindi-1",
        "District": "Attock",
        "PMGPrice": "274.0977",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Muhammad Saleh Bhutto Colony, Deh Nizamani Taluka and District Khairpur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Khairpur",
        "longi": "68.75022188",
        "Lati": "27.53275661",
        "CusDesc": "Buraq Filling Station Khairpur",
        "HSDPrice": "279.909",
        "Services": [],
        "CusCode": "2010206300001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-SKP)",
        "Region": "Karachi",
        "District": "Khairpur",
        "PMGPrice": "273.839",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Plot No.32, Sector F-11 Markaz, Islamabad.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Islamabad",
        "longi": "33.68536246",
        "Lati": "72.98567802",
        "CusDesc": "Fleet Card - Model F/s F-11 ISB",
        "HSDPrice": "279.8",
        "Services": [],
        "CusCode": "20101005000020017001",
        "CNGPrice": "0",
        "Sub_Region": "COCO-RWP",
        "Region": "COCO",
        "District": "Islamabad",
        "PMGPrice": "273.7",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Opposite Bhobattian Village, 8.5 Km Thoker Niaz Baig on Raiwind Road, Lahore",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "74.23031956",
        "Lati": "31.40073565",
        "CusDesc": "Mian Jee fuels Lahore",
        "HSDPrice": "279.8181",
        "Services": [],
        "CusCode": "2010206230001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Lahore",
        "PMGPrice": "273.7481",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Near Jhelum River Bridge, Sarai Alamgir Gujrat",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gujrat",
        "longi": "73.73594821",
        "Lati": "32.90444926",
        "CusDesc": "Sidhu Petroleum Services Gujrat",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206290001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Gujrat",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Plot #1 Faiz Ahmad Faiz road H8/2 Islamabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Islamabad",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - Quality F/s H-8 ISB",
        "HSDPrice": "279.8",
        "Services": [],
        "CusCode": "20101005100020030001",
        "CNGPrice": "0",
        "Sub_Region": "COCO-RWP",
        "Region": "COCO",
        "District": "Islamabad",
        "PMGPrice": "273.7",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Shikarpur Road Near SITE Area Near Sukkur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sukkur",
        "longi": "68.83281246",
        "Lati": "27.7207537",
        "CusDesc": "Madni Filling Station S.I.T.E Area Sukkur City",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206130001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-SKP)",
        "Region": "Karachi",
        "District": "Sukkur",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "at N-55 Exit of Dadu Indus Highway District Dadu",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Dadu",
        "longi": "67.779947",
        "Lati": "26.761742",
        "CusDesc": "Kareem Petroleum Service Dadu",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206140001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-DLP)",
        "Region": "Karachi",
        "District": "Dadu",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mauza Pir Chak, Pind Dadan Khan, District Jhelum",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Pind Dadan Khan",
        "longi": "73.34409758",
        "Lati": "32.66533153",
        "CusDesc": "Shameer Petroleum Services Jhelum",
        "HSDPrice": "279.9147",
        "Services": [],
        "CusCode": "2010206080001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Jhelum",
        "PMGPrice": "273.8447",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Main GT Road, Dina Jhelum",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Jhelum",
        "longi": "73.66530821",
        "Lati": "32.99812054",
        "CusDesc": "Al-Syed CNG & Petroleum Services Jhelum",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206320001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Jhelum",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Chak No 5/NP, KLP Road, Sadiqabad, Rahim Yar Khan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rahim Yar Khan",
        "longi": "70.18460155",
        "Lati": "28.3922569",
        "CusDesc": "Pak Faisal Petroleum Service Rahim Yar Khan",
        "HSDPrice": "281.7421",
        "Services": [],
        "CusCode": "2010206100001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Rahim Yar Khan",
        "PMGPrice": "275.6721",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "KLP Road Chowk Bahadarpur District Rahimyar Khan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rahim Yar Khan",
        "longi": "70.20886213",
        "Lati": "28.42802672",
        "CusDesc": "Miran Shah Filling Station Rahim Yar Khan",
        "HSDPrice": "281.7897",
        "Services": [],
        "CusCode": "2010206200001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Rahim Yar Khan",
        "PMGPrice": "275.7197",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Plot No. 619, Block III, Sector C/1, Quiad-e-Azam Town, Lahore",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "74.30585861",
        "Lati": "31.44812308",
        "CusDesc": "National CNG Services Lahore",
        "HSDPrice": "279.8092",
        "Services": [],
        "CusCode": "2010206090001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Lahore",
        "PMGPrice": "273.7392",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "G-10/4 Markaz Islamabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Islamabad",
        "longi": "73.01810324",
        "Lati": "33.67167675",
        "CusDesc": "Lillah CNG & Petroleum Service G-10/4 Islamabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206250001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-West",
        "Region": "Rawalpindi-2",
        "District": "Islamabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Old Shujabaad Road, Multan.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Multan",
        "longi": "71.44129157",
        "Lati": "30.16041431",
        "CusDesc": "FIT Petroleum Multan",
        "HSDPrice": "279.7912",
        "Services": [],
        "CusCode": "2010206260001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Multan",
        "PMGPrice": "273.7212",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Multan Road, Tehsil & District Lahore",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sheikhupura",
        "longi": "74.26863894",
        "Lati": "31.50498084",
        "CusDesc": "Gasolina CNG/Filling Station Lahore",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206020001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Sheikhupura",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Bhoptian Chowk Defence Road Near Valencia Town, Lahore",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "74.24532518",
        "Lati": "31.39370927",
        "CusDesc": "Akai Systems Lahore",
        "HSDPrice": "279.8482",
        "Services": [],
        "CusCode": "2010206070001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Lahore",
        "PMGPrice": "273.7782",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Masoom Shah Road, Opposite Wallayat Hussain College, Multan City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Multan",
        "longi": "71.48493245",
        "Lati": "30.19834744",
        "CusDesc": "Noor Filling Station Multan City",
        "HSDPrice": "279.8949",
        "Services": [],
        "CusCode": "2010206340001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Multan",
        "PMGPrice": "273.8249",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Save CNG Services, Kallar Syedan Road, Mankiala Station, Rawalpindi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "73.24706599",
        "Lati": "33.47907315",
        "CusDesc": "Save CNG Filling Station Kallar Syedan",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206160001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Kalma Chowk, Dhamial Road, Rawalpindi.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "73.03999543",
        "Lati": "33.5736191",
        "CusDesc": "Rajco Filling Station Rawalpindi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206110001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-West",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Lodhran Khanewal Road Adda Pul Bazari District Lodhran",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lodhran",
        "longi": "71.70870245",
        "Lati": "29.71153886",
        "CusDesc": "Yes-3 Petroleum Services Lodhran",
        "HSDPrice": "280.0305",
        "Services": [],
        "CusCode": "2010206310001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Lodhran",
        "PMGPrice": "273.9605",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Roshanwala Bypass, District Faisalabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Faisalabad",
        "longi": "72.96264187",
        "Lati": "31.3468739",
        "CusDesc": "Naveed Enterprises 2 Petroleum Faisalabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206050001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Faisalabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "01 KM, Koral Chowk, Islamabad Expressway, Adjacent Gulberg Housing Society Islamabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Islamabad",
        "longi": "73.14012229",
        "Lati": "33.59725954",
        "CusDesc": "Abdul Aziz Petroleum Service Islamabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206150001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Islamabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Sambrial, on Wazirabad Road, Opposite Police Station Sambrial, Tehsil Sambrial & District Sial",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Wazirabad",
        "longi": "74.33677107",
        "Lati": "32.47676351",
        "CusDesc": "Daud CNG Filling Station Sambrial",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206220001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Gujranwala",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Charsadda Bypass Road Tehsil & District Charsadda Motorway Interchange",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Charsadda",
        "longi": "71.77839965",
        "Lati": "34.13536608",
        "CusDesc": "New Charsadda Filling Station Charsadda",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206030001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Charsadda",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Shahbaz Petroleum Services, Murreedwala, Rahim Yar Khan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rahim Yar Khan",
        "longi": "70.303756",
        "Lati": "28.58426264",
        "CusDesc": "Shahbaz Petroleum Services Rahim Yar Khan",
        "HSDPrice": "282.0409",
        "Services": [],
        "CusCode": "2010206060001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Rahim Yar Khan",
        "PMGPrice": "275.9709",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Muzafargarh Tirinda Muhammad Panah Road Mouza Noorpur Ahmed Pur East Dist: Bahawalpur.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bahawalpur",
        "longi": "71.03518367",
        "Lati": "29.27766872",
        "CusDesc": "Shah Rukan-E-Alam Petroleum Services Uch Sharif",
        "HSDPrice": "280.3812",
        "Services": [],
        "CusCode": "2010206190001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Bahawalpur",
        "PMGPrice": "274.3112",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Tarnol Exit, Towards Taxila, Islamabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Islamabad",
        "longi": "72.90051251649857",
        "Lati": "33.65849119289193",
        "CusDesc": "Imex Associate 2 Tarnol",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206210001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-West",
        "Region": "Rawalpindi-2",
        "District": "Islamabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Peshawar Motorway (M-1) North Right Side Service area Tehsil and District Mardan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mardan",
        "longi": "72.07016766",
        "Lati": "34.09077615",
        "CusDesc": "Topi Filling Station North Islamabad-Peshawar Motorway Mardan",
        "HSDPrice": "279.851",
        "Services": [],
        "CusCode": "2010206420001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Mardan",
        "PMGPrice": "273.7175",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Hala Naka Road, at Entrance of Hyderabad City.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Hyderabad",
        "longi": "68.38403329",
        "Lati": "25.43894509",
        "CusDesc": "Salman Filling Station Hyderabad",
        "HSDPrice": "280.597",
        "Services": [],
        "CusCode": "2010206450001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Hyderabad",
        "PMGPrice": "274.527",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Sarai Alamgir, G. T Road, Jhelum",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Jhelum",
        "longi": "73.76015246",
        "Lati": "32.89630819",
        "CusDesc": "Alamgirian CNG & Petroleum Services Jhelum",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206360001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Jhelum",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Peshawar Motorway (M-1) South Right Side Service area Tehsil and District Mardan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mardan",
        "longi": "72.06930533",
        "Lati": "34.09217666",
        "CusDesc": "Topi Filling Station South Peshawar-Islamabad Motorway Mardan",
        "HSDPrice": "279.851",
        "Services": [],
        "CusCode": "2010206430001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Mardan",
        "PMGPrice": "273.7175",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Plot No. 1508 at Mouza Jhangi Syedan, at KM 1550+400 N-5 North Bound Carriage way, Tehsil & District",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Islamabad",
        "longi": "72.94235632",
        "Lati": "33.62919289",
        "CusDesc": "Waqas CNG & Filling Station Islamabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206390001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-West",
        "Region": "Rawalpindi-2",
        "District": "Islamabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Sialkot Bypass Gujranwala",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gujranwala",
        "longi": "74.2259881",
        "Lati": "32.179816",
        "CusDesc": "Sunny Star Filling Station Gujranwala",
        "HSDPrice": "279.9509",
        "Services": [],
        "CusCode": "2010206400001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Gujranwala",
        "PMGPrice": "273.8809",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Plot Survey No. 358, 357 Deh Khairo, Tapo Tando Masti Taluka Khairpur District and town of Khairpur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Khairpur",
        "longi": "68.62211823",
        "Lati": "27.43040163",
        "CusDesc": "Jillani Filling Station Khairpur",
        "HSDPrice": "280.1119",
        "Services": [],
        "CusCode": "2010206440001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-DLP)",
        "Region": "Karachi",
        "District": "Khairpur",
        "PMGPrice": "274.0419",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Multan Bahawalpur Road, Lodhran City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lodhran",
        "longi": "71.63293138",
        "Lati": "29.5244428",
        "CusDesc": "Umar Bashir Filling Station Lodhran",
        "HSDPrice": "280.166",
        "Services": [],
        "CusCode": "2010206460001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Lodhran",
        "PMGPrice": "274.096",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "At Mouza Pansera Chak No 275 Faisalabad Road, Teshsil Saddar, Faisalabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Faisalabad",
        "longi": "72.83529997",
        "Lati": "31.34810934",
        "CusDesc": "Al-Rasheed 2 Petroleum Service Faisalabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206410001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Faisalabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Plot no. 19,20,21, Ammar Golden City, Main Hyderabad Road, Tando Allah Yar",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Tando Allah Yar",
        "longi": "68.68814752",
        "Lati": "25.46018791",
        "CusDesc": "Makkah Madina Filling Station Tando Allah Yar",
        "HSDPrice": "280.847",
        "Services": [],
        "CusCode": "2010206370001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Tando Allah Yar",
        "PMGPrice": "274.777",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Green CNG Station oil G.T. Road, Sahiwal",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sahiwal",
        "longi": "73.10471177",
        "Lati": "30.6500583",
        "CusDesc": "Chohan CNG & Filling Station Sahiwal",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206470001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "",
        "District": "Sahiwal",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Main Dir  Timergarra Road Tehsil Timergarra District Dir Lower",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Peshawar",
        "longi": "71.87549293",
        "Lati": "34.86538405",
        "CusDesc": "Pameer Filling Station Peshawar",
        "HSDPrice": "280.9457",
        "Services": [],
        "CusCode": "2010206350001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Peshawar",
        "PMGPrice": "274.8757",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Walana, National Highway (N-5), Tehsil Sadiqabad, Rahim Yar Khan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sadiqabad",
        "longi": "70.00968263",
        "Lati": "28.26893731",
        "CusDesc": "Awaisia Filling Station Sadiqabad",
        "HSDPrice": "281.4564",
        "Services": [],
        "CusCode": "2010206380001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Rahim Yar Khan",
        "PMGPrice": "275.3864",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Wazirabad Sialkot Road at Sambrial Tehsil and District Sialkot",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sialkot",
        "longi": "74.37207162",
        "Lati": "32.47854653",
        "CusDesc": "Askari Petroleum Service Sambrial City",
        "HSDPrice": "279.7859",
        "Services": [],
        "CusCode": "2010206690001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Sialkot",
        "PMGPrice": "273.7159",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Kotli Pir Ahmed Shah, Pindi Bypass Road Gujranwala.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gujranwala",
        "longi": "74.16267291",
        "Lati": "32.19654289",
        "CusDesc": "Speed Filling Station Gujranwala",
        "HSDPrice": "279.8557",
        "Services": [],
        "CusCode": "2010206700001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Gujranwala",
        "PMGPrice": "273.7857",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Okara-Depalpur Road, Near Okara Bypass, Okara City.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Okara",
        "longi": "73.49186584",
        "Lati": "30.78943972",
        "CusDesc": "Shahnawaz CNG & Filling Station Okara",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206560001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Okara",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Plot Khata No. 64, Khatooni No. 183/1, Khewat No.6135/3 at mouza chota Lahore, Swabi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Swabi",
        "longi": "72.35954851",
        "Lati": "34.02723726",
        "CusDesc": "Lahore Filling Station Swabi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206640001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Swabi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Sadiq & Sons CNG & Filling Station, Ibn-e-Sina Road, Liaquatabad No.10, Near Masjide Shuhadah, Karac",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Karachi",
        "longi": "67.04826437",
        "Lati": "24.90969672",
        "CusDesc": "Sadiq & Sons CNG & Filling Station Karachi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206660001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Karachi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Shakrial Tehsil and District Rawalpindi, Khewat No. 299, Khatooni No. 450, Khasra No. 860",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "73.10100228",
        "Lati": "33.64257832",
        "CusDesc": "Three Star Gas Rawalpindi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206590001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-Local",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Near Toll Plaza Moro Bypass",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Naushehro Feroze",
        "longi": "68.02944794",
        "Lati": "26.69599875",
        "CusDesc": "Super Jamali Trucking Station Naushehro Feroze",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206480001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-DLP)",
        "Region": "Karachi",
        "District": "Nowsheraferoz",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Khewat No. 855, Khatooni no. 1652,Khasra No. 43303/223/593 situated at Mouza Kotha Kalan, High Court",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "73.10239032",
        "Lati": "33.55622986",
        "CusDesc": "Al-Rehman CNG & Filling Station-High Court Road Rawalpindi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206550001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-Local",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Chaudhary House Afzal Colony Gambat City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Khairpur",
        "longi": "68.53134289",
        "Lati": "27.3485277",
        "CusDesc": "Sindh Petroleum Service Gambat",
        "HSDPrice": "280.2734",
        "Services": [],
        "CusCode": "2010206540001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-SKP)",
        "Region": "Karachi",
        "District": "Khairpur",
        "PMGPrice": "274.2034",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Siaa Filling Station, Ghousia Chowk, Vehari Road, Multan City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Multan",
        "longi": "71.48362488",
        "Lati": "30.17253008",
        "CusDesc": "Siaa Filling Station Multan City",
        "HSDPrice": "279.8576",
        "Services": [],
        "CusCode": "2010206580001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Multan",
        "PMGPrice": "273.7876",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Adjacent Dawat-e-Tableegh Markaz, Mianwali Road, Lawa Talagang District Chakwal",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Talagang",
        "longi": "73.079971",
        "Lati": "33.560089",
        "CusDesc": "Lajpal Petroleum Services (Lawa) Talagang",
        "HSDPrice": "281.3251",
        "Services": [],
        "CusCode": "2010206500001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Chakwal",
        "PMGPrice": "275.2551",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Near Al-Masoom Hotel, G.T Road, More Eminabad, Gujranwala",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Eminabad",
        "longi": "74.2098945",
        "Lati": "32.0481492",
        "CusDesc": "Eminabad Filling Station Eminabad",
        "HSDPrice": "279.8557",
        "Services": [],
        "CusCode": "2010206510001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Gujranwala",
        "PMGPrice": "273.7857",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Ghoth Haji Pasta Gul Dak Khana Ali Wahan Kacho Tehsil Rohri District Sukkur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sukkur",
        "longi": "68.80260676",
        "Lati": "27.7561627",
        "CusDesc": "Haji Nawab Petroleum Service Sukkur",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206610001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-SKP)",
        "Region": "Karachi",
        "District": "Sukkur",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Chakwal Khushab Road Padhrar Khushab",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Khushab",
        "longi": "72.50116915",
        "Lati": "32.65827769",
        "CusDesc": "Khalid Aziz Petroleum Service Khushab",
        "HSDPrice": "280.5568",
        "Services": [],
        "CusCode": "2010206530001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Khushab",
        "PMGPrice": "274.4868",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Plot Survey No. 1472, Deh Kato Khokhar Tapo Kalo Khokhar Taluka Bula Khan on Super Highway Karachi t",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Jamshoro",
        "longi": "67.82451242",
        "Lati": "25.18535136",
        "CusDesc": "Mashallah Filling Station Nooriabad Karachi",
        "HSDPrice": "280.166",
        "Services": [],
        "CusCode": "2010206620001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Jamshoro",
        "PMGPrice": "274.096",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Faisalabad Jhang Road near Sadhar Bypass District Faisalabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Faisalabad",
        "longi": "72.89804757",
        "Lati": "31.35979598",
        "CusDesc": "RM Petroleum Service Faisalabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206490001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Faisalabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Shameem 3 petroleum services, Shahbaz Pur Road, Rahim Yar Khan City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rahim Yar Khan",
        "longi": "70.28204888",
        "Lati": "28.42568089",
        "CusDesc": "Shameem 3 Petroleum Services Rahim Yar Khan",
        "HSDPrice": "281.897",
        "Services": [],
        "CusCode": "2010206520001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Rahim Yar Khan",
        "PMGPrice": "275.827",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Makki Madni Fillling Station, KLP Road, Kot Sabzal, District Rahim Yar khan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rahim Yar Khan",
        "longi": "69.90595892",
        "Lati": "28.22183078",
        "CusDesc": "Makki Madni Filling Staion Rahim Yar Khan",
        "HSDPrice": "281.312",
        "Services": [],
        "CusCode": "2010206670001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (SWL)",
        "Region": "Multan",
        "District": "Rahim Yar Khan",
        "PMGPrice": "275.242",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Shamim-2 Filling Station, Model Town, Rahim Yar Khan City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rahim Yar Khan",
        "longi": "70.31342804",
        "Lati": "28.42359567",
        "CusDesc": "Shameem 2 Filling Station Rahim Yar Khan",
        "HSDPrice": "281.9689",
        "Services": [],
        "CusCode": "2010206600001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (SWL)",
        "Region": "Multan",
        "District": "Rahim Yar Khan",
        "PMGPrice": "275.8989",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khata/Khewat No. 135/135, Khatooni No. 284 to 294, Rectangle No. 514/2, Killa No. 9, 12 at Rahimyar",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rahim Yar Khan",
        "longi": "70.28934583",
        "Lati": "28.4083253",
        "CusDesc": "Bismillah Filling Station Rahim Yar Khan",
        "HSDPrice": "281.9218",
        "Services": [],
        "CusCode": "2010206680001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (SWL)",
        "Region": "Multan",
        "District": "Rahim Yar Khan",
        "PMGPrice": "275.8518",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Gunda Karkana, Mardan Road, Sar Dehri Charsada",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Charsadda",
        "longi": "71.8357493",
        "Lati": "34.16861445",
        "CusDesc": "Ekhwan Petroleum Service Charsadda",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206630001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Charsadda",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Plot no. 13, Main Sunny Bank, Murree Road, Murree District Rawalpindi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "73.38977963",
        "Lati": "33.91233927",
        "CusDesc": "Premier Gas Links Murree",
        "HSDPrice": "280.342",
        "Services": [],
        "CusCode": "2010206650001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-East",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "274.272",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "G.T Road Gujrat",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gujrat",
        "longi": "74.04205933",
        "Lati": "32.59634761",
        "CusDesc": "Barsa CNG & Filling Station Gujrat",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206740001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Gujrat",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Main Bedian Road, Lahore Cantt",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "74.42909807",
        "Lati": "31.47058848",
        "CusDesc": "S.S. Enterprises Lahore",
        "HSDPrice": "279.8942",
        "Services": [],
        "CusCode": "2010206710001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Lahore",
        "PMGPrice": "273.8242",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Charhoi Bazar, Tehsil Charhoi, District Kotli, AJK",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kotli",
        "longi": "73.94983023",
        "Lati": "33.30022856",
        "CusDesc": "Akbar Petroleum Service Kotli (Charhoi)",
        "HSDPrice": "278.96",
        "Services": [],
        "CusCode": "2010206730001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-East",
        "Region": "Rawalpindi-2",
        "District": "Kotli",
        "PMGPrice": "272.89",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "M.A Jinnah Kumharan Chowk Multan.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Multan",
        "longi": "71.51478812",
        "Lati": "30.21804944",
        "CusDesc": "Bahawal Filling Station Multan",
        "HSDPrice": "279.9078",
        "Services": [],
        "CusCode": "2010206720001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Multan",
        "PMGPrice": "273.8378",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "F-11 Markaz, Islamabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Islamabad",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - Capital F/s F-11 ISB)",
        "HSDPrice": "279.8",
        "Services": [],
        "CusCode": "20101005400020003001",
        "CNGPrice": "0",
        "Sub_Region": "COCO-RWP",
        "Region": "COCO",
        "District": "Islamabad",
        "PMGPrice": "273.7",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khasra No. 4360/1190, Khewat No. 823, Khatooni No. 1080 Situated on Mouza Khana Dak, Pir Jamshaid Co",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "73.11231449",
        "Lati": "33.62765946",
        "CusDesc": "Al-Haseeb CNG & Filling Station Rawalpindi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206750001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-Local",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Faiz CNG & Filling Station, Jaranwala Road, Faisalabad City.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Faisalabad",
        "longi": "73.12136024",
        "Lati": "31.40655279",
        "CusDesc": "Faiz CNG Station Jaranwala Road Faisalabad City",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206770001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Faisalabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Mouza Bazar Mianwali Rawalpindi Road Tehsil & Distt. Mianwali",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Musakheil",
        "longi": "71.77121401",
        "Lati": "32.64173512",
        "CusDesc": "Bilal Petroleum Service Musa Khel",
        "HSDPrice": "281.718",
        "Services": [],
        "CusCode": "2010206760001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Mianwali",
        "PMGPrice": "275.648",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Raiwind Road, Lahore",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "74.23778951",
        "Lati": "31.34060062",
        "CusDesc": "Fahad Gasoline Lahore",
        "HSDPrice": "279.9042",
        "Services": [],
        "CusCode": "2010206780001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Lahore",
        "PMGPrice": "273.8342",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khasra No.618 Mouza Damas on Gilgit-Chitral Road Tehsil Punial Ghizer.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gahkuck",
        "longi": "73.750593",
        "Lati": "36.199747",
        "CusDesc": "Natco-4 Mountain Filling Station Gahkuch",
        "HSDPrice": "278.96",
        "Services": [],
        "CusCode": "2010206790001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi North",
        "Region": "Rawalpindi-1",
        "District": "Ghizer",
        "PMGPrice": "272.89",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Zahoor Abbasi Moza Lura Muree road Abbotabad.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Abbottabad",
        "longi": "73.286435",
        "Lati": "33.895045",
        "CusDesc": "Shahyan Petroleum Services Abbottabad",
        "HSDPrice": "279.8306",
        "Services": [],
        "CusCode": "2010206810001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-East",
        "Region": "Rawalpindi-2",
        "District": "Abbotabad",
        "PMGPrice": "273.7606",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mandra-Chakwal Road, Mouza Syed, Tehsil Gujar Khan, Distt: Rawalpindi.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gujar Khan",
        "longi": "73.02887902",
        "Lati": "33.14042375",
        "CusDesc": "Raja Petroleum Services Gujjar Khan",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206820001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Keenjhar Lake Petroleum Services, on main road between Thatta City & Hyderabad, District Thatta",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Thatta",
        "longi": "68.05997953",
        "Lati": "24.89243771",
        "CusDesc": "Keenjhar Lake Petroleum Services Thatta",
        "HSDPrice": "279.9156",
        "Services": [],
        "CusCode": "2010206800001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Thatta",
        "PMGPrice": "273.8456",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Airport Road, Gulzar-e-Quiad, Rawalpindi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "73.12091365",
        "Lati": "33.60326979",
        "CusDesc": "Rajgan Filling Station Rawalpindi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206850001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-West",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Raja Bazar - Perwadai Road, Bagh Sardaran, Rawalpindi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "73.05453837",
        "Lati": "33.61949083",
        "CusDesc": "Paracha CNG & Filling Station Rawalpindi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206840001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-West",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Lahore Multan Road GT Road, Renala Khurd, Okara",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Okara",
        "longi": "73.59136985",
        "Lati": "30.86635817",
        "CusDesc": "Islam Petroleum Service Renala Khurd (Okara)",
        "HSDPrice": "279.855",
        "Services": [],
        "CusCode": "2010206970001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Okara",
        "PMGPrice": "273.785",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Cheema CNG & Filling Station, Daska-Gujranwala Road, on Exit of Daska City, District Sialkot",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Daska",
        "longi": "74.3414703",
        "Lati": "33.60326979",
        "CusDesc": "Cheema Enterprises (CNG Filling Station) Daska",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206870001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Sialkot",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Sahiwal Bypass, District Sahiwal",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sahiwal",
        "longi": "73.19043927",
        "Lati": "30.679466",
        "CusDesc": "Sahiwal Filling Station Sahiwal",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206960001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Sahiwal",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Al Hayat Filling station, Bhera Bhalwal Road, District Sargodha.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bhalwal",
        "longi": "72.89860744",
        "Lati": "32.3455518",
        "CusDesc": "Al Hayat Filling Station Bhalwal",
        "HSDPrice": "280.6556",
        "Services": [],
        "CusCode": "2010206910001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Sargodha",
        "PMGPrice": "274.5856",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Ch. Abdul Hameed Petroleum Services, Defence Road, Near Pull Aik, District Sialkot.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sialkot",
        "longi": "74.51885786",
        "Lati": "32.4721893",
        "CusDesc": "Ch. Abdul Hameed Petroleum Sialkot",
        "HSDPrice": "279.9147",
        "Services": [],
        "CusCode": "2010206880001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Sialkot",
        "PMGPrice": "273.8447",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "H-1696, Shahfaisal Colony, Shahdadpur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sanghar",
        "longi": "68.66180956",
        "Lati": "25.92930317",
        "CusDesc": "Al-Aziz Filling Station Shahdad Pur",
        "HSDPrice": "280.297",
        "Services": [],
        "CusCode": "2010206830001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-DLP)",
        "Region": "Karachi",
        "District": "Sanghar",
        "PMGPrice": "274.227",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Bahawalpur Road, Opposite Yaqoob Soap Factory, District Multan.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Multan",
        "longi": "71.49306329",
        "Lati": "30.113675",
        "CusDesc": "Muhammadi CNG & Filling Station Multan",
        "HSDPrice": "279.8309",
        "Services": [],
        "CusCode": "2010206980001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Multan",
        "PMGPrice": "273.7609",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Cheechawatni Bypass at Burewala Chowk, Tehsil Cheechawatni, District Sahiwal",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sahiwal",
        "longi": "72.70589207",
        "Lati": "30.52409071",
        "CusDesc": "Al-Ahad Filling Station Sahiwal",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206930001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Sahiwal",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Laider Kalan, Phalia-Mandi Bahauddin Road, Phalia, District Mandi Bahauddin",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mandi Bahauddin",
        "longi": "73.54895523",
        "Lati": "32.46178661",
        "CusDesc": "Mumtaz Filling Station Mandi Bahauddin",
        "HSDPrice": "279.8733",
        "Services": [],
        "CusCode": "2010206900001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Mandi Bahauddin",
        "PMGPrice": "273.8033",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Islamabad International Airport, Fateh Jhang, Islamabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Islamabad",
        "longi": "72.842172567577",
        "Lati": "33.55951413700711",
        "CusDesc": "Fleet Card - Falcon F/s IIAP",
        "HSDPrice": "279.8",
        "Services": [],
        "CusCode": "20101005600020008001",
        "CNGPrice": "0",
        "Sub_Region": "COCO-RWP",
        "Region": "COCO",
        "District": "Islamabad",
        "PMGPrice": "273.7",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Liberty Lahore",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - Liberty F/s Gulberg LHR",
        "HSDPrice": "279.8",
        "Services": [],
        "CusCode": "20101005300020012001",
        "CNGPrice": "0",
        "Sub_Region": "COCO-RWP",
        "Region": "COCO",
        "District": "Lahore",
        "PMGPrice": "273.7",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Islamabad International Airport, Fateh Jhang, Islamabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Islamabad",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - AERO F/s IIAP",
        "HSDPrice": "279.8",
        "Services": [],
        "CusCode": "20101005500020010001",
        "CNGPrice": "0",
        "Sub_Region": "COCO-RWP",
        "Region": "COCO",
        "District": "Islamabad",
        "PMGPrice": "273.7",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khushab Muzaffargarh Road Khushab",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Khushab",
        "longi": "72.25797736",
        "Lati": "32.24620306",
        "CusDesc": "Abdullah Petroleum Service Khushab",
        "HSDPrice": "280.8225",
        "Services": [],
        "CusCode": "2010206890001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Khushab",
        "PMGPrice": "274.7525",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Muridke, District Sheikhupura",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sheikhupura",
        "longi": "74.2584582",
        "Lati": "31.77985738",
        "CusDesc": "Super CNG & Filling Station Muridke",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206920001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Sheikhupura",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Tarhadda Chowk, Mianwali Road, Near Mayal Lawah, District Chakwal Talagang",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Talagang",
        "longi": "72.07478062",
        "Lati": "32.85607307",
        "CusDesc": "Muslim Waziristan 3 Filling Station Talagang",
        "HSDPrice": "281.0973",
        "Services": [],
        "CusCode": "2010206940001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Chakwal",
        "PMGPrice": "275.0273",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "GT Road Muridke towards Gujranwala District Shiekhupura",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sheikhupura",
        "longi": "74.25040481",
        "Lati": "31.82379017",
        "CusDesc": "GEO CNG Filling Station Sheikhupura",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206950001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Sheikhupura",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Chak No. 10 N.B. on Ajnala Road, Tehsil Bhalwal, District Sargodha",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sargodha",
        "longi": "72.879656",
        "Lati": "32.242927",
        "CusDesc": "Fast CNG & Filling Station Sargodha",
        "HSDPrice": "280.4279",
        "Services": [],
        "CusCode": "2010207000001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Sargodha",
        "PMGPrice": "274.3579",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Sibi Bypass, National Highway Quetta",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Quetta",
        "longi": "67.8426883",
        "Lati": "29.4952686",
        "CusDesc": "Imdad Trucking Station Quetta",
        "HSDPrice": "281.5267",
        "Services": [],
        "CusCode": "2010207080001",
        "CNGPrice": "0",
        "Sub_Region": "Quetta",
        "Region": "Quetta",
        "District": "Quetta",
        "PMGPrice": "275.4567",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Bannu Road Kohat City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kohat",
        "longi": "71.4430664",
        "Lati": "33.5824798",
        "CusDesc": "Cantt Filling Station Kohat",
        "HSDPrice": "279.7745",
        "Services": [],
        "CusCode": "2010207070001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Kohat",
        "PMGPrice": "273.7045",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Survey No. 223, Old G.T Road, Jehlum Cantt, District Jhelum",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Jhelum",
        "longi": "73.72727341",
        "Lati": "32.92609743",
        "CusDesc": "Jhelum CNG & Filling Station Jhelum",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207010001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Jhelum",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Askari Bypass, Near PC Hotel, Multan City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Multan",
        "longi": "71.42051593",
        "Lati": "30.14906888",
        "CusDesc": "Al Hamd Petroleum Service Multan",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010206990001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Multan",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Sound Bound Carriage Way National Highway (N-5), Before DHA # 2 Gate, Islamabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Islamabad",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Winner CNG Islamabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207060001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-Local",
        "Region": "Rawalpindi-2",
        "District": "Islamabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Airport Road, Quetta City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Quetta",
        "longi": "66.96226941",
        "Lati": "30.2598514",
        "CusDesc": "Al Qamar Filling Station Quetta",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207040001",
        "CNGPrice": "0",
        "Sub_Region": "Quetta",
        "Region": "Quetta",
        "District": "Quetta",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "G.T.Road Gujar Khan District Rawalpindi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gujar Khan",
        "longi": "73.32242902",
        "Lati": "33.23815482",
        "CusDesc": "Save CNG Filling Station Gujar Khan",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207020001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-Local",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Lahore Narowal Road Narowal",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Narowal",
        "longi": "74.84949783",
        "Lati": "32.08104075",
        "CusDesc": "City Filling Station Narowal",
        "HSDPrice": "280.6793",
        "Services": [],
        "CusCode": "2010207050001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Narowal",
        "PMGPrice": "274.6093",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Qadir Bakhsh Channer, Opposite Civil Hospital, Tehsil and Distrcit Bahawalpur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bahawalpur",
        "longi": "71.7218412",
        "Lati": "29.4114406",
        "CusDesc": "Shamim Khalid Petroleum Services Bahawalpur",
        "HSDPrice": "280.5362",
        "Services": [],
        "CusCode": "2010207030001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (SWL)",
        "Region": "Multan",
        "District": "Bahawalpur",
        "PMGPrice": "274.4662",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Kallar Syedan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Mahd Filling Station Kalar Syedan",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207150001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-East",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Plot No. ST-1, Qasba More, Mongopir Road, Karachi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Karachi",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Iqra Filling Station Qasba Town karachi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207110001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Karachi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Garlat, Tehsil Balakot & District Manshera",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mansehra",
        "longi": "73.3572446",
        "Lati": "34.55125639",
        "CusDesc": "Talha Petroleum Services Balakot City",
        "HSDPrice": "281.6625",
        "Services": [],
        "CusCode": "2010207130001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi North",
        "Region": "Rawalpindi-1",
        "District": "Mansehra",
        "PMGPrice": "275.5925",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Thatta Sajawal Road Opposite Shah Jahan Masjid Thatta City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Thatta",
        "longi": "67.92964808",
        "Lati": "24.74605009",
        "CusDesc": "Shah-e-Najaf 1 Petroleum Service Thatta",
        "HSDPrice": "280.1787",
        "Services": [],
        "CusCode": "2010207180001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Thatta",
        "PMGPrice": "274.1087",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Abdul Wali Khan on Bypass Road Chitral",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Chitral",
        "longi": "71.78669053",
        "Lati": "35.85575667",
        "CusDesc": "Chitral City Filling Station Chitral",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207140001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Chitral",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "22 KM, Sargodha Khushab Road, Tehsil Shahpur, District Sargodha",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sargodha",
        "longi": "72.49524291",
        "Lati": "32.24177214",
        "CusDesc": "Sultan Filling Station Shahpur",
        "HSDPrice": "280.5126",
        "Services": [],
        "CusCode": "2010207170001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Sargodha",
        "PMGPrice": "274.4426",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Swabi Road Par Hotti District Mardan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mardan",
        "longi": "72.0724824",
        "Lati": "34.2050504",
        "CusDesc": "Gul CNG & Filling Station Mardan",
        "HSDPrice": "279.7741",
        "Services": [],
        "CusCode": "2010207190001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Mardan",
        "PMGPrice": "273.7041",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Plot No 8, D-12 Markaz, Islamabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Islamabad",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - Margala View F/s D-12 ISB",
        "HSDPrice": "279.8",
        "Services": [],
        "CusCode": "20101005700020002001",
        "CNGPrice": "0",
        "Sub_Region": "COCO-RWP",
        "Region": "COCO",
        "District": "Islamabad",
        "PMGPrice": "273.7",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Sialkot Bypass, Gujranwala",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gujranwala",
        "longi": "74.2068991",
        "Lati": "32.2008412",
        "CusDesc": "Malik Petroleum Service Gujranwala",
        "HSDPrice": "280.0342",
        "Services": [],
        "CusCode": "2010207100001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Gujranwala",
        "PMGPrice": "273.9642",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Katchery Road, Tehsil & District Pakpattan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Pakpattan",
        "longi": "73.381433",
        "Lati": "30.35606432",
        "CusDesc": "Sardar Hakim Ali Dogar Petroleum Service Pakpattan",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207120001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Pakpattan",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Jahania Road Khanewal City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Khanewal",
        "longi": "71.91136391",
        "Lati": "30.29916947",
        "CusDesc": "Bismillah Petroleum Service Khanewal",
        "HSDPrice": "279.8204",
        "Services": [],
        "CusCode": "2010207160001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Khanewal",
        "PMGPrice": "273.7504",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Faisalabad to Sargodha Road, Tehsil & District Chiniot",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Chiniot",
        "longi": "72.9918315",
        "Lati": "31.7134752",
        "CusDesc": "Shahroze CNG & Filling Station Chiniot",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207090001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Chiniot",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "At Muree Road, Barakahu, Islamabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Islamabad",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - Murree Hills F/s Bharakahu ISB",
        "HSDPrice": "279.8",
        "Services": [],
        "CusCode": "20101005800020003001",
        "CNGPrice": "0",
        "Sub_Region": "COCO-RWP",
        "Region": "COCO",
        "District": "Islamabad",
        "PMGPrice": "273.7",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Yakhtiarabad Colony, Qazi Ahmed Road, Nawabshah City, Opposite Government Family Hospital and Medica",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Nawabshah",
        "longi": "68.38699291",
        "Lati": "26.25413977",
        "CusDesc": "Azaan Petroleum Service Nawabshah",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207280001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-DLP)",
        "Region": "Karachi",
        "District": "Nowsheraferoz",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Main Balakot Tranna , Manshera",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mansehra",
        "longi": "73.3534937",
        "Lati": "34.4991507",
        "CusDesc": "Karvan 2 Filling Station Balakot",
        "HSDPrice": "281.6708",
        "Services": [],
        "CusCode": "2010207290001",
        "CNGPrice": "0",
        "Sub_Region": "Key Accounts - RWP-N",
        "Region": "Key Accounts - RWP",
        "District": "Mansehra",
        "PMGPrice": "275.6008",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Pindi Bhattian Road Chiniot City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Chiniot",
        "longi": "72.99216043",
        "Lati": "31.72199377",
        "CusDesc": "Royal CNG & Filling Station Chiniot",
        "HSDPrice": "279.7751",
        "Services": [],
        "CusCode": "2010207250001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Chiniot",
        "PMGPrice": "273.7051",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Bostan Khan Road, Chaklala Scheme-III",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "73.09655718",
        "Lati": "33.58307028",
        "CusDesc": "Hanif Qureshi 1 Petroleum Service Rawalpindi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207230001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-Local",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Plot # 288-A Khyber Block Alama Iqbal Town Lahore",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - Fine Fuel Services LHR",
        "HSDPrice": "279.8",
        "Services": [],
        "CusCode": "20101006100020003001",
        "CNGPrice": "0",
        "Sub_Region": "COCO-LHR",
        "Region": "COCO",
        "District": "Lahore",
        "PMGPrice": "273.7",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Topi-2 Filling Station, Topi Tarbela Road, Swabi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Swabi",
        "longi": "72.63654687",
        "Lati": "34.05798175",
        "CusDesc": "Topi 2 Filling Station Swabi",
        "HSDPrice": "280.106",
        "Services": [],
        "CusCode": "2010207260001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Swabi",
        "PMGPrice": "274.036",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khewat No. 128/123, Khatooni No. 343 to 347, Khata No. 128/1545, Khasra No. 29/4 situated at Sahiwal",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Pakpattan",
        "longi": "73.03929891",
        "Lati": "30.31877365",
        "CusDesc": "Empire-II Filling Station Airfwala City",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207310001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Pakpattan",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Kotli-Sarsawa Rd near Kotli City, Kotli",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kotli",
        "longi": "73.87472876",
        "Lati": "33.53911134",
        "CusDesc": "Razi Filling Station Kotli",
        "HSDPrice": "278.96",
        "Services": [],
        "CusCode": "2010207300001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-East",
        "Region": "Rawalpindi-2",
        "District": "Kotli",
        "PMGPrice": "272.89",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Katlang Service area Swat Motorway",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Swat",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - Katlang Service Area North",
        "HSDPrice": "279.8",
        "Services": [],
        "CusCode": "20101006200020003001",
        "CNGPrice": "0",
        "Sub_Region": "COCO-PSH",
        "Region": "COCO",
        "District": "Swat",
        "PMGPrice": "273.7",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khasra No. 113/8, Khewat No. 349/340 (340, 355 old), Khatooni no. 846-854 (834-842 old), Mouza Tauda",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Multan",
        "longi": "71.30776772",
        "Lati": "29.90413587",
        "CusDesc": "Shad Petroleum Service Shujaabad",
        "HSDPrice": "279.9777",
        "Services": [],
        "CusCode": "2010207210001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Multan",
        "PMGPrice": "273.9077",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khata No. 29/29, 246/243, 43/43), Khatooni no. 72-77, 470, 112), Rectangle/Muraba No. 126/9, Killa n",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rahim Yar Khan",
        "longi": "70.44258031",
        "Lati": "28.71754536",
        "CusDesc": "New Sarhad Miran Shah 1 Petroleum Service Rahim Yar Khan",
        "HSDPrice": "281.5872",
        "Services": [],
        "CusCode": "2010207220001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (SWL)",
        "Region": "Multan",
        "District": "Rahim Yar Khan",
        "PMGPrice": "275.5172",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Tandlian wala Service Area,  North, Multan Lahore Motorway, Tandlian Wala, Faisalabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Tandlian Wala",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - Tandlian Wala Service Area North",
        "HSDPrice": "279.8",
        "Services": [],
        "CusCode": "20101005900020003001",
        "CNGPrice": "0",
        "Sub_Region": "",
        "Region": "",
        "District": "Faisalabad",
        "PMGPrice": "273.7",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Kotli Road, Mirpur, AJK",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mirpur",
        "longi": "73.78597709",
        "Lati": "33.13411464",
        "CusDesc": "Hassan Petroleum Service Kotli Road Mirpur (AJK)",
        "HSDPrice": "278.96",
        "Services": [],
        "CusCode": "2010207200001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-East",
        "Region": "Rawalpindi-2",
        "District": "Mirpur",
        "PMGPrice": "272.89",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Tandlian wala Service Area, South, Lahore Multan Motorway, Tandlian Wala, Faisalabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Tandlian Wala",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - Tandlian Wala Service Area South",
        "HSDPrice": "279.8",
        "Services": [],
        "CusCode": "20101006000020003001",
        "CNGPrice": "0",
        "Sub_Region": "COCO-FSD",
        "Region": "COCO",
        "District": "Faisalabad",
        "PMGPrice": "273.7",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Sialkot Bypass Gujranwala",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gujranwala",
        "longi": "74.22795615",
        "Lati": "32.18299417",
        "CusDesc": "Mehar & Sons Petroleum Service Gujranwala",
        "HSDPrice": "280.0821",
        "Services": [],
        "CusCode": "2010207240001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Gujranwala",
        "PMGPrice": "274.0121",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Affiatabad Sust Tehsil Gojal Distric Hunza at Km 720-721 on N-35",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Hunza-Nagar",
        "longi": "74.8210791",
        "Lati": "36.6883298",
        "CusDesc": "Natco Mountain-3 Filling Station Hunza",
        "HSDPrice": "278.96",
        "Services": [],
        "CusCode": "2010207270001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi North",
        "Region": "Rawalpindi-1",
        "District": "Hunza",
        "PMGPrice": "272.89",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Khewat No. 1172,1035, Khatooni no. 2186 to 2187/1, 1970, Khasra nos. 3727/4,3727/5,3727,1033,1034 at",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Islamabad",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - Kurri F/s Bahria Enclave ISB",
        "HSDPrice": "279.8",
        "Services": [],
        "CusCode": "20101006400020003001",
        "CNGPrice": "0",
        "Sub_Region": "COCO-RWP",
        "Region": "COCO",
        "District": "Islamabad",
        "PMGPrice": "273.7",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Mouza Mirpur Hussain, Rawalpindi-Attock Road, Attock",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Attock",
        "longi": "72.3998311",
        "Lati": "33.8172966",
        "CusDesc": "Musadar Filling Station Attock",
        "HSDPrice": "280.1243",
        "Services": [],
        "CusCode": "2010207330001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi North",
        "Region": "Rawalpindi-1",
        "District": "Attock",
        "PMGPrice": "274.0543",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Katlang Service area Swat Motorway",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Swat",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - Katlang Service Area South",
        "HSDPrice": "279.8",
        "Services": [],
        "CusCode": "20101006300020003001",
        "CNGPrice": "0",
        "Sub_Region": "COCO-PSH",
        "Region": "COCO",
        "District": "Swat",
        "PMGPrice": "273.7",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Johar Town Lahore",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - Top F/s Johar Town LHR",
        "HSDPrice": "279.8",
        "Services": [],
        "CusCode": "20101006500020003001",
        "CNGPrice": "0",
        "Sub_Region": "COCO-LHR",
        "Region": "COCO",
        "District": "Lahore",
        "PMGPrice": "273.7",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Plot # F-853, F Block, Satellite Town, Rawalpindi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "73.059911",
        "Lati": "33.643025",
        "CusDesc": "Gastech Rawal CNG Station Rawalpindi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207340001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-Local",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Fatehpur Gujrat Road Near Fatehpur Chowk Mouza Chichian Shams, Tehsil and District Gujrat",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gujrat",
        "longi": "74.1145964",
        "Lati": "32.6676095",
        "CusDesc": "Al Hakim Petroleum Service-2 Gujrat",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207320001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Gujrat",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Chowk Choratha, Dera Ghazi Khan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Dera Gazi Khan",
        "longi": "70.65117153",
        "Lati": "30.07921942",
        "CusDesc": "United Gurmani Filling Station D.G Khan",
        "HSDPrice": "279.9087",
        "Services": [],
        "CusCode": "2010207350001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Dera Ghazi Khan",
        "PMGPrice": "273.8387",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Lahore-Sargodha Road, Tehsil Pindi Bhattian, District Hafizabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Hafizabad",
        "longi": "73.406227",
        "Lati": "31.882898",
        "CusDesc": "Bhatti Petroleum Service Pindi Bhattian",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207620001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Gujranwala",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Plot Survey # NACLASS-98, Deh & Tapo Moachko, Taluka Mauripur on RCD Highway, Karachi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Karachi",
        "longi": "66.89160445",
        "Lati": "25.01072215",
        "CusDesc": "Gateway Filling Station Karachi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207550001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Karachi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Plot No 31,Davis Road, Lahore",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "74.340404",
        "Lati": "31.556133",
        "CusDesc": "Sobey's Petroleum Services Lahore",
        "HSDPrice": "279.7824",
        "Services": [],
        "CusCode": "2010207710001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Lahore",
        "PMGPrice": "273.7124",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "As per computerized record Khewat/Khata No. 73, (as per old record Khata No. 66), as per computerize",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sahiwal",
        "longi": "72.69127073",
        "Lati": "30.55260116",
        "CusDesc": "Sangjani Filling Station Sahiwal",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207400001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Sahiwal",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Survey/Plot # 175, Tapo Dodal, Deh: Khadkar, Ratto Dero - Larkana to Karachi Road, Taluka & District",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Larkana",
        "longi": "68.194029",
        "Lati": "27.597582",
        "CusDesc": "Zain Filling Station Larkana",
        "HSDPrice": "280.1155",
        "Services": [],
        "CusCode": "2010207510001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-SKP)",
        "Region": "Karachi",
        "District": "Larkana",
        "PMGPrice": "274.0455",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Multan Road Shorkot, Dist Jhang",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Shorkot",
        "longi": "72.05430963",
        "Lati": "30.77947391",
        "CusDesc": "Al-Ghani Petroleum Service Shorkot",
        "HSDPrice": "280.5601",
        "Services": [],
        "CusCode": "2010207360001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Jhang",
        "PMGPrice": "274.4901",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Tehsil Kallur Kor, District Bhakkar",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bhakkar",
        "longi": "71.488392",
        "Lati": "32.059352",
        "CusDesc": "Syedana Al-Arabi Petroleum Service Bhakkar",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207380001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Bhakkar",
        "PMGPrice": "273.7041",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Tando Adam, Sanghar Road, Odero Lal Matiari",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Matiari",
        "longi": "68.57856704",
        "Lati": "25.71042297",
        "CusDesc": "Odero Lal Filling Station Matiari",
        "HSDPrice": "280.3092",
        "Services": [],
        "CusCode": "2010207560001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Matiari",
        "PMGPrice": "274.2392",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Mundi Khel on Narowal-Shahkargarh Road, Tehsil Shakargarh, District Narowal",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Narowal",
        "longi": "75.057765",
        "Lati": "32.129974",
        "CusDesc": "Friends Petroleum Service Narowal",
        "HSDPrice": "280.6672",
        "Services": [],
        "CusCode": "2010207440001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Narowal",
        "PMGPrice": "274.5972",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Deh Chajro Taluka Kunri on Bustan Road District Umerkot",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Umerkot",
        "longi": "69.55289175",
        "Lati": "25.17799273",
        "CusDesc": "Gill Filling Station Umerkot",
        "HSDPrice": "281.9334",
        "Services": [],
        "CusCode": "2010207370001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Umerkot",
        "PMGPrice": "275.8634",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress":"Sharah-e-Faisal, JIAP  Karachi.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Karachi",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - Star Gate F/s KHI",
        "HSDPrice": "279.8",
        "Services": [],
        "CusCode": "20101006600020003001",
        "CNGPrice": "0",
        "Sub_Region": "COCO-KHI",
        "Region": "COCO",
        "District": "Karachi",
        "PMGPrice": "273.7",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Survey/Plot # 318, Sheet No. III, Sector No. 3, Frontier Colony, Orangi Township, Karachi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Karachi",
        "longi": "67.00194838",
        "Lati": "24.92486652",
        "CusDesc": "Al-Fahad Filling Station Karachi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207520001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Karachi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Survey/Plot # 152, Deh 107-A, Taluka Shujaabad, Near Toll Plaza exit Mirpurkhas",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Hyderabad",
        "longi": "68.92733347",
        "Lati": "25.50822569",
        "CusDesc": "Misri Filling Station MirpurKhas",
        "HSDPrice": "280.9898",
        "Services": [],
        "CusCode": "2010207530001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Hyderabad",
        "PMGPrice": "274.9187",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Plot no.38, G-11 Markaz, Islamabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Islamabad",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - Islamabad F/s G-11 ISB",
        "HSDPrice": "279.8",
        "Services": [],
        "CusCode": "20101006700020003001",
        "CNGPrice": "0",
        "Sub_Region": "",
        "Region": "",
        "District": "Islamabad",
        "PMGPrice": "273.7",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khewat No. 81, 302/301, 347/ 346, 84, Tehsil Kabirwala and District Khanewal",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kabirwala",
        "longi": "71.92489161",
        "Lati": "30.48810522",
        "CusDesc": "New Al Rehman Filling Station Kabirwala",
        "HSDPrice": "280.0342",
        "Services": [],
        "CusCode": "2010207410001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Khanewal",
        "PMGPrice": "273.9642",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Mayana Gondal on Gujrat -Sargodha Mandi Bahauddin Road,Tehsil Malikwal District Mandi Bahaudin",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mandi Bahauddin",
        "longi": "73.128069",
        "Lati": "32.390352",
        "CusDesc": "Al-Waqar Petroleum Service Mandi Bahauddin",
        "HSDPrice": "280.3049",
        "Services": [],
        "CusCode": "2010207650001",
        "CNGPrice": "0",
        "Sub_Region": "Key Accounts - RWP-L",
        "Region": "Key Accounts - RWP",
        "District": "Mandi Bahauddin",
        "PMGPrice": "274.2349",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Hub City, District Lasbeela",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Hub",
        "longi": "66.88968517",
        "Lati": "25.02909035",
        "CusDesc": "Sakran Filling Station Hub City",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207700001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Lasbella",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Toba Tek Singh-Jhang Road, Tehsil and District Toba Tek Singh",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Toba Tek Singh",
        "longi": "72.459312",
        "Lati": "31.0137",
        "CusDesc": "Al-Aziz Filling Station Toba Tek Singh",
        "HSDPrice": "280.2853",
        "Services": [],
        "CusCode": "2010207720001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Toba Tek Sing",
        "PMGPrice": "274.2153",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Salmoon on Rawat Chakri Road, Tehsil & District Rawalpindi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "72.9151667",
        "Lati": "33.3023247",
        "CusDesc": "Taj Petroleum Service Chakri Road Rawalpindi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207730001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-West",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khewat No.411,Khatooni No.758 Qittat 123 situated at Raikay Phalia City District Mandi Bahaduddin",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mandi Bahauddin",
        "longi": "73.619316",
        "Lati": "32.43348",
        "CusDesc": "Haider Petroleum Service Phalia City",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207660001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Mandi Bahauddin",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mahal Raja, G.T Road, 8 KM from Kamoke-Lahore, Tehsil Kamoke, District Gujranwala",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kamoke",
        "longi": "74.23893196",
        "Lati": "31.89020008",
        "CusDesc": "Roshnee CNG & Filling Station Kamoke",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207610001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Gujranwala",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Block No. 3, S Block, Commercial Area, Phase II, Defence Road, DHA Lahore.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "74.3891601",
        "Lati": "31.4706116",
        "CusDesc": "DHA Filling Station Lahore",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207570001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Lahore",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khewat No.46,situated at Mouza Kala Shadian Phalia Road Tehsil Phalia District Mandi Bahauddin",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mandi Bahauddin",
        "longi": "73.570312",
        "Lati": "32.325936",
        "CusDesc": "Syed Petroleum Service Phalia",
        "HSDPrice": "280.1243",
        "Services": [],
        "CusCode": "2010207670001",
        "CNGPrice": "0",
        "Sub_Region": "Key Accounts - RWP-L",
        "Region": "Key Accounts - RWP",
        "District": "Mandi Bahauddin",
        "PMGPrice": "274.0543",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Khewat No. 369, Khatooni No. 527, Khasra No. 1930/335, 1932/336, 337, Tehsil & District Sialkot",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sialkot",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Durrani CNG & Filling Station Sialkot",
        "HSDPrice": "279.9685",
        "Services": [],
        "CusCode": "2010207540001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Sialkot",
        "PMGPrice": "273.8985",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khewat No. 6 Khatooni No. 20 to 25, Muraba 235/9, Killa/Khasra No. 6, situated at Mouza Bikhrani, Te",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rahim Yar Khan",
        "longi": "28.8395086",
        "Lati": "70.51081",
        "CusDesc": "Al Rehman Petroleum Service Khanpur (R.Y. Khan)",
        "HSDPrice": "281.467",
        "Services": [],
        "CusCode": "2010207780001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (SWL)",
        "Region": "Multan",
        "District": "Rahim Yar Khan",
        "PMGPrice": "275.397",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "located on Kamalia-Chichawatni Road within the registration Tehsil Kamalia and District Toba Tek Sin",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kamalia",
        "longi": "72.65556749",
        "Lati": "30.72445171",
        "CusDesc": "Sardar Akbar Ali Dogar Petroleum Service Kamalia",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207680001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Toba Tek Sing",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Mouza Lohi Bher, on PWD Link Road, Tehsil & District Islamabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Islamabad",
        "longi": "73.13502167",
        "Lati": "33.56160998",
        "CusDesc": "Mehboob Filling Station PWD Islamabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207420001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-Local",
        "Region": "Rawalpindi-2",
        "District": "Islamabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Located at Mouza Ratoo Kala, on Dohri to Bhera Road, Tehsil Bhalwal and District Sargodha",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bhalwal",
        "longi": "73.05139",
        "Lati": "32.391288",
        "CusDesc": "Al-Ghazi Petroleum Service Bhalwal",
        "HSDPrice": "280.9538",
        "Services": [],
        "CusCode": "2010207690001",
        "CNGPrice": "0",
        "Sub_Region": "Key Accounts - FSD",
        "Region": "Key Accounts - RWP",
        "District": "Sargodha",
        "PMGPrice": "274.8838",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Hakla Service Area North Bound, Islamabad-Peshawar Motorway, M-1.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - HAKLA Service Area North",
        "HSDPrice": "279.8",
        "Services": [],
        "CusCode": "20101006800020003001",
        "CNGPrice": "0",
        "Sub_Region": "COCO-RWP",
        "Region": "COCO",
        "District": "Rawalpindi",
        "PMGPrice": "273.7",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Hakla Service Area South Bound, Islamabad-Peshawar Motorway, M-1.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - HAKLA Service Area South",
        "HSDPrice": "279.8",
        "Services": [],
        "CusCode": "20101006900020003001",
        "CNGPrice": "0",
        "Sub_Region": "COCO-RWP",
        "Region": "COCO",
        "District": "Rawalpindi",
        "PMGPrice": "273.7",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "St. 1, Sector 6-B of Deh Sangal, KDA Scheme 33, Main Super Highway, S.I.T.E Town, Karachi West",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Karachi",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Five Star CNG & Filling Station Karachi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207830001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Karachi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khewat no. 9, Khata no.40 Khasra no.179 at  Mouza bandi Mir Samdani Tehsil and District Muzaffarabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Muzaffarabad",
        "longi": "73.4721943",
        "Lati": "34.395185",
        "CusDesc": "Ajaz Gillani Petroleum Services Muzaffarabad",
        "HSDPrice": "278.96",
        "Services": [],
        "CusCode": "2010207770001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-East",
        "Region": "Rawalpindi-2",
        "District": "Muzaffarabad",
        "PMGPrice": "272.89",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Survey No. 102, situated at cantonment board chowney chowk, Jehlum Cantt",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Jhelum",
        "longi": "73.71861952",
        "Lati": "32.92630852",
        "CusDesc": "Jhelum Cantt Filling Station Jhelum",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207490001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Jhelum",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Vehari Luddan Hasilpur Road Tehsil & District Vehari",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Vehari",
        "longi": "72.553309",
        "Lati": "29.889503",
        "CusDesc": "Moon Petroleum Service Vehari",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207750001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Vehari",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Multan Road Pull Daat Dera Ghazi Khan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Dera Gazi Khan",
        "longi": "30.0330776",
        "Lati": "70.6414166",
        "CusDesc": "Rafay Rehman Petroleum Service Dera Ghazi Khan",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207810001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Dera Ghazi Khan",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Near Bus Stand, Kahuta, Rawalpindi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kahuta",
        "longi": "73.391932",
        "Lati": "33.587828",
        "CusDesc": "Royal Petroleum Service Kahuta City",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207820001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-East",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Survey/Plot # X/2-A-1, Sindh Industrial Trading Estate (S.I.T.E) Area, Karachi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Karachi",
        "longi": "67.0149397",
        "Lati": "24.90846425",
        "CusDesc": "Metro CNG & Filling Station Karachi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207500001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Karachi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Block B, Satellite Town, Murree Road, Rawalpindi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "73.07353758",
        "Lati": "33.63484463",
        "CusDesc": "Midway CNG Station Rawalpindi",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207390001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-Local",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "At Mouza Abben Chak, on GT Road Rawat",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "73.1970683",
        "Lati": "33.4815396",
        "CusDesc": "Al-Qamar Petroleum Services Rawat (Rawalpindi)",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207470001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-Local",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Tank Link Road Towards Indus Highway, Dera Pezu, District Trank",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Tank",
        "longi": "70.401098",
        "Lati": "32.229945",
        "CusDesc": "Nawaz Petroleum Services Tank",
        "HSDPrice": "280.1002",
        "Services": [],
        "CusCode": "2010207590001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Tank",
        "PMGPrice": "274.0302",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "TOPI F/S, Rashakei Service Area. Peshawar-Islamabad Motorway Mardan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mardan",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - Rashakai Service Area North",
        "HSDPrice": "279.8",
        "Services": [],
        "CusCode": "20101007000020003001",
        "CNGPrice": "0",
        "Sub_Region": "COCO-PSH",
        "Region": "COCO",
        "District": "Mardan",
        "PMGPrice": "273.7",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Survey # 75, Deh Konbharyo, Tapo Kharyo Ghullam Shah, Taluka Islamkot District Tharparkar",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Tharparkar",
        "longi": "70.24720883",
        "Lati": "24.69980348",
        "CusDesc": "Sarwari 3 Filling Station Tharparkar",
        "HSDPrice": "282.5421",
        "Services": [],
        "CusCode": "2010207460001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Thar Parkar",
        "PMGPrice": "276.4721",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Jhok Yar Shah, Indus Highway Road, Dera Ghazi Khan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Dera Gazi Khan",
        "longi": "70.6676285",
        "Lati": "30.1236939",
        "CusDesc": "Younas Petroleum Service D.G. Khan",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207800001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Dera Ghazi Khan",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Murtazabad, Main Karakuram Highway Tehsil Aliabad District Hunza  detailed as at Khasra no. 28",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Hunza-Nagar",
        "longi": "74.6083851",
        "Lati": "36.2790222",
        "CusDesc": "Hunza Filling Station Aliabad (Hunza)",
        "HSDPrice": "278.96",
        "Services": [],
        "CusCode": "2010207850001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi North",
        "Region": "Rawalpindi-1",
        "District": "Hunza",
        "PMGPrice": "272.89",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Serai Khula, NHA, N-5 Taxila Contonment, Rawalpindi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "72.80377328",
        "Lati": "33.73233351",
        "CusDesc": "Shafeeq Petroleum and Fatima CNG Taxila",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207840001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-West",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khasra 1/26, Khewat 52/33, Khatooni 52, Mahaal Gheega (Haqiqa), District Kharian",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kharian",
        "longi": "73.8497923",
        "Lati": "32.7913262",
        "CusDesc": "Fine CNG Filling Station Kharian",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207890001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Gujrat",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khewat no. (New 1128/1106) (Old 1106/1013), Tehsil Raiwind, District Lahore.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "74.08935956",
        "Lati": "31.28111642",
        "CusDesc": "Sitara Filling Station Raiwind Rd LHR",
        "HSDPrice": "280.0802",
        "Services": [],
        "CusCode": "2010207450001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Lahore",
        "PMGPrice": "274.0102",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Kotla Arab Ali Khan, Near Khatm-e-Nabuwat Chowk, Tehsil Kharian, District Gujrat",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kharian",
        "longi": "74.0805864",
        "Lati": "32.8494345",
        "CusDesc": "Nazir Petroleum Service Kharian",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207870001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Gujrat",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Situated at Chak No. 12/1-AL, Tehsil Renala Khurd and District Okara",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Renala Khurd",
        "longi": "73.593949",
        "Lati": "30.870646",
        "CusDesc": "Hi Noon CNG & Filling Station Renala Khurd",
        "HSDPrice": "279.9095",
        "Services": [],
        "CusCode": "2010207430001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Okara",
        "PMGPrice": "273.8395",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Adda Zakhira on Dunyapur- Do Kota- Mailsi Road, Tehsil Dunyapur & District Lodhran",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Dunya Pur",
        "longi": "71.89048669",
        "Lati": "29.81015085",
        "CusDesc": "Yes-4 Petroleum Services Dunyapur",
        "HSDPrice": "280.0483",
        "Services": [],
        "CusCode": "2010207630001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (SWL)",
        "Region": "Multan",
        "District": "Lodhran",
        "PMGPrice": "273.9783",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Plot Survey no. 02, Situated at Deh Morho Jabal, Taluka Kotri, District Jamshoro",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Jamshoro",
        "longi": "68.2846039",
        "Lati": "25.5363769",
        "CusDesc": "Asad Petroleum Service Kotri",
        "HSDPrice": "280.4285",
        "Services": [],
        "CusCode": "2010207880001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Jamshoro",
        "PMGPrice": "274.3585",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khasra#4647/4294/3841,Khewat No.79,81,Situated at Circular Road, Tehsil Daska & Dist Sialkot",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Daska",
        "longi": "74.35827874",
        "Lati": "32.3413134",
        "CusDesc": "Hadi Filling Station Daska",
        "HSDPrice": "279.8837",
        "Services": [
            {
                "ServiceCode": "001",
                "ServiceDes": "Tyre Shop"
            },
            {
                "ServiceCode": "002",
                "ServiceDes": "Tuck Shop"
            }
        ],
        "CusCode": "2010207640001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Sialkot",
        "PMGPrice": "273.8137",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khewat No. 208/206, Khatooni No.564  Mouza Pindora Hardo Tehsil Kallar Syedan Distric Rawalpindi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "73.530133",
        "Lati": "33.382308",
        "CusDesc": "Gujjar 1 Filling station Kallar Syedan",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207760001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-East",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khewat no. 1/1, Khata # 874, Khatooni nos. 1010/943, 941,(909/836, 911/839 Old, Khasra # 1900/1, 190",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mirpur",
        "longi": "73.747046",
        "Lati": "33.118016",
        "CusDesc": "Tayyab & Waqas Filling Station Mirpur",
        "HSDPrice": "278.96",
        "Services": [],
        "CusCode": "2010207860001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-East",
        "Region": "Rawalpindi-2",
        "District": "Mirpur",
        "PMGPrice": "272.89",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Balkana, Khushab Road, Rangpur Chowk, Muzaffargarh",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Muzaffargarh",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Shafique Petroleum Services Muzaffargarh",
        "HSDPrice": "280.1893",
        "Services": [],
        "CusCode": "2010207580001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Muzaffargarh",
        "PMGPrice": "274.1193",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "5 Km Faisalabad Road, Jhang Bypass, Jhang",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Jhang",
        "longi": "31.3117979",
        "Lati": "72.3709398",
        "CusDesc": "Barkat Petroleum Service Jhang",
        "HSDPrice": "280.07",
        "Services": [],
        "CusCode": "2010207480001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Jhang",
        "PMGPrice": "274.0",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "TOPI F/S, Rashakei Service Area. Peshawar-Islamabad Motorway Mardan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mardan",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - Rashakai Service Area South",
        "HSDPrice": "279.8",
        "Services": [],
        "CusCode": "20101007100020003001",
        "CNGPrice": "0",
        "Sub_Region": "",
        "Region": "",
        "District": "Mardan",
        "PMGPrice": "273.7",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Multan By Pass, Bahawalpur Chowk, Multan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Multan",
        "longi": "71.501764",
        "Lati": "30.154759",
        "CusDesc": "Rehber CNG & Filling Station Multan",
        "HSDPrice": "279.8206",
        "Services": [],
        "CusCode": "2010207900001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Multan",
        "PMGPrice": "273.7506",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Near Jacaranda Club, DHA Phase-II, Islamabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Islamabad",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - AAJ P/s DHA Phase-II ISB",
        "HSDPrice": "279.8",
        "Services": [],
        "CusCode": "20101007200020003001",
        "CNGPrice": "0",
        "Sub_Region": "COCO-RWP",
        "Region": "COCO",
        "District": "Islamabad",
        "PMGPrice": "273.7",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Bhimber Road Kakrali Kharian, Gujrat",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gujrat",
        "longi": "74.0663516",
        "Lati": "32.8385975",
        "CusDesc": "Marhana Filling Station Gujrat",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207600001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Gujrat",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "On Mingora Sawari Buner Road Tehsil Daggar District Buner",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Buner",
        "longi": "72.383462",
        "Lati": "34.50898",
        "CusDesc": "Aschezai Filling Station Buner",
        "HSDPrice": "280.9228",
        "Services": [],
        "CusCode": "2010207740001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Buner",
        "PMGPrice": "274.8528",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khewat no. 5, 18, 20, 359 Khatooni no. 36 to 59, 88, 91, 1083 to 1100 Khasra no. 1542/476300, 166/24",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mandi Bahauddin",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Five Star Petroleum Service Mandi Bahauddin",
        "HSDPrice": "279.9871",
        "Services": [],
        "CusCode": "2010207790001",
        "CNGPrice": "0",
        "Sub_Region": "Key Accounts - RWP-L",
        "Region": "Key Accounts - RWP",
        "District": "Mandi Bahauddin",
        "PMGPrice": "273.9171",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khewat no. 768/755, Khatooni No. 1418 to 1420, Murabah no. 352, Khasra Nos. 8/2, 9/1,",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mianwali",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Zia Petroleum Service Mianwali",
        "HSDPrice": "279.773",
        "Services": [],
        "CusCode": "2010208020001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Mianwali",
        "PMGPrice": "273.703",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Rawalpindi Kohat Road near Kohat Cement, Kohat",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kohat",
        "longi": "71.5394116",
        "Lati": "33.5386825",
        "CusDesc": "Ishaq Petroleum Services Kohat",
        "HSDPrice": "279.7745",
        "Services": [],
        "CusCode": "2010207950001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Kohat",
        "PMGPrice": "273.7045",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khewat No. 215/209, Khatooni No. 1574-1579, Khasra No. 159/17, situated at Motorway Toll Plaza, on M",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Multan",
        "longi": "71.5711564",
        "Lati": "30.1357114",
        "CusDesc": "Islamabad Filling Station Multan",
        "HSDPrice": "279.8918",
        "Services": [],
        "CusCode": "2010207970001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Multan",
        "PMGPrice": "273.8218",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Blue Area Islamabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Islamabad",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - Hassan F/s Blue Area ISB",
        "HSDPrice": "279.8",
        "Services": [],
        "CusCode": "20101007300020003001",
        "CNGPrice": "0",
        "Sub_Region": "COCO-RWP",
        "Region": "COCO",
        "District": "Islamabad",
        "PMGPrice": "273.7",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Khewat No233/203,Khatooni No293, Khasra Nos5450, 5451, 5455, Tehsil Model Town & Dist. Lahore",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "74.2908916",
        "Lati": "31.3915639",
        "CusDesc": "Al Qadir Petroleum Services Lahore",
        "HSDPrice": "279.8973",
        "Services": [],
        "CusCode": "2010207980001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Lahore",
        "PMGPrice": "273.8273",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Dharema on Lahore-Sargodha-Khushab-Mianwali-Bannu Road Tehsil & District Sargodha",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sargodha",
        "longi": "32.07754805",
        "Lati": "72.65389082",
        "CusDesc": "Punjab Petroleum Service Sargodha",
        "HSDPrice": "280.3212",
        "Services": [],
        "CusCode": "2010208000001",
        "CNGPrice": "0",
        "Sub_Region": "Key Accounts - FSD",
        "Region": "Key Accounts - RWP",
        "District": "Sargodha",
        "PMGPrice": "274.2512",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Muridwala Service Area, North, Multan Lahore Motorway, Muridwala, Faisalabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Faisalabad",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - Muridwala Service Area North",
        "HSDPrice": "279.8",
        "Services": [],
        "CusCode": "20101007400020003001",
        "CNGPrice": "0",
        "Sub_Region": "",
        "Region": "",
        "District": "Faisalabad",
        "PMGPrice": "273.7",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Plot # G-66, Situated at Commercial Area Zero Point, Uthal, District Lasbela, Balochistan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lasbela",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Zero Point Filling Station Lasbella",
        "HSDPrice": "280.7997",
        "Services": [],
        "CusCode": "2010207960001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Lasbella",
        "PMGPrice": "274.7297",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "situated at Mouza Kohawar Kalan on Darya Khan-Bhakkar Road, within the registration Tehsil Darya Kha",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bhakkar",
        "longi": "71.102972",
        "Lati": "31.758559",
        "CusDesc": "Al Raza Hattar 2 Filling Station Bhakkar",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010208010001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Bhakkar",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Sahiwal to Bhera Via Shahpur Road Tehsil Bhera & District Sargodha",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sargodha",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Shah Sultan Petroleum Service Bhera (Sargodha)",
        "HSDPrice": "280.7269",
        "Services": [],
        "CusCode": "2010207910001",
        "CNGPrice": "0",
        "Sub_Region": "Key Accounts - FSD",
        "Region": "Key Accounts - RWP",
        "District": "Sargodha",
        "PMGPrice": "274.6569",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Achar on kohat road, Peshawar",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Peshawar",
        "longi": "71.5639222",
        "Lati": "33.9791055",
        "CusDesc": "Haji Baba CNG & Filling Station Peshawar",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010207930001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Peshawar",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Shahi Road, at Mouza Sultan Pur Tehsil & District Rahim Yar Khan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rahim Yar Khan",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Malik Feroz Ud Din Petroleum Service Rahim Yar Khan",
        "HSDPrice": "281.9932",
        "Services": [],
        "CusCode": "2010207940001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (SWL)",
        "Region": "Multan",
        "District": "Rahim Yar Khan",
        "PMGPrice": "275.9232",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Maira Prang on Charsadda (M-1) Road Tehsil and District Charsadda",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Charsadda",
        "longi": "71.774973",
        "Lati": "34.132296",
        "CusDesc": "Ekhwan-1 Filling Station Charsadda",
        "HSDPrice": "279.7808",
        "Services": [],
        "CusCode": "2010208030001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Charsadda",
        "PMGPrice": "273.7108",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Muridwala Service Area, South, Multan Lahore Motorway, Muridwala, Faisalabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Faisalabad",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - Muridwala Service Area South",
        "HSDPrice": "279.8",
        "Services": [],
        "CusCode": "20101007500020003001",
        "CNGPrice": "0",
        "Sub_Region": "",
        "Region": "",
        "District": "Faisalabad",
        "PMGPrice": "273.7",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Nankana Sb Service Area, North, Multan Lahore Motorway, Nankana Sahib",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Nankana Sahib",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - Nankana Sb Service Area North",
        "HSDPrice": "279.8",
        "Services": [],
        "CusCode": "20101007600020003001",
        "CNGPrice": "0",
        "Sub_Region": "COCO-FSD",
        "Region": "COCO",
        "District": "Nankana Sahib",
        "PMGPrice": "273.7",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Nankana Sb Service Area, South, Multan Lahore Motorway, Nankana Sahib",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Nankana Sahib",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - Nankana Sb Service Area South",
        "HSDPrice": "279.8",
        "Services": [],
        "CusCode": "20101007700020003001",
        "CNGPrice": "0",
        "Sub_Region": "COCO-FSD",
        "Region": "COCO",
        "District": "Nankana Sahib",
        "PMGPrice": "273.7",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Main Malakand Dir Road, Lower Dir",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lower Dir",
        "longi": "71.969676",
        "Lati": "34.888362",
        "CusDesc": "Khall Petroleum Services Lower Dir",
        "HSDPrice": "281.5369",
        "Services": [],
        "CusCode": "2010207920001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Lower Dir",
        "PMGPrice": "275.4669",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Pind Dadan Khan- Jhelum Road  (Chak Hameed), Jhelum",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Jhelum",
        "longi": "73.2051673",
        "Lati": "32.6404984",
        "CusDesc": "Raja Hassan Petroleum Pind Dadan Khan",
        "HSDPrice": "280.0824",
        "Services": [],
        "CusCode": "2010207990001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Jhelum",
        "PMGPrice": "274.0124",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Khewat Nos. 737 & 738, Khatooni Nos. 1305 & 1306, Khasra Nos. 1572 & 1573, situated at Mouza Jandial",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gujranwala",
        "longi": "74.24311",
        "Lati": "32.16976",
        "CusDesc": "Rana Petroleum Service (Jandiala Baghwala) Gujranwala",
        "HSDPrice": "280.0342",
        "Services": [],
        "CusCode": "2010208070001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Gujranwala",
        "PMGPrice": "273.9642",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Sargodah-Gujrat Road, Gujrat",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gujrat",
        "longi": "74.0067492",
        "Lati": "32.5443541",
        "CusDesc": "Shahwaiz Sajjad Filling Station Gujrat",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010208050001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Gujrat",
        "PMGPrice": "273.7051",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Plot/Survey No. 490/7, Tapo Additional Tando Saindad, on Hyderabad-Badin Road, Taluka and District T",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Hyderabad",
        "longi": "68.552828",
        "Lati": "25.130537",
        "CusDesc": "Inayatullah Petroleum Service Hyderabad",
        "HSDPrice": "281.0494",
        "Services": [],
        "CusCode": "2010208100001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Hyderabad",
        "PMGPrice": "274.9794",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khasra # 2997 & 2998, Khewat # 135 & 169, Khatooni # 297 & 712/1 situated in Revenue Estate Ka",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kasur",
        "longi": "74.446878",
        "Lati": "31.170803",
        "CusDesc": "Intikhab Filling Station Kasur",
        "HSDPrice": "280.3453",
        "Services": [],
        "CusCode": "2010208140001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Kasur",
        "PMGPrice": "274.2753",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Khasra No. 2177, Khatooni No. 496/848, Mouza Sheikhpur Rawalpindi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "72.9805745",
        "Lati": "33.6064882",
        "CusDesc": "Abdullah Chaudhary Filling Station Rawalpindi",
        "HSDPrice": "279.7744",
        "Services": [],
        "CusCode": "2010208040001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-West",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7044",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Survey No. 221/9-11, OF Deh &Tapa Jiano, on Quetta-Chaman Highway (N-65) Taluka & District Shikarpur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Shikarpur",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Al-Fareed Petroleum Service Shikarpur",
        "HSDPrice": "279.7745",
        "Services": [],
        "CusCode": "2010208130001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-SKP)",
        "Region": "Karachi",
        "District": "Shikarpur",
        "PMGPrice": "273.7045",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Band Road, Lahore",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - Speed Ways Filling station Lahore",
        "HSDPrice": "279.8",
        "Services": [],
        "CusCode": "20101007900020003001",
        "CNGPrice": "0",
        "Sub_Region": "COCO-LHR",
        "Region": "COCO",
        "District": "Lahore",
        "PMGPrice": "273.7",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khata no. 388 & 403 (Old Khata 369), Khasra No. 383 & 380, situated at Mouza Tounsa Sharif, Tehsil T",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Dera Gazi Khan",
        "longi": "30.6982383",
        "Lati": "70.6352362",
        "CusDesc": "Al Mehmood Petroleum Service Tounsa Sharif",
        "HSDPrice": "280.0522",
        "Services": [],
        "CusCode": "2010208080001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Dera Ghazi Khan",
        "PMGPrice": "273.9822",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "New Survey number 45/3 (old no. LL-294) situated at Shikarpur Railway Station",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Shikarpur",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Askari 15 F/s (Project of AWT NTN # 0801477-9) Shikarpur",
        "HSDPrice": "279.7744",
        "Services": [],
        "CusCode": "2010208120001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-SKP)",
        "Region": "Karachi",
        "District": "Shikarpur",
        "PMGPrice": "273.7044",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khasra/Murabba#7/5/2, Khewat No. (New) 203 situated at Mouza Peer Ashab, Tehsil and District Bhakar",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bhakkar",
        "longi": "71.59399",
        "Lati": "31.57551",
        "CusDesc": "Madina Petroleum Service (Koror Lal Esan) Bhakkar",
        "HSDPrice": "279.7745",
        "Services": [],
        "CusCode": "2010208160001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Bhakkar",
        "PMGPrice": "273.7045",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khewat no. 172 Khata no. 581 Khasra no.1939 situated at  Mouza Olding Tehsil & District Skardu",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Skardu",
        "longi": "75.6533845",
        "Lati": "35.2934212",
        "CusDesc": "Baltistan Petroleum Service Skardu",
        "HSDPrice": "278.96",
        "Services": [],
        "CusCode": "2010208090001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi North",
        "Region": "Rawalpindi-1",
        "District": "Skardu",
        "PMGPrice": "272.89",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khewat # 63 Khatooni # 172 Khasra # 654/12, situated Mouza kotha khurd Main Chakri Road RWP",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "73.0182226",
        "Lati": "33.5600598",
        "CusDesc": "Express Petroleum Service Chakri Road Rawalpindi",
        "HSDPrice": "279.7744",
        "Services": [],
        "CusCode": "2010208060001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-West",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7044",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Malikpur Mananwala, Chak No. 203/RB, TehsilFaisalabad City and District Faisalabad.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Faisalabad",
        "longi": "73.144317",
        "Lati": "31.460464",
        "CusDesc": "Butt Petroleum Service Faisalabad",
        "HSDPrice": "279.7744",
        "Services": [],
        "CusCode": "2010208180001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Faisalabad",
        "PMGPrice": "273.7044",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "PWD road, Doctors cooperative Housing Society Sector O-9, Lohibhair Rawalpindi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Islamabad",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - Popular F/s PWD ISB",
        "HSDPrice": "279.8",
        "Services": [],
        "CusCode": "20101007800020003001",
        "CNGPrice": "0",
        "Sub_Region": "COCO-RWP",
        "Region": "COCO",
        "District": "Islamabad",
        "PMGPrice": "273.7",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khasra No. 15759/3858 ,Situated at Had Bast Mouza Bela Basti Ram, Tehsil City and District Lahore",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "74.325631",
        "Lati": "31.600946",
        "CusDesc": "Mehmand 2 Filling Station Lahore",
        "HSDPrice": "279.7745",
        "Services": [],
        "CusCode": "2010208150001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Lahore",
        "PMGPrice": "273.7045",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Abid Majeed Road Mughalabad Rawalpindi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "73.032341",
        "Lati": "33.585188",
        "CusDesc": "Lala Jee Filling Station Abid Majeed Road Rawalpindi",
        "HSDPrice": "279.7744",
        "Services": [],
        "CusCode": "2010208170001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-West",
        "Region": "Rawalpindi-2",
        "District": "Rawalpindi",
        "PMGPrice": "273.7044",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Deh Behraro, Tapo Chhattan Shah, Taluka Sakrand, District Shaheed Benazirabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Shaheed Benazir Abad",
        "longi": "68.090234",
        "Lati": "26.221874",
        "CusDesc": "Indus Filling Station (Aamri) Shaheed Benazirabad",
        "HSDPrice": "279.7744",
        "Services": [],
        "CusCode": "2010208190001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-DLP)",
        "Region": "Karachi",
        "District": "Shaheed Benazirabad",
        "PMGPrice": "273.7045",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Plot No. L-85, near Road over Bridge (10w) Bungalow, Hyderabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Hyderabad",
        "longi": "68.369018",
        "Lati": "25.38134",
        "CusDesc": "Askari 14 F/s (Project of AWT NTN # 0801477-9) Hyderabad",
        "HSDPrice": "280.7269",
        "Services": [],
        "CusCode": "2010208110001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Hyderabad",
        "PMGPrice": "274.6607",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Link Road on Indus Highway near Lakhra Coal Mines Jamshoro",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Jamshoro",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Sindh Al-Noor Petroleum Service Jamshoro",
        "HSDPrice": "280.3564",
        "Services": [],
        "CusCode": "2010208540001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Jamshoro",
        "PMGPrice": "274.2864",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Jand Service Area, at KM 111,  on Hakla D.I Khan Motorway, M-14, District Attock",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Attock",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - Jand Service area South Bound",
        "HSDPrice": "281.0253",
        "Services": [],
        "CusCode": "20101008500020003001",
        "CNGPrice": "0",
        "Sub_Region": "COCO-RWP",
        "Region": "COCO",
        "District": "Attock",
        "PMGPrice": "274.9553",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Village Shah Muhammad Laghari, P.O Thari Meer Wah, Jalbani, Khairpur, Pakistan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Khairpur",
        "longi": "68.490527",
        "Lati": "27.033795",
        "CusDesc": "Al-Hayat Filling Station Khairpur",
        "HSDPrice": "280.1638",
        "Services": [],
        "CusCode": "2010208440001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-DLP)",
        "Region": "Karachi",
        "District": "Khairpur",
        "PMGPrice": "274.0938",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "25 km Depalpur Road Khundian Town Kasur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Kasur",
        "longi": "74.269338",
        "Lati": "30.979294",
        "CusDesc": "Bhai Bhai Filling Station Kasur",
        "HSDPrice": "280.6091",
        "Services": [],
        "CusCode": "2010208390001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Kasur",
        "PMGPrice": "274.5391",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Main Sarai Alamgir Mirpur Jatlan Road Bhimber AJK",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bhimber",
        "longi": "73.86195",
        "Lati": "33.027469",
        "CusDesc": "7-Star & M. Zakaria Petrol Pump Jatlan",
        "HSDPrice": "278.96",
        "Services": [],
        "CusCode": "2010208340001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-East",
        "Region": "Rawalpindi-2",
        "District": "Bhimber",
        "PMGPrice": "272.89",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "DHA 7 Sector-T- plot no. 1/1, Defense Housing Authority,  Tehsil & District Lahore",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "74.4902868",
        "Lati": "31.4803575",
        "CusDesc": "Eagle 1 Filling Station (DHA) Lahore",
        "HSDPrice": "279.9132",
        "Services": [],
        "CusCode": "2010208410001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Lahore",
        "PMGPrice": "273.8432",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Situated at Mahal Chak No.8 Shamali on Sargodha Gujrat Road within the registration Tehsil Bhalwal",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bhalwal",
        "longi": "72.9084383",
        "Lati": "32.2784298",
        "CusDesc": "Warraich Petroleum Service Bhalwal",
        "HSDPrice": "280.4884",
        "Services": [],
        "CusCode": "2010208250001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Sargodha",
        "PMGPrice": "274.4184",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Chachrawasti, Ahmedour East, District Bahawalpur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bahawalpur",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Junaid Ayub Filling Station Bahawalpur",
        "HSDPrice": "280.9184",
        "Services": [],
        "CusCode": "2010208430001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Bahawalpur",
        "PMGPrice": "274.8484",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Deh Mangopir,Sarjani Town, Karachi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Karachi",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Karimi Filling Station Sarjani Town",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010208220001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Karachi",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Pharpur service area, Hakla- DI Khan Motorway M-14",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Dera Ismail Khan",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - Paharpur Service Area South Bound",
        "HSDPrice": "279.8651",
        "Services": [],
        "CusCode": "20101008100020003001",
        "CNGPrice": "0",
       "District": "Dera Ismail Khan",
          "Sub_Region": "COCO-PSH",
        "Region": "COCO",
       "PMGPrice": "273.7951",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "located at Survey No. 227, Deh, Tapa & Taluka Mirpur Sakro, District Thatta",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Thatta",
        "longi": "67.621417",
        "Lati": "24.565844",
        "CusDesc": "Baghiar Filling Station Mirpur Sakro",
        "HSDPrice": "279.8692",
        "Services": [],
        "CusCode": "2010208230001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Thatta",
        "PMGPrice": "273.7992",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Havelian-Mansehra Motorway E-35",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mansehra",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - Mansehra Service Area South Bound",
        "HSDPrice": "280.7621",
        "Services": [],
        "CusCode": "20101008300020003001",
        "CNGPrice": "0",
        "Sub_Region": "COCO-RWP",
        "Region": "COCO",
        "District": "Mansehra",
        "PMGPrice": "274.6821",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Kolab Jheel, Larkana-Khairpur Road, District Khairpur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Khairpur",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Muhammad Ali Filling Station Khairpur",
        "HSDPrice": "280.1553",
        "Services": [],
        "CusCode": "2010208450001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-SKP)",
        "Region": "Karachi",
        "District": "Khairpur",
        "PMGPrice": "274.0853",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "P-5, Chaudhry & Co (Petrol Pump) Sargodha Road, Faisalabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Faisalabad",
        "longi": "73.088887",
        "Lati": "31.442737",
        "CusDesc": "Askari 16 F/s (Project of AWT NTN # 0801477-9) Faisalabad",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010208480001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Faisalabad",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Chak Jhumra to Chiniot Road, Tehsil Chak Jhumra District Faisalabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Faisalabad",
        "longi": "73.170753",
        "Lati": "31.574908",
        "CusDesc": "Diyal Filling Station Chak Jhumra (Faisalabad)",
        "HSDPrice": "279.7741",
        "Services": [],
        "CusCode": "2010208320001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Faisalabad",
        "PMGPrice": "273.7041",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Garrison Filling Station, Jhanda Chichi, Old Airport Road, Rawalpindi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "73.0750129",
        "Lati": "33.588243",
        "CusDesc": "Fleet Card - Garrison Filling station Janda Chichi Rawalpindi",
        "HSDPrice": "279.8",
        "Services": [],
        "CusCode": "20101008600020003001",
        "CNGPrice": "0",
        "Sub_Region": "COCO-RWP",
        "Region": "COCO",
        "District": "Rawalpindi",
        "PMGPrice": "273.7",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Survey no.691/1,691/2, Taluka Tapo, Deh Lakhi, on Shikarpur -Sukkur Road Tehsil Lakhi Di Shikarpur",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Shikarpur",
        "longi": "68.696857",
        "Lati": "27.860244",
        "CusDesc": "Waleed Petroleum Service Shikarpur",
        "HSDPrice": "279.7813",
        "Services": [],
        "CusCode": "2010208490001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-SKP)",
        "Region": "Karachi",
        "District": "Shikarpur",
        "PMGPrice": "273.7113",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Jand Service Area, at KM 111,  on Hakla D.I Khan Motorway, M-14, District Attock",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Attock",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - Jand Service area North Bound",
        "HSDPrice": "281.0253",
        "Services": [],
        "CusCode": "20101008400020003001",
        "CNGPrice": "0",
        "Sub_Region": "COCO-RWP",
        "Region": "COCO",
        "District": "Attock",
        "PMGPrice": "274.9553",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Tourianwala on Daska Pasrur Road, Tehsil Pasrur and Distt Sialkot",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sialkot",
        "longi": "74.5996919",
        "Lati": "32.2775826",
        "CusDesc": "Zafar Iqbal Filling Station Pasrur (Sialkot)",
        "HSDPrice": "280.166",
        "Services": [],
        "CusCode": "2010208290001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Sialkot",
        "PMGPrice": "274.096",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Yakhtiarabad Colony, Qazi Ahmed Road, Nawabshah City, Opposite Government Family Hospital and Medica",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Nawabshah",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Deewan’s Petroleum Services Nawabshah",
        "HSDPrice": "279.7743",
        "Services": [],
        "CusCode": "2010208300001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-DLP)",
        "Region": "Karachi",
        "District": "Nowsheraferoz",
        "PMGPrice": "273.7043",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Adjacent Dawat-e-Tableegh Markaz, Mianwali Road, Lawa Talagang District Chakwal",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Talagang",
        "longi": "73.079971",
        "Lati": "33.560089",
        "CusDesc": "Lawa Green Petroleum Services (Pvt) Ltd",
        "HSDPrice": "281.3251",
        "Services": [],
        "CusCode": "2010208570001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Chakwal",
        "PMGPrice": "275.2551",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Jhang Syedian, Main Lehtrar Road, Islamabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Islamabad",
        "longi": "73.218582",
        "Lati": "33.6466085",
        "CusDesc": "Rising Stars Filling Station (Pvt) Ltd Islamabad",
        "HSDPrice": "279.7885",
        "Services": [],
        "CusCode": "2010208610001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-Local",
        "Region": "Rawalpindi-2",
        "District": "Islamabad",
        "PMGPrice": "273.7185",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Napura Baseen Khari Tehsil and District Gilgit City.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gilgit",
        "longi": "35.9198189",
        "Lati": "74.2822296",
        "CusDesc": "Marcopolo Petroleum Service Gilgit City",
        "HSDPrice": "278.96",
        "Services": [],
        "CusCode": "2010208330001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi North",
        "Region": "Rawalpindi-1",
        "District": "Gilgit",
        "PMGPrice": "272.89",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Sarfraz Rafique Road, Lahore Cantonment",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - Fazaia Welfare F/s LHR",
        "HSDPrice": "279.8",
        "Services": [],
        "CusCode": "20101008700020003001",
        "CNGPrice": "0",
        "Sub_Region": "COCO-LHR",
        "Region": "COCO",
        "District": "Lahore",
        "PMGPrice": "273.7",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Mouza Ainowal, on Gujrat Mandi Bahaduddin Sargodaha Road Tehsil and District Mandi Bahauddin",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mandi Bahauddin",
        "longi": "73.4200468",
        "Lati": "32.4888869",
        "CusDesc": "Al-Jannat Ainowal Petroleum Service Mandi Bahuddin",
        "HSDPrice": "279.8557",
        "Services": [],
        "CusCode": "2010208310001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi South",
        "Region": "Rawalpindi-1",
        "District": "Mandi Bahauddin",
        "PMGPrice": "273.7857",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Chak No. 8 Shumali, on Bhalwal-Salam to Kotmomin-Tehsil Bhalwal and District Sargodha",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bhalwal",
        "longi": "72.907995",
        "Lati": "32.256442",
        "CusDesc": "Al-Habib Petroleum Service Bhalwal",
        "HSDPrice": "280.4406",
        "Services": [],
        "CusCode": "2010208260001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Sargodha",
        "PMGPrice": "274.3706",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Dhullah B/w KM 20/21 from Chakri - Chakwal Road, Tehsil and District Chakwal",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Chakwal",
        "longi": "72.685079",
        "Lati": "33.161915",
        "CusDesc": "Dhullah Petroleum Service Neellah Dhullah (Chakwal)",
        "HSDPrice": "280.3453",
        "Services": [],
        "CusCode": "2010208350001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Chakwal",
        "PMGPrice": "274.2753",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Pindi Bhattian Road Chiniot City",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Chiniot",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Gull Petroleum Service Chiniot",
        "HSDPrice": "279.7751",
        "Services": [],
        "CusCode": "2010208590001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad South",
        "Region": "Faisalabad",
        "District": "Chiniot",
        "PMGPrice": "273.7051",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Chowk No. 8 Shumali, Sargodha-Bhalwal-Salam Road, District Sargodha",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sargodha",
        "longi": "72.9033139",
        "Lati": "32.2626347",
        "CusDesc": "Intisaam Petroleum Service Sargodha",
        "HSDPrice": "280.4283",
        "Services": [],
        "CusCode": "2010208400001",
        "CNGPrice": "0",
        "Sub_Region": "Faisalabad North",
        "Region": "Faisalabad",
        "District": "Sargodha",
        "PMGPrice": "274.3583",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Paharpur service area, Hakla- DI Khan Motorway M-14",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Dera Ismail Khan",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - Paharpur Service Area North Bound",
        "HSDPrice": "279.8651",
        "Services": [],
        "CusCode": "20101008000020003001",
        "CNGPrice": "0",
        "Sub_Region": "COCO-PSH",
        "Region": "COCO",
        "District": "Dera Ismail Khan",
        "PMGPrice": "273.7951",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Situated at Mouza Chak No. 4/F.W, Tehsil Chishtian and District Bahawalnagar",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Bahawalnagar",
        "longi": "72.8502012",
        "Lati": "29.8099743",
        "CusDesc": "Taj Sarwar Sarkar Filling Station Chishtian",
        "HSDPrice": "279.9679",
        "Services": [],
        "CusCode": "2010208280001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Bahawal Nagar",
        "PMGPrice": "273.8979",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Kamber Bypass Larkana-Shahdadkot Raod District Shahdadkot",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Qambar Shahdadkot",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Azam Bhutto Filling Station Shahdadkot",
        "HSDPrice": "280.2841",
        "Services": [],
        "CusCode": "2010208460001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-SKP)",
        "Region": "Karachi",
        "District": "Shahdadkot",
        "PMGPrice": "274.2141",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Survey no. 504/2, Tapo Sonpur, Deh Lashari, Taluka & District Umerkot",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Umerkot",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Super Umerkot Petroleum Service Umerkot",
        "HSDPrice": "281.9333",
        "Services": [],
        "CusCode": "2010208500001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Umerkot",
        "PMGPrice": "275.8633",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Chakdara Chowk, Malakand, KPK",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Chakdara",
        "longi": "72.037948",
        "Lati": "34.643085",
        "CusDesc": "Tahir Filling Station Chakdara",
        "HSDPrice": "280.5289",
        "Services": [],
        "CusCode": "2010208370001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Lower Dir",
        "PMGPrice": "274.4589",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Plot no. K-28, Trans Layaru Park, Old Golimar, Mangopir Road, Karachi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Karachi",
        "longi": "67.01989",
        "Lati": "24.89086",
        "CusDesc": "H.S Petroleum Service Karachi",
        "HSDPrice": "279.7813",
        "Services": [],
        "CusCode": "2010208530001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Karachi",
        "PMGPrice": "273.7113",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Piran Gaib, Between KM No. 3-4, from Multan Southern Bypass on Nehar Naubahar Road, Tehsil Mul",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Multan",
        "longi": "71.536123",
        "Lati": "30.193425",
        "CusDesc": "Naubahar Filling Station Multan",
        "HSDPrice": "279.8978",
        "Services": [],
        "CusCode": "2010208510001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Multan",
        "PMGPrice": "273.8278",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Near Ex-Luxury Cinema, Mouza Safooran, Tehsil and District Malir, Karachi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Karachi",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "United Filling Station - Near Ex-Luxury Cinema Karachi",
        "HSDPrice": "279.7675",
        "Services": [],
        "CusCode": "2010208210001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Karachi",
        "PMGPrice": "273.6982",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Plot # 91, Changla Gali, Abbottabad",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Abbottabad",
        "longi": "73.3836084",
        "Lati": "33.9951941",
        "CusDesc": "Galiyat Filling Station (Changla Gali) Abbottabad",
        "HSDPrice": "280.4993",
        "Services": [],
        "CusCode": "2010208380001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi-East",
        "Region": "Rawalpindi-2",
        "District": "Abbotabad",
        "PMGPrice": "274.4293",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "DHA 7 Sector-Y-plot no.78/1, Defense Housing Authority, Tehsil & District Lahore.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "74.484848",
        "Lati": "31.4579881",
        "CusDesc": "Eagle 2 Filling Station (DHA) Lahore",
        "HSDPrice": "279.9531",
        "Services": [],
        "CusCode": "2010208420001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Lahore",
        "PMGPrice": "273.8831",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Exit of Multan (NHA) N-5, Multan-Khanewal-Lahore Road, G.T. Road, Multan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Multan",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Naseeb Ullah 5 Filling Station Multan",
        "HSDPrice": "280.0455",
        "Services": [],
        "CusCode": "2010208520001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Multan",
        "PMGPrice": "273.9755",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Katlang-Mardan Road, Mardan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mardan",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Taj Filling Station Mardan",
        "HSDPrice": "279.7811",
        "Services": [],
        "CusCode": "2010208580001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar South",
        "Region": "Peshawar",
        "District": "Mardan",
        "PMGPrice": "273.7111",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Havelian-Mansehra Motorway E-35",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mansehra",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Fleet Card - Mansehra Service Area North Bound",
        "HSDPrice": "280.7621",
        "Services": [],
        "CusCode": "20101008200020003001",
        "CNGPrice": "0",
        "Sub_Region": "COCO-RWP",
        "Region": "COCO",
        "District": "Mansehra",
        "PMGPrice": "274.6821",
        "IsPlanningAllowed": "false"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Chakoha G. T Road N-5 North Bound, Jhelum",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Jhelum",
        "longi": "73.497022",
        "Lati": "33.053388",
        "CusDesc": "Saab G Petroleum Service Jhelum",
        "HSDPrice": "279.7811",
        "Services": [],
        "CusCode": "2010208650001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Jhelum",
        "PMGPrice": "273.7111",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Near Pul Dari Sangi on Abu Dhabi Palace Road, District Rahim Yar Khan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rahim Yar Khan",
        "longi": "70.336681",
        "Lati": "28.3911979",
        "CusDesc": "Mukhtar Petroleum Services Rahim Yar Khan",
        "HSDPrice": "282.0538",
        "Services": [],
        "CusCode": "2010208560001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (BWP)",
        "Region": "Multan",
        "District": "Rahim Yar Khan",
        "PMGPrice": "275.9838",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "23-KM Lahore Sheikhupura Road, Khanpur Canal, Sheikhupura",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sheikhupura",
        "longi": "74.125905",
        "Lati": "31.666564",
        "CusDesc": "Jinnah Filling Station Khanpur Canal Sheikhupura",
        "HSDPrice": "279.7811",
        "Services": [],
        "CusCode": "2010208620001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Sheikhupura",
        "PMGPrice": "273.7111",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Plot # 01, Block Civic Center, Jubilee Town, Lahore",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Lahore",
        "longi": "74.183746",
        "Lati": "31.4077854",
        "CusDesc": "Jubilee Filling Station Lahore",
        "HSDPrice": "279.8112",
        "Services": [],
        "CusCode": "2010208660001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore Center",
        "Region": "Lahore",
        "District": "Lahore",
        "PMGPrice": "273.7412",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Takhtaband Bypass Road, Babuzai, Swat",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Swat",
        "longi": "72.330267",
        "Lati": "34.781608",
        "CusDesc": "New Al Hayat Filling Station Swat",
        "HSDPrice": "281.1863",
        "Services": [],
        "CusCode": "2010208630001",
        "CNGPrice": "0",
        "Sub_Region": "Peshawar North",
        "Region": "Peshawar",
        "District": "Swat",
        "PMGPrice": "275.1163",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Dina Mangla Road, Pindori  Tehsil Dina District Jhelum",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Jhelum",
        "longi": "73.630051",
        "Lati": "33.091057",
        "CusDesc": "Value 1 Dina",
        "HSDPrice": "279.781",
        "Services": [],
        "CusCode": "2010208360001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi Center",
        "Region": "Rawalpindi-2",
        "District": "Jhelum",
        "PMGPrice": "273.711",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Sagran, Brahma, Brahma-Fateh Jhang Road, Taxila, Rawalpindi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rawalpindi",
        "longi": "72.701391",
        "Lati": "33.738313",
        "CusDesc": "Brahma Filling Station (Taxila) Rawalpindi",
        "HSDPrice": "279.9664",
        "Services": [],
        "CusCode": "2010208470001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi North",
        "Region": "Rawalpindi-1",
        "District": "Rawalpindi",
        "PMGPrice": "273.8964",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Mouza Thari Sansi, within registration Tehsil Gujranwala Saddar & District Gujranwala",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gujranwala",
        "longi": "74.1974353",
        "Lati": "32.1017625",
        "CusDesc": "Askari 17 F/s (Project of AWT NTN # 0801477-9) Gujranwala",
        "HSDPrice": "279.7811",
        "Services": [],
        "CusCode": "2010208640001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Gujranwala",
        "PMGPrice": "273.7111",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Thalli Chowk, Rahim Yar Khan",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Rahim Yar Khan",
        "longi": "70.2909654",
        "Lati": "28.4371216",
        "CusDesc": "Ittefaq-1 Filling Station Thalli Chowk (Rahim Yar Khan)",
        "HSDPrice": "281.9095",
        "Services": [],
        "CusCode": "2010208240001",
        "CNGPrice": "0",
        "Sub_Region": "Multan (SWL)",
        "Region": "Multan",
        "District": "Rahim Yar Khan",
        "PMGPrice": "275.8395",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Khando Road, Warah City, District Kamber-Shahdadkot",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Qambar Shahdadkot",
        "longi": "67.799018",
        "Lati": "27.4515446",
        "CusDesc": "Subhanallah Petroleum Service Shahdadkot",
        "HSDPrice": "280.5598",
        "Services": [],
        "CusCode": "2010208270001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi North (Sukkur-SKP)",
        "Region": "Karachi",
        "District": "Shahdadkot",
        "PMGPrice": "274.4898",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Lakk, Khushab to Jahwarian Via Lakmore Road, Tehsil & District Sargodha.",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sargodha",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Shahzain Petroleum Service Sargodha",
        "HSDPrice": "280.4645",
        "Services": [],
        "CusCode": "2010208600001",
        "CNGPrice": "0",
        "Sub_Region": "Key Accounts - FSD",
        "Region": "Key Accounts - FSD",
        "District": "Sargodha",
        "PMGPrice": "274.3945",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Manawala Sheikhupura Road, Sheikhupura",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sheikhupura",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Al-Faisal Petroleum Manawala Sheikhupura",
        "HSDPrice": "279.7811",
        "Services": [],
        "CusCode": "2010208550001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore South",
        "Region": "Lahore",
        "District": "Sheikhupura",
        "PMGPrice": "273.7111",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Fida on Main Vehari Road within the registration Tehsil Mailsi and District Vehari",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Mailsi",
        "longi": "72.189396",
        "Lati": "29.799421",
        "CusDesc": "New Al Rehman Filling Station Mailsi",
        "HSDPrice": "279.7744",
        "Services": [],
        "CusCode": "2010208200001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Vehari",
        "PMGPrice": "273.7044",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Opp. Wapda Grid Station, Alam Chowk, Bypass road, Gujranwala",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Gujranwala",
        "longi": "74.144524",
        "Lati": "32.162039",
        "CusDesc": "Al-Karam Filling Station Gujranwala",
        "HSDPrice": "279.8099",
        "Services": [],
        "CusCode": "2010208670001",
        "CNGPrice": "0",
        "Sub_Region": "Lahore North",
        "Region": "Lahore",
        "District": "Gujranwala",
        "PMGPrice": "273.7399",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Plot# 2,Block A&B,Bismillah Prime Town ,Main Line Chanel Road,Main Hala Naka Road,Tehsil Hyderabad i",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Hyderabad",
        "longi": "68.390696",
        "Lati": "25.414229",
        "CusDesc": "Gul Star Filling Station Hyderabad",
        "HSDPrice": "280.6453",
        "Services": [],
        "CusCode": "2010208710001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi Center (Hyderabad)",
        "Region": "Karachi",
        "District": "Hyderabad",
        "PMGPrice": "274.5753",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Mouza Kharpa, Pindi Gheb - Jand - Kohat Road, Tehsil Pindi Gheb District Attock",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Pindi Gheb",
        "longi": "72.188927",
        "Lati": "33.30247",
        "CusDesc": "Kharpa Filling Station Pindi Gheb (Attock)",
        "HSDPrice": "280.6915",
        "Services": [],
        "CusCode": "2010208680001",
        "CNGPrice": "0",
        "Sub_Region": "Rawalpindi North",
        "Region": "Rawalpindi-1",
        "District": "Attock",
        "PMGPrice": "274.6215",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "300.0",
        "CusAddress": "Mouza Salay Mahay Bosan Road Multan Cantt",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Multan",
        "longi": "71.4952716",
        "Lati": "30.2764777",
        "CusDesc": "Arif-3 Petroleum Service Multan",
        "HSDPrice": "279.9916",
        "Services": [],
        "CusCode": "2010208690001",
        "CNGPrice": "0",
        "Sub_Region": "Multan Center",
        "Region": "Multan",
        "District": "Multan",
        "PMGPrice": "273.9216",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Pakpattan Road, Sahiwal",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Sahiwal",
        "longi": "73.1232353",
        "Lati": "30.6101169",
        "CusDesc": "Chohan 2 Filling Station Sahiwal",
        "HSDPrice": "279.7811",
        "Services": [],
        "CusCode": "2010208720001",
        "CNGPrice": "0",
        "Sub_Region": "Multan North (Sahiwal)",
        "Region": "Multan",
        "District": "Sahiwal",
        "PMGPrice": "273.7111",
        "IsPlanningAllowed": "true"
    },
    {
        "XTRONPrice": "0.0",
        "CusAddress": "Ijtimah Garh, Manghopir, District West Karachi",
        "Fuel Types": [
            {
                "HSD": "1",
                "XTRON": "1",
                "PMG": "1",
                "CNG": "1"
            }
        ],
        "City": "Karachi",
        "longi": "0",
        "Lati": "0",
        "CusDesc": "Sasoli Filling Station Karachi",
        "HSDPrice": "279.7811",
        "Services": [],
        "CusCode": "2010208700001",
        "CNGPrice": "0",
        "Sub_Region": "Karachi South (Karachi)",
        "Region": "Karachi",
        "District": "Karachi",
        "PMGPrice": "273.7111",
        "IsPlanningAllowed": "true"
    }
]