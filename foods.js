/**
 * foods.js — Database Pangan Indonesia (TKPI 2019 Kemenkes RI + Pilihan Populer)
 * Sumber: https://github.com/ibobatsuga/darya-nutrition-db.git
 */
window.mockFoodDB = [
  {
    "name": "Nasi Putih (1 Porsi / 150g)",
    "group": "Serealia",
    "portion": "1 porsi (150g)",
    "calories": 204,
    "protein": 4,
    "carbs": 44,
    "fat": 0.5,
    "fiber": 0.3,
    "aliases": [
      "nasi"
    ],
    "source": "Kemenkes"
  },
  {
    "name": "Dada Ayam Panggang (100g)",
    "group": "Unggas",
    "portion": "100g",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "fiber": 0,
    "aliases": [
      "ayam dada",
      "ayam fillet"
    ],
    "source": "USDA"
  },
  {
    "name": "Telur Rebus (1 Butir)",
    "group": "Telur",
    "portion": "1 butir (~55g)",
    "calories": 78,
    "protein": 6.3,
    "carbs": 0.6,
    "fat": 5.3,
    "fiber": 0,
    "aliases": [
      "telur ayam",
      "boiled egg"
    ],
    "source": "TKPI 2019"
  },
  {
    "name": "Tahu Goreng (1 Potong)",
    "group": "Kacang-kacangan",
    "portion": "1 potong (~40g)",
    "calories": 35,
    "protein": 3,
    "carbs": 1.5,
    "fat": 2.5,
    "fiber": 0.4,
    "aliases": [
      "tahu"
    ],
    "source": "TKPI 2019"
  },
  {
    "name": "Tempe Goreng (1 Potong)",
    "group": "Kacang-kacangan",
    "portion": "1 potong (~50g)",
    "calories": 118,
    "protein": 7.5,
    "carbs": 6.2,
    "fat": 7.8,
    "fiber": 1.4,
    "aliases": [
      "tempe"
    ],
    "source": "TKPI 2019"
  },
  {
    "name": "Alpukat Fresh (1 Buah)",
    "group": "Buah",
    "portion": "1 buah (~150g)",
    "calories": 160,
    "protein": 2,
    "carbs": 8.5,
    "fat": 14.7,
    "fiber": 6.7,
    "aliases": [
      "avocado",
      "alpokat"
    ],
    "source": "USDA"
  },
  {
    "name": "Susu UHT Full Cream (250ml)",
    "group": "Susu",
    "portion": "1 gelas (250ml)",
    "calories": 150,
    "protein": 8,
    "carbs": 12,
    "fat": 8,
    "fiber": 0,
    "aliases": [
      "susu sapi",
      "milk"
    ],
    "source": "OFF"
  },
  {
    "name": "Oatmeal Instan (1 Mangkuk)",
    "group": "Serealia",
    "portion": "1 mangkuk (~40g)",
    "calories": 150,
    "protein": 5,
    "carbs": 27,
    "fat": 3,
    "fiber": 4,
    "aliases": [
      "havermut",
      "oats"
    ],
    "source": "USDA"
  },
  {
    "name": "Nasi (per 100g)",
    "group": "Serealia",
    "portion": "per 100g",
    "calories": 180,
    "protein": 3.0,
    "carbs": 39.8,
    "fat": 0.3,
    "fiber": 0.2,
    "aliases": [
      "nasi putih"
    ],
    "source": "TKPI 2019"
  },
  {
    "name": "Nasi tim (per 100g)",
    "group": "Serealia",
    "portion": "per 100g",
    "calories": 120,
    "protein": 2.4,
    "carbs": 26.0,
    "fat": 0.4,
    "fiber": 0.5,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Tapai beras (per 100g)",
    "group": "Serealia",
    "portion": "per 100g",
    "calories": 99,
    "protein": 1.7,
    "carbs": 22.4,
    "fat": 0.3,
    "fiber": 0,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Tepung beras, mentah (per 100g)",
    "group": "Serealia",
    "portion": "per 100g",
    "calories": 353,
    "protein": 7.0,
    "carbs": 80.0,
    "fat": 0.5,
    "fiber": 2.4,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Nasi beras merah (per 100g)",
    "group": "Serealia",
    "portion": "per 100g",
    "calories": 149,
    "protein": 2.8,
    "carbs": 32.5,
    "fat": 0.4,
    "fiber": 0.3,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Bihun, mentah (per 100g)",
    "group": "Serealia",
    "portion": "per 100g",
    "calories": 348,
    "protein": 4.7,
    "carbs": 82.1,
    "fat": 0.1,
    "fiber": 1.2,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Bihun goreng instan (per 100g)",
    "group": "Serealia",
    "portion": "per 100g",
    "calories": 381,
    "protein": 6.1,
    "carbs": 80.3,
    "fat": 3.9,
    "fiber": 0,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Bihun jagung, mentah (per 100g)",
    "group": "Serealia",
    "portion": "per 100g",
    "calories": 354,
    "protein": 0.5,
    "carbs": 87.4,
    "fat": 0.3,
    "fiber": 3.0,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Nasi jagung (per 100g)",
    "group": "Serealia",
    "portion": "per 100g",
    "calories": 357,
    "protein": 8.8,
    "carbs": 79.5,
    "fat": 0.5,
    "fiber": 6.2,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Jagung muda, rebus (per 100g)",
    "group": "Serealia",
    "portion": "per 100g",
    "calories": 142,
    "protein": 5.0,
    "carbs": 30.3,
    "fat": 0.7,
    "fiber": 0.8,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Jagung kuning, tepung (per 100g)",
    "group": "Serealia",
    "portion": "per 100g",
    "calories": 355,
    "protein": 9.2,
    "carbs": 73.7,
    "fat": 3.9,
    "fiber": 7.2,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Jagung kuning pipil, rebus (per 100g)",
    "group": "Serealia",
    "portion": "per 100g",
    "calories": 154,
    "protein": 3.8,
    "carbs": 28.4,
    "fat": 3.5,
    "fiber": 0.7,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Ketan hitam, matang (per 100g)",
    "group": "Serealia",
    "portion": "per 100g",
    "calories": 181,
    "protein": 4.0,
    "carbs": 37.3,
    "fat": 1.2,
    "fiber": 0.3,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Ketan putih, matang (per 100g)",
    "group": "Serealia",
    "portion": "per 100g",
    "calories": 163,
    "protein": 3.0,
    "carbs": 35.7,
    "fat": 0.4,
    "fiber": 0.2,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Tapai ketan putih (per 100g)",
    "group": "Serealia",
    "portion": "per 100g",
    "calories": 172,
    "protein": 3.0,
    "carbs": 37.5,
    "fat": 0.5,
    "fiber": 0.6,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Makaroni, mentah (per 100g)",
    "group": "Serealia",
    "portion": "per 100g",
    "calories": 353,
    "protein": 8.7,
    "carbs": 78.7,
    "fat": 0.4,
    "fiber": 4.9,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Mi basah (per 100g)",
    "group": "Serealia",
    "portion": "per 100g",
    "calories": 88,
    "protein": 0.6,
    "carbs": 14.0,
    "fat": 3.3,
    "fiber": 0.1,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Misoa (per 100g)",
    "group": "Serealia",
    "portion": "per 100g",
    "calories": 345,
    "protein": 8.5,
    "carbs": 78.0,
    "fat": 2.2,
    "fiber": 0.5,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Tepung terigu (per 100g)",
    "group": "Serealia",
    "portion": "per 100g",
    "calories": 333,
    "protein": 9.0,
    "carbs": 77.2,
    "fat": 1.0,
    "fiber": 0.3,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Biskuit (per 100g)",
    "group": "Serealia",
    "portion": "per 100g",
    "calories": 458,
    "protein": 6.9,
    "carbs": 75.1,
    "fat": 14.4,
    "fiber": 2.1,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Bakpia, kue (per 100g)",
    "group": "Serealia",
    "portion": "per 100g",
    "calories": 272,
    "protein": 8.7,
    "carbs": 44.1,
    "fat": 6.7,
    "fiber": 0.9,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Bakwan (per 100g)",
    "group": "Serealia",
    "portion": "per 100g",
    "calories": 280,
    "protein": 8.2,
    "carbs": 39.0,
    "fat": 10.2,
    "fiber": 3.4,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Ketoprak (per 100g)",
    "group": "Serealia",
    "portion": "per 100g",
    "calories": 153,
    "protein": 7.9,
    "carbs": 13.0,
    "fat": 7.7,
    "fiber": 2.9,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Mie ayam (per 100g)",
    "group": "Serealia",
    "portion": "per 100g",
    "calories": 102,
    "protein": 6.2,
    "carbs": 10.5,
    "fat": 3.9,
    "fiber": 0,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Mie bakso (per 100g)",
    "group": "Serealia",
    "portion": "per 100g",
    "calories": 114,
    "protein": 5.3,
    "carbs": 16.4,
    "fat": 3.0,
    "fiber": 0.1,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Nasi gemuk (per 100g)",
    "group": "Serealia",
    "portion": "per 100g",
    "calories": 192,
    "protein": 3.8,
    "carbs": 24.4,
    "fat": 8.8,
    "fiber": 0.7,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Nasi gurih (per 100g)",
    "group": "Serealia",
    "portion": "per 100g",
    "calories": 190,
    "protein": 4.7,
    "carbs": 26.0,
    "fat": 7.5,
    "fiber": 0.7,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Nasi rames (per 100g)",
    "group": "Serealia",
    "portion": "per 100g",
    "calories": 155,
    "protein": 10.3,
    "carbs": 19.1,
    "fat": 4.2,
    "fiber": 0,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Spaghetti (per 100g)",
    "group": "Serealia",
    "portion": "per 100g",
    "calories": 139,
    "protein": 7.4,
    "carbs": 22.6,
    "fat": 2.1,
    "fiber": 0,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Beras giling, mentah (per 100g)",
    "group": "Serealia",
    "portion": "per 100g",
    "calories": 357,
    "protein": 8.4,
    "carbs": 77.1,
    "fat": 1.7,
    "fiber": 0.2,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Batatas kelapa, ubi, kukus (per 100g)",
    "group": "Umbi",
    "portion": "per 100g",
    "calories": 92,
    "protein": 1.2,
    "carbs": 21.0,
    "fat": 0.3,
    "fiber": 4.1,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Ketela pohon/singkong kukus (per 100g)",
    "group": "Umbi",
    "portion": "per 100g",
    "calories": 153,
    "protein": 1.2,
    "carbs": 36.4,
    "fat": 0.3,
    "fiber": 1.3,
    "aliases": [
      "singkong kukus"
    ],
    "source": "TKPI 2019"
  },
  {
    "name": "Talas bogor, kukus (per 100g)",
    "group": "Umbi",
    "portion": "per 100g",
    "calories": 120,
    "protein": 1.5,
    "carbs": 28.2,
    "fat": 0.3,
    "fiber": 0.7,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Keripik kentang (per 100g)",
    "group": "Umbi",
    "portion": "per 100g",
    "calories": 448,
    "protein": 2.7,
    "carbs": 67.1,
    "fat": 18.8,
    "fiber": 3.8,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Kentang, segar (per 100g)",
    "group": "Umbi",
    "portion": "per 100g",
    "calories": 62,
    "protein": 2.1,
    "carbs": 13.5,
    "fat": 0.2,
    "fiber": 0.5,
    "aliases": [
      "kentang"
    ],
    "source": "TKPI 2019"
  },
  {
    "name": "Kacang tanah, goreng (per 100g)",
    "group": "Kacang",
    "portion": "per 100g",
    "calories": 564,
    "protein": 25.5,
    "carbs": 25.5,
    "fat": 44.4,
    "fiber": 2.8,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Kacang tanah, rebus (per 100g)",
    "group": "Kacang",
    "portion": "per 100g",
    "calories": 220,
    "protein": 10.6,
    "carbs": 8.0,
    "fat": 18.0,
    "fiber": 1.0,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Ampas tahu, mentah (per 100g)",
    "group": "Kacang",
    "portion": "per 100g",
    "calories": 67,
    "protein": 5.0,
    "carbs": 8.1,
    "fat": 2.1,
    "fiber": 4.1,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Kembang tahu (per 100g)",
    "group": "Kacang",
    "portion": "per 100g",
    "calories": 380,
    "protein": 48.9,
    "carbs": 23.3,
    "fat": 13.8,
    "fiber": 0,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Tahu, mentah (per 100g)",
    "group": "Kacang",
    "portion": "per 100g",
    "calories": 80,
    "protein": 10.9,
    "carbs": 0.8,
    "fat": 4.7,
    "fiber": 0.1,
    "aliases": [
      "tahu"
    ],
    "source": "TKPI 2019"
  },
  {
    "name": "Tahu goreng (per 100g)",
    "group": "Kacang",
    "portion": "per 100g",
    "calories": 115,
    "protein": 9.7,
    "carbs": 2.5,
    "fat": 8.5,
    "fiber": 0.1,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Tempe kedelai murni, goreng (per 100g)",
    "group": "Kacang",
    "portion": "per 100g",
    "calories": 350,
    "protein": 24.5,
    "carbs": 10.4,
    "fat": 26.6,
    "fiber": 4.2,
    "aliases": [
      "tempe goreng"
    ],
    "source": "TKPI 2019"
  },
  {
    "name": "Tempe kedelai murni, mentah (per 100g)",
    "group": "Kacang",
    "portion": "per 100g",
    "calories": 201,
    "protein": 20.8,
    "carbs": 13.5,
    "fat": 8.8,
    "fiber": 1.4,
    "aliases": [
      "tempe"
    ],
    "source": "TKPI 2019"
  },
  {
    "name": "Tempe pasar (per 100g)",
    "group": "Kacang",
    "portion": "per 100g",
    "calories": 150,
    "protein": 14.0,
    "carbs": 9.1,
    "fat": 7.7,
    "fiber": 1.4,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Tempe pasar goreng (per 100g)",
    "group": "Kacang",
    "portion": "per 100g",
    "calories": 336,
    "protein": 20.0,
    "carbs": 7.8,
    "fat": 28.0,
    "fiber": 3.4,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Kacang tanah, kering (per 100g)",
    "group": "Kacang",
    "portion": "per 100g",
    "calories": 525,
    "protein": 27.9,
    "carbs": 17.4,
    "fat": 42.7,
    "fiber": 2.4,
    "aliases": [
      "kacang tanah"
    ],
    "source": "TKPI 2019"
  },
  {
    "name": "Bayam, kukus (per 100g)",
    "group": "Sayur",
    "portion": "per 100g",
    "calories": 30,
    "protein": 1.3,
    "carbs": 5.8,
    "fat": 0.7,
    "fiber": 1.2,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Bayam, rebus (per 100g)",
    "group": "Sayur",
    "portion": "per 100g",
    "calories": 23,
    "protein": 1.2,
    "carbs": 3.7,
    "fat": 0.6,
    "fiber": 1.1,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Wortel, rebus (per 100g)",
    "group": "Sayur",
    "portion": "per 100g",
    "calories": 28,
    "protein": 0.7,
    "carbs": 6.3,
    "fat": 0.5,
    "fiber": 0.8,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Wortel, kukus (per 100g)",
    "group": "Sayur",
    "portion": "per 100g",
    "calories": 37,
    "protein": 1.0,
    "carbs": 8.3,
    "fat": 0.6,
    "fiber": 1.1,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Bayam, segar (per 100g)",
    "group": "Sayur",
    "portion": "per 100g",
    "calories": 16,
    "protein": 0.9,
    "carbs": 2.9,
    "fat": 0.4,
    "fiber": 0.7,
    "aliases": [
      "bayam"
    ],
    "source": "TKPI 2019"
  },
  {
    "name": "Wortel, segar (per 100g)",
    "group": "Sayur",
    "portion": "per 100g",
    "calories": 36,
    "protein": 1.0,
    "carbs": 7.9,
    "fat": 0.6,
    "fiber": 1.0,
    "aliases": [
      "wortel"
    ],
    "source": "TKPI 2019"
  },
  {
    "name": "Ayam, ampela, goreng (per 100g)",
    "group": "Daging",
    "portion": "per 100g",
    "calories": 270,
    "protein": 32.3,
    "carbs": 9.9,
    "fat": 11.2,
    "fiber": 0,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Ayam, usus, goreng (per 100g)",
    "group": "Daging",
    "portion": "per 100g",
    "calories": 473,
    "protein": 45.2,
    "carbs": 13.9,
    "fat": 26.3,
    "fiber": 0,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Ayam goreng kalasan, paha (per 100g)",
    "group": "Daging",
    "portion": "per 100g",
    "calories": 275,
    "protein": 37.4,
    "carbs": 1.3,
    "fat": 12.2,
    "fiber": 0,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Ayam goreng kentucky, dada (per 100g)",
    "group": "Daging",
    "portion": "per 100g",
    "calories": 298,
    "protein": 34.2,
    "carbs": 0.1,
    "fat": 16.8,
    "fiber": 0,
    "aliases": [
      "ayam goreng"
    ],
    "source": "TKPI 2019"
  },
  {
    "name": "Ayam goreng kentucky, paha (per 100g)",
    "group": "Daging",
    "portion": "per 100g",
    "calories": 286,
    "protein": 32.1,
    "carbs": 1.1,
    "fat": 16.1,
    "fiber": 0,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Ayam goreng kentucky, sayap (per 100g)",
    "group": "Daging",
    "portion": "per 100g",
    "calories": 297,
    "protein": 35.9,
    "carbs": 1.6,
    "fat": 15.2,
    "fiber": 0,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Ayam taliwang, masakan (per 100g)",
    "group": "Daging",
    "portion": "per 100g",
    "calories": 264,
    "protein": 18.2,
    "carbs": 2.7,
    "fat": 20.1,
    "fiber": 0,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Ayam, daging, segar (per 100g)",
    "group": "Daging",
    "portion": "per 100g",
    "calories": 298,
    "protein": 18.2,
    "carbs": 0,
    "fat": 25.0,
    "fiber": 0,
    "aliases": [
      "ayam"
    ],
    "source": "TKPI 2019"
  },
  {
    "name": "Ikan bandeng presto, masakan (per 100g)",
    "group": "Ikan",
    "portion": "per 100g",
    "calories": 296,
    "protein": 17.1,
    "carbs": 11.3,
    "fat": 20.3,
    "fiber": 0,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Sate bandeng (per 100g)",
    "group": "Ikan",
    "portion": "per 100g",
    "calories": 283,
    "protein": 12.1,
    "carbs": 20.9,
    "fat": 16.8,
    "fiber": 2.0,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Tumis bandeng (per 100g)",
    "group": "Ikan",
    "portion": "per 100g",
    "calories": 189,
    "protein": 11.3,
    "carbs": 0.6,
    "fat": 15.7,
    "fiber": 0,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Ikan bandeng, segar (per 100g)",
    "group": "Ikan",
    "portion": "per 100g",
    "calories": 123,
    "protein": 20.0,
    "carbs": 0,
    "fat": 4.8,
    "fiber": 0,
    "aliases": [
      "bandeng"
    ],
    "source": "TKPI 2019"
  },
  {
    "name": "Telur ayam, dadar, masakan (per 100g)",
    "group": "Telur",
    "portion": "per 100g",
    "calories": 251,
    "protein": 16.3,
    "carbs": 1.4,
    "fat": 19.4,
    "fiber": 0,
    "aliases": [
      "telur dadar"
    ],
    "source": "TKPI 2019"
  },
  {
    "name": "Telur ayam kampung, segar (per 100g)",
    "group": "Telur",
    "portion": "per 100g",
    "calories": 174,
    "protein": 10.8,
    "carbs": 1.2,
    "fat": 14.0,
    "fiber": 0,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Telur ayam ras, segar (per 100g)",
    "group": "Telur",
    "portion": "per 100g",
    "calories": 154,
    "protein": 12.4,
    "carbs": 0.7,
    "fat": 10.8,
    "fiber": 0,
    "aliases": [
      "telur",
      "telur ayam"
    ],
    "source": "TKPI 2019"
  },
  {
    "name": "Telur ayam ras, bagian kuning, segar (per 100g)",
    "group": "Telur",
    "portion": "per 100g",
    "calories": 355,
    "protein": 16.3,
    "carbs": 0.7,
    "fat": 31.9,
    "fiber": 0,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Telur ayam ras, bagian putih, segar (per 100g)",
    "group": "Telur",
    "portion": "per 100g",
    "calories": 50,
    "protein": 10.8,
    "carbs": 0.8,
    "fat": 0,
    "fiber": 0,
    "aliases": [],
    "source": "TKPI 2019"
  },
  {
    "name": "Pisang ayam, segar (per 100g)",
    "group": "Buah",
    "portion": "per 100g",
    "calories": 120,
    "protein": 1.1,
    "carbs": 26.8,
    "fat": 0.2,
    "fiber": 4.1,
    "aliases": [
      "pisang"
    ],
    "source": "TKPI 2019"
  }
];
