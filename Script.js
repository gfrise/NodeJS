// Promises lucky draw

// The `luckyDraw` function returns a promise. Create a promise chain where the function is called for for each of the players: Joe, Caroline and Sabrina

// Log out the resolved value for each promise and handle any promise rejections in the chain.

// ```

function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

async function getResult() {
  try {
    const Tina = await luckyDraw('Tina')
    console.log(Tina)

    const Jorge = await luckyDraw('Jorge')
    console.log(Jorge)

    const Julien = await luckyDraw('Julien')
    console.log(Julien)
  }
  catch (error) {
    console.log(error)
  }
}
getResult()
