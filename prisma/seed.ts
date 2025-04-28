import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create roles
  const roles = ["Top", "Jungle", "Mid", "ADC", "Support"];

  for (const role of roles) {
    await prisma.role.upsert({
      where: { name: role },
      update: {},
      create: { name: role },
    });
  }

  const champions = [
    { name: "Aatrox", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg" },
    { name: "Ahri", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg" },
    { name: "Akali", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg" },
    { name: "Akshan", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akshan_0.jpg" },
    {
      name: "Alistar",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg",
    },
    { name: "Amumu", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg" },
    { name: "Anivia", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg" },
    { name: "Annie", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg" },
    {
      name: "Aphelios",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_0.jpg",
    },
    { name: "Ashe", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg" },
    {
      name: "Aurelion Sol",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg",
    },
    { name: "Azir", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg" },
    { name: "Bard", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg" },
    {
      name: "Bel'Veth",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Belveth_0.jpg",
    },
    {
      name: "Blitzcrank",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_0.jpg",
    },
    { name: "Brand", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_0.jpg" },
    { name: "Braum", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg" },
    { name: "Briar", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Briar_0.jpg" },
    {
      name: "Caitlyn",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg",
    },
    {
      name: "Camille",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_0.jpg",
    },
    {
      name: "Cassiopeia",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_0.jpg",
    },
    {
      name: "Cho'Gath",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_0.jpg",
    },
    { name: "Corki", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_0.jpg" },
    { name: "Darius", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg" },
    { name: "Diana", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_0.jpg" },
    { name: "Draven", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_0.jpg" },
    {
      name: "Dr. Mundo",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_0.jpg",
    },
    { name: "Ekko", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_0.jpg" },
    { name: "Elise", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Elise_0.jpg" },
    {
      name: "Evelynn",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_0.jpg",
    },
    { name: "Ezreal", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg" },
    {
      name: "Fiddlesticks",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiddlesticks_0.jpg",
    },
    { name: "Fiora", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiora_0.jpg" },
    { name: "Fizz", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fizz_0.jpg" },
    { name: "Galio", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Galio_0.jpg" },
    {
      name: "Gangplank",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gangplank_0.jpg",
    },
    { name: "Garen", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg" },
    { name: "Gnar", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gnar_0.jpg" },
    { name: "Gragas", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gragas_0.jpg" },
    { name: "Graves", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Graves_0.jpg" },
    { name: "Gwen", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gwen_0.jpg" },
    {
      name: "Hecarim",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Hecarim_0.jpg",
    },
    {
      name: "Heimerdinger",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Heimerdinger_0.jpg",
    },
    { name: "Illaoi", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Illaoi_0.jpg" },
    { name: "Irelia", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_0.jpg" },
    { name: "Ivern", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ivern_0.jpg" },
    { name: "Janna", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Janna_0.jpg" },
    {
      name: "Jarvan IV",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/JarvanIV_0.jpg",
    },
    { name: "Jax", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jax_0.jpg" },
    { name: "Jayce", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jayce_0.jpg" },
    { name: "Jhin", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_0.jpg" },
    { name: "Jinx", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg" },
    { name: "K'Sante", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/KSante_0.jpg" },
    { name: "Kai'Sa", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg" },
    {
      name: "Kalista",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kalista_0.jpg",
    },
    { name: "Karma", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karma_0.jpg" },
    {
      name: "Karthus",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karthus_0.jpg",
    },
    {
      name: "Kassadin",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kassadin_0.jpg",
    },
    {
      name: "Katarina",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_0.jpg",
    },
    { name: "Kayle", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayle_0.jpg" },
    { name: "Kayn", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayn_0.jpg" },
    { name: "Kennen", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kennen_0.jpg" },
    { name: "Kha'Zix", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Khazix_0.jpg" },
    {
      name: "Kindred",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kindred_0.jpg",
    },
    { name: "Kled", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kled_0.jpg" },
    { name: "Kog'Maw", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/KogMaw_0.jpg" },
    {
      name: "LeBlanc",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leblanc_0.jpg",
    },
    { name: "Lee Sin", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg" },
    { name: "Leona", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leona_0.jpg" },
    { name: "Lillia", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lillia_0.jpg" },
    {
      name: "Lissandra",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lissandra_0.jpg",
    },
    { name: "Lucian", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lucian_0.jpg" },
    { name: "Lulu", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lulu_0.jpg" },
    { name: "Lux", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg" },
    {
      name: "Malphite",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malphite_0.jpg",
    },
    {
      name: "Malzahar",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malzahar_0.jpg",
    },
    { name: "Maokai", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Maokai_0.jpg" },
    {
      name: "Master Yi",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MasterYi_0.jpg",
    },
    { name: "Milio", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Milio_0.jpg" },
    {
      name: "Miss Fortune",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_0.jpg",
    },
    {
      name: "Mordekaiser",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Mordekaiser_0.jpg",
    },
    {
      name: "Morgana",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Morgana_0.jpg",
    },
    {
      name: "Naafiri",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Naafiri_0.jpg",
    },
    { name: "Nami", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nami_0.jpg" },
    { name: "Nasus", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg" },
    {
      name: "Nautilus",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nautilus_0.jpg",
    },
    { name: "Neeko", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Neeko_0.jpg" },
    {
      name: "Nidalee",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nidalee_0.jpg",
    },
    { name: "Nilah", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nilah_0.jpg" },
    {
      name: "Nocturne",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nocturne_0.jpg",
    },
    {
      name: "Nunu & Willump",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nunu_0.jpg",
    },
    { name: "Olaf", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Olaf_0.jpg" },
    {
      name: "Orianna",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Orianna_0.jpg",
    },
    { name: "Ornn", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ornn_0.jpg" },
    {
      name: "Pantheon",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pantheon_0.jpg",
    },
    { name: "Poppy", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Poppy_0.jpg" },
    { name: "Pyke", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pyke_0.jpg" },
    { name: "Qiyana", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Qiyana_0.jpg" },
    { name: "Quinn", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Quinn_0.jpg" },
    { name: "Rakan", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rakan_0.jpg" },
    { name: "Rammus", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rammus_0.jpg" },
    { name: "Rek'Sai", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/RekSai_0.jpg" },
    { name: "Rell", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rell_0.jpg" },
    {
      name: "Renata Glasc",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Renata_0.jpg",
    },
    {
      name: "Renekton",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Renekton_0.jpg",
    },
    { name: "Rengar", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rengar_0.jpg" },
    { name: "Riven", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Riven_0.jpg" },
    { name: "Rumble", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rumble_0.jpg" },
    { name: "Ryze", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ryze_0.jpg" },
    { name: "Samira", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Samira_0.jpg" },
    {
      name: "Sejuani",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sejuani_0.jpg",
    },
    { name: "Senna", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Senna_0.jpg" },
    {
      name: "Seraphine",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Seraphine_0.jpg",
    },
    { name: "Sett", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sett_0.jpg" },
    { name: "Shaco", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shaco_0.jpg" },
    { name: "Shen", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shen_0.jpg" },
    {
      name: "Shyvana",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shyvana_0.jpg",
    },
    { name: "Singed", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Singed_0.jpg" },
    { name: "Sion", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sion_0.jpg" },
    { name: "Sivir", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sivir_0.jpg" },
    {
      name: "Skarner",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Skarner_0.jpg",
    },
    { name: "Sona", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sona_0.jpg" },
    { name: "Soraka", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Soraka_0.jpg" },
    { name: "Swain", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Swain_0.jpg" },
    { name: "Sylas", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sylas_0.jpg" },
    { name: "Syndra", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Syndra_0.jpg" },
    {
      name: "Tahm Kench",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TahmKench_0.jpg",
    },
    {
      name: "Taliyah",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taliyah_0.jpg",
    },
    { name: "Talon", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Talon_0.jpg" },
    { name: "Taric", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taric_0.jpg" },
    { name: "Teemo", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_0.jpg" },
    { name: "Thresh", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg" },
    {
      name: "Tristana",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tristana_0.jpg",
    },
    {
      name: "Trundle",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Trundle_0.jpg",
    },
    {
      name: "Tryndamere",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tryndamere_0.jpg",
    },
    {
      name: "Twisted Fate",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TwistedFate_0.jpg",
    },
    { name: "Twitch", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Twitch_0.jpg" },
    { name: "Udyr", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Udyr_0.jpg" },
    { name: "Urgot", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Urgot_0.jpg" },
    { name: "Varus", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Varus_0.jpg" },
    { name: "Vayne", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vayne_0.jpg" },
    { name: "Veigar", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Veigar_0.jpg" },
    { name: "Vel'Koz", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Velkoz_0.jpg" },
    { name: "Vex", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vex_0.jpg" },
    { name: "Vi", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vi_0.jpg" },
    { name: "Viego", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viego_0.jpg" },
    { name: "Viktor", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viktor_0.jpg" },
    {
      name: "Vladimir",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vladimir_0.jpg",
    },
    {
      name: "Volibear",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Volibear_0.jpg",
    },
    {
      name: "Warwick",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Warwick_0.jpg",
    },
    {
      name: "Wukong",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MonkeyKing_0.jpg",
    },
    { name: "Xayah", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Xayah_0.jpg" },
    { name: "Xerath", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Xerath_0.jpg" },
    {
      name: "Xin Zhao",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/XinZhao_0.jpg",
    },
    { name: "Yasuo", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" },
    { name: "Yone", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yone_0.jpg" },
    { name: "Yorick", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yorick_0.jpg" },
    { name: "Yuumi", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yuumi_0.jpg" },
    { name: "Zac", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zac_0.jpg" },
    { name: "Zed", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg" },
    { name: "Zeri", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zeri_0.jpg" },
    { name: "Ziggs", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ziggs_0.jpg" },
    { name: "Zilean", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zilean_0.jpg" },
    { name: "Zoe", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zoe_0.jpg" },
    { name: "Zyra", imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zyra_0.jpg" },
  ];

  for (const champion of champions) {
    await prisma.champion.upsert({
      where: { name: champion.name },
      update: {},
      create: champion,
    });
  }

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
