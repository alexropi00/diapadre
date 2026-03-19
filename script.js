const letterText =
  "Feliz día del padre al mejor padre del mundo entero, gracias por siempre estar ahí en todo y por todos los recuerdos bonitos y fantasticos momentos que tengo a tu lado, eres una maravillosa y gran persona y me siento muy feliz y honrado de tenerte, aunque me pase mucho tiempo encerrado estudiando y demás, te sigo admirando con todo lo que haces y por todo lo que te quiero, muchas gracias por todo papá. Eres el mejor! ❤️ ❤️";

const art = {
  raichu: `
    <svg viewBox="0 0 240 240" role="img" aria-label="Raichu estilizado">
      <defs>
        <linearGradient id="ra-bg" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="#ffe083" />
          <stop offset="100%" stop-color="#ef8c42" />
        </linearGradient>
      </defs>
      <ellipse cx="120" cy="194" rx="72" ry="18" fill="rgba(0,0,0,0.16)" />
      <path d="M76 52 L56 16 L88 34 Z" fill="#2d1c11" />
      <path d="M164 52 L184 16 L152 34 Z" fill="#2d1c11" />
      <path d="M92 154 C88 117 95 70 120 70 C145 70 152 117 148 154 Z" fill="url(#ra-bg)" />
      <circle cx="120" cy="92" r="38" fill="url(#ra-bg)" />
      <circle cx="89" cy="94" r="10" fill="#f5a1a0" />
      <circle cx="151" cy="94" r="10" fill="#f5a1a0" />
      <circle cx="104" cy="88" r="6.5" fill="#2f1d12" />
      <circle cx="136" cy="88" r="6.5" fill="#2f1d12" />
      <path d="M103 107 C114 117 126 117 137 107" stroke="#2f1d12" stroke-width="6" fill="none" stroke-linecap="round" />
      <circle cx="82" cy="148" r="15" fill="#f6da94" />
      <circle cx="158" cy="148" r="15" fill="#f6da94" />
      <path d="M146 141 C188 138 197 110 181 89 C197 90 213 78 216 56 C191 57 175 72 170 95 C153 101 143 116 146 141 Z" fill="#ffd04f" stroke="#7a5118" stroke-width="4" />
      <circle cx="176" cy="95" r="7" fill="#7a5118" />
    </svg>
  `,
  blastoise: `
    <svg viewBox="0 0 240 240" role="img" aria-label="Blastoise estilizado">
      <defs>
        <linearGradient id="bl-body" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="#8fe2ff" />
          <stop offset="100%" stop-color="#307cd6" />
        </linearGradient>
      </defs>
      <ellipse cx="120" cy="194" rx="72" ry="18" fill="rgba(0,0,0,0.16)" />
      <circle cx="120" cy="120" r="54" fill="#8b5f43" />
      <circle cx="120" cy="120" r="44" fill="#ceb285" />
      <circle cx="120" cy="78" r="34" fill="url(#bl-body)" />
      <path d="M88 116 C73 127 67 151 78 168 C93 161 99 147 99 130 Z" fill="url(#bl-body)" />
      <path d="M152 116 C167 127 173 151 162 168 C147 161 141 147 141 130 Z" fill="url(#bl-body)" />
      <path d="M86 84 L66 68 L79 51 L100 68 Z" fill="#d7e3ea" stroke="#60727f" stroke-width="4" />
      <path d="M154 84 L174 68 L161 51 L140 68 Z" fill="#d7e3ea" stroke="#60727f" stroke-width="4" />
      <circle cx="108" cy="77" r="5.5" fill="#17335f" />
      <circle cx="132" cy="77" r="5.5" fill="#17335f" />
      <path d="M109 96 C116 101 124 101 131 96" stroke="#17335f" stroke-width="5" fill="none" stroke-linecap="round" />
      <circle cx="100" cy="122" r="7" fill="#17335f" opacity="0.25" />
      <circle cx="140" cy="122" r="7" fill="#17335f" opacity="0.25" />
    </svg>
  `,
  gengar: `
    <svg viewBox="0 0 240 240" role="img" aria-label="Gengar estilizado">
      <defs>
        <linearGradient id="ge-body" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="#b574ff" />
          <stop offset="100%" stop-color="#5f2cb0" />
        </linearGradient>
      </defs>
      <ellipse cx="120" cy="194" rx="72" ry="18" fill="rgba(0,0,0,0.18)" />
      <path d="M73 166 C60 144 58 110 74 87 L67 56 L91 72 L108 46 L125 70 L145 49 L154 72 L176 54 L168 86 C183 107 182 144 167 166 Z" fill="url(#ge-body)" />
      <ellipse cx="120" cy="112" rx="58" ry="52" fill="url(#ge-body)" />
      <path d="M87 87 L104 76 L98 96 Z" fill="#fff" />
      <path d="M153 87 L136 76 L142 96 Z" fill="#fff" />
      <path d="M85 118 C97 132 143 132 155 118 C152 149 140 166 120 166 C100 166 88 149 85 118 Z" fill="#31124f" />
      <path d="M94 131 H106 L109 138 L114 131 H126 L129 138 L134 131 H146" stroke="#fff4df" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
      <circle cx="104" cy="100" r="5.2" fill="#351555" />
      <circle cx="136" cy="100" r="5.2" fill="#351555" />
    </svg>
  `,
  charizard: `
    <svg viewBox="0 0 240 240" role="img" aria-label="Charizard estilizado">
      <defs>
        <linearGradient id="ch-body" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="#ffb35e" />
          <stop offset="100%" stop-color="#ef6e30" />
        </linearGradient>
      </defs>
      <ellipse cx="120" cy="198" rx="76" ry="18" fill="rgba(0,0,0,0.18)" />
      <path d="M92 112 L50 84 L40 118 L84 129 Z" fill="#3f5f9a" stroke="#22345a" stroke-width="4" />
      <path d="M148 112 L190 84 L200 118 L156 129 Z" fill="#3f5f9a" stroke="#22345a" stroke-width="4" />
      <path d="M95 168 C88 132 93 82 122 82 C150 82 156 132 149 168 Z" fill="url(#ch-body)" />
      <circle cx="124" cy="94" r="34" fill="url(#ch-body)" />
      <path d="M111 61 L99 42 L116 44 Z" fill="#ffca84" />
      <path d="M140 61 L152 42 L135 44 Z" fill="#ffca84" />
      <circle cx="112" cy="92" r="6" fill="#382010" />
      <circle cx="139" cy="92" r="6" fill="#382010" />
      <path d="M113 111 C121 120 131 120 139 111" stroke="#382010" stroke-width="5" fill="none" stroke-linecap="round" />
      <path d="M147 149 C172 150 191 164 201 189" stroke="#ef6e30" stroke-width="9" fill="none" stroke-linecap="round" />
      <path d="M200 188 C213 182 219 169 215 157 C203 161 197 171 196 181 Z" fill="#ffd96d" />
      <path d="M200 184 C210 178 214 169 212 161 C204 163 199 170 198 177 Z" fill="#ff7b3c" />
    </svg>
  `,
};

