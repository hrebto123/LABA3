function maxTemp() {
	// AJAX запрос 
	$.ajax({
		// Ссылка на ресурс
    	url : "https://knureigs.github.io/itech/lb/ITech1_JS/ITech1_LabJS_meteo_kh.htm",
    	// htmlTemp - переменная хранящая HTML-код странички
    	success : function(htmlTemp) {
    		let indexMaxTemp = 9;		// Для нахождения колонки с температурой
    		let indexDateTemp = 10; 	// Для нахождения колонки с датой
    		let dateMaxTemp;			// Дата при максимальной температуре
    		let date;					
    		let temp;
    		let max = -99999;			// Максимальная температура

    		// Ищем элементы "tr"(строки), и проходим по каждой ячейке
        	$(htmlTemp).find("tr").children("td").each(function() {
        		// Проверка на ячейку с датой
				if (indexDateTemp == 12) {
					date = $(this).text();	// Записываем дату
					indexDateTemp = 0;		// Обнуляем индекс
				}

				// Проверка на ячейку с температурой
        		if (indexMaxTemp == 12) {
        			temp = $(this).text();	// Записываем температуру
        			// Сравниваем с максимальной
        			if (max < Number(temp)) {
        				max = Number(temp);
        				dateMaxTemp = date; 
        			}
        			indexMaxTemp = 0;
        		}

        		// Прибавляем +1 к индексам после каждой итерации
        		indexMaxTemp++;
        		indexDateTemp++;
        	});

        	// Выводим инфу на экран
        	alert("Максимальная температура: " + max + " °C" + "\nДата: " + dateMaxTemp);
    	}
	});
}