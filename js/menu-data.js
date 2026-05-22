const menuData = {
  'À La Carte': [
    {
      category: 'BREAKFAST',
      items: [
        {
          name: 'Continental Breakfast', image: 'https://loremflickr.com/150/150/continental,breakfast,food?lock=1',
          price: '₦15,000',
          desc: 'Cold press juice or chilled processed juice, fruit platter/fruit salad, choice of yogurt, choice of cereal, bread basket with homemade jam, marmalades or butter, coffee, herb tea or hot chocolate.'
        },
        {
          name: 'Luxury English Breakfast', image: 'https://loremflickr.com/150/150/luxury,english,breakfast,food?lock=2',
          price: '₦45,000',
          desc: 'Includes continental breakfast with your choice of eggs (poached, scrambled, fried, boiled) or omelette. Served with choice of potatoes (hash brown, grilled or boiled), bacon, breakfast sausage, grilled ham, mushroom, grilled tomato, baked beans.'
        },
        {
          name: 'Nigerian Gateway Breakfast', image: 'https://loremflickr.com/150/150/nigerian,gateway,breakfast,food?lock=3',
          price: '₦18,000',
          desc: 'Choice of juice. Custard, Quaker Oat or Pap. Nigerian delights with breakfast meat stew or Nigerian vegetable scrambled eggs (boiled/fried potatoes, plantain or yam) — or — Moi moi, Akara or Ewa riro (beans pottage). Coffee, herbal tea or hot chocolate.'
        }
      ]
    },
    {
      category: 'EXTRAS',
      items: [
        { name: 'Bread Basket', image: 'https://loremflickr.com/150/150/bread,basket,food?lock=4', price: '₦7,000', desc: '' },
        { name: 'Portion of Bacon', image: 'https://loremflickr.com/150/150/portion,of,bacon,food?lock=5', price: '₦6,000', desc: '' },
        { name: 'Portion of Egg', image: 'https://loremflickr.com/150/150/portion,of,egg,food?lock=6', price: '₦3,000', desc: '' },
        { name: 'Portion of Sausage', image: 'https://loremflickr.com/150/150/portion,of,sausage,food?lock=7', price: '₦4,000', desc: '' },
        { name: 'Portion of Cereals', image: 'https://loremflickr.com/150/150/portion,of,cereals,food?lock=8', price: '₦4,000', desc: '' }
      ]
    },
    {
      category: 'STARTERS — ENTRÉE',
      items: [
        {
          name: 'Owu Roll', image: 'https://loremflickr.com/150/150/owu,roll,food?lock=9',
          price: '₦8,000',
          desc: 'Well cooked diced spicy plantain flavoured with fish, chicken or turkey gizzard, stuffed in egg crepe.'
        },
        {
          name: 'Ibile Ravioli', image: 'https://loremflickr.com/150/150/ibile,ravioli,food?lock=10',
          price: '₦9,000',
          desc: 'Home oat & wheat pasta stuffed with well cooked egusi and spinach or efo (green leaves), served with light spicy ugwu sauce.'
        },
        {
          name: 'Plantain Gnocchi', image: 'https://loremflickr.com/150/150/plantain,gnocchi,food?lock=11',
          price: '₦9,000',
          desc: 'Unripe plantain dumplings in pepper cream with special herbs.'
        }
      ]
    },
    {
      category: 'SOUPS',
      items: [
        {
          name: "The Queen', image: 'https://loremflickr.com/150/150/the,queen,food?lock=12's Bowl",
          price: '₦12,000',
          desc: 'Braised chunky cut prawn, chicken and fish in an aromatic Nigerian pepper stock with vegetables and herb.'
        },
        {
          name: 'Curry Soup', image: 'https://loremflickr.com/150/150/curry,soup,food?lock=13',
          price: '₦10,000',
          desc: 'Spinach, coconut milk, mushroom, chicken cooked in light vegetable curry broth.'
        }
      ]
    },
    {
      category: 'SALADS',
      items: [
        {
          name: 'Beetroot Carpaccio (D)', image: 'https://loremflickr.com/150/150/beetroot,carpaccio,food?lock=14',
          price: '₦10,000',
          desc: 'Thin sliced roasted beetroot with crumbled goat cheese, arugula, balsamic glaze.'
        },
        {
          name: 'Olowu Elixir (GF)(SH)', image: 'https://loremflickr.com/150/150/olowu,elixir,food?lock=15',
          price: '₦14,000',
          desc: 'Grilled avocado charred halves and spicy prawn, quinoa, moringa oil or olive oil drizzle.'
        },
        {
          name: 'Shrimps & Mango Salad (SH)', image: 'https://loremflickr.com/150/150/shrimps,&,mango,salad,food?lock=16',
          price: '₦12,000',
          desc: 'Char-grilled prawns, fresh mango salsa, lime zest.'
        }
      ]
    },
    {
      category: 'MAIN COURSE',
      items: [
        {
          name: 'Gbagura Supreme (GF)(N)', image: 'https://loremflickr.com/150/150/gbagura,supreme,food?lock=17',
          price: '₦26,000',
          desc: 'Lean suya-spiced beef, chicken, fish fillet served with sweet potato and steamed vegetables, yogurt-kuli-kuli herb cream.'
        },
        {
          name: 'Noble Ugu Puree', image: 'https://loremflickr.com/150/150/noble,ugu,puree,food?lock=18',
          price: '₦26,000',
          desc: 'Grilled Atlantic fish/chicken with ugwu purée (pumpkin leaf velouté), roasted plantain cubes.'
        },
        {
          name: 'Steak', image: 'https://loremflickr.com/150/150/steak,food?lock=19',
          price: '₦45,000',
          desc: 'Grilled or pan fried. Cuts: Rib-eye, T-bone, Fillet Mignon, Lambchop. Served with choice of potato (mashed, grilled, roasted, sautéed) or rice or fries and vegetables, in either mushroom sauce or red wine gravy. Conditions: Blue-Rare, Rare, Medium-Rare, Medium, Medium Well, Well Done.'
        },
        {
          name: 'Royal Prawns', image: 'https://loremflickr.com/150/150/royal,prawns,food?lock=20',
          price: '₦45,000',
          desc: 'Grilled jumbo prawns or lobster in ginger-garlic, chili pepper & tomato sauce, garnished with grilled tomato and lemon. Served with choice of potato, rice and vegetables, spicy lemon butter sauce.'
        },
        {
          name: 'Fish Scallops', image: 'https://loremflickr.com/150/150/fish,scallops,food?lock=21',
          price: '₦30,000',
          desc: 'Perfect seared scallops in creamy garlic-herb sauce, served with choice of potato (mashed, grilled, roasted, sautéed), rice or fries and vegetables.'
        },
        {
          name: 'House Special', image: 'https://loremflickr.com/150/150/house,special,food?lock=22',
          price: '₦28,000',
          desc: 'Well herb-spiced sauced minced beef & chicken or minced chicken & fish/shrimps (Italian Ragù style) with vegetables, served on any choice of pasta, vermicelli, brown rice or basmati.'
        },
        {
          name: 'Double Burger', image: 'https://loremflickr.com/150/150/double,burger,food?lock=23',
          price: '₦20,000',
          desc: 'Grilled double or mixed double patty (beef, chicken, fish, potato, vegetarian) stuffed in a toasted bun, served with fries. Optional: caramelized onions, bacon, cheese, sunny side up egg.'
        },
        {
          name: "Treal's Sandwich", image: 'https://loremflickr.com/150/150/treal,food?lock=24',
          price: '₦13,000',
          desc: 'Triple decker toasted oat bread filled with diced chicken & beef or fish or combination of 2, in thousand island with vegetables, served with fries. (open-layer or close)'
        },
        {
          name: 'Smokey Jollof', image: 'https://loremflickr.com/150/150/smokey,jollof,food?lock=25',
          price: '',
          desc: 'Long grain, basmati, brown rice or vermicelli rice stick cooked in rich Nigerian tomato-pepper reduction with vegetables and herb.',
          variants: [
            { name: 'Roasted/Suya/Grilled Turkey or Turkey Medallion', image: 'https://loremflickr.com/150/150/roasted/suya/grilled,turkey,or,turkey,medallion,food?lock=26', price: '₦25,000' },
            { name: 'Roasted/Suya/Grilled Chicken Breast/Thigh', image: 'https://loremflickr.com/150/150/roasted/suya/grilled,chicken,breast/thigh,food?lock=27', price: '₦22,000' },
            { name: 'Grilled/Suya/Flambé Fish Fillet/Cut Fish', image: 'https://loremflickr.com/150/150/grilled/suya/flambé,fish,fillet/cut,fish,food?lock=28', price: '₦25,000' },
            { name: 'Grilled/Suya/Flambé Prawns/Lobster', image: 'https://loremflickr.com/150/150/grilled/suya/flambé,prawns/lobster,food?lock=29', price: '₦40,000' }
          ]
        },
        {
          name: 'Party Fried Rice (S)', image: 'https://loremflickr.com/150/150/party,fried,rice,food?lock=30',
          price: '',
          desc: 'Fried long grain, basmati, brown rice or vermicelli rice stick in special oil with herbs, diced chicken, diced fish, shrimps, sesame seed, soy.',
          variants: [
            { name: 'Roasted/Suya/Grilled Turkey or Turkey Medallion', image: 'https://loremflickr.com/150/150/roasted/suya/grilled,turkey,or,turkey,medallion,food?lock=31', price: '₦27,000' },
            { name: 'Roasted/Suya/Grilled Chicken Breast/Thigh', image: 'https://loremflickr.com/150/150/roasted/suya/grilled,chicken,breast/thigh,food?lock=32', price: '₦25,000' },
            { name: 'Grilled/Suya/Flambé Fish Fillet/Cut Fish', image: 'https://loremflickr.com/150/150/grilled/suya/flambé,fish,fillet/cut,fish,food?lock=33', price: '₦27,000' },
            { name: 'Grilled/Suya/Flambé Prawns/Lobster', image: 'https://loremflickr.com/150/150/grilled/suya/flambé,prawns/lobster,food?lock=34', price: '₦40,000' }
          ]
        },
        {
          name: 'Àsáro Àlàdẹ́ (SH)', image: 'https://loremflickr.com/150/150/àsáro,àlàdẹ́,food?lock=35',
          price: '',
          desc: 'Mixed unripe plantain, Irish potato, sweet potato cooked in palm oil reduction with assorted herbs, shrimps, dried fish, beef offals, crayfish.',
          variants: [
            { name: 'Roasted/Grilled Turkey', image: 'https://loremflickr.com/150/150/roasted/grilled,turkey,food?lock=36', price: '₦27,000' },
            { name: 'Roasted/Grilled Chicken Breast/Thigh', image: 'https://loremflickr.com/150/150/roasted/grilled,chicken,breast/thigh,food?lock=37', price: '₦25,000' },
            { name: 'Grilled/Flambé Fish Fillet/Cut Fish', image: 'https://loremflickr.com/150/150/grilled/flambé,fish,fillet/cut,fish,food?lock=38', price: '₦27,000' },
            { name: 'Grilled/Flambé Prawns/Lobster', image: 'https://loremflickr.com/150/150/grilled/flambé,prawns/lobster,food?lock=39', price: '₦40,000' }
          ]
        },
        {
          name: 'Egba Ofada Pot (SH)', image: 'https://loremflickr.com/150/150/egba,ofada,pot,food?lock=40',
          price: '₦30,000',
          desc: 'Well cooked brown ofada rice topped with ayamase/lafunwa sauce (palm oil, locust beans, lean beef, beef offals, prawns, dried fish, crayfish, chicken, boiled egg), garnished with fried plantain.'
        },
        {
          name: 'Fisherman Soup', image: 'https://loremflickr.com/150/150/fisherman,soup,food?lock=41',
          price: 'Price on request',
          desc: 'A rich seafood cooked in spicy red oil soup.'
        },
        {
          name: 'Efo Àlàkẹ̀ (SH)', image: 'https://loremflickr.com/150/150/efo,àlàkẹ̀,food?lock=42',
          price: '₦35,000',
          desc: 'King-size portion of efo (green leaves) cooked in reduced palm oil pepper sauce with locust beans, prawns, calamari, crab, crayfish, beef offals, roasted fish, grilled chunky chicken.'
        },
        {
          name: 'Grandeur Okro (SH)', image: 'https://loremflickr.com/150/150/grandeur,okro,food?lock=43',
          price: '₦35,000',
          desc: 'King-size portion of seafood okro (prawns, calamari, crab), shelled periwinkles, fresh fish.'
        },
        {
          name: 'Richy Abula', image: 'https://loremflickr.com/150/150/richy,abula,food?lock=44',
          price: '₦28,000',
          desc: 'Well cooked gbegiri and ewedu with rich abula stew, prawn, dried fish.'
        }
      ]
    },
    {
      category: 'NIGERIAN SPECIALITIES — SWALLOWS',
      items: [
        { name: 'Unripe Plantain', image: 'https://loremflickr.com/150/150/unripe,plantain,food?lock=45', price: '', desc: '' },
        { name: 'Oat & Flax Pounded Yam', image: 'https://loremflickr.com/150/150/oat,&,flax,pounded,yam,food?lock=46', price: '', desc: '' },
        { name: 'Multi-grain Semolina', image: 'https://loremflickr.com/150/150/multi-grain,semolina,food?lock=47', price: '', desc: '' },
        { name: 'Cabbage Fufu', image: 'https://loremflickr.com/150/150/cabbage,fufu,food?lock=48', price: '', desc: '' },
        { name: 'Amala', image: 'https://loremflickr.com/150/150/amala,food?lock=49', price: '', desc: '' },
        { name: 'Eba', image: 'https://loremflickr.com/150/150/eba,food?lock=50', price: '', desc: '' }
      ]
    },
    {
      category: 'DESSERT',
      items: [
        { name: 'Avocado Cocoa Mousse (V)', image: 'https://loremflickr.com/150/150/avocado,cocoa,mousse,food?lock=51', price: '₦9,000', desc: '' },
        { name: 'Tropical Fruit Platter with honey-lime drizzle', image: 'https://loremflickr.com/150/150/tropical,fruit,platter,with,honey-lime,drizzle,food?lock=52', price: '₦6,000', desc: '' },
        { name: 'Coconut-Tigernut Panna Cotta', image: 'https://loremflickr.com/150/150/coconut-tigernut,panna,cotta,food?lock=53', price: '₦10,000', desc: 'With berry compote.' },
        { name: 'Date-sweetened Coconut Cheesecake', image: 'https://loremflickr.com/150/150/date-sweetened,coconut,cheesecake,food?lock=54', price: '₦10,000', desc: '' },
        { name: 'Baked Cinnamon Apples', image: 'https://loremflickr.com/150/150/baked,cinnamon,apples,food?lock=55', price: '₦8,000', desc: 'Warm spiced apples with honey drizzle.' },
        { name: 'Berry & Coconut Parfait', image: 'https://loremflickr.com/150/150/berry,&,coconut,parfait,food?lock=56', price: '₦7,000', desc: 'Layered coconut, fresh berries, yogurt, almond milk.' },
        { name: 'English Trifle', image: 'https://loremflickr.com/150/150/english,trifle,food?lock=57', price: '₦7,500', desc: 'Three-layer dessert: sponge cake, fruit and jelly, topped with creamy vanilla custard, garnished with cherry and mint leaf.' }
      ]
    }
  ],

  'Beverages': [
    {
      category: 'APERITIFS',
      isTable: true,
      items: [
        { name: 'Martini Bianco/Rosso', image: 'https://loremflickr.com/150/150/martini,bianco/rosso,food?lock=58', bottle: '₦27,500', tot: '₦2,800' },
        { name: 'Campari', image: 'https://loremflickr.com/150/150/campari,food?lock=59', bottle: '₦40,500', tot: '₦4,500' }
      ]
    },
    {
      category: 'LIQUEURS',
      isTable: true,
      items: [
        { name: 'Cointreau', image: 'https://loremflickr.com/150/150/cointreau,food?lock=60', bottle: '₦56,000', tot: '₦5,600' },
        { name: 'Malibu', image: 'https://loremflickr.com/150/150/malibu,food?lock=61', bottle: '₦27,500', tot: '₦2,800' },
        { name: 'Tia Maria', image: 'https://loremflickr.com/150/150/tia,maria,food?lock=62', bottle: '₦63,000', tot: '₦6,300' },
        { name: 'American Honey', image: 'https://loremflickr.com/150/150/american,honey,food?lock=63', bottle: '₦50,400', tot: '₦5,500' },
        { name: 'Kahlúa', image: 'https://loremflickr.com/150/150/kahlúa,food?lock=64', bottle: '₦24,500', tot: '₦2,500' },
        { name: 'Amarula', image: 'https://loremflickr.com/150/150/amarula,food?lock=65', bottle: '₦28,700', tot: '₦2,900' },
        { name: 'Baileys Irish Cream', image: 'https://loremflickr.com/150/150/baileys,irish,cream,food?lock=66', bottle: '₦35,500', tot: '₦3,600' }
      ]
    },
    {
      category: 'WHISKY — STANDARD',
      isTable: true,
      items: [
        { name: 'Johnnie Walker Red Label', image: 'https://loremflickr.com/150/150/johnnie,walker,red,label,food?lock=67', bottle: '₦34,000', tot: '₦3,500' },
        { name: 'White Horse', image: 'https://loremflickr.com/150/150/white,horse,food?lock=68', bottle: '₦20,000', tot: '₦2,000' }
      ]
    },
    {
      category: 'WHISKY — PREMIUM',
      isTable: true,
      items: [
        { name: 'Johnnie Walker Blue Label', image: 'https://loremflickr.com/150/150/johnnie,walker,blue,label,food?lock=69', bottle: '₦400,000', tot: '—' },
        { name: 'Johnnie Walker Black Label', image: 'https://loremflickr.com/150/150/johnnie,walker,black,label,food?lock=70', bottle: '₦72,000', tot: '—' },
        { name: 'Johnnie Walker Double Label', image: 'https://loremflickr.com/150/150/johnnie,walker,double,label,food?lock=71', bottle: '₦118,000', tot: '—' },
        { name: 'Chivas Regal 12yrs', image: 'https://loremflickr.com/150/150/chivas,regal,12yrs,food?lock=72', bottle: '₦72,000', tot: '—' },
        { name: 'Glenlivet', image: 'https://loremflickr.com/150/150/glenlivet,food?lock=73', bottle: '₦120,800', tot: '—' },
        { name: 'Glenfiddich 18yrs', image: 'https://loremflickr.com/150/150/glenfiddich,18yrs,food?lock=74', bottle: '₦218,000', tot: '—' }
      ]
    },
    {
      category: 'WHISKY — MALT, RYE & BOURBONS',
      isTable: true,
      items: [
        { name: "Jack Daniel', image: 'https://loremflickr.com/150/150/jack,daniel,food?lock=75's", bottle: '₦43,500', tot: '—' },
        { name: 'Jameson', image: 'https://loremflickr.com/150/150/jameson,food?lock=76', bottle: '₦37,000', tot: '—' },
        { name: 'Jameson Black Barrel', image: 'https://loremflickr.com/150/150/jameson,black,barrel,food?lock=77', bottle: '₦61,500', tot: '—' }
      ]
    },
    {
      category: 'COGNAC — STANDARD',
      isTable: true,
      items: [
        { name: 'Rémy Martin VSOP', image: 'https://loremflickr.com/150/150/rémy,martin,vsop,food?lock=78', bottle: '₦177,000', tot: '—' },
        { name: 'Hennessy VSOP', image: 'https://loremflickr.com/150/150/hennessy,vsop,food?lock=79', bottle: '₦151,500', tot: '—' },
        { name: 'Hennessy VS', image: 'https://loremflickr.com/150/150/hennessy,vs,food?lock=80', bottle: '₦80,000', tot: '—' },
        { name: 'Martell Blue Swift', image: 'https://loremflickr.com/150/150/martell,blue,swift,food?lock=81', bottle: '₦135,000', tot: '—' },
        { name: 'Martell VS', image: 'https://loremflickr.com/150/150/martell,vs,food?lock=82', bottle: '₦72,000', tot: '—' }
      ]
    },
    {
      category: 'COGNAC — PREMIUM',
      isTable: true,
      items: [
        { name: 'Rémy Martin XO', image: 'https://loremflickr.com/150/150/rémy,martin,xo,food?lock=83', bottle: '₦668,000', tot: '—' },
        { name: 'Hennessy XO', image: 'https://loremflickr.com/150/150/hennessy,xo,food?lock=84', bottle: '₦540,000', tot: '—' }
      ]
    },
    {
      category: 'BRANDY',
      isTable: true,
      items: [
        { name: 'St. Rémy', image: 'https://loremflickr.com/150/150/st.,rémy,food?lock=85', bottle: '₦46,000', tot: '₦4,600' }
      ]
    },
    {
      category: 'VODKA',
      isTable: true,
      items: [
        { name: 'Smirnoff Red/Blue', image: 'https://loremflickr.com/150/150/smirnoff,red/blue,food?lock=86', bottle: '₦40,500', tot: '₦4,500' },
        { name: 'Grey Goose', image: 'https://loremflickr.com/150/150/grey,goose,food?lock=87', bottle: '₦40,500', tot: '₦4,500' },
        { name: 'Belvedere', image: 'https://loremflickr.com/150/150/belvedere,food?lock=88', bottle: '₦45,000', tot: '₦4,800' },
        { name: 'Cîroc Regular', image: 'https://loremflickr.com/150/150/cîroc,regular,food?lock=89', bottle: '₦80,000', tot: '₦8,000' },
        { name: 'Absolut Vodka', image: 'https://loremflickr.com/150/150/absolut,vodka,food?lock=90', bottle: '₦40,500', tot: '₦4,500' }
      ]
    },
    {
      category: 'TEQUILA',
      isTable: true,
      items: [
        { name: 'Olmeca', image: 'https://loremflickr.com/150/150/olmeca,food?lock=91', bottle: '₦45,000', tot: '₦4,800' },
        { name: 'Sierra', image: 'https://loremflickr.com/150/150/sierra,food?lock=92', bottle: '₦28,000', tot: '₦2,900' }
      ]
    },
    {
      category: 'RUM',
      isTable: true,
      items: [
        { name: 'Bacardi', image: 'https://loremflickr.com/150/150/bacardi,food?lock=93', bottle: '₦27,500', tot: '₦2,800' },
        { name: 'Captain Morgan', image: 'https://loremflickr.com/150/150/captain,morgan,food?lock=94', bottle: '₦18,000', tot: '₦2,000' }
      ]
    },
    {
      category: 'GIN — PREMIUM',
      isTable: true,
      items: [
        { name: 'Bombay Sapphire', image: 'https://loremflickr.com/150/150/bombay,sapphire,food?lock=95', bottle: '₦35,000', tot: '—' },
        { name: 'Monkey 47', image: 'https://loremflickr.com/150/150/monkey,47,food?lock=96', bottle: '₦112,000', tot: '—' }
      ]
    },
    {
      category: 'GIN — STANDARD',
      isTable: true,
      items: [
        { name: "Gordon', image: 'https://loremflickr.com/150/150/gordon,food?lock=97's London Dry", bottle: '₦12,500', tot: '₦2,000' },
        { name: 'Beefeater London Dry', image: 'https://loremflickr.com/150/150/beefeater,london,dry,food?lock=98', bottle: '₦32,500', tot: '₦3,500' }
      ]
    },
    {
      category: 'CHAMPAGNE',
      isTable: true,
      items: [
        { name: 'Moët & Chandon Brut/Nectar/Rosé/Ice', image: 'https://loremflickr.com/150/150/moët,&,chandon,brut/nectar/rosé/ice,food?lock=99', bottle: '₦245,000', tot: '—' },
        { name: 'Veuve Clicquot Brut/Rosé', image: 'https://loremflickr.com/150/150/veuve,clicquot,brut/rosé,food?lock=100', bottle: '₦212,000', tot: '—' },
        { name: 'Dom Pérignon', image: 'https://loremflickr.com/150/150/dom,pérignon,food?lock=101', bottle: '₦720,000', tot: '—' },
        { name: 'Ace of Spades', image: 'https://loremflickr.com/150/150/ace,of,spades,food?lock=102', bottle: '₦900,000', tot: '—' }
      ]
    },
    {
      category: 'SPARKLING WINES',
      isTable: true,
      items: [
        { name: 'André Rosé/Brut', image: 'https://loremflickr.com/150/150/andré,rosé/brut,food?lock=103', bottle: '₦20,000', tot: '—' },
        { name: 'Veuve du Vernay White/Rosé', image: 'https://loremflickr.com/150/150/veuve,du,vernay,white/rosé,food?lock=104', bottle: '₦20,000', tot: '—' },
        { name: 'Four Cousins Rosé', image: 'https://loremflickr.com/150/150/four,cousins,rosé,food?lock=105', bottle: '₦15,000', tot: '—' },
        { name: 'Martini', image: 'https://loremflickr.com/150/150/martini,food?lock=106', bottle: '₦31,000', tot: '—' }
      ]
    },
    {
      category: 'WINES — BY BOTTLE',
      isTable: true,
      tableHeaders: ['Wine', 'Bottle', ''],
      items: [
        { name: 'Carlo Rossi California — Chenin Blanc/French Colombard (USA White)', image: 'https://loremflickr.com/150/150/carlo,rossi,california,—,chenin,blanc/french,colombard,food?lock=107', bottle: '₦35,000', tot: '—' },
        { name: 'Carlo Rossi California — Carignan/Barbera/Ruby Cabernet (USA Red)', image: 'https://loremflickr.com/150/150/carlo,rossi,california,—,carignan/barbera/ruby,cabernet,food?lock=108', bottle: '₦35,000', tot: '—' },
        { name: 'Torres Marimar Estate Chardonnay (USA White)', image: 'https://loremflickr.com/150/150/torres,marimar,estate,chardonnay,food?lock=109', bottle: '₦30,000', tot: '—' },
        { name: 'Torres Marimar Estate Pinot Noir (USA Red)', image: 'https://loremflickr.com/150/150/torres,marimar,estate,pinot,noir,food?lock=110', bottle: '₦29,000', tot: '—' },
        { name: "Montepulciano D'Abruzzo — Montepulciano/Sangiovese (Italy Red)", image: 'https://loremflickr.com/150/150/montepulciano,d,abruzzo,food?lock=111', bottle: '₦48,000', tot: '—' },
        { name: 'Cloudy Bay Sauvignon Blanc (New Zealand White)', image: 'https://loremflickr.com/150/150/cloudy,bay,sauvignon,blanc,food?lock=112', bottle: '₦138,000', tot: '—' },
        { name: 'Mouton Cadet Graves — Sémillon/Sauvignon Blanc (France White)', image: 'https://loremflickr.com/150/150/mouton,cadet,graves,—,sémillon/sauvignon,blanc,food?lock=113', bottle: '₦38,000', tot: '—' },
        { name: 'Mouton Cadet Bordeaux — Merlot/Cabernet Sauvignon (France Red)', image: 'https://loremflickr.com/150/150/mouton,cadet,bordeaux,—,merlot/cabernet,sauvignon,food?lock=114', bottle: '₦38,000', tot: '—' },
        { name: 'Châteauneuf-du-Pape — Grenache/Syrah/Mourvèdre/Cinsault (France Red)', image: 'https://loremflickr.com/150/150/châteauneuf-du-pape,—,grenache/syrah/mourvèdre/cinsault,food?lock=115', bottle: '₦80,000', tot: '—' },
        { name: 'Escudo Rojo Chardonnay (Chile White)', image: 'https://loremflickr.com/150/150/escudo,rojo,chardonnay,food?lock=116', bottle: '₦40,000', tot: '—' },
        { name: 'Mapu Reserva Cabernet Sauvignon (Chile Red)', image: 'https://loremflickr.com/150/150/mapu,reserva,cabernet,sauvignon,food?lock=117', bottle: '₦30,000', tot: '—' },
        { name: 'Baron Philippe Escudo Rojo — Cab Sauv/Carmenère/Syrah (Chile Red)', image: 'https://loremflickr.com/150/150/baron,philippe,escudo,rojo,—,cab,sauv/carmenère/syrah,food?lock=118', bottle: '₦40,000', tot: '—' },
        { name: 'Arra Blanc de Noir (South Africa White)', image: 'https://loremflickr.com/150/150/arra,blanc,de,noir,food?lock=119', bottle: '₦30,000', tot: '—' },
        { name: 'Arra Shiraz Cabernet Sauvignon (South Africa Red)', image: 'https://loremflickr.com/150/150/arra,shiraz,cabernet,sauvignon,food?lock=120', bottle: '₦30,000', tot: '—' },
        { name: 'Torres San Valentín Parellada (Spain White)', image: 'https://loremflickr.com/150/150/torres,san,valentín,parellada,food?lock=121', bottle: '₦30,000', tot: '—' },
        { name: 'Torres Atrium Merlot (Spain Red)', image: 'https://loremflickr.com/150/150/torres,atrium,merlot,food?lock=122', bottle: '₦30,000', tot: '—' },
        { name: 'Torres Gran Coronas Cabernet Sauvignon (Spain Red)', image: 'https://loremflickr.com/150/150/torres,gran,coronas,cabernet,sauvignon,food?lock=123', bottle: '₦30,000', tot: '—' }
      ]
    },
    {
      category: 'WINES — BY GLASS',
      isTable: true,
      items: [
        { name: 'Mapu Sauvignon Blanc-Chardonnay (Chile White)', image: 'https://loremflickr.com/150/150/mapu,sauvignon,blanc-chardonnay,food?lock=124', bottle: '—', tot: '₦6,000' },
        { name: 'Mapu Cabernet Sauvignon-Carmenère (Chile Red)', image: 'https://loremflickr.com/150/150/mapu,cabernet,sauvignon-carmenère,food?lock=125', bottle: '—', tot: '₦6,000' }
      ]
    },
    {
      category: 'BEER',
      isTable: true,
      items: [
        { name: 'Budweiser', image: 'https://loremflickr.com/150/150/budweiser,food?lock=126', bottle: '₦4,000', tot: '—' },
        { name: 'Heineken', image: 'https://loremflickr.com/150/150/heineken,food?lock=127', bottle: '₦4,000', tot: '—' },
        { name: 'Gulder', image: 'https://loremflickr.com/150/150/gulder,food?lock=128', bottle: '₦2,500', tot: '—' },
        { name: 'Star', image: 'https://loremflickr.com/150/150/star,food?lock=129', bottle: '₦2,500', tot: '—' },
        { name: 'Trophy', image: 'https://loremflickr.com/150/150/trophy,food?lock=130', bottle: '₦2,500', tot: '—' },
        { name: 'Goldberg', image: 'https://loremflickr.com/150/150/goldberg,food?lock=131', bottle: '₦2,500', tot: '—' },
        { name: 'Snapp', image: 'https://loremflickr.com/150/150/snapp,food?lock=132', bottle: '₦2,500', tot: '—' },
        { name: 'Legend', image: 'https://loremflickr.com/150/150/legend,food?lock=133', bottle: '₦2,500', tot: '—' },
        { name: 'Smirnoff Ice', image: 'https://loremflickr.com/150/150/smirnoff,ice,food?lock=134', bottle: '₦4,000', tot: '—' },
        { name: 'Guinness Stout', image: 'https://loremflickr.com/150/150/guinness,stout,food?lock=135', bottle: '₦2,500', tot: '—' },
        { name: '33 Beer', image: 'https://loremflickr.com/150/150/33,beer,food?lock=136', bottle: '₦2,500', tot: '—' }
      ]
    },
    {
      category: 'MALT & DIVERSE DRINKS',
      isTable: true,
      items: [
        { name: 'All Varieties of Malt', image: 'https://loremflickr.com/150/150/all,varieties,of,malt,food?lock=137', bottle: '₦2,000', tot: '—' },
        { name: 'Red Bull', image: 'https://loremflickr.com/150/150/red,bull,food?lock=138', bottle: '₦6,000', tot: '—' },
        { name: 'Power Horse/Monster', image: 'https://loremflickr.com/150/150/power,horse/monster,food?lock=139', bottle: '₦5,000', tot: '—' }
      ]
    },
    {
      category: 'SOFT DRINKS',
      isTable: true,
      items: [
        { name: 'Coke', image: 'https://loremflickr.com/150/150/coke,food?lock=140', bottle: '₦1,500', tot: '—' },
        { name: 'Fanta', image: 'https://loremflickr.com/150/150/fanta,food?lock=141', bottle: '₦1,500', tot: '—' },
        { name: 'Sprite/Schweppes', image: 'https://loremflickr.com/150/150/sprite/schweppes,food?lock=142', bottle: '₦1,500', tot: '—' },
        { name: 'Tonic Water/Soda Water', image: 'https://loremflickr.com/150/150/tonic,water/soda,water,food?lock=143', bottle: '₦2,500', tot: '—' }
      ]
    },
    {
      category: 'STILL WATER',
      isTable: true,
      items: [
        { name: '1 Litre', image: 'https://loremflickr.com/150/150/1,litre,food?lock=144', bottle: '₦2,000', tot: '—' },
        { name: '75 cl', image: 'https://loremflickr.com/150/150/75,cl,food?lock=145', bottle: '₦1,500', tot: '—' },
        { name: '60 cl', image: 'https://loremflickr.com/150/150/60,cl,food?lock=146', bottle: '₦1,000', tot: '—' }
      ]
    },
    {
      category: 'SPARKLING WATER',
      isTable: true,
      items: [
        { name: '50 cl', image: 'https://loremflickr.com/150/150/50,cl,food?lock=147', bottle: '₦5,000', tot: '—' },
        { name: '38 cl', image: 'https://loremflickr.com/150/150/38,cl,food?lock=148', bottle: '₦3,500', tot: '—' }
      ]
    },
    {
      category: 'PROCESSED JUICES',
      isTable: true,
      items: [
        { name: 'Chivita/5 Alive', image: 'https://loremflickr.com/150/150/chivita/5,alive,food?lock=149', bottle: '₦6,000', tot: '—' },
        { name: 'Cranberry', image: 'https://loremflickr.com/150/150/cranberry,food?lock=150', bottle: '₦10,000', tot: '—' },
        { name: 'Hollandia Yoghurt', image: 'https://loremflickr.com/150/150/hollandia,yoghurt,food?lock=151', bottle: '₦7,000', tot: '—' }
      ]
    },
    {
      category: 'COFFEE',
      isTable: true,
      items: [
        { name: 'Espresso (Single/Double)', image: 'https://loremflickr.com/150/150/espresso,food?lock=152', bottle: '₦4,000', tot: '₦6,000' },
        { name: 'Cappuccino/Latte/Macchiato', image: 'https://loremflickr.com/150/150/cappuccino/latte/macchiato,food?lock=153', bottle: '₦5,000', tot: '—' },
        { name: 'Americano', image: 'https://loremflickr.com/150/150/americano,food?lock=154', bottle: '₦4,000', tot: '—' }
      ]
    }
  ],

  'In-Room Dining': [
    {
      category: 'SOUP',
      items: [
        {
          name: 'Soup of the Day', image: 'https://loremflickr.com/150/150/soup,of,the,day,food?lock=155',
          price: 'Price per order',
          desc: 'Continental soup and Nigerian pepper soup of the day. Kindly ask your order taker for today\'s selection.'
        }
      ]
    },
    {
      category: 'SALADS',
      items: [
        {
          name: 'Arugula Salad', image: 'https://loremflickr.com/150/150/arugula,salad,food?lock=156',
          price: '₦12,000',
          desc: 'Arugula, parmesan, feta/goat cheese, pine nuts, walnuts, sliced apple, cherry tomatoes, cucumber, avocado, shaved carrot.'
        },
        {
          name: 'Garden Salad', image: 'https://loremflickr.com/150/150/garden,salad,food?lock=157',
          price: '₦10,000',
          desc: 'Lettuce, spinach, tomatoes, carrots, cucumbers, onions, croutons.'
        },
        {
          name: 'Vegetable Creamy Salad', image: 'https://loremflickr.com/150/150/vegetable,creamy,salad,food?lock=158',
          price: '₦9,000',
          desc: 'Mixed seasonal vegetables, lettuce, spinach, herbs, cream.'
        }
      ]
    },
    {
      category: 'MAIN MEAL',
      items: [
        {
          name: 'Steak', image: 'https://loremflickr.com/150/150/steak,food?lock=159',
          price: '₦45,000',
          desc: 'Grilled or pan fried. Cuts: Rib-eye, T-bone, Fillet Mignon, Lambchop. Choice of potato (mashed, grilled, roasted, sautéed), rice or fries and vegetables, mushroom sauce or red wine gravy. All conditions available.'
        },
        {
          name: 'Royal Prawns', image: 'https://loremflickr.com/150/150/royal,prawns,food?lock=160',
          price: '₦45,000',
          desc: 'Grilled jumbo prawns or lobster in ginger-garlic, chili pepper & tomato sauce, garnished with grilled tomato and lemon. Served with choice of potato, rice and vegetables, spicy lemon butter sauce.'
        },
        {
          name: 'Fish Scallops', image: 'https://loremflickr.com/150/150/fish,scallops,food?lock=161',
          price: '₦30,000',
          desc: 'Perfect seared scallops in creamy garlic-herb sauce, served with choice of potato, rice or fries and vegetables.'
        },
        {
          name: 'Double Burger', image: 'https://loremflickr.com/150/150/double,burger,food?lock=162',
          price: '₦20,000',
          desc: 'Grilled double or mixed double patty (beef, chicken, fish, potato, vegetarian) in toasted bun with fries. Optional: caramelized onions, bacon, cheese, sunny side up egg.'
        },
        {
          name: "Treal's Sandwich", image: 'https://loremflickr.com/150/150/treal,food?lock=163',
          price: '₦13,000',
          desc: 'Triple decker toasted oat bread, diced chicken & beef or fish or 2-choice combo, thousand island, vegetables, fries. (open-layer or close)'
        },
        {
          name: 'Smokey Jollof', image: 'https://loremflickr.com/150/150/smokey,jollof,food?lock=164',
          price: '',
          desc: 'Long grain, basmati, brown rice or vermicelli rice stick in rich Nigerian tomato-pepper reduction, vegetables and herb.',
          variants: [
            { name: 'Turkey/Turkey Medallion', image: 'https://loremflickr.com/150/150/turkey/turkey,medallion,food?lock=165', price: '₦25,000' },
            { name: 'Chicken Breast/Thigh', image: 'https://loremflickr.com/150/150/chicken,breast/thigh,food?lock=166', price: '₦22,000' },
            { name: 'Fish Fillet/Cut Fish', image: 'https://loremflickr.com/150/150/fish,fillet/cut,fish,food?lock=167', price: '₦25,000' },
            { name: 'Prawns/Lobster', image: 'https://loremflickr.com/150/150/prawns/lobster,food?lock=168', price: '₦40,000' }
          ]
        },
        {
          name: 'Party Fried Rice (S)', image: 'https://loremflickr.com/150/150/party,fried,rice,food?lock=169',
          price: '',
          desc: 'Fried rice in special oil with herbs, diced chicken, diced fish, shrimps, sesame seed, soy.',
          variants: [
            { name: 'Turkey/Turkey Medallion', image: 'https://loremflickr.com/150/150/turkey/turkey,medallion,food?lock=170', price: '₦27,000' },
            { name: 'Chicken Breast/Thigh', image: 'https://loremflickr.com/150/150/chicken,breast/thigh,food?lock=171', price: '₦25,000' },
            { name: 'Fish Fillet/Cut Fish', image: 'https://loremflickr.com/150/150/fish,fillet/cut,fish,food?lock=172', price: '₦27,000' },
            { name: 'Prawns/Lobster', image: 'https://loremflickr.com/150/150/prawns/lobster,food?lock=173', price: '₦40,000' }
          ]
        },
        {
          name: 'House Special', image: 'https://loremflickr.com/150/150/house,special,food?lock=174',
          price: '₦28,000',
          desc: 'Well herb-spiced minced beef & chicken or chicken & fish/shrimps (Italian Ragù style), choice of pasta, vermicelli, brown rice or basmati.'
        },
        {
          name: 'Nigerian Soup', image: 'https://loremflickr.com/150/150/nigerian,soup,food?lock=175',
          price: '₦30,000',
          desc: 'Available soup of the day served with choice of morsel.'
        }
      ]
    },
    {
      category: 'NIGERIAN SPECIALITIES — SWALLOWS',
      items: [
        { name: 'Unripe Plantain', image: 'https://loremflickr.com/150/150/unripe,plantain,food?lock=176', price: '', desc: '' },
        { name: 'Oat & Flax Pounded Yam', image: 'https://loremflickr.com/150/150/oat,&,flax,pounded,yam,food?lock=177', price: '', desc: '' },
        { name: 'Multi-grain Semolina', image: 'https://loremflickr.com/150/150/multi-grain,semolina,food?lock=178', price: '', desc: '' },
        { name: 'Cabbage Fufu', image: 'https://loremflickr.com/150/150/cabbage,fufu,food?lock=179', price: '', desc: '' },
        { name: 'Amala', image: 'https://loremflickr.com/150/150/amala,food?lock=180', price: '', desc: '' },
        { name: 'Eba', image: 'https://loremflickr.com/150/150/eba,food?lock=181', price: '', desc: '' }
      ]
    },
    {
      category: 'DESSERT',
      items: [
        { name: 'Avocado Cocoa Mousse (V)', image: 'https://loremflickr.com/150/150/avocado,cocoa,mousse,food?lock=182', price: '₦9,000', desc: '' },
        { name: 'Tropical Fruit Platter with honey-lime drizzle', image: 'https://loremflickr.com/150/150/tropical,fruit,platter,with,honey-lime,drizzle,food?lock=183', price: '₦6,000', desc: '' },
        { name: 'Coconut-Tigernut Panna Cotta', image: 'https://loremflickr.com/150/150/coconut-tigernut,panna,cotta,food?lock=184', price: '₦10,000', desc: 'With berry compote.' },
        { name: 'Cream Caramel', image: 'https://loremflickr.com/150/150/cream,caramel,food?lock=185', price: '₦8,000', desc: '' }
      ]
    }
  ],

  'Pool Menu': [
    {
      category: 'LIGHT BITES & MAINS',
      items: [
        {
          name: 'Nkwobi & Isi Ewu Delicacy', image: 'https://loremflickr.com/150/150/nkwobi,&,isi,ewu,delicacy,food?lock=186',
          price: '₦15,000',
          desc: 'Well spiced mixed tendered goat head & cow leg cooked in a traditional thick, creamy palm oil sauce with herbs.'
        },
        {
          name: 'Double Burger', image: 'https://loremflickr.com/150/150/double,burger,food?lock=187',
          price: '₦20,000',
          desc: 'Grilled double or mixed double patty (beef, chicken, fish, potato, vegetarian) stuffed in a toasted bun with fries. Optional: caramelized onions, bacon, cheese, sunny side up egg.'
        },
        {
          name: "Treal's Sandwich", image: 'https://loremflickr.com/150/150/treal,food?lock=188',
          price: '₦13,000',
          desc: 'Triple decker toasted oat bread, diced chicken & beef or fish or 2-choice combo, thousand island, vegetables, fries. (open-layer or close)'
        },
        {
          name: 'Creamy Shawarma', image: 'https://loremflickr.com/150/150/creamy,shawarma,food?lock=189',
          price: '₦15,000',
          desc: 'Chicken, beef and fried egg mixed with vegetables in spicy creamy dressing, filled in pita bread, served with fries. Optional: cheese, sausage.'
        },
        {
          name: 'Gbagura Supreme', image: 'https://loremflickr.com/150/150/gbagura,supreme,food?lock=190',
          price: '₦26,000',
          desc: 'Lean suya-spiced beef/chicken/fish fillet, sweet potato and steamed vegetables, yogurt-kuli-kuli herb cream.'
        },
        {
          name: 'Chicken Basket', image: 'https://loremflickr.com/150/150/chicken,basket,food?lock=191',
          price: '₦30,000',
          desc: 'Crispy tender cut whole chicken in a basket, served with fries, dripping sauce, pepper sauce and coleslaw.'
        },
        {
          name: 'Surf & Turf', image: 'https://loremflickr.com/150/150/surf,&,turf,food?lock=192',
          price: '₦40,000',
          desc: 'Grilled classic combined steak and jumbo prawn.'
        }
      ]
    },
    {
      category: 'PLATTERS',
      items: [
        {
          name: 'Luxury Platter', image: 'https://loremflickr.com/150/150/luxury,platter,food?lock=193',
          price: '₦120,000',
          desc: 'Chipolatas, battered calamari, jumbo snails, jumbo prawns, pan-fried white fish, banger sausage, medium grilled steak, grilled lamb chop, oven roasted drumstick, roasted plantain, yam chips, shoestring potatoes, carrot fingers, lemon dip, pepper sauce, tartar sauce, green salad bowl.'
        },
        {
          name: 'Fish Platter', image: 'https://loremflickr.com/150/150/fish,platter,food?lock=194',
          price: '₦70,000',
          desc: 'Grilled whole fish (Croaker/Tilapia/Catfish) marinated in special sauce, served with pepper sauce, rice bowl, mixed fries, lemon/lime wedges, sautéed shrimps and battered fish finger.'
        },
        {
          name: 'Super Combo Platter', image: 'https://loremflickr.com/150/150/super,combo,platter,food?lock=195',
          price: '₦60,000',
          desc: 'Peppered kpomo & bokoto, BBQ chicken wings, suya beef, crispy chicken, asun, served with mixed fries and signature sauce.'
        }
      ]
    }
  ],

  'Cocktails & Mocktails': [
    {
      category: 'MOCKTAILS',
      items: [
        { name: 'Mojito Island', image: 'https://loremflickr.com/150/150/mojito,island,food?lock=196', price: '₦9,000', desc: 'Sparkling water, lime, cucumber paste, mint leaves.' },
        { name: 'Chapman', image: 'https://loremflickr.com/150/150/chapman,food?lock=197', price: '₦9,000', desc: 'Fanta, Sprite, Angostura bitters, grenadine, orange juice, garnished with cucumber and orange slice.' },
        { name: "Passion ', image: 'https://loremflickr.com/150/150/passion,food?lock=198'n' Glow", price: '₦9,000', desc: 'Pineapple juice, ginger extract, lemon/lime, honey syrup, soda.' },
        { name: 'Rocky Ice Tea', image: 'https://loremflickr.com/150/150/rocky,ice,tea,food?lock=199', price: '₦9,000', desc: 'Lemongrass, ginger, dash of turmeric (optional), on the rocks.' },
        { name: 'Virgin Margarita', image: 'https://loremflickr.com/150/150/virgin,margarita,food?lock=200', price: '₦10,000', desc: 'Non-alcoholic tequila, lime juice, soda, agave.' },
        { name: 'Cucumber Cooler', image: 'https://loremflickr.com/150/150/cucumber,cooler,food?lock=201', price: '₦9,000', desc: 'Cucumber juice, lime juice, simple syrup, soda.' },
        { name: 'Berry Basil Smash', image: 'https://loremflickr.com/150/150/berry,basil,smash,food?lock=202', price: '₦11,000', desc: 'Muddled berries, lemon juice, honey syrup, soda, basil.' },
        { name: 'Tropical Ginger', image: 'https://loremflickr.com/150/150/tropical,ginger,food?lock=203', price: '₦10,000', desc: 'Pineapple juice, ginger beer, lime juice, honey.' },
        { name: 'Virgin Colada', image: 'https://loremflickr.com/150/150/virgin,colada,food?lock=204', price: '₦10,000', desc: 'Fresh pineapple juice, coconut/whipped cream, sugar, cherry.' }
      ]
    },
    {
      category: 'SMOOTHIES',
      items: [
        { name: 'Creamy Fruity Smoothie', image: 'https://loremflickr.com/150/150/creamy,fruity,smoothie,food?lock=205', price: '₦11,000', desc: 'Available choice of fruit, avocado, yoghurt, coconut water, honey syrup (optional).' },
        { name: 'Green Detox Smoothie', image: 'https://loremflickr.com/150/150/green,detox,smoothie,food?lock=206', price: '₦9,000', desc: 'Spinach, apple and ginger.' },
        { name: 'Matcha Smoothie', image: 'https://loremflickr.com/150/150/matcha,smoothie,food?lock=207', price: '₦9,000', desc: 'Matcha, coconut smoothie.' },
        { name: 'Juicy Juice', image: 'https://loremflickr.com/150/150/juicy,juice,food?lock=208', price: '₦9,000', desc: 'Cold pressed watermelon, pineapple or orange juice.' },
        { name: 'Cold Chocolate', image: 'https://loremflickr.com/150/150/cold,chocolate,food?lock=209', price: '₦9,000', desc: '' }
      ]
    },
    {
      category: 'MILKSHAKES',
      items: [
        { name: 'Peanut Milkshake', image: 'https://loremflickr.com/150/150/peanut,milkshake,food?lock=210', price: '₦10,000', desc: 'Peanut, banana, cream/milk, brown sugar.' },
        { name: 'Banana Milkshake', image: 'https://loremflickr.com/150/150/banana,milkshake,food?lock=211', price: '₦10,000', desc: 'Banana, vanilla ice cream, milk, sugar.' },
        { name: 'Pineapple Milkshake', image: 'https://loremflickr.com/150/150/pineapple,milkshake,food?lock=212', price: '₦10,000', desc: 'Pineapple, banana, cream/milk, brown sugar.' },
        { name: 'Vanilla/Chocolate/Strawberry Milkshake', image: 'https://loremflickr.com/150/150/vanilla/chocolate/strawberry,milkshake,food?lock=213', price: '₦10,000', desc: 'Ice cream, cream/milk, sugar, vanilla extract.' }
      ]
    },
    {
      category: 'COCKTAILS',
      items: [
        { name: 'Luxurious Margarita', image: 'https://loremflickr.com/150/150/luxurious,margarita,food?lock=214', price: '₦17,000', desc: 'Premium tequila, fresh lime, Cointreau, champagne.' },
        { name: 'Negroni', image: 'https://loremflickr.com/150/150/negroni,food?lock=215', price: '₦15,000', desc: 'Campari, sweet vermouth, gin.' },
        { name: 'Old Fashioned', image: 'https://loremflickr.com/150/150/old,fashioned,food?lock=216', price: '₦17,000', desc: 'Simple syrup, bourbon, Angostura bitters.' },
        { name: 'Deluxe Skyline', image: 'https://loremflickr.com/150/150/deluxe,skyline,food?lock=217', price: '₦16,000', desc: 'Blue curaçao, vodka, fresh pineapple juice, lime juice, garnished with orange twist.' },
        { name: 'Chapking', image: 'https://loremflickr.com/150/150/chapking,food?lock=218', price: '₦14,000', desc: 'Zobo syrup, gin, grenadine, lemon soda, garnished with cucumber and orange slice.' },
        { name: 'Superior Mojito', image: 'https://loremflickr.com/150/150/superior,mojito,food?lock=219', price: '₦15,000', desc: 'Palm wine, white rum, mint leaves, lime juice, soda top.' },
        { name: 'Royal Sunrise', image: 'https://loremflickr.com/150/150/royal,sunrise,food?lock=220', price: '₦15,000', desc: 'Fresh orange juice, dark rum, zobo reduction, dash bitters.' },
        { name: 'King Tiger', image: 'https://loremflickr.com/150/150/king,tiger,food?lock=221', price: '₦13,000', desc: 'Creamy tigernut, rum or vodka, dates, coconut, ginger.' },
        { name: 'Espresso Martini', image: 'https://loremflickr.com/150/150/espresso,martini,food?lock=222', price: '₦14,000', desc: 'Brewed espresso, vodka, coffee liqueur, honey syrup, garnished with 3 coffee beans.' },
        { name: 'Coconut Banpin Daiquiri', image: 'https://loremflickr.com/150/150/coconut,banpin,daiquiri,food?lock=223', price: '₦14,000', desc: 'Cream of coconut, white rum, fresh lime juice, pineapple juice and banana.' },
        { name: 'Zobo Sangria Fizz', image: 'https://loremflickr.com/150/150/zobo,sangria,fizz,food?lock=224', price: '₦16,000', desc: 'Dry red wine, zobo reduction, brandy or orange liqueur, honey syrup, soda or sparkling water.' }
      ]
    }
  ]
};
