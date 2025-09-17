document.addEventListener('DOMContentLoaded', () => {

    // --- DATA (Ported from Pois.py) ---
const POIS_BY_STATE = {
    "West Bengal": {
        "Kolkata": [
            {"name": "Victoria Memorial", "lat": 22.5448, "lon": 88.3426, "duration": 1.5, "description": "Grand marble building dedicated to Queen Victoria with museum exhibits.", "tags": ["historical", "cultural"], "image": "Victoria Memorial Kolkata"},
            {"name": "Indian Museum", "lat": 22.5626, "lon": 88.3514, "duration": 2.0, "description": "India’s oldest museum with rare artifacts and natural history collections.", "tags": ["historical", "cultural", "family"], "image": "Indian Museum Kolkata"},
            {"name": "Howrah Bridge", "lat": 22.5850, "lon": 88.3468, "duration": 0.5, "description": "Iconic cantilever bridge over the Hooghly River.", "tags": ["historical", "romantic"], "image": "Howrah Bridge Kolkata"},
            {"name": "Dakshineswar Kali Temple", "lat": 22.6547, "lon": 88.3570, "duration": 1.5, "description": "Famous riverside temple dedicated to Goddess Kali.", "tags": ["spiritual", "cultural"], "image": "Dakshineswar Kali Temple Kolkata"},
            {"name": "Belur Math", "lat": 22.6325, "lon": 88.3560, "duration": 2.0, "description": "Global headquarters of Ramakrishna Mission with serene architecture.", "tags": ["spiritual", "relaxation"], "image": "Belur Math Kolkata"},
            {"name": "Marble Palace", "lat": 22.5834, "lon": 88.3656, "duration": 1.5, "description": "19th-century mansion with sculptures, paintings, and a private zoo.", "tags": ["historical", "cultural"], "image": "Marble Palace Kolkata"},
            {"name": "Science City", "lat": 22.5390, "lon": 88.4029, "duration": 2.5, "description": "Interactive science museum with space theatre and exhibits.", "tags": ["family", "cultural"], "image": "Science City Kolkata"},
            {"name": "Alipore Zoo", "lat": 22.5362, "lon": 88.3300, "duration": 2.0, "description": "India’s oldest zoological garden with diverse animal species.", "tags": ["family", "relaxation"], "image": "Alipore Zoo Kolkata"},
            {"name": "Eden Gardens", "lat": 22.5646, "lon": 88.3433, "duration": 1.0, "description": "Historic cricket stadium and home of Indian cricket history.", "tags": ["historical", "family"], "image": "Eden Gardens Kolkata"},
            {"name": "South Park Street Cemetery", "lat": 22.5461, "lon": 88.3631, "duration": 1.0, "description": "Colonial-era cemetery with Gothic tombs and quiet ambience.", "tags": ["historical", "romantic"], "image": "South Park Street Cemetery Kolkata"},
            {"name": "Kalighat Kali Temple", "lat": 22.5203, "lon": 88.3379, "duration": 1.5, "description": "One of the 51 Shakti Peethas, dedicated to Goddess Kali.", "tags": ["spiritual", "cultural"], "image": "Kalighat Kali Temple Kolkata"},
            {"name": "Birla Planetarium", "lat": 22.5441, "lon": 88.3495, "duration": 1.0, "description": "Dome-shaped planetarium with daily astronomy shows.", "tags": ["family", "cultural"], "image": "Birla Planetarium Kolkata"},
            {"name": "Nicco Park", "lat": 22.5707, "lon": 88.4204, "duration": 3.0, "description": "Amusement park with rides, water slides, and attractions.", "tags": ["family", "adventure"], "image": "Nicco Park Kolkata"},
            {"name": "Birla Mandir", "lat": 22.5416, "lon": 88.3702, "duration": 1.0, "description": "Beautifully carved white marble temple dedicated to Lord Krishna.", "tags": ["spiritual", "romantic"], "image": "Birla Mandir Kolkata"},
            {"name": "Princep Ghat", "lat": 22.5467, "lon": 88.3349, "duration": 1.0, "description": "Picturesque riverside ghat with colonial architecture.", "tags": ["romantic", "relaxation"], "image": "Princep Ghat Kolkata"},
            {"name": "St. Paul’s Cathedral", "lat": 22.5446, "lon": 88.3483, "duration": 1.0, "description": "Anglican cathedral known for Gothic architecture.", "tags": ["historical", "cultural", "spiritual"], "image": "St. Paul’s Cathedral Kolkata"},
            {"name": "Jorasanko Thakur Bari", "lat": 22.5853, "lon": 88.3632, "duration": 1.5, "description": "Ancestral home of Rabindranath Tagore, now a museum.", "tags": ["historical", "cultural"], "image": "Jorasanko Thakur Bari Kolkata"},
            {"name": "Town Hall", "lat": 22.5671, "lon": 88.3471, "duration": 1.0, "description": "Colonial-era building hosting exhibitions and events.", "tags": ["historical", "cultural"], "image": "Town Hall Kolkata"},
            {"name": "Eco Park", "lat": 22.6036, "lon": 88.4650, "duration": 3.0, "description": "Large urban park with boating, gardens, and themed zones.", "tags": ["family", "relaxation", "adventure"], "image": "Eco Park Kolkata"},
            {"name": "Mother House", "lat": 22.5379, "lon": 88.3634, "duration": 1.0, "description": "Home and tomb of Mother Teresa, now a pilgrimage site.", "tags": ["spiritual", "historical"], "image": "Mother House Kolkata"},
            {"name": "College Street (Boi Para)", "lat": 22.5747, "lon": 88.3634, "duration": 1.5, "description": "Asia’s largest book market, lined with old shops and stalls.", "tags": ["cultural", "family"], "image": "College Street Kolkata"},
            {"name": "Kumartuli", "lat": 22.5992, "lon": 88.3689, "duration": 1.0, "description": "Traditional potters’ quarter where Durga idols are crafted.", "tags": ["cultural", "historical"], "image": "Kumartuli Kolkata"},
            {"name": "Rabindra Sadan", "lat": 22.5428, "lon": 88.3510, "duration": 1.0, "description": "Cultural hub for Bengali theatre, film, and art.", "tags": ["cultural", "family"], "image": "Rabindra Sadan Kolkata"},
            {"name": "Nakhoda Mosque", "lat": 22.5750, "lon": 88.3629, "duration": 1.0, "description": "Largest mosque in Kolkata with striking red sandstone structure.", "tags": ["spiritual", "historical"], "image": "Nakhoda Mosque Kolkata"},
            {"name": "Metropolitan Building", "lat": 22.5678, "lon": 88.3506, "duration": 0.5, "description": "Colonial-style building at Esplanade, now housing shops.", "tags": ["historical", "cultural"], "image": "Metropolitan Building Kolkata"},
            {"name": "Salt Lake Stadium", "lat": 22.5684, "lon": 88.4139, "duration": 1.5, "description": "One of the largest football stadiums in the world.", "tags": ["family", "historical"], "image": "Salt Lake Stadium Kolkata"},
            {"name": "Shobhabazar Rajbari", "lat": 22.5996, "lon": 88.3683, "duration": 1.0, "description": "18th-century palace known for its Durga Puja celebrations.", "tags": ["historical", "cultural"], "image": "Shobhabazar Rajbari Kolkata"},
            {"name": "Botanical Garden (Acharya Jagadish Chandra Bose Garden)", "lat": 22.5371, "lon": 88.2776, "duration": 2.0, "description": "Historic garden with a giant Banyan Tree and rare plant species.", "tags": ["relaxation", "family", "nature"], "image": "Botanical Garden Kolkata"},
            {"name": "National Library of India", "lat": 22.5351, "lon": 88.3428, "duration": 1.5, "description": "India’s largest library with a massive collection of books and manuscripts.", "tags": ["cultural", "historical"], "image": "National Library Kolkata"},
            {"name": "Aquatica Water Park", "lat": 22.5647, "lon": 88.4826, "duration": 3.0, "description": "Popular water park with slides, pools, and wave rides.", "tags": ["family", "adventure", "relaxation"], "image": "Aquatica Water Park Kolkata"},
            {"name": "Birla Industrial & Technological Museum", "lat": 22.5421, "lon": 88.3637, "duration": 2.0, "description": "Interactive science and technology museum for children and adults.", "tags": ["family", "educational"], "image": "Birla Industrial Technological Museum Kolkata"},
            {"name": "Park Street", "lat": 22.5526, "lon": 88.3514, "duration": 2.0, "description": "Famous nightlife and dining hub of Kolkata.", "tags": ["cultural", "romantic", "family"], "image": "Park Street Kolkata"},
            {"name": "New Market (Hogg Market)", "lat": 22.5603, "lon": 88.3521, "duration": 2.0, "description": "Colonial-era marketplace for clothes, food, and handicrafts.", "tags": ["shopping", "cultural"], "image": "New Market Kolkata"},
            {"name": "Quest Mall", "lat": 22.5393, "lon": 88.3650, "duration": 2.0, "description": "Modern luxury shopping mall with international brands and dining.", "tags": ["shopping", "family"], "image": "Quest Mall Kolkata"},
            {"name": "Millennium Park", "lat": 22.5718, "lon": 88.3493, "duration": 1.5, "description": "Riverside park with gardens, rides, and Hooghly River views.", "tags": ["family", "romantic", "relaxation"], "image": "Millennium Park Kolkata"},
            {"name": "Swami Vivekananda’s Ancestral House", "lat": 22.5851, "lon": 88.3630, "duration": 1.5, "description": "Birthplace and museum dedicated to Swami Vivekananda.", "tags": ["spiritual", "historical"], "image": "Swami Vivekananda House Kolkata"},
            {"name": "Rabindra Sarobar Lake", "lat": 22.5146, "lon": 88.3465, "duration": 1.5, "description": "Serene artificial lake surrounded by gardens and walking paths.", "tags": ["relaxation", "romantic", "family"], "image": "Rabindra Sarobar Lake Kolkata"},
            {"name": "Shaheed Minar", "lat": 22.5675, "lon": 88.3518, "duration": 0.5, "description": "Historic monument originally built in memory of Major-General Ochterlony.", "tags": ["historical", "cultural"], "image": "Shaheed Minar Kolkata"},
            {"name": "Science College Observatory", "lat": 22.5628, "lon": 88.3712, "duration": 1.0, "description": "Astronomical observatory for public stargazing and education.", "tags": ["educational", "family"], "image": "Science College Observatory Kolkata"},
            {"name": "Mother’s Wax Museum", "lat": 22.6036, "lon": 88.4650, "duration": 1.5, "description": "Wax museum featuring life-size statues of global icons and celebrities.", "tags": ["family", "cultural"], "image": "Mother’s Wax Museum Kolkata"},
            {"name": "St. John’s Church", "lat": 22.5702, "lon": 88.3486, "duration": 1.0, "description": "18th-century church with colonial architecture and historic tombs.", "tags": ["historical", "spiritual"], "image": "St. John’s Church Kolkata"},
            {"name": "Armenian Church of the Holy Nazareth", "lat": 22.5748, "lon": 88.3517, "duration": 1.0, "description": "One of the oldest churches in Kolkata, dating back to 1724.", "tags": ["historical", "spiritual"], "image": "Armenian Church Kolkata"},
            {"name": "Mallick Ghat Flower Market", "lat": 22.5853, "lon": 88.3508, "duration": 1.0, "description": "Bustling wholesale flower market near Howrah Bridge.", "tags": ["cultural", "shopping"], "image": "Mallick Ghat Flower Market Kolkata"},
            {"name": "Sealdah Market", "lat": 22.5672, "lon": 88.3744, "duration": 1.0, "description": "Traditional market for daily essentials, food, and textiles.", "tags": ["shopping", "cultural"], "image": "Sealdah Market Kolkata"},
            {"name": "Dakshineswar Ghat", "lat": 22.6535, "lon": 88.3579, "duration": 1.0, "description": "Sacred riverside ghat near Dakshineswar Kali Temple.", "tags": ["spiritual", "relaxation"], "image": "Dakshineswar Ghat Kolkata"},
            {"name": "Princep Memorial", "lat": 22.5467, "lon": 88.3347, "duration": 0.5, "description": "Colonial memorial dedicated to James Prinsep near the riverbank.", "tags": ["historical", "romantic"], "image": "Princep Memorial Kolkata"},
            {"name": "James Prinsep House", "lat": 22.5465, "lon": 88.3345, "duration": 0.5, "description": "Historic riverside pavilion popular for evening walks.", "tags": ["relaxation", "romantic"], "image": "James Prinsep House Kolkata"},
            {"name": "Raj Bhavan", "lat": 22.5697, "lon": 88.3505, "duration": 1.0, "description": "Official residence of the Governor of West Bengal, built in 1803.", "tags": ["historical", "cultural"], "image": "Raj Bhavan Kolkata"},
            {"name": "General Post Office (GPO)", "lat": 22.5712, "lon": 88.3500, "duration": 0.5, "description": "Iconic colonial-era building with a grand dome and Corinthian pillars.", "tags": ["historical", "cultural"], "image": "General Post Office Kolkata"},
            {"name": "Writers’ Building", "lat": 22.5732, "lon": 88.3522, "duration": 0.5, "description": "Historic red building, former secretariat of West Bengal government.", "tags": ["historical", "cultural"], "image": "Writers’ Building Kolkata"},
            {"name": "Bankshall Court", "lat": 22.5736, "lon": 88.3530, "duration": 0.5, "description": "Colonial-era court building representing British architecture.", "tags": ["historical", "cultural"], "image": "Bankshall Court Kolkata"},
            {"name": "Metcalfe Hall", "lat": 22.5699, "lon": 88.3507, "duration": 1.0, "description": "19th-century building inspired by Greek temple architecture.", "tags": ["historical", "cultural"], "image": "Metcalfe Hall Kolkata"},
            {"name": "Town Hall Museum", "lat": 22.5673, "lon": 88.3470, "duration": 1.0, "description": "Museum inside colonial Town Hall showcasing Kolkata’s history.", "tags": ["historical", "cultural"], "image": "Town Hall Museum Kolkata"},
            {"name": "Raja Rammohan Roy Memorial Museum", "lat": 22.5609, "lon": 88.3661, "duration": 1.0, "description": "Memorial dedicated to the social reformer Raja Rammohan Roy.", "tags": ["historical", "cultural"], "image": "Raja Rammohan Roy Memorial Museum Kolkata"},
            {"name": "Tagore’s Statue (College Street)", "lat": 22.5750, "lon": 88.3640, "duration": 0.5, "description": "Famous statue of Rabindranath Tagore at College Street.", "tags": ["historical", "cultural"], "image": "Tagore Statue Kolkata"},
            {"name": "Chowringhee", "lat": 22.5556, "lon": 88.3523, "duration": 1.0, "description": "Bustling district with shops, hotels, and colonial-era buildings.", "tags": ["cultural", "shopping"], "image": "Chowringhee Kolkata"},
            {"name": "Maidan", "lat": 22.5564, "lon": 88.3522, "duration": 2.0, "description": "Vast urban park known as the ‘lungs of Kolkata’.", "tags": ["relaxation", "family"], "image": "Maidan Kolkata"},
            {"name": "Race Course", "lat": 22.5453, "lon": 88.3480, "duration": 1.0, "description": "Historic horse racing venue near Maidan.", "tags": ["cultural", "relaxation"], "image": "Race Course Kolkata"},
            {"name": "Fort William", "lat": 22.5545, "lon": 88.3421, "duration": 1.5, "description": "18th-century fort built by the British, now under Indian Army.", "tags": ["historical", "cultural"], "image": "Fort William Kolkata"},
            {"name": "Elliot Park", "lat": 22.5487, "lon": 88.3525, "duration": 1.0, "description": "Popular green park with walking paths and lawns.", "tags": ["relaxation", "family"], "image": "Elliot Park Kolkata"},
            {"name": "Shrine Basilica of the Holy Rosary (Bandel Church)", "lat": 22.9253, "lon": 88.3759, "duration": 2.0, "description": "One of the oldest Christian churches in West Bengal, built by Portuguese.", "tags": ["spiritual", "historical"], "image": "Bandel Church Kolkata"},
            {"name": "Chintamoni Kar Bird Sanctuary", "lat": 22.4178, "lon": 88.4195, "duration": 2.0, "description": "Sanctuary known for birdwatching and lush greenery.", "tags": ["nature", "relaxation"], "image": "Chintamoni Kar Bird Sanctuary Kolkata"},
            {"name": "Nazrul Mancha", "lat": 22.5209, "lon": 88.3645, "duration": 1.5, "description": "Open-air auditorium for cultural shows and concerts.", "tags": ["cultural", "family"], "image": "Nazrul Mancha Kolkata"},
            {"name": "Academy of Fine Arts", "lat": 22.5434, "lon": 88.3490, "duration": 1.5, "description": "Cultural center showcasing art exhibitions and performances.", "tags": ["cultural", "family"], "image": "Academy of Fine Arts Kolkata"},
            {"name": "Birla Academy of Art & Culture", "lat": 22.5369, "lon": 88.3646, "duration": 1.5, "description": "Art museum housing Indian and international collections.", "tags": ["cultural", "historical"], "image": "Birla Academy of Art and Culture Kolkata"},
            {"name": "Kolkata Police Museum", "lat": 22.5740, "lon": 88.3680, "duration": 1.0, "description": "Museum showcasing Kolkata Police’s history and archives.", "tags": ["historical", "cultural"], "image": "Kolkata Police Museum"},
            {"name": "Smaranika Tram Museum", "lat": 22.5625, "lon": 88.3510, "duration": 1.0, "description": "Unique museum dedicated to Kolkata’s historic trams.", "tags": ["historical", "cultural"], "image": "Smaranika Tram Museum Kolkata"},
            {"name": "Science Exploratorium", "lat": 22.5456, "lon": 88.3632, "duration": 2.0, "description": "Hands-on science learning center for children.", "tags": ["educational", "family"], "image": "Science Exploratorium Kolkata"}
        ],
        "Darjeeling": [
            {"name": "Tiger Hill", "lat": 27.4189, "lon": 88.2790, "duration": 1.5, "description": "Sunrise views over Kanchenjunga.", "tags": ["romantic", "nature"], "image": "Tiger Hill Darjeeling"},
            {"name": "Darjeeling Toy Train", "lat": 27.0380, "lon": 88.2627, "duration": 2.5, "description": "Heritage steam/rail experience.", "tags": ["relaxation", "family"], "image": "Toy Train Darjeeling"},
            {"name": "Batasia Loop", "lat": 27.0369, "lon": 88.2753, "duration": 0.75, "description": "Scenic loop & memorial.", "tags": ["relaxation"], "image": "Batasia Loop"},
            {"name": "Padmaja Naidu Himalayan Zoological Park", "lat": 27.0335, "lon": 88.2611, "duration": 2.0, "description": "High-altitude conservation zoo.", "tags": ["family", "nature"], "image": "Himalayan Zoo Darjeeling"},
            {"name": "Tea Gardens (Happy Valley)", "lat": 27.0642, "lon": 88.2486, "duration": 2.0, "description": "Tea estate tour & tasting.", "tags": ["relaxation"], "image": "Happy Valley Tea Darjeeling"},
            {"name": "Japanese Peace Pagoda", "lat": 27.0388, "lon": 88.2436, "duration": 0.75, "description": "Panoramic views and peace pagoda.", "tags": ["relaxation", "spiritual"], "image": "Peace Pagoda Darjeeling"},
            {"name": "Darjeeling Mall", "lat": 27.0416, "lon": 88.2604, "duration": 1.0, "description": "Town center & shops.", "tags": ["relaxation"], "image": "Darjeeling Mall"},
            {"name": "Observatory Hill", "lat": 27.0411, "lon": 88.2600, "duration": 0.5, "description": "Small hill with views.", "tags": ["relaxation"], "image": "Observatory Hill Darjeeling"},
            {"name": "Ghoom Monastery", "lat": 27.0379, "lon": 88.2473, "duration": 0.75, "description": "Historic Buddhist monastery.", "tags": ["spiritual", "cultural"], "image": "Ghoom Monastery"},
            {"name": "Rock Garden & Ganga Maya Park", "lat": 27.0362, "lon": 88.2710, "duration": 1.0, "description": "Terraced garden and park.", "tags": ["family", "relaxation"], "image": "Rock Garden Darjeeling"},
            {"name": "Himalayan Mountaineering Institute", "lat": 27.0340, "lon": 88.2575, "duration": 1.5, "description": "Mountaineering museum & displays.", "tags": ["cultural"], "image": "HMI Darjeeling"},
            {"name": "Chowrasta", "lat": 27.0390, "lon": 88.2622, "duration": 0.75, "description": "Leisure stroll spot with shops.", "tags": ["relaxation", "family"], "image": "Chowrasta Darjeeling"}
        ],
        "Shantiniketan": [
            {"name": "Visva Bharati (Tagore's University)", "lat": 23.6840, "lon": 87.6806, "duration": 2.5, "description": "Cultural university founded by Rabindranath Tagore.", "tags": ["cultural"], "image": "Visva Bharati"},
            {"name": "Amar Kutir", "lat": 23.6844, "lon": 87.6788, "duration": 1.0, "description": "Crafts cooperative and museum.", "tags": ["cultural"], "image": "Amar Kutir"},
            {"name": "Shyamali", "lat": 23.6855, "lon": 87.6790, "duration": 0.75, "description": "Historic residence & gallery.", "tags": ["cultural"], "image": "Shyamali Shantiniketan"},
            {"name": "Rabinrasala", "lat": 23.6846, "lon": 87.6796, "duration": 0.75, "description": "Artist cottages & galleries.", "tags": ["cultural"], "image": "Rabinrasala"},
            {"name": "Bonophool", "lat": 23.6868, "lon": 87.6810, "duration": 1.0, "description": "Local handicraft shops.", "tags": ["cultural"], "image": "Bonophool"},
            {"name": "Poush Mela (seasonal)", "lat": 23.6840, "lon": 87.6806, "duration": 3.0, "description": "Annual fair—seasonal highlight.", "tags": ["cultural", "family"], "image": "Poush Mela"}
        ]
    },
    "Delhi": {
        "New Delhi": [
            {"name": "Red Fort", "lat": 28.6562, "lon": 77.2410, "duration": 2.0, "description": "17th-century Mughal fort.", "tags": ["historical", "cultural"], "image": "Red Fort Delhi"},
            {"name": "Qutub Minar", "lat": 28.5244, "lon": 77.1855, "duration": 1.5, "description": "Tall minaret & complex.", "tags": ["historical"], "image": "Qutub Minar"},
            {"name": "Humayun's Tomb", "lat": 28.5933, "lon": 77.2507, "duration": 1.5, "description": "Precursor to the Taj Mahal.", "tags": ["historical"], "image": "Humayun Tomb"},
            {"name": "India Gate & Rajpath", "lat": 28.6129, "lon": 77.2295, "duration": 0.75, "description": "National war memorial & lawns.", "tags": ["relaxation"], "image": "India Gate"},
            {"name": "Lotus Temple", "lat": 28.5535, "lon": 77.2588, "duration": 1.0, "description": "Bahá'í House of Worship.", "tags": ["spiritual"], "image": "Lotus Temple"},
            {"name": "Chandni Chowk Food Walk", "lat": 28.6560, "lon": 77.2300, "duration": 2.5, "description": "Historic bazaars & street food.", "tags": ["cultural", "family"], "image": "Chandni Chowk"},
            {"name": "Akshardham Temple", "lat": 28.6123, "lon": 77.2772, "duration": 2.0, "description": "Large modern temple complex.", "tags": ["cultural"], "image": "Akshardham"},
            {"name": "Hauz Khas Village", "lat": 28.5495, "lon": 77.1964, "duration": 2.0, "description": "Trendy cafes & deer park.", "tags": ["relaxation"], "image": "Hauz Khas"},
            {"name": "National Museum", "lat": 28.6090, "lon": 77.2275, "duration": 2.0, "description": "Large national collections.", "tags": ["cultural"], "image": "National Museum Delhi"},
            {"name": "Connaught Place", "lat": 28.6335, "lon": 77.2167, "duration": 1.5, "description": "Shopping & restaurants hub.", "tags": ["relaxation"], "image": "Connaught Place"},
            {"name": "Jama Masjid", "lat": 28.6503, "lon": 77.2334, "duration": 1.0, "description": "One of India's largest mosques.", "tags": ["cultural"], "image": "Jama Masjid"},
            {"name": "Gandhi Smriti", "lat": 28.6144, "lon": 77.2100, "duration": 1.0, "description": "Memorial to Mahatma Gandhi.", "tags": ["historical", "cultural"], "image": "Gandhi Smriti"}
        ],
        "Gurgaon": [
            {"name": "Kingdom of Dreams", "lat": 28.4996, "lon": 77.0794, "duration": 3.0, "description": "Entertainment and musicals.", "tags": ["family", "cultural"], "image": "Kingdom of Dreams"},
            {"name": "Cyber Hub", "lat": 28.5036, "lon": 77.0880, "duration": 1.5, "description": "Dining and nightlife hub.", "tags": ["relaxation"], "image": "Cyber Hub Gurgaon"},
            {"name": "Sultanpur National Park", "lat": 28.4692, "lon": 77.0401, "duration": 2.0, "description": "Bird sanctuary.", "tags": ["nature", "relaxation"], "image": "Sultanpur Park"},
            {"name": "Damdama Lake", "lat": 28.3460, "lon": 77.1747, "duration": 3.0, "description": "Water activities & picnics.", "tags": ["adventure", "relaxation"], "image": "Damdama Lake"},
            {"name": "Leisure Valley Park", "lat": 28.4954, "lon": 77.0821, "duration": 1.0, "description": "Open lawns & seasonal events.", "tags": ["relaxation"], "image": "Leisure Valley"}
        ],
        "Noida": [
            {"name": "Worlds of Wonder (Water & Amusement Park)", "lat": 28.5863, "lon": 77.3040, "duration": 4.0, "description": "Family amusement park.", "tags": ["family"], "image": "Worlds of Wonder Noida"},
            {"name": "Dilli Haat - Noida", "lat": 28.5721, "lon": 77.3215, "duration": 1.5, "description": "Traditional crafts & food stalls.", "tags": ["cultural"], "image": "Dilli Haat Noida"},
            {"name": "Botanical Garden, Noida", "lat": 28.5993, "lon": 77.3262, "duration": 1.5, "description": "Green space & trails.", "tags": ["relaxation"], "image": "Botanical Garden Noida"},
            {"name": "Okhla Bird Sanctuary", "lat": 28.5451, "lon": 77.3095, "duration": 2.0, "description": "Wetland sanctuary for birds.", "tags": ["nature"], "image": "Okhla Bird Sanctuary"}
        ]
    },
    "Uttar Pradesh": {
        "Agra": [
            {"name": "Taj Mahal", "lat": 27.1751, "lon": 78.0421, "duration": 2.5, "description": "World-famous white marble mausoleum.", "tags": ["historical", "romantic"], "image": "Taj Mahal"},
            {"name": "Agra Fort", "lat": 27.1794, "lon": 78.0211, "duration": 1.5, "description": "Red sandstone fortress.", "tags": ["historical"], "image": "Agra Fort"},
            {"name": "Mehtab Bagh", "lat": 27.1759, "lon": 78.0409, "duration": 1.0, "description": "Garden with Taj views at sunset.", "tags": ["romantic", "relaxation"], "image": "Mehtab Bagh"},
            {"name": "Itmad-ud-Daulah (Baby Taj)", "lat": 27.1594, "lon": 78.0468, "duration": 1.0, "description": "Marble tomb with inlay work.", "tags": ["historical"], "image": "Baby Taj"},
            {"name": "Local Markets (Sadar Bazaar)", "lat": 27.1812, "lon": 78.0081, "duration": 1.5, "description": "Shopping & street food.", "tags": ["cultural"], "image": "Sadar Bazaar Agra"}
        ],
        "Varanasi": [
            {"name": "Dashashwamedh Ghat", "lat": 25.3176, "lon": 82.9739, "duration": 1.5, "description": "Ganga aarti at sunset.", "tags": ["spiritual", "cultural"], "image": "Dashashwamedh Ghat"},
            {"name": "Boat Ride on Ganga", "lat": 25.3176, "lon": 82.9739, "duration": 1.0, "description": "River sunrise/sunset excursions.", "tags": ["spiritual", "romantic"], "image": "Boat Ride Varanasi"},
            {"name": "Sarnath", "lat": 25.3910, "lon": 83.0106, "duration": 2.0, "description": "Buddhist archaeological site.", "tags": ["historical", "spiritual"], "image": "Sarnath"},
            {"name": "Banaras Hindu University (BHU) & Temple", "lat": 25.2677, "lon": 82.9868, "duration": 1.5, "description": "Historic university campus.", "tags": ["cultural"], "image": "BHU Varanasi"}
        ],
        "Lucknow": [
            {"name": "Bara Imambara", "lat": 26.8467, "lon": 80.9462, "duration": 1.5, "description": "Architectural marvel with labyrinth.", "tags": ["historical"], "image": "Bara Imambara"},
            {"name": "Rumi Darwaza", "lat": 26.8462, "lon": 80.9464, "duration": 0.5, "description": "Iconic Lucknow gateway.", "tags": ["cultural"], "image": "Rumi Darwaza"},
            {"name": "Hazratganj Market", "lat": 26.8466, "lon": 80.9470, "duration": 1.0, "description": "Shopping & cafes.", "tags": ["relaxation"], "image": "Hazratganj"},
            {"name": "British Residency", "lat": 26.8407, "lon": 80.9115, "duration": 1.0, "description": "Historic ruins & gardens.", "tags": ["historical"], "image": "British Residency Lucknow"}
        ]
    }
};
    

    const placeholder_image_url = (name) => `https://picsum.photos/seed/${encodeURIComponent(name)}/120/120.jpg`;
    // const placeholder_image_url = (name) =>`https://placehold.co/120x120/808080/FFFFFF?text=${encodeURIComponent(name)}`;
    // const placeholder_image_url = (name, width=150, height=150) =>`https://picsum.photos/seed/${encodeURIComponent(name)}/${width}/${height}`;
    // const placeholder_image_url = (name) =>`https://source.unsplash.com/120x120/?${encodeURIComponent(name)}`;
    // const apiKey = ''
    // const placeholder_image_url = (name, apiKey) => `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(name)}&key=${apiKey}`;


    // --- STATE MANAGEMENT ---
    let currentItinerary = null;
    let selectedDay = 1;
    let map = null;
    let mapLayers = [];
    let tileLayer = null;
    let allPlaces = [];
    let markers = []; // Store markers for easy access

    const TILE_URLS = {
        light: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        dark: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
    };
    
    // --- DOM ELEMENTS ---
    const body = document.body;
    const stateSelect = document.getElementById('state-select');
    const citySelect = document.getElementById('city-select');
    const daySelect = document.getElementById('day-select');
    const itineraryContainer = document.getElementById('itinerary-container');
    const itineraryTitle = document.getElementById('itinerary-title');
    const gmapsLink = document.getElementById('gmaps-link');
    const exportPdfBtn = document.getElementById('export-pdf');
    const shareBtn = document.getElementById('share-btn');
    const copyFeedback = document.getElementById('copy-feedback');
    const themeToggle = document.getElementById('theme-toggle');
    const loader = document.getElementById('loader');
    const mainContentWrapper = document.getElementById('main-content-wrapper');
    
    // Search elements
    const searchBtn = document.getElementById('search-btn');
    const searchDropdown = document.getElementById('search-dropdown-content');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    // Custom planner elements
    const customPlannerBtn = document.getElementById('custom-planner-btn');
    const customPlannerModal = document.getElementById('custom-planner-modal');
    const closeModal = document.querySelector('.close');
    const addCustomPlaceBtn = document.getElementById('add-custom-place');
    const clearCustomFormBtn = document.getElementById('clear-custom-form');
    const customPlaceDay = document.getElementById('custom-place-day');

    const inputs = [
        stateSelect, citySelect, daySelect,
        document.getElementById('days-input'),
        document.getElementById('style-select'),
        document.getElementById('start-time-input'),
    ];

    // --- CORE LOGIC ---
    function haversine(lat1, lon1, lat2, lon2) {
        const R = 6371.0;
        const toRad = (deg) => deg * (Math.PI / 180);
        const phi1 = toRad(lat1);
        const phi2 = toRad(lat2);
        const dphi = toRad(lat2 - lat1);
        const dlambda = toRad(lon2 - lon1);
        const a = Math.sin(dphi / 2) ** 2 + Math.cos(phi1) * Math.cos(phi2) * Math.sin(dlambda / 2) ** 2;
        return 2 * R * Math.asin(Math.sqrt(a));
    }

    function travel_time_hours(p1, p2, avg_speed_kmph = 30) {
        const distance = haversine(p1.lat, p1.lon, p2.lat, p2.lon);
        return Math.max(0.25, distance / avg_speed_kmph);
    }

    function score_poi(poi, travel_style) {
        let score = (poi.tags || []).includes(travel_style) ? 10 : 0;
        score += Math.max(0, 5 - (poi.duration || 1) * 2);
        return score;
    }

    function recompute_day_times(day_activities, start_time_str) {
        const newList = [];
        const [startH, startM] = start_time_str.split(':').map(Number);
        let time_cursor = new Date();
        time_cursor.setHours(startH, startM, 0, 0);
        let prev_poi = null;
        for (const poi of day_activities) {
            if (prev_poi) {
                const travel_h = travel_time_hours(prev_poi, poi);
                time_cursor.setMinutes(time_cursor.getMinutes() + travel_h * 60);
            }
            const start_time = new Date(time_cursor);
            const end_time = new Date(start_time);
            end_time.setMinutes(end_time.getMinutes() + (poi.duration || 1) * 60);
            let poi_copy = { ...poi };
            poi_copy["start_time"] = `${String(start_time.getHours()).padStart(2, '0')}:${String(start_time.getMinutes()).padStart(2, '0')}`;
            poi_copy["end_time"] = `${String(end_time.getHours()).padStart(2, '0')}:${String(end_time.getMinutes()).padStart(2, '0')}`;
            newList.push(poi_copy);
            time_cursor = new Date(end_time);
            time_cursor.setMinutes(time_cursor.getMinutes() + 30);
            prev_poi = poi_copy;
        }
        return newList;
    }

    function generate_itinerary(city_pois, days, travel_style, start_time_str, day_hours_budget = 8.5) {
        const pois = [...city_pois].sort((a, b) => score_poi(b, travel_style) - score_poi(a, travel_style));
        let center_lat = pois.reduce((sum, p) => sum + p.lat, 0) / pois.length;
        let center_lon = pois.reduce((sum, p) => sum + p.lon, 0) / pois.length;
        let remaining_pois = [...pois];
        let itinerary = {};
        for (let day = 1; day <= days; day++) {
            itinerary[day] = [];
            let time_used = 0.0;
            let cursor = { lat: center_lat, lon: center_lon, name: "Start" };
            let day_pois = [];
            while (remaining_pois.length > 0) {
                const candidates = remaining_pois.map(p => [p, haversine(cursor.lat, cursor.lon, p.lat, p.lon)]);
                candidates.sort((a, b) => {
                    const scoreA = score_poi(a[0], travel_style);
                    const scoreB = score_poi(b[0], travel_style);
                    if (scoreB !== scoreA) return scoreB - scoreA;
                    return a[1] - b[1];
                });
                let picked_poi = null;
                for (const [p, dist] of candidates) {
                    const travel_h = travel_time_hours(cursor, p);
                    if (time_used + travel_h + (p.duration || 1) <= day_hours_budget) {
                        picked_poi = p;
                        break;
                    }
                }
                if (!picked_poi) break;
                const travel_h = travel_time_hours(cursor, picked_poi);
                day_pois.push(picked_poi);
                time_used += travel_h + (picked_poi.duration || 1);
                cursor = picked_poi;
                remaining_pois = remaining_pois.filter(r => r.name !== picked_poi.name);
            }
            itinerary[day] = recompute_day_times(day_pois, start_time_str);
        }
        return itinerary;
    }

    // --- UI RENDERING & MAP LOGIC ---
    function renderItinerary() {
        itineraryContainer.innerHTML = '';
        const dayActivities = currentItinerary[selectedDay] || [];
        if (dayActivities.length === 0) {
            itineraryContainer.innerHTML = `<div class="placeholder">No activities scheduled for this day. Try changing your travel style or increasing the trip duration.</div>`;
            return;
        }
        dayActivities.forEach((poi, index) => {
            const tagsHTML = (poi.tags || []).map(tag => `<span class="tag-pill">${tag.charAt(0).toUpperCase() + tag.slice(1)}</span>`).join('');
            const card = document.createElement('div');
            card.className = 'poi-card';
            card.dataset.index = index;
            card.innerHTML = `
                <img src="${poi.image || placeholder_image_url(poi.name)}" alt="${poi.name}" onerror="this.src='${placeholder_image_url(poi.name)}'">
                <div class="poi-content">
                    <h3>${poi.name}</h3>
                    <div class="poi-tags">${tagsHTML}</div>
                    <p class="poi-description">${poi.description || ''}</p>
                    <div class="poi-meta">
                        <span>🕒 <strong>${poi.duration || 1} hrs</strong></span> |
                        <span>⏰ <strong>${poi.start_time || ''} - ${poi.end_time || ''}</strong></span>
                    </div>
                </div>
                <div class="poi-actions">
                    <button data-action="up" data-index="${index}" title="Move up">⬆️</button>
                    <button data-action="down" data-index="${index}" title="Move down">⬇️</button>
                    <button data-action="remove" data-index="${index}" title="Remove">❌</button>
                </div>
            `;
            itineraryContainer.appendChild(card);
        });

        // Add click event to cards to show on map
        document.querySelectorAll('.poi-card').forEach(card => {
            card.addEventListener('click', function(e) {
                // Don't trigger if clicking on action buttons
                if (e.target.closest('.poi-actions')) return;
                
                const index = parseInt(this.dataset.index);
                const dayActivities = currentItinerary[selectedDay];
                if (dayActivities && dayActivities[index]) {
                    const poi = dayActivities[index];
                    showLocationOnMap(poi);
                }
            });
        });
    }

    function showLocationOnMap(poi) {
        if (!map) return;
        
        // Find the marker for this POI
        const markerIndex = markers.findIndex(marker => 
            marker.getPopup().getContent().includes(poi.name)
        );
        
        if (markerIndex !== -1) {
            // Center map on this marker
            map.setView([poi.lat, poi.lon], 15);
            
            // Open the popup for this marker
            markers[markerIndex].openPopup();
            
            // Highlight the card in the itinerary
            document.querySelectorAll('.poi-card').forEach(card => {
                card.classList.remove('highlighted');
            });
            
            const cardIndex = currentItinerary[selectedDay].findIndex(p => p.name === poi.name);
            if (cardIndex !== -1) {
                document.querySelectorAll('.poi-card')[cardIndex].classList.add('highlighted');
            }
        }
    }

    function renderMap() {
        if (!map) return;
        
        // Clear existing markers and layers
        mapLayers.forEach(layer => map.removeLayer(layer));
        mapLayers = [];
        markers = [];
        
        const dayActivities = currentItinerary[selectedDay] || [];
        if (dayActivities.length === 0) {
            map.setView([20.5937, 78.9629], 5);
            gmapsLink.style.display = 'none';
            return;
        }
        
        gmapsLink.style.display = 'block';
        const coords = dayActivities.map(p => [p.lat, p.lon]);
        
        // Create markers and store them
        coords.forEach((coord, index) => {
            const marker = L.marker(coord).bindPopup(`<b>${index + 1}. ${dayActivities[index].name}</b>`);
            marker.addTo(map);
            markers.push(marker);
            mapLayers.push(marker);
        });
        
        // Create polyline
        const polyline = L.polyline(coords, { color: 'var(--accent-primary)', weight: 3 });
        polyline.addTo(map);
        mapLayers.push(polyline);
        
        // Fit map to show all markers
        map.fitBounds(polyline.getBounds(), { padding: [50, 50] });
        updateGmapsLink(dayActivities);
    }
    
    function updateGmapsLink(dayActivities) {
        if (dayActivities.length < 2) {
             gmapsLink.href = "#"; gmapsLink.style.pointerEvents = "none"; gmapsLink.style.opacity = "0.5"; return;
        }
        gmapsLink.style.pointerEvents = "auto"; gmapsLink.style.opacity = "1";
        const origin = `${dayActivities[0].lat},${dayActivities[0].lon}`;
        const destination = `${dayActivities[dayActivities.length - 1].lat},${dayActivities[dayActivities.length - 1].lon}`;
        const waypoints = dayActivities.slice(1, -1).map(p => `${p.lat},${p.lon}`).join('|');
        const gmaps_url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&waypoints=${encodeURIComponent(waypoints)}&travelmode=driving`;
        gmapsLink.href = gmaps_url;
    }

    // --- SEARCH FUNCTIONALITY ---
    function setupSearch() {
        // Flatten all places for searching
        allPlaces = [];
        Object.keys(POIS_BY_STATE).forEach(state => {
            Object.keys(POIS_BY_STATE[state]).forEach(city => {
                POIS_BY_STATE[state][city].forEach(place => {
                    allPlaces.push({
                        ...place,
                        state,
                        city
                    });
                });
            });
        });

        searchBtn.addEventListener('click', () => {
            searchDropdown.classList.toggle('show');
            if (searchDropdown.classList.contains('show')) {
                searchInput.focus();
                searchInput.value = '';
                searchResults.innerHTML = '';
            }
        });

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            searchResults.innerHTML = '';
            
            if (query === '') {
                return;
            }

            const filteredPlaces = allPlaces.filter(place => 
                place.name.toLowerCase().includes(query) ||
                place.description.toLowerCase().includes(query) ||
                place.tags.some(tag => tag.toLowerCase().includes(query))
            );

            if (filteredPlaces.length === 0) {
                searchResults.innerHTML = '<div class="search-result-item">No places found</div>';
                return;
            }

            filteredPlaces.forEach(place => {
                const item = document.createElement('div');
                item.className = 'search-result-item';
                item.innerHTML = `
                    <strong>${place.name}</strong>
                    <div style="font-size: 12px; color: var(--text-secondary);">${place.city}, ${place.state}</div>
                `;
                item.addEventListener('click', () => {
                    addPlaceToItinerary(place);
                    searchDropdown.classList.remove('show');
                    searchInput.value = '';
                });
                searchResults.appendChild(item);
            });
        });

        // Close search dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                searchDropdown.classList.remove('show');
            }
        });
    }

    function addPlaceToItinerary(place) {
        if (!currentItinerary) {
            showNotification('Please generate an itinerary first');
            return;
        }

        // Add the place to the current day
        if (!currentItinerary[selectedDay]) {
            currentItinerary[selectedDay] = [];
        }
        
        currentItinerary[selectedDay].push(place);
        
        // Recompute times
        const start_time = document.getElementById('start-time-input').value;
        currentItinerary[selectedDay] = recompute_day_times(currentItinerary[selectedDay], start_time);
        
        renderItinerary();
        renderMap();
        showNotification(`Added ${place.name} to Day ${selectedDay}`);
    }

    // --- CUSTOM PLANNER FUNCTIONALITY ---
    function setupCustomPlanner() {
        customPlannerBtn.addEventListener('click', () => {
            // Update day options in the custom planner
            updateCustomPlannerDayOptions();
            customPlannerModal.style.display = 'block';
        });

        closeModal.addEventListener('click', () => {
            customPlannerModal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === customPlannerModal) {
                customPlannerModal.style.display = 'none';
            }
        });

        addCustomPlaceBtn.addEventListener('click', () => {
            const name = document.getElementById('custom-place-name').value.trim();
            const lat = parseFloat(document.getElementById('custom-place-lat').value);
            const lon = parseFloat(document.getElementById('custom-place-lon').value);
            const duration = parseFloat(document.getElementById('custom-place-duration').value);
            const tagsInput = document.getElementById('custom-place-tags').value.trim();
            const description = document.getElementById('custom-place-description').value.trim();
            const day = parseInt(customPlaceDay.value);

            if (!name || isNaN(lat) || isNaN(lon) || isNaN(duration)) {
                showNotification('Please fill in all required fields');
                return;
            }

            const tags = tagsInput ? tagsInput.split(',').map(tag => tag.trim()) : [];

            const customPlace = {
                name,
                lat,
                lon,
                duration,
                tags,
                description,
                image: placeholder_image_url(name)
            };

            // Initialize itinerary if not exists
            if (!currentItinerary) {
                const days = parseInt(document.getElementById('days-input').value);
                currentItinerary = {};
                for (let i = 1; i <= days; i++) {
                    currentItinerary[i] = [];
                }
            }

            // Add to selected day
            if (!currentItinerary[day]) {
                currentItinerary[day] = [];
            }
            
            currentItinerary[day].push(customPlace);
            
            // Recompute times
            const start_time = document.getElementById('start-time-input').value;
            currentItinerary[day] = recompute_day_times(currentItinerary[day], start_time);
            
            renderItinerary();
            renderMap();
            customPlannerModal.style.display = 'none';
            clearCustomForm();
            showNotification(`Added ${name} to Day ${day}`);
        });

        clearCustomFormBtn.addEventListener('click', clearCustomForm);
    }

    function updateCustomPlannerDayOptions() {
        customPlaceDay.innerHTML = '';
        const days = currentItinerary ? Object.keys(currentItinerary).length : parseInt(document.getElementById('days-input').value);
        
        for (let i = 1; i <= days; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `Day ${i}`;
            customPlaceDay.appendChild(option);
        }
        
        customPlaceDay.value = selectedDay;
    }

    function clearCustomForm() {
        document.getElementById('custom-place-name').value = '';
        document.getElementById('custom-place-lat').value = '';
        document.getElementById('custom-place-lon').value = '';
        document.getElementById('custom-place-duration').value = '1';
        document.getElementById('custom-place-tags').value = '';
        document.getElementById('custom-place-description').value = '';
    }

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // --- EVENT HANDLERS & INITIALIZATION ---
    function handleControlsChange() {
        showLoader();
        setTimeout(() => {
            try {
                const state = stateSelect.value;
                const city = citySelect.value;
                const days = parseInt(document.getElementById('days-input').value);
                const travel_style = document.getElementById('style-select').value;
                const start_time = document.getElementById('start-time-input').value;
                const city_pois = POIS_BY_STATE[state][city];
                currentItinerary = generate_itinerary(city_pois, days, travel_style, start_time);
                updateDaySelector(days);
                itineraryTitle.textContent = `Trip Itinerary for ${city}`;
                renderItinerary();
                renderMap();
            } catch (e) {
                console.error("Failed to generate itinerary:", e);
                itineraryContainer.innerHTML = `<div class="placeholder error">Oops! Something went wrong. Check your inputs and try again.</div>`;
            } finally {
                hideLoader();
            }
        }, 50);
    }
    
    function updateDaySelector(days) {
        const currentVal = parseInt(daySelect.value);
        daySelect.innerHTML = '';
        for (let i = 1; i <= days; i++) {
            const option = document.createElement('option');
            option.value = i; option.textContent = `Day ${i}`;
            daySelect.appendChild(option);
        }
        daySelect.value = (currentVal && currentVal <= days) ? currentVal : 1;
        selectedDay = parseInt(daySelect.value);
    }
    
    function populateCities() {
        const selectedState = stateSelect.value;
        const cities = Object.keys(POIS_BY_STATE[selectedState]);
        citySelect.innerHTML = '';
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city; option.textContent = city;
            citySelect.appendChild(option);
        });
        handleControlsChange();
    }

    function initMap() {
        const mapContainer = document.getElementById('map');
        mapContainer.style.height = '100%';
        mapContainer.style.width = '100%';
        
        map = L.map('map').setView([20.5937, 78.9629], 5);
        updateMapTheme();
    }
    
    function updateMapTheme() {
        const isDark = body.classList.contains('dark-mode');
        const theme = isDark ? 'dark' : 'light';
        if (tileLayer) map.removeLayer(tileLayer);
        tileLayer = L.tileLayer(TILE_URLS[theme], {
            attribution: '© OpenStreetMap & © CARTO'
        }).addTo(map);
    }

    function handleCardActions(e) {
        const button = e.target.closest('button[data-action]');
        if (!button) return;
        const action = button.dataset.action;
        const index = parseInt(button.dataset.index);
        let dayActivities = currentItinerary[selectedDay];
        if (action === 'up' && index > 0) {
            [dayActivities[index - 1], dayActivities[index]] = [dayActivities[index], dayActivities[index - 1]];
        } else if (action === 'down' && index < dayActivities.length - 1) {
            [dayActivities[index + 1], dayActivities[index]] = [dayActivities[index], dayActivities[index + 1]];
        } else if (action === 'remove') {
            dayActivities.splice(index, 1);
        }
        const start_time = document.getElementById('start-time-input').value;
        currentItinerary[selectedDay] = recompute_day_times(dayActivities, start_time);
        renderItinerary();
        renderMap();
    }

    function handleResize() {
        if (map) {
            const mapContainer = document.getElementById('map');
            mapContainer.style.height = '100%';
            mapContainer.style.width = '100%';
            map.invalidateSize();
        }
    }
    
    // --- EXPORT & SHARE FUNCTIONS ---
    function downloadFile(content, fileName, contentType) {
        const a = document.createElement("a");
        const file = new Blob([content], { type: contentType });
        a.href = URL.createObjectURL(file); a.download = fileName; a.click();
        URL.revokeObjectURL(a.href);
    }

    function exportPDF() {
        if (!currentItinerary) return;
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const city = citySelect.value;
        const days = Object.keys(currentItinerary).length;
        const pageWidth = doc.internal.pageSize.width;
        const pageHeight = doc.internal.pageSize.height;
        const margin = 15;
        
        // Add header with background
        doc.setFillColor(67, 97, 238);
        doc.rect(0, 0, pageWidth, 30, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(20);
        doc.text(`Trip to ${city}`, margin, 20);
        
        // Add date
        const date = new Date().toLocaleDateString();
        doc.setFontSize(10);
        doc.text(`Generated on: ${date}`, pageWidth - margin - 50, 20);
        
        // Reset text color
        doc.setTextColor(0, 0, 0);
        
        let y = 45;
        const lineHeight = 7;
        
        // Add days
        for (const [day, pois] of Object.entries(currentItinerary)) {
            // Check if we need a new page
            if (y > pageHeight - 40) {
                doc.addPage();
                y = 20;
                
                // Add header to new page
                doc.setFillColor(67, 97, 238);
                doc.rect(0, 0, pageWidth, 30, 'F');
                doc.setTextColor(255, 255, 255);
                doc.setFontSize(20);
                doc.text(`Trip to ${city}`, margin, 20);
                doc.setTextColor(0, 0, 0);
                y = 45;
            }
            
            // Day header with border
            doc.setFillColor(240, 240, 240);
            doc.rect(margin - 5, y - 5, pageWidth - margin * 2 + 10, 15, 'F');
            doc.setDrawColor(200, 200, 200);
            doc.rect(margin - 5, y - 5, pageWidth - margin * 2 + 10, 15);
            doc.setFontSize(16);
            doc.setFont(undefined, 'bold');
            doc.text(`Day ${day}`, margin, y + 5);
            doc.setFont(undefined, 'normal');
            y += 20;
            
            // Add places
            if (pois.length > 0) {
                pois.forEach(p => {
                    // Check if we need a new page
                    if (y > pageHeight - 20) {
                        doc.addPage();
                        y = 20;
                        
                        // Add header to new page
                        doc.setFillColor(67, 97, 238);
                        doc.rect(0, 0, pageWidth, 30, 'F');
                        doc.setTextColor(255, 255, 255);
                        doc.setFontSize(20);
                        doc.text(`Trip to ${city}`, margin, 20);
                        doc.setTextColor(0, 0, 0);
                        y = 45;
                    }
                    
                    // Time
                    doc.setFontSize(12);
                    doc.setFont(undefined, 'bold');
                    doc.text(`${p.start_time} - ${p.end_time}`, margin, y);
                    
                    // Place name
                    doc.setFontSize(14);
                    doc.text(p.name, margin + 50, y);
                    y += lineHeight;
                    
                    // Description
                    if (p.description) {
                        doc.setFontSize(10);
                        doc.setFont(undefined, 'normal');
                        const splitDescription = doc.splitTextToSize(p.description, pageWidth - margin * 2);
                        doc.text(splitDescription, margin, y);
                        y += splitDescription.length * lineHeight;
                    }
                    
                    // Tags
                    if (p.tags && p.tags.length > 0) {
                        doc.setFontSize(9);
                        doc.setTextColor(100, 100, 100);
                        doc.text(`Tags: ${p.tags.join(', ')}`, margin, y);
                        doc.setTextColor(0, 0, 0);
                        y += lineHeight;
                    }
                    
                    // Add separator line
                    doc.setDrawColor(220, 220, 220);
                    doc.line(margin, y, pageWidth - margin, y);
                    y += lineHeight;
                });
            } else {
                doc.setFontSize(11);
                doc.text("- No activities planned.", margin, y);
                y += lineHeight;
            }
            
            y += lineHeight * 1.5;
        }
        
        // Add footer
        const pageCount = doc.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setFontSize(8);
            doc.setTextColor(150, 150, 150);
            doc.text(`AI Tour Guide - Page ${i} of ${pageCount}`, pageWidth / 2, pageHeight - 10, { align: 'center' });
        }
        
        doc.save(`Itinerary_${city}.pdf`);
    }

    function shareItinerary() {
        if (!currentItinerary || !currentItinerary[selectedDay]) return;
        const dayActivities = currentItinerary[selectedDay];
        const city = citySelect.value;
        let shareText = `🗺️ My Itinerary for Day ${selectedDay} in ${city}:\n\n${dayActivities.map(p => `• ${p.start_time} - ${p.end_time}: ${p.name}`).join('\n')}`;
        if (navigator.share) {
            navigator.share({ title: `My ${city} Itinerary - Day ${selectedDay}`, text: shareText }).catch(console.error);
        } else {
            navigator.clipboard.writeText(shareText).then(() => {
                copyFeedback.classList.add('visible');
                setTimeout(() => { copyFeedback.classList.remove('visible'); }, 2000);
            });
        }
    }

    function toggleTheme() {
        body.classList.toggle('dark-mode');
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
        updateMapTheme();
    }

    function showLoader() { 
        loader.classList.add('visible'); 
        mainContentWrapper.classList.add('hidden'); 
    }

    function hideLoader() { 
        loader.classList.remove('visible'); 
        mainContentWrapper.classList.remove('hidden');
        if (!map) {
            initMap();
        }
    }

    // --- Initial Setup ---
    const states = Object.keys(POIS_BY_STATE);
    states.forEach(state => {
        const option = document.createElement('option');
        option.value = state; option.textContent = state;
        stateSelect.appendChild(option);
    });

    stateSelect.addEventListener('change', populateCities);
    inputs.forEach(input => input.addEventListener('change', handleControlsChange));
    daySelect.addEventListener('change', (e) => {
        selectedDay = parseInt(e.target.value);
        renderItinerary();
        renderMap();
    });
    itineraryContainer.addEventListener('click', handleCardActions);
    exportPdfBtn.addEventListener('click', exportPDF);
    shareBtn.addEventListener('click', shareItinerary);
    themeToggle.addEventListener('click', toggleTheme);
    window.addEventListener('resize', handleResize);
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.checked = true;
    }

    // Initialize search and custom planner
    setupSearch();
    setupCustomPlanner();

    // Initialize the application
    handleResize();
    populateCities();
});