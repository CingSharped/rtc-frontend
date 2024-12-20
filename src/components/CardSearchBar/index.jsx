import { useState, useRef, useEffect } from "react";
import { CardList } from "../../components";
import axios from "axios";
import "./style.css";

const defaultCards = [
  {
    id: 80896940,
    name: "Nirvana High Paladin",
    type: "Synchro Pendulum Effect Monster",
    frameType: "synchro_pendulum",
    desc: "[ Pendulum Effect ] \nIf a Pendulum Monster you control attacks, for that battle, it cannot be destroyed by battle, also you take no battle damage. At the end of the Damage Step, if a Pendulum Monster you control attacked: All monsters your opponent currently controls lose ATK equal to that attacking monster's ATK, until the end of this turn.\n[ Monster Effect ] \n1 Tuner + 1+ non-Tuner Synchro Monsters\r\nFor this card's Synchro Summon, you can treat 1 Pendulum Summoned Pendulum Monster you control as a Tuner. If this card is Synchro Summoned using a Pendulum Summoned Pendulum Monster Tuner: You can target 1 card in your GY; add it to your hand. When this card destroys an opponent's monster by battle: You can halve your opponent's LP. If this card in the Monster Zone is destroyed by battle or card effect: You can place this card in your Pendulum Zone.",
    pend_desc:
      "If a Pendulum Monster you control attacks, for that battle, it cannot be destroyed by battle, also you take no battle damage. At the end of the Damage Step, if a Pendulum Monster you control attacked: All monsters your opponent currently controls lose ATK equal to that attacking monster's ATK, until the end of this turn.",
    monster_desc:
      "1 Tuner + 1+ non-Tuner Synchro Monsters\r\nFor this card's Synchro Summon, you can treat 1 Pendulum Summoned Pendulum Monster you control as a Tuner. If this card is Synchro Summoned using a Pendulum Summoned Pendulum Monster Tuner: You can target 1 card in your GY; add it to your hand. When this card destroys an opponent's monster by battle: You can halve your opponent's LP. If this card in the Monster Zone is destroyed by battle or card effect: You can place this card in your Pendulum Zone.",
    atk: 3300,
    def: 2500,
    level: 10,
    race: "Spellcaster",
    attribute: "DARK",
    scale: 8,
    ygoprodeck_url: "https://ygoprodeck.com/card/nirvana-high-paladin-6789",
    card_sets: [
      {
        set_name: "Ghosts From the Past: The 2nd Haunting",
        set_code: "GFP2-EN132",
        set_rarity: "Ultra Rare",
        set_rarity_code: "(UR)",
        set_price: "0.94",
      },
      {
        set_name: "The Dark Illusion",
        set_code: "TDIL-EN046",
        set_rarity: "Secret Rare",
        set_rarity_code: "(ScR)",
        set_price: "8.79",
      },
    ],
    card_images: [
      {
        id: 80896940,
        image_url: "https://images.ygoprodeck.com/images/cards/80896940.jpg",
        image_url_small:
          "https://images.ygoprodeck.com/images/cards_small/80896940.jpg",
        image_url_cropped:
          "https://images.ygoprodeck.com/images/cards_cropped/80896940.jpg",
      },
    ],
    card_prices: [
      {
        cardmarket_price: "0.15",
        tcgplayer_price: "0.14",
        ebay_price: "1.50",
        amazon_price: "0.39",
        coolstuffinc_price: "1.99",
      },
    ],
  },
  {
    id: 6983839,
    name: "Tornado Dragon",
    type: "XYZ Monster",
    frameType: "xyz",
    desc: "2 Level 4 monsters\nOnce per turn (Quick Effect): You can detach 1 material from this card, then target 1 Spell/Trap on the field; destroy it.",
    atk: 2100,
    def: 2000,
    level: 4,
    race: "Wyrm",
    attribute: "WIND",
    card_sets: [
      {
        set_name: "Battles of Legend: Relentless Revenge",
        set_code: "BLRR-EN084",
        set_rarity: "Secret Rare",
        set_rarity_code: "(ScR)",
        set_price: "4.08",
      },
      {
        set_name: "Duel Devastator",
        set_code: "DUDE-EN019",
        set_rarity: "Ultra Rare",
        set_rarity_code: "(UR)",
        set_price: "1.4",
      },
      {
        set_name: "Maximum Crisis",
        set_code: "MACR-EN081",
        set_rarity: "Secret Rare",
        set_rarity_code: "(ScR)",
        set_price: "4.32",
      },
    ],
    card_images: [
      {
        id: 6983839,
        image_url: "https://images.ygoprodeck.com/images/cards/6983839.jpg",
        image_url_small:
          "https://images.ygoprodeck.com/images/cards_small/6983839.jpg",
        image_url_cropped:
          "https://images.ygoprodeck.com/images/cards_cropped/6983839.jpg",
      },
    ],
    card_prices: [
      {
        cardmarket_price: "0.42",
        tcgplayer_price: "0.48",
        ebay_price: "2.99",
        amazon_price: "0.77",
        coolstuffinc_price: "0.99",
      },
    ],
  },
  {
    id: 46986421,
    name: "Dark Magician",
    type: "Normal Monster",
    frameType: "normal",
    desc: "''The ultimate wizard in terms of attack and defense.''",
    atk: 2500,
    def: 2100,
    level: 7,
    race: "Spellcaster",
    attribute: "DARK",
    archetype: "Dark Magician",
    ygoprodeck_url: "https://ygoprodeck.com/card/dark-magician-4003",
    card_sets: [
      {
        set_name: "2-Player Starter Set",
        set_code: "STAX-EN005",
        set_rarity: "Common",
        set_rarity_code: "(C)",
        set_price: "0",
      },
      {
        set_name: "2016 Mega-Tins",
        set_code: "CT13-EN003",
        set_rarity: "Ultra Rare",
        set_rarity_code: "(UR)",
        set_price: "6.97",
      },
      {
        set_name: "2017 Mega-Tins",
        set_code: "CT14-EN001",
        set_rarity: "Secret Rare",
        set_rarity_code: "(ScR)",
        set_price: "9.66",
      },
      {
        set_name: "25th Anniversary Tin: Dueling Heroes",
        set_code: "TN23-EN001",
        set_rarity: "Quarter Century Secret Rare",
        set_rarity_code: "",
        set_price: "0",
      },
      {
        set_name: "Adidas collaboration card",
        set_code: "ADC1-EN001",
        set_rarity: "Secret Rare",
        set_rarity_code: "(ScR)",
        set_price: "0",
      },
      {
        set_name: "Booster Pack Collectors Tins 2002",
        set_code: "BPT-001",
        set_rarity: "Secret Rare",
        set_rarity_code: "(ScR)",
        set_price: "63.01",
      },
      {
        set_name: "Collectible Tins 2003",
        set_code: "BPT-007",
        set_rarity: "Secret Rare",
        set_rarity_code: "(ScR)",
        set_price: "19.08",
      },
      {
        set_name: "Dark Beginning 1",
        set_code: "DB1-EN102",
        set_rarity: "Ultra Rare",
        set_rarity_code: "(UR)",
        set_price: "25.2",
      },
      {
        set_name: "Dark Legends",
        set_code: "DLG1-EN004",
        set_rarity: "Rare",
        set_rarity_code: "(R)",
        set_price: "11.64",
      },
      {
        set_name: "Duel Power",
        set_code: "DUPO-EN101",
        set_rarity: "Ultra Rare",
        set_rarity_code: "(UR)",
        set_price: "3.52",
      },
      {
        set_name: "Duel Terminal - Preview Wave 1",
        set_code: "DTP1-EN002",
        set_rarity: "Duel Terminal Normal Parallel Rare",
        set_rarity_code: "(DNPR)",
        set_price: "0.00",
      },
      {
        set_name: "Duel Terminal - Preview Wave 2",
        set_code: "DTP1-EN002",
        set_rarity: "Duel Terminal Rare Parallel Rare",
        set_rarity_code: "(DRPR)",
        set_price: "0.00",
      },
      {
        set_name: "Duel Terminal 1",
        set_code: "DT01-EN002",
        set_rarity: "Duel Terminal Rare Parallel Rare",
        set_rarity_code: "(DRPR)",
        set_price: "14.78",
      },
      {
        set_name: "Duelist League 2 participation cards",
        set_code: "DL11-EN001",
        set_rarity: "Rare",
        set_rarity_code: "(R)",
        set_price: "70.6",
      },
      {
        set_name: "Duelist Pack: Battle City",
        set_code: "DPBC-EN008",
        set_rarity: "Super Rare",
        set_rarity_code: "(SR)",
        set_price: "3.7",
      },
      {
        set_name: "Duelist Pack: Yugi",
        set_code: "DPYG-EN001",
        set_rarity: "Rare",
        set_rarity_code: "(R)",
        set_price: "2.24",
      },
      {
        set_name: "Duelist Saga",
        set_code: "DUSA-EN100",
        set_rarity: "Ultra Rare",
        set_rarity_code: "(UR)",
        set_price: "11.34",
      },
      {
        set_name: "Forbidden Legacy",
        set_code: "FL1-EN002",
        set_rarity: "Secret Rare",
        set_rarity_code: "(ScR)",
        set_price: "16.26",
      },
      {
        set_name: "Ghosts From the Past",
        set_code: "GFTP-EN128",
        set_rarity: "Ghost Rare",
        set_rarity_code: "(GR)",
        set_price: "742",
      },
      {
        set_name: "Hidden Arsenal: Chapter 1",
        set_code: "HAC1-EN002",
        set_rarity: "Duel Terminal Ultra Parallel Rare",
        set_rarity_code: "(DUPR)",
        set_price: "3.19",
      },
      {
        set_name: "KC Grand Tournament 2021 prize card",
        set_code: "2021-EN001",
        set_rarity: "Extra Secret Rare",
        set_rarity_code: "",
        set_price: "0.00",
      },
      {
        set_name: "Legend of Blue Eyes White Dragon",
        set_code: "LOB-005",
        set_rarity: "Ultra Rare",
        set_rarity_code: "(UR)",
        set_price: "46.71",
      },
      {
        set_name: "Legend of Blue Eyes White Dragon",
        set_code: "LOB-E003",
        set_rarity: "Ultra Rare",
        set_rarity_code: "(UR)",
        set_price: "53.66",
      },
      {
        set_name: "Legend of Blue Eyes White Dragon",
        set_code: "LOB-EN005",
        set_rarity: "Ultra Rare",
        set_rarity_code: "(UR)",
        set_price: "49.41",
      },
      {
        set_name: "Legendary Collection",
        set_code: "LC01-EN005",
        set_rarity: "Ultra Rare",
        set_rarity_code: "(UR)",
        set_price: "4.43",
      },
      {
        set_name: "Legendary Collection 3: Yugi's World Mega Pack",
        set_code: "LCYW-EN001",
        set_rarity: "Secret Rare",
        set_rarity_code: "(ScR)",
        set_price: "10.84",
      },
      {
        set_name: "Legendary Collection: 25th Anniversary Edition",
        set_code: "LC01-EN005",
        set_rarity: "Quarter Century Secret Rare",
        set_rarity_code: "",
        set_price: "0",
      },
      {
        set_name: "Legendary Decks II",
        set_code: "LDK2-ENY10",
        set_rarity: "Common",
        set_rarity_code: "(C)",
        set_price: "2.35",
      },
      {
        set_name: "Legendary Dragon Decks",
        set_code: "LEDD-ENA01",
        set_rarity: "Common",
        set_rarity_code: "(C)",
        set_price: "1.72",
      },
      {
        set_name: "Maximum Gold",
        set_code: "MAGO-EN002",
        set_rarity: "Premium Gold Rare",
        set_rarity_code: "(PG)",
        set_price: "11.91",
      },
      {
        set_name: "Retro Pack",
        set_code: "RP01-EN003",
        set_rarity: "Ultra Rare",
        set_rarity_code: "(UR)",
        set_price: "503.21",
      },
      {
        set_name: "Shonen Jump Vol. 9, Issue 4 promotional card",
        set_code: "JUMP-EN049",
        set_rarity: "Ultra Rare",
        set_rarity_code: "(UR)",
        set_price: "129.27",
      },
      {
        set_name: "Speed Duel Starter Decks: Destiny Masters",
        set_code: "SS01-ENA01",
        set_rarity: "Common",
        set_rarity_code: "(C)",
        set_price: "1.61",
      },
      {
        set_name: "Speed Duel Starter Decks: Match of the Millennium",
        set_code: "SS04-ENA01",
        set_rarity: "Common",
        set_rarity_code: "(C)",
        set_price: "2",
      },
      {
        set_name: "Speed Duel Tournament Pack 1",
        set_code: "STP1-EN001",
        set_rarity: "Ultra Rare",
        set_rarity_code: "(UR)",
        set_price: "22.78",
      },
      {
        set_name: "Speed Duel: Battle City Box",
        set_code: "SBCB-EN001",
        set_rarity: "Common",
        set_rarity_code: "(C)",
        set_price: "1.55",
      },
      {
        set_name: "Speed Duel: Battle City Box",
        set_code: "SBCB-EN001",
        set_rarity: "Secret Rare",
        set_rarity_code: "(ScR)",
        set_price: "6.53",
      },
      {
        set_name: "Speed Duel: Streets of Battle City",
        set_code: "SBC1-ENA01",
        set_rarity: "Common",
        set_rarity_code: "(C)",
        set_price: "0",
      },
      {
        set_name: "Speed Duel: Streets of Battle City",
        set_code: "SBC1-ENA01",
        set_rarity: "Secret Rare",
        set_rarity_code: "(ScR)",
        set_price: "0",
      },
      {
        set_name: "Starter Deck: Yugi",
        set_code: "SDY-006",
        set_rarity: "Ultra Rare",
        set_rarity_code: "(UR)",
        set_price: "9.96",
      },
      {
        set_name: "Starter Deck: Yugi",
        set_code: "SDY-E005",
        set_rarity: "Ultra Rare",
        set_rarity_code: "(UR)",
        set_price: "24.46",
      },
      {
        set_name: "Starter Deck: Yugi Evolution",
        set_code: "SYE-001",
        set_rarity: "Super Rare",
        set_rarity_code: "(SR)",
        set_price: "6.37",
      },
      {
        set_name: "Starter Deck: Yugi Reloaded",
        set_code: "YSYR-EN001",
        set_rarity: "Common",
        set_rarity_code: "(C)",
        set_price: "2.34",
      },
      {
        set_name: "Starter Deck: Yugi Reloaded",
        set_code: "YSYR-EN001",
        set_rarity: "Ultimate Rare",
        set_rarity_code: "(UtR)",
        set_price: "12.75",
      },
      {
        set_name: "Structure Deck: Spellcaster's Judgment",
        set_code: "SD6-EN003",
        set_rarity: "Common",
        set_rarity_code: "(C)",
        set_price: "2.26",
      },
      {
        set_name: "Structure Deck: Yugi Muto",
        set_code: "SDMY-EN010",
        set_rarity: "Common",
        set_rarity_code: "(C)",
        set_price: "1.8",
      },
      {
        set_name: "WSJ Jump Pack Fall 2016 promotional card",
        set_code: "JMPS-EN003",
        set_rarity: "Ultra Rare",
        set_rarity_code: "(UR)",
        set_price: "171.83",
      },
      {
        set_name: "Yu-Gi-Oh! Dark Duel Stories promotional cards",
        set_code: "DDS-002",
        set_rarity: "Prismatic Secret Rare",
        set_rarity_code: "(PScR)",
        set_price: "797.61",
      },
      {
        set_name:
          "Yu-Gi-Oh! Power of Chaos: Yugi the Destiny promotional cards",
        set_code: "PCY-004",
        set_rarity: "Prismatic Secret Rare",
        set_rarity_code: "(PScR)",
        set_price: "82.23",
      },
      {
        set_name:
          "Yu-Gi-Oh! Power of Chaos: Yugi the Destiny promotional cards",
        set_code: "PCY-E004",
        set_rarity: "Prismatic Secret Rare",
        set_rarity_code: "(PScR)",
        set_price: "74.4",
      },
      {
        set_name: "Yu-Gi-Oh! The Dark Side of Dimensions Movie Pack",
        set_code: "MVP1-EN054",
        set_rarity: "Ultra Rare",
        set_rarity_code: "(UR)",
        set_price: "3.3",
      },
      {
        set_name:
          "Yu-Gi-Oh! The Dark Side of Dimensions Movie Pack Secret Edition",
        set_code: "MVP1-ENS54",
        set_rarity: "Secret Rare",
        set_rarity_code: "(ScR)",
        set_price: "19.53",
      },
      {
        set_name:
          "Yu-Gi-Oh! The Dark Side of Dimensions Movie Pack Secret Edition",
        set_code: "MVP1-ENSV3",
        set_rarity: "Ultra Rare",
        set_rarity_code: "(UR)",
        set_price: "4.19",
      },
      {
        set_name:
          "Yu-Gi-Oh! The Dark Side of Dimensions Movie Pack Special Edition",
        set_code: "MVP1-ENSE3",
        set_rarity: "Ultra Rare",
        set_rarity_code: "(UR)",
        set_price: "4.11",
      },
      {
        set_name:
          "Yu-Gi-Oh! The Dark Side of Dimensions Movie Pack: Gold Edition",
        set_code: "MVP1-ENG54",
        set_rarity: "Gold Rare",
        set_rarity_code: "(GUR)",
        set_price: "5.83",
      },
      {
        set_name:
          "Yu-Gi-Oh! The Dark Side of Dimensions Movie Pack: Gold Edition",
        set_code: "MVP1-ENGV3",
        set_rarity: "Gold Secret Rare",
        set_rarity_code: "(GScR)",
        set_price: "8.39",
      },
      {
        set_name: "Yugi's Collector Box",
        set_code: "YUCB-EN001",
        set_rarity: "Ultra Rare",
        set_rarity_code: "(UR)",
        set_price: "5.63",
      },
      {
        set_name: "Yugi's Legendary Decks",
        set_code: "YGLD-ENA03",
        set_rarity: "Common",
        set_rarity_code: "(C)",
        set_price: "1.7",
      },
      {
        set_name: "Yugi's Legendary Decks",
        set_code: "YGLD-ENB02",
        set_rarity: "Ultra Rare",
        set_rarity_code: "(UR)",
        set_price: "0",
      },
      {
        set_name: "Yugi's Legendary Decks",
        set_code: "YGLD-ENC09",
        set_rarity: "Ultra Rare",
        set_rarity_code: "(UR)",
        set_price: "4.04",
      },
    ],
    card_images: [
      {
        id: 46986421,
        image_url: "https://images.ygoprodeck.com/images/cards/46986421.jpg",
        image_url_small:
          "https://images.ygoprodeck.com/images/cards_small/46986421.jpg",
        image_url_cropped:
          "https://images.ygoprodeck.com/images/cards_cropped/46986421.jpg",
      },
      {
        id: 46986420,
        image_url: "https://images.ygoprodeck.com/images/cards/46986420.jpg",
        image_url_small:
          "https://images.ygoprodeck.com/images/cards_small/46986420.jpg",
        image_url_cropped:
          "https://images.ygoprodeck.com/images/cards_cropped/46986420.jpg",
      },
      {
        id: 46986414,
        image_url: "https://images.ygoprodeck.com/images/cards/46986414.jpg",
        image_url_small:
          "https://images.ygoprodeck.com/images/cards_small/46986414.jpg",
        image_url_cropped:
          "https://images.ygoprodeck.com/images/cards_cropped/46986414.jpg",
      },
      {
        id: 46986415,
        image_url: "https://images.ygoprodeck.com/images/cards/46986415.jpg",
        image_url_small:
          "https://images.ygoprodeck.com/images/cards_small/46986415.jpg",
        image_url_cropped:
          "https://images.ygoprodeck.com/images/cards_cropped/46986415.jpg",
      },
      {
        id: 46986416,
        image_url: "https://images.ygoprodeck.com/images/cards/46986416.jpg",
        image_url_small:
          "https://images.ygoprodeck.com/images/cards_small/46986416.jpg",
        image_url_cropped:
          "https://images.ygoprodeck.com/images/cards_cropped/46986416.jpg",
      },
      {
        id: 46986417,
        image_url: "https://images.ygoprodeck.com/images/cards/46986417.jpg",
        image_url_small:
          "https://images.ygoprodeck.com/images/cards_small/46986417.jpg",
        image_url_cropped:
          "https://images.ygoprodeck.com/images/cards_cropped/46986417.jpg",
      },
      {
        id: 46986418,
        image_url: "https://images.ygoprodeck.com/images/cards/46986418.jpg",
        image_url_small:
          "https://images.ygoprodeck.com/images/cards_small/46986418.jpg",
        image_url_cropped:
          "https://images.ygoprodeck.com/images/cards_cropped/46986418.jpg",
      },
      {
        id: 46986419,
        image_url: "https://images.ygoprodeck.com/images/cards/46986419.jpg",
        image_url_small:
          "https://images.ygoprodeck.com/images/cards_small/46986419.jpg",
        image_url_cropped:
          "https://images.ygoprodeck.com/images/cards_cropped/46986419.jpg",
      },
      {
        id: 36996508,
        image_url: "https://images.ygoprodeck.com/images/cards/36996508.jpg",
        image_url_small:
          "https://images.ygoprodeck.com/images/cards_small/36996508.jpg",
        image_url_cropped:
          "https://images.ygoprodeck.com/images/cards_cropped/36996508.jpg",
      },
    ],
    card_prices: [
      {
        cardmarket_price: "0.03",
        tcgplayer_price: "0.17",
        ebay_price: "2.99",
        amazon_price: "14.45",
        coolstuffinc_price: "0.39",
      },
      {
        id: 5043012,
        name: "Firewall Dragon",
        type: "Link Monster",
        frameType: "link",
        desc: '2+ monsters\r\nOnce while face-up on the field (Quick Effect): You can target monsters on the field and/or GY up to the number of monsters co-linked to this card; return them to the hand. If a monster this card points to is destroyed by battle or sent to the GY: You can Special Summon 1 Cyberse monster from your hand. You can only use each effect of "Firewall Dragon" once per turn.',
        atk: 2500,
        race: "Cyberse",
        attribute: "LIGHT",
        linkval: 4,
        linkmarkers: ["Left", "Top", "Right", "Bottom"],
        ygoprodeck_url: "https://ygoprodeck.com/card/firewall-dragon-8729",
        card_sets: [
          {
            set_name: "2018 Mega-Tin Mega Pack",
            set_code: "MP18-EN062",
            set_rarity: "Secret Rare",
            set_rarity_code: "(ScR)",
            set_price: "6.73",
          },
          {
            set_name: "25th Anniversary Tin: Dueling Heroes",
            set_code: "TN23-EN008",
            set_rarity: "Quarter Century Secret Rare",
            set_rarity_code: "",
            set_price: "0",
          },
          {
            set_name: "Code of the Duelist",
            set_code: "COTD-EN043",
            set_rarity: "Secret Rare",
            set_rarity_code: "(ScR)",
            set_price: "13.52",
          },
          {
            set_name: "Ghosts From the Past",
            set_code: "GFTP-EN131",
            set_rarity: "Ghost Rare",
            set_rarity_code: "(GR)",
            set_price: "65.27",
          },
          {
            set_name: "Maximum Gold: El Dorado",
            set_code: "MGED-EN141",
            set_rarity: "Rare",
            set_rarity_code: "(R)",
            set_price: "1.78",
          },
          {
            set_name: "OTS Tournament Pack 16",
            set_code: "OP16-EN002",
            set_rarity: "Ultimate Rare",
            set_rarity_code: "(UtR)",
            set_price: "34.56",
          },
          {
            set_name: "OTS Tournament Pack 16 (POR)",
            set_code: "OP16-PT002",
            set_rarity: "Ultimate Rare",
            set_rarity_code: "(UtR)",
            set_price: "0",
          },
        ],
        card_images: [
          {
            id: 5043012,
            image_url: "https://images.ygoprodeck.com/images/cards/5043012.jpg",
            image_url_small:
              "https://images.ygoprodeck.com/images/cards_small/5043012.jpg",
            image_url_cropped:
              "https://images.ygoprodeck.com/images/cards_cropped/5043012.jpg",
          },
          {
            id: 5043011,
            image_url: "https://images.ygoprodeck.com/images/cards/5043011.jpg",
            image_url_small:
              "https://images.ygoprodeck.com/images/cards_small/5043011.jpg",
            image_url_cropped:
              "https://images.ygoprodeck.com/images/cards_cropped/5043011.jpg",
          },
          {
            id: 5043010,
            image_url: "https://images.ygoprodeck.com/images/cards/5043010.jpg",
            image_url_small:
              "https://images.ygoprodeck.com/images/cards_small/5043010.jpg",
            image_url_cropped:
              "https://images.ygoprodeck.com/images/cards_cropped/5043010.jpg",
          },
        ],
        card_prices: [
          {
            cardmarket_price: "1.03",
            tcgplayer_price: "0.23",
            ebay_price: "19.99",
            amazon_price: "1.09",
            coolstuffinc_price: "1.99",
          },
          {
            id: 5043012,
            name: "Firewall Dragon",
            type: "Link Monster",
            frameType: "link",
            desc: '2+ monsters\r\nOnce while face-up on the field (Quick Effect): You can target monsters on the field and/or GY up to the number of monsters co-linked to this card; return them to the hand. If a monster this card points to is destroyed by battle or sent to the GY: You can Special Summon 1 Cyberse monster from your hand. You can only use each effect of "Firewall Dragon" once per turn.',
            atk: 2500,
            race: "Cyberse",
            attribute: "LIGHT",
            linkval: 4,
            linkmarkers: ["Left", "Top", "Right", "Bottom"],
            ygoprodeck_url: "https://ygoprodeck.com/card/firewall-dragon-8729",
            card_sets: [
              {
                set_name: "2018 Mega-Tin Mega Pack",
                set_code: "MP18-EN062",
                set_rarity: "Secret Rare",
                set_rarity_code: "(ScR)",
                set_price: "6.73",
              },
              {
                set_name: "25th Anniversary Tin: Dueling Heroes",
                set_code: "TN23-EN008",
                set_rarity: "Quarter Century Secret Rare",
                set_rarity_code: "",
                set_price: "0",
              },
              {
                set_name: "Code of the Duelist",
                set_code: "COTD-EN043",
                set_rarity: "Secret Rare",
                set_rarity_code: "(ScR)",
                set_price: "13.52",
              },
              {
                set_name: "Ghosts From the Past",
                set_code: "GFTP-EN131",
                set_rarity: "Ghost Rare",
                set_rarity_code: "(GR)",
                set_price: "65.27",
              },
              {
                set_name: "Maximum Gold: El Dorado",
                set_code: "MGED-EN141",
                set_rarity: "Rare",
                set_rarity_code: "(R)",
                set_price: "1.78",
              },
              {
                set_name: "OTS Tournament Pack 16",
                set_code: "OP16-EN002",
                set_rarity: "Ultimate Rare",
                set_rarity_code: "(UtR)",
                set_price: "34.56",
              },
              {
                set_name: "OTS Tournament Pack 16 (POR)",
                set_code: "OP16-PT002",
                set_rarity: "Ultimate Rare",
                set_rarity_code: "(UtR)",
                set_price: "0",
              },
            ],
            card_images: [
              {
                id: 5043012,
                image_url:
                  "https://images.ygoprodeck.com/images/cards/5043012.jpg",
                image_url_small:
                  "https://images.ygoprodeck.com/images/cards_small/5043012.jpg",
                image_url_cropped:
                  "https://images.ygoprodeck.com/images/cards_cropped/5043012.jpg",
              },
              {
                id: 5043011,
                image_url:
                  "https://images.ygoprodeck.com/images/cards/5043011.jpg",
                image_url_small:
                  "https://images.ygoprodeck.com/images/cards_small/5043011.jpg",
                image_url_cropped:
                  "https://images.ygoprodeck.com/images/cards_cropped/5043011.jpg",
              },
              {
                id: 5043010,
                image_url:
                  "https://images.ygoprodeck.com/images/cards/5043010.jpg",
                image_url_small:
                  "https://images.ygoprodeck.com/images/cards_small/5043010.jpg",
                image_url_cropped:
                  "https://images.ygoprodeck.com/images/cards_cropped/5043010.jpg",
              },
            ],
            card_prices: [
              {
                cardmarket_price: "1.03",
                tcgplayer_price: "0.23",
                ebay_price: "19.99",
                amazon_price: "1.09",
                coolstuffinc_price: "1.99",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 5043012,
    name: "Firewall Dragon",
    type: "Link Monster",
    frameType: "link",
    desc: '2+ monsters\r\nOnce while face-up on the field (Quick Effect): You can target monsters on the field and/or GY up to the number of monsters co-linked to this card; return them to the hand. If a monster this card points to is destroyed by battle or sent to the GY: You can Special Summon 1 Cyberse monster from your hand. You can only use each effect of "Firewall Dragon" once per turn.',
    atk: 2500,
    race: "Cyberse",
    attribute: "LIGHT",
    linkval: 4,
    linkmarkers: ["Left", "Top", "Right", "Bottom"],
    ygoprodeck_url: "https://ygoprodeck.com/card/firewall-dragon-8729",
    card_sets: [
      {
        set_name: "2018 Mega-Tin Mega Pack",
        set_code: "MP18-EN062",
        set_rarity: "Secret Rare",
        set_rarity_code: "(ScR)",
        set_price: "6.73",
      },
      {
        set_name: "25th Anniversary Tin: Dueling Heroes",
        set_code: "TN23-EN008",
        set_rarity: "Quarter Century Secret Rare",
        set_rarity_code: "",
        set_price: "0",
      },
      {
        set_name: "Code of the Duelist",
        set_code: "COTD-EN043",
        set_rarity: "Secret Rare",
        set_rarity_code: "(ScR)",
        set_price: "13.52",
      },
      {
        set_name: "Ghosts From the Past",
        set_code: "GFTP-EN131",
        set_rarity: "Ghost Rare",
        set_rarity_code: "(GR)",
        set_price: "65.27",
      },
      {
        set_name: "Maximum Gold: El Dorado",
        set_code: "MGED-EN141",
        set_rarity: "Rare",
        set_rarity_code: "(R)",
        set_price: "1.78",
      },
      {
        set_name: "OTS Tournament Pack 16",
        set_code: "OP16-EN002",
        set_rarity: "Ultimate Rare",
        set_rarity_code: "(UtR)",
        set_price: "34.56",
      },
      {
        set_name: "OTS Tournament Pack 16 (POR)",
        set_code: "OP16-PT002",
        set_rarity: "Ultimate Rare",
        set_rarity_code: "(UtR)",
        set_price: "0",
      },
    ],
    card_images: [
      {
        id: 5043012,
        image_url: "https://images.ygoprodeck.com/images/cards/5043012.jpg",
        image_url_small:
          "https://images.ygoprodeck.com/images/cards_small/5043012.jpg",
        image_url_cropped:
          "https://images.ygoprodeck.com/images/cards_cropped/5043012.jpg",
      },
      {
        id: 5043011,
        image_url: "https://images.ygoprodeck.com/images/cards/5043011.jpg",
        image_url_small:
          "https://images.ygoprodeck.com/images/cards_small/5043011.jpg",
        image_url_cropped:
          "https://images.ygoprodeck.com/images/cards_cropped/5043011.jpg",
      },
      {
        id: 5043010,
        image_url: "https://images.ygoprodeck.com/images/cards/5043010.jpg",
        image_url_small:
          "https://images.ygoprodeck.com/images/cards_small/5043010.jpg",
        image_url_cropped:
          "https://images.ygoprodeck.com/images/cards_cropped/5043010.jpg",
      },
    ],
    card_prices: [
      {
        cardmarket_price: "1.03",
        tcgplayer_price: "0.23",
        ebay_price: "19.99",
        amazon_price: "1.09",
        coolstuffinc_price: "1.99",
      },
    ],
  },
];

const CardSearchBar = () => {
    const [currentCards, setcurrentCards] = useState(defaultCards);
    const [searchInput, setSearchInput] = useState("");
    const inputRef = useRef();

    // Focus on Search textbox
    useEffect(() => {
      inputRef.current.focus();
    }, []);

    const handleSearch = (e) => {
      e.preventDefault();
      setSearchInput(e.target.value);
    };


    const handleSubmit = async (e) => {
      e.preventDefault();
      // Set current cards to API response
      const response = await axios.get(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${searchInput}`);
      console.log(response.data.data);
      setcurrentCards(response.data.data)
      console.log(`form submitted ${searchInput}`);
    };
    return (
      <div className="frame">
        <form onSubmit={handleSubmit} className="search-bar">
          <input
            className="card-search-text"
            type="text"
            placeholder="Dark Magician"
            aria-label="CardSeach textbox"
            value={searchInput}
            onChange={handleSearch}
            ref={inputRef}
          />
          <button type="submit">Submit</button>
        </form>
        <CardList cards={currentCards} />;
      </div>
    );
};

export default CardSearchBar;
