function happyHolidays(){
  return "Happy holidays!"
}

function happyHolidaysTo(name){
  return (`Happy holidays, ${name}!`)

  happyHolidaysTo(`Jessica`)
}

function happyHolidayTo(holiday, name){
  return (`Happy ${holiday}, ${name}!`)

  happyHolidayTo(`Thanksgiving`, `Jessica`)
}

function holidayCountdown(days, holiday){
  return (`It's ${days}, ${holiday}!`)

  holidayCountdown(`144`, `Thanksgiving`)
}