const pokemon = {
  raichu: {
    id: "raichu",
    name: "Raichu",
    type: "Eléctrico",
    hp: 138,
    motto: "Velocidad, chispazos y ataques sorprendentes.",
    description:
      "Un aliado rapidísimo. Sus movimientos eléctricos mantienen la presión y pueden rematar pronto a Charizard.",
    art: art.raichu,
    moves: [
      {
        name: "Impactrueno",
        detail: "Ataque directo y veloz.",
        power: 28,
        accuracy: 0.96,
        flavor: "Raichu descarga un rayo limpio sobre Charizard.",
      },
      {
        name: "Voltio Cruel",
        detail: "Más daño, algo de retroceso.",
        power: 36,
        accuracy: 0.9,
        recoil: 8,
        flavor: "Raichu se lanza con una explosión eléctrica brutal.",
      },
      {
        name: "Pulso Cariñoso",
        detail: "Recupera fuerza y sigue luchando.",
        power: 20,
        accuracy: 1,
        heal: 12,
        flavor: "Raichu toma aire, sonríe y recupera energía.",
      },
    ],
  },
  blastoise: {
    id: "blastoise",
    name: "Blastoise",
    type: "Agua",
    hp: 162,
    motto: "Defensa sólida y agua a presión.",
    description:
      "El muro perfecto contra Charizard. Golpea fuerte con agua y aguanta muy bien los contraataques.",
    art: art.blastoise,
    moves: [
      {
        name: "Hidrobomba",
        detail: "Mucho daño y ventaja elemental.",
        power: 40,
        accuracy: 0.9,
        bonusVsCharizard: 10,
        flavor: "Blastoise abre sus cañones y dispara una Hidrobomba imparable.",
      },
      {
        name: "Pulso Agua",
        detail: "Ataque estable y seguro.",
        power: 31,
        accuracy: 0.97,
        bonusVsCharizard: 6,
        flavor: "Blastoise envuelve la arena en una ola precisa.",
      },
      {
        name: "Escudo Marina",
        detail: "Reduce daño y cura un poco.",
        power: 16,
        accuracy: 1,
        heal: 10,
        shield: 8,
        flavor: "Blastoise se protege con una coraza de agua brillante.",
      },
    ],
  },
  gengar: {
    id: "gengar",
    name: "Gengar",
    type: "Fantasma",
    hp: 132,
    motto: "Trucos, risas y ataques difíciles de leer.",
    description:
      "Más tramposo que fuerte. Puede dormir a Charizard y abrir huecos para terminar el combate con estilo.",
    art: art.gengar,
    moves: [
      {
        name: "Bola Sombra",
        detail: "Golpe oscuro y constante.",
        power: 30,
        accuracy: 0.95,
        flavor: "Gengar lanza una esfera de sombras que atraviesa el humo.",
      },
      {
        name: "Hipnosis",
        detail: "Menos daño, Charizard pierde su siguiente turno.",
        power: 18,
        accuracy: 0.94,
        stun: 1,
        flavor: "Gengar fija la mirada y Charizard se queda tambaleando.",
      },
      {
        name: "Niebla Pícara",
        detail: "Cura un poco y prepara el próximo golpe.",
        power: 17,
        accuracy: 1,
        heal: 8,
        boost: 9,
        flavor: "Gengar desaparece entre neblina morada y vuelve con más fuerza.",
      },
    ],
  },
  charizard: {
    id: "charizard",
    name: "Charizard",
    type: "Fuego",
    hp: 150,
    motto: "Guardián del pergamino",
    description: "Un rival orgulloso que no piensa rendirse fácilmente.",
    art: art.charizard,
    moves: [
      {
        name: "Lanzallamas",
        power: 22,
        accuracy: 0.94,
        flavor: "Charizard responde con una llamarada abrasadora.",
      },
      {
        name: "Garra Dragón",
        power: 24,
        accuracy: 0.96,
        flavor: "Charizard carga con una zarpada feroz.",
      },
      {
        name: "Viento Ígneo",
        power: 19,
        accuracy: 1,
        shieldBreak: 4,
        flavor: "Charizard bate las alas y lanza una ráfaga ardiente.",
      },
    ],
  },
};

