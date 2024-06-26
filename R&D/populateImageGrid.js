const plantsArr = [
    {
        "id": 1, /* this is the perenual id, use this id to pull plant details with a fetch */
        "common_name": "European Silver Fir",
        "scientific_name": [
            "Abies alba"
        ],
        "other_name": [
            "Common Silver Fir"
        ],
        "cycle": "Perennial",
        "watering": "Frequent",
        "sunlight": [
            "full sun"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/1_abies_alba\/og\/1536px-Abies_alba_SkalitC3A9.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/1_abies_alba\/regular\/1536px-Abies_alba_SkalitC3A9.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/1_abies_alba\/medium\/1536px-Abies_alba_SkalitC3A9.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/1_abies_alba\/small\/1536px-Abies_alba_SkalitC3A9.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/1_abies_alba\/thumbnail\/1536px-Abies_alba_SkalitC3A9.jpg"
        }
    },
    {
        "id": 2,
        "common_name": "Pyramidalis Silver Fir",
        "scientific_name": [
            "Abies alba 'Pyramidalis'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun"
        ],
        "default_image": {
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/2_abies_alba_pyramidalis\/og\/49255769768_df55596553_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/2_abies_alba_pyramidalis\/regular\/49255769768_df55596553_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/2_abies_alba_pyramidalis\/medium\/49255769768_df55596553_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/2_abies_alba_pyramidalis\/small\/49255769768_df55596553_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/2_abies_alba_pyramidalis\/thumbnail\/49255769768_df55596553_b.jpg"
        }
    },
    {
        "id": 3,
        "common_name": "White Fir",
        "scientific_name": [
            "Abies concolor"
        ],
        "other_name": [
            "Silver Fir",
            "Concolor Fir",
            "Colorado Fir"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "Full sun",
            "part shade"
        ],
        "default_image": {
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/3_abies_concolor\/og\/52292935430_f4f3b22614_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/3_abies_concolor\/regular\/52292935430_f4f3b22614_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/3_abies_concolor\/medium\/52292935430_f4f3b22614_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/3_abies_concolor\/small\/52292935430_f4f3b22614_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/3_abies_concolor\/thumbnail\/52292935430_f4f3b22614_b.jpg"
        }
    },
    {
        "id": 4,
        "common_name": "Candicans White Fir",
        "scientific_name": [
            "Abies concolor 'Candicans'"
        ],
        "other_name": [
            "Silver Fir",
            "Concolor Fir",
            "Colorado Fir"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun"
        ],
        "default_image": {
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/4_abies_concolor_candicans\/og\/49283844888_332c9e46f2_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/4_abies_concolor_candicans\/regular\/49283844888_332c9e46f2_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/4_abies_concolor_candicans\/medium\/49283844888_332c9e46f2_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/4_abies_concolor_candicans\/small\/49283844888_332c9e46f2_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/4_abies_concolor_candicans\/thumbnail\/49283844888_332c9e46f2_b.jpg"
        }
    },
    {
        "id": 5,
        "common_name": "Fraser Fir",
        "scientific_name": [
            "Abies fraseri"
        ],
        "other_name": [
            "Southern Fir"
        ],
        "cycle": "Perennial",
        "watering": "Frequent",
        "sunlight": [
            "full sun",
            "part shade",
            "filtered shade"
        ],
        "default_image": {
            "license": 4,
            "license_name": "Attribution License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/5_abies_fraseri\/og\/36843539702_e80fc436e0_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/5_abies_fraseri\/regular\/36843539702_e80fc436e0_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/5_abies_fraseri\/medium\/36843539702_e80fc436e0_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/5_abies_fraseri\/small\/36843539702_e80fc436e0_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/5_abies_fraseri\/thumbnail\/36843539702_e80fc436e0_b.jpg"
        }
    },
    {
        "id": 6,
        "common_name": "Golden Korean Fir",
        "scientific_name": [
            "Abies koreana 'Aurea'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "Full sun",
            "part shade"
        ],
        "default_image": {
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/6_abies_koreana_aurea\/og\/49235570926_99ec10781d_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/6_abies_koreana_aurea\/regular\/49235570926_99ec10781d_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/6_abies_koreana_aurea\/medium\/49235570926_99ec10781d_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/6_abies_koreana_aurea\/small\/49235570926_99ec10781d_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/6_abies_koreana_aurea\/thumbnail\/49235570926_99ec10781d_b.jpg"
        }
    },
    {
        "id": 7,
        "common_name": "Alpine Fir",
        "scientific_name": [
            "Abies lasiocarpa"
        ],
        "other_name": [
            "Subalpine Fir",
            "Rocky Mountain Fir"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/7_abies_lasiocarpa\/og\/51002756843_74fae3c2fa_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/7_abies_lasiocarpa\/regular\/51002756843_74fae3c2fa_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/7_abies_lasiocarpa\/medium\/51002756843_74fae3c2fa_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/7_abies_lasiocarpa\/small\/51002756843_74fae3c2fa_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/7_abies_lasiocarpa\/thumbnail\/51002756843_74fae3c2fa_b.jpg"
        }
    },
    {
        "id": 8,
        "common_name": "Blue Spanish Fir",
        "scientific_name": [
            "Abies pinsapo 'Glauca'"
        ],
        "other_name": [
            "Glaucous Spanish Fir"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "Full sun",
            "part shade"
        ],
        "default_image": {
            "license": 4,
            "license_name": "Attribution License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/8_abies_pinsapo_glauca\/og\/21657514018_c0d9fed9f4_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/8_abies_pinsapo_glauca\/regular\/21657514018_c0d9fed9f4_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/8_abies_pinsapo_glauca\/medium\/21657514018_c0d9fed9f4_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/8_abies_pinsapo_glauca\/small\/21657514018_c0d9fed9f4_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/8_abies_pinsapo_glauca\/thumbnail\/21657514018_c0d9fed9f4_b.jpg"
        }
    },
    {
        "id": 9,
        "common_name": "Noble Fir",
        "scientific_name": [
            "Abies procera"
        ],
        "other_name": [
            "Red Fir",
            "White Fir"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun"
        ],
        "default_image": {
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/9_abies_procera\/og\/49107504112_6bd7effb8b_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/9_abies_procera\/regular\/49107504112_6bd7effb8b_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/9_abies_procera\/medium\/49107504112_6bd7effb8b_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/9_abies_procera\/small\/49107504112_6bd7effb8b_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/9_abies_procera\/thumbnail\/49107504112_6bd7effb8b_b.jpg"
        }
    },
    {
        "id": 10,
        "common_name": "Johin Japanese Maple",
        "scientific_name": [
            "Acer 'Johin'"
        ],
        "other_name": [
            "Red Full Moon Maple"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 451,
            "license_name": "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
            "license_url": "https:\/\/creativecommons.org\/publicdomain\/zero\/1.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/10_acer_johin\/og\/pexels-photo-2183508.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/10_acer_johin\/regular\/pexels-photo-2183508.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/10_acer_johin\/medium\/pexels-photo-2183508.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/10_acer_johin\/small\/pexels-photo-2183508.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/10_acer_johin\/thumbnail\/pexels-photo-2183508.jpg"
        }
    },
    {
        "id": 11,
        "common_name": "Snakebark Maple",
        "scientific_name": [
            "Acer davidii"
        ],
        "other_name": [
            "Father David's Maple",
            "Pere David's Maple"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "Full sun",
            "part shade"
        ],
        "default_image": {
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/11_acer_davidii\/og\/6868591754_f4ac5b0510_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/11_acer_davidii\/regular\/6868591754_f4ac5b0510_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/11_acer_davidii\/medium\/6868591754_f4ac5b0510_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/11_acer_davidii\/small\/6868591754_f4ac5b0510_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/11_acer_davidii\/thumbnail\/6868591754_f4ac5b0510_b.jpg"
        }
    },
    {
        "id": 12,
        "common_name": "Amur Maple",
        "scientific_name": [
            "Acer ginnala"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/12_acer_ginnala\/og\/10476032513_76ca899bc4_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/12_acer_ginnala\/regular\/10476032513_76ca899bc4_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/12_acer_ginnala\/medium\/10476032513_76ca899bc4_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/12_acer_ginnala\/small\/10476032513_76ca899bc4_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/12_acer_ginnala\/thumbnail\/10476032513_76ca899bc4_b.jpg"
        }
    },
    {
        "id": 13,
        "common_name": "Flame Amur Maple",
        "scientific_name": [
            "Acer ginnala 'Flame'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Frequent",
        "sunlight": [
            "full sun"
        ],
        "default_image": {
            "license": 451,
            "license_name": "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
            "license_url": "https:\/\/creativecommons.org\/publicdomain\/zero\/1.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/13_acer_ginnala_flame\/og\/pexels-photo-1649190.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/13_acer_ginnala_flame\/regular\/pexels-photo-1649190.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/13_acer_ginnala_flame\/medium\/pexels-photo-1649190.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/13_acer_ginnala_flame\/small\/pexels-photo-1649190.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/13_acer_ginnala_flame\/thumbnail\/pexels-photo-1649190.jpg"
        }
    },
    {
        "id": 14,
        "common_name": "Red Rhapsody Amur Maple",
        "scientific_name": [
            "Acer ginnala 'Mondy'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Frequent",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 451,
            "license_name": "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
            "license_url": "https:\/\/creativecommons.org\/publicdomain\/zero\/1.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/14_acer_ginnala_mondy\/og\/pexels-photo-1789879.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/14_acer_ginnala_mondy\/regular\/pexels-photo-1789879.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/14_acer_ginnala_mondy\/medium\/pexels-photo-1789879.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/14_acer_ginnala_mondy\/small\/pexels-photo-1789879.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/14_acer_ginnala_mondy\/thumbnail\/pexels-photo-1789879.jpg"
        }
    },
    {
        "id": 15,
        "common_name": "Ruby Slippers Amur Maple",
        "scientific_name": [
            "Acer ginnala 'Ruby Slippers'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Frequent",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 451,
            "license_name": "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
            "license_url": "https:\/\/creativecommons.org\/publicdomain\/zero\/1.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/15_acer_ginnala_ruby_slippers\/og\/pexels-photo-1640820.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/15_acer_ginnala_ruby_slippers\/regular\/pexels-photo-1640820.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/15_acer_ginnala_ruby_slippers\/medium\/pexels-photo-1640820.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/15_acer_ginnala_ruby_slippers\/small\/pexels-photo-1640820.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/15_acer_ginnala_ruby_slippers\/thumbnail\/pexels-photo-1640820.jpg"
        }
    },
    {
        "id": 16,
        "common_name": "Paperbark Maple",
        "scientific_name": [
            "Acer griseum"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "Full sun",
            "part shade"
        ],
        "default_image": {
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/16_acer_griseum\/og\/5158906371_ed08a86876_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/16_acer_griseum\/regular\/5158906371_ed08a86876_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/16_acer_griseum\/medium\/5158906371_ed08a86876_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/16_acer_griseum\/small\/5158906371_ed08a86876_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/16_acer_griseum\/thumbnail\/5158906371_ed08a86876_b.jpg"
        }
    },
    {
        "id": 17,
        "common_name": "Fullmoon Maple",
        "scientific_name": [
            "Acer japonicum"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "Full sun",
            "part shade"
        ],
        "default_image": {
            "license": 4,
            "license_name": "Attribution License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/17_acer_japonicum\/og\/7175475239_52543c51b3_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/17_acer_japonicum\/regular\/7175475239_52543c51b3_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/17_acer_japonicum\/medium\/7175475239_52543c51b3_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/17_acer_japonicum\/small\/7175475239_52543c51b3_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/17_acer_japonicum\/thumbnail\/7175475239_52543c51b3_b.jpg"
        }
    },
    {
        "id": 18,
        "common_name": "Cutleaf Fullmoon Maple",
        "scientific_name": [
            "Acer japonicum 'Aconitifolium'"
        ],
        "other_name": [
            "fernleaf full moon maple"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "Full sun",
            "part shade"
        ],
        "default_image": {
            "license": 4,
            "license_name": "Attribution License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/18_acer_japonicum_aconitifolium\/og\/23528789198_c419363323_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/18_acer_japonicum_aconitifolium\/regular\/23528789198_c419363323_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/18_acer_japonicum_aconitifolium\/medium\/23528789198_c419363323_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/18_acer_japonicum_aconitifolium\/small\/23528789198_c419363323_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/18_acer_japonicum_aconitifolium\/thumbnail\/23528789198_c419363323_b.jpg"
        }
    },
    {
        "id": 19,
        "common_name": "Attaryi Fullmoon Maple*",
        "scientific_name": [
            "Acer japonicum 'Attaryi'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 451,
            "license_name": "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
            "license_url": "https:\/\/creativecommons.org\/publicdomain\/zero\/1.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/19_acer_japonicum_attaryi\/og\/pexels-photo-669323.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/19_acer_japonicum_attaryi\/regular\/pexels-photo-669323.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/19_acer_japonicum_attaryi\/medium\/pexels-photo-669323.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/19_acer_japonicum_attaryi\/small\/pexels-photo-669323.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/19_acer_japonicum_attaryi\/thumbnail\/pexels-photo-669323.jpg"
        }
    },
    {
        "id": 20,
        "common_name": "Golden Fullmoon Maple",
        "scientific_name": [
            "Acer japonicum 'Aureum'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/20_acer_japonicum_aureum\/og\/2560px-Acer_shirasawanum_27Aureum27.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/20_acer_japonicum_aureum\/regular\/2560px-Acer_shirasawanum_27Aureum27.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/20_acer_japonicum_aureum\/medium\/2560px-Acer_shirasawanum_27Aureum27.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/20_acer_japonicum_aureum\/small\/2560px-Acer_shirasawanum_27Aureum27.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/20_acer_japonicum_aureum\/thumbnail\/2560px-Acer_shirasawanum_27Aureum27.jpg"
        }
    },
    {
        "id": 21,
        "common_name": "Emmett's Pumpkin Fullmoon Maple",
        "scientific_name": [
            "Acer japonicum 'Emmett's Pumpkin'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade",
            "filtered shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/21_acer_japonicum_emmetts_pumpkin\/og\/Acer_shirasawanum_28golden_fullmoon_maple29_2_284633285838129.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/21_acer_japonicum_emmetts_pumpkin\/regular\/Acer_shirasawanum_28golden_fullmoon_maple29_2_284633285838129.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/21_acer_japonicum_emmetts_pumpkin\/medium\/Acer_shirasawanum_28golden_fullmoon_maple29_2_284633285838129.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/21_acer_japonicum_emmetts_pumpkin\/small\/Acer_shirasawanum_28golden_fullmoon_maple29_2_284633285838129.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/21_acer_japonicum_emmetts_pumpkin\/thumbnail\/Acer_shirasawanum_28golden_fullmoon_maple29_2_284633285838129.jpg"
        }
    },
    {
        "id": 22,
        "common_name": "Green Cascade Maple",
        "scientific_name": [
            "Acer japonicum 'Green Cascade'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "Full sun",
            "part shade"
        ],
        "default_image": {
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/22_acer_japonicum_green_cascade\/og\/4847225395_2509ee2bfe_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/22_acer_japonicum_green_cascade\/regular\/4847225395_2509ee2bfe_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/22_acer_japonicum_green_cascade\/medium\/4847225395_2509ee2bfe_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/22_acer_japonicum_green_cascade\/small\/4847225395_2509ee2bfe_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/22_acer_japonicum_green_cascade\/thumbnail\/4847225395_2509ee2bfe_b.jpg"
        }
    },
    {
        "id": 23,
        "common_name": "Big Leaf Maple",
        "scientific_name": [
            "Acer macrophyllum"
        ],
        "other_name": [
            "Oregon Maple"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part sun\/part shade"
        ],
        "default_image": {
            "license": 4,
            "license_name": "Attribution License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/23_acer_macrophyllum\/og\/52135137216_8a124b5188_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/23_acer_macrophyllum\/regular\/52135137216_8a124b5188_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/23_acer_macrophyllum\/medium\/52135137216_8a124b5188_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/23_acer_macrophyllum\/small\/52135137216_8a124b5188_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/23_acer_macrophyllum\/thumbnail\/52135137216_8a124b5188_b.jpg"
        }
    },
    {
        "id": 24,
        "common_name": "Mocha Rose Big Leaf Maple",
        "scientific_name": [
            "Acer macrophyllum 'Mocha Rose'"
        ],
        "other_name": [
            "Oregon Maple"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/24_acer_macrophyllum_mocha_rose\/og\/4715169892_220a9d39f6_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/24_acer_macrophyllum_mocha_rose\/regular\/4715169892_220a9d39f6_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/24_acer_macrophyllum_mocha_rose\/medium\/4715169892_220a9d39f6_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/24_acer_macrophyllum_mocha_rose\/small\/4715169892_220a9d39f6_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/24_acer_macrophyllum_mocha_rose\/thumbnail\/4715169892_220a9d39f6_b.jpg"
        }
    },
    {
        "id": 25,
        "common_name": "Flamingo Boxelder",
        "scientific_name": [
            "Acer negundo 'Flamingo'"
        ],
        "other_name": [
            "Manitoba Maple",
            "box elder"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part sun\/part shade"
        ],
        "default_image": {
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/25_acer_negundo_flamingo\/og\/5867345385_a9dff5bee7_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/25_acer_negundo_flamingo\/regular\/5867345385_a9dff5bee7_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/25_acer_negundo_flamingo\/medium\/5867345385_a9dff5bee7_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/25_acer_negundo_flamingo\/small\/5867345385_a9dff5bee7_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/25_acer_negundo_flamingo\/thumbnail\/5867345385_a9dff5bee7_b.jpg"
        }
    },
    {
        "id": 26,
        "common_name": "Kelly's Gold Boxelder",
        "scientific_name": [
            "Acer negundo 'Kelly's Gold'"
        ],
        "other_name": [
            "Manitoba Maple",
            "box elder"
        ],
        "cycle": "Perennial",
        "watering": "Frequent",
        "sunlight": [
            "full sun",
            "part sun\/part shade"
        ],
        "default_image": {
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/26_acer_negundo_kellys_gold\/og\/28819730054_e2a2b797c9_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/26_acer_negundo_kellys_gold\/regular\/28819730054_e2a2b797c9_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/26_acer_negundo_kellys_gold\/medium\/28819730054_e2a2b797c9_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/26_acer_negundo_kellys_gold\/small\/28819730054_e2a2b797c9_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/26_acer_negundo_kellys_gold\/thumbnail\/28819730054_e2a2b797c9_b.jpg"
        }
    },
    {
        "id": 27,
        "common_name": "Japanese Maple",
        "scientific_name": [
            "Acer palmatum"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "Full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/27_acer_palmatum\/og\/2560px-Acer_palmatum_27Bloodgood27_kz01.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/27_acer_palmatum\/regular\/2560px-Acer_palmatum_27Bloodgood27_kz01.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/27_acer_palmatum\/medium\/2560px-Acer_palmatum_27Bloodgood27_kz01.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/27_acer_palmatum\/small\/2560px-Acer_palmatum_27Bloodgood27_kz01.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/27_acer_palmatum\/thumbnail\/2560px-Acer_palmatum_27Bloodgood27_kz01.jpg"
        }
    },
    {
        "id": 28,
        "common_name": "Aka Shigitatsu Sawa Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Aka Shigitatsu Sawa'"
        ],
        "other_name": [
            "Samurai"
        ],
        "cycle": "Perennial",
        "watering": "Frequent",
        "sunlight": [
            "part sun\/part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/28_acer_palmatum_aka_shigitatsu_sawa\/og\/Acer_palmatum_Aka_shigitatsu_sawa_2zz.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/28_acer_palmatum_aka_shigitatsu_sawa\/regular\/Acer_palmatum_Aka_shigitatsu_sawa_2zz.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/28_acer_palmatum_aka_shigitatsu_sawa\/medium\/Acer_palmatum_Aka_shigitatsu_sawa_2zz.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/28_acer_palmatum_aka_shigitatsu_sawa\/small\/Acer_palmatum_Aka_shigitatsu_sawa_2zz.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/28_acer_palmatum_aka_shigitatsu_sawa\/thumbnail\/Acer_palmatum_Aka_shigitatsu_sawa_2zz.jpg"
        }
    },
    {
        "id": 29,
        "common_name": "Alpenweiss Variegated Dwarf Japanese Maple*",
        "scientific_name": [
            "Acer palmatum 'Alpenweiss'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": null
    },
    {
        "id": 30,
        "common_name": "Ao Shime No Uchi Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Ao Shime No Uchi'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Frequent",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/30_acer_palmatum_ao_shime_no_uchi\/og\/Acer_palmatum_Ao_shime_no_uchi_3zz.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/30_acer_palmatum_ao_shime_no_uchi\/regular\/Acer_palmatum_Ao_shime_no_uchi_3zz.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/30_acer_palmatum_ao_shime_no_uchi\/medium\/Acer_palmatum_Ao_shime_no_uchi_3zz.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/30_acer_palmatum_ao_shime_no_uchi\/small\/Acer_palmatum_Ao_shime_no_uchi_3zz.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/30_acer_palmatum_ao_shime_no_uchi\/thumbnail\/Acer_palmatum_Ao_shime_no_uchi_3zz.jpg"
        }
    },
    {
        "id": 31,
        "common_name": "Aoyagi Japanese Maple*",
        "scientific_name": [
            "Acer palmatum 'Aoyagi'"
        ],
        "other_name": [
            "Green Coral Japanese Maple"
        ],
        "cycle": "Perennial",
        "watering": "Frequent",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 451,
            "license_name": "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
            "license_url": "https:\/\/creativecommons.org\/publicdomain\/zero\/1.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/31_acer_palmatum_aoyagi\/og\/acer_palmatum_japanese_maples_trees_red_red_leaves_blue_sky_blue_white-1126158.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/31_acer_palmatum_aoyagi\/regular\/acer_palmatum_japanese_maples_trees_red_red_leaves_blue_sky_blue_white-1126158.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/31_acer_palmatum_aoyagi\/medium\/acer_palmatum_japanese_maples_trees_red_red_leaves_blue_sky_blue_white-1126158.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/31_acer_palmatum_aoyagi\/small\/acer_palmatum_japanese_maples_trees_red_red_leaves_blue_sky_blue_white-1126158.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/31_acer_palmatum_aoyagi\/thumbnail\/acer_palmatum_japanese_maples_trees_red_red_leaves_blue_sky_blue_white-1126158.jpg"
        }
    },
    {
        "id": 32,
        "common_name": "Arakawa Cork Bark Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Arakawa'"
        ],
        "other_name": [
            "Rough-Bark Japanese Maple",
            "Arakawa Ukon"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "Full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/32_acer_palmatum_arakawa\/og\/2560px-Montagnac-Acer-palmatum_04.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/32_acer_palmatum_arakawa\/regular\/2560px-Montagnac-Acer-palmatum_04.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/32_acer_palmatum_arakawa\/medium\/2560px-Montagnac-Acer-palmatum_04.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/32_acer_palmatum_arakawa\/small\/2560px-Montagnac-Acer-palmatum_04.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/32_acer_palmatum_arakawa\/thumbnail\/2560px-Montagnac-Acer-palmatum_04.jpg"
        }
    },
    {
        "id": 33,
        "common_name": "Asahi Zuru Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Asahi Zuru'"
        ],
        "other_name": [
            "Rising Sun",
            "Dawn Swan"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": null
    },
    {
        "id": 34,
        "common_name": "Ribbon-leaf Japanese Maple*",
        "scientific_name": [
            "Acer palmatum 'Atrolineare'"
        ],
        "other_name": [
            "Red Strap-Leaf Japanese Maple"
        ],
        "cycle": "Perennial",
        "watering": "Minimum",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/34_acer_palmatum_atrolineare\/og\/2560px-Acer_Palmatum_27Red_Pygmy27.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/34_acer_palmatum_atrolineare\/regular\/2560px-Acer_Palmatum_27Red_Pygmy27.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/34_acer_palmatum_atrolineare\/medium\/2560px-Acer_Palmatum_27Red_Pygmy27.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/34_acer_palmatum_atrolineare\/small\/2560px-Acer_Palmatum_27Red_Pygmy27.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/34_acer_palmatum_atrolineare\/thumbnail\/2560px-Acer_Palmatum_27Red_Pygmy27.jpg"
        }
    },
    {
        "id": 35,
        "common_name": "Purple-Leaf Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Atropurpureum'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 4,
            "license_name": "Attribution License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/35_acer_palmatum_atropurpureum\/og\/5656874577_617188e307_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/35_acer_palmatum_atropurpureum\/regular\/5656874577_617188e307_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/35_acer_palmatum_atropurpureum\/medium\/5656874577_617188e307_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/35_acer_palmatum_atropurpureum\/small\/5656874577_617188e307_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/35_acer_palmatum_atropurpureum\/thumbnail\/5656874577_617188e307_b.jpg"
        }
    },
    {
        "id": 36,
        "common_name": "Aureum Japanese Maple*",
        "scientific_name": [
            "Acer palmatum 'Aureum'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "part shade",
            "part sun\/part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/36_acer_palmatum_aureum\/og\/2560px-Acer_shirasawanum_22aureum22.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/36_acer_palmatum_aureum\/regular\/2560px-Acer_shirasawanum_22aureum22.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/36_acer_palmatum_aureum\/medium\/2560px-Acer_shirasawanum_22aureum22.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/36_acer_palmatum_aureum\/small\/2560px-Acer_shirasawanum_22aureum22.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/36_acer_palmatum_aureum\/thumbnail\/2560px-Acer_shirasawanum_22aureum22.jpg"
        }
    },
    {
        "id": 37,
        "common_name": "Autumn Fire Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Autumn Fire'"
        ],
        "other_name": [
            "Herbstfeuer"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/37_acer_palmatum_autumn_fire\/og\/2560px-Acer_palmatum_fall_foliage_01.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/37_acer_palmatum_autumn_fire\/regular\/2560px-Acer_palmatum_fall_foliage_01.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/37_acer_palmatum_autumn_fire\/medium\/2560px-Acer_palmatum_fall_foliage_01.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/37_acer_palmatum_autumn_fire\/small\/2560px-Acer_palmatum_fall_foliage_01.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/37_acer_palmatum_autumn_fire\/thumbnail\/2560px-Acer_palmatum_fall_foliage_01.jpg"
        }
    },
    {
        "id": 38,
        "common_name": "Azuma Murasaki Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Azuma Murasaki'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": null
    },
    {
        "id": 39,
        "common_name": "Beni Kawa Coral Bark Japanese Maple*",
        "scientific_name": [
            "Acer palmatum 'Beni Kawa'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Frequent",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 4,
            "license_name": "Attribution License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/39_acer_palmatum_beni_kawa\/og\/5695802528_935d72efaa_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/39_acer_palmatum_beni_kawa\/regular\/5695802528_935d72efaa_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/39_acer_palmatum_beni_kawa\/medium\/5695802528_935d72efaa_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/39_acer_palmatum_beni_kawa\/small\/5695802528_935d72efaa_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/39_acer_palmatum_beni_kawa\/thumbnail\/5695802528_935d72efaa_b.jpg"
        }
    },
    {
        "id": 40,
        "common_name": "Beni Otake Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Beni Otake'"
        ],
        "other_name": [
            "Big Red Bamboo"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/40_acer_palmatum_beni_otake\/og\/Acer_palmatum_27Oshio_beni27_-_JPG2.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/40_acer_palmatum_beni_otake\/regular\/Acer_palmatum_27Oshio_beni27_-_JPG2.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/40_acer_palmatum_beni_otake\/medium\/Acer_palmatum_27Oshio_beni27_-_JPG2.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/40_acer_palmatum_beni_otake\/small\/Acer_palmatum_27Oshio_beni27_-_JPG2.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/40_acer_palmatum_beni_otake\/thumbnail\/Acer_palmatum_27Oshio_beni27_-_JPG2.jpg"
        }
    },
    {
        "id": 41,
        "common_name": "Beni Schichihenge Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Beni Schichihenge'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": null
    },
    {
        "id": 42,
        "common_name": "Beni Tsukasa Japanese Maple*",
        "scientific_name": [
            "Acer palmatum 'Beni Tsukasa'"
        ],
        "other_name": [
            "Calico Cloth"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 451,
            "license_name": "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
            "license_url": "https:\/\/creativecommons.org\/publicdomain\/zero\/1.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/42_acer_palmatum_beni_tsukasa\/og\/pexels-photo-11870811.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/42_acer_palmatum_beni_tsukasa\/regular\/pexels-photo-11870811.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/42_acer_palmatum_beni_tsukasa\/medium\/pexels-photo-11870811.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/42_acer_palmatum_beni_tsukasa\/small\/pexels-photo-11870811.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/42_acer_palmatum_beni_tsukasa\/thumbnail\/pexels-photo-11870811.jpg"
        }
    },
    {
        "id": 43,
        "common_name": "Bloodgood Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Bloodgood'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part sun\/part shade"
        ],
        "default_image": {
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/43_acer_palmatum_bloodgood\/og\/47923603032_5a96106ac6_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/43_acer_palmatum_bloodgood\/regular\/47923603032_5a96106ac6_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/43_acer_palmatum_bloodgood\/medium\/47923603032_5a96106ac6_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/43_acer_palmatum_bloodgood\/small\/47923603032_5a96106ac6_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/43_acer_palmatum_bloodgood\/thumbnail\/47923603032_5a96106ac6_b.jpg"
        }
    },
    {
        "id": 44,
        "common_name": "Bonfire Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Bonfire'"
        ],
        "other_name": [
            "Seigai"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 451,
            "license_name": "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
            "license_url": "https:\/\/creativecommons.org\/publicdomain\/zero\/1.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/44_acer_palmatum_bonfire\/og\/sk3776-image-kwvuoab1.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/44_acer_palmatum_bonfire\/regular\/sk3776-image-kwvuoab1.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/44_acer_palmatum_bonfire\/medium\/sk3776-image-kwvuoab1.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/44_acer_palmatum_bonfire\/small\/sk3776-image-kwvuoab1.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/44_acer_palmatum_bonfire\/thumbnail\/sk3776-image-kwvuoab1.jpg"
        }
    },
    {
        "id": 45,
        "common_name": "Brandt's Dwarf Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Brandt's Dwarf'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/45_acer_palmatum_brandts_dwarf\/og\/Acer_palmatum_BotGartenMuenster_Faecherahorn_6691.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/45_acer_palmatum_brandts_dwarf\/regular\/Acer_palmatum_BotGartenMuenster_Faecherahorn_6691.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/45_acer_palmatum_brandts_dwarf\/medium\/Acer_palmatum_BotGartenMuenster_Faecherahorn_6691.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/45_acer_palmatum_brandts_dwarf\/small\/Acer_palmatum_BotGartenMuenster_Faecherahorn_6691.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/45_acer_palmatum_brandts_dwarf\/thumbnail\/Acer_palmatum_BotGartenMuenster_Faecherahorn_6691.jpg"
        }
    },
    {
        "id": 46,
        "common_name": "Burgundy Lace Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Burgundy Lace'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/46_acer_palmatum_burgundy_lace\/og\/50082938346_1040fdd690_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/46_acer_palmatum_burgundy_lace\/regular\/50082938346_1040fdd690_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/46_acer_palmatum_burgundy_lace\/medium\/50082938346_1040fdd690_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/46_acer_palmatum_burgundy_lace\/small\/50082938346_1040fdd690_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/46_acer_palmatum_burgundy_lace\/thumbnail\/50082938346_1040fdd690_b.jpg"
        }
    },
    {
        "id": 47,
        "common_name": "Butterfly Variegated Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Butterfly'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "Full sun",
            "part shade"
        ],
        "default_image": {
            "license": 4,
            "license_name": "Attribution License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/47_acer_palmatum_butterfly\/og\/20251027248_dc9cfd6f65_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/47_acer_palmatum_butterfly\/regular\/20251027248_dc9cfd6f65_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/47_acer_palmatum_butterfly\/medium\/20251027248_dc9cfd6f65_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/47_acer_palmatum_butterfly\/small\/20251027248_dc9cfd6f65_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/47_acer_palmatum_butterfly\/thumbnail\/20251027248_dc9cfd6f65_b.jpg"
        }
    },
    {
        "id": 48,
        "common_name": "Chantilly Lace Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Chantilly Lace'"
        ],
        "other_name": [
            "Threadleaf Japanese Maple"
        ],
        "cycle": "Perennial",
        "watering": "Frequent",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/48_acer_palmatum_chantilly_lace\/og\/4714671587_8ecba52560_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/48_acer_palmatum_chantilly_lace\/regular\/4714671587_8ecba52560_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/48_acer_palmatum_chantilly_lace\/medium\/4714671587_8ecba52560_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/48_acer_palmatum_chantilly_lace\/small\/4714671587_8ecba52560_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/48_acer_palmatum_chantilly_lace\/thumbnail\/4714671587_8ecba52560_b.jpg"
        }
    },
    {
        "id": 49,
        "common_name": "Chishio Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Chishio'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/49_acer_palmatum_chishio\/og\/Acer_palmatum_Atropurpureum_JPG1fuA.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/49_acer_palmatum_chishio\/regular\/Acer_palmatum_Atropurpureum_JPG1fuA.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/49_acer_palmatum_chishio\/medium\/Acer_palmatum_Atropurpureum_JPG1fuA.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/49_acer_palmatum_chishio\/small\/Acer_palmatum_Atropurpureum_JPG1fuA.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/49_acer_palmatum_chishio\/thumbnail\/Acer_palmatum_Atropurpureum_JPG1fuA.jpg"
        }
    },
    {
        "id": 50,
        "common_name": "Chitose Yama Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Chitose Yama'"
        ],
        "other_name": [
            "Chitoseyama"
        ],
        "cycle": "Perennial",
        "watering": "Frequent",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 451,
            "license_name": "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
            "license_url": "https:\/\/creativecommons.org\/publicdomain\/zero\/1.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/50_acer_palmatum_chitose_yama\/og\/pexels-photo-4977537.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/50_acer_palmatum_chitose_yama\/regular\/pexels-photo-4977537.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/50_acer_palmatum_chitose_yama\/medium\/pexels-photo-4977537.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/50_acer_palmatum_chitose_yama\/small\/pexels-photo-4977537.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/50_acer_palmatum_chitose_yama\/thumbnail\/pexels-photo-4977537.jpg"
        }
    },
    {
        "id": 51,
        "common_name": "Coonara Pygmy Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Coonara Pygmy'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 451,
            "license_name": "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
            "license_url": "https:\/\/creativecommons.org\/publicdomain\/zero\/1.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/51_acer_palmatum_coonara_pygmy\/og\/japan-maple-maple-leaf-red-leaf-nature.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/51_acer_palmatum_coonara_pygmy\/regular\/japan-maple-maple-leaf-red-leaf-nature.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/51_acer_palmatum_coonara_pygmy\/medium\/japan-maple-maple-leaf-red-leaf-nature.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/51_acer_palmatum_coonara_pygmy\/small\/japan-maple-maple-leaf-red-leaf-nature.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/51_acer_palmatum_coonara_pygmy\/thumbnail\/japan-maple-maple-leaf-red-leaf-nature.jpg"
        }
    },
    {
        "id": 52,
        "common_name": "Crimson Prince Japanese Maple*",
        "scientific_name": [
            "Acer palmatum 'Crimson Prince'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 451,
            "license_name": "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
            "license_url": "https:\/\/creativecommons.org\/publicdomain\/zero\/1.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/52_acer_palmatum_crimson_prince\/og\/1-1274349109Jjby.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/52_acer_palmatum_crimson_prince\/regular\/1-1274349109Jjby.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/52_acer_palmatum_crimson_prince\/medium\/1-1274349109Jjby.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/52_acer_palmatum_crimson_prince\/small\/1-1274349109Jjby.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/52_acer_palmatum_crimson_prince\/thumbnail\/1-1274349109Jjby.jpg"
        }
    },
    {
        "id": 53,
        "common_name": "Ever Red Lace-Leaf Japanese Maple*",
        "scientific_name": [
            "Acer palmatum 'Ever Red'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun"
        ],
        "default_image": {
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/53_acer_palmatum_ever_red\/og\/9651313679_caf5a0d447_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/53_acer_palmatum_ever_red\/regular\/9651313679_caf5a0d447_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/53_acer_palmatum_ever_red\/medium\/9651313679_caf5a0d447_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/53_acer_palmatum_ever_red\/small\/9651313679_caf5a0d447_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/53_acer_palmatum_ever_red\/thumbnail\/9651313679_caf5a0d447_b.jpg"
        }
    },
    {
        "id": 54,
        "common_name": "Glowing Embers Japanese Maple*",
        "scientific_name": [
            "Acer palmatum 'Glowing Embers'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/54_acer_palmatum_glowing_embers\/og\/2016-11-18_12_20_19_Callery_Pear_displaying_autumn_foliage_along_Franklin_Farm_Road_between_Tranquility_Lane_and_Old_Dairy_Road_in_the_Franklin_Farm_section_of_Oak_Hill2C_Fairfax_County2C_Virginia.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/54_acer_palmatum_glowing_embers\/regular\/2016-11-18_12_20_19_Callery_Pear_displaying_autumn_foliage_along_Franklin_Farm_Road_between_Tranquility_Lane_and_Old_Dairy_Road_in_the_Franklin_Farm_section_of_Oak_Hill2C_Fairfax_County2C_Virginia.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/54_acer_palmatum_glowing_embers\/medium\/2016-11-18_12_20_19_Callery_Pear_displaying_autumn_foliage_along_Franklin_Farm_Road_between_Tranquility_Lane_and_Old_Dairy_Road_in_the_Franklin_Farm_section_of_Oak_Hill2C_Fairfax_County2C_Virginia.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/54_acer_palmatum_glowing_embers\/small\/2016-11-18_12_20_19_Callery_Pear_displaying_autumn_foliage_along_Franklin_Farm_Road_between_Tranquility_Lane_and_Old_Dairy_Road_in_the_Franklin_Farm_section_of_Oak_Hill2C_Fairfax_County2C_Virginia.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/54_acer_palmatum_glowing_embers\/thumbnail\/2016-11-18_12_20_19_Callery_Pear_displaying_autumn_foliage_along_Franklin_Farm_Road_between_Tranquility_Lane_and_Old_Dairy_Road_in_the_Franklin_Farm_section_of_Oak_Hill2C_Fairfax_County2C_Virginia.jpg"
        }
    },
    {
        "id": 55,
        "common_name": "Grandma Ghost Japanese Maple*",
        "scientific_name": [
            "Acer palmatum 'Grandma Ghost'"
        ],
        "other_name": [
            "Grandma's Ghost Japanese Maple"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 4,
            "license_name": "Attribution License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/55_acer_palmatum_grandma_ghost\/og\/51480401507_4b9def5883_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/55_acer_palmatum_grandma_ghost\/regular\/51480401507_4b9def5883_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/55_acer_palmatum_grandma_ghost\/medium\/51480401507_4b9def5883_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/55_acer_palmatum_grandma_ghost\/small\/51480401507_4b9def5883_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/55_acer_palmatum_grandma_ghost\/thumbnail\/51480401507_4b9def5883_b.jpg"
        }
    },
    {
        "id": 56,
        "common_name": "Green Hornet Cutleaf Japanese Maple*",
        "scientific_name": [
            "Acer palmatum 'Green Hornet'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/56_acer_palmatum_green_hornet\/og\/Acer_palmatum_var._dissectum_Viridis_0zz.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/56_acer_palmatum_green_hornet\/regular\/Acer_palmatum_var._dissectum_Viridis_0zz.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/56_acer_palmatum_green_hornet\/medium\/Acer_palmatum_var._dissectum_Viridis_0zz.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/56_acer_palmatum_green_hornet\/small\/Acer_palmatum_var._dissectum_Viridis_0zz.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/56_acer_palmatum_green_hornet\/thumbnail\/Acer_palmatum_var._dissectum_Viridis_0zz.jpg"
        }
    },
    {
        "id": 57,
        "common_name": "Green Mist Japanese Maple*",
        "scientific_name": [
            "Acer palmatum 'Green Mist'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/57_acer_palmatum_green_mist\/og\/Acer_palmatum_var._dissectum_Green_Mist_0zz.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/57_acer_palmatum_green_mist\/regular\/Acer_palmatum_var._dissectum_Green_Mist_0zz.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/57_acer_palmatum_green_mist\/medium\/Acer_palmatum_var._dissectum_Green_Mist_0zz.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/57_acer_palmatum_green_mist\/small\/Acer_palmatum_var._dissectum_Green_Mist_0zz.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/57_acer_palmatum_green_mist\/thumbnail\/Acer_palmatum_var._dissectum_Green_Mist_0zz.jpg"
        }
    },
    {
        "id": 58,
        "common_name": "Shirazz Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Gwen's Rose Delight'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": null
    },
    {
        "id": 59,
        "common_name": "Hessei Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Hessei'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "part shade",
            "part sun\/part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/59_acer_palmatum_hessei\/og\/Acer_amoenum_var_matsumurae1.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/59_acer_palmatum_hessei\/regular\/Acer_amoenum_var_matsumurae1.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/59_acer_palmatum_hessei\/medium\/Acer_amoenum_var_matsumurae1.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/59_acer_palmatum_hessei\/small\/Acer_amoenum_var_matsumurae1.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/59_acer_palmatum_hessei\/thumbnail\/Acer_amoenum_var_matsumurae1.jpg"
        }
    },
    {
        "id": 60,
        "common_name": "Higasa Yama Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Higasa Yama'"
        ],
        "other_name": [
            "Higasayama"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "part sun\/part shade",
            "part shade"
        ],
        "default_image": {
            "license": 4,
            "license_name": "Attribution License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/60_acer_palmatum_higasa_yama\/og\/51522802351_37623328e0_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/60_acer_palmatum_higasa_yama\/regular\/51522802351_37623328e0_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/60_acer_palmatum_higasa_yama\/medium\/51522802351_37623328e0_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/60_acer_palmatum_higasa_yama\/small\/51522802351_37623328e0_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/60_acer_palmatum_higasa_yama\/thumbnail\/51522802351_37623328e0_b.jpg"
        }
    },
    {
        "id": 61,
        "common_name": "Hogyoku Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Hogyoku'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/61_acer_palmatum_hogyoku\/og\/2560px-Kyoto_Japan0431.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/61_acer_palmatum_hogyoku\/regular\/2560px-Kyoto_Japan0431.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/61_acer_palmatum_hogyoku\/medium\/2560px-Kyoto_Japan0431.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/61_acer_palmatum_hogyoku\/small\/2560px-Kyoto_Japan0431.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/61_acer_palmatum_hogyoku\/thumbnail\/2560px-Kyoto_Japan0431.jpg"
        }
    },
    {
        "id": 62,
        "common_name": "Hubb's Red Willow Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Hubb's Red Willow'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Frequent",
        "sunlight": [
            "part shade",
            "part sun\/part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/62_acer_palmatum_hubbs_red_willow\/og\/Acer_japonicum_rubra_leaves.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/62_acer_palmatum_hubbs_red_willow\/regular\/Acer_japonicum_rubra_leaves.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/62_acer_palmatum_hubbs_red_willow\/medium\/Acer_japonicum_rubra_leaves.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/62_acer_palmatum_hubbs_red_willow\/small\/Acer_japonicum_rubra_leaves.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/62_acer_palmatum_hubbs_red_willow\/thumbnail\/Acer_japonicum_rubra_leaves.jpg"
        }
    },
    {
        "id": 63,
        "common_name": "Iijima Sunago Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Iijima Sunago'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/63_acer_palmatum_iijima_sunago\/og\/Acer_palmatum_27Oshio_beni27_-_JPG1.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/63_acer_palmatum_iijima_sunago\/regular\/Acer_palmatum_27Oshio_beni27_-_JPG1.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/63_acer_palmatum_iijima_sunago\/medium\/Acer_palmatum_27Oshio_beni27_-_JPG1.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/63_acer_palmatum_iijima_sunago\/small\/Acer_palmatum_27Oshio_beni27_-_JPG1.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/63_acer_palmatum_iijima_sunago\/thumbnail\/Acer_palmatum_27Oshio_beni27_-_JPG1.jpg"
        }
    },
    {
        "id": 64,
        "common_name": "Inaba Shidare Cutleaf Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Inaba Shidare'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Frequent",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 4,
            "license_name": "Attribution License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/64_acer_palmatum_inaba_shidare\/og\/2465696230_ab34a4a784_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/64_acer_palmatum_inaba_shidare\/regular\/2465696230_ab34a4a784_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/64_acer_palmatum_inaba_shidare\/medium\/2465696230_ab34a4a784_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/64_acer_palmatum_inaba_shidare\/small\/2465696230_ab34a4a784_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/64_acer_palmatum_inaba_shidare\/thumbnail\/2465696230_ab34a4a784_b.jpg"
        }
    },
    {
        "id": 65,
        "common_name": "Inazuma Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Inazuma'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/65_acer_palmatum_inazuma\/og\/Acer_palmatum_28Japanese_maple_tree29_3_284904402847329.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/65_acer_palmatum_inazuma\/regular\/Acer_palmatum_28Japanese_maple_tree29_3_284904402847329.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/65_acer_palmatum_inazuma\/medium\/Acer_palmatum_28Japanese_maple_tree29_3_284904402847329.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/65_acer_palmatum_inazuma\/small\/Acer_palmatum_28Japanese_maple_tree29_3_284904402847329.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/65_acer_palmatum_inazuma\/thumbnail\/Acer_palmatum_28Japanese_maple_tree29_3_284904402847329.jpg"
        }
    },
    {
        "id": 66,
        "common_name": "Jiro Shidare Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Jiro Shidare'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Frequent",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/66_acer_palmatum_jiro_shidare\/og\/Acer_palmatum_Eddisbury_-_Flickr_-_peganum.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/66_acer_palmatum_jiro_shidare\/regular\/Acer_palmatum_Eddisbury_-_Flickr_-_peganum.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/66_acer_palmatum_jiro_shidare\/medium\/Acer_palmatum_Eddisbury_-_Flickr_-_peganum.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/66_acer_palmatum_jiro_shidare\/small\/Acer_palmatum_Eddisbury_-_Flickr_-_peganum.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/66_acer_palmatum_jiro_shidare\/thumbnail\/Acer_palmatum_Eddisbury_-_Flickr_-_peganum.jpg"
        }
    },
    {
        "id": 67,
        "common_name": "Kagiri Nishiki Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Kagiri Nishiki'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Frequent",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/67_acer_palmatum_kagiri_nishiki\/og\/800px-Acer_palmatum_27Kagiri-nishiki27_sunlit_branch.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/67_acer_palmatum_kagiri_nishiki\/regular\/800px-Acer_palmatum_27Kagiri-nishiki27_sunlit_branch.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/67_acer_palmatum_kagiri_nishiki\/medium\/800px-Acer_palmatum_27Kagiri-nishiki27_sunlit_branch.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/67_acer_palmatum_kagiri_nishiki\/small\/800px-Acer_palmatum_27Kagiri-nishiki27_sunlit_branch.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/67_acer_palmatum_kagiri_nishiki\/thumbnail\/800px-Acer_palmatum_27Kagiri-nishiki27_sunlit_branch.jpg"
        }
    },
    {
        "id": 68,
        "common_name": "Kamagata Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Kamagata'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": null
    },
    {
        "id": 69,
        "common_name": "Kandy Kitchen Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Kandy Kitchen'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 4,
            "license_name": "Attribution License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/69_acer_palmatum_kandy_kitchen\/og\/51150061025_29f690d490_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/69_acer_palmatum_kandy_kitchen\/regular\/51150061025_29f690d490_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/69_acer_palmatum_kandy_kitchen\/medium\/51150061025_29f690d490_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/69_acer_palmatum_kandy_kitchen\/small\/51150061025_29f690d490_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/69_acer_palmatum_kandy_kitchen\/thumbnail\/51150061025_29f690d490_b.jpg"
        }
    },
    {
        "id": 70,
        "common_name": "Karasu Gawa Japanese Maple*",
        "scientific_name": [
            "Acer palmatum 'Karasu Gawa'"
        ],
        "other_name": [
            "Karasugawa"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": null
    },
    {
        "id": 71,
        "common_name": "Kasagi Yama Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Kasagi Yama'"
        ],
        "other_name": [
            "Kasagiyama Japanese Maple"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": null
    },
    {
        "id": 72,
        "common_name": "Katsura Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Katsura'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "part shade",
            "part sun\/part shade"
        ],
        "default_image": {
            "license": 6,
            "license_name": "Attribution-NoDerivs License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-nd\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/72_acer_palmatum_katsura\/og\/33974454551_0965ae099b_b.jpg"
        }
    },
    {
        "id": 73,
        "common_name": "Kiri Nishiki Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Kiri Nishiki'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Frequent",
        "sunlight": [
            "full sun",
            "part sun\/part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/73_acer_palmatum_kiri_nishiki\/og\/Acer_palmatum_var._dissectum_Green_Mist_0zz.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/73_acer_palmatum_kiri_nishiki\/regular\/Acer_palmatum_var._dissectum_Green_Mist_0zz.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/73_acer_palmatum_kiri_nishiki\/medium\/Acer_palmatum_var._dissectum_Green_Mist_0zz.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/73_acer_palmatum_kiri_nishiki\/small\/Acer_palmatum_var._dissectum_Green_Mist_0zz.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/73_acer_palmatum_kiri_nishiki\/thumbnail\/Acer_palmatum_var._dissectum_Green_Mist_0zz.jpg"
        }
    },
    {
        "id": 74,
        "common_name": "Kiyohime Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Kiyohime'"
        ],
        "other_name": [
            "Kiyo Hime"
        ],
        "cycle": "Perennial",
        "watering": "Frequent",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 451,
            "license_name": "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
            "license_url": "https:\/\/creativecommons.org\/publicdomain\/zero\/1.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/74_acer_palmatum_kiyohime\/og\/pexels-photo-5745584.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/74_acer_palmatum_kiyohime\/regular\/pexels-photo-5745584.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/74_acer_palmatum_kiyohime\/medium\/pexels-photo-5745584.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/74_acer_palmatum_kiyohime\/small\/pexels-photo-5745584.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/74_acer_palmatum_kiyohime\/thumbnail\/pexels-photo-5745584.jpg"
        }
    },
    {
        "id": 75,
        "common_name": "Koshibori Nishiki Japanese Maple*",
        "scientific_name": [
            "Acer palmatum 'Koshibori Nishiki'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": null
    },
    {
        "id": 76,
        "common_name": "Koto No Ito Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Koto No Ito'"
        ],
        "other_name": [
            "Harp String",
            "Koto-No-Ito"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "filtered shade",
            "full sun only if soil kept moist",
            "part sun\/part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/76_acer_palmatum_koto_no_ito\/og\/Acer_palmatum_27Linearilobum27_JPG1L.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/76_acer_palmatum_koto_no_ito\/regular\/Acer_palmatum_27Linearilobum27_JPG1L.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/76_acer_palmatum_koto_no_ito\/medium\/Acer_palmatum_27Linearilobum27_JPG1L.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/76_acer_palmatum_koto_no_ito\/small\/Acer_palmatum_27Linearilobum27_JPG1L.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/76_acer_palmatum_koto_no_ito\/thumbnail\/Acer_palmatum_27Linearilobum27_JPG1L.jpg"
        }
    },
    {
        "id": 77,
        "common_name": "Linearilobum Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Linearilobum'"
        ],
        "other_name": [
            "Bamboo-Leaf Japanese Maple"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 4,
            "license_name": "Attribution License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/77_acer_palmatum_linearilobum\/og\/3466572143_4470363413_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/77_acer_palmatum_linearilobum\/regular\/3466572143_4470363413_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/77_acer_palmatum_linearilobum\/medium\/3466572143_4470363413_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/77_acer_palmatum_linearilobum\/small\/3466572143_4470363413_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/77_acer_palmatum_linearilobum\/thumbnail\/3466572143_4470363413_b.jpg"
        }
    },
    {
        "id": 78,
        "common_name": "Margaret Bee Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Margaret Bee'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "part shade",
            "part sun\/part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/78_acer_palmatum_margaret_bee\/og\/Acer_palmatum_28Japanese_maple_tree29_3_284904402847329.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/78_acer_palmatum_margaret_bee\/regular\/Acer_palmatum_28Japanese_maple_tree29_3_284904402847329.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/78_acer_palmatum_margaret_bee\/medium\/Acer_palmatum_28Japanese_maple_tree29_3_284904402847329.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/78_acer_palmatum_margaret_bee\/small\/Acer_palmatum_28Japanese_maple_tree29_3_284904402847329.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/78_acer_palmatum_margaret_bee\/thumbnail\/Acer_palmatum_28Japanese_maple_tree29_3_284904402847329.jpg"
        }
    },
    {
        "id": 79,
        "common_name": "Mikawa Yatsubusa Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Mikawa Yatsubusa'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "part shade",
            "part sun\/part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/79_acer_palmatum_mikawa_yatsubusa\/og\/2560px-Acer_palmatum_27Kashima_Yatsubusa27_-_Asticou_Azalea_Garden_-_Northeast_Harbor2C_Maine_-_DSC03516.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/79_acer_palmatum_mikawa_yatsubusa\/regular\/2560px-Acer_palmatum_27Kashima_Yatsubusa27_-_Asticou_Azalea_Garden_-_Northeast_Harbor2C_Maine_-_DSC03516.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/79_acer_palmatum_mikawa_yatsubusa\/medium\/2560px-Acer_palmatum_27Kashima_Yatsubusa27_-_Asticou_Azalea_Garden_-_Northeast_Harbor2C_Maine_-_DSC03516.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/79_acer_palmatum_mikawa_yatsubusa\/small\/2560px-Acer_palmatum_27Kashima_Yatsubusa27_-_Asticou_Azalea_Garden_-_Northeast_Harbor2C_Maine_-_DSC03516.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/79_acer_palmatum_mikawa_yatsubusa\/thumbnail\/2560px-Acer_palmatum_27Kashima_Yatsubusa27_-_Asticou_Azalea_Garden_-_Northeast_Harbor2C_Maine_-_DSC03516.jpg"
        }
    },
    {
        "id": 80,
        "common_name": "Mikazuki Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Mikazuki'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": null
    },
    {
        "id": 81,
        "common_name": "Moonfire Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Moonfire'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "part sun\/part shade",
            "full sun"
        ],
        "default_image": {
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/81_acer_palmatum_moonfire\/og\/4846299174_5cb4e644ae_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/81_acer_palmatum_moonfire\/regular\/4846299174_5cb4e644ae_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/81_acer_palmatum_moonfire\/medium\/4846299174_5cb4e644ae_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/81_acer_palmatum_moonfire\/small\/4846299174_5cb4e644ae_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/81_acer_palmatum_moonfire\/thumbnail\/4846299174_5cb4e644ae_b.jpg"
        }
    },
    {
        "id": 82,
        "common_name": "Nishiki Gawa Japanese Maple*",
        "scientific_name": [
            "Acer palmatum 'Nishiki Gawa'"
        ],
        "other_name": [
            "Pine Bark Maple"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun"
        ],
        "default_image": {
            "license": 451,
            "license_name": "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
            "license_url": "https:\/\/creativecommons.org\/publicdomain\/zero\/1.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/82_acer_palmatum_nishiki_gawa\/og\/pexels-photo-4977537.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/82_acer_palmatum_nishiki_gawa\/regular\/pexels-photo-4977537.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/82_acer_palmatum_nishiki_gawa\/medium\/pexels-photo-4977537.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/82_acer_palmatum_nishiki_gawa\/small\/pexels-photo-4977537.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/82_acer_palmatum_nishiki_gawa\/thumbnail\/pexels-photo-4977537.jpg"
        }
    },
    {
        "id": 83,
        "common_name": "Nuresagi Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Nuresagi'"
        ],
        "other_name": [
            "Wet Heron Japanese Maple"
        ],
        "cycle": "Perennial",
        "watering": "Frequent",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/83_acer_palmatum_nuresagi\/og\/Acer_palmatum_27Nuresagi27_JPG1c.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/83_acer_palmatum_nuresagi\/regular\/Acer_palmatum_27Nuresagi27_JPG1c.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/83_acer_palmatum_nuresagi\/medium\/Acer_palmatum_27Nuresagi27_JPG1c.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/83_acer_palmatum_nuresagi\/small\/Acer_palmatum_27Nuresagi27_JPG1c.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/83_acer_palmatum_nuresagi\/thumbnail\/Acer_palmatum_27Nuresagi27_JPG1c.jpg"
        }
    },
    {
        "id": 84,
        "common_name": "Okagami Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Okagami'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 4,
            "license_name": "Attribution License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/84_acer_palmatum_okagami\/og\/4555737792_4363d30713_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/84_acer_palmatum_okagami\/regular\/4555737792_4363d30713_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/84_acer_palmatum_okagami\/medium\/4555737792_4363d30713_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/84_acer_palmatum_okagami\/small\/4555737792_4363d30713_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/84_acer_palmatum_okagami\/thumbnail\/4555737792_4363d30713_b.jpg"
        }
    },
    {
        "id": 85,
        "common_name": "Okushimo Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Okushimo'"
        ],
        "other_name": [
            "Okushimu",
            "Pepper and Salt Japanese Maple"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/85_acer_palmatum_okushimo\/og\/27477811140_2298882b2f_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/85_acer_palmatum_okushimo\/regular\/27477811140_2298882b2f_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/85_acer_palmatum_okushimo\/medium\/27477811140_2298882b2f_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/85_acer_palmatum_okushimo\/small\/27477811140_2298882b2f_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/85_acer_palmatum_okushimo\/thumbnail\/27477811140_2298882b2f_b.jpg"
        }
    },
    {
        "id": 86,
        "common_name": "Orange Dream Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Orange Dream'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/86_acer_palmatum_orange_dream\/og\/2560px-Acer_palmatum_27Orange_Dream27_-_2020-05-08_-_Andy_Mabbett_-_13.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/86_acer_palmatum_orange_dream\/regular\/2560px-Acer_palmatum_27Orange_Dream27_-_2020-05-08_-_Andy_Mabbett_-_13.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/86_acer_palmatum_orange_dream\/medium\/2560px-Acer_palmatum_27Orange_Dream27_-_2020-05-08_-_Andy_Mabbett_-_13.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/86_acer_palmatum_orange_dream\/small\/2560px-Acer_palmatum_27Orange_Dream27_-_2020-05-08_-_Andy_Mabbett_-_13.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/86_acer_palmatum_orange_dream\/thumbnail\/2560px-Acer_palmatum_27Orange_Dream27_-_2020-05-08_-_Andy_Mabbett_-_13.jpg"
        }
    },
    {
        "id": 87,
        "common_name": "Orangeola Cutleaf Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Orangeola'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/87_acer_palmatum_orangeola\/og\/4714671587_8ecba52560_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/87_acer_palmatum_orangeola\/regular\/4714671587_8ecba52560_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/87_acer_palmatum_orangeola\/medium\/4714671587_8ecba52560_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/87_acer_palmatum_orangeola\/small\/4714671587_8ecba52560_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/87_acer_palmatum_orangeola\/thumbnail\/4714671587_8ecba52560_b.jpg"
        }
    },
    {
        "id": 88,
        "common_name": "Oregon Sunset Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Oregon Sunset'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 451,
            "license_name": "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
            "license_url": "https:\/\/creativecommons.org\/publicdomain\/zero\/1.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/88_acer_palmatum_oregon_sunset\/og\/autumn-leaves-leaves-autumn-the-leaves-deciduous-nature.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/88_acer_palmatum_oregon_sunset\/regular\/autumn-leaves-leaves-autumn-the-leaves-deciduous-nature.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/88_acer_palmatum_oregon_sunset\/medium\/autumn-leaves-leaves-autumn-the-leaves-deciduous-nature.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/88_acer_palmatum_oregon_sunset\/small\/autumn-leaves-leaves-autumn-the-leaves-deciduous-nature.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/88_acer_palmatum_oregon_sunset\/thumbnail\/autumn-leaves-leaves-autumn-the-leaves-deciduous-nature.jpg"
        }
    },
    {
        "id": 89,
        "common_name": "Oridono Nishiki Japanese Maple*",
        "scientific_name": [
            "Acer palmatum 'Oridono Nishiki'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/89_acer_palmatum_oridono_nishiki\/og\/Acer_palmatum_Oridono_nishiki_0zz.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/89_acer_palmatum_oridono_nishiki\/regular\/Acer_palmatum_Oridono_nishiki_0zz.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/89_acer_palmatum_oridono_nishiki\/medium\/Acer_palmatum_Oridono_nishiki_0zz.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/89_acer_palmatum_oridono_nishiki\/small\/Acer_palmatum_Oridono_nishiki_0zz.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/89_acer_palmatum_oridono_nishiki\/thumbnail\/Acer_palmatum_Oridono_nishiki_0zz.jpg"
        }
    },
    {
        "id": 90,
        "common_name": "Ornatum Japanese Maple*",
        "scientific_name": [
            "Acer palmatum 'Ornatum'"
        ],
        "other_name": [
            "Dissectum Ornatum"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/90_acer_palmatum_ornatum\/og\/Acer_palmatum_var._dissectum_Ornatum_1zz.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/90_acer_palmatum_ornatum\/regular\/Acer_palmatum_var._dissectum_Ornatum_1zz.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/90_acer_palmatum_ornatum\/medium\/Acer_palmatum_var._dissectum_Ornatum_1zz.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/90_acer_palmatum_ornatum\/small\/Acer_palmatum_var._dissectum_Ornatum_1zz.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/90_acer_palmatum_ornatum\/thumbnail\/Acer_palmatum_var._dissectum_Ornatum_1zz.jpg"
        }
    },
    {
        "id": 91,
        "common_name": "Osakazuki Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Osakazuki'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 4,
            "license_name": "Attribution License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/91_acer_palmatum_osakazuki\/og\/55257376_8dea2df86d_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/91_acer_palmatum_osakazuki\/regular\/55257376_8dea2df86d_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/91_acer_palmatum_osakazuki\/medium\/55257376_8dea2df86d_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/91_acer_palmatum_osakazuki\/small\/55257376_8dea2df86d_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/91_acer_palmatum_osakazuki\/thumbnail\/55257376_8dea2df86d_b.jpg"
        }
    },
    {
        "id": 92,
        "common_name": "Oshio Beni Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Oshio Beni'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/92_acer_palmatum_oshio_beni\/og\/2560px-Acer_palmatum_27Oshio_beni27_-_JPG3.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/92_acer_palmatum_oshio_beni\/regular\/2560px-Acer_palmatum_27Oshio_beni27_-_JPG3.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/92_acer_palmatum_oshio_beni\/medium\/2560px-Acer_palmatum_27Oshio_beni27_-_JPG3.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/92_acer_palmatum_oshio_beni\/small\/2560px-Acer_palmatum_27Oshio_beni27_-_JPG3.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/92_acer_palmatum_oshio_beni\/thumbnail\/2560px-Acer_palmatum_27Oshio_beni27_-_JPG3.jpg"
        }
    },
    {
        "id": 93,
        "common_name": "Oshu Shidare Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Oshu Shidare'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Frequent",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/93_acer_palmatum_oshu_shidare\/og\/Acer_palmatum_Oshu_shidare_0zz.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/93_acer_palmatum_oshu_shidare\/regular\/Acer_palmatum_Oshu_shidare_0zz.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/93_acer_palmatum_oshu_shidare\/medium\/Acer_palmatum_Oshu_shidare_0zz.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/93_acer_palmatum_oshu_shidare\/small\/Acer_palmatum_Oshu_shidare_0zz.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/93_acer_palmatum_oshu_shidare\/thumbnail\/Acer_palmatum_Oshu_shidare_0zz.jpg"
        }
    },
    {
        "id": 94,
        "common_name": "Otake Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Otake'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Frequent",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/94_acer_palmatum_otake\/og\/2397px-Acer_palmatum_27Ben27Otake27_in_Auckland_Botanic_Gardens_02.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/94_acer_palmatum_otake\/regular\/2397px-Acer_palmatum_27Ben27Otake27_in_Auckland_Botanic_Gardens_02.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/94_acer_palmatum_otake\/medium\/2397px-Acer_palmatum_27Ben27Otake27_in_Auckland_Botanic_Gardens_02.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/94_acer_palmatum_otake\/small\/2397px-Acer_palmatum_27Ben27Otake27_in_Auckland_Botanic_Gardens_02.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/94_acer_palmatum_otake\/thumbnail\/2397px-Acer_palmatum_27Ben27Otake27_in_Auckland_Botanic_Gardens_02.jpg"
        }
    },
    {
        "id": 95,
        "common_name": "Otome Zakura Japanese Maple*",
        "scientific_name": [
            "Acer palmatum 'Otome Zakura'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/95_acer_palmatum_otome_zakura\/og\/Leaves_of_Acer_palmatum_28200529.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/95_acer_palmatum_otome_zakura\/regular\/Leaves_of_Acer_palmatum_28200529.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/95_acer_palmatum_otome_zakura\/medium\/Leaves_of_Acer_palmatum_28200529.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/95_acer_palmatum_otome_zakura\/small\/Leaves_of_Acer_palmatum_28200529.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/95_acer_palmatum_otome_zakura\/thumbnail\/Leaves_of_Acer_palmatum_28200529.jpg"
        }
    },
    {
        "id": 96,
        "common_name": "Palmatifidum Japanese Maple*",
        "scientific_name": [
            "Acer palmatum 'Palmatifidum'"
        ],
        "other_name": [
            "Dissectum Paucum",
            "Wahi-no-o"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/96_acer_palmatum_palmatifidum\/og\/Acer_platanoides_27Palmatifidum27.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/96_acer_palmatum_palmatifidum\/regular\/Acer_platanoides_27Palmatifidum27.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/96_acer_palmatum_palmatifidum\/medium\/Acer_platanoides_27Palmatifidum27.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/96_acer_palmatum_palmatifidum\/small\/Acer_platanoides_27Palmatifidum27.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/96_acer_palmatum_palmatifidum\/thumbnail\/Acer_platanoides_27Palmatifidum27.jpg"
        }
    },
    {
        "id": 97,
        "common_name": "Peaches And Cream Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Peaches And Cream'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Frequent",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": null
    },
    {
        "id": 98,
        "common_name": "Pendulum Julian Japanese Maple*",
        "scientific_name": [
            "Acer palmatum 'Pendulum Julian'"
        ],
        "other_name": [
            "Julian Dissectum"
        ],
        "cycle": "Perennial",
        "watering": "Frequent",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/98_acer_palmatum_pendulum_julian\/og\/Acer_palmatum_var._dissectum_27Inaba-shidare27.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/98_acer_palmatum_pendulum_julian\/regular\/Acer_palmatum_var._dissectum_27Inaba-shidare27.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/98_acer_palmatum_pendulum_julian\/medium\/Acer_palmatum_var._dissectum_27Inaba-shidare27.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/98_acer_palmatum_pendulum_julian\/small\/Acer_palmatum_var._dissectum_27Inaba-shidare27.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/98_acer_palmatum_pendulum_julian\/thumbnail\/Acer_palmatum_var._dissectum_27Inaba-shidare27.jpg"
        }
    },
    {
        "id": 99,
        "common_name": "Pink Lace Japanese Maple*",
        "scientific_name": [
            "Acer palmatum 'Pink Lace'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Frequent",
        "sunlight": [
            "full sun"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/99_acer_palmatum_pink_lace\/og\/Acer_palmatum_27Inaba_Shidare27_in_autumn_sunshine_-_2021-10-17_-_Andy_Mabbett_-_02.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/99_acer_palmatum_pink_lace\/regular\/Acer_palmatum_27Inaba_Shidare27_in_autumn_sunshine_-_2021-10-17_-_Andy_Mabbett_-_02.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/99_acer_palmatum_pink_lace\/medium\/Acer_palmatum_27Inaba_Shidare27_in_autumn_sunshine_-_2021-10-17_-_Andy_Mabbett_-_02.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/99_acer_palmatum_pink_lace\/small\/Acer_palmatum_27Inaba_Shidare27_in_autumn_sunshine_-_2021-10-17_-_Andy_Mabbett_-_02.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/99_acer_palmatum_pink_lace\/thumbnail\/Acer_palmatum_27Inaba_Shidare27_in_autumn_sunshine_-_2021-10-17_-_Andy_Mabbett_-_02.jpg"
        }
    },
    {
        "id": 100,
        "common_name": "Pixie Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Pixie'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/100_acer_palmatum_pixie\/og\/Acer_palmatum_27Oshio_beni27_-_JPG2.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/100_acer_palmatum_pixie\/regular\/Acer_palmatum_27Oshio_beni27_-_JPG2.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/100_acer_palmatum_pixie\/medium\/Acer_palmatum_27Oshio_beni27_-_JPG2.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/100_acer_palmatum_pixie\/small\/Acer_palmatum_27Oshio_beni27_-_JPG2.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/100_acer_palmatum_pixie\/thumbnail\/Acer_palmatum_27Oshio_beni27_-_JPG2.jpg"
        }
    },
    {
        "id": 101,
        "common_name": "Purple Ghost Japanese Maple*",
        "scientific_name": [
            "Acer palmatum 'Purple Ghost'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 4,
            "license_name": "Attribution License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/101_acer_palmatum_purple_ghost\/og\/6886992806_f55f1a8613_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/101_acer_palmatum_purple_ghost\/regular\/6886992806_f55f1a8613_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/101_acer_palmatum_purple_ghost\/medium\/6886992806_f55f1a8613_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/101_acer_palmatum_purple_ghost\/small\/6886992806_f55f1a8613_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/101_acer_palmatum_purple_ghost\/thumbnail\/6886992806_f55f1a8613_b.jpg"
        }
    },
    {
        "id": 102,
        "common_name": "Red Dragon Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Red Dragon'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/102_acer_palmatum_red_dragon\/og\/4847966614_089c83b489_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/102_acer_palmatum_red_dragon\/regular\/4847966614_089c83b489_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/102_acer_palmatum_red_dragon\/medium\/4847966614_089c83b489_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/102_acer_palmatum_red_dragon\/small\/4847966614_089c83b489_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/102_acer_palmatum_red_dragon\/thumbnail\/4847966614_089c83b489_b.jpg"
        }
    },
    {
        "id": 103,
        "common_name": "Red Feathers Japanese Maple*",
        "scientific_name": [
            "Acer palmatum 'Red Feathers'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 451,
            "license_name": "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
            "license_url": "https:\/\/creativecommons.org\/publicdomain\/zero\/1.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/103_acer_palmatum_red_feathers\/og\/pexels-photo-8065044.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/103_acer_palmatum_red_feathers\/regular\/pexels-photo-8065044.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/103_acer_palmatum_red_feathers\/medium\/pexels-photo-8065044.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/103_acer_palmatum_red_feathers\/small\/pexels-photo-8065044.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/103_acer_palmatum_red_feathers\/thumbnail\/pexels-photo-8065044.jpg"
        }
    },
    {
        "id": 104,
        "common_name": "Red Filigree Lace Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Red Filigree Lace'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/104_acer_palmatum_red_filigree_lace\/og\/Crimson_Queen_Japanese_Maple_plants_growing_in_NJ_in_April.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/104_acer_palmatum_red_filigree_lace\/regular\/Crimson_Queen_Japanese_Maple_plants_growing_in_NJ_in_April.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/104_acer_palmatum_red_filigree_lace\/medium\/Crimson_Queen_Japanese_Maple_plants_growing_in_NJ_in_April.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/104_acer_palmatum_red_filigree_lace\/small\/Crimson_Queen_Japanese_Maple_plants_growing_in_NJ_in_April.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/104_acer_palmatum_red_filigree_lace\/thumbnail\/Crimson_Queen_Japanese_Maple_plants_growing_in_NJ_in_April.jpg"
        }
    },
    {
        "id": 105,
        "common_name": "Dwarf Red Pygmy Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Red Pygmy'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/105_acer_palmatum_red_pygmy\/og\/800px-Acer_Palmatum_27Red_Pygmy27.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/105_acer_palmatum_red_pygmy\/regular\/800px-Acer_Palmatum_27Red_Pygmy27.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/105_acer_palmatum_red_pygmy\/medium\/800px-Acer_Palmatum_27Red_Pygmy27.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/105_acer_palmatum_red_pygmy\/small\/800px-Acer_Palmatum_27Red_Pygmy27.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/105_acer_palmatum_red_pygmy\/thumbnail\/800px-Acer_Palmatum_27Red_Pygmy27.jpg"
        }
    },
    {
        "id": 106,
        "common_name": "Red Select Japanese Maple*",
        "scientific_name": [
            "Acer palmatum 'Red Select'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Frequent",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/106_acer_palmatum_red_select\/og\/Acer_palmatum_27Burgundy_lace_JPG1A.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/106_acer_palmatum_red_select\/regular\/Acer_palmatum_27Burgundy_lace_JPG1A.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/106_acer_palmatum_red_select\/medium\/Acer_palmatum_27Burgundy_lace_JPG1A.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/106_acer_palmatum_red_select\/small\/Acer_palmatum_27Burgundy_lace_JPG1A.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/106_acer_palmatum_red_select\/thumbnail\/Acer_palmatum_27Burgundy_lace_JPG1A.jpg"
        }
    },
    {
        "id": 107,
        "common_name": "Rhode Island Red Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Rhode Island Red'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 4,
            "license_name": "Attribution License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/107_acer_palmatum_rhode_island_red\/og\/16805737339_d92eafd674_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/107_acer_palmatum_rhode_island_red\/regular\/16805737339_d92eafd674_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/107_acer_palmatum_rhode_island_red\/medium\/16805737339_d92eafd674_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/107_acer_palmatum_rhode_island_red\/small\/16805737339_d92eafd674_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/107_acer_palmatum_rhode_island_red\/thumbnail\/16805737339_d92eafd674_b.jpg"
        }
    },
    {
        "id": 108,
        "common_name": "Ruby Ridge Japanese Maple*",
        "scientific_name": [
            "Acer palmatum 'Ruby Ridge'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 451,
            "license_name": "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
            "license_url": "https:\/\/creativecommons.org\/publicdomain\/zero\/1.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/108_acer_palmatum_ruby_ridge\/og\/sk3776-image-kwvuoab1.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/108_acer_palmatum_ruby_ridge\/regular\/sk3776-image-kwvuoab1.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/108_acer_palmatum_ruby_ridge\/medium\/sk3776-image-kwvuoab1.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/108_acer_palmatum_ruby_ridge\/small\/sk3776-image-kwvuoab1.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/108_acer_palmatum_ruby_ridge\/thumbnail\/sk3776-image-kwvuoab1.jpg"
        }
    },
    {
        "id": 109,
        "common_name": "Ruby Stars Japanese Maple*",
        "scientific_name": [
            "Acer palmatum 'Ruby Stars'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": null
    },
    {
        "id": 110,
        "common_name": "Ruslyn In The Pink Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Ruslyn In The Pink'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Frequent",
        "sunlight": [
            "part sun\/part shade",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/110_acer_palmatum_ruslyn_in_the_pink\/og\/Acer_palmatum_var_amoenum_cv_Sanguineum2.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/110_acer_palmatum_ruslyn_in_the_pink\/regular\/Acer_palmatum_var_amoenum_cv_Sanguineum2.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/110_acer_palmatum_ruslyn_in_the_pink\/medium\/Acer_palmatum_var_amoenum_cv_Sanguineum2.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/110_acer_palmatum_ruslyn_in_the_pink\/small\/Acer_palmatum_var_amoenum_cv_Sanguineum2.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/110_acer_palmatum_ruslyn_in_the_pink\/thumbnail\/Acer_palmatum_var_amoenum_cv_Sanguineum2.jpg"
        }
    },
    {
        "id": 111,
        "common_name": "Ryusen Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Ryusen'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/111_acer_palmatum_ryusen\/og\/26170793293_62330077e4_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/111_acer_palmatum_ryusen\/regular\/26170793293_62330077e4_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/111_acer_palmatum_ryusen\/medium\/26170793293_62330077e4_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/111_acer_palmatum_ryusen\/small\/26170793293_62330077e4_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/111_acer_palmatum_ryusen\/thumbnail\/26170793293_62330077e4_b.jpg"
        }
    },
    {
        "id": 112,
        "common_name": "Sagara Nishiki Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Sagara Nishiki'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": null
    },
    {
        "id": 113,
        "common_name": "Samurai Sword Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Samarzam'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 451,
            "license_name": "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
            "license_url": "https:\/\/creativecommons.org\/publicdomain\/zero\/1.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/113_acer_palmatum_samarzam\/og\/sk3776-image-kwvuoab1.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/113_acer_palmatum_samarzam\/regular\/sk3776-image-kwvuoab1.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/113_acer_palmatum_samarzam\/medium\/sk3776-image-kwvuoab1.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/113_acer_palmatum_samarzam\/small\/sk3776-image-kwvuoab1.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/113_acer_palmatum_samarzam\/thumbnail\/sk3776-image-kwvuoab1.jpg"
        }
    },
    {
        "id": 114,
        "common_name": "Coral Bark Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Sango Kaku'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 4,
            "license_name": "Attribution License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/114_acer_palmatum_sango_kaku\/og\/50036749928_86277e5884_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/114_acer_palmatum_sango_kaku\/regular\/50036749928_86277e5884_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/114_acer_palmatum_sango_kaku\/medium\/50036749928_86277e5884_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/114_acer_palmatum_sango_kaku\/small\/50036749928_86277e5884_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/114_acer_palmatum_sango_kaku\/thumbnail\/50036749928_86277e5884_b.jpg"
        }
    },
    {
        "id": 115,
        "common_name": "Sazanami Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Sazanami'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 451,
            "license_name": "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
            "license_url": "https:\/\/creativecommons.org\/publicdomain\/zero\/1.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/115_acer_palmatum_sazanami\/og\/foliage_green_branch_plant_plants_sheet_japanese_maple-1130713.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/115_acer_palmatum_sazanami\/regular\/foliage_green_branch_plant_plants_sheet_japanese_maple-1130713.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/115_acer_palmatum_sazanami\/medium\/foliage_green_branch_plant_plants_sheet_japanese_maple-1130713.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/115_acer_palmatum_sazanami\/small\/foliage_green_branch_plant_plants_sheet_japanese_maple-1130713.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/115_acer_palmatum_sazanami\/thumbnail\/foliage_green_branch_plant_plants_sheet_japanese_maple-1130713.jpg"
        }
    },
    {
        "id": 116,
        "common_name": "Scolopendrifolium Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Scolopendrifolium'"
        ],
        "other_name": [
            "Scolopendrifolium Rubrum",
            "Atrolineare"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/116_acer_palmatum_scolopendrifolium\/og\/Acer_palmatum_Scolopendrifolium_0zz.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/116_acer_palmatum_scolopendrifolium\/regular\/Acer_palmatum_Scolopendrifolium_0zz.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/116_acer_palmatum_scolopendrifolium\/medium\/Acer_palmatum_Scolopendrifolium_0zz.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/116_acer_palmatum_scolopendrifolium\/small\/Acer_palmatum_Scolopendrifolium_0zz.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/116_acer_palmatum_scolopendrifolium\/thumbnail\/Acer_palmatum_Scolopendrifolium_0zz.jpg"
        }
    },
    {
        "id": 117,
        "common_name": "Seiryu Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Seiryu'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Frequent",
        "sunlight": [
            "part sun\/part shade"
        ],
        "default_image": {
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/117_acer_palmatum_seiryu\/og\/24996540407_3b910e979d_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/117_acer_palmatum_seiryu\/regular\/24996540407_3b910e979d_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/117_acer_palmatum_seiryu\/medium\/24996540407_3b910e979d_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/117_acer_palmatum_seiryu\/small\/24996540407_3b910e979d_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/117_acer_palmatum_seiryu\/thumbnail\/24996540407_3b910e979d_b.jpg"
        }
    },
    {
        "id": 118,
        "common_name": "Shaina Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Shaina'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/118_acer_palmatum_shaina\/og\/2560px-Acer_palmatum_27Shaina27_in_Christchurch_Botanic_Gardens_02.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/118_acer_palmatum_shaina\/regular\/2560px-Acer_palmatum_27Shaina27_in_Christchurch_Botanic_Gardens_02.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/118_acer_palmatum_shaina\/medium\/2560px-Acer_palmatum_27Shaina27_in_Christchurch_Botanic_Gardens_02.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/118_acer_palmatum_shaina\/small\/2560px-Acer_palmatum_27Shaina27_in_Christchurch_Botanic_Gardens_02.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/118_acer_palmatum_shaina\/thumbnail\/2560px-Acer_palmatum_27Shaina27_in_Christchurch_Botanic_Gardens_02.jpg"
        }
    },
    {
        "id": 119,
        "common_name": "Sherwood Elfin Japanese Maple*",
        "scientific_name": [
            "Acer palmatum 'Sherwood Elfin'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/119_acer_palmatum_sherwood_elfin\/og\/Acer_palmatum_10_by_Line1.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/119_acer_palmatum_sherwood_elfin\/regular\/Acer_palmatum_10_by_Line1.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/119_acer_palmatum_sherwood_elfin\/medium\/Acer_palmatum_10_by_Line1.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/119_acer_palmatum_sherwood_elfin\/small\/Acer_palmatum_10_by_Line1.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/119_acer_palmatum_sherwood_elfin\/thumbnail\/Acer_palmatum_10_by_Line1.jpg"
        }
    },
    {
        "id": 120,
        "common_name": "Sherwood Flame Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Sherwood Flame'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 4,
            "license_name": "Attribution License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/120_acer_palmatum_sherwood_flame\/og\/43548598614_3fdf490bfb_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/120_acer_palmatum_sherwood_flame\/regular\/43548598614_3fdf490bfb_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/120_acer_palmatum_sherwood_flame\/medium\/43548598614_3fdf490bfb_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/120_acer_palmatum_sherwood_flame\/small\/43548598614_3fdf490bfb_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/120_acer_palmatum_sherwood_flame\/thumbnail\/43548598614_3fdf490bfb_b.jpg"
        }
    },
    {
        "id": 121,
        "common_name": "Shindeshojo Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Shindeshojo'"
        ],
        "other_name": [
            "Shin Deshojo"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 4,
            "license_name": "Attribution License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/121_acer_palmatum_shindeshojo\/og\/5827311526_cd9a9096a0_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/121_acer_palmatum_shindeshojo\/regular\/5827311526_cd9a9096a0_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/121_acer_palmatum_shindeshojo\/medium\/5827311526_cd9a9096a0_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/121_acer_palmatum_shindeshojo\/small\/5827311526_cd9a9096a0_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/121_acer_palmatum_shindeshojo\/thumbnail\/5827311526_cd9a9096a0_b.jpg"
        }
    },
    {
        "id": 122,
        "common_name": "Shinobuga Oka Japanese Maple*",
        "scientific_name": [
            "Acer palmatum 'Shinobuga Oka'"
        ],
        "other_name": [
            "Shinobu Ga Oka",
            "Shino Buga Oka Japanese Maple"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun"
        ],
        "default_image": null
    },
    {
        "id": 123,
        "common_name": "Lions Head Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Shishigashira'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/123_acer_palmatum_shishigashira\/og\/4847315016_26a7119afa_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/123_acer_palmatum_shishigashira\/regular\/4847315016_26a7119afa_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/123_acer_palmatum_shishigashira\/medium\/4847315016_26a7119afa_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/123_acer_palmatum_shishigashira\/small\/4847315016_26a7119afa_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/123_acer_palmatum_shishigashira\/thumbnail\/4847315016_26a7119afa_b.jpg"
        }
    },
    {
        "id": 124,
        "common_name": "Shishio Hime Japanese Maple*",
        "scientific_name": [
            "Acer palmatum 'Shishio Hime'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Frequent",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 451,
            "license_name": "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
            "license_url": "https:\/\/creativecommons.org\/publicdomain\/zero\/1.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/124_acer_palmatum_shishio_hime\/og\/3ea9ddf894f766d45ef848c98b9a-1424381.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/124_acer_palmatum_shishio_hime\/regular\/3ea9ddf894f766d45ef848c98b9a-1424381.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/124_acer_palmatum_shishio_hime\/medium\/3ea9ddf894f766d45ef848c98b9a-1424381.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/124_acer_palmatum_shishio_hime\/small\/3ea9ddf894f766d45ef848c98b9a-1424381.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/124_acer_palmatum_shishio_hime\/thumbnail\/3ea9ddf894f766d45ef848c98b9a-1424381.jpg"
        }
    },
    {
        "id": 125,
        "common_name": "Spring Delight Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Spring Delight'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/125_acer_palmatum_spring_delight\/og\/Acer_palmatum_Eddisbury_-_Flickr_-_peganum_28129.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/125_acer_palmatum_spring_delight\/regular\/Acer_palmatum_Eddisbury_-_Flickr_-_peganum_28129.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/125_acer_palmatum_spring_delight\/medium\/Acer_palmatum_Eddisbury_-_Flickr_-_peganum_28129.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/125_acer_palmatum_spring_delight\/small\/Acer_palmatum_Eddisbury_-_Flickr_-_peganum_28129.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/125_acer_palmatum_spring_delight\/thumbnail\/Acer_palmatum_Eddisbury_-_Flickr_-_peganum_28129.jpg"
        }
    },
    {
        "id": 126,
        "common_name": "Suminagashi Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Suminagashi'"
        ],
        "other_name": [
            "Sumi Nagashi"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 451,
            "license_name": "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
            "license_url": "https:\/\/creativecommons.org\/publicdomain\/zero\/1.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/126_acer_palmatum_suminagashi\/og\/japanese-maple-fall-color-leaves-red.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/126_acer_palmatum_suminagashi\/regular\/japanese-maple-fall-color-leaves-red.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/126_acer_palmatum_suminagashi\/medium\/japanese-maple-fall-color-leaves-red.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/126_acer_palmatum_suminagashi\/small\/japanese-maple-fall-color-leaves-red.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/126_acer_palmatum_suminagashi\/thumbnail\/japanese-maple-fall-color-leaves-red.jpg"
        }
    },
    {
        "id": 127,
        "common_name": "Tama Hime Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Tama Hime'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Frequent",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 4,
            "license_name": "Attribution License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/127_acer_palmatum_tama_hime\/og\/3467420590_a48a005ba1_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/127_acer_palmatum_tama_hime\/regular\/3467420590_a48a005ba1_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/127_acer_palmatum_tama_hime\/medium\/3467420590_a48a005ba1_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/127_acer_palmatum_tama_hime\/small\/3467420590_a48a005ba1_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/127_acer_palmatum_tama_hime\/thumbnail\/3467420590_a48a005ba1_b.jpg"
        }
    },
    {
        "id": 128,
        "common_name": "Tamukeyama Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Tamukeyama'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/128_acer_palmatum_tamukeyama\/og\/Acer_palmatum_27Tamukeyama27_at_Coker_Arboretum.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/128_acer_palmatum_tamukeyama\/regular\/Acer_palmatum_27Tamukeyama27_at_Coker_Arboretum.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/128_acer_palmatum_tamukeyama\/medium\/Acer_palmatum_27Tamukeyama27_at_Coker_Arboretum.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/128_acer_palmatum_tamukeyama\/small\/Acer_palmatum_27Tamukeyama27_at_Coker_Arboretum.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/128_acer_palmatum_tamukeyama\/thumbnail\/Acer_palmatum_27Tamukeyama27_at_Coker_Arboretum.jpg"
        }
    },
    {
        "id": 129,
        "common_name": "Tana Japanese Maple*",
        "scientific_name": [
            "Acer palmatum 'Tana'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/129_acer_palmatum_tana\/og\/Acer_palmatum_subsp._amoenum_in_Hackfalls_Arboretum_28229.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/129_acer_palmatum_tana\/regular\/Acer_palmatum_subsp._amoenum_in_Hackfalls_Arboretum_28229.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/129_acer_palmatum_tana\/medium\/Acer_palmatum_subsp._amoenum_in_Hackfalls_Arboretum_28229.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/129_acer_palmatum_tana\/small\/Acer_palmatum_subsp._amoenum_in_Hackfalls_Arboretum_28229.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/129_acer_palmatum_tana\/thumbnail\/Acer_palmatum_subsp._amoenum_in_Hackfalls_Arboretum_28229.jpg"
        }
    },
    {
        "id": 130,
        "common_name": "Tobiosho Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Tobiosho'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Frequent",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/130_acer_palmatum_tobiosho\/og\/Acer_palmatum_27Elegans27_JPG1L.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/130_acer_palmatum_tobiosho\/regular\/Acer_palmatum_27Elegans27_JPG1L.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/130_acer_palmatum_tobiosho\/medium\/Acer_palmatum_27Elegans27_JPG1L.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/130_acer_palmatum_tobiosho\/small\/Acer_palmatum_27Elegans27_JPG1L.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/130_acer_palmatum_tobiosho\/thumbnail\/Acer_palmatum_27Elegans27_JPG1L.jpg"
        }
    },
    {
        "id": 131,
        "common_name": "Trompenburg Japanese Maple*",
        "scientific_name": [
            "Acer palmatum 'Trompenburg'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 451,
            "license_name": "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
            "license_url": "https:\/\/creativecommons.org\/publicdomain\/zero\/1.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/131_acer_palmatum_trompenburg\/og\/japanese-maple-leaves-new-tree-ornamental-plant-red.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/131_acer_palmatum_trompenburg\/regular\/japanese-maple-leaves-new-tree-ornamental-plant-red.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/131_acer_palmatum_trompenburg\/medium\/japanese-maple-leaves-new-tree-ornamental-plant-red.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/131_acer_palmatum_trompenburg\/small\/japanese-maple-leaves-new-tree-ornamental-plant-red.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/131_acer_palmatum_trompenburg\/thumbnail\/japanese-maple-leaves-new-tree-ornamental-plant-red.jpg"
        }
    },
    {
        "id": 132,
        "common_name": "Tsukasa Silhouette Japanese Maple*",
        "scientific_name": [
            "Acer palmatum 'Tsukasa Silhouette'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/132_acer_palmatum_tsukasa_silhouette\/og\/Acer_palmatum_Eddisbury_-_Flickr_-_peganum.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/132_acer_palmatum_tsukasa_silhouette\/regular\/Acer_palmatum_Eddisbury_-_Flickr_-_peganum.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/132_acer_palmatum_tsukasa_silhouette\/medium\/Acer_palmatum_Eddisbury_-_Flickr_-_peganum.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/132_acer_palmatum_tsukasa_silhouette\/small\/Acer_palmatum_Eddisbury_-_Flickr_-_peganum.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/132_acer_palmatum_tsukasa_silhouette\/thumbnail\/Acer_palmatum_Eddisbury_-_Flickr_-_peganum.jpg"
        }
    },
    {
        "id": 133,
        "common_name": "Tsuma Gaki Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Tsuma Gaki'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Frequent",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": null
    },
    {
        "id": 134,
        "common_name": "Tsuri Nishiki Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Tsuri Nishiki'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": null
    },
    {
        "id": 135,
        "common_name": "Twombly's Red Sentinel Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Twombly's Red Sentinel'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 9,
            "license_name": "Public Domain Dedication (CC0)",
            "license_url": "https:\/\/creativecommons.org\/publicdomain\/zero\/1.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/135_acer_palmatum_twomblys_red_sentinel\/og\/33757558900_958207d989_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/135_acer_palmatum_twomblys_red_sentinel\/regular\/33757558900_958207d989_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/135_acer_palmatum_twomblys_red_sentinel\/medium\/33757558900_958207d989_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/135_acer_palmatum_twomblys_red_sentinel\/small\/33757558900_958207d989_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/135_acer_palmatum_twomblys_red_sentinel\/thumbnail\/33757558900_958207d989_b.jpg"
        }
    },
    {
        "id": 136,
        "common_name": "Ueno Homare Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Ueno Homare'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Frequent",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 451,
            "license_name": "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
            "license_url": "https:\/\/creativecommons.org\/publicdomain\/zero\/1.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/136_acer_palmatum_ueno_homare\/og\/3ea9ddf894f766d45ef848c98b9a-1424381.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/136_acer_palmatum_ueno_homare\/regular\/3ea9ddf894f766d45ef848c98b9a-1424381.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/136_acer_palmatum_ueno_homare\/medium\/3ea9ddf894f766d45ef848c98b9a-1424381.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/136_acer_palmatum_ueno_homare\/small\/3ea9ddf894f766d45ef848c98b9a-1424381.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/136_acer_palmatum_ueno_homare\/thumbnail\/3ea9ddf894f766d45ef848c98b9a-1424381.jpg"
        }
    },
    {
        "id": 137,
        "common_name": "Floating Cloud Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Ukigumo'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Frequent",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/137_acer_palmatum_ukigumo\/og\/4845850971_a6f376a12a_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/137_acer_palmatum_ukigumo\/regular\/4845850971_a6f376a12a_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/137_acer_palmatum_ukigumo\/medium\/4845850971_a6f376a12a_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/137_acer_palmatum_ukigumo\/small\/4845850971_a6f376a12a_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/137_acer_palmatum_ukigumo\/thumbnail\/4845850971_a6f376a12a_b.jpg"
        }
    },
    {
        "id": 138,
        "common_name": "Utsu Semi Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Utsu Semi'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/138_acer_palmatum_utsu_semi\/og\/Acer_palmatum_Klon_palmowy_2019-05-26_05.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/138_acer_palmatum_utsu_semi\/regular\/Acer_palmatum_Klon_palmowy_2019-05-26_05.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/138_acer_palmatum_utsu_semi\/medium\/Acer_palmatum_Klon_palmowy_2019-05-26_05.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/138_acer_palmatum_utsu_semi\/small\/Acer_palmatum_Klon_palmowy_2019-05-26_05.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/138_acer_palmatum_utsu_semi\/thumbnail\/Acer_palmatum_Klon_palmowy_2019-05-26_05.jpg"
        }
    },
    {
        "id": 139,
        "common_name": "Villa Taranto Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Villa Taranto'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": null
    },
    {
        "id": 140,
        "common_name": "Wilson's Pink Dwarf Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Wilson's Pink Dwarf'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": null
    },
    {
        "id": 141,
        "common_name": "Emperor I Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Wolff'"
        ],
        "other_name": [
            "Emperor 1"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/141_acer_palmatum_wolff\/og\/47923603098_bdbd6f53f0_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/141_acer_palmatum_wolff\/regular\/47923603098_bdbd6f53f0_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/141_acer_palmatum_wolff\/medium\/47923603098_bdbd6f53f0_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/141_acer_palmatum_wolff\/small\/47923603098_bdbd6f53f0_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/141_acer_palmatum_wolff\/thumbnail\/47923603098_bdbd6f53f0_b.jpg"
        }
    },
    {
        "id": 142,
        "common_name": "Yellow Bird Japanese Maple",
        "scientific_name": [
            "Acer palmatum 'Yellow Bird'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": null
    },
    {
        "id": 143,
        "common_name": "Yubae Japanese Maple*",
        "scientific_name": [
            "Acer palmatum 'Yubae'"
        ],
        "other_name": [
            "Evening Glow Japanese Maple"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 4,
            "license_name": "Attribution License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/143_acer_palmatum_yubae\/og\/51150061025_29f690d490_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/143_acer_palmatum_yubae\/regular\/51150061025_29f690d490_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/143_acer_palmatum_yubae\/medium\/51150061025_29f690d490_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/143_acer_palmatum_yubae\/small\/51150061025_29f690d490_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/143_acer_palmatum_yubae\/thumbnail\/51150061025_29f690d490_b.jpg"
        }
    },
    {
        "id": 144,
        "common_name": "Moosewood",
        "scientific_name": [
            "Acer pensylvanicum"
        ],
        "other_name": [
            "Striped Maple",
            "Snakebark Maple",
            "Moose Maple",
            "Whistlewood",
            "Goosefoot Maple"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 4,
            "license_name": "Attribution License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/144_acer_pensylvanicum\/og\/50159672678_a016bd18b9_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/144_acer_pensylvanicum\/regular\/50159672678_a016bd18b9_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/144_acer_pensylvanicum\/medium\/50159672678_a016bd18b9_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/144_acer_pensylvanicum\/small\/50159672678_a016bd18b9_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/144_acer_pensylvanicum\/thumbnail\/50159672678_a016bd18b9_b.jpg"
        }
    },
    {
        "id": 145,
        "common_name": "Crimson King Norway Maple",
        "scientific_name": [
            "Acer platanoides 'Crimson King'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "part sun\/part shade",
            "full sun"
        ],
        "default_image": {
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/145_acer_platanoides_crimson_king\/og\/35279593622_dbffc5f94b_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/145_acer_platanoides_crimson_king\/regular\/35279593622_dbffc5f94b_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/145_acer_platanoides_crimson_king\/medium\/35279593622_dbffc5f94b_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/145_acer_platanoides_crimson_king\/small\/35279593622_dbffc5f94b_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/145_acer_platanoides_crimson_king\/thumbnail\/35279593622_dbffc5f94b_b.jpg"
        }
    },
    {
        "id": 146,
        "common_name": "Crimson Sentry Norway Maple",
        "scientific_name": [
            "Acer platanoides 'Crimson Sentry'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part sun\/part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/146_acer_platanoides_crimson_sentry\/og\/Acer_platanoides_Faassen27s_Black_kz1.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/146_acer_platanoides_crimson_sentry\/regular\/Acer_platanoides_Faassen27s_Black_kz1.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/146_acer_platanoides_crimson_sentry\/medium\/Acer_platanoides_Faassen27s_Black_kz1.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/146_acer_platanoides_crimson_sentry\/small\/Acer_platanoides_Faassen27s_Black_kz1.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/146_acer_platanoides_crimson_sentry\/thumbnail\/Acer_platanoides_Faassen27s_Black_kz1.jpg"
        }
    },
    {
        "id": 147,
        "common_name": "Harlequin Norway Maple",
        "scientific_name": [
            "Acer platanoides 'Drummondii'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Minimum",
        "sunlight": [
            "full sun",
            "part sun\/part shade"
        ],
        "default_image": {
            "license": 4,
            "license_name": "Attribution License",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by\/2.0\/",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/147_acer_platanoides_drummondii\/og\/10840118873_cc5e8da787_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/147_acer_platanoides_drummondii\/regular\/10840118873_cc5e8da787_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/147_acer_platanoides_drummondii\/medium\/10840118873_cc5e8da787_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/147_acer_platanoides_drummondii\/small\/10840118873_cc5e8da787_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/147_acer_platanoides_drummondii\/thumbnail\/10840118873_cc5e8da787_b.jpg"
        }
    },
    {
        "id": 148,
        "common_name": "Emerald Queen Norway Maple",
        "scientific_name": [
            "Acer platanoides 'Emerald Queen'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part sun\/part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/148_acer_platanoides_emerald_queen\/og\/Acer_saccharum_28Sugar_maple29_282692405476329.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/148_acer_platanoides_emerald_queen\/regular\/Acer_saccharum_28Sugar_maple29_282692405476329.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/148_acer_platanoides_emerald_queen\/medium\/Acer_saccharum_28Sugar_maple29_282692405476329.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/148_acer_platanoides_emerald_queen\/small\/Acer_saccharum_28Sugar_maple29_282692405476329.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/148_acer_platanoides_emerald_queen\/thumbnail\/Acer_saccharum_28Sugar_maple29_282692405476329.jpg"
        }
    },
    {
        "id": 149,
        "common_name": "Princeton Gold Maple",
        "scientific_name": [
            "Acer platanoides 'Princeton Gold'"
        ],
        "other_name": [],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part sun\/part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/149_acer_platanoides_princeton_gold\/og\/Acer_27Golden_Globe27_02.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/149_acer_platanoides_princeton_gold\/regular\/Acer_27Golden_Globe27_02.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/149_acer_platanoides_princeton_gold\/medium\/Acer_27Golden_Globe27_02.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/149_acer_platanoides_princeton_gold\/small\/Acer_27Golden_Globe27_02.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/149_acer_platanoides_princeton_gold\/thumbnail\/Acer_27Golden_Globe27_02.jpg"
        }
    },
    {
        "id": 150,
        "common_name": "Eskimo Sunset Sycamore Maple",
        "scientific_name": [
            "Acer pseudoplatanus 'Eskimo Sunset'"
        ],
        "other_name": [
            "Planetree Maple"
        ],
        "cycle": "Perennial",
        "watering": "Average",
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/deed.en",
            "original_url": "https:\/\/perenual.com\/storage\/species_image\/150_acer_pseudoplatanus_eskimo_sunset\/og\/Acer_pseudoplatanus_27Nizetii27_b.jpg",
            "regular_url": "https:\/\/perenual.com\/storage\/species_image\/150_acer_pseudoplatanus_eskimo_sunset\/regular\/Acer_pseudoplatanus_27Nizetii27_b.jpg",
            "medium_url": "https:\/\/perenual.com\/storage\/species_image\/150_acer_pseudoplatanus_eskimo_sunset\/medium\/Acer_pseudoplatanus_27Nizetii27_b.jpg",
            "small_url": "https:\/\/perenual.com\/storage\/species_image\/150_acer_pseudoplatanus_eskimo_sunset\/small\/Acer_pseudoplatanus_27Nizetii27_b.jpg",
            "thumbnail": "https:\/\/perenual.com\/storage\/species_image\/150_acer_pseudoplatanus_eskimo_sunset\/thumbnail\/Acer_pseudoplatanus_27Nizetii27_b.jpg"
        }
    }
]


