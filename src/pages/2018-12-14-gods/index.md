---
date: "2018-12-14T18:00"
title: "Gloaming Lands 3: Gods"
tags: ["random tables", "gloaming lands", "setting"]
published: "false"
---

Gods are the rulers of the places between where men dwell. The deep forests, caves and ruins.

Minor gods dot the Gloaming Lands. Each [settlement](/2018-12-10-settlements) will have a shrine and practice rituals to appease their local spirit and keep it at bay. Some gods have sympathy for the plight of man. Some are hostile. Most are ambivalent. They are concerned with the preservation of their own power.

<table-roller table="gods" buttons='[["What god is here?", {
    "Power": "{3d6} HD",
    "Attitude": "2d6:Attitude",
    "Domain": "d10:Domain (d10)",
    "Form": "d8:Form (d8)",
    "Ritual": "d6:Ritual (d6)",
    "Ritual focus": "d12:Ritual focus (d12)"
}], ["Random animal", {
    "~~resultType": "append",
    "~~buttonStyle": "secondary",    
    "Animal": "Animal"
}]]' data='{
    "Animal": ["Ox","Chicken","Duck","Carp","Horse","Monkey","Crocodile","Ape","Deer","Eagle","Raven","Frog","Crab","Snake","Eel","Fox","Dog","Cat","Bat","Crane"],
    "Attitude": ["","Wrathful","Hostile","Hostile","Hostile","Ambivalent","Ambivalent","Ambivalent","Benign","Benign","Benign","Friendly"]
}'></table-roller>

Animals from [here](/2018-12-6-animals).

## Table of Gods

### God Power

Roll 3d6 for a god's Power.

The Power of a god defines several things about it — it's Hit Dice, the size it presents itself to people, and the level of devotion it expects from the people within its realm.

| 2d6      | Power level    | Rituals
|----------|----------------|--------
| 3-7      | Personal       | Rare. Practiced at seasonal festivals.
| 8-13     |                | 
| 14-18    |                | Constant. Deeply ingrained into life. 

### God details

<div data-table-marker="gods"></div>

| d12  | Domain (d10)          | Form (d8)                   | Ritual (d6)  | Ritual focus (d12)
|------|-----------------------|-----------------------------|--------------|--------------------
| 1    | Water, Sea, River     | Human, animal features      | Sacrifice    | Land               
| 2    | Sky, Stars            | Human, twisted proportions  | Congregation | Liquor             
| 3    | Darkness, Night       | Human, shaped by domain     | Acquisition  | Sex                
| 4    | Light, Sun            | Animal, human features      | Abstinence   | Tools              
| 5    | Storm, Wind           | Animal, twisted proportions | Consecration | People             
| 6    | Earth, Forest         | Animal, shaped by domain    | Desecration  | Animals            
| 7    | War, Power            | Monstrous                   |              | Food               
| 8    | Agriculture, Business | Formless                    |              | Gold               
| 9    | Food, Fertility       |                             |              | Water              
| 10   | Wisdom, Learning      |                             |              | Knowledge          
| 11   |                       |                             |              | Music              
| 12   |                       |                             |              | Time               

### God attitude

This is the god's base attitude to the peoples and settlements within the area it rules.

Roll with a -1 modifier if there are any cities or heavy industry within the area.

Roll with a +1 modifier if the people in the area are particularly pious.

| 2d6  | Attitude          | Detail
|------|-------------------|-------------------------
| 2    | Wrathful          | The realm is blighted by the god's domain.
| 3-5  | Hostile           | The god will blight the realm when their rituals are not observed.
| 6-8  | Ambivalent        | -
| 9-11 | Benign            | The god will grant blessings when their rituals are observed.
| 12   | Friendly          | The realm is blessed by the god's domain.

## Killing a god

Stat a god as a magic user of equivalent level to it's HD, with physical stats.