const memories = [
  {
    src: "fotos/foto-1.jpg",
    alt: "Recuerdo familiar en Madrid",
    title: "Madrid en familia",
    description: "Este marco está listo para enseñar ese recuerdo juntos por la ciudad.",
  },
  {
    src: "fotos/foto-2.jpg",
    alt: "Recuerdo familiar frente a un edificio histórico",
    title: "Otra aventura juntos",
    description: "Aquí irá otro momento especial para acompañar el mensaje del pergamino.",
  },
  {
    src: "fotos/foto-3.jpg",
    alt: "Recuerdo de un paseo en barca entre risas",
    title: "Risas y recuerdos",
    description: "El tercer hueco está preparado para cerrar la historia con una foto bonita.",
  },
];

const state = {
  selectedId: "raichu",
  battle: null,
  typingTimer: null,
};

const elements = {
  stages: [...document.querySelectorAll(".stage")],
  roster: document.querySelector("#roster"),
  selectionPreview: document.querySelector("#selectionPreview"),
  selectedName: document.querySelector("#selectedName"),
  selectedDescription: document.querySelector("#selectedDescription"),
  battleStatusLine: document.querySelector("#battleStatusLine"),
  battleRound: document.querySelector("#battleRound"),
  playerCombatant: document.querySelector("#playerCombatant"),
  enemyCombatant: document.querySelector("#enemyCombatant"),
  moveGrid: document.querySelector("#moveGrid"),
  battleLog: document.querySelector("#battleLog"),
  scrollShell: document.querySelector("#scrollShell"),
  letterMessage: document.querySelector("#letterMessage"),
  memoryGrid: document.querySelector("#memoryGrid"),
};