const hoverAnimString = `transition ease-in-out duration-100 hover:translate-y-1 hover:scale-[110%] antialiased hover:subpixel-antialiased`

//const fs = require('fs');
const populateImageGrid = () => {


    let grid = $('#resultsGrid');
    grid.empty();
    plantsArr.forEach(plant => {
        let card = generateElement("div", { id: plant.id, class: `flex flex-wrap justify-center items-center text-center ${hoverAnimString}` });
        // add event listener for click!!!!!!!!!!!! will nav to plant details page
        if (plant.default_image) {
            let thumbnail = plant.default_image.regular_url ? plant.default_image.regular_url : plant.default_image.original_url ? plant.default_image.original_url : plant.default_image.medium_url ? plant.default_image.medium_url : plant.default_image.small_url ? plant.default_image.small_url : plant.default_image.thumbnail ? plant.default_image.thumbnail : null;
            const imgAttr = {
                id: `plantID${plant.id}`,
                src: thumbnail,
                alt: `Image of ${plant.common_name}`,
                class: "rounded-md"
            }
            let img = generateElement('img', imgAttr)
            const labelAttr = {
                id: `plantID${plant.id}`,
    
                class: "w-full pt-2 text-s "
            }
            let label = generateElement('div', labelAttr);
            label.html(plant.common_name)
            card.append([img, label]);
            grid.append(card);
        }
        //      thumbnail = thumbnail ? 
        //        debugger;
        //    thumbnail = thumbnail.replaceAll("\\", "");
       
    });
    /*
       fs.readFile("./plants.json", 'utf8', (err, data) => {
           if (err) {
               reject(err);
           } else {
               const plants = JSON.parse(data);
               plants.foreach(plant => {
                   let card = generateElement("div", { id: plant.id, class: "flex flex-wrap justify-center text-center" });
                   // add event listener for click
                   const imgAttr = {
                       id: `plantID${plant.id}`,
                       src: plant.thumbnail,
                       alt: `Thumbnail image of ${plant.common_name}`,
                       class: "rounded-md"
                   }
                   let img = generateElement('img', imgAttr)
                   const labelAttr = {
                       id: `plantID${plant.id}`,
   
                       class: "w-full pt-2 text-s "
                   }
                   let label = generateElement('div', attr);
                   label.text = plant.common_name;
                   card.append([img, label]);
                   gird.append(card);
               })
               //console.log(JSON.parse(data));
               //return JSON.parse(data);
           }
       });*/
}