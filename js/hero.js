var classes = {
	warrior: {
		strength: 3,
		mana: 1,
		agility: 2
	},
	wizard: {
		strength: 1,
		mana: 3,
		agility: 2
	},
	rogue: {
		strength: 2,
		mana: 1,
		agility: 3
	}
};

var hero = {
	name: "",
	race: "",
	sex: null,
	class: "",
	lvl: 1,
	exp: 0,
	strength: 0,
	mana: 0,
	agility: 0,
	spells: [null, null, null, null],
	goods: [null, null, null, null]
};