document.querySelector("#startAdventure").addEventListener("click", () => {
  showStage("selection");
});

document.querySelector("#beginBattle").addEventListener("click", () => {
  beginBattle();
  showStage("battle");
});

document.querySelector("#backToSelection").addEventListener("click", () => {
  showStage("selection");
});

document.querySelector("#playAgain").addEventListener("click", () => {
  resetBattleState();
  showStage("selection");
});

function showStage(stageName) {
  elements.stages.forEach((stage) => {
    stage.classList.toggle("is-active", stage.dataset.stage === stageName);
  });

  if (stageName === "reward") {
    unveilScroll();
  } else {
    elements.scrollShell.classList.remove("is-open");
    stopTyping();
    elements.letterMessage.textContent = "";
  }
}

function renderRoster() {
  const cards = Object.values(pokemon)
    .filter((item) => item.id !== "charizard")
    .map((item) => {
      const selectedClass = item.id === state.selectedId ? " is-selected" : "";
      return `
        <article class="roster-card${selectedClass}">
          <div class="roster-card__head">
            <div>
              <h3>${item.name}</h3>
              <p class="roster-card__type">${item.type}</p>
            </div>
            <span class="chip">${item.hp} HP</span>
          </div>
          <div class="art-frame">
            <div class="monster-art">${item.art}</div>
          </div>
          <p>${item.motto}</p>
          <div class="roster-card__stats">
            ${item.moves.map((move) => `<span class="stat-pill">${move.name}</span>`).join("")}
          </div>
          <div class="roster-card__footer">
            <button class="action action--ghost roster-card__button" data-pokemon="${item.id}" type="button">
              Elegir a ${item.name}
            </button>
          </div>
        </article>
      `;
    })
    .join("");

  elements.roster.innerHTML = cards;

  elements.roster.querySelectorAll("[data-pokemon]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedId = button.dataset.pokemon;
      renderSelectionSummary();
      renderRoster();
    });
  });
}

function renderSelectionSummary() {
  const chosen = pokemon[state.selectedId];
  elements.selectedName.textContent = `${chosen.name} | ${chosen.type}`;
  elements.selectedDescription.textContent = chosen.description;
  elements.selectionPreview.innerHTML = `
    <div class="selection-preview__art">
      <div class="monster-art">${chosen.art}</div>
    </div>
  `;
}

function beginBattle() {
  const chosen = pokemon[state.selectedId];

  state.battle = {
    playerId: chosen.id,
    enemyId: "charizard",
    playerHp: chosen.hp,
    enemyHp: pokemon.charizard.hp,
    playerShield: 0,
    playerBoost: 0,
    enemyStun: 0,
    turn: 1,
    isPlayerTurn: true,
    status: "active",
    log: [
      `${chosen.name} entra en la arena para proteger el mensaje del Día del Padre.`,
      "Charizard ruge y se coloca delante del pergamino legendario.",
    ],
  };

  renderBattle();
}

function resetBattleState() {
  state.battle = null;
}

