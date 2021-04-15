
    
    //Массив хранит значение температуры за 90 дней зимы

    let winterDays = [-48, -46, 48, 27, -20, -35, 43, 4, 9, 10, 41, -46, -4, 0, -38, -49, 25, -46, -48, -23, -25, -22, 12, 38, 19, -20, 26, 4, 19, 23, 26, -41, 4, -13, -9, -11, -7, 38, 27, 41, 14, -35, -38, -44, -44, -22, -24, 29, -32, 41, 7, -25, 3, 27, -45, 10, 48, 8, -34, -49, 17, -16, 41, -11, -50, -6, -34, 20, 14, -18, 39, -28, -33, -27, -48, 40, -37, -44, 0, 46, 36, -34, -50, 8, -3, 26, 40, 10, -36, 24];


    /*Необходимо подсчитать, сколько было замерзание в этот период (замерзания, когда в какой-то день темп-ра плюсовая, а на следующий день минусовая).*/
    
    let qZamerzaniy = 0;
    for (let i=0; i<winterDays.length-1; i++) {
        if (winterDays[i] >=0 && winterDays[i+1]<0) {
            qZamerzaniy = qZamerzaniy+1;
        }


    }

    console.log(`Количество замерзаний ${qZamerzaniy} раз`);


    /*Задания 2. определить какой самый длинный по продолжительности был период заморозков- сколько дней подряд была тем-ра ниже нуля*/
    /*let sumCurrent=0;*/
    let qDays=0;
    let maxDays=0;
    let qCurrentDays=0;
    for (let i=0; i<winterDays.length; i++) {
        
        
        if (winterDays[i]<0) {
            qDays = qDays+1;
            
        } 
        else if (winterDays[i]>=0) {
            
            qCurrentDays=qDays;

            /*console.log(`qDays ${qDays}`);*/
            qDays=0;

            /*if (qDays>maxDays) {
                maxDays=qDays;
                console.log(`maxDays ${maxDays}`);
                qDays=0;
            } */
                  
        } 

        if (qCurrentDays>maxDays) {
            maxDays=qCurrentDays;
            /*console.log(`maxDays ${maxDays}`);*/
            /*qDays=0;*/
        } 
       

        /*qDays=0;*/
                   
        
    }

    console.log(`maxDays ${maxDays}`);


/*
    if (winterDays[i]<0) {
        qDays = qDays+1;
        
    } 
    else if (winterDays[i]>=0) {

        console.log(`qDays ${qDays}`);
        qDays=0;
              
    } 
    
    */

   

    

    