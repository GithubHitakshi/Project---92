function login()
{
    
        player_1name=document.getElementById("p1_name").value;
        player_2name=document.getElementById("p2_name").value;
        localStorage.setItem("p1_name", player_1name);
        localStorage.setItem("p2_name", player_2name);

        window.location = "game_page.html";
    
}

    
    


   


