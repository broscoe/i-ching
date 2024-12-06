import React from "react";

const hexagramTexts = {
    "111111": {
      name: "Qian (The Creative)",
      meaning: "Strength, creativity, and persistence.",
      lines: [
        "Hidden dragon. Do not act.",
        "The dragon appears in the field.",
        "A noble person works hard day and night. No blame.",
        "The dragon leaps up, but remains cautious.",
        "Flying dragon in the heavens. Advantageous to see the great man.",
        "Arrogant dragon will have cause to repent."
      ]
    },
    "000000": {
      name: "Kun (The Receptive)",
      meaning: "Yielding, nurturing, and acceptance.",
      lines: [
        "Frost underfoot.",
        "Straight, square, great.",
        "Containing and holding to virtue.",
        "A tied sack.",
        "A yellow lower garment. Supreme good fortune.",
        "Dragons fight in the meadow. Their blood is black and yellow."
      ]
    },
    "010001": {
      name: "Zhun (Difficulty at the Beginning)",
      meaning: "Beginnings are challenging but hold great potential.",
      lines: [
        "Hesitation and difficulty in advance.",
        "Crossing the river with care.",
        "Success comes slowly with hard work.",
        "An ox is lost. No blame.",
        "Dangerous ascent. Hold steady.",
        "Moving forward brings misfortune."
      ]
    },
    "101110": {
      name: "Meng (Youthful Folly)",
      meaning: "Seek guidance and clarity.",
      lines: [
        "Do not take action recklessly.",
        "Accept guidance humbly.",
        "Pursue wisdom with care.",
        "Do not punish excessively.",
        "Misfortune if guidance is ignored.",
        "Good fortune from steady learning."
      ]
    },
    "110101": {
      name: "Xu (Waiting)",
      meaning: "Patience and preparation bring success.",
      lines: [
        "Waiting in the fields. No blame.",
        "Danger in the swamp. Hold still.",
        "Take refuge with wise counsel.",
        "Wait for the right time to act.",
        "Success comes to the patient.",
        "Danger approaches. Stay vigilant."
      ]
    },
    "001010": {
      name: "Song (Conflict)",
      meaning: "Conflict arises but can be resolved with wisdom.",
      lines: [
        "Withdraw from unnecessary disputes.",
        "Seek harmony in adversity.",
        "Avoiding conflict brings good fortune.",
        "Compromise is required for peace.",
        "Wise counsel resolves disputes.",
        "Victory through understanding."
      ]
    },
    "110010": {
      name: "Shi (The Army)",
      meaning: "Leadership and discipline are required.",
      lines: [
        "Assemble the army cautiously.",
        "Leadership requires responsibility.",
        "Discipline ensures success.",
        "Avoid arrogance in command.",
        "Victory comes with unity.",
        "The army retreats after success."
      ]
    },
    "010011": {
      name: "Bi (Holding Together)",
      meaning: "Unity and cooperation lead to success.",
      lines: [
        "Hold together in the face of adversity.",
        "Trust is the foundation of unity.",
        "Cooperation requires mutual respect.",
        "Unity brings strength.",
        "Support the group with integrity.",
        "Divide and fall apart."
      ]
    },
    "110111": {
      name: "Xiao Chu (The Taming Power of the Small)",
      meaning: "Small efforts bring gradual progress.",
      lines: [
        "Small victories lead to larger ones.",
        "Avoid overreach in ambition.",
        "Gradual progress ensures stability.",
        "Control impulses with discipline.",
        "Patience leads to harmony.",
        "Overambition brings failure."
      ]
    },
    "111011": {
      name: "Lu (Treading)",
      meaning: "Careful conduct leads to success.",
      lines: [
        "Tread carefully to avoid missteps.",
        "Steady progress ensures safety.",
        "Avoid reckless behavior.",
        "Danger lies in haste.",
        "Balance caution with boldness.",
        "Wisdom lies in foresight."
      ]
    }, 
    "111000": {
        name: "Tai (Peace)",
        meaning: "Harmony and prosperity come through balance.",
        lines: [
          "Peace spreads to all.",
          "Steady growth ensures stability.",
          "Harmony brings success.",
          "Avoid arrogance in prosperity.",
          "Peace requires vigilance.",
          "The cycle turns; peace ends."
        ]
      },
      "000111": {
        name: "Pi (Stagnation)",
        meaning: "Obstruction and difficulty demand patience.",
        lines: [
          "Stagnation at the start.",
          "The wise withdraw from conflict.",
          "Patience leads to improvement.",
          "Change comes from within.",
          "Breakthrough is near.",
          "The end of stagnation brings relief."
        ]
      },
      "111001": {
        name: "Tong Ren (Fellowship with Men)",
        meaning: "Community and shared goals bring success.",
        lines: [
          "Seek fellowship with integrity.",
          "Harmony within the group is key.",
          "Work together for mutual benefit.",
          "Avoid selfish interests in collaboration.",
          "Unity overcomes adversity.",
          "Shared goals lead to shared success."
        ]
      },
      "100111": {
        name: "Da You (Possession in Great Measure)",
        meaning: "Wealth and abundance require responsibility.",
        lines: [
          "Great wealth requires humility.",
          "Generosity ensures lasting success.",
          "Manage abundance wisely.",
          "Avoid greed in prosperity.",
          "Use resources for the greater good.",
          "Abundance shared is abundance multiplied."
        ]
      },
      "100000": {
        name: "Qian (Modesty)",
        meaning: "Humility attracts blessings and avoids conflict.",
        lines: [
          "Modesty brings recognition.",
          "Avoid arrogance in success.",
          "Humility opens doors.",
          "Restraint ensures safety.",
          "The wise are humble in power.",
          "Modesty transforms the situation."
        ]
      },
      "000001": {
        name: "Yu (Enthusiasm)",
        meaning: "Enthusiasm inspires action and progress.",
        lines: [
          "Act with enthusiasm but stay grounded.",
          "Enthusiasm spreads to others.",
          "Joyful action brings good fortune.",
          "Avoid reckless excitement.",
          "Maintain balance in enthusiasm.",
          "Sustained joy leads to success."
        ]
      },
      "100110": {
        name: "Sui (Following)",
        meaning: "Following the right path brings success.",
        lines: [
          "Follow with integrity.",
          "Loyalty to the wise ensures success.",
          "Adaptability leads to harmony.",
          "Avoid blind obedience.",
          "Choose the right path carefully.",
          "Following brings lasting prosperity."
        ]
      },
      "011100": {
        name: "Gu (Work on What Has Been Spoiled)",
        meaning: "Repairing damage requires effort and persistence.",
        lines: [
          "Begin repairs with care.",
          "Steady effort restores balance.",
          "Acknowledge past mistakes.",
          "Avoid blame in restoration.",
          "Diligence brings success.",
          "The damage is repaired fully."
        ]
      },
      "010111": {
        name: "Lin (Approach)",
        meaning: "Great things are possible with preparation.",
        lines: [
          "Prepare carefully for the task.",
          "Approach with confidence and humility.",
          "Opportunities arise through effort.",
          "Avoid complacency in success.",
          "A steady approach ensures victory.",
          "Celebrate success but remain vigilant."
        ]
      },
      "111010": {
        name: "Guan (Contemplation)",
        meaning: "Observation and reflection bring clarity.",
        lines: [
          "Observe the situation carefully.",
          "Contemplation reveals hidden truths.",
          "Take time to reflect before acting.",
          "Avoid hasty decisions.",
          "Wisdom comes from deep contemplation.",
          "Clarity leads to right action."
        ]
      },  "100101": {
        name: "Shi He (Biting Through)",
        meaning: "Resolving conflict requires decisive action.",
        lines: [
          "Bite through the obstacles with care.",
          "Clarity comes from decisive action.",
          "Avoid unnecessary harshness.",
          "Justice brings resolution.",
          "Balance firmness with fairness.",
          "Decisiveness ensures success."
        ]
      },
      "101001": {
        name: "Bi (Grace)",
        meaning: "Beauty and elegance enhance success.",
        lines: [
          "Grace attracts others.",
          "Simple elegance is best.",
          "Beauty without substance fails.",
          "True grace lies in humility.",
          "Decorate the path to inspire.",
          "Grace brings success when balanced."
        ]
      },
      "100000": {
        name: "Bo (Splitting Apart)",
        meaning: "Decay and disintegration require rebuilding.",
        lines: [
          "Splitting begins subtly.",
          "Decay spreads if unchecked.",
          "Accept the inevitability of change.",
          "Rebuild after destruction.",
          "Avoid despair in disintegration.",
          "From destruction comes new growth."
        ]
      },
      "001111": {
        name: "Fu (Return)",
        meaning: "Return to the path of growth and renewal.",
        lines: [
          "Return begins with a single step.",
          "Growth follows from correction.",
          "Be patient in renewal.",
          "Do not rush the process.",
          "Steady progress ensures success.",
          "The cycle begins anew."
        ]
      },
      "111110": {
        name: "Wu Wang (Innocence)",
        meaning: "Acting with sincerity leads to success.",
        lines: [
          "Sincerity inspires trust.",
          "Act without ulterior motives.",
          "Avoid corruption in action.",
          "Innocence brings clarity.",
          "Stay true to your principles.",
          "Purity of intent ensures success."
        ]
      },
      "011000": {
        name: "Da Xu (The Taming Power of the Great)",
        meaning: "Restraint and discipline bring great power.",
        lines: [
          "Hold back with care.",
          "Discipline strengthens the spirit.",
          "Avoid overexertion.",
          "Restraint brings clarity.",
          "Control ensures stability.",
          "Great power arises from patience."
        ]
      },
      "001011": {
        name: "Yi (Nourishment)",
        meaning: "Proper nourishment sustains growth.",
        lines: [
          "Nourish the body and spirit.",
          "Avoid excess in indulgence.",
          "Provide for others generously.",
          "Balanced nourishment ensures health.",
          "Careful planning sustains growth.",
          "True nourishment comes from wisdom."
        ]
      },
      "111100": {
        name: "Da Guo (Preponderance of the Great)",
        meaning: "Handle great responsibilities with care.",
        lines: [
          "A great task begins with preparation.",
          "Balance strength with wisdom.",
          "Avoid arrogance in responsibility.",
          "Act decisively but thoughtfully.",
          "Strength alone is not enough.",
          "Responsibility requires persistence."
        ]
      },
      "100011": {
        name: "Kan (The Abysmal, Water)",
        meaning: "Danger requires caution and adaptability.",
        lines: [
          "Face danger with care.",
          "Adapt to changing circumstances.",
          "Avoid recklessness in risk.",
          "Success comes through persistence.",
          "Balance caution with boldness.",
          "The wise navigate danger skillfully."
        ]
      },
      "110000": {
        name: "Li (The Clinging, Fire)",
        meaning: "Clarity and illumination bring success.",
        lines: [
          "Cling to what is right.",
          "Illumination reveals the path.",
          "Avoid blinding ambition.",
          "Wisdom shines through clarity.",
          "Success requires inner light.",
          "Brilliance inspires others."
        ]
      },  "011101": {
        name: "Xian (Influence)",
        meaning: "Mutual influence fosters connection and harmony.",
        lines: [
          "Be open to positive influences.",
          "Connection brings opportunities.",
          "Influence others with integrity.",
          "Avoid manipulative behavior.",
          "Harmonious relationships strengthen bonds.",
          "True influence comes from sincerity."
        ]
      },
      "101110": {
        name: "Heng (Duration)",
        meaning: "Steadiness and perseverance lead to lasting success.",
        lines: [
          "Consistency builds strength.",
          "Avoid overreaching to maintain balance.",
          "Endurance ensures success.",
          "Perseverance in adversity brings rewards.",
          "Maintain focus on long-term goals.",
          "Steady effort ensures stability."
        ]
      },
      "011001": {
        name: "Dun (Retreat)",
        meaning: "Withdraw from danger to regroup and recover.",
        lines: [
          "Recognize the need to retreat.",
          "Retreat is not defeat.",
          "Regroup and strengthen your position.",
          "Avoid unnecessary conflict.",
          "Retreat with dignity.",
          "Plan your return wisely."
        ]
      },
      "001110": {
        name: "Da Zhuang (The Power of the Great)",
        meaning: "Great power must be used responsibly.",
        lines: [
          "Strength arises from inner stability.",
          "Avoid overconfidence in power.",
          "Use power to benefit others.",
          "Control ensures effectiveness.",
          "Great power demands great responsibility.",
          "Strength is tempered by wisdom."
        ]
      },
      "101101": {
        name: "Jin (Progress)",
        meaning: "Steady progress brings success.",
        lines: [
          "Small steps lead to big achievements.",
          "Progress comes through effort.",
          "Avoid haste in advancement.",
          "Persevere to overcome obstacles.",
          "Celebrate progress, but stay focused.",
          "True progress inspires others."
        ]
      },
      "101000": {
        name: "Ming Yi (Darkening of the Light)",
        meaning: "Adversity dims the light but also strengthens resolve.",
        lines: [
          "Stay strong in the face of difficulty.",
          "Even dimmed light can guide.",
          "Seek allies in adversity.",
          "Perseverance reveals new opportunities.",
          "Clarity emerges after darkness.",
          "Light returns with resilience."
        ]
      },
      "001001": {
        name: "Jia Ren (The Family)",
        meaning: "Harmony within the family ensures stability.",
        lines: [
          "Respect strengthens family bonds.",
          "Support one another with love.",
          "Avoid neglect in relationships.",
          "Harmony requires mutual effort.",
          "The family thrives through unity.",
          "Strengthen the foundation of trust."
        ]
      },
      "100100": {
        name: "Kui (Opposition)",
        meaning: "Opposition creates tension but also growth.",
        lines: [
          "Recognize differences with respect.",
          "Opposition fosters new perspectives.",
          "Avoid unnecessary conflict.",
          "Compromise builds bridges.",
          "Growth comes from understanding differences.",
          "Opposition transforms into unity."
        ]
      },
      "110110": {
        name: "Jian (Obstruction)",
        meaning: "Obstacles are opportunities for growth.",
        lines: [
          "Face obstacles with courage.",
          "Learn from challenges.",
          "Patience overcomes obstructions.",
          "Wisdom reveals a path forward.",
          "Obstacles strengthen resilience.",
          "Overcome and emerge stronger."
        ]
      },
      "001101": {
        name: "Xie (Deliverance)",
        meaning: "Release from tension brings relief and renewal.",
        lines: [
          "Relief comes from decisive action.",
          "Let go of past burdens.",
          "Freedom requires responsibility.",
          "Renewal follows deliverance.",
          "Release tension to move forward.",
          "Clarity and renewal bring peace."
        ]
      },  "110101": {
        name: "Sun (Decrease)",
        meaning: "Reduction and restraint bring clarity and growth.",
        lines: [
          "Decrease leads to greater focus.",
          "Give up excess for simplicity.",
          "Find balance through reduction.",
          "Restraint strengthens character.",
          "Simplify to achieve clarity.",
          "Less is more; success follows restraint."
        ]
      },
      "101011": {
        name: "Yi (Increase)",
        meaning: "Growth and abundance come from generosity.",
        lines: [
          "Increase requires effort.",
          "Share abundance to multiply blessings.",
          "Generosity attracts success.",
          "Avoid greed in growth.",
          "Balance expansion with stability.",
          "Sustained growth brings harmony."
        ]
      },
      "100001": {
        name: "Guai (Breakthrough)",
        meaning: "Decisive action leads to success.",
        lines: [
          "Breakthrough begins with resolve.",
          "Act decisively but wisely.",
          "Avoid hesitation in opportunity.",
          "Courage ensures success.",
          "Breakthrough brings clarity.",
          "A new path is revealed."
        ]
      },
      "011110": {
        name: "Gou (Coming to Meet)",
        meaning: "Approach with intention and openness.",
        lines: [
          "Openness attracts opportunities.",
          "Approach others with sincerity.",
          "Avoid impulsiveness in encounters.",
          "Mutual respect fosters connection.",
          "A balanced approach ensures success.",
          "Meeting leads to fruitful collaboration."
        ]
      },
      "100010": {
        name: "Cui (Gathering Together)",
        meaning: "Unity strengthens and inspires.",
        lines: [
          "Gather with purpose.",
          "Strength comes from unity.",
          "Support others to create harmony.",
          "Avoid division in the group.",
          "Shared goals lead to success.",
          "The group thrives with clear vision."
        ]
      },
      "010100": {
        name: "Sheng (Pushing Upward)",
        meaning: "Steady effort ensures advancement.",
        lines: [
          "Begin with small steps upward.",
          "Patience is key in progress.",
          "Avoid haste in rising.",
          "Consistency builds success.",
          "Advancement comes through humility.",
          "Steady ascent leads to fulfillment."
        ]
      },
      "101111": {
        name: "Kun (Oppression)",
        meaning: "Challenges demand resilience and creativity.",
        lines: [
          "Oppression tests strength.",
          "Find support during hardship.",
          "Adversity reveals hidden resources.",
          "Resilience overcomes oppression.",
          "Avoid despair in difficulty.",
          "Relief comes through perseverance."
        ]
      },
      "111101": {
        name: "Jing (The Well)",
        meaning: "Renewal and sustenance come from shared resources.",
        lines: [
          "The well must be maintained.",
          "Nourish the community with care.",
          "Resources must be shared wisely.",
          "Renewal brings fresh opportunities.",
          "Avoid neglecting vital sources.",
          "The well brings life to all."
        ]
      },
      "011010": {
        name: "Ge (Revolution)",
        meaning: "Change requires courage and adaptability.",
        lines: [
          "Revolution begins with necessity.",
          "Adapt to new circumstances.",
          "Change brings opportunity.",
          "Avoid recklessness in revolution.",
          "Balance change with stability.",
          "Transformation leads to renewal."
        ]
      },
      "010110": {
        name: "Ding (The Cauldron)",
        meaning: "Nourishment and transformation bring prosperity.",
        lines: [
          "The cauldron nourishes all.",
          "Transformation begins within.",
          "Success requires sustained effort.",
          "Balance in nourishment ensures harmony.",
          "Cultivate inner strength.",
          "The cauldron overflows with abundance."
        ]
      },  "110011": {
        name: "Zhen (The Arousing, Thunder)",
        meaning: "Sudden shocks bring awakening and movement.",
        lines: [
          "Shock awakens clarity.",
          "Respond to disruption with calm.",
          "Courage steadies in chaos.",
          "Adapt quickly to change.",
          "Growth comes from the unexpected.",
          "Thunder clears the way forward."
        ]
      },
      "001100": {
        name: "Gen (Keeping Still, Mountain)",
        meaning: "Stillness and reflection bring peace.",
        lines: [
          "Stillness reveals clarity.",
          "Patience overcomes restlessness.",
          "Reflection strengthens resolve.",
          "Avoid unnecessary movement.",
          "Peace comes from inner calm.",
          "Stillness allows for renewal."
        ]
      },
      "110100": {
        name: "Jian (Development)",
        meaning: "Gradual development leads to stability.",
        lines: [
          "Growth begins slowly.",
          "Patience fosters development.",
          "Avoid rushing progress.",
          "Gradual steps ensure success.",
          "Steady effort builds stability.",
          "Development reaches fruition."
        ]
      },
      "001001": {
        name: "Gui Mei (The Marrying Maiden)",
        meaning: "Commitments require clear intentions.",
        lines: [
          "Commit carefully to new endeavors.",
          "Avoid impulsive decisions.",
          "Balance personal and collective goals.",
          "Commitment strengthens relationships.",
          "Clarity ensures successful unions.",
          "Wisdom guides the commitment process."
        ]
      },
      "101100": {
        name: "Feng (Abundance)",
        meaning: "Abundance requires gratitude and balance.",
        lines: [
          "Abundance brings opportunities.",
          "Share abundance generously.",
          "Avoid greed in prosperity.",
          "Gratitude strengthens abundance.",
          "Balance ensures sustainability.",
          "Abundance multiplies through harmony."
        ]
      },
      "001101": {
        name: "Lv (The Traveler)",
        meaning: "Travel and exploration broaden perspectives.",
        lines: [
          "Travel brings growth and insight.",
          "Respect local customs.",
          "Adapt to new environments.",
          "Exploration fosters understanding.",
          "Avoid recklessness in travel.",
          "The journey reveals new paths."
        ]
      },
      "101011": {
        name: "Xun (The Gentle, Wind)",
        meaning: "Gentle persistence brings success.",
        lines: [
          "Gentle effort overcomes obstacles.",
          "Adaptability ensures progress.",
          "Avoid rigidity in challenges.",
          "Subtle changes lead to growth.",
          "Consistency builds strength.",
          "Gentleness inspires harmony."
        ]
      },
      "110101": {
        name: "Dui (The Joyous, Lake)",
        meaning: "Joy and openness attract success.",
        lines: [
          "Joy inspires action.",
          "Openness invites opportunities.",
          "Avoid overindulgence in pleasure.",
          "True joy arises from inner peace.",
          "Harmony brings lasting happiness.",
          "Joy strengthens connections."
        ]
      },
      "101101": {
        name: "Huan (Dispersion)",
        meaning: "Dispersing obstacles brings clarity and unity.",
        lines: [
          "Disperse tension with calm.",
          "Unity follows from clarity.",
          "Obstacles fade through effort.",
          "Avoid division in adversity.",
          "Harmony restores balance.",
          "Clarity emerges after dispersion."
        ]
      },
      "010010": {
        name: "Jie (Limitation)",
        meaning: "Boundaries ensure focus and stability.",
        lines: [
          "Set clear boundaries for success.",
          "Avoid overextending yourself.",
          "Discipline strengthens resolve.",
          "Boundaries create space for growth.",
          "Clarity comes from limitation.",
          "Limits provide a foundation for achievement."
        ]
      },
      "111111": {
        name: "Qian (The Creative, Heaven)",
        meaning: "Pure creativity and strength lead to success.",
        lines: [
          "Creativity begins within.",
          "Strength lies in clarity of purpose.",
          "Persistence ensures success.",
          "The creative inspires others.",
          "Pure energy drives achievement.",
          "Creation leads to harmony."
        ]
      },
      "000000": {
        name: "Kun (The Receptive, Earth)",
        meaning: "Receptivity and nurturing bring abundance.",
        lines: [
          "Receptivity opens new paths.",
          "Nurture others with care.",
          "Humility strengthens relationships.",
          "Patience brings growth.",
          "Abundance comes through receptivity.",
          "Balance nurtures all things."
        ]
      },    
  };
  

const Interpretation = ({ hexagram, changingLines }) => {
  const hexagramKey = hexagram.map(line => (line === "yang" ? "1" : "0")).join("");
  const hexagramData = hexagramTexts[hexagramKey] || { name: "Unknown", meaning: "Not found in I Ching database." };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Interpretation</h2>
      <p>
        <strong>Hexagram:</strong> {hexagramData.name}
      </p>
      <p>{hexagramData.meaning}</p>
      {changingLines.length > 0 && (
        <p>
          <strong>Changing Lines:</strong> {changingLines.join(", ")}
        </p>
      )}
    </div>
  );
};

export default Interpretation;
