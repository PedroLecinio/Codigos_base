<?php
// Variável = $
    $cursos = 30;
    $pagina = "php";
    
    echo "Temos $cursos cursos $pagina disponíveis";

    if($pagina === "php"){
        $cursos = 15;
        echo " Temos $cursos disponíveis\n"; 
    }

    //Entregador de delivery ganha 80 reais por dia, porém ainda tem as gorjetas dos clientes

    $valorDia = 80;
    $gorjetas = 40;
    $diaria = $valorDia + $gorjetas;

    echo "Segunda-feira: $diaria";
    
    $gorjetas = 15;
    $diaria = $valorDia + $gorjetas;
    
    echo "\nTerça-feira: $diaria";

    
?>