export function getDate(date){
    var Formatedate = new Date(date);
    var hour = Formatedate.getHours();
    var time = hour.toString() + ":" + Formatedate.getMinutes().toString(); 
    Formatedate = Formatedate.getDate().toString() + "/" + Formatedate.getMonth().toString() + "/" + Formatedate.getFullYear().toString();
    hour >= 12 ? time = time + "pm" : time = time + "am";
    Formatedate = Formatedate + " " +time;
    return Formatedate;
  }