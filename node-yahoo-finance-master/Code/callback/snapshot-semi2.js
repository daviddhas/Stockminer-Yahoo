var util = require('util');

require('colors');

var _ = require('lodash');
var yahooFinance = require('../..');

var FIELDS = _.flatten([
  // Pricing
  ['a', 'b'],
  // Dividends
  ['y', 'd', 'r1', 'q'],
  // Date',
  ['c1', 'c', 'c6', 'k2', 'p2', 'd1', 'd2', 't1']
  // Averages

]);

var SYMBOLS = [
'EFOI',
'ERII',
'EXXI',
'ENOC',
'ENG',
'ENPH',
'ESGR',
'ENFC',
'ENTG',
'ENTL',
'ETRM',
'EBTC',
'EFSC',
'EGT',
'ENZN',
'ENZY',
'EPIQ',
'EPRS',
'EPZM',
'PLUS',
'EQIX',
'EQFN',
'EQBK',
'EAC',
'ERIC',
'ERIE',
'ESCA',
'ESMC',
'ESPR',
'ESSA',
'EPIX',
'ESND',
'ESSX',
'ESSF',
'ETSY',
'CLWT',
'EEFT',
'ESEA',
'EVEP',
'EVK',
'EVLV',
'EVOK',
'EVOL',
'EXA',
'EXAS',
'EXAC',
'EXEL',
'EXFO',
'EXLS',
'EXPE',
'EXPD',
'EXPO',
'ESRX',
'EXTR',
'EYEG',
'EYEGW',
'EZCH',
'EZPW',
'FFIV',
'FB',
'FCS',
'FRP',
'FWM',
'FALC',
'DAVE',
'FARM',
'FFKT',
'FMNB',
'FARO',
'FAST',
'FATE',
'FBSS',
'FBRC',
'FDML',
'FNHC',
'FEIC',
'FHCO',
'FENX',
'FCSC',
'FGEN',
'ONEQ',
'LION',
'FDUS',
'FRGI',
'FSAM',
'FSC',
'FSCFL',
'FSFR',
'FITB',
'FITBI',
'FNGN',
'FISI',
'FNSR',
'FNJN',
'FNTC',
'FNTCU',
'FNTCW',
'FEYE',
'FBNC',
'FNLC',
'FRBA',
'BUSE',
'FBIZ',
'FCVA',
'FCAP',
'FCFS',
'FCNCA',
'FCLF',
'FCBC',
'FCCO',
'FCFP',
'FBNK',
'FDEF',
'FFNM',
'FFBC',
'FFBCW',
'FFIN',
'THFF',
'FFNW',
'FFWM',
'FGBI',
'INBK',
'FIBK',
'FRME',
'FMBH',
'FMBI',
'FNBC',
'FNFG',
'FNWB',
'FSFG',
'FSLR',
'FSBK',
'FPA',
'BICK',
'FBZ',
'FCAN',
'FTCS',
'FCA',
'FDT',
'FDTS',
'FV',
'IFV',
'FEM',
'FEMB',
'FEMS',
'FTSM',
'FEP',
'FEUZ',
'FGM',
'FTGC',
'FTHI',
'HYLS',
'FHK',
'FPXI',
'YDIV',
'SKYY',
'CU',
'PLTM',
'FJP',
'FLN',
'FTLB',
'LMBS',
'FMB',
'QABA',
'CIBR',
'FONE',
'QCLN',
'GRID',
'CARZ',
'RDVY',
'TDIV',
'QQEW',
'QQXT',
'QTEC',
'AIRR',
'QINC',
'FTSL',
'FKO',
'FCVT',
'FDIV',
'FSZ',
'FTW',
'TUSA',
'FKU',
'FUNC',
'SVVC',
'FMER',
'FSV',
'FISV',
'FIVE',
'FPRX',
'FIVN',
'FLML',
'FLKS',
'FLXN',
'SKOR',
'LKOR',
'MBSD',
'QLC',
'FLXS',
'FLEX',
'FLIR',
'FLDM',
'FFIC',
'FOMX',
'FOGO',
'FONR',
'FES',
'FORM',
'FORTY',
'FORR',
'FTNT',
'FBIO',
'FWRD',
'FORD',
'FWP',
'FOSL',
'FMI',
'FXCB',
'FOXF',
'FRAN',
'FELE',
'FRED',
'FREE',
'RAIL',
'FEIM',
'FRPT',
'FTR',
'FTRPR',
'FRPH',
'FSBW',
'FTD',
'FSYS',
'FTEK',
'FCEL',
'FORK',
'FULL',
'FULLL',
'FLL',
'FULT',
'FSNN',
'FFHL',
'FXEN',
'FXENP',
'GK',
'WILC',
'GAIA',
'GLPG',
'GALT',
'GALTU',
'GALTW',
'GALE',
'GLMD',
'GLPI',
'GPIC',
'GRMN',
'GGAC',
'GGACR',
'GGACU',
'GGACW',
'GARS',
'GCTS',
'GLSS',
'GENC',
'GNCMA',
'GFN',
'GFNCP',
'GFNSL',
'GENE',
'GNMK',
'GNCA',
'GHDX',
'GNST',
'GNTX',
'THRM',
'GNVC',
'GTWN',
'GEOS',
'GABC',
'GERN',
'GEVO',
'ROCK',
'GIGM',
'GIGA',
'GIII',
'GILT',
'GILD',
'GBCI',
'GLAD',
'GLADO',
'GOOD',
'GOODN',
'GOODO',
'GOODP',
'GAIN',
'GAINN',
'GAINO',
'GAINP',
'LAND',
'GLBZ',
'GBT',
'GDEF',
'ENT',
'GBLI',
'GBLIZ',
'GPAC',
'GPACU',
'GPACW',
'GSOL',
'ACTX',
'QQQC',
'SOCL',
'ALTY',
'SRET',
'YLCO',
'GAI',
'GSM',
'GBIM',
'GLBS',
'GLRI',
'GLUU',
'GLYC',
'GOGO',
'GLNG',
'GMLP',
'GLDC',
'GDEN',
'GOGL',
'GBDC',
'GTIM',
'GPRO',
'GMAN',
'GRSH',
'GRSHU',
'GRSHW',
'GPIA',
'GPIAU',
'GPIAW',
'LOPE',
'GRVY',
'GBSN',
'GLDD',
'GSBC',
'GNBC',
'GRBK',
'GPP',
'GPRE',
'GCBC',
'GLRE',
'GRIF',
'GRFS',
'GRPN',
'OMAB',
'GGAL',
'GSIG',
'GSIT',
'GSVC',
'GTXI',
'GBNK',
'GFED',
'GUID',
'GIFI',
'GURE',
'GPOR',
'GWPH',
'GWGH',
'GYRO',
'HEES',
'HLG',
'HNRG',
'HALL',
'HALO',
'HBK',
'HMPR',
'HBHC',
'HBHCL',
'HNH',
'HAFC',
'HNSN',
'HQCL',
'HDNG',
'HLIT',
'HRMN',
'HRMNU',
'HRMNW',
'TINY',
'HART',
'HBIO',
'HCAP',
'HCAPL',
'HAS',
'HA',
'HCOM',
'HWKN',
'HWBK',
'HAYN',
'HDS',
'HIIQ',
'HCSG',
'HQY',
'HSTM',
'HWAY',
'HTLD',
'HTLF',
'HTWR',
'HTBX',
'HSII',
'HELE',
'HMNY',
'HMTV',
'HNNA',
'HCAC',
'HCACU',
'HCACW',
'HSIC',
'HERO',
'HTBK',
'HFWA',
'HEOP',
'HCCI',
'MLHR',
'HRTX',
'HSKA',
'HFFC',
'HIBB',
'HPJ',
'HIHO',
'HIMX',
'HIFS',
'HSGX',
'HMNF',
'HMSY',
'HOLI',
'HOLX',
'HBCP',
'HOMB',
'HFBL',
'AWAY',
'HMIN',
'HMST',
'HTBI',
'HKTV',
'CETC',
'HOFT',
'HFBC',
'HBNC',
'HZNP',
'HRZN',
'ZINC',
'HDP',
'HMHC',
'HWCC',
'HOVNP',
'HBMD',
'HSNI',
'HTGM',
'HUBG',
'HSON',
'HDSN',
'HBAN',
'HBANP',
'HURC',
'HURN',
'HTCH',
'HBP',
'HDRA',
'HDRAR',
'HDRAU',
'HDRAW',
'HYGS',
'IDSY',
'IACI',
'IKGH',
'IBKC',
'IBKCP',
'ICAD',
'IEP',
'ICFI',
'ICLR',
'ICON',
'ICUI',
'IPWR',
'INVE',
'IDRA',
'IDXX',
'DSKY',
'IROQ',
'IRG',
'RXDX',
'IIVI',
'KANG',
'IKNX',
'ILMN',
'ISNS',
'IMMR',
'ICCC',
'IMDZ',
'IMNP',
'IMGN',
'IMMU',
'IPXL',
'IMMY',
'INCR',
'SAAS',
'INCY',
'INDB',
'IBCP',
'IBTX',
'IDSA',
'INFN',
'INFI',
'IPCC',
'III',
'IFON',
'IMKTA',
'INWK',
'INNL',
'INOD',
'IPHS',
'IOSP',
'ISSC',
'INGN',
'ITEK',
'INOV',
'INO',
'NSIT',
'ISIG',
'INSM',
'IIIN',
'PODD',
'INSY',
'NTEC',
'IART',
'IDTI',
'IESC',
'ISSI',
'INTC',
'IQNT',
'IPCI',
'IPAR',
'IBKR',
'ININ',
'ICPT',
'ICLD',
'ICLDW',
'IDCC',
'TILE',
'IMI',
'INAP',
'IBOC',
'ISCA',
'IGLD',
'IIJI',
'XENT',
'INTX',
'ISIL',
'IILG',
'IVAC',
'INTL',
'INTLL',
'ITCI',
'IIN',
'INTU',
'ISRG',
'INVT',
'SNAK',
'ISTR',
'ISBC',
'ITIC',
'NVIV',
'IVTY',
'IPAS',
'DTUL',
'DFVL',
'IPCM',
'IPGP',
'IRMD',
'IRIX',
'IRDM',
'IRDMB',
'IRBT',
'IRWD',
'IRCP',
'COMT',
'IFEU',
'IFGL',
'GNMA',
'ACWX',
'ACWI',
'AAXJ',
'EEMA',
'EEML',
'EUFN',
'IEUS',
'QAT',
'UAE',
'IBB',
'SOXX',
'EMIF',
'ICLN',
'WOOD',
'INDY',
'ISHG',
'IGOV',
'ISIS',
'ISLE',
'ISRL',
'ITRI',
'ITRN',
'ITUS',
'XXIA',
'IXYS',
'JJSF',
'MAYS',
'JBHT',
'JCOM',
'JASO',
'JKHY',
'JACK',
'JXSB',
'JAXB',
'JAGX',
'JAKK',
'JMBA',
'JRVR',
'ERW',
'JASN',
'JASNW',
'JAZZ',
'JD',
'JBLU',
'JTPY',
'JCTCF',
'DATE',
'JST',
'JIVE',
'WYIG',
'WYIGU',
'WYIGW',
'JOEZ',
'JBSS',
'JOUT',
'JNP',
'JUNO',
'KTWO',
'KALU',
'KBIO',
'KMDA',
'KNDI',
'KCLI',
'KPTI',
'KBSF',
'KCAP',
'KRNY',
'KELYA',
'KELYB',
'KMPH',
'KFFB',
'KERX',
'GMCR',
'KEQU',
'KTEC',
'KTCC',
'KFRC',
'KE',
'KBAL',
'KIN',
'KNMD',
'KGJI',
'KINS',
'KONE',
'KIRK',
'KITE',
'KTOV',
'KTOVW',
'KLAC',
'KLOX',
'KLXI',
'KONA',
'KZ',
'KOPN',
'KRNT',
'KOSS',
'KWEB',
'KTOS',
'KUTV',
'KLIC',
'KURA',
'KVHI',
'FSTR',
'LJPC',
'LSBK',
'LSBG',
'LBAI',
'LKFN',
'LAKE',
'LRCX',
'LAMR',
'LANC',
'LNDC',
'LARK',
'LMRK',
'LE',
'LSTR',
'LNTH',
'LTRX',
'LPSB',
'LSCC',
'LAWS',
'LAYN',
'LCNB',
'LDRH',
'LBIX',
'LGCY',
'LGCYO',
'LGCYP',
'LTXB',
'LMAT',
'TREE',
'LXRX',
'LGIH',
'LHCG',
'LBRDA',
'LBRDK',
'LBTYA',
'LBTYB',
'LBTYK',
'LILA',
'LILAK',
'LVNTA',
'LVNTB',
'QVCA',
'QVCB',
'LMCA',
'LMCB',
'LMCK',
'TAX',
'LTRPA',
'LTRPB',
'LPNT',
'LCUT',
'LFVN',
'LWAY',
'LGND',
'LTBR',
'LPTH',
'LLEX',
'LIME',
'LLNW',
'LMNR',
'LINC',
'LECO',
'LIND',
'LINDW',
'LLTC',
'LNCO',
'LINE',
'LBIO',
'LIOX',
'LPCN',
'LQDT',
'LFUS',
'LIVN',
'LOB',
'LIVE',
'LPSN',
'LKQ',
'LMFAU',
'LMIA',
'LOGI',
'LOGM',
'LOJN',
'EVAR',
'CNCR',
'LORL',
'LOXO',
'LPTN',
'LPLA',
'LRAD',
'LYTS',
'LULU',
'LITE',
'LMNX',
'LMOS',
'LUNA',
'MBTF',
'MTSI',
'MCBC',
'MFNC',
'MCUR',
'MGNX',
'MAGS',
'MGLN',
'MPET',
'MGIC',
'CALL',
'MNGA',
'MGYR',
'MHLD',
'MHLDO',
'MSFG',
'COOL',
'MMYT',
'MBUU',
'MLVF',
'MAMS',
'MANH',
'LOAN',
'MNTX',
'MTEX',
'MNKD',
'MANT',
'MAPI',
'MARA',
'MCHX',
'MARPS',
'MRNS',
'MKTX',
'MKTO',
'MRKT',
'MRLN',
'MAR',
'MBII',
'MRTN',
'MMLP',
'MRVL',
'MASI',
'MTCH',
'MTLS',
'MTRX',
'MAT',
'MATR',
'MATW',
'MFRM',
'MTSN',
'MXIM',
'MXWL',
'MZOR',
'MBFI',
'MBFIP',
'MCFT',
'MGRC',
'MDCA',
'MCOX',
'TAXI',
'MDAS',
'MTBC',
'MTBCP',
'MNOV',
'MDSO',
'MDGS',
'MDVN',
'MDWD',
'MDVX',
'MDVXW',
'MEET',
'MEIP',
'MELA',
'MPEL',
'MLNX',
'MELR',
'MEMP',
'MRD',
'MENT',
'MTSL',
'MELI',
'MBWM',
'MERC',
'MBVT',
'MRCY',
'EBSB',
'VIVO',
'MMSI',
'MACK',
'MSLI',
'MLAB',
'MESO',
'CASH',
'MBLX',
'MEOH',
'MEIL',
'MEILW',
'MEILZ',
'METR',
'MFRI',
'MGCD',
'MGEE',
'MGPI',
'MCHP',
'MU',
'MICT',
'MICTW',
'MSCC',
'MSFT',
'MSTR',
'MVIS',
'MPB',
'MCEP',
'MBRG',
'MBCN',
'MSEX',
'MOFG',
'MIME',
'MDXG',
'MNDO',
'MB',
'NERV',
'MRTX',
'MIRN',
'MSON',
'MIND',
'MITK',
'MITL',
'MKSI',
'MMAC',
'MINI',
'MOBL',
'MOCO',
'MDSY',
'MLNK',
'MOKO',
'MOLG',
'MNTA',
'MOMO',
'MCRI',
'MNRK',
'MDLZ',
'MGI',
'MPWR',
'TYPE',
'MNRO',
'MRCC',
'MNST',
'MHGC',
'MORN',
'MOSY',
'MPAA',
'MDM',
'MRVC',
'MSBF',
'MSG',
'MTSC',
'MDIV',
'LABL',
'MFLX',
'MFSF',
'MYL',
'MYOK',
'MYOS',
'MYRG',
'MYGN',
'NBRV',
'NANO',
'NSPH',
'NSTG',
'NK',
'NSSC',
'NDAQ',
'NTRA',
'NATH',
'NAUH',
'NKSH',
'FIZZ',
'NCMI',
'NCOM',
'NGHC',
'NGHCO',
'NGHCP',
'NGHCZ',
'NHLD',
'NATI',
'NATL',
'NPBC',
'NRCIA',
'NRCIB',
'NSEC',
'NWLI',
'NAII',
'NHTC',
'NATR',
'BABY'




















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































];

yahooFinance.snapshot({
  fields: FIELDS,
  symbols: SYMBOLS
}, function (err, result) {
  if (err) { throw err; }
  _.each(result, function (snapshot, symbol) {
    console.log(util.format(',=== %s ===', symbol).cyan);
    console.log(JSON.stringify(snapshot, null, 2));
  });
});
