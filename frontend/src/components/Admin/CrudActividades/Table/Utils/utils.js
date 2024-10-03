export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  
  export const formatTime = (timeString) => {
    const time = new Date(`1970-01-01T${timeString}`);
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
  
    hours = hours % 12 || 12;
    const formattedMinutes = String(minutes).padStart(2, "0");
  
    return `${hours}:${formattedMinutes} ${ampm}`;
  };
  