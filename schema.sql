CREATE SCHEMA dnd_note_taker;
USE dnd_note_taker;

CREATE TABLE users( 
	id CHAR(36) NOT NULL,
	email VARCHAR(60) UNIQUE NOT NULL,
	password VARCHAR(60) NOT NULL,
	first_name VARCHAR(60) NOT NULL,
	last_name VARCHAR(60) NOT NULL,
	created_at TIMESTAMP DEFAULT NOW(),
	PRIMARY KEY(id)
);

CREATE TABLE notes(
	id CHAR(36) NOT NULL,
    userid CHAR(36) NOT NULL, 
	created_at TIMESTAMP DEFAULT NOW(),
    body VARCHAR(2000) NOT NULL,
	PRIMARY KEY(id),
    FOREIGN KEY (userid) REFERENCES users (id)
 );

 CREATE USER 'dnd_note_taker'@'localhost' IDENTIFIED BY 'dnd_note_taker';
 
 GRANT ALL PRIVILEGES ON dnd_note_taker.* TO 'dnd_note_taker'@'localhost';
 FLUSH PRIVILEGES;
 
 ALTER USER 'dnd_note_taker'@'localhost' IDENTIFIED WITH mysql_native_password BY 'dnd_note_taker';
  
 #Test data
 INSERT INTO users (id, email, password, first_name, last_name) VALUE 
	('92807ab4-cb1e-4bf3-8e9b-ab26efe19cb5', 'guest@test.com', '$2b$12$V69FqrzJZu8jg8oSSuBkN.hd0/WcAEv0K3fKM4OxwXykbygS/HQ.2', 'guest','user');
 SELECT * FROM users;
 
 INSERT INTO notes (id, userid, body) VALUE (
 'c07c955b-3604-4702-beab-3251fe096d5a', '92807ab4-cb1e-4bf3-8e9b-ab26efe19cb5', 'Baatezu subtype barbarian character destruction domain diminutive druid eladrin subtype evil subtype fire domain fortitude save material plane negative energy plane reach weapon saving throw school of magic space spider domain swift action transitive plane untrained war domain. Ability drained air subtype breath weapon character dazed domain spell falling force damage half speed lawful monk ooze type outer plane reptilian subtype sacred bonus strength domain thirst threat range touch spell war domain.

 Ability ability modifier attack of opportunity base attack bonus blindsense change shape charm domain class feature concealment critical roll darkvision destruction domain extraplanar subtype giant type gnome domain grappling healing subschool humanoid type incorporeal subtype knowledge domain natural natural weapon pinned profane bonus regeneration spell domain take 20 thrown weapon turning damage unarmed strike.

 5-foot step armor class charm subschool current hit points difficulty class divination divine spell fear cone fine fly gaze hit points ocean domain pattern subschool plant type prerequisite sonic attack special ability spellcaster swift action take 20 telepathy transmutation.

 Archon subtype automatic hit change shape ethereal evil subtype fatigued free action heat dangers huge melee touch attack nonplayer character ocean domain panicked ranged attack shadow subschool spell immunity surprise swallow whole thirst tremorsense water subtype. Abjuration action cantrip catching on fire character compulsion subschool darkness domain fate domain fine giant type knocked down modifier mundane negative level nonlethal damage paralyzed pounce spell descriptor spell resistance suffering domain summoning subschool undeath domain water dangers.');
 
  INSERT INTO notes (id, userid, body) VALUE (
 'a0ff22da-9d5c-470b-af33-0279eb9740e3', '92807ab4-cb1e-4bf3-8e9b-ab26efe19cb5', ' Adventuring party creature type current hit points effective character level energy damage fear aura fear ray projectile weapon scribe take 20 turned. Acid effects bard caster level check elemental type initiative check lethal damage light weapon magical beast type massive damage nonabilities phantasm subschool retribution domain stack undeath domain.
 
 Air subtype animal type antimagic aquatic subtype augmented subtype blindsense bonus calling subschool cleric critical roll direct a spell disease energy drained extraplanar subtype failure family domain fascinated flight hardness kind profane bonus reach weapon redirect a spell resistance bonus sickened skill modifier swarm subtype trained turning check.

 Darkvision enchantment flight grab metal domain one-handed weapon petrified rend spell preparation surprise total concealment treasure two-handed weapon wisdom.

 Charm subschool cold domain cowering energy drain family domain fear cone free action frightened gargantuan grapple check halfling domain initiative modifier material plane outsider type profane bonus result size spell preparation spellcaster summon target turn turn resistance.');
 
 
 SELECT * FROM notes;