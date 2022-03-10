import axios from "axios";
const BASE_URL = "http://localhost:3001/quotes";

//Get all data
export const getData = async (setData) => {
  const config = {
    method: "GET",
    url: `${BASE_URL}`,
    headers: {
      "content-type": "application/json",
    },
  };

  try {
    const res = await axios(config);
    setData(res.data);
  } catch (err) {
    console.log(err.response.message);
  }
};
//Create a data
export const submitData = async (data, setData) => {
  const config = {
    method: "POST",
    url: `${BASE_URL}`,
    headers: {
      "content-type": "application/json",
    },
    data: data,
  };

  try {
    const { data: quotesid } = await axios(config);
    const newInput = await getSingleData(quotesid.id);
    setData((prev) => {
      return [...prev, newInput];
    });
  } catch (err) {
    console.log(err.response);
  }
};

//Delete a data
export const deleteData = async (id, setData) => {
  const decide = window.confirm("Are you sure you want to delete this quote?");

  const config = {
    method: "DELETE",
    url: `${BASE_URL}/${id}`,
    headers: {
      "content-type": "application/json",
    },
  };

  if (decide) {
    try {
      await axios(config);
      setData((prev) => {
        return prev.filter((item) => {
          return item.id !== id;
        });
      });
    } catch (err) {
      console.log(err.response);
    }
  }
};

//Get Single Data
export const getSingleData = async (id) => {
  const config = {
    method: "GET",
    url: `${BASE_URL}/${id}`,
    headers: {
      "content-type": "application/json",
    },
  };

  try {
    const res = await axios(config);
    return res.data;
  } catch (err) {
    console.log(err.response.message);
  }
};

//Edit data
export const editSingleData = async (id, data, navigate) => {
  const config = {
    method: "PATCH",
    url: `${BASE_URL}`,
    headers: {
      "content-type": "application/json",
    },
    data: data,
  };

  try {
    const res = await axios(config);
    console.log(res.data);
  } catch (err) {
    console.log(err.response.message);
  }
};
