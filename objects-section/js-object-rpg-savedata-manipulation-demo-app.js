/*
    Sample App: Basic RPG Save Data Manipulation
    Author: Mikoto @ KuroyukiDev
    Version: v1.0.5
    Last Edited on: 2018-10-29(Mon) @ 9:40am JST
    This demo is related to:
        > JS Bootcamp (2018) - Section 5, Lecture 29
            on Udemy by Andrew Mead
*/

let savedata = {
    game1: {
        username: 'Ousawa Akatsuki',
        lvl: 125,
        gear: {
            armor: {
                head: 'Overlord Hood',
                body: 'Legendary Chaos Dragon Robes',
                arms: 'Reaper Gloves'
            },
            weapons: {
                leftHand: null,
                rightHand: null,
                twoHanded: 'Inferno Tempest Twinblades'
            }
        }
    },
    game2: {
        username: 'Zippy chan',
        lvl: 1,
        gear: {
            armor: {
                head: null,
                body: null,
                arms: null
            },
            weapons: {
                leftHand: null,
                rightHand: null,
                twoHanded: null
            }
        }
    }
};

let levelUpper = (profile) => {
    profile.lvl +=1;
};

let changeGear = (profile, newGearSet) => {
    profile.gear = newGearSet;
};

let showGameData = (profile) => {
    console.log(`\n > Username: ${profile.username} ( Lvl: ${profile.lvl} )`);
    console.log(`\n > Gear:`);
    console.log(`\tArmor:\n`);
    if (profile.gear.armor.head) {
        console.log(`\t> Head: ${profile.gear.armor.head}`);
    } else {

    }
    if (profile.gear.armor.body) {
        console.log(`\t> Body: ${profile.gear.armor.body}`);
    } else {

    }
    if (profile.gear.armor.arms) {
        console.log(`\t> Arms: ${profile.gear.armor.arms}`);
    } else {

    }
    if (!profile.gear.armor.head && !profile.gear.armor.body && !profile.gear.armor.arms) {
        console.log(`\t> None`);
    } else {

    }

    console.log(`\n\tWeapons:\n`);
    if (profile.gear.weapons.leftHand) {
        console.log(`\t> Left Hand: ${profile.gear.weapons.leftHand}`);
    } else {

    }
    if (profile.gear.weapons.rightHand) {
        console.log(`\t> Right Hand: ${profile.gear.weapons.rightHand}`);
    } else {

    }
    if (profile.gear.weapons.twoHanded) {
        console.log(`\t> Two Handed: ${profile.gear.weapons.twoHanded}`);
    } else {

    }
    if (!profile.gear.weapons.twoHanded && !profile.gear.weapons.leftHand && !profile.gear.weapons.rightHand) {
        console.log(`\t> None`);
    } else {

    }
    console.log('\n\n=================================================\n\n');
};

const newGear2 = {
    armor: {
        head: null,
        body: 'Hard Leather Vest',
        arms: 'Leather Gloves'
    },
    weapons: {
        leftHand: 'Short Sword',
        rightHand: 'Short Sword',
        twoHanded: null
    }
};

showGameData(savedata.game2);

levelUpper(savedata.game2);
levelUpper(savedata.game2);
levelUpper(savedata.game2);
levelUpper(savedata.game2);
changeGear(savedata.game2, newGear2);

showGameData(savedata.game2);

showGameData(savedata.game1);