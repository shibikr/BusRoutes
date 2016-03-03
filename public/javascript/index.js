var stops = [ 'YESHWANTHPUR BUS STAND',
  'GOVT SOAP FACTORY',
  'MALLESWARAM 11TH CR.',
  'MALLESWARAM 8TH CR.',
  'SWASTIK',
  'TELEPHONE EXCHANGE',
  'CORPORATION OFFICE',
  'K R MARKET',
  'CHAMRAJPET',
  'GANDHIBAZAR CIRCLE',
  'SOUTH END CIRCLE',
  'JAYANAGAR BUS STAND',
  'JP NGR. 6TH PHASE',
  'JP NAGAR 24TH MN/9TH CR',
  'JNR 5TH BLK',
  'GANESH BHAVAN STOP',
  'NAGENDRA BLK',
  'GIRINAGAR CIRCLE',
  'GIRINAGAR EXTN.',
  'VIJAYA COLLEGE/STG',
  'LALBHAG MAIN GATE',
  'MAHARANIS COL',
  'KBS',
  'KEMPEGOWDA BUS STAND',
  'DOMLUR BUS STAND',
  'DOMLUR',
  'DOOPANAHALLI',
  'INDIRANAGAR POL. STN',
  'ULSOOR',
  'MAYO HALL',
  'BANGALORE CLUB',
  'MAHILA SAMAJ/OKKALIGARA SANGHA',
  'BANASHANKARI',
  'MYSORE BANK CIRCLE/KAVERI BHAVAN',
  'ASHOKA PILLAR',
  'WILSON GARDEN POLICE STN.',
  'SHIVAJINAGAR BUS STAND',
  'MALLESWARAM BUS STAND',
  'MONO TYPE',
  'JAYANAGAR 9TH BLK',
  'BYRASANDRA',
  'SAJJANRAO CIRCLE',
  'LIC COLONY',
  'K R CIRCLE',
  'JNR 4TH T BLK',
  'JNR EAST END',
  'BTM L OUT',
  'CARMEL CONVENT SCHOOL',
  'Jn. 12TH MN & 7TH CR BTML',
  'BTM L OUT SOUTH',
  'SADASHIVANAGAR',
  'DATTATREYA TEMPLE',
  'Jn. 24TH CR 1ST MN',
  'JPN 6 PH-SARAKKI',
  'JP NAGAR 1ST PHASE',
  'VETERNARY COLLEGE',
  'RAHMATH NAGAR',
  'J C NAGAR',
  'VASANTHANAGAR',
  'NARASIMHARAJA COLONY',
  'HANUMANTHNAGAR',
  'BSK 1ST STG.',
  'KG NAGAR SWIMMING POOL',
  'Jn. KG NAGAR RD 6TH MN',
  'SRINAGAR',
  'NORTH ROAD',
  'YESHWANTHPUR REG MKT',
  'AVALAHALLI BDA PARK',
  'BSK III STAGE 2ND PHASE',
  'KATHRIGUPPE CR.',
  'BSK 3RD STG. 3RD PHASE',
  'CHENNAMANA KERE ACHKATT',
  'BEML LAYOUT COMPLEX',
  'HAL 3RD STG',
  'TIPPASANDRA CR',
  'MM INDUSTRIES',
  'KADIRENAHALLI',
  'PADMANABHA NAGAR',
  'MAHALAXMI L O',
  'RJNR. 1ST BLK.',
  'RJNR INDL. EST',
  'VIJAYANAGAR BUS STAND',
  'ATTIGUPPE',
  'BAPUJI NAGAR',
  'SIRSI CIRCLE',
  'RAGHAVENDRA COLONY',
  'INST. OF ENGINEERS',
  'GANDHI SCHOOL',
  'MALLESWARAM RLY STN',
  'VINAYAKANAGAR',
  'JAGJIVANRAM NAGAR',
  'BYATARAYANAPURA (MYS)',
  'NEW GUDDADAHALLI',
  'TIMBAR YARD LAYOUT',
  'MAGADI RD LEPROSARIUM',
  'SUJATHA TALKIES',
  'VJNR EAST',
  'MAGADI RD CR',
  'RJNR ESI',
  'SRIRAMPURA ASHWATH KATTE',
  'MALLESWARAM CIRCLE',
  'RAJAMAHAL GUTTAHALLI',
  'KHB COLONY CR RD',
  'CENTRAL TALKIES',
  'SRIRAMPURA HARISCHANDRA GHAT',
  'BASAVESWARA NAGAR CIRCLE',
  'BASAVESWARA NAGAR',
  'MAGADI RD POL QTRS',
  'RJNR 6TH BLK',
  'RJNR-RAMMANDIRA',
  'HARISCHANDRA GHAT',
  'LAKSHMINARAYANAPURA',
  'LAKSHMIPURA CROSS',
  'SUBRAMANYA NAGAR',
  'BANDI REDDY CIRCLE',
  'BINNY LAYOUT',
  'KURUBARAHALLI',
  'BHIMAJOTHI NAGAR',
  'YESWANTHPURA RLY STN',
  'SADASHIVANAGAR POL STN',
  'MEKHRI CIRCLE',
  'CANT. RLY. STN.',
  'KAMALANAGAR BEML LO',
  'KAMALA NAGAR RD',
  'MODI HOSPITAL',
  'KAMALANAGAR WATER TANK',
  'CUNNINGHAM RD PETROL BUNK',
  'CANARA BANK COLONY',
  'NANDIDURGA RD',
  'KAVALBYRASANDRA',
  'GANGANAGARA',
  'CIL',
  'PILLANNA GARDEN',
  'PERIYAR NAGAR',
  'COLES PARK CR.',
  'SULTAN PALYA',
  'ANAND NAGAR',
  'YMCA - ND RD',
  'MARAPPA GARDEN',
  'CHINNAPPA GARDEN',
  'CLARANCE SCHOOL',
  'CSI HOSPITAL',
  'OLD BYAPPANAHALLI',
  'MARUTI SEVANAGAR',
  'ITC FACTORY',
  'FRASER TOWN',
  'JEEVANAHALLI',
  'COX GTOWN',
  'COX TOW CIRCLE/SBM',
  'LAVANYA TALKIES',
  'VIDHANA SOUDHA/HIGH COURT',
  'ELECTRIC B STN.',
  'AJANTA TALKIES',
  'ESI INDIRANAGAR',
  'MEERA MONTESSARY SCH',
  'INDIAN EXPRESS CIRCLE',
  'JEEVANBIMA NAGAR',
  'VIVEK NAGAR',
  'PLEGAMMA TEMPLE',
  'BALDWIN GIRLS SCHOOL',
  'NEELASANDRA',
  'AUSTIN TOWN',
  'NANJAPPA CIRCLE',
  'PALLAVI TALKIES',
  'AUSTIN CR',
  'POONIMA TALKIES',
  'MAHATMA GANDHI STATUE',
  'SLAUGHTER HOUSE',
  'MADIWALA',
  'Jn. HOSUR RD',
  'BANGALORE DAIRY',
  'KORAMANGALA',
  'JOHN FOWLER',
  'KRM KALYANA MANTAPA',
  'ADUGODI',
  'KRM WATER TANK',
  'KORAMANGALA 80 FT RD',
  'YEDIYUR',
  'THYAGARAJA NAGAR',
  'BHASHYAM CIRCLE',
  'RJNR ELE. POWER HOUSE',
  'CHOWDESWARI BUS STAND',
  'MATTIKERE CIRCLE',
  'JALAHALLI CR',
  'GANGENAHALLI',
  'SDS SANITORIUM',
  'HOSKEREHALLI CR',
  'M L O CR',
  'NANDINI LAYOUT',
  'TIPPASANDRA',
  'INCOME TAX LYOUT',
  'CHANDRA LAYOUT',
  'BAPUJI LAYOUT',
  'BSK 3RD STG.',
  'VANNARPET',
  'KORAMANGALA 8TH BLK',
  'KADIRENAHALLI PARK',
  'VIDYAPEETA CIRCLE',
  'DAYANANDASAGAR COL. CR',
  'KUMARASWAMY LAYOUT',
  'CPRI GATE',
  'UTTARAHALLI',
  'VASANTHAPURA CO-OP SOCIETY',
  'KONANAKUNTE CR',
  'JARAGANAHALLI',
  'SOMANAHALLI',
  'KAGGALIPURA',
  'UDIPALYA',
  'CHINNAYYANAPALYA',
  'RAGUVANAHALLI CIRCLE',
  'TATHAGUNI',
  'TALAGHATTAPURA',
  'RAVAGODLU',
  'RAVAGODLU CR',
  'NELAGULI CR',
  'TATTAGUPPE',
  'TARALU',
  'AMRUTH NAGAR',
  'KULUMEPALYA',
  'KONANAKUNTE VILLAGE',
  'BANJARA PALYA',
  'UTTARI',
  'SOMAPURA',
  'CHIKKEGOWDANAPALYA',
  'KAMBIPURA',
  'ANCHEPALYA',
  'KENGERI',
  'PANTRAPALYA',
  'GANGASANDRA',
  'DEVAGERE',
  'TAGACHIKUPPE',
  'HOSAHALLI',
  'KENGERI SAT TOWN',
  'KOMMAGHATTA CR',
  'RV COL. OF ENGG.',
  'NAYANDHALLI',
  'GUDDAHALLI',
  'MALLATHAHALLI',
  'KARUBELE',
  'H GOLLAHALLI',
  'KONASANDRA',
  'CHENNASANDRA',
  'INDO AMERICAN HYBRID FARM',
  'RAJARAJESWARI TEMPLE',
  'VEERA ANJANEYA TEMPLE',
  'MANCHENAYAKANAHALLI',
  'KANIMINIKI',
  'CHUNCHANAKUPPE',
  'RAMUHALLI',
  'SUBBARAYAPPANAPALYA',
  'BASAVANAGARA',
  'GONIPURA',
  'KUMBALAGODU',
  'BYROHALLI',
  'DODDERI GRAMA',
  'HEJJALA',
  'HULLALU',
  'MUDALAPALYA',
  'DEEPANJALI NGR',
  'SURYODAYA MILLS',
  'S M ROAD',
  'NTTF-PEENYA',
  'PEENYA 2ND STG',
  'SRINIVASNAGAR',
  'NRUPATUNGA NAGAR',
  'MAGADI RD 1ST CR.',
  'BIDADI',
  'BILEKEMPANAHALLI CR',
  'LAKSHMISAGARA CR',
  'MACHOHALLI',
  'KODIGEHALLI CR.',
  'SUNKADAKATTE',
  'KOTTIGEPALYA CR',
  'KAMAKSHIPALYA',
  'KENCHANAPURA',
  'KANNAHALLI',
  'DASARAHALLI',
  'TAVAREKERE',
  'CHENNANAYAKANAHALLI',
  'KADABAGERE CR.',
  'ANDRAHALLI',
  'HEROHALLI',
  'JNANABHARATHI CAMPUS',
  'SUBURBAN PRESS',
  'MALLATHALLI GATE',
  'PAPAREDDY PALYA',
  'RAVUTHANAHALLI',
  'KITTANAHALLI',
  'BYANDANAHALLI',
  'ANNAPURNESWARI NAGAR',
  'SRIGANDHADA KAVALU',
  'KG LAKKONDANAHALLI',
  'GANGONDANAHALLI',
  'NELAGADARANAHALLI',
  'NAGASANDRA',
  'HEGGANAHALLI',
  'Jn. PEENYA RD',
  'CHIKKA BANAVAR',
  'BAGALKUNTE CR',
  'SHESHADRIPURAM COLLEGE',
  'SHIVAKOTE',
  'MUTHUGADAHALLI',
  'MUTKUR',
  'SOLADEVANAHALLI CR',
  'INDO DANISH FARM',
  'H GHATTA VILLAGE',
  'H GHATTA TB CR',
  'TABARANAHALLI',
  'SILVEPURA',
  'MATTAHALLI',
  'NAGARUR CR',
  'MAKALI',
  'MORRISON FACTORY',
  'ALURU',
  'NELAMANGALA',
  'BINNAMANGALA',
  'JALAHALLI EAST',
  'KAMMEGONDANAHALLI',
  'LAKSHMIPURA',
  'DOMMASANDRA',
  'YESHWANTHPUR TOLGATE',
  'BEL CIRCLE',
  'HMT WATCH FACTORY',
  'RAJAGOPALNAGAR',
  'KANTEERAVA STUDIO',
  'MED AGRAHARA',
  'YELAHANKA SAT TOWN',
  'CHIKKA BETTAHALLI CR',
  'RAMACHANDRAPURA',
  'HMT HOUSE',
  'MALLESWARAM 8TH MN',
  'VIDYARANYAPURA',
  'BALIGA CIRCLE',
  'BYATARAYANAPURA (BLRY RD)',
  'HEBBALA',
  'NAGASHETTYHALLI',
  'GADENAHALLI',
  'BELLAHALLI',
  'KOGILU',
  'MAILANAHALLI',
  'CHIKKANAHALLI',
  'SHETTYGERE',
  'DODDA JALA',
  'CHIKKA JALA',
  'IAF GATE',
  'VENKATALA',
  'YELAHANKA',
  'BETTA HALSUR',
  'BETTA HALSUR CR',
  'TARAHUNASE',
  'RAJANUKUNTE',
  'AVALAHALLI (RAJANUKUNTE)',
  'PUTTENHALLI',
  'YELAHANKA NES OFF',
  'JAKKUR',
  'TINDLU',
  'BAGALUR',
  'SATHNUR',
  'DWARAKA NAGAR',
  'NAGAVARA',
  'KADUGONDANAHALLI POL STN',
  'MUSLIM COLONY',
  'SRIRAMPURA DASARAHALLI',
  'KACHARAKANAHALLI',
  'RAZAK PALYA',
  'CHIKKA GUBBI CR',
  'GEJJALAHALLI',
  'BILE SHIVALE',
  'KYALASANAHALLI',
  'DODDA GUBBI',
  'DODDA GUBBI CR',
  'HENNUR CR',
  'KENCHENAHALLI',
  'K NARAYANAPURA',
  'NERAGANAHALLI',
  'NAGAMANGALA',
  'GOWDAHALLI',
  'NAVARATNA AGRAHARA',
  'HUNASAMARANAHALII',
  'ALLALSANDRA',
  'KANNAMANGALA',
  'SADENAHALLI',
  'TARABANAHALLI',
  'BANASWADI',
  'KALKERE',
  'KAMMANAHALLI',
  'M G ROAD',
  'AREHALLI',
  'ANUGONDANAHALLI CR',
  'BHODANA HOSAHALLI',
  'AGRAHARA CR.',
  'GARUDACHAR PALYA',
  'BENNIGANAHALLI',
  'NADAVATTI',
  'DEVANAGUNDI',
  'K R PURAM RLY STN',
  'RAMAPURA',
  'ADUR',
  'HIRANDAHALLI',
  'MEDAHALLI',
  'RAMAMURTHY NAGAR',
  'ISOLATION HOSPITAL',
  'GUNDUR',
  'DRDO TOWN SHIP',
  'SRINIVASAPURA CR',
  'TANMBUCHETTYPALYA',
  'NAGAVARAPALYA',
  'KAGGADASANAPURA',
  'BUDIGERE',
  'TIRUMENAHALLI CR',
  'MANDUR',
  'HOSAKOTE',
  'HOSKOTE SCHOOL',
  'BUDIGERE CR.',
  'K R PURAM OLD POL STN',
  'JOTHIPURA',
  'DEVANAHALLI',
  'BELTHUR',
  'IMMADIHALLI',
  'WHITE FIELD PO',
  'SAMETHANAHALLI',
  'HOPE FARM',
  'PATTANDUR AGRAHARA',
  'HOODI VILLAGE',
  'MAHADEVAPURA CR',
  'BYLAHALLI',
  'KADUGODI RLY STN',
  'SIDDAPURA',
  'MARATHALLI',
  'HAL MAIN GATE',
  'MANIPAL HOSPITAL',
  'MILITARY HOSPITAL',
  'BAGUR',
  'MUGALUR',
  'NERIGE',
  'VARTHUR',
  'VARTHUR KODI',
  'SHOOLAY CIRCLE',
  'HAROHALLI',
  'Jn. OLD BRIDGE',
  'Jn. VARTUR RD',
  'GUNJUR',
  'MUTSANDRA',
  'HAROHALLI CR',
  'HAL KALYANA MANTAPA',
  'HAL MAINGATE',
  'BALAGERE',
  'GRAPHITE INDIA',
  'KUNDALAHALLI',
  'PANATTUR DINNE',
  'PANATHUR',
  'DODDA NEKKUNDI',
  'MUNEKOLLOL',
  'GUNJURPALYA',
  'LAKKASANDRA',
  'LAL BAGH SOCIETY',
  'BELLANDUR',
  'BELLANDUR GATE',
  'CHANDAPURA CR',
  'BEGUR',
  'BOMMANAHALLI',
  'KOPPA',
  'HULIMANGALA CR',
  'VADDARAPALYA',
  'HONGASANDRA',
  'HULIMANGALA',
  'SHIKARIPALYA',
  'NEELADRI AMUSEMENT PARK',
  'KONAPPANA AGRAHARA',
  'SINGASANDRA',
  'KUDLU GATE',
  'KUDLU',
  'MANGAMMANAPALYA',
  'HUSKUR (HSR)',
  'SINGENAAGRAHARA CR',
  'ELCTRONIC CITY',
  'HOSA ROAD',
  'ADIGONDANAHALLI',
  'CHANDAPURA',
  'HEBGODI',
  'NARAYANAGHATTA',
  'RAMASANDRA',
  'HENNAGARA',
  'KITTAGANAHALLI',
  'RAMAKRISHNAPURA',
  'SRIRAMPURAM',
  'YARANDHALLI',
  'BANDAPURA',
  'MAYASANDRA',
  'KAMBLIPURA',
  'ICHINGUR',
  'GUESTLINE HOTEL',
  'GUDDEHATTI CR.',
  'GUDDAHATTI',
  'GUDDATTI CR',
  'CHANDAPURA CIRCLE',
  'ATTIBELE',
  'SIDI HOSKOTE',
  'BYAGADENAHALLI',
  'MARASUR CR',
  'NYANAPPANAHALLI',
  'DEVARA CHIKKANAHALLI',
  'VIJAYA BANK LAYOUT',
  'GURAPPANAPALYA',
  'BANNERGHATTA NATIONAL PARK',
  'BANNERGHATTA',
  'BASAVANAPURA',
  'GOTTIGERE',
  'HULIMAVU GATE',
  'BILEKALLAHALLI',
  'HULIMAVU',
  'MELE NALSANDRA',
  'SHIVANAHALLI',
  'RAGIHALLI',
  'INDALAWADI',
  'KONASANDRA CR',
  'JIGANI',
  'YELLAKUNTE MANGAMMANAPALYA',
  'KATHRIGUPPE',
  'BANGALORE CHILDREN GHOSP.',
  'VASANTHAPURA',
  'KARNATAKA SOLVENTS',
  'THIMMASANDRA',
  'ALAPPANAHALLI',
  'KALLAHALLI',
  'UPPARAHALLI',
  'MASTENAHALLI',
  'RAMASAGARA',
  'MUTHANALLUR',
  'BOMMASANDRA CR',
  'CHINTALA MADIWALA',
  'HEGGONDANAHALLI',
  'KADGODI',
  'KAJI SONNENAHALLI',
  'BABASAHEB PALYA',
  'KALYAN NAGAR',
  'MOHD. SAB PALYA',
  'YELAHANKA SAT TOWN 4TH PH',
  'ALLALASANDRA RLY. GATE',
  'GOODSHED GATE',
  'MARIYAPPANAPALYA',
  'BASAVANAHALLI',
  'RAILWAY GOLLAHALLI',
  'Jn. MAGADI RD/KACHOHALLI RD',
  'DEVARABISANAHALLI',
  'KALYAN NAGAR BUS STAND',
  'VISHWANATH NAGENAHALLI',
  'GORGUNTEPALYA',
  'PATELAPPA LAYOUT',
  'ST. THERESAS SCHOOL',
  'COTTONPET HOSPITAL',
  'BOMBAY DYEING (YPR)',
  'MICO LYT.',
  'TRINITY CHURCH',
  'ELGIN FLOOR MILL',
  'JARAGANAHALLI HOUSE BLDG CO-OP SO',
  'ITTIMADU',
  'HOSKEREHALLI',
  'ILYAS NAGAR',
  'KAVERI HOTEL',
  'METAL LAMP CAPS',
  'Jn. BTM LO 12TH MN 7TH CR',
  'VIVEKANANDA NAGAR',
  'VEERABHADRA NAGAR',
  'GAVIGANGADHARESWARA TEMPLE',
  'MYSORE BANK COLONY',
  'MUNESWARA BLK',
  'TELE. COLONY',
  'KEMPEGOWDA NAGAR',
  'MOHANKUMAR NAGAR',
  'RAMAKRISHNA ASHRAMA',
  'M S RAMAIAH COL',
  'BHASHYAM CIRCLE SADASHIVA NGR',
  'WILSON GARDEN 10TH CR',
  'MARENAHALLI',
  'GKWLAYOUT',
  'CHANDRA LAYOUT 1ST. STG',
  'PUTTANNACHETTI CIRCLE',
  'MAGADI TOLGATE',
  'PRASANNA & PRAMOD TALKIES',
  'Md. BLOCK',
  'RPC LAYOUT',
  'MAGADI RD KHB COLONY',
  'KAMALA NEHRU EXTN',
  'LAKSHMIDEVINAGAR',
  'KRISHNANANDANAGAR',
  'JAI BHUVANESWARI NAGAR',
  'GANESH TEMPLE-MLO',
  'SHANKAR NAGAR',
  'BASAVESWARANAGAR 3 STG',
  'KAVERI NAGAR',
  'GELEYARA BALAGA',
  'RAJAMAHAL VILAS 2ND STG',
  'DEVASANDRA',
  'MALLESWARAM 18 CR',
  'KAMALA NAGAR',
  'MALLESWARAM 13 CR',
  'GANGANAGAR CR',
  'R T NAGAR',
  'NEW BYAPPANAHALLI',
  'SRINIVAGILU',
  'EJIPURA',
  'KORAMANGALA COMPLEX',
  'NEELASANDRA ROSE GDRN',
  'KRM HOUSING COMPLEX',
  'JAI BHIMANAGAR',
  'SUDDUGUNTEPALYA',
  'BTM LAYOUT EWS COLONY',
  'ADUGODI QTRS',
  'BANGALORE DAIRY COLONY',
  'KRM KENDRIYA SADAN',
  'VENKATAPURA',
  'Jn. 9TH MN & 3RD CR (MS NGR)',
  'ISRO LAYOUT',
  'CHUNCHAGHATTA',
  'GUBBALALA',
  'CHIKKALASANDRA',
  'CHIKKALASANDRA VILLAGE',
  'BEML 5TH BLCK.',
  'SRINIVASAPURA',
  'RACHENAHALLI',
  'VADERAHALLI',
  'NAGANAYAKANAHALLI',
  'SUNDARAM ESTATE',
  'KODIYALA KARENAHALLI',
  'MUKKODLU',
  'HONNALAGANADODDI',
  'GADIPALYA',
  'GABBADI',
  'PARASANAPALYA',
  'TIPPUR',
  'NETTIGERE',
  'NELAGULI',
  'KAGGALIHALLI',
  'GANTAGANAHALLI',
  'NAUKAL PALYA',
  'HOSURU',
  'GIRIGOWDANADODDI',
  'MUNINAGARA',
  'GOTTIGEHALLI',
  'SRIRAMA TEMPLE',
  'GULLAHATTIKAVAL',
  'DYAVASANDRA',
  'KADA JAKKASANDRA',
  'KOTHNUR',
  'AVALAHALLI BDA LAYOUT',
  'JUMBO SAVARI DINNE',
  'ESWAR LAYOUT',
  'BIRESWARANAGAR',
  'GANAPATHIPURA',
  'TOWN HALL',
  'K KUNTE NEW BANK COLONY',
  'DODDABELE',
  'YELACHIGUPPE',
  'GULAGANJANAHALLI',
  'MARAGONDANAHALLI',
  'SULIKERE',
  'KOMMAGHATTA',
  'DODDABASTI',
  'CHIKKANAHALLI CR',
  'KENGERI SAT TOWN HOU BRD',
  'NAGARABHAVI CIRCLE',
  'SRINIVASAPURA HOSA BADAVANE',
  'GANAKAL',
  'DEVADIGA SOUDHA',
  'HAMPAPURA',
  'VAJARAHALLI',
  'CHENNEGOWDANADODDI',
  'PUTTAYYANAPALYA',
  'BANNIKUPPE',
  'Jn. RAMOHALLI',
  'HULUVENAHALLI',
  'SHIVAJI CIRCLE',
  'SULIVARA CR',
  'MAGADI',
  'VEERAGOUDANADODDI',
  'DABBAGULI',
  'MANCHENABELE',
  'PUNAGAMARANAHALLI',
  'HUNNAGERE',
  'KOTTUR',
  'TATTANAHALLI',
  'BETTANAHALLI',
  'KURUBARA KANNENAHALLI',
  'BETTANAGERE',
  'BOREHALLI',
  'ULLALU SAT. TOWN',
  'ULLALU CR',
  'NAGARABHAVI VILLAGE',
  'PRASHANTH NAGAR',
  'DODDA MARANAHALLI',
  'JNANABHARATHI ADM BLK',
  'SPORTS AUTHORITY INDIA',
  'BHARATH HOUSING CO-OP LO.',
  'NAGARABHAVI 1ST STG',
  'NAGARABHAVI 9TH BLK',
  'NAGARABHAVI 1ST STG 2B',
  'ESI HOSPITAL',
  'JAIMUNIRAO CIRCLE',
  'BYLAKONENAHALLI',
  'ARASHINAKUNTE',
  'G HOSAHALLI',
  'SHANUBHOGANAHALLI',
  'CHOLANAYAKANAHALLI',
  'CHENNENAHALLI',
  'ANJANA NAGAR',
  'ASHRAMA (ADGH)',
  'GOLLARAHATTI',
  'BYDARAHALLI',
  'GOLLARAHALLI',
  'SIGEHALLI',
  'KADABAGERE',
  'MALAGALU',
  'DEVANA MACHENAHALLI',
  'PEDDANAPALYA',
  'GANAPATHIHALLI',
  'GIDDENAHALLI',
  'MAHIMANAPALYA',
  'KUDUREGERE',
  'MUDDAYYANAPALYA',
  'TIGALARAPALYA',
  'MADAPATTANA',
  'NAGARABHAVI 2 STG 10TH BLK',
  'AMBEDKAR INST. TECH.',
  'SONDEKOPPA',
  'MALLASANDRA',
  'JANAPRIYA TOWN SHIP',
  'AVERAHALLI',
  'LEGGERE',
  'FATHIMA CHURCH',
  'KARIMSAB LAYOUT',
  'Jn. SUNKADAKATTE',
  'RAJAGOPALNAGAR POL.STN',
  'BAGALKUNTE',
  'THIMMENAHALLI',
  'SIDDANAHALLI',
  'SOMASHETTYHALLI',
  'KAKOLU',
  'HESARAGHATTA DAIRY FARM',
  'LINGANAHALLI',
  'RAJIVGANDHI NAGAR',
  'HMT LAYOUT',
  'KALYAN NAGAR 3RD CR',
  'RAJANI FARM',
  'NAGA TALKIES',
  'BYATHA',
  'MAVALLIPURA',
  'TORE NAGASANDRA',
  'TOTAGERE TEMPLE',
  'KODIHALLI',
  'KUMBARANAHALLI',
  'KALATHAMMANAHALLI',
  'KEMPAPURA',
  'KUMBARAHALLI',
  'HUSKUR VILLAGE',
  'NAGARUR',
  'PILLAHALLI',
  'NARASIPURA',
  'JINDAL HOSPITAL',
  'GEJJAGADAHALLI',
  'RAVUTHANAHALLI CR',
  'KARNATAKA RE-ROLLING INST',
  'PAPABHOVIPALYA CR',
  'HULLEGOWDANAHALLI',
  'KARIKALPALYA',
  'NELAMANGALA TB',
  'YENTAGANAHALLI',
  'HONNASANDRA',
  'TIPPENAHALLI',
  'MYLAPPANAHALLI',
  'ANANDARAO CIRCLE',
  'ABBIGERE',
  'MADDAPPANAHALLI',
  'JALAHALLI VIL',
  'GOKULA',
  'KUVEMPU NGR 2ND STG',
  'SINGAPURA',
  'SHETTYHALLI',
  'IAF (BELLARY RD)',
  'ALISDA FACTORY',
  'BHADRAPPA LAY OUT',
  'GEDDALAHALLI',
  'BHUPASANDRA',
  'CHIKKALASANDRA SARIGE NAGAR',
  'AGRAHARA LAYOUT',
  'BANDE BOMMASANDRA',
  'YARAPPANAHALLI',
  'KANNUR',
  'TANISANDRA',
  'R K HEGDE NAGAR',
  'BYNAHALLI',
  'MISAGANAHALLI',
  'HUTTANAHALLI',
  'VIDYANAGAR CR',
  'NALLURHALLI',
  'SUGGATTA',
  'VISVESVARAYA ENG. COL',
  'JALIGE',
  'MARASANDRA CIRCLE',
  'JUDICIAL LAYOUT',
  'NAGENAHALLI',
  'RAMAGONDANAHALLI',
  'ANANTHPURA',
  'DODDA TUMKUR',
  'KUSTI BASAPPA CIR',
  'BYRAPURA',
  'ADDA VISHWANATHAPURA',
  'BHUDUMANAHALLI',
  'KULUVARAYANAHALLI',
  'HARADASANAHALLI',
  'SURADEVANAPURA CR',
  'DODDABALLAPUR',
  'JAKKUR LAYOUT',
  'CHOKKANAHALLI',
  'AMARAJYOTHI NGR',
  'COFFEE BOARD LO',
  'HEBBAL KEMPAPURA',
  'SHANKAR NAGAR PO',
  'AREBINNAMANGALA',
  'GOPALAPURA',
  'PALANAHALLI',
  'GEDDALAHALLI CR',
  'GANGAWARA',
  'DEVANAHALLI CR',
  'TIRUMALASHETTYHALLI',
  'MANCHAPPANAHALLI',
  'M HOSAHALLI',
  'AMBEDKAR MEDICAL COL.',
  'TIRUMALASHETTYHALLI CR',
  'VIDYASAGARA',
  'MESTRI PALYA',
  'AREBIC COLLEGE',
  'KADUGONDANAHALLI',
  'M DASARAHALLI',
  'DODDANNA NAGAR',
  'GOVINDAPURA',
  'HORAMAU AGRAHARA',
  'KADE AGRAHARA',
  'SINGENAHALLI',
  'MITTAGANAHALLI CR',
  'KADASONNAPPANAHALLI',
  'KADAYERRAPPANAHALLI',
  'HANAGALIPURA',
  'PULIKESHI NAGAR',
  'HBR LO 5TH BLK',
  'KAMMANAHALLI EXTN',
  'KSFC LAYOUT',
  'LINMGARAJAPURA',
  'JADE GARDEN',
  'UGANAVADI',
  'KANNAMANGALAPALYA GATE',
  'PUJANAHALLI GATE',
  'ANNESWARA',
  'DODDASANNE',
  'BHUVANAHALLI',
  'KAMMANAHALLI GATE',
  'B CHENNASANDRA',
  'SRS KALYANA MANTAPA',
  'ITI COLONY',
  'SUBBAIAH CIRCLE',
  'VIGNANA NAGAR',
  'KASTURI NAGAR',
  'SADARAMANGALA',
  'CHENNASANDRA CR',
  'SUBBAYYANAPALYA',
  'BABU JAGJIVANRAM DENTAL COLLEGE',
  'KALYANAGAR NEW BUS STND',
  'CHELIKERE',
  'HORAMAVU',
  'RAMASWAMY PALYA',
  'KALKUNTE AGRAHARA',
  'AECS LAYOUT',
  'MAHADEVAPURA',
  'BHAKTARAHALLI',
  'MAKANAHALLI',
  'BISANAHALLI',
  'HADENAHALLI',
  'MEDIHALLI COLONY',
  'VEERANAHALLI',
  'DODDA BANAHALLI',
  'BYAPPANAHALLI',
  'VIJINAPURA',
  'KITTIGANUR',
  'A NARAYANAPURA',
  'JINGO TIMMANAHALLI',
  'KUNDALAHALLI GATE',
  'DODDA KANNELI',
  'MALLESHPALYA',
  'RAMESH NAGAR',
  'C V RAMAN NAGAR',
  'SUDDUGUNTEPALYA CR',
  'KRISHNAIAHANAPALYA',
  'NGEF GATE',
  'NAGONDANAHALLI',
  'BHATTARA MARENAHALLI',
  'HANCHARAHALLI',
  'Jn. DEVANAHALLI RD',
  'PUJANA AGRAHARA',
  'KANNURHALLI',
  'KUMBALAHALLI',
  'PILLAGUMPA INDL. EST',
  'Jn. DASARAHALLI',
  'JADIGENAHALLI',
  'CHIMMANDA HALLI',
  'CHIKKA BANAHALLI',
  'DINNUR',
  'BHOGANAHALLI',
  'GONIGHATTAPURA',
  'JANTAGONDANAHALLI',
  'NAKKUNDI DOMMASANDRA',
  'KOOGURU',
  'KOOTHAGANAHALLI',
  'AGADUR',
  'BIDARAGUPPE',
  'YEMRI',
  'ANUGONDANAHALLI',
  'BILIKERE',
  'YEMLUR',
  'YEMLUR CR',
  'WHITE FIELD RLY STN',
  'LALBAHDURSHASTRYNAGAR',
  'COMMANDO HOSPITAL',
  'PARANGI PALYA',
  'HARALUR',
  'CHUDASANDRA',
  'KASUVANAHALLI',
  'PRESENTATION CONVENT',
  'AGARA (KRM)',
  'GOPASANDRA CR',
  'KACHAMARANAHALLI',
  'MULLUR',
  'BIKKANAHOSALLI',
  'BOMMASANDRA',
  'KOMMASANDRA',
  'HULLAHALLI',
  'MYLASANDRA',
  'HARAGADDE',
  'KODI CHIKKANAHALLI',
  'BETTADASANAPURA',
  'VITTASANDRA',
  'VABSANDRA',
  'DODDA NAGAMANGALA',
  'PARAPPANA AGRAHARA',
  'RAYASANDRA',
  'CHIKKA NAGAMANGALA',
  'DODDATOGUR',
  'CHIKKA BEGUR',
  'Jn. BTM LAYOUT',
  'SINGENAAGRAHARA',
  'GHATTAHALLI',
  'CHIKKA TIMMASANDRA',
  'TIRUPALYA',
  'BANDE NALSANDRA',
  'HINNAKKI',
  'RAJAPURA',
  'MARASUR',
  'HEELALIGE',
  'JIGALA',
  'ATTIBELE BORDER',
  'NARASAPURA',
  'MICO SHRAJIVI COLONY',
  'ARKERE GATE',
  'BEGIHALLI',
  'BILWARADA HALLI',
  'MEENAKSHI TEMPLE',
  'KOPPA GATE',
  'CHETTAKERE PALYA',
  'MAHANTALINGAPURA',
  'NOSENURU',
  'WEAVERS COLONY',
  'BYATARAYANADODDI',
  'KEMBATTAHALLI',
  'CHIKKA KAMMANAHALLI',
  'BYATARAYANADODDI CR',
  'AKKIPIKKI COLONY',
  'KALKERE GATE',
  'TAMMANAYAKANAHALLI',
  'ARALUR',
  'DEVANAGUNDI CR',
  'CHENNABYREGOWDA CIRCLE',
  'SOLUR',
  'KOLTUR',
  'DANDUPALYA',
  'ATTUR',
  'CHIKKABETTAHALLI',
  'MOTHER DAIRY CIRCLE',
  'SULTAN PALYACR',
  'JP NAGAR 15 CR' ];

var createSelectOptions = function(){
  var options = [];
  for (var index in stops) {
      options.push('<option value="',
        stops[index], '">',
        stops[index], '</option>');
  }
  $(".selectBox").html(options.join(''));
};

window.onload = function(){
  createSelectOptions();
};