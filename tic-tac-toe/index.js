const turnDiv = document.querySelector('.turn')
const pendingDiv = document.querySelector('.pending')
const boxesDiv = document.querySelectorAll('.b')
let real_time_status = true;
let t_u_r_n = true;
let winner = null;
const game_status = () => {
    const pos0_0ition = boxesDiv[0].classList[2]
    const pos1_0ition = boxesDiv[1].classList[2]
    const pos2_0ition = boxesDiv[2].classList[2]
    const pos0_1ition = boxesDiv[3].classList[2]
    const pos1_1ition = boxesDiv[4].classList[2]
    const pos2_1ition = boxesDiv[5].classList[2]
    const pos0_2ition = boxesDiv[6].classList[2]
    const pos1_2ition = boxesDiv[7].classList[2]
    const pos2_2ition = boxesDiv[8].classList[2]
    const final_winner = (pos) => {
        real_time_status = false;
        winner = pos;
        turnDiv.innerHTML = `${pos} is winner!!!`;
    }

    function playAudio(url) {
        new Audio(url).play();
    }
    if (pos0_0ition && pos0_0ition === pos1_0ition && pos2_0ition === pos1_0ition && real_time_status) {
        final_winner(pos0_0ition);
        if (pos0_0ition === 'x') {
            playAudio("sound/gesture-192.mp3");
        } else {
            playAudio("sound/chimes-440.mp3");
        }
        boxesDiv[0].classList.add('w')
        boxesDiv[1].classList.add('w')
        boxesDiv[2].classList.add('w')
    }
    if (pos0_1ition && pos1_1ition === pos2_1ition && pos0_1ition === pos1_1ition && real_time_status) {
        final_winner(pos0_1ition);
        if (pos0_1ition === 'x') {
            playAudio("sound/gesture-192.mp3");
        } else {
            playAudio("sound/chimes-440.mp3");
        }
        boxesDiv[3].classList.add('w')
        boxesDiv[4].classList.add('w')
        boxesDiv[5].classList.add('w')
    }
    if (pos0_2ition && pos1_2ition === pos0_2ition && pos1_2ition === pos2_2ition && real_time_status) {
        final_winner(pos0_2ition);
        if (pos0_2ition === 'x') {
            playAudio("sound/gesture-192.mp3");
        } else {
            playAudio("sound/chimes-440.mp3");
        }
        boxesDiv[6].classList.add('w')
        boxesDiv[7].classList.add('w')
        boxesDiv[8].classList.add('w')
    }
    if (pos0_0ition && pos0_1ition === pos0_0ition && pos0_1ition === pos0_2ition && real_time_status) {
        final_winner(pos0_0ition);
        if (pos0_0ition === 'x') {
            playAudio("sound/gesture-192.mp3");
        } else {
            playAudio("sound/chimes-440.mp3");
        }
        boxesDiv[0].classList.add('w')
        boxesDiv[3].classList.add('w')
        boxesDiv[6].classList.add('w')
    }
    if (pos1_0ition && pos1_0ition === pos1_1ition && pos1_1ition === pos1_2ition && real_time_status) {
        final_winner(pos1_0ition);
        if (pos1_0ition === 'x') {
            playAudio("sound/gesture-192.mp3");
        } else {
            playAudio("sound/chimes-440.mp3");
        }
        boxesDiv[1].classList.add('w')
        boxesDiv[4].classList.add('w')
        boxesDiv[7].classList.add('w')
    }
    if (pos2_0ition && pos2_0ition === pos2_1ition && pos2_1ition === pos2_2ition && real_time_status) {
        final_winner(pos2_0ition);
        if (pos2_0ition === 'x') {
            playAudio("sound/gesture-192.mp3");
        } else {
            playAudio("sound/chimes-440.mp3");
        }
        boxesDiv[2].classList.add('w')
        boxesDiv[5].classList.add('w')
        boxesDiv[8].classList.add('w')
    }
    if (pos0_0ition && pos1_1ition === pos0_0ition && pos1_1ition === pos2_2ition && real_time_status) {
        final_winner(pos1_1ition);
        if (pos1_1ition === 'x') {
            playAudio("sound/gesture-192.mp3");
        } else {
            playAudio("sound/chimes-440.mp3");
        }
        boxesDiv[0].classList.add('w')
        boxesDiv[4].classList.add('w')
        boxesDiv[8].classList.add('w')
    }
    if (pos2_0ition && pos2_0ition === pos1_1ition && pos1_1ition === pos0_2ition && real_time_status) {
        final_winner(pos1_1ition);
        if (pos1_1ition === 'x') {
            playAudio("sound/gesture-192.mp3");
        } else {
            playAudio("sound/chimes-440.mp3");
        }
        boxesDiv[2].classList.add('w')
        boxesDiv[4].classList.add('w')
        boxesDiv[6].classList.add('w')
    }
    if (pos0_0ition && pos1_0ition && pos2_0ition && pos0_1ition && pos0_2ition && pos1_1ition && pos2_2ition && pos1_2ition && pos2_1ition && real_time_status) {
        real_time_status = false;
        turnDiv.innerHTML = "It's a tie";
        playAudio("sound/got-it-done-613.mp3")
    }

    if (t_u_r_n && real_time_status) {
        turnDiv.innerHTML = "X"
        playAudio("sound/play1.mp3");
    }
    if (!t_u_r_n && real_time_status) {
        turnDiv.innerHTML = "O"
        playAudio("sound/play2.mp3");
    }
}

const p_e_n = (er) => {
    console.log(er)
}
const t_u_r = (ab) => console.log(ab);
const r_e_f_r_e_s_h = () => {

}
const b_o_x = (cd) => {

    const classList = cd.target.classList
    if (classList[2] === 'x' || classList[2] === 'o' || !real_time_status) {
        return
    }
    const location_0f_box = classList[1]
    if (t_u_r_n) {
        classList.add('x')
        t_u_r_n = !t_u_r_n
        game_status()
    } else {
        classList.add('o')
        t_u_r_n = !t_u_r_n
        game_status()
    }

}
const elementpend = document.getElementById('pend')
    elementpend.addEventListener("click", () => {
        for (val of boxesDiv) {
            val.classList.remove('x')
            val.classList.remove('o')
            val.classList.remove('w')
            turnDiv.innerHTML = "turn";
            real_time_status = true;
        }
    })

pendingDiv.addEventListener('click', p_e_n)
turnDiv.addEventListener('click', t_u_r)
for (var boxDiv of boxesDiv) {
    boxDiv.addEventListener('click', b_o_x)

}
