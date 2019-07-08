function happyHolidays(){
  return "Happy holidays!"
}

function happyHolidaysTo(name){
  console.log(`Happy holidays, ${name}!`)

  happyHolidaysTo(`Jessica`)
}

function happyHolidayTo(holiday, name){
  console.log(`Happy ${holiday}, ${name}!`)

  happyHolidayTo(`Thanksgiving`, `Jessica`)
}
