import axios from "axios";
import { BASE_URL } from "../constants/urls";
export async function registerAttendee(eventId, attendeeData) {
  //console.log(typeof eventId);
  console.log(attendeeData);
  const url = BASE_URL + `events/${eventId}/registe/`;

  try {
    const response = await axios.post(url, attendeeData);
    return response.data;
  } catch (error) {
    console.log("this is the error:"+error);
    throw error;
  }
}
