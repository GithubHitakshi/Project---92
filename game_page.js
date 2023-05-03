p1_name = localStorage.getItem("p1_name");
p2_name = localStorage.getItem("p2_name");
document.getElementById("player1_name").innerHTML = p1_name;
document.getElementById("player2_name").innerHTML = p2_name;
document.getElementById("q_turn").innerHTML = "Question Turn:" + p1_name;
document.getElementById("a_turn").innerHTML = "Answer Turn:" + p2_name;
p1_score = 0;
p2_score = 0;
question_turn = "player_1";
answer_turn = "player_2";
document.getElementById("player1_score").innerHTML = p1_score;
document.getElementById("player2_score").innerHTML = p2_score;


function sendword()

{
    number_1 = document.getElementById("ans_p1").value;
    number_2 = document.getElementById("ans_p2").value;

    actual_ans = parseInt(number_1) * parseInt(number_2);

    question_no = "<h4>" + number_1 + "X" + number_2 + "</h4>";
    input_box = "<br> Answer: <input type= 'text' id='input_ans'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>CHECK</button>";
    row = question_no + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}

function check() {

    get_answer = document.getElementById("input_ans").value;
    if (get_answer == actual_ans) {
        alert("Well done, This is the correct Answer!!🙂")

        if (answer_turn == "player_1")
        {
            p1_score_update = p1_score + 1;
            document.getElementById("player1_score").innerHTML = p1_score_update;
        } 
        else 
        {
            p2_score_update = p2_score + 1;
            document.getElementById("player2_score").innerHTML = p2_score_update;
        }
       
       }
       else{
        alert("Oops..!! Wrong Answer, The correct Answer is " + actual_ans + "🙂");
       }
      }

      if (question_turn == "player_1") {
        question_turn = "player_2";
        answer_turn = "player_1";

        document.getElementById("q_turn").innerHTML = "Question Turn:" + p2_name;
        document.getElementById("a_turn").innerHTML = "Answer Turn:" + p1_name;


    } else {
        question_turn = "player_1";
        answer_turn = "player_2";

        document.getElementById("q_turn").innerHTML = "Question Turn:" + p1_name;
        document.getElementById("a_turn").innerHTML = "Answer Turn:" + p2_name;
    }

