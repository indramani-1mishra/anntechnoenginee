import axios from "axios";

const AddtoLike = async (id, setdata, data, userid) => {
  try {
    const response = await axios.post(
      `https://technoengnearbackend.onrender.com/api/v1/like/${id}`,
      { user: userid }, // ✅ send as object
      {
        withCredentials: true,
      }
    );

    setdata(response.data);
    console.log("response from like API:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error in AddtoLike:", error);
    throw error;
  }
};

export default AddtoLike;