function renderBattle() {
  const battle = state.battle;
  if (!battle) {
    return;
  }

  const player = pokemon[battle.playerId];
  const enemy = pokemon[battle.enemyId];

  elements.playerCombatant.innerHTML = combatantTemplate({
    title: player.name,
    type: player.type,
    art: player.art,
    hp: battle.playerHp,
    maxHp: player.hp,
    caption: player.description,
  });

  elements.enemyCombatant.innerHTML = combatantTemplate({
    title: enemy.name,
    type: "Jefe final",
    art: enemy.art,
    hp: battle.enemyHp,
    maxHp: enemy.hp,
    caption: enemy.description,
  });

  const turnLabel =
    battle.status === "won"
      ? "Victoria. El pergamino ha sido liberado."
      : battle.status === "lost"
        ? "Derrota. Charizard sigue guardando el pergamino."
        : battle.isPlayerTurn
          ? `Turno ${battle.turn}. Tu momento para atacar.`
          : `Turno ${battle.turn}. Charizard prepara su respuesta.`;

  elements.battleStatusLine.textContent = turnLabel;
  elements.battleRound.textContent = `Turno ${battle.turn}`;
  elements.battleLog.innerHTML = battle.log
    .slice(-6)
    .reverse()
    .map((entry) => `<li>${entry}</li>`)
    .join("");

  elements.moveGrid.innerHTML = player.moves
    .map((move, index) => {
      const disabled = !battle.isPlayerTurn || battle.status !== "active" ? "disabled" : "";
      return `
        <button class="move-button" data-move-index="${index}" type="button" ${disabled}>
          <strong>${move.name}</strong>
          <span>${move.detail}</span>
        </button>
      `;
    })
    .join("");

  elements.moveGrid.querySelectorAll("[data-move-index]").forEach((button) => {
    button.addEventListener("click", () => {
      runPlayerMove(Number(button.dataset.moveIndex));
    });
  });
}

function combatantTemplate({ title, type, art: artMarkup, hp, maxHp, caption }) {
  const percent = Math.max(0, Math.round((hp / maxHp) * 100));
  const dangerClass = percent <= 32 ? " is-danger" : "";

  return `
    <div class="combatant__meta">
      <div>
        <h3>${title}</h3>
        <p>${type}</p>
      </div>
      <span class="chip">${hp} / ${maxHp} HP</span>
    </div>
    <div class="combatant__hp">
      <div class="hp-bar">
        <div class="hp-bar__fill${dangerClass}" style="width: ${percent}%"></div>
      </div>
    </div>
    <div class="combatant__art">
      <div class="monster-art">${artMarkup}</div>
    </div>
    <p class="combatant__caption">${caption}</p>
  `;
}

function runPlayerMove(index) {
  const battle = state.battle;
  if (!battle || battle.status !== "active" || !battle.isPlayerTurn) {
    return;
  }

  const player = pokemon[battle.playerId];
  const move = player.moves[index];
  const hit = Math.random() <= move.accuracy;

  battle.isPlayerTurn = false;

  if (!hit) {
    battle.log.push(`${player.name} usa ${move.name}, pero Charizard esquiva el ataque.`);
    renderBattle();
    window.setTimeout(runEnemyMove, 900);
    return;
  }

  const damageRoll = randomInt(0, 7);
  const totalDamage =
    move.power + damageRoll + (move.bonusVsCharizard || 0) + battle.playerBoost;

  battle.playerBoost = 0;
  battle.enemyHp = Math.max(0, battle.enemyHp - totalDamage);

  if (move.heal) {
    battle.playerHp = Math.min(player.hp, battle.playerHp + move.heal);
  }

  if (move.shield) {
    battle.playerShield += move.shield;
  }

  if (move.boost) {
    battle.playerBoost += move.boost;
  }

  if (move.stun) {
    battle.enemyStun = move.stun;
  }

  if (move.recoil) {
    battle.playerHp = Math.max(1, battle.playerHp - move.recoil);
  }

  battle.log.push(`${move.flavor} ${pokemon.charizard.name} pierde ${totalDamage} HP.`);

  if (move.heal) {
    battle.log.push(`${player.name} recupera ${move.heal} HP.`);
  }

  if (move.shield) {
    battle.log.push(`${player.name} levanta una barrera que absorberá ${move.shield} puntos de daño.`);
  }

  if (move.stun) {
    battle.log.push("Charizard queda aturdido y puede perder su siguiente turno.");
  }

  if (move.recoil) {
    battle.log.push(`${player.name} sufre ${move.recoil} HP de retroceso por el esfuerzo.`);
  }

  renderBattle();

  if (battle.enemyHp <= 0) {
    finishBattle("won");
    return;
  }

  window.setTimeout(runEnemyMove, 900);
}

