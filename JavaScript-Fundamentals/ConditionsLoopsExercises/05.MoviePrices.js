function printTicketPrice([movieTitle,dayOfWeek]) {
    movieTitle=movieTitle.toLowerCase();
    dayOfWeek=dayOfWeek.toLowerCase();
    let ticketPrice=0;
    if (dayOfWeek=="monday"){
        if(movieTitle=="the godfather"){
            ticketPrice=12;
        }else if(movieTitle=="schindler's list"){
            ticketPrice=8.50;
        }else if(movieTitle=="casablanca"){
            ticketPrice=8;
        }else if (movieTitle=="the wizard of oz"){
            ticketPrice=10;
        }
    }else if(dayOfWeek=="tuesday"){
        if(movieTitle=="the godfather"){
            ticketPrice=10;
        }else if(movieTitle=="schindler's list"){
            ticketPrice=8.50;
        }else if(movieTitle=="casablanca"){
            ticketPrice=8;
        }else if(movieTitle="the wizard of oz"){
            ticketPrice=10;
        }
    }else if(dayOfWeek=="wednesday"){
        if(movieTitle=="the godfather"){
            ticketPrice=15;
        }else if(movieTitle=="schindler's list"){
            ticketPrice=8.50;
        }else if(movieTitle=="casablanca"){
            ticketPrice=8;
        }else if (movieTitle=="the wizard of oz"){
            ticketPrice=10;
        }
    }else if (dayOfWeek=="thursday"){
        if(movieTitle=="the godfather"){
            ticketPrice=12.50;
        }else if(movieTitle=="schindler's list"){
            ticketPrice=8.50;
        }else if(movieTitle=="casablanca"){
            ticketPrice=8;
        }else if (movieTitle=="the wizard of oz"){
            ticketPrice=10;
        }
    }else if(dayOfWeek=="friday"){
        if(movieTitle=="the godfather"){
            ticketPrice=15;
        }else if(movieTitle=="schindler's list"){
            ticketPrice=8.50;
        }else if(movieTitle=="casablanca"){
            ticketPrice=8;
        }else if (movieTitle=="the wizard of oz"){
            ticketPrice=10;
        }
    }else if(dayOfWeek=="saturday"){
        if(movieTitle=="the godfather"){
            ticketPrice=25;
        }else if(movieTitle=="schindler's list"){
            ticketPrice=15;
        }else if(movieTitle=="casablanca"){
            ticketPrice=10;
        }else if (movieTitle=="the wizard of oz"){
            ticketPrice=15;
        }
    }else if(dayOfWeek=="sunday"){
        if(movieTitle=="the godfather"){
            ticketPrice=30;
        }else if(movieTitle=="schindler's list"){
            ticketPrice=15;
        }else if(movieTitle=="casablanca"){
            ticketPrice=10;
        }else if (movieTitle=="the wizard of oz"){
            ticketPrice=15;
        }
    }

    if(ticketPrice==0){
        console.log("error")
    }else {
        console.log(ticketPrice);
    }
}


