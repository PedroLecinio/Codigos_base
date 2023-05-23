<?php // Escopo global 

    $a = 50;

    function soma(){ //Escopo local - usando 'return' para tirar o valor da function
        global $a; // Global - 0Trazer um escopo global para um local
        $x = $a + 40;
        return $x; 
    }

    echo soma();



?>