function runEnemyMove() {
  const battle = state.battle;
  if (!battle || battle.status !== "active") {
    return;
  }

  if (battle.enemyStun > 0) {
    battle.enemyStun -= 1;
    battle.log.push("Charizard intenta moverse, pero el efecto especial lo deja sin turno.");
    battle.turn += 1;
    battle.isPlayerTurn = true;
    renderBattle();
    return;
  }

  const enemy = pokemon.charizard;
  const player = pokemon[battle.playerId];
  const move = enemy.moves[randomInt(0, enemy.moves.length - 1)];
  const hit = Math.random() <= move.accuracy;

  if (!hit) {
    battle.log.push(`Charizard usa ${move.name}, pero ${player.name} evita el golpe.`);
    battle.turn += 1;
    battle.isPlayerTurn = true;
    renderBattle();
    return;
  }

  let totalDamage = move.power + randomInt(0, 6);

  if (battle.playerShield > 0) {
    const absorbed = Math.min(totalDamage, battle.playerShield);
    battle.playerShield -= absorbed;
    totalDamage -= absorbed;
    battle.log.push(`La barrera protege ${absorbed} puntos del ataque de Charizard.`);
  }

  if (move.shieldBreak && battle.playerShield > 0) {
    battle.playerShield = Math.max(0, battle.playerShield - move.shieldBreak);
  }

  battle.playerHp = Math.max(0, battle.playerHp - totalDamage);
  battle.log.push(`${move.flavor} ${player.name} recibe ${totalDamage} HP de daño.`);

  if (battle.playerHp <= 0) {
    renderBattle();
    finishBattle("lost");
    return;
  }

  battle.turn += 1;
  battle.isPlayerTurn = true;
  renderBattle();
}

function finishBattle(result) {
  const battle = state.battle;
  if (!battle) {
    return;
  }

  battle.status = result;
  battle.isPlayerTurn = false;

  if (result === "won") {
    battle.log.push("Charizard cae debilitado. El pergamino legendario se ilumina y aparece ante ti.");
    renderBattle();
    window.setTimeout(() => {
      showStage("reward");
    }, 950);
    return;
  }

  battle.log.push("Charizard mantiene el pergamino a salvo. Habrá que intentarlo otra vez.");
  renderBattle();
}

function renderMemories() {
  elements.memoryGrid.innerHTML = memories
    .map(
      (memory) => `
        <article class="memory-card">
          <div class="memory-card__media">
            <img src="${memory.src}" alt="${memory.alt}" loading="lazy">
            <div class="memory-card__fallback">
              <div>
                <strong>${memory.title}</strong>
                <span>Espacio preparado para tu foto</span>
              </div>
            </div>
          </div>
          <div class="memory-card__caption">
            <h3>${memory.title}</h3>
            <p>${memory.description}</p>
          </div>
        </article>
      `
    )
    .join("");

  elements.memoryGrid.querySelectorAll(".memory-card").forEach((card) => {
    const image = card.querySelector("img");
    image.addEventListener("error", () => {
      card.classList.add("is-missing");
    });
  });
}

function unveilScroll() {
  elements.scrollShell.classList.remove("is-open");
  stopTyping();
  elements.letterMessage.textContent = "";

  window.setTimeout(() => {
    elements.scrollShell.classList.add("is-open");
  }, 180);

  window.setTimeout(() => {
    typeLetter(letterText);
  }, 760);
}

function typeLetter(text) {
  stopTyping();
  const letters = Array.from(text);
  let index = 0;

  state.typingTimer = window.setInterval(() => {
    elements.letterMessage.textContent += letters[index];
    index += 1;

    if (index >= letters.length) {
      stopTyping();
    }
  }, 16);
}

function stopTyping() {
  if (state.typingTimer) {
    window.clearInterval(state.typingTimer);
    state.typingTimer = null;
  }
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

renderRoster();
renderSelectionSummary();
renderMemories();
