<template>
  <div class="q-pa-md bg-image">
    <div class="q-gutter-md row items-start">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card dark bordered center class="bg-grey-9 my-card">
            <q-card-section>
              <div class="text-h6">About the Battleship Game</div>
            </q-card-section>
            <q-separator dark inset></q-separator>
            <q-card-section horizontal>

              <q-card-section>
                Battleship (also Battleships or Sea Battle[1]) is a strategy type guessing game for two players.<br>
                It is played on ruled grids (paper or board) on which each player's fleet of ships (including
                battleships) are marked.<br>
                The locations of the fleets are concealed from the other player.<br>
                Players alternate turns calling "shots" at the other player's ships, and the objective of the game
                is to destroy
                the opposing player's fleet.<br>
              </q-card-section>
              <q-separator dark inset></q-separator>
              <q-img
                class="col-2"
                src="images/Battleship_game_board.jpg"
              ></q-img>

            </q-card-section>
            <q-card-section horizontal>

              <q-card-section>
                Battleship is known worldwide as a pencil and paper game which dates from World War I. <br>
                It was published by various companies as a pad-and-pencil game in the 1930s, and was released as a
                plastic board game
                by Milton Bradley in 1967. <br>
                The game has spawned electronic versions, video games, smart device apps and a film.
              </q-card-section>
              <q-img
                class="col-2"
                src="images/battleshipGame.jpg"
              ></q-img>

            </q-card-section>
          </q-card>

          <q-card dark bordered class="bg-grey-9 my-card">
            <q-card-section>
              <div class="text-h6">History of Battleship</div>
            </q-card-section>

            <q-separator dark inset></q-separator>

            <q-card-section>
              The game of Battleship is thought to have its origins in the French game L'Attaque played during World
              War I, although parallels have also been drawn to E. I. Horsman's 1890 game Basilinda, and the game is
              said to have been played by Russian officers before World War I. <br>
              The first commercial version of the game was Salvo, published in 1931 in the United States by the
              Starex company. <br>
              Other versions of the game were printed in the 1930s and 1940s, including the Strathmore Company's
              Combat: The Battleship Game, Milton Bradley's Broadsides: A Game of Naval Strategy and Maurice L.
              Freedman's Warfare Naval Combat. Strategy Games Co. produced a version called Wings which pictured
              planes flying over the Los Angeles Coliseum. All of these early editions of the game consisted of
              pre-printed pads of paper.[2]

              <br><br>
              Players in a Battleship tournament aboard a U.S. Navy vessel
              In 1967 Milton Bradley introduced a version of the game that used plastic boards and pegs. Conceived
              by Ed Hutchins, play was on pegboards using miniature plastic ships. In 1977, Milton Bradley also
              released a computerized Electronic Battleship.[4] Electronic Battleship was designed by Dennis Wyman
              and Bing McCoy and reputed to be the first toy with a sound chip. It was followed in 1989 by
              Electronic Talking Battleship.[5] In 2008, an updated version of Battleship was released, using
              hexagonal tiles. In the updated version, each player's board contains several islands on which
              "captured man" figurines can be placed. Ships may be placed only around the islands, and only in the
              player's half of the board. When the movie Battleship was released, the board game reverted to the
              original 1967 style. The 2008 updated version is still available as Battleship Islands.
              <br><br>
              Battleship was one of the earliest games to be produced as a computer game, with a version being
              released for the Z80 Compucolor in 1979. Many computer editions of the game have been produced since.
              In Clubhouse Games for the Nintendo DS, Battleship is known as Grid Attack. It is played on an 8×8
              grid, and includes slight variations, such as four-player gameplay, and various ship sizes and shapes.
              Versions of Battleship appear as applications on numerous social networking services.
              <br><br>
              Battleship was also part of Hasbro Family Game Night for the PlayStation 2 and Wii, as well as the
              Xbox 360 (Xbox Live Arcade). These alter the rules, including the size of the grid (8×12 in the NES
              version, 8×8 in the Game Boy version), size of ships (it is common to feature a submarine that takes
              up a single square) and special shot missiles for each ship. For example, in the NES version the
              cruiser has a five-shot missile which strikes five squares in an X pattern on the grid in one turn.
              Submarine-tracking sonar and aerial reconnaissance to spot ships are also features.
              <br><br>
              A minigame version of Battleship was used in the third season of The Hub's Family Game Night, which
              uses a 5×5 grid and the first team to sink three ships wins the game.
              <br><br>
              In 2012, the military science fiction action movie Battleship was released, which was inspired by the
              Milton Bradley board game. A version of Battleship based on the movie was released in which one side
              had alien ship playing pieces.
            </q-card-section>
          </q-card>


        </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "AboutTheGame.vue"
}
</script>


<style >

.bg-image{
  background-image: url("/images/seaBackground1Wide.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
